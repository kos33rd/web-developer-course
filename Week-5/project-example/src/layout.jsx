import {Link, Route} from "react-router-dom";
import {About} from "./about/about";
import ConnectedNews from "./news/news";
import React from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";

const style = {};

export class Layout extends React.Component {

 someMethod = () => {
     console.log('test');
 };

render () {
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="title" color="inherit" className={style.appBarTitle}>
                        News app
                    </Typography>
                    <Button variant="contained" color="secondary" component={Link} to="/about">
                        About3
                    </Button>
                    <span className={style.appBarButtonSpacer}/>
                    <Button variant="contained" color="secondary" component={Link} to="/news">
                        News feed
                    </Button>
                </Toolbar>
            </AppBar>
            <Route path="/about" component={About}/>
            <Route exact path="/news" component={ConnectedNews}/>
        </div>
    )
}

}
