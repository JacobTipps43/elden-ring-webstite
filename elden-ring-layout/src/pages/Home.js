import "../css/Home.css";
import React from 'react';

const Home = () => {
    return (
        <div>
        <div className="columns" id="main-welcome">
            <section className="one">
                <h3>Why this Website?</h3>
                <p>There are hundreds of websites with some made by credible sources, and some not. I am making this website because I want one source that you can trust that is made by a person who has put hundreds upon hundreds of hours into this game. I have also played almost every type of build and beat the game with almost every different kind of build, so I know what works and is good advise, and what advise should be ignored.</p>
            </section>
            <section className="three"><img src="images/index/elden-ring-title-screen.png" alt="Elden Ring" /></section>
            <section className="one">
                <h3>About the Creator</h3>
                <p>My name is Jacob Tippett and I am a sophomore at the University of South Carolina with a major in CIS. I am an avid gamer who has played hundreds of different games, from the most chill farming game, to the most intense Souls-Likes, I love video games. I also love spreading information about games that could help people which is my main inspiration for making this website.</p>
            </section>
        </div>
        <div className="columns">
            <section className="one"><img src="images/index/ER_Margit_Boss.png" alt="Margit, The Fell Omen"/></section>
            <section className="one"><img src="images/index/ER_Starscourge_Radahn.png" alt="Star Scourage Radahn"/></section>
            <section className="one"><img src="images/index/malaniea.png" alt="Malaniea, Blade of Miquella"/></section>
            <section className="one"><img src="images/index/godfrey-first-elden-lord-hoarah-loux.png" alt="Godfrey, The First Elden Lord"/></section>
            <section className="one"><img src="images/index/Elden-Ring-Maliketh-Roaring.png" alt="Maliketh the Black Blade"/></section>
        </div>
        </div>
    );
};
export default Home;