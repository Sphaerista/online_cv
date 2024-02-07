// import { DateTime } from "luxon";
import styles from "./Terminal.module.scss";

const Terminal = () => {
  const currTime1 = new Date();
  const currTime2 = new Date().setTime(currTime1 - 10000000);
  const currTime3 = new Date(currTime2).toLocaleString("de-DE", {
    hour12: false,
  });
  const currHour = new Date(currTime1).getHours();
  console.log(currHour);
  return (
    <div className={styles.headerTerminal}>
      <div className={`${styles.terminal} text-sm md:text-2xl`}>
        <div className={styles.fakeMenu}>
          <div className={`${styles.fakeButtons} ${styles.fakeClose}`}></div>
          <div className={`${styles.fakeButtons} ${styles.fakeMinimize}`}></div>
          <div className={`${styles.fakeButtons} ${styles.fakeZoom}`}></div>
        </div>
        <div className={styles.fakeScreen}>
          <p className={styles.typeText} suppressHydrationWarning>
            Last login: {currTime3} on ttys000
          </p>
          <p id="greeting" className={styles.typeText}>
            $ Good{" "}
            {currHour < 5
              ? `night`
              : currHour < 12
              ? `morning`
              : currHour < 16
              ? "afternoon"
              : `evening`}
            .
          </p>
          <p className={styles.typeText}>$ I am Archimidis, a Web Developer.</p>
          {/* <p className={styles.typeText}>$ &amp; Automotive Engineer.</p> */}
          <p className={styles.typeText}>
            $ Find out more about me below...&#9608;
          </p>
        </div>
      </div>
      <div className={styles.h1Section}>
        <div>
          <h1>Expierence</h1>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
