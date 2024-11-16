
const Location = (location) => {
    return(
    <section className="talisman one">
        <p>{location.name}</p>
        <div id="locationimages"><img src={location.img} alt={location.name}/></div>
        <p>{location.description}</p>
    </section>
    );
};

export default Location;