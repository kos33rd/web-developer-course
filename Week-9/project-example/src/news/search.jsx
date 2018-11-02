import TextField from "@material-ui/core/TextField/TextField";
import {Field, reduxForm} from 'redux-form'
import React from "react";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";


const AdaptedTextField = ({input: {value, onChange}, ...custom}) => (
    <TextField
        value={value}
        onChange={onChange}
        inputProps={{'aria-label': custom.label}}
        {...custom}
    />
);

const Search = () => (
    <form >
        <Field component={AdaptedTextField} name="page" label="Начать со страницы" margin="normal"/>
    </form>
);

const initialValues = {
    page: 0,
    articlesPerPage: 24
};

export default reduxForm({form: 'search', initialValues})(Search);
