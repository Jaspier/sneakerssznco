import React from "react";

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
      <h1 className="contact-link text-center">
        <a
          href="https://www.instagram.com/sneakerssznco/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-instagram"></i> Instagram
        </a>
      </h1>
      <h1 className="contact-link text-center">
        <a href="mailto:sneakerssznco@gmail.com">
          <i class="fa-solid fa-envelope"></i> Email
        </a>
      </h1>
    </>
  );
};

export default Contact;
