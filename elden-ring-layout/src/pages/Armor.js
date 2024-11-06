import React from 'react';
import "../css/Armor.css";

const Armor = () => {
    return (
        <div>
            <h1 id="Title">Armor for Each Build</h1>
            <p id="tableNames">Strength Build Armor</p>
            <div id="Armor" class="columns">
                <section class="one">
                    <p>General Radahn’s Set</p>
                    <div><img src="images/Armor/radahn_set.png" alt="Radahn Armor Set"/></div>
                    <p>General Radahn’s Set in Elden Ring is a massive, imposing armor worn by the legendary Starscourge Radahn. Adorned with red and gold, the set offers excellent physical defense and high resistance to magic. The armor’s towering presence reflects Radahn’s unmatched strength, and the lion motifs symbolize his ferocious power in battle. Though heavy, it provides exceptional protection, fitting for a warrior who fought against the very stars themselves.</p>
                </section>
            </div>

            <p id="tableNames">Dexterity Build Armor</p>
            <div id="Armor" class="columns">
                <section class="one">
                    <p>Hoslow's Set</p>
                    <div><img src="images/Armor/hoslow-set.png" alt="Hoslow Armor Set"/></div>
                    <p>Hoslow's Set in Elden Ring is an ornate armor worn by Juno Hoslow, a knight of distinguished lineage. The set features intricate silver detailing and a flowing red cape, symbolizing noble heritage and pride. It provides solid protection with a balanced mix of poise and defense, making it suitable for both offense and defense. The set’s elegant yet intimidating design mirrors Hoslow’s refined but deadly combat style.</p>
                </section>
            </div>

            <p id="tableNames">Mage Build Armor</p>
            <div id="Armor" class="columns">
                <section class="one">
                    <p>Preceptor's Set</p>
                    <div><img src="images/Armor/preceptor-set.png" alt="Preceptor Armor Set"/></div>
                    <p>The Preceptor's Set in Elden Ring is an elegant, scholarly armor worn by the instructors of the Raya Lucaria Academy. This set features intricate patterns and vibrant hues, symbolizing the wearer's deep connection to magic and knowledge. It provides solid resistance to magic while enhancing sorcery and intelligence. The flowing robes and unique design reflect the prestigious status of its wearers, making it a fitting choice for those who wield both spell and blade.</p>
                </section>
            </div>

            <p id="tableNames">Arcane Build Armor</p>
            <div id="Armor" class="columns">
                <section class="one">
                    <p>War Surgeon Set</p>
                    <div><img src="images/Armor/war_surgeon_set.png" alt="War Surgeon Armor Set"/></div>
                    <p>The War Surgeon Set in Elden Ring is light armor favored by the bloodthirsty War Surgeons. It offers moderate protection and high mobility, ideal for evasive playstyles. The White Mask boosts attack power by 10% when near enemies affected by blood loss, making it an excellent choice for arcane builds that focus on status effects. Its bloodstained design complements both style and damage potential for arcane users.</p>
                </section>
            </div>

            <p id="tableNames">Faith Build Armor</p>
            <div id="Armor" class="columns">
                <section class="one">
                    <p>Haligtree Soldier Set</p>
                    <div><img src="images/Armor/haligtree_knight_set.png" alt="Haligtree Knight Armor Set"/></div>
                    <p>The Haligtree Knight in Elden Ring is a formidable warrior clad in the Haligtree Knight Set. Known for their exceptional combat skills and unwavering loyalty, these knights serve as protectors of the sacred Haligtree. Armed with a shield and a sword, they excel in both offense and defense, capable of executing powerful attacks while maintaining strong poise. Their elegant armor reflects their noble status, making them a symbol of grace and strength in the realm.</p>
                </section>
            </div>
        </div>
    );
};

export default Armor;