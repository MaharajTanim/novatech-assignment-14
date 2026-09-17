const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="section-header">
        <h2 className="section-title">Let's Connect</h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Ready to build something amazing?</h3>
          <p>Contact us today for a free consultation. Our team is ready to help you scale your business.</p>
          <div className="info-item">Dhaka, Bangladesh</div>
          <div className="info-item">hello@novatech.com</div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="contact-input" required />
          <input type="email" placeholder="Your Email" className="contact-input" required />
          <textarea placeholder="How can we help you?" rows="5" className="contact-input" required></textarea>
          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;