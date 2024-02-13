import "./JobCard.css";
const JobCard = (props) => {
  const { img, date, job, company, description1, description2, description3 } =
    props;
  return (
    <div class="profile-card">
      <div>
        <div className="img-card">
          <img src={img} class="hoverZoomLink" alt={company} />
        </div>
        <div className="job-info">
          <div className="job">{job}</div>
          <div className="date">{date}</div>
          <div className="company">{company}</div>
        </div>
      </div>
      <ul class="profile-desc">
        <li>
          <div>{description1}</div>
        </li>
        <li>
          <div>{description2}</div>
        </li>
        <li>
          <div>{description3}</div>
        </li>
      </ul>
    </div>
  );
};
export default JobCard;
