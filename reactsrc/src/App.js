import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Frontpage from './components/Frontpage.js';
import CreateTodoPage from './components/CreateTodoPage.js';
import ViewTodoPage from './components/ViewTodoPage.js';
import EditTodoPage from './components/EditTodoPage.js';
import './App.css';

class App extends Component {
  render() {
    return ( 
		<Router>
			<div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" activeclassname="active" to="/">Todo List</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" activeclassname="active" to="/createtodo">Create Todo</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <Route exact path="/" component={Frontpage}/>
                    <Route exact path="/createtodo" component={CreateTodoPage}/>
                    <Route exact path="/viewtodo/:id" component={ViewTodoPage}/>
                    <Route exact path="/edittodo/:id" component={EditTodoPage}/>
                </div>
			</div>
		</Router>
	);
  }
}

export default App;