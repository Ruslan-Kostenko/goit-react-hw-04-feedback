import { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Feedback/Statistics';
import { Section } from './Feedback/Sections';
import { StyledFeedback } from './Feedback/Feedback.styled';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <StyledFeedback>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <p>There is no feedback</p>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positive}
            ></Statistics>
          )}
        </Section>
        <GlobalStyle/>
      </StyledFeedback>
    );
  }
}
