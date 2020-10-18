import React from 'react';

import DocsImpl from '../components/Docs/Docs';
import { PageTitle, PageDescription } from '../components/Head/Head';

const Docs = () => (
  <>
    <PageTitle />
    <PageDescription />
    <DocsImpl />
  </>
);

// Docs only support dark theme for now
Docs.themeOverride = 'dark';

export default Docs;
