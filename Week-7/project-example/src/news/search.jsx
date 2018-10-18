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
        {...custom}
    />
);

const AdaptedSelect = ({input: {value, onChange}, ...custom}) => (
    <Select
        value={value}
        onChange={onChange}
        input={<Input name="name" id="name-disabled" />}
        {...custom}
    >
        <MenuItem value={'ru'}>Russian</MenuItem>
        <MenuItem value={'en'}>English</MenuItem>
    </Select>
);

const Search = () => (
    <form>
        <Field component={AdaptedTextField} name="page" label="Страница" margin="normal"/>
        <Field component={AdaptedTextField} name="articlesPerPage" label="Новостей на странице" margin="normal"/>
        <Field component={AdaptedSelect} name="lang" label="Язык"/>
    </form>
);

const initialValues = {
    page: 0,
    articlesPerPage: 24
};

export default reduxForm({form: 'search', initialValues})(Search);
