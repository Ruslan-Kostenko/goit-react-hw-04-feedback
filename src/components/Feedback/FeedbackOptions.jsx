import { BtnBox, BtnEl } from "./Feedback.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnBox>
      {options.map(option => (
        <BtnEl key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </BtnEl>
      ))}
    </BtnBox>
  );
};
