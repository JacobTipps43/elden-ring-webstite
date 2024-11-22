import "../css/Weapon.css";

const Weapon = (weapon) => {
    return(
    <section className="weapon one">
        <p>{weapon.name}</p>
        {
            console.log(`https://elden-ring-backend-07b0.onrender.com/${weapon.img}`)
        }
        <div id="weaponimages"><img src={`https://elden-ring-backend-07b0.onrender.com/images/Weapons/${weapon.img}`} alt={weapon.name}/></div>
        <p>{weapon.description}</p>
    </section>
    );
};

export default Weapon;