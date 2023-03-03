export default function Cover({details, ref, className, zIndex, handleCoverClick}) {
    const {single, cover, id} = details;

    return (
    <div
        data-id={id}
        ref={ref}
        className={className}
        style={{ zIndex: zIndex}}
        onClick={handleCoverClick}
    >
        <img src={cover} alt={`${single} cover`}/>
        <img className="mirror-effect" src={cover} alt={`${cover} cover mirror`}/>
    </div>
    )
}