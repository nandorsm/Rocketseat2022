import styles from './Post.module.css';

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.post} src="https://github.com/nandorsm.png" />
                    <div>
                        <strong>Fernando Caetano</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='26 de Dezembro às 22:24h' dateTime='2022-12-26 22:24:30'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href=''>jane.design/doctorcare</a></p>
                <p><a href=''>#novoprojeto #nlw #rocketseat</a></p>
            </div>


        </article>
    );
}