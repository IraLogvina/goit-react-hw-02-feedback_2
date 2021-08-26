import PropTypes from "prop-types";
import style from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <ul className={style.list}>
      <li className={style.listItem}>Good:{good}</li>
      <li className={style.listItem}>Neutral:{neutral}</li>
      <li className={style.listItem}>Bad:{bad}</li>
      <li className={style.listItem}>Total:{total}</li>
      <li className={style.listItem}>Positive feedback:{percentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.number,
};

export default Statistics;
