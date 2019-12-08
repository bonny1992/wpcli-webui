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

export default function HomePage() {
  return (
    <div>
      <Instance url="https://site.com" password="asdbcasd" />
      <Instance url="https://site.com" password="asdbcasd" />
      <Instance url="https://site.com" password="asdbcasd" />
      <Instance url="https://site.com" password="asdbcasd" />
    </div>
  );
}
