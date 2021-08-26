import PropTypes from "prop-types";
import style from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={style.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
