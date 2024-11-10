const WeaponItem = ({ weapon }) => (
    <section className="weapon">
        <h3>{weapon.name}</h3>
        <img src={weapon.img} alt={weapon.name} />
        <p>{weapon.description}</p>
    </section>
);

export default WeaponItem;