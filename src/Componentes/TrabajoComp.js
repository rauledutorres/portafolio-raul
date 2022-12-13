import "./TrabajoComp.css";
//import perfil from "./imagenPerfil.jpg"

export const TrabajoComp = () => {

    return (
        <div>
            <section className="work" id="Trabajo">
                <h2>Trabajos</h2>
                <div data-aos="zoom-out-up" data-aos-duration="500">
                    <div className="containers">
                        <div  className="containerWork">
                            <div className="html">
                                <h3>HTML&CSS</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit est recusandae suscipit corrupti tenetur, eius similique eum nobis harum impedit temporibus! Accusantium at fugit saepe eaque rem, qui ducimus aspernatur!</p>
                            </div>
                        </div>
                        <div  className="containerWork">
                            <div className="javascript">
                                <h3>JavaScript</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora exercitationem quis assumenda nihil. Exercitationem rerum voluptatum id eligendi aliquid ipsam voluptatem voluptates mollitia eum aliquam pariatur, accusantium sequi unde.</p>
                            </div>
                        </div>
                        <div  className="containerWork">
                            <div className="otros">
                                <h3>Otros Trabajos</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                <div className="videoYt">
                                    <iframe /* width="450" height="300" */ src="https://www.youtube.com/embed/tnPK66uP01A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}