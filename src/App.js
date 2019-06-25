import React from 'react';
import Header from './components/header/index.js';
//import Main from './pages/main/index.js';
import Routes from './router';
import './style.css';


const App = () =>( 
    <div className="App">
      <Header />
      <Routes />
    </div>
    
);

export default App;
