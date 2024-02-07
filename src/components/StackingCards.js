import "./StackingCards.css";
import proj1 from "../shared/gogeek.png";
import proj2 from "../shared/spoh.png";
import proj3 from "../shared/compare-ev.jpeg";
import github from "../shared/githublogo.png";
import whitemail from "../shared/white-envelope.png";
import hhlogo from "../shared/hh.png";
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
                  <div>ReactJS</div>
                  <div>Typescript</div>
                  <div>OpenAI API</div>
                  <p>
                    <a href="#top" class="btn btn--accent">
                      Read more
                    </a>
                  </p>
                </div>
                <figure>
                  <img src={proj1} alt="Image description" />
                </figure>
              </div>
            </li>
            <li class="card" id="card_2">
              <div class="card__content">
                <div>
                  <h3>Dashboard for user management</h3>
                  <div>ReactJS</div>
                  <div>Redux Toolkit</div>
                  <div>Bootstrap</div>
                  <p>
                    <a href="#top" class="btn btn--accent">
                      Read more
                    </a>
                  </p>
                </div>
                <figure>
                  <img src={proj2} alt="Image description" />
                </figure>
              </div>
            </li>
            <li class="card" id="card_3">
              <div class="card__content">
                <div>
                  <h3>Books searching app</h3>
                  <div>ReactJS</div>
                  <div>Redux Toolkit</div>
                  <div>Typescript</div>
                  <div>Google Books API</div>
                  <div>Docker</div>
                  <p>
                    <a href="#top" class="btn btn--accent">
                      Read more
                    </a>
                  </p>
                </div>
                <figure>
                  <img src={proj3} alt="Image description" />
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
            <a href="https://github.com">
              <img src={github} />
            </a>
            {/* <p>github</p> */}
          </div>
          <div className="contact-section">
            <a href="https://hh.ru">
              <img src={hhlogo} />
            </a>
            {/* <p>hh</p>  */}
          </div>
          <div className="contact-section">
            <a href="mailto:ex.ex@example.com?body=My custom mail body">
              <img src={whitemail} />
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default StackingCards;
