import "../css/Weapon.css";

const Weapon = (weapon) => {
    return(
    <section className="weapon one">
        <p>{weapon.name}</p>
        <div id="weaponimages"><img src={weapon.img} alt={weapon.name}/></div>
        <p>{weapon.description}</p>
    </section>
    );
};

export default Weapon;