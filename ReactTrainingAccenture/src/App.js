import "./App.css";
import PropsDemo1 from "./Day10/PropsDemo1.js";
import Mobile from "./Day10/Mobile.js";
import Jsx from "./Day10/JSX.js";
import JSXDemo from "./Day10/JSXDemo.js";
import PropsDemo2 from "./Day10/PropsDemo2.js";
import StateDemo from "./Day10/StateDemo.js";
import ConstructorDemo from "./Day10/ConstructorDemo.js";
import GetDerivedState from "./Day10/GetDerivedState.js";
import ShouldComponentUpdateDemo from "./Day10/ShouldComponentUpdateDemo.js";
import GetSnapShotBeforeUpdateDemo from "./Day10/GetSnapShotBeforeUpdateDemo.js";
import ComponentDidMountDemo from "./Day10/ComponentDidMountDemo.js";
import ChildDemo from "./Day10/ChildDemo.js";
import WillUnMount from "./Day10/WillUnmount.js";
import Student from "./Day11/Student.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
      </header>
      <JSXDemo />
      <Jsx />
      <Mobile />
      <PropsDemo1 Pername="Vikram" />
      <PropsDemo2 name="Vikram" age={29} city="Kolkata" />
      <StateDemo />
      <ConstructorDemo />
      <GetDerivedState fcolor="Blue" />
      <ShouldComponentUpdateDemo />
      <GetSnapShotBeforeUpdateDemo />
      <ComponentDidMountDemo />
      <ChildDemo />
      <WillUnMount />
      <Student name="Vikramaditya" rollNumber={11} marks={80} />
    </div>
  );
}

export default App;
