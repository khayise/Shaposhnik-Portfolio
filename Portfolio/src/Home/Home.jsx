import { Fade } from 'react-reveal'
import ebalo from '/public/andrusha.gif'

import styles from '/src/Home/Home.module.css'

function Home() {
    return (
        <div id="home">
            <div className={styles.person}>
                <Fade top>
                    <div className={styles.block}>
                        <div className={styles.line}></div>
                        <h1>THE <span className={styles.red}>–</span></h1>
                        <h1 className={styles.toRight}>FOLIO</h1>
                    </div>
                    <div className={styles.block}>
                        <h2>20<span className={styles.red}>23</span></h2>
                        <div className={styles.line}></div>
                        <img className='sf' src={ebalo}></img>
                    </div>
                </Fade>
            </div>
            <div className={styles.name}>ANDREW SHAPOSHNIK</div>
        </div>

        
    )
}

export default Home