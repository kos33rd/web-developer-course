import React from "react"
import AppBar from "@material-ui/core/AppBar/AppBar";
import Button from '@material-ui/core/Button';
import {Link, Route} from "react-router-dom";
import { connect } from 'react-redux'

import {About} from "./about/about";
import ConnectedNews from "./news/news";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import {newsCount} from "./data/selectors"

const LayoutComponent = ({match, newsCount}) => (
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
                    {`Новости (${newsCount})`}
                </Button>
            </Toolbar>
        </AppBar>
        <Route path={`${match.url}about`} component={About}/>
        <Route path={`${match.url}news`} component={ConnectedNews}/>
    </main>
);

const mapStateToProps = (state) => ({
  newsCount: newsCount(state)
})

export const Layout = connect(mapStateToProps)(LayoutComponent)
