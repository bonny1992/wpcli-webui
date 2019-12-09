/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Instance from 'components/Instance/Loadable';
import Navigation from 'components/Navigation/Loadable';

export default function HomePage() {
  return (
    <div>
      <Navigation />
      <Instance url="https://site.com" password="asdbcasd" />
      <Instance url="https://site.com" password="asdbcasd" />
      <Instance url="https://site.com" password="asdbcasd" />
      <Instance url="https://site.com" password="asdbcasd" />
      <Instance url="https://site.com" password="asdbcasd" />
      <Instance url="https://site.com" password="asdbcasd" />
      <Instance url="https://site.com" password="asdbcasd" />
      <Instance url="https://site.com" password="asdbcasd" />
      <Instance url="https://site.com" password="asdbcasd" />
      <Instance url="https://site.com" password="asdbcasd" />
      <Instance url="https://site.com" password="asdbcasd" />
      <Instance url="https://site.com" password="asdbcasd" />
    </div>
  );
}
