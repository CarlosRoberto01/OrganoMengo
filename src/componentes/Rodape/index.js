import "./Rodape.css"

const Rodape = () => {
    return (
        <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/carlos-roberto-alves-bezerra-luna-125288224/" target="blank">
                        <img src="/imagens/in.png" alt="Linkedin" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/CarlosRoberto01" target="blank">
                        <img src="/imagens/github.png" alt="Github" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/carloos.roberto/?hl=pt-br" target="blank">
                        <img src="/imagens/ig.png" alt="Instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="Símbolo do flamengo" />
        </section>
        <section>
            <p>
                Desenvolvido por Carlos Roberto
            </p>
        </section>
    </footer>
    )
}

export default Rodape