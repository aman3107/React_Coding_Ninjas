"use strict";
const handleEvent = (event) => {
  event.preventDefault();
  const type = event.type;
  console.log(type);
};

const Form = () => (
  <>
    <form onSubmit={handleEvent}>
      <input placeholder="what's on your mind" />
      <button>Click Me.</button>
    </form>
  </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<Form />);
