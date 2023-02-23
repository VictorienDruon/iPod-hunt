export default function Cover({ className, details }) {
    return (<div className={className}>
    <img src={details.cover} alt={`${details.single} cover`} />
    </div>
)}