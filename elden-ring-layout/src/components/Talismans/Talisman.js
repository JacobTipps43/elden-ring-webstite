import "../css/Talisman.css";

const Talisman = (Talisman) => {
    return(
    <section className="talisman one">
        <p>{Talisman.name}</p>
        <div id="weaponimages"><img src={`https://elden-ring-backend-07b0.onrender.com/${Talisman.img}`} alt={Talisman.name}/></div>
        <p>{Talisman.description}</p>
    </section>
    );
};

export default Talisman;