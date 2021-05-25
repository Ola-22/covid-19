import numeral from "numeral";
import "./style.css";

export default function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ country, cases }, index) => (
        <tr key={index}>
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format("0, 0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}
