import { useState, useEffect } from "react";
import axios from "axios";
import Talisman from "./Talisman";

const ArcaneTalismans = () => {
    const [talismans, setTalismans] = useState([]);

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

    return (
        <div className="talismans columns" id="Talismans">
            {talismans.map((talisman) => (
                <Talisman
                    name={talisman.name}
                    img={talisman.img}
                    description={talisman.description}
                />
            ))}
        </div>
    );
};

export default ArcaneTalismans;