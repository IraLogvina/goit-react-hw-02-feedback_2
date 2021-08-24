import PropTypes from 'prop-types';
	

	const Statistics = ({ good, neutral, bad, total, percentage }) => {
	    return (
	      <section>
	        <li>Good:{good}</li>
	        <li>Neutral:{neutral}</li>
	        <li>Bad:{bad}</li>
	        <li>Total:{total}</li>
	        <li>Positive feedback:{percentage}%</li>
	      </section>
	    );
	}
	

	Statistics.propTypes = {
	  good: PropTypes.number,
	  neutral: PropTypes.number,
	  bad: PropTypes.number,
	  total: PropTypes.number,
	  percentage: PropTypes.number,
	};
	

	export default Statistics;
