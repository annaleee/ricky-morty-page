import './App.css';
import React from 'react';
import Content from './component/Content';
import {useRoutes} from 'react-router-dom';
import routes from './router/index'

function App() {
  const element = useRoutes(routes);
  return (
      <div className="App">
      <div className="header__title">
        Rick and Morty Characters
      </div>
      {element}
    </div>
    
  );
}

export default App;
