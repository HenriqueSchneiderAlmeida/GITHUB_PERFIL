import { useEffect, useState } from "react";

import style from './ReposList.module.css';

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 3000)
        })
    }, [nomeUsuario]);

    return (
      <div className="container">
        {estaCarregando ? (
        <h1>Carregando...</h1>
        ) : 
        (
        <ul className={style.list}>
            {repos.map(({id, name, language, html_url }) => (
                <li className={style.listItem} key={id}> 
                    <div className={style.itemName}>
                        <b>Nome:</b> 
                        {name} 
                    </div>
                    <div className={style.itemLanguage}>
                        <b> Linguagem:</b> 
                        {language}
                    </div>
                    <a className={style.itemLink} target="_blank" href={html_url}> Visitar no Github</a>
                </li> 
            ))}            
            
            {/* acima desestruturado como ES6
            {repos.map(repositorio => (
            <li key={repositorio.id}>
                    <b>Nome:</b> {repositorio.name} <br />
                    <b> Linguagem:</b> {repositorio.language} <br />
                    <a target="_blank" href={repositorio.html_url}> Visitar no Github</a>
            </li> 
            ))}             */}
        </ul>
        )}
      </div>
    )
}

export default ReposList;

