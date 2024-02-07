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
    </>
  );
};

export default App;
