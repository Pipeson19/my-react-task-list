import React from "react";

function ContactUs() {
    const whatsappMessage = "¡Hola! Estoy interesado en contactarte.";

  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div>
          <button type="submit">Send Message</button>
        </div>
      </form>
      <div>
        <p>Contact me directly:</p>
        <p>Email: <a href="mailto:felipesalazar19@hotmail.com">felipesalazar19@hotmail.com</a></p>
        <p>Phone: <a href="tel:++573217899742">+57 3217899742</a></p>
        <p>WhatsApp: <a href={`https://wa.me/3217899742?text=${encodeURIComponent(whatsappMessage)}`}>Send WhatsApp Message</a></p>
      </div>
    </div>
  );
}

export default ContactUs;

