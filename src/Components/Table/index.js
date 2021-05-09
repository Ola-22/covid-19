import "./style.css";

export default function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ country, cases }, index) => (
        <tr key={index}>
          <td>{country}</td>
          <td>{cases}</td>
        </tr>
      ))}
    </div>
  );
}
