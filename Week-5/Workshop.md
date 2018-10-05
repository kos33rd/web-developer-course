## Basic styling with UI Kit

```javascript
import React from "react"
import AppBar from "@material-ui/core/AppBar/AppBar";
import Button from '@material-ui/core/Button';
import {Link, Route} from "react-router-dom";

import {About} from "./about/about";
import ConnectedNews from "./news/news";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";

export const Layout = ({match}) => (
    <main>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit" style={{flexGrow: 1}}>
                    Project-example
                </Typography>
                <Button variant="contained" color="secondary" component={Link} to="/about">
                    О проекте
                </Button>
                <Button variant="contained" color="secondary" component={Link} to="/news">
                    Новости
                </Button>
            </Toolbar>
        </AppBar>
        <Route path={`${match.url}about`} component={About}/>
        <Route path={`${match.url}news`} component={ConnectedNews}/>
    </main>
)
```

```javascript
const App = () => (
    <Provider store={store}>
            <Router>
                <Route path="/" component={Layout} />
            </Router>
    </Provider>
)
```


## Redux-devtools-extension

`npm i redux-devtools-extension`

```javascript
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import {reducer} from "./reducer";

export const store = createStore(reducer, composeWithDevTools());
```

Download browser extension:
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ru



## Unify action types with constants

```javascript
export const TYPES = {
        SELECT_ARTICLE: 'SELECT_ARTICLE'
};

```



## Async actions with redux

> New action creator for news fetch:
```javascript
export const loadNews = () => {
    return {
        type: TYPES.LOAD_NEWS
    }
};
```

> Connect it to our News component:
```javascript
const mapDispatchToProps = (dispatch) => ({
  selectArticle: (articleText) => dispatch(selectArticle(articleText)),
  loadNews: () => dispatch(loadNews())
});
```

What's now? How to make an async request within redux and save receided data in store?

We could achieve this in our reducer or in action creator function.
Redux ideology tells us that reducer is a pure function with no side effects. So let's try to implement asynchronous request in our `loadNews` action.


At first our action creators was just a functions that receives some parameters and returns `action` object with `type` key and payload for our reducer with `dispatch` method in our components.
Now we need to upgrade our action with inversion of control pattern - we need to put `dispatch` method in our action to make possible firing actions at any moment we need (asynchronously).

```javascript
// old mapDispatchToProps:
loadNews: () => dispatch(loadNews())

// new mapDispatchToProps:
loadNews: () => loadNews(dispatch)
```

Now we have a `dispatch` method inside our action creator:

```javascript
// We can call more nested actions from our initial action with dispatch
export const loadNews = (dispatch) => {
    console.log('Dispatch: ', dispatch);
    return {
        type: TYPES.LOAD_NEWS
    }
};
```

Let's move our AJAX request into action creator:
```javascript
export const loadNews = (dispatch) => {
    axios.get('https://meduza.io/api/v3/search?chrono=news&locale=ru&page=0&per_page=24')
        .then((response) => {

            // Dispatching an action only when request complete
            dispatch({
                type: TYPES.LOAD_NEWS,
                data: response.data
            })
        })
        .catch((e) => {
        });
};
```

We have no access to `setState` method anymore (we are outside of any Component). But now we can use `dispatch` to pass our data to redux store:

```
const initialState = {
    article: void 0,
    news: []
};

export const reducer = (prevState = initialState, action) => {
    const newState = {...prevState};
    switch (action.type) {
        case TYPES.SELECT_ARTICLE:
            return {...newState, article: action.article};

        case TYPES.LOAD_NEWS:
            // reacting to data fetch and saving data in store
            return {...newState, news: Object.values(action.data.documents)}
    }

    return newState
};
```


Connect our new store data to `News` component:

```javascript
class News extends React.Component {
  ...

  render() {
    return (
      <ul>
        {this.props.news.map((doc) => (
          <li key={doc.title}>
            <h3 onClick={ () => this.props.selectArticle(doc.title)}>{doc.title}</h3>
          </li>
        ))}
      </ul>
    )
  }
}


const mapStateToProps = (state) => ({
    selectedArticle: state.article,
    news: state.news
});


const mapDispatchToProps = (dispatch) => ({
    selectArticle: (articleText) => dispatch(selectArticle(articleText)),
    loadNews: () => loadNews(dispatch)
});

const ConnectedNews = connect(mapStateToProps, mapDispatchToProps)(News);

```


Like with ajax call inside our News component handlers we have to keep in mind about all application states during async request.


Action creator:

```javascript
export const loadNews = (dispatch) => {

    dispatch({type: TYPES.LOAD_NEWS_STARTED});

    axios.get('https://meduza.io/api/v3/search?chrono=news&locale=ru&page=0&per_page=24')
        .then((response) => {

            // Dispatching an action only when request complete
            dispatch({
                type: TYPES.LOAD_NEWS,
                data: response.data
            })
        })
        .catch((e) => {
            dispatch({type: TYPES.LOAD_NEWS_FAILED, error: e});
        });
};
```

