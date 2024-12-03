import "./css/Dialog.css";
import React, { useState } from "react";

const DeleteItem = (props) => {
    const [inputs, setInputs] = useState({
        _id: props._id,
        name: props.name,
        prev_img: props.img,
        description: props.description
    });
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs((values)=> ({...values, [name]: value}));
    };

    const handleImageChange = (e) => {
        const name = e.target.name;
        const value = e.target.files[0];
        setInputs((values)=> ({...values, [name]: value}));
    };

    const onSubmit = async(e)=>{
        e.preventDefault();
        setResult("Updating...");

        const formData = new FormData(e.target);
        console.log(...formData);
        const response = await fetch(`https://elden-ring-backend-07b0.onrender.com/api/${props.category}/${props.type}/${props._id}`, {
            method: "PUT",
            body: formData
            });

        console.log(response);

        if(response.status === 200){
            setResult("Item Updated!");
            e.target.reset();
            props.updateItem(await response.json());
            props.closeDialog();
        }else{
            setResult("Error Updating Item");
        }
    };

    return (
        <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <div id="edit-content">
            <h3>Edit {props.name}</h3>
            <form onSubmit={onSubmit}>
            <ul id="edit">
                <li><label htmlFor="name">Name</label>
                <input type="text" name="name" value={inputs.name} onChange={handleChange} required/></li>
                <li><label htmlFor="img">Image</label>
                <input type="file" name="img" onChange={handleImageChange}/></li>
                <li><label htmlFor="description">Description</label>
                <textarea name="description" value={inputs.description} onChange={handleChange} required/></li>
                <li><button id="submit" type="submit">Submit</button></li>
            </ul>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
    );
}

export default DeleteItem;