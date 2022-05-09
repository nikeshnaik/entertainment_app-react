import { ReactComponent as MovieCategoryIcon } from '../../assets/icon-category-movie.svg'
import { ReactComponent as TvShowCategoryIcon } from '../../assets/icon-category-tv.svg'
import styles from './showdescription.module.css'

function ShowDescription(props) {

    let [showDetailClassName, titleClass] = props.isTrending ? [styles.show_details_large, styles.title_large] : [styles.show_details_small, styles.title_small]

    let categoryIcon = props.category === 'Movie' ? <MovieCategoryIcon /> : <TvShowCategoryIcon />

    return (
        <div className={styles.container}>
            <div className={showDetailClassName}>
                <span className={styles.year}>{props.yearOfRelease}</span>
                <div className={styles.dot}></div>
                {categoryIcon}
                <span>{props.category}</span>
                <div className={styles.dot}></div>
                <span className={styles.rating}>{props.rating}</span>
            </div>
            <span className={titleClass}>{props.title}</span>

        </div >
    )
}


export default ShowDescription;