import styles from '/src/Friends/FriendCard.module.css'

function FriendCard(props) {
    return(
        <div className={styles.card}>
            <img src={props.friendPhoto} alt="" />
            <h2>{props.name}, {props.age}</h2>
            <p className={styles.description}>{props.description}</p>
            <div className={styles.line}></div>
        </div>
    )
}

export default FriendCard