import React from 'react';
	import PropTypes from 'prop-types';
	

	const Notification = ({ message }) => (
	    <p>{message}</p>
	);
	

	Notification.defaultProps = {
	    message: '',
	};
	

	Notification.propTypes = {
	    message: PropTypes.string,
	};
	

	export default Notification;
