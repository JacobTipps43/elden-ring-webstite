import { useState, useEffect } from "react";
import axios from "axios";
import Talisman from "./Talisman";
import AddItems from "../AddItems";

const FaithTalismans = () => {
    const [talismans, setTalismans] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    useEffect(() => {
        const fetchTalismans = async () => {
            try {
                const response = await axios.get("https://elden-ring-backend-07b0.onrender.com/api/talismans/faithTalismans");
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

        <button id="add-faith-talismans" onClick={openAddDialog}>
            +
            </button>

            {showAddDialog ? (
            <AddItems
            closeDialog={closeAddDialog}
            category="talismans"
            type="faithTalismans"
            showNewItems={updateTalisman}
            />
        ) : (
            ""
        )}

        <div className="talismans columns" id="Talismans">
            {talismans.map((talisman) => (
                <Talisman
                    name={talisman.name}
                    img={talisman.img}
                    description={talisman.description}
                />
            ))}
        </div>
        </>
    );
};

export default FaithTalismans;