// const heading = React.createElement(
//   "h1",
//   { className: "header" },
//   "Hello React"
// );
// ReactDOM.createRoot(document.getElementById("root")).render("heading");

// const image = React.createElement(
//   "img",
//   { src: "https://files.codingninjas.in/coding-ninjas-24647.png" },
//   null
// );
// console.log(image);

/* React with JSX */

// const jsxHeading = (
//   <>
//     <h1>Hello JSX</h1>
//     <p>This is a JSX syntax</p>
//   </>
// );

// const prac = (
//   <>
//     <h1>About React</h1>
//     <ul>
//       <li>React is declarative</li>
//       <li>React using Virtual DOM</li>
//       <li>React using Single Page Application</li>
//     </ul>
//   </>
// );
// ReactDOM.createRoot(document.getElementById("root")).render(prac);

/* Components in React */

// function App() {
//   return (
//     <>
//       <h1>Hello JSX</h1>
//       <p>This is a JSX syntax</p>
//     </>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

/* Functional Components */
// function App() {
//   return (
//     <>
//       <h1>React Project</h1>
//       <p>Skills used to make this project</p>
//       <ol>
//         <li>HTML</li>
//         <li>javaScript</li>
//         <li>CSS</li>
//       </ol>
//     </>
//   );
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

/* Functional Components using Arrow Function */

function Name() {
  return <p>My name is JSX</p>;
}

const App = () => (
  <>
    <h1>Arrow Function Component</h1>
    <p>This is a component</p>
    <Name />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
