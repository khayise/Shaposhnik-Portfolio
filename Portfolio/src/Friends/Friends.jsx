import { Fade } from "react-reveal"
import FriendCard from "/src/Friends/FriendCard.jsx";

import styles from '/src/Friends/Friends.module.css'

import photoRoma from '/public/roma.jpg'
import photoAnton from '/public/anton.jpg'
import photoAndrii from '/public/andreyd.jpg'

function Friends(props) {
    return (
        <div className={styles.friends} id={props.sectionName}>
            <Fade right>
                <h1 className={styles.h1}>{props.section}////////</h1>
            </Fade>
            <Fade bottom>
                <div className={styles.cards}>
                    <FriendCard friendPhoto={photoRoma} name="Рома" age="100" description="Классный пацан, в доту с ним играем"/>
                    <FriendCard friendPhoto={photoAndrii} name="Андрей" age="23" description="Плэйбой, миллионер, филантроп"/>
                    <FriendCard friendPhoto={photoAnton} name="Антон" age="24" description="Хороший парень, но иногда чмоня"/>
                </div>
            </Fade>
           
        </div>
    )

}

export default Friends