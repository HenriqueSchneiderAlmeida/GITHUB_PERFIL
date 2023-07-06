import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [entraUsuario, setEntraUsuario] = useState('')
  return (
    <>
      <input type="text" onBlur={(e) => setEntraUsuario(e.target.value)}></input>
      {entraUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={entraUsuario} />
          <ReposList nomeUsuario={entraUsuario} />
        </>
      )}
    {formEstaVisivel && (
      <Formulario />
    )}
    
    <button onClick={() => setFormularioEstaVisivel(!formEstaVisivel) } type="button"> toggle form</button>
    </> 
  )
}

export default App