import "./SobreMiComp.css";
import perfil from "./imagenPerfil.jpg"

export const SobreMiComp = () => {

    return (
        <div>
            <section className="about" id="sobreMi">
                <div className="sobre">
                    <div data-aos="fade-right" data-aos-duration="2000">
                    <img src={perfil} alt="perfil"/>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000">
                    <p>Soy un desarrollador web trabajando principalmente en front-end, aunque he trabajado también con back-end. Antes me dedicaba a la creación de proyectos audiovisuales como edición y montaje de video, dirección, cinematografía y dirección de arte. Me estoy reinventando para cumplir mis objetivos y entrar en el mercado laboral en el área de la programación y estoy dispuesto a aprender.</p>
                    </div>
                </div>
            </section>
        </div>
    )

}