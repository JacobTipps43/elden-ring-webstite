import "../css/Talisman.css";
import React, { useState } from "react";
import DeleteItem from "../deleteItem";
import EditItem from "../editItem";

const Talisman = (talisman) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [item, setItem] = useState(talisman);
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
  };

  const editItem = (newItem) => {
    setItem(newItem);
  };

  return (
    <>
      {showItem ? (
        <div className="Talismans one">
          {showDeleteDialog ? (
            <DeleteItem
              category={talisman.category}
              type={talisman.type}
              _id={talisman._id}
              name={talisman.name}
              closeDialog={closeDeleteDialog}
              hideItem={hideItem}
            />
          ) : null}

          {showEditDialog ? (
            <EditItem
              category={talisman.category}
              type={talisman.type}
              _id={talisman._id}
              name={talisman.name}
              img={talisman.img}
              description={talisman.description}
              closeDialog={closeEditDialog}
              updateItem={editItem}
            />
          ) : null}

          <section>
            <a href="#" onClick={openEditDialog}>
              &#9998;
            </a>
            <a href="#" onClick={openDeleteDialog}>
              &#x2715;
            </a>
            <p>{item.name}</p>
            <div id="weaponimages">
              <img
                src={`https://elden-ring-backend-07b0.onrender.com/${item.img}`}
                alt={item.name}
              />
            </div>
            <p>{item.description}</p>
          </section>
        </div>
      ) : null}
    </>
  );
};

export default Talisman;
