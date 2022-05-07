import styles from "./bookMark.module.css"
import { ReactComponent as BookMarkFullIcon } from "../../assets/icon-bookmark-full.svg"
import { ReactComponent as BookMarkEmptyIcon } from "../../assets/icon-bookmark-empty.svg"


function BookMark(props) {

    return (

        <div aria-label="bookmark" className={styles.container}>
            {props.isBookmarked ? <BookMarkFullIcon /> : <BookMarkEmptyIcon />}
        </div>


    )
}

export default BookMark;