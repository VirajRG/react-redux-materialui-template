import React from 'react';
import { Router, Route } from "react-router-dom";
import Button from '@material-ui/core/Button';

import history from './history';

function App() {
  return (
    <Router history={history}>
      <div>
        {/* <Route exact path="/" component={LoginContainer} />
          <Route exact path="/home" component={HomeContainer} />
          <Route exact path="/snippets" component={SnippetsContainer} /> */}
      </div>
    </Router>
  );
}

export default App;