import React from "react"
import {Article} from "./article"
import axios from "axios"


export class News extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      isFailed: false,
      documents: {}
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

  render() {
    return (
      <React.Fragment>
        <h1 onClick={this.onClick}>
          Click to load news feed
        </h1>
        {this.state.isLoading && <div>Подождите, идет загрузка</div>}
        {this.state.isFailed && <div>Ой-ой :(</div>}
        <ul>
          {Object.keys(this.state.documents).map((key) => (
            <li key={key}>
              <Article data={this.state.documents[key]}/>
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}
