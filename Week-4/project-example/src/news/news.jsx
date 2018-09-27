import React from "react"
import {Article} from "./article"
import axios from "axios"
import Button from "@material-ui/core/Button/Button"


export class News extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      isFailed: false,
      documents: []
    }
  }

  onClick = () => {
    this.setState({
      isLoading: true,
      isFailed: false
    });
    axios.get('https://meduza.io/api/v3/search?chrono=news&locale=ru&page=0&per_page=24')
      .then((response) => {
        this.setState({
          documents: Object.values(response.data.documents) || [],
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

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.onClick} variant="contained" color="primary">
          Загрузить новости
        </Button>

        <h1 onClick={this.onClick}>
          Click to load news feed
        </h1>
        {this.state.isLoading && <div>Подождите, идет загрузка</div>}
        {this.state.isFailed && <div>Ой-ой :(</div>}
        <ul>
          {this.state.documents.map((doc) => (
            <li key={doc.title}>
              <h3 onClick={ (doc) => window.open(doc.url)}>{doc.title}</h3>
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}
