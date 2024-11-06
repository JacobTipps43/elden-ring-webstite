import React from 'react';
import "../css/Talismans.css";

const Talismans = () => {
    return (
        <div>
            <h1 id='Title'>Talismans for Each Build</h1>
            <p id="tableNames">Strength Build Talismans</p>
            <div id="Talismans" class="columns">
                <section class="one">
                    <p>Erdtree’s Favor</p>
                    <div><img src="images/Talismans/Erdtree_Favor.png" alt='ErdTree Favor'/></div>
                    <p>Erdtree’s Favor is not only favored by Bleed players in *Elden Ring*, but it’s also one of the best talismans for strength builds. This talisman increases HP by 3%, stamina by 7%, and equipment load by 5%. Since strength builds heavily rely on health and stamina, this medallion is an invaluable asset for enhancing your survivability and combat effectiveness.</p>
                </section>
            </div>

            <p id="tableNames">Dexterity Build Talismans</p>
            <div id="Talismans" class="columns">
                <section class="one">
                    <p>Prosthesis-Wearer Heirloom</p>
                    <div><img src="images/Talismans/Prosthesis-Wearer_Heirloom.png" alt='Prosthesis Wearer Heirloom'/></div>
                    <p>The Prosthesis-Wearer Heirloom is a valuable talisman in *Elden Ring* that enhances dexterity by 5 levels. This makes it an excellent choice for players focused on dexterity builds, as it boosts both attack power and speed. Its design reflects the legacy of those who have embraced the power of prosthetics, making it a fitting addition for those who aim to maximize their agility and effectiveness in combat.</p>
                </section>
            </div>

            <p id="tableNames">Mage Build Talismans</p>
            <div id="Talismans" class="columns">
                <section class="one">
                    <p>Godfrey Icon</p>
                    <div><img src="images/Talismans/Godfrey_Icon.png" alt='Godfrey Icon'/></div>
                    <p>The Godfrey Icon talisman, featuring an emblem of Godfrey, boosts the power of charged spells and skills by an impressive 15%. This enhancement allows charged spells to deal significantly more damage, making them more effective against a variety of enemies and adding extra punch to your magical arsenal.</p>
                </section>
            </div> 

            <p id="tableNames">Arcane Build Talismans</p>
            <div id="Talismans" class="columns">
                <section class="one">
                    <p>Lord of Blood’s Exultation</p>
                    <div><img src="images/Talismans/Lord_of_Blood_Exultation.png" alt='Lord of Bloods Exultation'/></div>
                    <p>Lord of Blood’s Exultation is a powerful talisman in Elden Ring that boosts attack power by 20% when nearby enemies are affected by blood loss. This makes it particularly effective for builds that utilize bleed effects, allowing you to deal significant damage in combat. Its design reflects the theme of blood and carnage, perfectly suiting those who revel in the chaos of battle.</p>
                </section>
            </div>

            <p id="tableNames">Faith Build Talismans</p>
                <div id="Talismans" class="columns">
                    <section class="one">
                        <p>Two Fingers Heirloom</p>
                        <div><img src="images/Talismans/Two_Fingers_Heirloom.png" alt='Two Fingers Heirloom'/></div>
                        <p>The Two Fingers Heirloom is a talisman in Elden Ring that increases your faith by 5 levels. This makes it a valuable addition for faith-focused builds, enhancing your spellcasting capabilities and increasing the effectiveness of faith-based incantations. Its design reflects the connection to the Two Fingers, symbolizing guidance and devotion, making it an essential choice for players who seek to wield divine power.</p>
                    </section>
                </div>
        </div>
    );
};

export default Talismans;