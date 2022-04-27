import styles from "./bookMark.module.css"
import { ReactComponent as BookMarkFullIcon } from "../../assets/icon-bookmark-full.svg"
import { ReactComponent as BookMarkEmptyIcon } from "../../assets/icon-bookmark-empty.svg"


function BookMark(isBookmarked) {


    return (

        <div aria-label="bookmark" className={styles.container}>
            {isBookmarked ? <BookMarkFullIcon /> : <BookMarkEmptyIcon />}
        </div>


    )
}

export default BookMark;