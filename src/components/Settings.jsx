import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Settings({ dispatch, animation = true }) {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <div className="settings">
      <div className="x-mark-wrapper">
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="2x"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div className="settings-element">
        <label>Animation:</label>
        <input
          className="checkbox1"
          type="checkbox"
          checked={animation}
          onChange={() => dispatch({ type: "changeAnimation" })}
        />
      </div>
      <div className="settings-element">
        <button className="btn" onClick={() => dispatch({ type: "quit" })}>
          QUIT
        </button>
      </div>
    </div>
  ) : (
    <FontAwesomeIcon
      className="gear"
      icon={faGear}
      onClick={() => setIsOpen(!isOpen)}
    />
  );
}

export default Settings;
