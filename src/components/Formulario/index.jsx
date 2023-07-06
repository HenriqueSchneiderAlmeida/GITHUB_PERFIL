import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState(''); 

// mount quando montado
// update quando atualizado
// onmount quando desmontado

    useEffect(() => {
        console.log("O componente iniciou!");

        return () => {
            console.log("O coponente finalizou!")
        }
    }, []);

    useEffect(() => {
        console.log("Alteração do curso");
    },[nome]);

    const alteraCurso = (evento) => {
        //console.log(evento.target.value)
        setNome(captaCurso =>{
            return evento.target.value;
        })
}
    const renderizandoResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return ( 
                <p>Voce foi aprovado no curso {nome}, sua média foi {media}</p>
            )
            } else {
                return (
                <p>Você não foi aprovado no curso {nome}, sua média foi {media}</p>    
                ) 
            }
        }

    return (
        <form> 
            <ul>
                {['HTML5', 'CSS', 'JavaScript', 'TypeScript', 'BootStrap', 'vueJS', 'React'].map(item => (
                    <li key={item}>{item}</li>
                ))}
    </ul>
            <input type="text" placeholder="Curso avaliado:" onChange={alteraCurso} /> 
            <input type="number" placeholder="Nota ada matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota bda matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota cda matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            
            {renderizandoResultado()}
        </form>
    )
}

export default Formulario