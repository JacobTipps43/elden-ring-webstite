import { useState, useEffect } from "react";
import axios from "axios";
import Weapon from "./Weapon";
import AddItems from "../AddItems";

const StrengthWeapons = () => {
    const [weapons, setWeapons] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    useEffect(() => {
        const fetchWeapons = async () => {
            try {
                const response = await axios.get("https://elden-ring-backend-07b0.onrender.com/api/Wepons/strengthWeapons");
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

    return (
        <>

    <button id="add-strength-weapons" onClick={openAddDialog}>
        +
      </button>

      {showAddDialog ? (
        <AddItems
          closeDialog={closeAddDialog}
          category="Wepons"
          type="strengthWeapons"
        />
      ) : (
        ""
      )}
        
        <div className="weapons columns" id="Weapons">
            {weapons.map((weapon) => (
                <Weapon
                    name={weapon.name}
                    img={weapon.img}
                    description={weapon.description}
                />
            ))}
        </div>
        </>
    );
};

export default StrengthWeapons;
