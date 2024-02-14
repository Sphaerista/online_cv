import "./StackingCards.css";
import proj1 from "../shared/todolist-app.jpg";
import proj2 from "../shared/dashboard-app-l.jpg";
import proj3 from "../shared/books-app.jpg";
import github from "../shared/githublogo-blue.png";
import whitemail from "../shared/white-envelope-blue.png";
import hhlogo from "../shared/hh-blue.png";
import primereact from "../shared/primereact-logo-black.webp";
import { FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { FaDocker } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { SiOpenai } from "react-icons/si";

const StackingCards = () => {
  return (
    <div class="body">
      <header>
        <div class="header">
          <h1>Projects</h1>
        </div>
      </header>
      <main>
        <div class="main">
          <ul id="cards">
            <li class="card" id="card_1">
              <div class="card__content card__content-anim">
                <div>
                  <h3>Todolist app with AI chat</h3>
                  <div className="app-stack">
                    <div className="app-stack-icons">
                      <a href="https://react.dev/">
                        <FaReact size="2em" />
                      </a>
                    </div>
                    <div className="app-stack-icons">
                      <a href="https://www.typescriptlang.org/">
                        <SiTypescript size="2em" />
                      </a>
                    </div>
                    <div className="app-stack-icons">
                      <a href="https://platform.openai.com/">
                        <SiOpenai size="2em" />
                      </a>
                    </div>
                    <div className="app-stack-icons">
                      <a href="https://primereact.org/">
                        <img src={primereact} alt="prime-react" />
                      </a>
                    </div>
                    {/* <div className="technology">ReactJS</div> */}
                    {/* <div className="technology">Typescript</div> */}
                    {/* <div className="technology">OpenAI API</div> */}
                  </div>
                  <div className="app-text">
                    Todolist that has an ability to add nested subtasks and
                    tags. There is also context hepler AI assisting correctly
                    plan tasks.
                  </div>
                  <div className="app-btns">
                    <a
                      href="https://roaring-paletas-13eae2.netlify.app/"
                      class="btn btn-website"
                    >
                      <svg
                        fill="currentColor"
                        version="1.1"
                        id="Layer_1"
                        width="98%"
                        viewBox="0 0 512 512"
                      >
                        <g>
                          <g>
                            <path
                              d="M256,0C114.62,0,0,114.62,0,256s114.62,256,256,256s256-114.62,256-256S397.38,0,256,0z M172.211,41.609
			c-24.934,27.119-44.68,66.125-56.755,111.992H49.749C75.179,102.741,118.869,62.524,172.211,41.609z M25.6,256
			c0-26.999,5.077-52.727,13.662-76.8h70.494c-4.608,24.294-7.356,49.963-7.356,76.8s2.748,52.506,7.347,76.8H39.262
			C30.677,308.727,25.6,283,25.6,256z M49.749,358.4h65.707c12.083,45.867,31.821,84.872,56.755,111.991
			C118.869,449.476,75.179,409.259,49.749,358.4z M243.2,485.188c-43.81-8.252-81.877-58.24-101.359-126.788H243.2V485.188z
			 M243.2,332.8H135.74c-4.924-24.166-7.74-49.997-7.74-76.8s2.816-52.634,7.74-76.8H243.2V332.8z M243.2,153.6H141.841
			C161.323,85.052,199.39,35.063,243.2,26.812V153.6z M462.251,153.6h-65.707c-12.083-45.867-31.821-84.873-56.755-111.992
			C393.131,62.524,436.821,102.741,462.251,153.6z M268.8,26.812c43.81,8.252,81.877,58.24,101.359,126.788H268.8V26.812z
			 M268.8,179.2h107.46c4.924,24.166,7.74,49.997,7.74,76.8s-2.816,52.634-7.74,76.8H268.8V179.2z M268.8,485.188V358.4h101.359
			C350.677,426.948,312.61,476.937,268.8,485.188z M339.789,470.391c24.934-27.127,44.672-66.125,56.755-111.991h65.707
			C436.821,409.259,393.131,449.476,339.789,470.391z M402.244,332.8c4.608-24.294,7.356-49.963,7.356-76.8
			s-2.748-52.506-7.347-76.8h70.494c8.576,24.073,13.653,49.801,13.653,76.8c0,27-5.077,52.727-13.662,76.8H402.244z"
                            />
                          </g>
                        </g>
                      </svg>
                    </a>

                    <a
                      href="https://github.com/Sphaerista/todolist"
                      class="btn"
                    >
                      <svg viewBox="0 0 1024 1024" fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                          transform="scale(64)"
                          // fill="#1B1F23"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <figure>
                  <img src={proj1} alt="project 1" />
                </figure>
              </div>
            </li>
            <li class="card" id="card_2">
              <div class="card__content card__content-anim">
                <div>
                  <h3>Dashboard for user management</h3>
                  <div className="app-stack">
                    <div className="app-stack-icons">
                      <a href="https://react.dev/">
                        <FaReact size="2em" />
                      </a>
                    </div>
                    <div className="app-stack-icons">
                      <a href="https://redux-toolkit.js.org/">
                        <SiRedux size="2em" />
                      </a>
                    </div>
                    <div className="app-stack-icons">
                      <a href="https://getbootstrap.com/">
                        <FaBootstrap size="2em" />
                      </a>
                    </div>
                  </div>
                  {/* <div className="technology">ReactJS</div> */}
                  {/* <div className="technology">Redux Toolkit</div> */}
                  {/* <div className="technology">Bootstrap</div> */}
                  <div className="app-text">
                    Administration panel with possibility to add, edit and
                    delete users. Users are stored locally and can be sorted by
                    their username.
                  </div>
                  <div className="app-btns">
                    <a
                      href="https://gentle-salmiakki-f131d2.netlify.app/"
                      class="btn btn-website"
                    >
                      <svg
                        fill="currentColor"
                        version="1.1"
                        id="Layer_1"
                        width="98%"
                        viewBox="0 0 512 512"
                      >
                        <g>
                          <g>
                            <path
                              d="M256,0C114.62,0,0,114.62,0,256s114.62,256,256,256s256-114.62,256-256S397.38,0,256,0z M172.211,41.609
			c-24.934,27.119-44.68,66.125-56.755,111.992H49.749C75.179,102.741,118.869,62.524,172.211,41.609z M25.6,256
			c0-26.999,5.077-52.727,13.662-76.8h70.494c-4.608,24.294-7.356,49.963-7.356,76.8s2.748,52.506,7.347,76.8H39.262
			C30.677,308.727,25.6,283,25.6,256z M49.749,358.4h65.707c12.083,45.867,31.821,84.872,56.755,111.991
			C118.869,449.476,75.179,409.259,49.749,358.4z M243.2,485.188c-43.81-8.252-81.877-58.24-101.359-126.788H243.2V485.188z
			 M243.2,332.8H135.74c-4.924-24.166-7.74-49.997-7.74-76.8s2.816-52.634,7.74-76.8H243.2V332.8z M243.2,153.6H141.841
			C161.323,85.052,199.39,35.063,243.2,26.812V153.6z M462.251,153.6h-65.707c-12.083-45.867-31.821-84.873-56.755-111.992
			C393.131,62.524,436.821,102.741,462.251,153.6z M268.8,26.812c43.81,8.252,81.877,58.24,101.359,126.788H268.8V26.812z
			 M268.8,179.2h107.46c4.924,24.166,7.74,49.997,7.74,76.8s-2.816,52.634-7.74,76.8H268.8V179.2z M268.8,485.188V358.4h101.359
			C350.677,426.948,312.61,476.937,268.8,485.188z M339.789,470.391c24.934-27.127,44.672-66.125,56.755-111.991h65.707
			C436.821,409.259,393.131,449.476,339.789,470.391z M402.244,332.8c4.608-24.294,7.356-49.963,7.356-76.8
			s-2.748-52.506-7.347-76.8h70.494c8.576,24.073,13.653,49.801,13.653,76.8c0,27-5.077,52.727-13.662,76.8H402.244z"
                            />
                          </g>
                        </g>
                      </svg>
                    </a>

                    <a
                      href="https://github.com/Sphaerista/proexe_test"
                      class="btn"
                    >
                      {/* <img className="btn-img" src={github} alt="github" /> */}
                      {/* <img className="btn-img" src={githubsvg} alt="github" /> */}
                      <svg viewBox="0 0 1024 1024" fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                          transform="scale(64)"
                          // fill="#1B1F23"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <figure>
                  <img src={proj2} alt="project 2" />
                </figure>
              </div>
            </li>
            <li class="card" id="card_3">
              <div class="card__content card__content-anim">
                <div>
                  <h3>Books searching app</h3>
                  <div className="app-stack">
                    <div className="app-stack-icons">
                      <a href="https://react.dev/">
                        <FaReact size="2em" />
                      </a>
                    </div>
                    <div className="app-stack-icons">
                      <a href="https://redux-toolkit.js.org/">
                        <SiRedux size="2em" />
                      </a>
                    </div>
                    <div className="app-stack-icons">
                      <a href="https://www.typescriptlang.org/">
                        <SiTypescript size="2em" />
                      </a>
                    </div>
                    <div className="app-stack-icons">
                      <a href="https://www.docker.com/">
                        <FaDocker size="2em" />
                      </a>
                    </div>
                  </div>
                  {/* <div className="technology">ReactJS</div> */}
                  {/* <div className="technology">Redux Toolkit</div> */}
                  {/* <div className="technology">Typescript</div> */}
                  {/* <div className="technology">Google Books API</div> */}
                  {/* <div className="technology">Docker</div> */}
                  <div className="app-text">
                    Ability to search books and check book's description. Can be
                    built in Docker. The app is responsive from 320px up to
                    1920px.
                  </div>
                  <div className="app-btns">
                    <a
                      href="https://main--boisterous-mochi-2c8188.netlify.app/"
                      class="btn btn-website"
                    >
                      <svg
                        fill="currentColor"
                        version="1.1"
                        id="Layer_1"
                        width="98%"
                        viewBox="0 0 512 512"
                      >
                        <g>
                          <g>
                            <path
                              d="M256,0C114.62,0,0,114.62,0,256s114.62,256,256,256s256-114.62,256-256S397.38,0,256,0z M172.211,41.609
			c-24.934,27.119-44.68,66.125-56.755,111.992H49.749C75.179,102.741,118.869,62.524,172.211,41.609z M25.6,256
			c0-26.999,5.077-52.727,13.662-76.8h70.494c-4.608,24.294-7.356,49.963-7.356,76.8s2.748,52.506,7.347,76.8H39.262
			C30.677,308.727,25.6,283,25.6,256z M49.749,358.4h65.707c12.083,45.867,31.821,84.872,56.755,111.991
			C118.869,449.476,75.179,409.259,49.749,358.4z M243.2,485.188c-43.81-8.252-81.877-58.24-101.359-126.788H243.2V485.188z
			 M243.2,332.8H135.74c-4.924-24.166-7.74-49.997-7.74-76.8s2.816-52.634,7.74-76.8H243.2V332.8z M243.2,153.6H141.841
			C161.323,85.052,199.39,35.063,243.2,26.812V153.6z M462.251,153.6h-65.707c-12.083-45.867-31.821-84.873-56.755-111.992
			C393.131,62.524,436.821,102.741,462.251,153.6z M268.8,26.812c43.81,8.252,81.877,58.24,101.359,126.788H268.8V26.812z
			 M268.8,179.2h107.46c4.924,24.166,7.74,49.997,7.74,76.8s-2.816,52.634-7.74,76.8H268.8V179.2z M268.8,485.188V358.4h101.359
			C350.677,426.948,312.61,476.937,268.8,485.188z M339.789,470.391c24.934-27.127,44.672-66.125,56.755-111.991h65.707
			C436.821,409.259,393.131,449.476,339.789,470.391z M402.244,332.8c4.608-24.294,7.356-49.963,7.356-76.8
			s-2.748-52.506-7.347-76.8h70.494c8.576,24.073,13.653,49.801,13.653,76.8c0,27-5.077,52.727-13.662,76.8H402.244z"
                            />
                          </g>
                        </g>
                      </svg>
                    </a>

                    <a
                      href="https://github.com/Sphaerista/-future-group_test_typescript"
                      class="btn"
                    >
                      {/* <img className="btn-img" src={github} alt="github" /> */}
                      {/* <img className="btn-img" src={githubsvg} alt="github" /> */}
                      <svg viewBox="0 0 1024 1024" fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                          transform="scale(64)"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <figure>
                  <img src={proj3} alt="project 3" />
                </figure>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <aside>
        <div class="contact-title">
          <h1>Contacts</h1>
        </div>
        <div className="contacts">
          <div className="contact-section">
            <a href="https://github.com/Sphaerista">
              <img src={github} alt="github-logo" />
            </a>
            {/* <p>github</p> */}
          </div>
          <div className="contact-section">
            <a href="https://hh.ru">
              <img src={hhlogo} alt="hh-logo" />
            </a>
            {/* <p>hh</p>  */}
          </div>
          <div className="contact-section">
            <a href="mailto:cosaleks@gmail.com">
              <img src={whitemail} alt="mail-logo" />
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default StackingCards;
