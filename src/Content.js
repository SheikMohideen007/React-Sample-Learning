import React from "react";

function Content() {
  function greetings() {
    let arr = ["Hi", "Hello", "Welcome"];
    const random = Math.floor(Math.random() * 3);

    return arr[random];
  }
  function handleClick() {
    console.log("Just Clicked Event Happened...");
  }
  function handleClick2(name) {
    alert(`Thanks For Clicking ${name}`);
    // console.log(`Thanks For Clicking ${name}`);
  }

  const buttonStyling = {
    backgroundColor: "red",
    color: "white",
    border: "none",
    outline: "none",
    borderRadius: "20px",
    padding: "10px",
    margin: "10px",
  };
  return (
    <div>
      <p>Content is {greetings()}</p>
      <button onClick={() => handleClick2("Sheik")} style={buttonStyling}>
        Click Me Bro
      </button>
    </div>
  );
}

export default Content;
