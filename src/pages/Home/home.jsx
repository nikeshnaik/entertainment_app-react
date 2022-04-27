import styles from "./home.module.css"

function Home(props) {

    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default Home