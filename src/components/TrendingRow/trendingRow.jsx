import styles from "./trendingRow.module.css"

function TrendingRow(props) {

    return (

        <div className={styles.container}>
            <span className={styles.title}>Trending</span>
            <div className={styles.row_container}>
                {props.children}
            </div>
        </div>

    )
}


export default TrendingRow;