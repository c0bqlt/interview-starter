import React from 'react';
import Head from 'next/head';
import * as context from '../site.config';
import '../css/index.css';

const Root = (props) => {
  const { Component, pageProps } = props;
  const { sitename, description, resources } = context;

  return (
    <>
      <Head>
        <title>{sitename}</title>
        <meta name="description" content={description} />
        {resources.length > 0 &&
          resources.map((href) => {
            return <link key={href} rel="stylesheet" href={href} />;
          })}
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default Root;
