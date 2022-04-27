import styles from "./playbutton.module.css"
import { ReactComponent as PlayIcon } from "../../assets/icon-play.svg"


function PlayButton(isHover) {

    if (isHover) {
        return (

            <div className={styles.container}>
                <PlayIcon />
                <span id={styles.playtext}>Play</span>
            </div>

        )
    }

    else {
        return null;
    }
}

export default PlayButton;