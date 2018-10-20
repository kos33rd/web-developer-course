import React from 'react'
import TextField from '@material-ui/core/TextField/TextField'
import { reduxForm, Field } from 'redux-form'

const ConnectedTextField = (props) => {
  const value = props.input.value;
  const onChange = props.input.onChange;
  return (
    <TextField
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <Field
          name="pageNumber"
          component={ConnectedTextField}
          label="Страница"
          margin="normal"
        />
      </form>
    )
  }
}

export const UprgadedSearchBar = reduxForm({
  form: 'searchForm'
})(SearchBar)
