import activities from "../data/activities.json";
import ActivityCard from "./ActivityCard";

function ActivityList({ onAdd }) {
  return (
    <section className="activities">
      <h2>Activitats disponibles</h2>
      <div className="grid">
        {activities.map(a => (
          <ActivityCard key={a.id} activity={a} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
export default ActivityList;
