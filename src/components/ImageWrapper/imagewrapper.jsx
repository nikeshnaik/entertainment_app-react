import styles from "./imagewrapper.module.css"


function ImageWrapper(props) {

    let smallSrcImage = props.smallSrcImage ? props.smallSrcImage + " 1x" : null
    let mediumSrcImage = props.mediumSrcImage ? props.mediumSrcImage + " 2x" : null
    let largeSrcImage = props.largeSrcImage ? props.largeSrcImage + " 3x" : null

    let srcSetValue = [smallSrcImage, mediumSrcImage, largeSrcImage].filter(item => item !== null).join(",")


    return (
        <img src={props.smallSrcImage} alt="image" className={styles.imageContainer}
            srcSet={srcSetValue} />
    )
}


export default ImageWrapper;