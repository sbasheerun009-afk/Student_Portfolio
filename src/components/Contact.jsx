function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <p>
        Feel free to contact me for opportunities, projects, or collaborations.
      </p>

      <div className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">
          <h3>Get In Touch</h3>

          <p>
            <strong>Email:</strong> your-email@gmail.com
          </p>

          <p>
            <strong>Phone:</strong> +91 XXXXX XXXXX
          </p>

          <p>
            <strong>Location:</strong> Andhra Pradesh, India
          </p>
        </div>

        {/* Contact Form */}
        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;