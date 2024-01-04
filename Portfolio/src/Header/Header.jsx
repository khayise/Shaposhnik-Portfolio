import { Fade } from "react-reveal"
import styles from "/src/Header/Header.module.css"
import { Link, animateScroll as scroll } from "react-scroll";


function Header () {
    return (
        <Fade top>
            <header className={styles.header}>
                    <ul className={styles.container}>
                        <li>
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                            >HOME</Link>
                        </li>
                        <li><Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                            >ABOUT ME</Link></li>
                        <li><Link
                                activeClass="active"
                                to="friends"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                            >FRIENDS</Link></li>
                        <li><Link
                                activeClass="active"
                                to="hobbys"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                            >HOBBYS</Link></li>
                    </ul>
            </header>
        </Fade>
    )

}

export default Header