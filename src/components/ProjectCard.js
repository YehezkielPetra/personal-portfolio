import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{color: 'inherit', textDecoration: 'none'}}
      >
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
