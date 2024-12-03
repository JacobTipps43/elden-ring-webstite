import { useState, useEffect } from "react";
import axios from "axios";
import Talisman from "./Talisman";
import AddItems from "../AddItems";

const ArcaneTalismans = () => {
    const [talismans, setTalismans] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    useEffect(() => {
        const fetchTalismans = async () => {
            try {
                const response = await axios.get("https://elden-ring-backend-07b0.onrender.com/api/talismans/arcaneTalismans");
                setTalismans(response.data);
            } catch (error) {
                console.error("Error fetching talismans:", error);
            }
        };

        fetchTalismans();
    }, []);

    const openAddDialog = () => {
        setShowAddDialog(true);
      };

    const closeAddDialog = () => {
        setShowAddDialog(false);
        };

    const updateTalisman = (newTalismans) => {
        setTalismans((oldTalismans) => [...oldTalismans, newTalismans]);
        };

    return (
        <>

        <button id="add-arcane-talismans" onClick={openAddDialog}>
            +
            </button>

            {showAddDialog ? (
            <AddItems
            closeDialog={closeAddDialog}
            category="talismans"
            type="arcaneTalismans"
            showNewItems={updateTalisman}
            />
        ) : (
            ""
        )}

        <div className="talismans columns" id="Talismans">
            {talismans.map((talisman) => (
                <Talisman
                    _id={talisman._id}
                    name={talisman.name}
                    img={talisman.img}
                    description={talisman.description}
                    category="Talismans"
                    type="arcaneTalismans"
                />
            ))}
        </div>
        </>
    );
};

export default ArcaneTalismans;