import React from "react";
import PropTypes from "prop-types";
import style from "./Notification.module.css";

const Notification = ({ message }) => (
  <p className={style.message}>{message}</p>
);

Notification.defaultProps = {
  message: "",
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
