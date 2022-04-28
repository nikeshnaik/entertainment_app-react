import { useState } from "react";
import BookMark from "../BookMark/bookMark";
import ImageWrapper from "../ImageWrapper/imagewrapper";
import PlayButton from "../PlayButton/playbutton";
import ShowDescription from "../ShowDescription/showdescription";
import styles from "./showtile.module.css"

let data = {

    "title": "Beyond Earth",
    "thumbnail": {
        "trending": {
            "small": "./assets/thumbnails/beyond-earth/trending/small.jpg",
            "large": "./assets/thumbnails/beyond-earth/trending/large.jpg"
        },
        "regular": {
            "small": "./assets/thumbnails/beyond-earth/regular/small.jpg",
            "medium": "./assets/thumbnails/beyond-earth/regular/medium.jpg",
            "large": "./assets/thumbnails/beyond-earth/regular/large.jpg"
        }
    },
    "year": 2019,
    "category": "Movie",
    "rating": "PG",
    "isBookmarked": false,
    "isTrending": true
}



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

    if (data.isTrending) {
        return (
            <div className={`${styles.container} ${styles.trending}`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>

                <ImageWrapper smallSrcImage={data.thumbnail.trending.small} mediumSrcImage={data.thumbnail.trending.medium} largeSrcImage={data.thumbnail.trending.large} />
                <div className={styles.main_trending}>
                    <div className={styles.bookmark_wrapper}> <BookMark /></div>
                    <div className={styles.playbutton_wrapper}><PlayButton isHover={isHover} /></div>
                    <div className={styles.showdescription_wrapper}>
                        <ShowDescription isTrending={data.isTrending} yearOfRelease={data.year} category={data.category} rating={data.rating} title={data.title} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={`${styles.container} ${styles.regular}`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>

            <ImageWrapper smallSrcImage={data.thumbnail.regular.small} mediumSrcImage={data.thumbnail.regular.medium} largeSrcImage={data.thumbnail.regular.large} />
            <div className={styles.main_regular}>
                <div className={styles.bookmark_wrapper}> <BookMark /></div>
                <div className={styles.playbutton_wrapper}><PlayButton isHover={isHover} /></div>

            </div>
            <div className={styles.showdescription_wrapper_regular}>
                <ShowDescription isTrending={data.isTrending} yearOfRelease={data.year} category={data.category} rating={data.rating} title={data.title} />
            </div>
        </div>
    )

}


export default ShowTile;