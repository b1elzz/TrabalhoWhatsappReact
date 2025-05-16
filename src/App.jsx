import { useState } from 'react'
import './App.css'


function Botao({ onClick }) {
  return (
    <button className="options" onClick={onClick} title="Opções">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
    </button>
  )
}

function Pontos({ onClick }) {
  return (
    <button className="pontos" onClick={onClick} title="Ponto">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
    </button>
  )
}



function Mensagem({ descricao, enviado, visualizado }) {
  return (
    
    <li className={`message ${enviado ? 'enviado' : 'recebido'}`}>
      <Botao />
      
      <span className={`visualized ${visualizado ? 'yes' : ''}`}>
        {visualizado ? (

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M374.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7 86.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" />
          </svg>
        ) : (

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M374.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7 86.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" />
          </svg>
          
        )}
      </span>

      <p>{descricao}</p>
    </li>
  )
}


function App() {
  const [mensagens] = useState([
    { descricao: "Oi...", enviado: false, visualizado: true },
    { descricao: "Tu não me ama mais?", enviado: false, visualizado: true },
    { descricao: "Oi, boa tarde.", enviado: true, visualizado: false },
    { descricao: "Quem é você mesmo?", enviado: true, visualizado: false }
  ])

  return (
    <div className="chat">
      <div className="header">
        <Pontos />
        <h3>Meu Chat</h3>
      </div>
      <div className="content">
        <ul>
          {mensagens.map((mensagem, index) => (
            <Mensagem
              key={index}
              descricao={mensagem.descricao}
              enviado={mensagem.enviado}
              visualizado={mensagem.visualizado}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App