export default function CafeList({ cafes, onSelect }) {
  return (
    <div className="cafe-list">
      <h2>Nearby Cafes</h2>
      <ul>
        {cafes.map((cafe) => (
          <li key={cafe.id} onClick={() => onSelect(cafe)}>
            {cafe.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
