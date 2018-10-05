import TextField from "@material-ui/core/TextField/TextField";
import {Field, reduxForm} from 'redux-form'
import React from "react";


class Search extends React.Component {

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
                <Field component={TextField} name="page" label="Страница" margin="normal"/>
                <Field component={TextField} name="articlesPerPage" label="Новостей на странице" margin="normal"/>
            </form>
        );
    }
}

const initialValues = {
    page: 0,
    articlesPerPage: 24
};

export default reduxForm({initialValues})(Search);
