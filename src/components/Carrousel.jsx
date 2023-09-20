import '../css/Carousel.css'
import img01 from "../images/01.jpg"
import img02 from "../images/02.jpg"
import img03 from "../images/03.jpg"
import img04 from "../images/04.jpg"
import img05 from "../images/05.jpg"
export function Carrousel(){
    return(<>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="bd-placeholder-img" src={ img01}  aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> */}

                <div className="container">
                <div className="carousel-caption text-start">
                    <h1>Electroled.</h1>
                    <p>Materiales electricos para la construcción.</p>
                    {/* <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p> */}
                </div>
                </div>
            </div>
            <div className="carousel-item">
            <img className="bd-placeholder-img" src={ img02}  aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

                <div className="container">
                <div className="carousel-caption">
                    <h1>Manejamos las mejores marcas.</h1>
                    <p>Los mejores precios de la ciudad.</p>
                    {/* <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p> */}
                </div>
                </div>
            </div>
            <div className="carousel-item">
            <img className="bd-placeholder-img" src={ img03}  aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

                <div className="container">
                <div className="carousel-caption text-end">
                    <h1>Productos 100% certificados</h1>
                    <p>Materiales de la mejor calidad.</p>
                    <p><a className="btn btn-lg btn-warning" href="#">Catalogo</a></p>
                </div>
                </div>
            </div>
            <div className="carousel-item">
            <img className="bd-placeholder-img" src={ img04}  aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

                <div className="container">
                <div className="carousel-caption text-end">
                    <h1>Realiza tu cotización</h1>
                    <p>Veras que manejamos los mejores precios.</p>
                    <p><a className="btn btn-lg btn-warning" href="#">Ver Catalogo</a></p>
                </div>
                </div>
            </div>
            {/* <div className="carousel-item">
            <img className="bd-placeholder-img" src={ img05}  aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

                <div className="container">
                <div className="carousel-caption text-end">
                    <h1>One more for good measure.</h1>
                    <p>Some representative placeholder content for the third slide of this carousel.</p>
                    <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                </div>
                </div>
            </div> */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>)
}