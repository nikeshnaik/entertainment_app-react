import { useState } from "react";
import BookMark from "../BookMark/bookMark";
import ImageWrapper from "../ImageWrapper/imagewrapper";
import PlayButton from "../PlayButton/playbutton";
import ShowDescription from "../ShowDescription/showdescription";
import styles from "./showtile.module.css"


function ShowTile(props) {

    const [isHover, setIsHover] = useState(false)

    const handleMouseOver = (event) => {
        setIsHover(true)
        event.stopPropagation()
    }

    const handleMouseLeave = (event) => {
        setIsHover(false)
        event.stopPropagation()
    }

    if (props.data.isTrending) {
        return (
            <div className={`${styles.container} ${styles.trending}`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>

                <ImageWrapper smallSrcImage={props.data.thumbnail.trending.small} mediumSrcImage={props.data.thumbnail.trending.medium} largeSrcImage={props.data.thumbnail.trending.large} />
                <div className={styles.main_trending}>
                    <div className={styles.bookmark_wrapper}> <BookMark /></div>
                    <div className={styles.playbutton_wrapper}><PlayButton isHover={isHover} /></div>
                    <div className={styles.showdescription_wrapper}>
                        <ShowDescription isTrending={props.data.isTrending} yearOfRelease={props.data.year} category={props.data.category} rating={props.data.rating} title={props.data.title} />
                    </div>
                </div>
            </div>
        )
    }

    else {

        return (
            <div className={`${styles.container} ${styles.regular}`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>

                <ImageWrapper smallSrcImage={props.data.thumbnail.regular.small} mediumSrcImage={props.data.thumbnail.regular.medium} largeSrcImage={props.data.thumbnail.regular.large} />
                <div className={styles.main_regular}>
                    <div className={styles.bookmark_wrapper}> <BookMark /></div>
                    <div className={styles.playbutton_wrapper}><PlayButton isHover={isHover} /></div>

                </div>
                <div className={styles.showdescription_wrapper_regular}>
                    <ShowDescription isTrending={props.data.isTrending} yearOfRelease={props.data.year} category={props.data.category} rating={props.data.rating} title={props.data.title} />
                </div>
            </div>
        )
    }

}


export default ShowTile;