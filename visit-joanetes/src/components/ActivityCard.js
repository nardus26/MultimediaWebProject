function ActivityCard({ activity, onAdd }) {
  return (
    <div className="card">
      <img
        src={activity.image}
        alt={activity.name}
        className="card-img"
      />
      <h3>{activity.name}</h3>
      <p>{activity.description}</p>
      <p className="price">{activity.price} €</p>
      <button onClick={() => onAdd(activity)}>Afegir</button>
    </div>
  );
}
export default ActivityCard;
