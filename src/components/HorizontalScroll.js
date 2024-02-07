import "./HorizontalScroll.css";
import logo from "../shared/Untitled-3.jpg";
import JobCard from "./JobCard";
import RTlogo from "../shared/Logo_RT_2022.jpg";
import Netmedialogo from "../shared/netmedia.jpeg";
import Blindsidelogo from "../shared/blindside.jpeg";
import Conduentlogo from "../shared/Conduent_Registermark_Horizontal_RGB.png";

const HorizontalScroll = () => {
  return (
    <body>
      <div className="body">
        <div className="container">
          {/* <section className="h1-section">
            <div>
              <h1>Expierence</h1>
            </div>
          </section> */}

          <section className="sectionPin">
            <div className="pin-wrap-sticky">
              <div className="pin-wrap">
                {/* <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h2> */}
                <div className="above_card">
                  <JobCard
                    img={RTlogo}
                    date={"06/2023 - Present"}
                    job={"Video Editor"}
                    company={"Russia Today"}
                    description1={"Writing original scripts for videos."}
                    description2={
                      "Creating media content and editing video clips."
                    }
                    description3={
                      "Writing scripts and batches for After Effects & After Effects."
                    }
                  />
                </div>
                <div>
                  <div className="above_card">
                    <JobCard
                      img={Netmedialogo}
                      date={"07/2022 – 01/2023"}
                      job={"Junior Frontend Developer"}
                      company={"Netmedianer GmbH "}
                      description1={
                        "Building webparts for Microsoft Sharepoint using Typescript."
                      }
                      description2={
                        "Extending applications for Microsoft Teams in ReactJS."
                      }
                      description3={"Testing beta features with Jest."}
                    />
                  </div>
                </div>
                <div>
                  <div className="above_card">
                    <JobCard
                      img={Blindsidelogo}
                      date={"04/2022 – 06/2022"}
                      job={"Frontend Developer Internship"}
                      company={"Blindside"}
                      description1={
                        "Creating the UI of a website in HTML5, CSS and ReactJS."
                      }
                      description2={"Refactoring legacy code."}
                      description3={"Fixing bugs."}
                    />
                  </div>
                </div>
                <div className="above_card">
                  <JobCard
                    img={Conduentlogo}
                    date={"11/2019 – 03/2021"}
                    job={"Customer Support Associate"}
                    company={"Conduent Inc. "}
                    description1={
                      "Technical support of customers in Russian and English."
                    }
                    description2={
                      "Optimizing the training processes of the new employees."
                    }
                    description3={
                      "Writing utility software to automate employees' proccesses."
                    }
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </body>
  );
};

export default HorizontalScroll;
