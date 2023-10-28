const Badges = ({ title, list, color }) => {
  return (
    <div>
      <h5>{title}</h5>

      {list.map((item) => (
        <p key={item.id} className={`badge ${color} me-2 mb-3`}>
          {item.name}
        </p>
      ))}
    </div>
  );
};

export default Badges;
