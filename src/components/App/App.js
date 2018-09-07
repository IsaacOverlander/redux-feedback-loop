import React, { Component } from 'react';
import './App.css';
import AdminView from '../AdminView/AdminView.js';
import CommentsView from '../CommentsView/CommentsView.js';
import FeelingView from '../FeelingView/FeelingView.js';
import SuccessView from '../SuccessView/SuccessView.js';
import SupportView from '../SupportView/SupportView.js';
import UnderstandingView from '../UnderstandingView/UnderstandingView.js';
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
          {/* routes to each of the views */}
          <Route path="/" component={FeelingView} />
          <Route path="/understanding" component={UnderstandingView} />
          <Route path="/support" component={SupportView} />
          <Route path="/comments" component={CommentsView} />
          <Route path="/success" component={SuccessView} />
          <Route path="/admin" component={AdminView} />
        </div>
      </Router>
    );
  }
}

export default App;
