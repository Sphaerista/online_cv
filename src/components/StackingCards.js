import "./StackingCards.css";
import proj1 from "../shared/todolist-app.jpg";
import proj2 from "../shared/dashboard-app-l.jpg";
import proj3 from "../shared/books-app.jpg";
import github from "../shared/githublogo-blue.png";
import whitemail from "../shared/white-envelope-blue.png";
import hhlogo from "../shared/hh-blue.png";
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
              <div class="card__content">
                <div>
                  <h3>Todolist app with AI chat</h3>
                  <div className="app-stack">
                    <div className="technology">ReactJS</div>
                    <div className="technology">Typescript</div>
                    <div className="technology">OpenAI API</div>
                    <div className="technology">PrimeReact UI</div>
                  </div>
                  <div className="app-text">
                    Todolist that has an ability to add nested subtasks and
                    tags. There is also context hepler AI assisting correctly
                    plan tasks.
                  </div>
                  <p>
                    <a href="#top" class="btn btn--accent">
                      Read more
                    </a>
                  </p>
                </div>
                <figure>
                  <img src={proj1} alt="project 1" />
                </figure>
              </div>
            </li>
            <li class="card" id="card_2">
              <div class="card__content">
                <div>
                  <h3>Dashboard for user management</h3>
                  <div className="app-stack">
                    <div className="technology">ReactJS</div>
                    <div className="technology">Redux Toolkit</div>
                    <div className="technology">Bootstrap</div>
                  </div>
                  <div className="app-text">
                    Administration panel with possibility to add, edit and
                    delete users. Users are stored locally and can be sorted by
                    their username.
                  </div>
                  <p>
                    <a href="#top" class="btn btn--accent">
                      Read more
                    </a>
                  </p>
                </div>
                <figure>
                  <img src={proj2} alt="project 2" />
                </figure>
              </div>
            </li>
            <li class="card" id="card_3">
              <div class="card__content">
                <div>
                  <h3>Books searching app</h3>
                  <div className="app-stack">
                    <div className="technology">ReactJS</div>
                    <div className="technology">Redux Toolkit</div>
                    <div className="technology">Typescript</div>
                    {/* <div className="technology">Google Books API</div> */}
                    <div className="technology">Docker</div>
                  </div>
                  <div className="app-text">
                    Ability to search books and check book's description. Can be
                    built in Docker. The app is responsive from 320px up to
                    1920px.
                  </div>
                  <p>
                    <a href="#top" class="btn btn--accent">
                      Read more
                    </a>
                  </p>
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
