import { AppProps } from 'next/app';
import React from 'react';

const CaveApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div style={{ background: 'red' }}>
      <div style={{ background: 'red', color: 'red', fontSize: '25px' }}>HELLLLLLLLLLLPPP</div>
      <Component {...pageProps} />
    </div>
  )
}

export default CaveApp
