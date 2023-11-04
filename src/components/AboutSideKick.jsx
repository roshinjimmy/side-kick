import React from "react";
import "./AboutSideKick.css";

const AboutSideKick = () => {
  return (
    <div className="about-sidekick">
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Side Kick a digital software (guide) that helps you to communicate
          effectively to the differently abled without being insensitive or
          offensive in specific real-life settings. This app teaches people how
          to behave towards disabled people by providing them with socially
          appropriate guidelines while being kind, empathetic, and
          understanding.
        </p>
        <p>
          {" "}
          This platform also contains Sradhaa, an awareness program
          (online/offline), to provide teachers, students, and parents with
          workshops and training sessions that promote awareness of disabilities
          and how to create inclusive learning environments. A variety of topics
          could be covered in these workshops, including disability etiquette,
          communication strategies, and assistive technology.
        </p>
        <p>
          {" "}
          Another feature of this service called is called Samathwa (Custom
          accessible classroom design) equal and inclusive education for
          disabled students through accessible and inclusive classroom design
          which enables them to function without any difficulty and makes them
          equal to their peers.
        </p>
      </section>
    </div>
  );
};

export default AboutSideKick;
