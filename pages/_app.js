import React from 'react';
import Head from 'next/head';
import * as config from '../site.config';
import '../css/index.css';

const Root = (props) => {
  const { Component, pageProps } = props;
  const { sitename, description, resources } = config;

  return (
    <>
      <Head>
        <title>{sitename}</title>
        <meta name="description" content={description} />
        {resources.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default Root;
