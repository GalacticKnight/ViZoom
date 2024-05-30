import React from 'react'

import { ReactNode } from 'react';

// import StreamVideoProvider from '@/providers/StreamClientProvider';

const RootLayout = ({ children }: {children: ReactNode }) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default RootLayout;