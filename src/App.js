import HorizontalScroll from "./components/HorizontalScroll";
import ShrinkHeader from "./components/ShrinkHeader";
import StackingCards from "./components/StackingCards";
import Terminal from "./components/Terminal";

const App = () => {
  return (
    <>
      <ShrinkHeader />
      <Terminal />
      <HorizontalScroll />
      <StackingCards />
      <div class="warning">
        <p>
          ⚠️ Your browser does not support Scroll-driven Animations. Please use
          Chrome 115 or newer.
        </p>
      </div>
    </>
  );
};

export default App;
