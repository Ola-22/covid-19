import { Card, CardContent, Typography } from "@material-ui/core";
import "./style.css";

export default function InfoBox({
  title,
  cases,
  active,
  isRed,
  total,
  ...props
}) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox_selected"} ${
        isRed && "infoBox_red"
      }`}
    >
      <CardContent>
        <Typography className="infoBox_title" color="textSecondary">
          {title}
        </Typography>
        <h2 className={`infoBox_cases ${!isRed && "infoBox_green"}`}>
          {cases}
        </h2>
        <Typography className="infoBox_total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}
