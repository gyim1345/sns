/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import PostPage from './pages/PostPage';

function App() {
  return (
    <Router>
      <PostPage />
      <h1>HELLO</h1>
    </Router>
  );
}

export default App;
