import React from 'react';
import "../css/Talismans.css";
import StrengthTalismans from '../components/Talismans/StrengthTalismans';
import DexterityTalismans from '../components/Talismans/DexterityTalismans';
import MageTalismans from '../components/Talismans/MageTalismans';
import ArcaneTalismans from '../components/Talismans/ArcaneTalismans';
import FaithTalismans from '../components/Talismans/FaithTalismans';

const Talismans = () => {
    return (
        <>
        <h1 id='Title'>Talismans for Each Build</h1>
        <div>
            <p id="tableNames">Strength Build Talismans</p>
            <StrengthTalismans />

            <p id="tableNames">Dexterity Build Talismans</p>
            <DexterityTalismans />

            <p id="tableNames">Mage Build Talismans</p>
            <MageTalismans />

            <p id="tableNames">Arcane Build Talismans</p>
            <ArcaneTalismans />

            <p id="tableNames">Faith Build Talismans</p>
            <FaithTalismans />
        </div>
        </>
    );
};

export default Talismans;