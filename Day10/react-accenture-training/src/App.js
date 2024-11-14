import "./App.css";
import PropsDemo1 from "./PropsDemo1.js";
import Mobile from "./Mobile.js";
import Jsx from "./JSX.js";
import Jsx_demo from "./JSXDemo.js";
import PropsDemo2 from "./PropsDemo2.js";
import StateDemo from "./StateDemo.js";
import ConstructorDemo from "./ConstructorDemo.js";
import GetDerivedState from "./GetDerivedState.js";
import ShouldComponentUpdateDemo from "./ShouldComponentUpdateDemo.js";
import GetSnapShotBeforeUpdateDemo from "./GetSnapShotBeforeUpdateDemo.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
      </header>
      <Jsx_demo />
      <Jsx />
      <Mobile />
      <PropsDemo1 Pername="Vikram" />
      <PropsDemo2 name="Vikram" age={29} city="Kolkata" />
      <StateDemo />
      <ConstructorDemo />
      <GetDerivedState fcolor="Blue" />
      <ShouldComponentUpdateDemo />
      <GetSnapShotBeforeUpdateDemo />
    </div>
  );
}

export default App;
