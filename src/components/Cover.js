export default function Cover({details, refProp, className, zIndex, handleCoverClick}) {
    const {single, cover, id} = details;

    return (
    <div
        data-id={id}
        ref={refProp}
        className={`covers-container ${className}`}
        style={{ zIndex: zIndex}}
        onClick={handleCoverClick}
    >
        <img className={`cover ${className}`} src={cover} alt={`${single} cover`}/>
        <img className={`cover-mirror ${className}`} src={cover} alt={`${cover} cover mirror`}/>
    </div>
    )
}