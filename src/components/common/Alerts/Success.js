import React from 'react';
import { Alert } from 'antd';

export default function Success({ message }) {
  return (
    <div id="alert">
      <Alert message={message} type="success" showIcon closable />
    </div>
  );
}
