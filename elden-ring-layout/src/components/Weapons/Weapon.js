import "../css/Weapon.css";
import React from "react";
import { useEffect, useState } from "react";
import DeleteItem from "../deleteItem";

const Weapon = (weapon) => {

    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [item, setItem] = useState(weapon);
    const [showItem, setShowItem] = useState(true);
    const openEditDialog = () => {
        setShowEditDialog(true);
      };
    
      const closeEditDialog = () => {
        setShowEditDialog(false);
      };

    const openDeleteDialog = () => {
        setShowDeleteDialog(true);
      };
    
      const closeDeleteDialog = () => {
        setShowDeleteDialog(false);
      };

      const hideItem = () => {
        setShowItem(false);
      }

      const editItem = (newItem) => {
        setItem(newItem);
      }

   return (
    <>
      {showItem ? (
        <div>
          {showDeleteDialog ? (
            <DeleteItem
              category={weapon.category}
              type={weapon.type}
              _id={weapon._id}
              name={weapon.name}
              closeDialog={closeDeleteDialog}
              hideItem={hideItem}
            />
          ) : (
            ""
          )}
          <section className="weapon one">
            <a href="#" onClick={openDeleteDialog}>
              &#x2715;
            </a>
            <p>{weapon.name}</p>
            <div id="weaponimages">
              <img
                src={`https://elden-ring-backend-07b0.onrender.com/${weapon.img}`}
                alt={weapon.name}
              />
            </div>
            <p>{weapon.description}</p>
          </section>
        </div>
      ) : null}
    </>
  );
};

export default Weapon;