import TextField from "@material-ui/core/TextField/TextField";
import {Field, reduxForm} from 'redux-form'
import React from "react";


const AdaptedTextField = ({input: {value, onChange}, ...custom}) => (
    <TextField
        value={value}
        onChange={onChange}
        {...custom}
    />
);

const Search = () => (
    <form>
        <Field component={AdaptedTextField} name="page" label="Страница" margin="normal"/>
        <Field component={AdaptedTextField} name="articlesPerPage" label="Новостей на странице" margin="normal"/>
    </form>
);

const initialValues = {
    page: 0,
    articlesPerPage: 24
};

export default reduxForm({form: 'search', initialValues})(Search);
