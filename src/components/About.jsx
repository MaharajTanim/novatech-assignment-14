const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-header">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="title-underline"></div>
      </div>
      <p className="about-desc">
        We are a modern tech agency specializing in delivering clean, minimalist, and high-performance software tailored to your specific business needs.
      </p>
      
      <div className="services-grid">
        <div className="service-card">
          <h3>Full-Stack Dev</h3>
          <p>Scalable web applications using MERN and PERN stacks tailored for high traffic.</p>
        </div>
        <div className="service-card">
          <h3>AI & Machine Learning</h3>
          <p>Intelligent models, predictive analysis, and seamless AI integrations.</p>
        </div>
        <div className="service-card">
          <h3>Quality Assurance</h3>
          <p>Automated and manual testing strategies to ensure flawless performance.</p>
        </div>
      </div>
    </section>
  );
};

export default About;