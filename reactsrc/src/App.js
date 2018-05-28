import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Frontpage from './components/Frontpage.js';
import CreateTodoPage from './components/CreateTodoPage.js';
import ViewTodoPage from './components/ViewTodoPage.js';
import EditTodoPage from './components/EditTodoPage.js';

class App extends Component {
  render() {
    return (
		<Router>
			<div>
				<Route exact path="/" component={Frontpage}/>
				<Route exact path="/createtodo" component={CreateTodoPage}/>
				<Route exact path="/viewtodo/:id" component={ViewTodoPage}/>
				<Route exact path="/edittodo/:id" component={EditTodoPage}/>
			</div>
		</Router>
	);
  }
}

export default App;