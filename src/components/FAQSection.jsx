import React from "react";
import "./FAQSection.css";

const FAQSection = () => {
  const faqs = [
    {
      question: "Who is the team behind this project?",
      answer: "This project is implemented by MEC Millennium Fellows 2023",
    },
    {
      question: "How can i organise an awareness class in Sradhaa?",
      answer: "You can contact our team at support@example.com",
    },
  ];

  return (
    <div className="faq-section">
      <h2>Contact Us</h2>

      <h3>Frequently Asked Questions</h3>
      <div>
        {faqs.map((faq, index) => (
          <div key={index}>
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
