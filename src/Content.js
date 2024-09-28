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
    console.log(`Thanks For Clicking ${name}`);
  }
  return (
    <div>
      <p>Content is {greetings()}</p>
      <button onClick={() => handleClick()}>Click Me Bro</button>
    </div>
  );
}

export default Content;
