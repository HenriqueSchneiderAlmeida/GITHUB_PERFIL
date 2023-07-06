// index.jsc da pasta Perfil
import styles from './Perfil.module.css';

const Perfil = ({nomeUsuario}) => {
    // const usuario = {
    //     nome: 'Henrique Schneider',
    //     avatar: 'https://media.licdn.com/dms/image/D4E35AQGWVQkBYn98uQ/profile-framedphoto-shrink_200_200/0/1684848118077?e=1689040800&v=beta&t=-uObm6wjrAwUOUmSfXRQDddFSzrMNC11gf7Yo4Ub29A'
    // }
    return ( 
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}
export default Perfil;