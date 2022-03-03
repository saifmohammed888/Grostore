import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import 'styles/globals.css';
import 'antd/dist/antd.css';

class MyApp extends React.Component<AppProps> {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
