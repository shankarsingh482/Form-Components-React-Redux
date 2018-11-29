import React, { Component } from 'react';
import './App.css';
import  { Provider } from 'react-redux';
import Form from './Components/Form/form'
import store from './formStore';

  
class App extends Component {

  render() {
    return (
     <div>
       <Provider store={store}><Form/></Provider> 
     </div>
    );
  }
}

export default App;
