import logo from './logo.svg';
import UserList from "./UserList";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserList />
      </header>
    </div>
  );
}

export default App;
