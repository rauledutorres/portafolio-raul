import "./SkillsComp.css"

export const SkillsComp = () => {

    return (
        <div>
            <section id="skills">
                <h2>Habilidades</h2>
                <div class="habilidades">
                    <div class="lenguajes">
                        <h3>Lenguajes</h3>
                        <div class="lenguaje">
                            <div class="containerLang">
                                <div class="nombre">HTML & CSS</div> 
                                <div class="porcentaje">90%</div>
                                <div class="progreso">
                                    <div class="barra"></div>
                                </div>
                            </div>
                            <div class="containerLang">
                                <div class="nombre">JavaScript</div> 
                                <div class="porcentaje">50%</div>
                                <div class="progreso">
                                    <div class="barra"></div>
                                </div>
                            </div>
                            <div class="containerLang">
                                <div class="nombre">PHP</div> 
                                <div class="porcentaje">30%</div>
                                <div class="progreso">
                                    <div class="barra"></div>
                                </div>
                            </div>
                            <div class="containerLang">
                                <div class="nombre">MySQL</div> 
                                <div class="porcentaje">70%</div>
                                <div class="progreso">
                                    <div class="barra"></div>
                                </div>
                            </div>
                            <div class="containerLang">
                                <div class="nombre">React</div> 
                                <div class="porcentaje">30%</div>
                                <div class="progreso">
                                    <div class="barra"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="competencias">
                        <h3>Competencias</h3>

                    </div>
                </div>
            </section>
        </div>
    )

}