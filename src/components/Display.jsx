import { useState } from "react";
import Typed from "react-typed";
import Settings from "./Settings";

function Display({ dispatch, happyAnimation, animation }) {
  const [firstString, setFirstString] = useState("");
  const [secondString, setSecondString] = useState("");
  const [key, setKey] = useState(0);

  function handleDelete() {
    setFirstString("");
    setSecondString("");
  }

  function getYesOrNo() {
    const x = Math.random();
    return x > 0.95 ? "Maybe." : x > 0.5 ? "Yes." : "No.";
  }

  function getFoodRate() {
    const x = Math.random();
    if (x > 0.95) {
      happyAnimation(1000);
      return "OMG! IT'S THE BEST FOOD I'VE EVER HAD!!";
    } else if (x > 0.8) {
      happyAnimation(1000);
      return "It's really good!";
    } else if (x > 0.5) {
      return "It's tasty.";
    } else if (x > 0.2) {
      return "Not bad.";
    } else {
      return "It tastes really bad...";
    }
  }

  function handleYesOrNo() {
    handleDelete();
    setSecondString(getYesOrNo());
    setKey(key + 1);
  }

  function handleFeed() {
    handleDelete();
    setFirstString("Hmmmm......");
    setSecondString(getFoodRate());
    setKey(key + 1);
  }

  const fetchData = async () => {
    const url = `https://official-joke-api.appspot.com/jokes/random`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "joke",
        payload: { setup: data.setup, punchline: data.punchline },
      });
      setFirstString(data.setup);
      setSecondString(data.punchline);
      console.log(data);
      setKey(key + 1);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="display" key={key}>
      <p className="message">
        <Typed
          strings={[firstString, secondString]}
          typeSpeed={50}
          backSpeed={20}
          showCursor={false}
          startDelay={100}
        />
      </p>
      <div className="settings-wrapper">
        <Settings dispatch={dispatch} animation={animation} />
      </div>
      <button className="btn" onClick={fetchData}>
        ASK FOR JOKE
      </button>
      <button className="btn" onClick={handleYesOrNo}>
        YES or NO
      </button>
      <button className="btn" onClick={handleFeed}>
        FEED
      </button>
    </div>
  );
}

export default Display;
