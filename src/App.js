import React, { Component } from 'react';
import Header from './components/Header';
import Main from './pages/main';
import "./styles.css";

const App = () => (  
  <div className="App">
    <Header />
    <Main />
  </div>
);

// OU

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello World!</h1>
//       </div>
//     );
//   }
// }

export default App;
