import React from 'react';
import styled from 'styled-components';
import { ThemeColor } from 'constants/constants';

export const Label = styled.label<{ disabled?: boolean }>`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  color: ${ThemeColor.RADIO_BTN_LABEL};
  ${({ disabled }) =>
    disabled &&
    `
    cursor: not-allowed;
    color: ${ThemeColor.RADIO_BTN_DISABLED_LABEL} !important;
  `}
`;

export const Legend = styled.legend`
  font-weight: 400;
  font-size: 1rem;
  color: ${ThemeColor.RADIO_BTN_LEGEND};
`;

export const Radio = styled.input`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  width: 42px;
  height: 42px;
  border: 3px solid ${ThemeColor.RADIO_BTN_BORDER};
  background-color: ${ThemeColor.RADIO_BTN_BACKGROUND};
  border-radius: 50%;
  transition: all 0.1s ease-in-out;

  ::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    margin: 5px;
  }
  :checked {
    ::after {
      background-color: ${ThemeColor.RADIO_BTN_INNER_CIRCLE_CHECKED};
    }
    :hover {
      border-color: ${ThemeColor.RADIO_BTN_BORDER};
      ::after {
        background-color: ${ThemeColor.RADIO_BTN_INNER_CIRCLE_CHECKED};
      }
    }
  }
  :hover {
    ::after {
      background-color: ${ThemeColor.RADIO_BTN_INNER_CIRCLE_HOVER};
    }
  }
  :disabled {
    cursor: not-allowed;
    border-color: ${ThemeColor.RADIO_BTN_DISABLED_BORDER};
    background-color: ${ThemeColor.RADIO_BTN_DISABLED_BACKGROUND};
    :hover {
      ::after {
        background-color: ${ThemeColor.RADIO_BTN_DISABLED_BACKGROUND};
      }
    }
    :checked {
      ::after {
        background-color: ${ThemeColor.RADIO_BTN_INNER_CIRCLE_DISABLED_CHECKED};
      }
      :hover {
        border-color: ${ThemeColor.RADIO_BTN_DISABLED_BORDER};
        background-color: ${ThemeColor.RADIO_BTN_DISABLED_BACKGROUND};
        ::after {
          background-color: ${ThemeColor.RADIO_BTN_INNER_CIRCLE_DISABLED_CHECKED};
        }
      }
    }
  }
`;
