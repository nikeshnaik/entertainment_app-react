import styles from "./gridlayout.module.css"


function GridLayout(props) {

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{props.section}</h2>
            <div className={styles.gridContainer}>
                {props.children}
            </div>
        </div>
    )
}

export default GridLayout;