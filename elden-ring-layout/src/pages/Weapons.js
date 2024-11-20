import React from 'react';
import "../css/Weapons.css";
import StrengthWeapons from '../components/Weapons/StrengthWeapons';
import DexterityWeapons from '../components/Weapons/DexterityWeapons';
import MageWeapons from '../components/Weapons/MageWeapons';
import ArcaneWeapons from '../components/Weapons/ArcaneWeapons';
import FaithWeapons from '../components/Weapons/FaithWeapons';

const Weapons = () => {
    
    return (
        <>
            <p id="tableNames">Strength Build Weapons</p>

            <StrengthWeapons />

            <p id="tableNames">Dexterity Build Weapons</p>
            <DexterityWeapons />

            <p id="tableNames">Mage Build Weapons</p>
            <MageWeapons />

            <p id="tableNames">Arcane Build Weapons</p>
            <ArcaneWeapons />

            <p id="tableNames">Faith Build Weapons</p>
            <FaithWeapons />


        </>
    );
};

export default Weapons;