import React from 'react';
import styled from 'styled-components';

import useTheme from '../../lib/useTheme';

import SelectInput from '../SelectInput/SelectInput';

import SunIcon from './images/sun.svg';
import MoonIcon from './images/moon.svg';
import MonitorIcon from './images/monitor.svg';

const THEME_OPTIONS = [
  {
    label: 'System Theme',
    value: 'system',
  },
  {
    label: 'Dark',
    value: 'dark',
  },
  {
    label: 'Light',
    value: 'light',
  },
];

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content center;
  flex-direction: column;
`;

const ThemeTitle = styled.p`
  color: var(--fg);
`;

const ThemeToggleContainer = styled.div`
  width: 100%;
  max-width: 280px;
  padding: 12px;
`;

const Home = () => {
  const [preferredTheme, setPreferredTheme] = useTheme();

  let themeIcon = MonitorIcon;
  if (preferredTheme === 'dark') {
    themeIcon = MoonIcon;
  } else if (preferredTheme === 'light') {
    themeIcon = SunIcon;
  }

  return (
    <Container>
      <ThemeTitle>
        Please select your prefered theme!
      </ThemeTitle>
      <ThemeToggleContainer>
        <SelectInput
          compact
          outline
          name="theme"
          labelIcon={themeIcon}
          value={THEME_OPTIONS.find((opt) => opt.value === (preferredTheme || 'system')).value}
          options={THEME_OPTIONS}
          placeholder="Theme"
          onChange={(e) => {
            const { value } = e.target;
            if (value === 'system') {
              setPreferredTheme(null);
            } else {
              setPreferredTheme(value);
            }
          }}
        />
      </ThemeToggleContainer>
    </Container>
  );
};

export default Home;
