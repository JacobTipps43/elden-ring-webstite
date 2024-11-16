import { useState, useEffect } from "react";
import axios from "axios";
import Location from "./Location";

const FaithLocations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get("https://elden-ring-backend-07b0.onrender.com/api/locations/faithLocations");
                setLocations(response.data);
            } catch (error) {
                console.error("Error fetching locations:", error);
            }
        };

        fetchLocations();
    }, []);

    return (
        <div className="locations columns" id="Locations">
            {locations.map((location) => (
                <Location
                    name={location.name}
                    img={location.img}
                    description={location.description}
                />
            ))}
        </div>
    );
};

export default FaithLocations;