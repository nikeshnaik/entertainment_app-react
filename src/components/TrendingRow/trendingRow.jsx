import styles from "./trendingRow.module.css"

function TrendingRow(props) {

    return (

        <div className={styles.container} tabIndex="0">
            <h1 className={styles.title}>Trending</h1>
            <div className={styles.row_container}>
                {props.children}
            </div>
        </div>

    )
}


export default TrendingRow;