import './hero.css';

export default function Hero() {

    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./assets/hero/hero1.png" className="d-block w-100" alt="wallpaper1"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/hero/hero2.jpg" className="d-block w-100" alt="wallpaper2"/>
                    </div>
                    <div className="carousel-item">
                        <img src="./assets/hero/hero3.jpg" className="d-block w-100" alt="wallpaper3"/>
                    </div>
                </div>
            </div>
        </>
    )
}