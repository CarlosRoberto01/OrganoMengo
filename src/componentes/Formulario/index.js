import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"
import {useState} from "react"

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [numero, setNumero] = useState('')
    const [imagem, setImagem] = useState('')
    const [cargo, setCargo] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado ({
            nome:nome,
            numero:numero,
            imagem:imagem,
            cargo:cargo
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card de informações do jogador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholde="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Número da camisa" 
                    placeholder="Digite seu número"
                    valor={numero}
                    aoAlterado={valor => setNumero(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio ={true} 
                    label ="Posição" 
                    itens={props.times}
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}

export default Formulario