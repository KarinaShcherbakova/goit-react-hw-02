import PropTypes from 'prop-types';
import styles from './Options.module.css';

const Options = ({ feedbacks, updateFeedback, resetFeedbacks }) => {
  const { good, neutral, bad } = feedbacks;
  return (
    <div className={styles.options}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {good + neutral + bad > 0 && (
        <button onClick={resetFeedbacks}>Reset</button>
      )}
    </div>
  );
};

Options.propTypes = {
  feedbacks: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  updateFeedback: PropTypes.func.isRequired,
  resetFeedbacks: PropTypes.func.isRequired,
};

export default Options; 