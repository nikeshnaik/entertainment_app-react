import styles from "./layout.module.css"

function Layout(props) {
    return (

        <div role="main" className={styles.container}>
            {props.children}
        </div>

    )
}

export default Layout;