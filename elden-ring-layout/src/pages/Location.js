import React from 'react';
import "../css/Location.css";
import StrengthLocations from '../components/Locations/StrengthLocation';
import DexterityLocations from '../components/Locations/DexterityLocations';
import MageLocations from '../components/Locations/MageLocations';
import ArcaneLocations from '../components/Locations/ArcaneLocations';
import FaithLocations from '../components/Locations/FaithLocations';

const Location = () => {
    return (
        <>
        <h1 id="title">Locations for Best Items in the Build</h1>
        <div>
            <p id="tableNames">Strength Build Items</p>
            <StrengthLocations />

            <p id="tableNames">Dexterity Build Items</p>
            <DexterityLocations />

            <p id="tableNames">Mage Build Items</p>
            <MageLocations />

            <p id="tableNames">Arcane Build Items</p>
            <ArcaneLocations />

            <p id="tableNames">Strength Build Talismans</p>
            <FaithLocations />
        </div>
        </>
    );
};

export default Location;
