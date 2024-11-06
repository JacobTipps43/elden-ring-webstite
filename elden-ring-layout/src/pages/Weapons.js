import React from 'react';
import "../css/Weapons.css";

const Weapons = () => {
    return (
        <div>
            <h1 id="Title">Weapons for Each Build</h1>
            <p id="tableNames">Strength Build Weapons</p>
            <div class="columns" id="Weapons">
                <section class="one">
                    <p>Greatsword</p>
                    <div id="weaponimages"><img src="images/Weapons/Greatsword.png" alt="Greatsword"/></div>
                    <p>The Greatsword in Elden Ring is a massive, heavy weapon, dealing devastating damage with wide swings. When paired with the Lion’s Claw Ash of War, it becomes even more powerful, allowing for a fierce, leaping attack that crushes enemies with overwhelming force.</p>
                </section>
            </div>

            <p id="tableNames">Dexterity Build Weapons</p>
            <div class="columns" id="Weapons">
                <section class="one">
                    <p>Uchigatana</p>
                    <div id="weaponimages"><img src="images/Weapons/Uchigatana.png" alt="Uchigatana"/></div>
                    <p>The Uchigatana is a sleek katana, known for its quick strikes and impressive bleed buildup. Its Unsheathe Ash of War allows for a swift, devastating draw attack that catches foes off guard, making it a deadly choice for agile combatants seeking precision and speed.</p>
                </section>
            </div>

            <p id="tableNames">Mage Build Weapons</p>
            <div class="columns" id="Weapons">
                <section class="one">
                    <p>Dark Moon Greatsword</p>
                    <div id="weaponimages"><img src="images/Weapons/DarkMoon.png" alt="Dark Moon Greatsword"/></div>
                    <p>The Dark Moon Greatsword is a powerful, elegant weapon, known for its magical prowess. Its unique design reflects the moon's beauty and strength. The Moonlight Greatsword Ash of War allows for a charged magical attack that releases a wave of moonlight, dealing significant damage and enhancing the sword's mystical allure in battle.</p>
                </section>
            </div>

            <p id="tableNames">Arcane Build Weapons</p>
            <div class="columns" id="Weapons">
                <section class="one">
                    <p>Rivers Of Blood</p>
                    <div id="weaponimages"><img src="images/Weapons/Rivers.png" alt="Rivers of Blood"/></div>
                    <p>The Rivers of Blood is a deadly katana, known for its exceptional bleed buildup. Its striking design complements its swift, lethal attacks. The Corpse Piler Ash of War unleashes a series of slashes that send out a wave of blood, devastating enemies and making it a formidable choice in both PvE and PvP. It is so good we are mentioning it twice!!</p>
                </section>
            </div>

            <p id="tableNames">Faith Build Weapons</p>
            <div class="columns" id="Weapons">
                <section class="one">
                    <p>Blasphemous Blade</p>
                    <div id="weaponimages"><img src="images/Weapons/Blasphemous_Blade.png" alt='Blasphemous Blade'/></div>
                    <p>Considered the best weapon in the entire game, the Blasphemous Blade is a powerful weapon with a striking design that reflects its dark lore. It delivers heavy damage with each swing. The Taker's Flames Ash of War allows the wielder to unleash a fiery attack that restores health based on damage dealt, making it a formidable choice in both offense and sustainability during combat.</p>
                </section>
            </div>


        </div>
    );
};

export default Weapons;