import { Button, message } from 'antd';
import React from 'react'
import styles from './index.less';
console.log('styles',styles);


export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button onClick={() => {
        message.success('esbuild success~')
      }}>click</Button>
    </div>
  );
}
