import React from "react";
import "./CommonDisabilitiesSection.css";
import disabilityIcon from "../assets/images/muscular-dystrophy.jpg";

const CommonDisabilitiesSection = () => {
  const commonDisabilities = [
    { id: 1, title: "Muscular Dystrophy", image: disabilityIcon },
    { id: 2, title: "Disability 2", image: disabilityIcon },
    { id: 3, title: "Disability 3", image: disabilityIcon },
    { id: 4, title: "Disability 4", image: disabilityIcon },
    { id: 5, title: "Disability 5", image: disabilityIcon },
    { id: 6, title: "Disability 6", image: disabilityIcon },
  ];

  const handleCardClick = (id) => {
    console.log(`Clicked on Disability ${id}`);
  };

  return (
    <div className="common-disabilities">
      <h2>Common Disabilities</h2>
      <div className="disability-cards">
        {commonDisabilities.map((disability) => (
          <div
            key={disability.id}
            className="card"
            onClick={() => handleCardClick(disability.id)}
          >
            <img src={disability.image} alt={disability.title} />
            <h3>{disability.title}</h3>
          </div>
        ))}
      </div>
      <button className="see-more-button">See More</button>
    </div>
  );
};

export default CommonDisabilitiesSection;
