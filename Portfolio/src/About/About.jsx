import styles from '/src/About/About.module.css'
import { Fade } from "react-reveal"

function About(props) {
    return (
        <div className={styles.about} id={props.sectionName}>
            <Fade left>
                <h1>{props.section}////////</h1>
            </Fade>

            <div className={styles.aboutSection}>
                <Fade left>
                    <img src="/public/adnrew.jpg" alt="myPhoto" className={styles.photo} />
                </Fade>
                <Fade right>
                    <p className={styles.textAbout}>{props.text}</p>
                </Fade>
            </div>
        </div>

    )
}

export default About