function ActivityCard({ activity, onAdd }) {
  return (
    <div className="card">
      <h3>{activity.name}</h3>
      <p>{activity.description}</p>
      <button onClick={() => onAdd(activity)}>Afegir</button>
    </div>
  );
}
export default ActivityCard;
