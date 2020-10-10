import React from 'react';
import styled from 'styled-components';

import DownIcon from './images/down.svg';

const SelectLabel = styled.div`
  font-weight: 200;
  border-radius: 6px;
  border: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  background-color: transparent;
  color: var(--fg);
  border: 1px solid var(--fg);

  font-size: 16px;
  line-height: 24px;
  padding: 8px;
  padding-right: 24px;
  padding-left: 24px;
  letter-spacing: 0px;
  
  @media screen and (min-width: 992px) {
    line-height: 24px;
    font-size: 16px;
  }
`;

const DownIconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;

  right: 8px;
  top: 16px;
  width: 8px;
  svg {
    width: 8px;
    height: auto;
    color: var(--fg);
  }
`;

const LabelIconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 8px;
  top: 12px;
  width: 16px;
  svg {
    width: 16px;
    height: auto;
    color: var(--fg);
  }
`;

const SelectContainer = styled.div`
  position: relative;
  height: 40px;
`;

const StyledSelect = styled.select`
  font-size: inherit;
  font-weight: inherit;
  border-radius: 6px;
  border: 0;
  width: 100%;
  letter-spacing: 1.8px;
  box-sizing: border-box;
  padding: 16px;
  text-align-last: center;
  position: absolute;
  left: 0;
  top: 0;
  -webkit-appearance: none;
  opacity: 0;
  height: 40px;
`;

const StyledOption = styled.option`
  text-align: center;
  text-align-last: center;
`;

const SelectInput = (props) => {
  const option = props.options.find((opt) => opt.value === props.value);

  const { options, labelIcon } = props;
  const LabelIcon = labelIcon;

  return (
    <SelectContainer>
      <SelectLabel>
        {
          LabelIcon ? (
            <LabelIconWrapper>
              <LabelIcon />
            </LabelIconWrapper>
          )
            : null
        }
        {option?.label || props.placeholder}
        <DownIconWrapper>
          <DownIcon />
        </DownIconWrapper>
      </SelectLabel>
      <StyledSelect
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {
          options.map((opt) => (
            <StyledOption key={opt.value} value={opt.value}>{opt.label}</StyledOption>
          ))
        }
      </StyledSelect>
    </SelectContainer>
  );
};

export default SelectInput;
