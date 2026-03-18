import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Senior Full-Stack Engineer with deep expertise in Java, Spring Boot, and
          distributed systems. I architect and ship cloud-native microservices on AWS
          and Azure, design event-driven pipelines with Kafka, and build AI-powered
          applications with LangChain and LLMs. From high-throughput backend APIs to
          React and Angular frontends, I own the full delivery lifecycle — architecture,
          implementation, CI/CD, and production observability.
        </p>
      </div>
    </div>
  );
};

export default About;
