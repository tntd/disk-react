import React from 'react';
import Disk from '../lib';
import 'antd/dist/antd.css';

const { Item } = Disk;

const list = [
    {
        type: 'folder',
        empty: false,
        title: '需求文档'
    },
    {
        type: 'folder',
        empty: true,
        title: '架构文档'
    },
    {
        type: 'file',
        fileType: 'article',
        empty: true,
        title: '第一篇文章'
    },
    {

        type: 'file',
        fileType: 'axure',
        empty: true,
        title: '架构文档'
    }
];


export default props => {

    return (
        <Disk>
            {
                list.map((item, index) => {
                    return (
                        <Item
                            key={index}
                            {...item}
                            onPreview={() => { }}
                            onSetting={() => { }}
                        />
                    );
                })
            }
        </Disk>
    );
};
