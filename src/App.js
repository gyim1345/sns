import React from 'react'
import PostPage from './pages/PostPage'
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
  } from 'react-router-dom';

function App() {

    return (
        <Router>
        <PostPage/>
        <h1>hi</h1>
        </Router>
    )

}

export default App;