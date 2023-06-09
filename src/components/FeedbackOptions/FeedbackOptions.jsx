import React from 'react';
import { Wrapper, OptionBtn } from './FeedbackOptions.styled'; 

export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <OptionBtn key={option} type="button" value={option} onClick={(event) =>onClick(event.currentTarget.value)}>
          {option}
        </OptionBtn>
      ))}
    </Wrapper>
  );
};
