import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "😀": "smiling face",
  "🤩": "star struck",
  "😋": "yummy face",
  "🤐": "zipped mouth",
  "🥵": "hot face",
  "🥶": "cold face",
  "🥳": "party face",
  "🤑": "money face ",
  "🤗": "hug",
  "🤔": "thinking face"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setmeaning] = useState("");

  function emojiInputHandler() {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "oops..!! failed to recognice this emoji";
    }
    setmeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>emoji's</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>

      <h3>emoji's we know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ padding: "1rem", fontSize: "1.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
