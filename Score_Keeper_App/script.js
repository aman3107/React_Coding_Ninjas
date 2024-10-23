"use strict";
const rootElement = ReactDOM.createRoot(document.getElementById("root"));

let score = 0;
let wicket = 0;
let hit = 0;
let inputRef = React.createRef();

// const click = (inc) => {
//   alert("You have pressed 1");
//   score += inc;
// };

// const addOne = () => {
//   score += 1;
//   rootElement.render(<App />);
// };

let ballWiseResult = [];
let ballWiseComment = [];

// const addScore = (num) => {
//   if (wicket < 10) {
//     score += num;
//     ballWiseResult.push(num);
//     rootElement.render(<App />);
//   }
// };

// const addWicket = (wic) => {
//   if (wicket < 10) {
//     wicket += wic;
//     ballWiseResult.push("W");
//     console.log(ballWiseResult);
//     rootElement.render(<App />);
//   }
// };

const addScore = (num) => {
  hit = num;
  rootElement.render(<App />);
};

const addWicket = () => {
  hit = "W";
  rootElement.render(<App />);
};

const ScoreButtons = () => (
  <div className="score">
    <button onClick={() => addScore(0)}>0</button>
    <button onClick={() => addScore(1)}>1</button>
    <button onClick={() => addScore(2)}>2</button>
    <button onClick={() => addScore(3)}>3</button>
    <button onClick={() => addScore(4)}>4</button>
    <button onClick={() => addScore(5)}>5</button>
    <button onClick={() => addScore(6)}>6</button>
    <button onClick={() => addWicket(1)}>wicket</button>
  </div>
);

// const BallWise = () => (
//   <div>
//     {ballWiseResult.map((ball, i) => (
//       <>
//         {i % 6 == 0 ? <br></br> : null}
//         {ball === "W" ? (
//           <>
//             <span className="changeColor">{ball}</span>&nbsp;&nbsp;
//           </>
//         ) : (
//           <>
//             <span>{ball === 0 ? <strong>.</strong> : ball}</span>&nbsp;&nbsp;
//           </>
//         )}
//       </>
//     ))}
//   </div>
// );

const BallWise = () => (
  <>
    {ballWiseResult.map((ball, ind) => (
      <p key={ind}>{ball}</p>
    ))}
  </>
);
const handleEvent = (event) => {
  event.preventDefault();
  ballWiseResult.unshift(
    <span>
      {/* {hit},{inputRef.current.value} */}
      {`${hit},${inputRef.current.value}`}
    </span>
  );
  // ballWiseResult.unshift(hit);
  // ballWiseResult.unshift(inputRef.current.value);

  // ballWiseComment.unshift(inputRef.current.value);
  hit !== "W" ? (score += hit) : (wicket += 1);
  rootElement.render(<App />);
};

const Form = () => (
  <>
    <form onSubmit={handleEvent}>
      <input type="text" value={hit} />
      <input type="text" ref={inputRef} />
      <button>Submit</button>
    </form>
  </>
);

const App = () => (
  <>
    <hr />
    <h1>SCORE KEEPER</h1>
    <h2>
      SCORE: {score}/{wicket}
    </h2>
    <ScoreButtons />
    <br />
    <Form />
    <hr />
    <BallWise />
  </>
);

rootElement.render(<App />);
