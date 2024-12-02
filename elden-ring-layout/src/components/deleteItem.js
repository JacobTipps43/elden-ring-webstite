import "./css/Dialog.css";
import React, { useState } from "react";

const DeleteItem = (props) => {
    const [result, setResult] = useState("");

    const deleteItem = async () => {
        const response = await fetch(`http://localhost:3001/api/${props.category}/${props.type}/${props._id}`, {
            method: "DELETE",
        });

        console.log(response);

        if(response.status === 200){
            setResult("Item Deleted!");
            props.hideItem();
            props.closeDialog();
        }else{
            setResult("Error Deleting Item");
        }
    };

    return (
        <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the {props.name}</h3>
            <section>
              <button id="answer" onClick={props.closeDialog}>No</button>            
              <button id="answer" onClick={deleteItem}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
    );
};

export default DeleteItem;