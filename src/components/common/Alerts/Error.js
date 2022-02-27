import React from 'react';
import { Alert } from 'antd';

export default function Error({ message }) {
  return <Alert message={message} type="error" showIcon closable />;
}
