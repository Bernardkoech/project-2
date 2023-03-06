import React from "react";

// This component receives the animal data from its parent component via the "animals" prop
function AnimalDetails({animals}) {
  console.log(animals); // Log the received animal data for debugging purposes
  // Destructuring the received animal data for easier access
  const {image, name, breed, age, gender} = animals

  return (
    <div className="h-full w-full"> {/* A full height and width container */}
      <div className="flex items center h-96 w-3/5 justify-evenly"> {/* A container to center and align the contents */}
        <img src={image} alt={name} /> {/* Displaying the animal's image */}
        <div>
          <h3>{name}</h3> {/* Displaying the animal's name */}
          <p>Breed: {breed}</p> {/* Displaying the animal's breed */}
          <p>Age: {age}</p> {/* Displaying the animal's age */}
          <p>Gender: {gender}</p> {/* Displaying the animal's gender */}
        </div>
      </div>
    </div>
  );
}

export default AnimalDetails;
