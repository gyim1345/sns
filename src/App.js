import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import PostPage from "./pages/PostPage";
import PostPageDetail from "./pages/PostPageDetail";
import TimeLinePage from "./pages/TimeLinePage";
// import scrollToTopController from "./components/scrollToTopController";
import toTop from "./components/toTop";
import LoginPage from "./pages/LoginPage";
// import { Test } from "./components/Test";
import {getPosts} from './apis/post'


//   const pp = await fetchPosts();

// useEffect(() => {
  //   fetchTasks({ state, setState });
  // }, []);
  
  function App() {
    const [globalState, setGlobalState] = useState([]);
    const [userOfActivePage, setUserOfActivePage] = useState("");
    const [currentUser, setCurrentUser] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [state, setState] = useState();
    //   const pp = await fetchPosts();

    // const getPostingDetaila = async () => {
    //   const a = await getPostsFromId(postingId);
    //  setPostingDetaila(a.posts)
    //  }
 
    //  useEffect(() => {
    //    getPostingDetaila()
    //  }, []);
     
//     const fetchTasks = async ({ state, setState }) => {
//       const posts = await getPosts();
//       console.log(posts)
//         setState(posts)
//     }
// useEffect(() => {
//   fetchTasks({ state, setState })
  
// }, []);
//     console.log(state)
  const changeToCurrentUser = () => {
    setUserOfActivePage(currentUser);
  };

  const toggleLogInStatus = () => {
    return loggedIn === false ? setLoggedIn(true) : setLoggedIn(false);
  };

  const logout = () => {
    if (loggedIn === true) {
      setLoggedIn(false);
      setCurrentUser("");
      setUserOfActivePage("");
      alert("logging out")
    }
  };

  return (
    <Router>
      <Link to="/">
        <button type="button" onClick={logout}>
          {loggedIn ? "logout" : "logIn"}
        </button>
      </Link>
      <Link to={`/${currentUser}/TimeLine`} onClick={toTop}>
        {loggedIn && <button type="button">Home</button>}
      </Link>
      <Link
        to={`/${currentUser}`}
        onClick={() => {
          changeToCurrentUser();
          toTop();
        }}
      >
        {loggedIn && <button type="button">UserHome</button>}
      </Link>
      {/* <Test /> */}
      <Switch>
        <Route exact path="/">
          <LoginPage
            setUserOfActivePage={setUserOfActivePage}
            setCurrentUser={setCurrentUser}
            setLoggedIn={setLoggedIn}
            toggleLogInStatus={toggleLogInStatus}
            loggedIn={loggedIn}
            currentUser={currentUser}
            setGlobalState={setGlobalState}
          />
        </Route>
        <Route exact path={`/${currentUser}/TimeLine`}>
          <TimeLinePage
            globalState={globalState}
            setGlobalState={setGlobalState}
            userOfActivePage={userOfActivePage}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
          />
        </Route>
        <Route exact path={`/${userOfActivePage}`}>
          <PostPage
            globalState={globalState}
            setGlobalState={setGlobalState}
            userOfActivePage={userOfActivePage}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
          />
        </Route>
        <Route path={`/${userOfActivePage}/posting/:postingId`}>
          <PostPageDetail
            globalState={globalState}
            setGlobalState={setGlobalState}
            userOfActivePage={userOfActivePage}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
