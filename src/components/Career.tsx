import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Engineer</h4>
                <h5>Enterprise Systems</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Developed and maintained full-stack enterprise web applications using
              Java, Spring Boot, and Angular. Implemented RESTful APIs, integrated
              relational databases, and contributed to CI/CD pipeline setup on AWS.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Backend Engineer</h4>
                <h5>Cloud Platforms</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Architected and scaled cloud-native microservices on AWS and Azure.
              Designed Kafka-based event-driven pipelines, optimized Redis caching
              layers, and led containerization and Kubernetes deployments reducing
              deployment time by 60%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack AI Engineer</h4>
                <h5>AI-Powered Systems</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building AI-integrated full-stack applications with LangChain, FastAPI,
              and React. Designing distributed data pipelines for real-time analytics,
              delivering measurable performance improvements through intelligent
              automation and LLM-powered features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
