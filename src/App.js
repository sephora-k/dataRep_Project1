import React, { Component } from 'react';
import logo from './cd2.png';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import { Genre } from './components/genre';
import { Library } from './components/library';
import { Search } from './components/search';
import { Article } from './components/article';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Edit } from './components/edit';

class App extends Component {
  render() {
    return (

      <Router>
      <div className="App">

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">The Archive</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/genre">Genre</Nav.Link>
            <Nav.Link href="/library">Library</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/article">Article</Nav.Link>
          </Nav>
        </Navbar>

        <br/>

        <Switch>
          <Route path='/' component={Content} exact/>
          <Route path='/genre' component={Genre} exact/>
          <Route path='/library' component={Library} exact/>
          <Route path='/search' component={Search} exact/>
          <Route path='/article' component={Article} exact/>
          <Route path='/edit/:id' component={Edit}></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
