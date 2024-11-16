import { useState, useEffect } from "react";
import axios from "axios";
import Weapon from "./Weapon";

const FaithWeapons = () => {
    const [weapons, setWeapons] = useState([]);

    useEffect(() => {
        const fetchWeapons = async () => {
            try {
                const response = await axios.get("https://elden-ring-backend-07b0.onrender.com/api/Wepons/faithWeapons");
                setWeapons(response.data);
            } catch (error) {
                console.error("Error fetching weapons:", error);
            }
        };

        fetchWeapons();
    }, []);

    return (
        <div className="weapons columns" id="Weapons">
            {weapons.map((weapon) => (
                <Weapon
                    name={weapon.name}
                    img={weapon.img}
                    description={weapon.description}
                />
            ))}
        </div>
    );
};

export default FaithWeapons;
