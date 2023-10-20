import React from "react";
import "./About.css"; 

export default function About() {
  return (
    <div className="container">
      <h2>About Our Restaurant</h2>
      <p>
        Welcome to Tasty Foods! We are dedicated to serving you the
        finest cuisine, prepared with fresh and high-quality ingredients.
      </p>

      <h3>Our Story</h3>
      <p>
      Tasty Foods was founded in 2022 with a passion for
        creating memorable dining experiences. Since then, we have been
        delighting our customers with a diverse menu that caters to a variety of
        tastes and preferences.
      </p>

      <h3>Our Mission</h3>
      <p>
        At Tasty Foods, our mission is to provide exceptional
        service and offer a wide range of delectable dishes, ensuring that each
        visit is a delightful culinary journey. We take pride in our commitment
        to quality, consistency, and customer satisfaction.
      </p>

      <h3>Our Team</h3>
      <p>
        Our team of talented chefs and dedicated staff work tirelessly to
        create a unique and memorable dining experience. We value our
        customers' trust and aim to exceed their expectations in every way.
      </p>

      <h3>Contact Us</h3>
      <p>
        We look forward to serving you and making your visit an exceptional one.
        If you have any questions or feedback, please feel free to reach out to
        us.
      </p>
      <address>
      Tasty Foods<br />
        Address: Etobicoke<br />
        Phone: 416-000-0000<br />
        Email: tastyfoods@info.com
      </address>
    </div>
  );
}
