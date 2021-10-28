import Counter from "./components/Counter";
import MathButton from "./components/MathButton";
import Posts from "./components/Posts";

function App() {
  const mathFunction = (a: number, b: number, text: string): string => {
    switch (text) {
      case "+":
        return `Answer is ${a + b}`;
      case "-":
        return `Answer is ${a - b}`;
      default:
        return "Error";
    }
  };
  return (
    <div>
      <h1>Wow</h1>
      {/* <Counter /> */}
      {/* <Posts /> */}
      <div style={{ padding: "200px" }}>
        <MathButton action={mathFunction} text="+" numbers={[5, 6]} />
        <MathButton action={mathFunction} text="-" numbers={[10, 6]} />
      </div>
    </div>
  );
}

export default App;
