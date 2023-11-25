import { useState } from "react";

function Setup({ dispatch }) {
  const [name, setName] = useState("");
  const [customImage, setCustomImage] = useState(false);
  const [imageLink, setImageLink] = useState(
    "https://1.bp.blogspot.com/-ZqRV1i42ELM/VJF_J7IvQjI/AAAAAAAApzk/GCpLXcqU6WE/s800/animalface_neko.png"
  );
  return (
    <div className="setup">
      <h1>Pet Simulator</h1>
      <div className="setup-content">
        <label>Name</label>
        <input onChange={(e) => setName(e.target.value)}></input>

        <button className="custom" onClick={() => setCustomImage(!customImage)}>
          {customImage ? "Close" : "Custom Image"}
        </button>

        {customImage && (
          <>
            <label>Image URL</label>
            <input
              onChange={(e) => setImageLink(e.target.value)}
              value={imageLink}
            ></input>
          </>
        )}

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
