import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Content from "./Content";

function App() {
  function greetings() {
    let arr = ["Hi", "Hello", "Welcome"];
    const random = Math.floor(Math.random() * 3);

    return arr[random];
  }

  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default App;
