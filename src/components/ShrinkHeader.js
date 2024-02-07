import Airport from "./Airport";
import "./ShrinkHeader.css";
const ShrinkHeader = () => {
  return (
    <>
      <header className="shrink-header">
        <div class="limited">
          <div class="bg"></div>
          <div class="info">
            <div>
              <Airport />
            </div>
          </div>
        </div>
      </header>
      {/* <main class="limited">
        <div class="col">
          <div class="warning">
            <p>
              ⚠️ Your browser does not support Scroll-driven Animations. Please
              use Chrome 115 or newer.
            </p>
          </div>
          <div class="box" style="height: 20vh"></div>
          <div class="box" style="height: 5vh"></div>
          <div class="box"></div>
          <div class="box" style="height: 50vh"></div>
          <div class="box"></div>
          <div class="box" style="height: 35vh"></div>
        </div>
        <div class="col">
          <div class="box" style="height: 10vh"></div>
          <div class="box"></div>
          <div class="box" style="height: 4vh"></div>
        </div>
      </main> */}
    </>
  );
};

export default ShrinkHeader;
