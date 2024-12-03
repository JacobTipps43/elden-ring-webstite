import { useState, useEffect } from "react";
import axios from "axios";
import Weapon from "./Weapon";
import AddItems from "../AddItems";

const DexterityWeapons = () => {
    const [weapons, setWeapons] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    useEffect(() => {
        const fetchWeapons = async () => {
            try {
                const response = await axios.get("https://elden-ring-backend-07b0.onrender.com/api/Wepons/dexterityWeapons");
                setWeapons(response.data);
            } catch (error) {
                console.error("Error fetching weapons:", error);
            }
        };

        fetchWeapons();
    }, []);

    const openAddDialog = () => {
        setShowAddDialog(true);
      };
    
      const closeAddDialog = () => {
        setShowAddDialog(false);
      };

      const updateWeapon = (newWeapons) => {
        setWeapons((oldWeapons) => [...oldWeapons, newWeapons]);
      };

    return (
        <>

<button id="add-dexterity-weapons" onClick={openAddDialog}>
        +
      </button>

      {showAddDialog ? (
        <AddItems
          closeDialog={closeAddDialog}
          category="Wepons"
          type="dexterityWeapons"
          showNewItems={updateWeapon}
        />
      ) : (
        ""
      )}

        <div className="weapons columns" id="Weapons">
            {weapons.map((weapon) => (
                <Weapon
                    _id={weapon._id}
                    name={weapon.name}
                    img={weapon.img}
                    description={weapon.description}
                    category="Wepons"
                    type="dexterityWeapons"
                />
            ))}
        </div>
        </>
    );
};

export default DexterityWeapons;
