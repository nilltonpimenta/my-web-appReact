import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Componente from './Comp';
import Navbar from './layout/Navbar';
import Home from '../pages/Home';
import Empresa from '../pages/Empresa';
import Contato from '../pages/Contato';

function App() {
  return (

    <div className="App">

      <Router>
        <Navbar />

        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Empresa">
            <Empresa />
          </Route>
          <Route path="/Contato">
            <Contato />
          </Route>

        </Switch>
      </Router>

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <h1> Olá mundo </h1>
        <p className='teste' >
          Edite <code>src/App.js</code> e salve para recarregar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda React
        </a>
        <Componente />
      </header>

    </div>
  );
}

export default App;
