import "./HeaderComp.css"

export const HeaderComp = () => {

    return (
        <div>
            <header>
                <div className="barra">
                    <h1>Raúl Torres</h1>
                </div>
                <nav>
                    <div className="menu">
                        <ul>
                            <li><a href="#bannerPrincipal">INICIO</a></li>
                            <li><a href="#sobreMi">SOBRE MI</a></li>
                            <li><a href="#skills">HABILIDADES</a></li>
                            <li><a href="#Trabajo">TRABAJO</a></li>
                            
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )

}