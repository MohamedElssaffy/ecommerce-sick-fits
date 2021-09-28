import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'rednika_next';
  src: url('/static/radnikanext-medium-webfont.woff2')
  format('woff2');
  font-weight: normal;
  font-style: normal
}
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3a3a3a;
    --light-grey: #e1e1e1;
    --off-white: #ededed;
    --max-width: 1000px;
    --box-shadow: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'rednika_next', --apple-system,
    BlinkMaxSystemFont, 'Segoe UI', Reboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5rem;
    line-height: 2;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};