import { StyledList, StyledItem } from "./Feedback.styled";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StyledList>
      <StyledItem>Good:{good}</StyledItem>
      <StyledItem>Neutral:{neutral}</StyledItem>
      <StyledItem>Bad:{bad}</StyledItem>
      <StyledItem>Total:{total}</StyledItem>
      <StyledItem>Positive feedback:{positivePercentage}%</StyledItem>
    </StyledList>
  );
};
