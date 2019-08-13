//REQUIRED IMPORTS
import React from 'react';
import './App.scss';

//IMPORT COPMONENTS
import CommentListContainer from './components/CommentListContainer/CommentListContainer';

//IMPORT REDUX ELEMENTS

class App extends React.Component {

  render() {
      return (
        <div className="app">
          <CommentListContainer />
        </div>
      );
    }
  }

export default App;





