import React from "react";
import "./CommonDisabilitiesSection.css";

const CommonDisabilitiesSection = () => {
  const commonDisabilities = [
    { id: 1, title: "Disability 1", image: "url_to_image_1" },
    { id: 2, title: "Disability 2", image: "url_to_image_2" },
    { id: 3, title: "Disability 3", image: "url_to_image_3" },
    { id: 4, title: "Disability 4", image: "url_to_image_4" },
    { id: 5, title: "Disability 5", image: "url_to_image_5" },
    { id: 6, title: "Disability 6", image: "url_to_image_6" },
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
