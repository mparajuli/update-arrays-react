import { useState } from "react";
import "./MyComponent.css";

function MyComponent() {
  const [foods, setFoods] = useState(["Apple", "Mango", "Banana"]);

  const handleAdd = () => {
    const newItem = document.getElementById("itemId").value;
    document.getElementById("itemId").value = "";

    setFoods([...foods, newItem]);
  };

  const handleRemove = (index) => {
    setFoods(foods.filter((_, idx) => idx !== index));
  };

  return (
    <div className="container">
      <div className="description-card">
        <h1>Update Arrays in State</h1>
        <p className="description-text">
          This program demonstrates how to update arrays in state using React's
          useState hook. It utilizes the <code>map</code> function to iterate
          over the array of foods and render them as list items. Additionally,
          it employs the <code>filter</code> function to remove items from the
          array based on their index.
        </p>
      </div>

      <div className="demo-card">
        <h2>List of Food</h2>
        <ul>
          {foods.map((food, index) => {
            return (
              <div key={index} className="food-item">
                <li>{food}</li>
                <button
                  className="remove-button"
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </ul>
        <div className="input-section">
          <input
            className="input-field"
            type="text"
            id="itemId"
            placeholder="Enter food item"
          />
          <button className="add-button" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
