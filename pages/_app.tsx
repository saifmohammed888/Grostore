import React from 'react';
import { wrapper } from 'redux/store';
import { AppProps } from 'next/app';
import 'styles/globals.css';
import 'antd/dist/antd.css';

class MyApp extends React.Component<AppProps> {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(MyApp);
