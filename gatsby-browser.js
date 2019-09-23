/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */

import {
  SiteContext,
  ThemeContext,
  ThemeManager,
  MyLink,
  Page,
} from '@robbie-cook/react-components';
import React from 'react';
import './src/css/main.scss';

export const wrapRootElement = ({ element }) => {
  return (
    <SiteContext.Provider
      value={{
        sitename: 'Robbie Cook',
        links: [
          new MyLink('Home', '/'),
          new MyLink('About', '/about'),
          new MyLink('Music', '/music'),
          new MyLink('Projects', '/projects'),
        ],
      }}
    >
      <ThemeContext.Provider
        value={ThemeManager.fillTheme({
          navbar: {
            title: {
              name: 'Robbie Cook', // Should come from SiteContext
            },
          },
        })}
      >
        <Page>{element}</Page>
      </ThemeContext.Provider>
    </SiteContext.Provider>
  );
};
