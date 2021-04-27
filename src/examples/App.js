import React from 'react';
import Disk from '../lib';
import { Icon, message } from 'antd';
import { contextMenuList } from './constant';
import 'antd/dist/antd.css';

const { Item, supportMap } = Disk;

const list = [
	{
		id: 1,
		type: 'folder',
		empty: false,
		title: '架构文档',
		icon: <Icon type='fire' />
	},
	{
		id: 2,
		type: 'folder',
		empty: false,
		title: '需求文档',
		icon: <Icon type='bulb' />
	},
	{
		id: 3,
		type: 'folder',
		empty: false,
		title: '产品文档',
		icon: <Icon type='meh' />
	},
	{
		id: 4,
		type: 'folder',
		empty: false,
		title: '测试文档',
		icon: <Icon type='bug' />
	},
	{
		id: 5,
		type: 'folder',
		empty: false,
		title: '设计文档',
		icon: <Icon type='picture' />
	},
	{
		id: 6,
		type: 'folder',
		empty: true,
		title: 'api文档',
		icon: <Icon type='api' />
	},
	{
		id: 7,
		type: 'file',
		subType: 'disk',
		title: '资源文件'
	},
	{
		id: 8,
		type: 'file',
		subType: 'article',
		empty: true,
		title: '扩展司南生态能力的想法'
	},
	{
		id: 9,
		type: 'file',
		subType: 'article',
		empty: true,
		title: '如何通过TNT构建强大的前端生态'
	},
	{
		id: 10,
		type: 'file',
		subType: 'axure',
		title: '司南产品文档'
	},
	{
		id: 11,
		type: 'file',
		subType: 'mind',
		title: 'TNT头脑风暴'
	},
	{
		id: 12,
		type: 'file',
		subType: 'sketch',
		title: 'TNT 1.0.0设计标注'
	},
	{
		id: 13,
		type: 'file',
		subType: 'ppt',
		empty: true,
		title: '本周团队分享'
	},
	{
		id: 14,
		type: 'file',
		subType: 'pdf',
		empty: true,
		title: 'pdf文档'
	},
	{
		id: 15,
		type: 'file',
		subType: 'excel',
		empty: true,
		title: 'Excel文档'
	}
];

export default props => {
	console.log('supportMap', supportMap);
	return (
		<Disk>
			{
				list.map((item, index) => {
					return (
						<Item
							key={index}
							itemKey={item.id}
							{...item}
							icon={item.icon ? item.icon : null}
							onPreview={(info) => {
								message.info('你点击了预览');
								console.log('onPreview info', info);
							}}
							contextMenuList={contextMenuList}
							onContextMenuClick={(value, info) => {
								message.info('你点击了右键' + value);
								console.log('value', value);
								console.log('value info', info);
							}}
							onClick={() => {
								message.info('点击');
							}}
						/>
					);
				})
			}

			<Item
				type='link'
				subType='modal'
				title="语雀官网"
				logoSrc="https://s3.ax1x.com/2020/12/26/rhYxdx.png"
			/>
		</Disk>
	);
};
