import React, { useState } from "react";

// class App extends Component {

//     render() {
//         return (
//             <div>
//                 <h1>Welcome to React</h1>
//             </div>
//         )
//     }
// }

const App = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    let temp = count;
    setCount((temp += 1));
  }
  return (
    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
};

export default App;