Reducer:
```javascript
const initialState = {
    article: void 0,
    news: [],
    newsIsLoading: false,
    newsLoadingFailed: false
};

export const reducer = (prevState = initialState, action) => {
    const newState = {...prevState};
    switch (action.type) {
        case TYPES.SELECT_ARTICLE:
            return {...newState, article: action.article};

        case TYPES.LOAD_NEWS_STARTED:
            return {...newState,
                newsIsLoading: true,
                newsLoadingFailed: false
            };

        case TYPES.LOAD_NEWS:
            return {...newState,
                news: Object.values(action.data.documents),
                newsIsLoading: false,
                newsLoadingFailed: false
            };

        case TYPES.LOAD_NEWS_FAILED:
            return {...newState,
                newsIsLoading: false,
                newsLoadingFailed: true
            };
    }

    return newState
};
```


`News` component:
```javascript

class News extends React.Component {

  onClick = () => {
    this.props.loadNews();
  };

  render() {
    return (
      <React.Fragment>
          <h2>{this.props.selectedArticle}</h2>
        <Button onClick={this.onClick} variant="contained" color="primary">
          Загрузить новости
        </Button>
        {this.props.newsIsLoading && <div>Подождите, идет загрузка</div>}
        {this.props.newsLoadingFailed && <div>Ой-ой :(</div>}
        <ul>
          {this.props.news.map((doc) => (
            <li key={doc.title}>
              <h3 onClick={ () => this.props.selectArticle(doc.title)}>{doc.title}</h3>
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
    selectedArticle: state.article,
    news: state.news,
    newsIsLoading: state.newsIsLoading,
    newsLoadingFailed: state.newsLoadingFailed
});

const mapDispatchToProps = (dispatch) => ({
    selectArticle: (articleText) => dispatch(selectArticle(articleText)),
    loadNews: () => loadNews(dispatch)
});

const ConnectedNews = connect(mapStateToProps, mapDispatchToProps)(News);

```


## Forms 

Let's add some user input in our application:

```javascript

export class Search extends React.Component {

    state = {
        page: 0,
        articlesPerPage: 24
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <form>
                <TextField
                    label="Страница"
                    value={this.state.page}
                    onChange={this.handleChange('page')}
                    margin="normal"
                />
                <TextField
                    label="Новостей на странице"
                    value={this.state.articlesPerPage}
                    onChange={this.handleChange('articlesPerPage')}
                    margin="normal"
                />
            </form>
        );
    }
}
```


Now we have to connect our form values with ajax request and pass field values to it as a GET params.

Initial API request:
`https://meduza.io/api/v3/search?chrono=news&locale=ru&page=0&per_page=24`

To make form-to-store mapping easier we could use a `redux-form` library:

`npm i redux-form`

```
<form>
    <Field component={TextField} name="page" label="Страница" margin="normal"/>
    <Field component={TextField} name="articlesPerPage" label="Новостей на странице" margin="normal"/>
</form>
    
const initialValues = {
    page: 0,
    articlesPerPage: 24
};

export default reduxForm({initialValues})(Search);

```

Now form is rendered, but no initial values in fields and no binding with store. What's whrong?

Problem is: Redux-form's `<Field/>` sends to out component values and handlers as a special props. We must utilize this props in our component, but components from `material-ui` have different API, so we need to make an adapter to transform reux-form API props to material-ui format. 
Here is a HOC for this:

```javascript
const AdaptedTextField = ({input: {value, onChange}, ...custom}) => (
    <TextField
        value={value}
        onChange={onChange}
        {...custom}
    />
);
```

Redux-form's `<Field />` passing two high-level props to our component: `imput` and `meta`. Input contains data and handlers for two-way field manipulations like set value of the field with `input.value` and handling field user input with `input.onChange` handler. `meta` object contains some field internal state flags such as `touched`, `active` and etc.

API on redux-form's `Field` could be found here: https://redux-form.com/7.4.2/docs/api/field.md/

After our modifications we could see that when we typing letters in our inputs, redux dev tools shows us actions, firing by `redux-form` (like `@@redux-form/CHANGE`. But out application store still without changes.

That's because we forgot one last step: to connect redux-rorm's reducers to our store. Let's do this:

```javascript
import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';

import {reducer as formReducer} from 'redux-form'
import {reducer as appReducer} from "./reducer";

const reducer = combineReducers({
    app: appReducer,
    form: formReducer
});

export const store = createStore(reducer, composeWithDevTools());
```


Finally - fully functional form with store connection!


Now we can use our stored data to inject params into out AJAX request url:










