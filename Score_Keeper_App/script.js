"use strict";
const rootElement = ReactDOM.createRoot(document.getElementById("root"));

let score = 0;
let wicket = 0;

// const click = (inc) => {
//   alert("You have pressed 1");
//   score += inc;
// };

// const addOne = () => {
//   score += 1;
//   rootElement.render(<App />);
// };

const ballWiseResult = [];

const addScore = (num) => {
  if (wicket < 10) {
    score += num;
    ballWiseResult.push(num);
    console.log(ballWiseResult);
    rootElement.render(<App />);
  }
};

const addWicket = (wic) => {
  if (wicket < 10) {
    wicket += wic;
    ballWiseResult.push("W");
    console.log(ballWiseResult);
    rootElement.render(<App />);
  }
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

const App = () => (
  <>
    <h1>SCORE KEEPER</h1>
    <h2>
      SCORE: {score}/{wicket}
    </h2>
    <ScoreButtons />
  </>
);

rootElement.render(<App />);
