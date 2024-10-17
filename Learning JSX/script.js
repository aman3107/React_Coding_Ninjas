"use strict";

const sum = () => {
  const a = 10;
  const b = 20;
  const c = a + b;
  return c;
};

const header = <h2>JSX Expression</h2>;
const name = "Aman";
const age = 10;
const demo = null;
let undef;
const bool = true;
const App = () => (
  <>
    <h1>Hello World {name}</h1>
    {header}
    <p>Your age is {age}</p>
    <p>Null Value: {demo}</p>
    <p>Undefined Value: {undef}</p>
    <p>Boolean Value: {bool}</p>
    {sum()}
  </>
);
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
