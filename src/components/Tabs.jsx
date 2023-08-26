import React from 'react';
import { Tabs } from 'antd';
import FPContent from './FPGrowth';
const TabsOptions = () => (
  <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: 'FP Growth Algorithm',
        key: '1',
        children: <FPContent data="Hi"/>,
      },
      {
        label: 'Tab 2',
        key: '2',
        children: 'Tab 2',
        // disabled: true,
      },
      {
        label: 'Tab 3',
        key: '3',
        children: 'Tab 3',
      },
    ]}
  />
);
export default TabsOptions;