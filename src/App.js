import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to my fisrt application.</p>
      </header>
    </div>
    /*
    <div className="App">
      <Nav />
      <Main />
      <Footer />
    </div>
    */
  );
};

export default App;
