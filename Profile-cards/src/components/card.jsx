import { Mail, Star } from "lucide-react";

function Card({
  name,
  id,
  description,
  src,
  project,
  task,
  performance,
  points,
}) {
  const maxPoints = 1500;
  const barWidth = (points / maxPoints) * 100;

  return (
    <div className="container">
      <div className="header">
        <span className="sideIcon">
          <Mail size={16} />
        </span>
        <img className="image" src={src} alt="" />
        <span className="sideIcon">
          <Star size={16} />
        </span>
      </div>
      <h1>{name}</h1>
      <h3 className="id">{id}</h3>
      <p>{description}</p>
      <div className="extras">
        <span>
          <strong>{project}</strong> Projects
        </span>
        <span>
          <strong>{task}</strong> Tasks
        </span>
        <span>
          <strong>{performance}%</strong> Performed
        </span>
      </div>
      <div className="member-rating-box">
        <div className="rating-header">
          <p>Member Rating</p>
          <p>{points} Points</p>
        </div>
        <div className="rating-bar-bg">
          <div
            className="rating-bar-fill"
            style={{ width: `${barWidth}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
