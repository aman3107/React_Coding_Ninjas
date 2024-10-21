"use strict";
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
// const sum = () => {
//   const a = 10;
//   const b = 20;
//   const c = a + b;
//   return c;
// };

// const header = <h2>JSX Expression</h2>;
// const name = "Aman";
// const age = 10;
// const demo = null;
// let undef;
// const bool = true;
// const App = () => (
//   <>
//     <h1>Hello World {name}</h1>
//     {header}
//     <p>Your age is {age}</p>
//     <p>Null Value: {demo}</p>
//     <p>Undefined Value: {undef}</p>
//     <p>Boolean Value: {bool}</p>
//     {sum()}
//   </>
// );
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

/* Rendering Arrays and Objects */

// const arr = [1, 2, 3, 4, 5];
// const obj = {
//   name: "Shakira",
//   age: 40,
// };
// const keys1 = Object.keys(obj);
// console.log(keys1);

// const App = () => (
//   <>
//     <h1>JSX</h1>
//     {arr.map((val, i) => (
//       <p>This is {i} index</p>
//     ))}
//     {arr
//       .filter((val) => val % 2)
//       .map((val) => (
//         <p>{val}</p>
//       ))}
//     {keys1.map((val, i) => (
//       <p>This is {obj[val]}</p>
//     ))}
//   </>
// );

// const rootElement = ReactDOM.createRoot(document.getElementById("root"));
// rootElement.render(<App />);

// const carsArray = ["BMW", "AUDI", "TATA NEXON", "TATA PUNCH", "MARUTI"];
// const Cars = () => (
//   <>
//     <h1>List of Cars</h1>
//     <ul>
//       {carsArray.map((car, i) => (
//         <li key={i}>{car}</li>
//       ))}
//     </ul>
//   </>
// );
// rootElement.render(<Cars />);

/* Students Info Table */

// const studentsArr = [
//   { name: "std1", age: 10, marks: 20 },
//   { name: "std2", age: 12, marks: 22 },
//   { name: "std3", age: 14, marks: 24 },
// ];

// const Student = () => (
//   <>
//     <h1>Students Details</h1>
//     <table border="2px">
//       <thead>
//         <th>Student Name</th>
//         <th>Student Age</th>
//         <th>Student Marks</th>
//       </thead>
//       <tbody>
//         {studentsArr.map((student, i) => (
//           <tr>
//             <td>{student.name}</td>
//             <td>{student.age}</td>
//             <td>{student.marks}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </>
// );

// rootElement.render(<Student />);

/* Inventory */
// const SoldItems = () => {
//   const itemsSold = [
//     { id: 1, name: "iPhone 14", price: 1200, qty: 22 },
//     { id: 2, name: "iPad Pro", price: 800, qty: 18 },
//     { id: 3, name: "Macbook Air", price: 1500, qty: 7 },
//     { id: 4, name: "Samsung S23", price: 1100, qty: 16 },
//     { id: 5, name: "Dell Inspiron 5590", price: 1200, qty: 5 },
//   ];

//   return (
//     <>
//       <h1>Record of sold items</h1>
//       <table border="1px">
//         <thead>
//           <th>Id</th>
//           <th>Name</th>
//           <th>Selling price</th>
//           <th>Quantity</th>
//         </thead>
//         <tbody>
//           {itemsSold.map((item, i) => (
//             <tr key={i}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.price}</td>
//               <td>{item.qty}</td>
//             </tr>
//           ))}
//         </tbody>
//         <tfoot>
//           <td>Total Revenue</td>
//           <td colspan="4">$5800</td>
//         </tfoot>
//       </table>
//     </>
//   );
// };

// const rootElement = ReactDOM.createRoot(document.getElementById("root"));
// rootElement.render(<App />);

/* Rendering Components Based on Condition */
// const App = () => {
//   let showStudent = true;
//   if (showStudent) {
//     return <Student />;
//   }
//   return <SoldItems />;
// };

// rootElement.render(<App />);

/* Rendering Components Based on Ternary Operator */
// const loggedIn = true;
// const Login = () => (
//   <>
//     <h3>Login to Continue</h3>
//     <form>
//       <input placeholder="email" />
//       <input placeholder="password" />
//       <button>Login</button>
//     </form>
//   </>
// );

// const Home = () => <h1>Hello User!</h1>;
// const App = () => {
//   return (
//     <>
//       {/* <h1>Hello {loggedIn ? "Alex" : "User"}!</h1> */}
//       {loggedIn ? <Login /> : <Home />}
//     </>
//   );
// };

// rootElement.render(<App />);

/* Conditional Rendering using AND operator */
// const App = () => {
//   const loggedIn = false;
//   return (
//     <>
//       <h1>Hello {loggedIn ? "Alex" : "User"}!</h1>
//       {loggedIn && <p>Welcome to Portal </p>}
//     </>
//   );
// };
// rootElement.render(<App />);

/* Conditional Rendering using OR Operator */
const App = () => {
  const loggedIn = true;
  const firstName = "Alexa";
  const lastName = "Johnson";
  return (
    <>
      <h1>Hello {loggedIn ? lastName || firstName : "User"}!</h1>
      {loggedIn && <p>Welcome to Portal </p>}
    </>
  );
};
rootElement.render(<App />);
