import { useState, useEffect } from "react";
import axios from "axios";
import Weapon from "./Weapon";

const Weapons = () => {
    const [weapons, setWeapons] = useState([]);

    useEffect(() => {
        const fetchWeapons = async () => {
            try {
                const response = await axios.get("https://elden-ring-backend-07b0.onrender.com/");
                setWeapons(response.data);
            } catch (error) {
                console.error("Error fetching weapons:", error);
            }
        };

        fetchWeapons();
    }, []);

    return (
        <div className="weapons">
            {weapons.map((weapon) => (
                <Weapon
                    name={weapon.name}
                    image={weapon.image}
                    description={weapon.description}
                />
            ))}
        </div>
    );
};

export default Weapons;
