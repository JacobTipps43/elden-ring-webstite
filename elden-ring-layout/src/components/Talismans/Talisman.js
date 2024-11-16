import "../css/Talisman.css";

const Talisman = (Talisman) => {
    return(
    <section className="talisman one">
        <p>{Talisman.name}</p>
        <div id="weaponimages"><img src={Talisman.img} alt={Talisman.name}/></div>
        <p>{Talisman.description}</p>
    </section>
    );
};

export default Talisman;