import { useRef } from "react";

function App() {
  let foucsRef = useRef();

  function handleFocus() {
    foucsRef.current.focus();
  }

  return (
    <div>
      <input ref={foucsRef} type="text" />
      <button onClick={handleFocus}>Submit</button>
    </div>
  );
}

export default App;

// import { useRef, useState } from "react";

// function App() {
//   let [count, setCount] = useState(0);
//   let countRef = useRef();

//   function startCount() {
//     if (countRef.current == null) {
//       countRef.current = setInterval(function () {
//         setCount((count) => count + 1);
//       }, 1000);
//     }
//   }

//   function stopCount() {
//     clearInterval(countRef.current);
//     countRef.current = null;
//   }

//   return (
//     <div>
//       {count}
//       <br />
//       <button onClick={startCount}>Start</button>
//       <button onClick={stopCount}>Stop</button>
//     </div>
//   );
// }

// export default App;
