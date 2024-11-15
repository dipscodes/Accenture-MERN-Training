function Jsx() {
  const name = "Sachin Tendulkar";
  const persons = [
    { id: 10011, name: "Radha" },
    { id: 10012, name: "Krishna" },
    { id: 10013, name: "Ram" },
    { id: 10011, name: "seetha" },
  ];

  const fruits = ["apple", "orange", "kiwi"];

  return (
    <>
      <h1>Welcome {name}</h1>
      <ul>
        {persons.map((p) => (
          <li key={p.id}>
            {p.id}-{p.name}
          </li>
        ))}
        <li>{fruits}</li>
      </ul>
    </>
  );
}

export default Jsx;
