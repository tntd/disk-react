import React from 'react';
import Disk from '../lib';
import 'antd/dist/antd.css';

const { Item } = Disk;

const App = () => (
    <Disk>
        <Item
            type="folder"
            title="需求文档"
        />
    </Disk>
);

export default App;
