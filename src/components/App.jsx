import { useState, useReducer } from "react";
import Setup from "./Setup";
import Profile from "./Profile";
import Display from "./Display";

const initialState = {
  name: "",
  imageLink: "",
  isActive: false,
  setup: "",
  punchline: "",
  animation: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      if (action.payload.name === "") {
        alert("Please set name and URL for image");
        return {
          ...state,
        };
      }
      return {
        ...state,
        name: action.payload.name,
        imageLink: action.payload.imageLink,
        isActive: true,
      };
    case "joke":
      console.log("joke");
      return {
        ...state,
        setup: action.payload.setup,
        punchline: action.payload.punchline,
      };
    case "changeAnimation":
      return {
        ...state,
        animation: !state.animation,
      };
    case "quit":
      return {
        initialState,
      };
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [{ name, imageLink, isActive, animation }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const [isHappy, setIsHappy] = useState(false);
  function happyAnimation(duration) {
    setTimeout(() => {
      setIsHappy(true);
      setTimeout(() => {
        setIsHappy(false);
      }, duration);
    }, 2200);
  }

  return (
    <div className="app">
      {!isActive ? (
        <Setup dispatch={dispatch} />
      ) : (
        <>
          <Profile
            name={name}
            imageLink={imageLink}
            isHappy={isHappy}
            animation={animation}
          />
          <Display
            dispatch={dispatch}
            happyAnimation={happyAnimation}
            animation={animation}
          />
        </>
      )}
    </div>
  );
}

export default App;
