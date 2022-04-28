import { ReactComponent as MovieCategoryIcon } from '../../assets/icon-category-movie.svg'
import { ReactComponent as TvShowCategoryIcon } from '../../assets/icon-category-tv.svg'
import styles from './showdescription.module.css'

function ShowDescription(props) {

    let [showDetailClassName, titleClass] = props.isTrending ? [styles.show_details_large, styles.title_large] : [styles.show_details_small, styles.title_small]

    let categoryIcon = props.category === 'Movie' ? <MovieCategoryIcon /> : <TvShowCategoryIcon />

    return (
        <div className={styles.container}>
            <div className={showDetailClassName}>
                <span id={styles.year}>{props.yearOfRelease}</span>
                <div id={styles.dot}></div>
                {categoryIcon}
                <span>{props.category}</span>
                <div id={styles.dot}></div>
                <span id={styles.rating}>{props.rating}</span>
            </div>
            <span id={titleClass}>{props.title}</span>

        </div>
    )
}


export default ShowDescription;