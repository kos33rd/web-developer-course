import React from "react";
import ReactDOM from "react-dom";
import axios from "axios"

const Article = ({ data }) => (
    <span>{data.title}</span>
)


class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isLoading: false,
            isFailed: false,
            documents: {}
        }
    }

    componentDidMount () {

    }

    onClick = () => {
        this.setState({
            isLoading: true,
            isFailed: false
        });
        axios.get('https://meduza.io/api/v3/search?chrono=news&locale=ru&page=0&per_page=24')
            .then((response) => {
                this.setState({
                    documents: response.data.documents,
                    isLoading: false
                })
            })
            .catch((e) => {
                this.setState({
                    isFailed: true,
                    isLoading: false
                })
            })
    }

    render () {
        return (
            <div>
                <h1 onClick={this.onClick}>
                    {this.props.title}
                </h1>
                { this.state.isLoading && <div>Подождите, идет загрузка</div>}
                { this.state.isFailed && <div>Ой-ой :(</div>}
                <ul>
                    {Object.keys(this.state.documents).map((key) => (
                        <li key={key}>
                            <Article data={this.state.documents[key]} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}


ReactDOM.render(
  <App title="Click me" />,
  document.getElementById('app')
);
