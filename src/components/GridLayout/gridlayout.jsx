import styles from "./gridlayout.module.css"


function GridLayout(props) {

    return (
        <div className={styles.container}>
            <span className={styles.title}>{props.section}</span>
            <div className={styles.gridContainer}>
                {props.children}
            </div>
        </div>
    )
}

export default GridLayout;