import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom'; //you can use Link or NavLink, but Navlink provide you some extra feature

//Components
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_item';
import NotFound from './components/404';

class App extends Component {
    render(){
        return(
            <div className="app">
                <h1>Home</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <div>

            <header> 
                <Link to="/">Home</Link> <br />
                <Link to="/posts">Posts</Link> <br />
                <Link to="/profile">Profile</Link> <br />
                <hr /> 
            </header> 

            <Switch>
                <Route  path="/posts/:id" component={PostItem}></Route>
                <Route  path="/profile" component={Profile}></Route>
                <Route  path="/posts" component={Posts}></Route>
                <Route  exact path="/" component={App}></Route>
                <Route  path="*" component={NotFound}></Route>
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'))