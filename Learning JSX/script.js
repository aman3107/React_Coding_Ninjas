"use strict";

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

const studentsArr = [
  { name: "std1", age: "10", marks: 20 },
  { name: "std2", age: "12", marks: 22 },
  { name: "std3", age: "14", marks: 24 },
];

const Student = () => (
  <>
    <table border="2px">
      <thead>
        <th>Student Name</th>
        <th>Student Age</th>
        <th>Student Marks</th>
      </thead>
      <tbody>
        {studentsArr.map((student, i) => (
          <tr>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.marks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<Student />);
