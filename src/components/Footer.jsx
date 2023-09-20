import logo from "../images/logoweb.png"
export function Footer(){
    return(<>
        <footer className="footer mt-auto bg-dark py-3">
            <nav className="container navbar-dark">
                <div className="row my-5">
                    <div className="col-4">
                        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
                            <img src={logo} alt="logo" width={190} height={50} />
                        </a>
                        <h4><i className="fa fa-lightbulb-o"></i>  Av 6 # 15-82 El Páramo - Cucuta</h4>
                        <h3><i className="fa fa-phone"></i>  300 886 05 53</h3>
                    </div>
                    <div className="col-4">
                    {/* <div class="col-md-6 maps" > */}
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977" width={1000} height={500} frameborder="0" style="border:0" allowfullscreen></iframe> */}
                    {/* </div> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15808.546947656017!2d-72.5038632!3d7.8807589!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e66455ce1d18459%3A0xeaf39bd1e7e1be28!2sElectroled%20Cucuta!5e0!3m2!1ses!2sco!4v1687533920828!5m2!1ses!2sco"
                        //   src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d349.3228178264762!2d-72.50399615702067!3d7.880797365418204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1687355156506!5m2!1ses!2sco"
                        width="350"
                        height="250"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        />
                    </div>
                    <div className="col-4 px-4">
                        <h3><i className="fa fa-instagram"></i> @electroleducuta</h3>
                        <h3><i className="fa fa-facebook"></i> Electroled Cucuta</h3>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p><a href="#">Volver</a></p>
                    </div>
                </div>
            </nav>
            
        </footer>
    </>)
}