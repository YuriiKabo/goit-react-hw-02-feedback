import { nanoid } from 'nanoid';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <button
        className={css.button}
        onClick={onLeaveFeedback}
        name={option}
        key={nanoid()}
      >
        {option}
      </button>
    );
  });
};
