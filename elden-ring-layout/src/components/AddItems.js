import "./css/Dialog.css";
import React, { useState } from "react";
//inputs.img != null ? URL.createObjectURL(inputs.img) : ""
const AddItem = (props) => {
  const response = await fetch(`https://elden-ring-backend-07b0.onrender.com/api/${props.category}/${props.type}`)

  return (
    <div id="add-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeDialog}>
            &times;
          </span>
          <form id="add-property-form">
            <p>
              <label htmlFor="name ">Item Name:</label>
              <input type="text" id="name" name="name" required />
            </p>

            <section className="columns">
              <p id="img-prev-section">
                <img id="img-prev" alt="" />
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input type="file" id="img" name="img" accept="image/*" />
              </p>
            </section>
            <p>
              <label htmlFor="Description">Description:</label>
              <input type="text" id="Description" name="Description" required />
            </p>
            <p>
              <button type="submit" id="Submit">Submit</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddItem;