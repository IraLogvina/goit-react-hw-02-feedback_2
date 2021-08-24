import PropTypes from 'prop-types';
	

	const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	    return (
	        <>
	            {options.map((option) => (
	            <button
	            type="button"
	            key={option}
	            name={option}
	            onClick={onLeaveFeedback}
	        >
	            {option}
	            </button>
	        ))}
	        </>
	    );
	};
	

	FeedbackOptions.propTypes = {
	    options: PropTypes.arrayOf(PropTypes.string),
	    onLeaveFeedback: PropTypes.func,
	};
	

	export default FeedbackOptions;
