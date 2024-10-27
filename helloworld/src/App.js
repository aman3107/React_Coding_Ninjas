import logo from "./logo.svg";
import "./App.css";

/* Export Individually */

// export let a = 10;
// export let arr = [1, 2, 3, 4, 5, 6];
let a = 10;
let arr = [1, 2, 3, 4, 5, 6];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Welcome to React Course on Coding Ninjas! Aman</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// export default App;
/* Export at the bottom */
export { a, App, arr };
