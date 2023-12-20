import React from "react";

export default function Contact() {
  return (
    <>
      
      <main>
        <section className="contact-form">
          <form action="process_form.php" method="post">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
    </>
  );
}
