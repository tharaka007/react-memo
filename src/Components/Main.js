import { useState, useRef, memo } from "react";

const NoPropsComponent = memo(() => {
  return <p>{new Date().toString()}</p>;
});

function Main() {
  const [count, setCount] = useState(1);
  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + 1;
  console.log(renderCounter);
  return (
    <>
      <NoPropsComponent />
      <div>
        <ul>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          clicks {count}
        </button>
        <h1>Renders: {renderCounter.current}</h1>
      </div>
    </>
  );
}

export default Main;
