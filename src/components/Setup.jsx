import { useState } from "react";

function Setup({ dispatch }) {
  const [name, setName] = useState("");
  const [imageLink, setImageLink] = useState("");
  return (
    <div className="setup">
      <h1>Pet Simulator</h1>
      <div className="setup-content">
        <label>Name</label>
        <input onChange={(e) => setName(e.target.value)}></input>
        <label>Image Link</label>
        <input onChange={(e) => setImageLink(e.target.value)}></input>
        <button
          onClick={() =>
            dispatch({ type: "start", payload: { name, imageLink } })
          }
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default Setup;
