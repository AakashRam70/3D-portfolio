import "./hero.scss";

const Hero = () => {
    return (
        <div className="hero">
            <div className="textContainer">
                <h2>AAKASH RAMBHAD</h2>
                <h1>Web developer and UI designer</h1>
            </div>
            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero;