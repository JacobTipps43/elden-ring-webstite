import "../css/Weapon.css";

const Weapon = (weapon) => {
    return(
    <section className="weapon">
        <h3>{weapon.name}</h3>
        <img src={weapon.image} alt={weapon.name} />
        <p>{weapon.description}</p>
    </section>
    );
};

export default Weapon;