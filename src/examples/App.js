import React from 'react';
import Disk from '../lib';
import { Icon, message } from 'antd';
import { contextMenuList } from './constant';
import 'antd/dist/antd.css';

const { Item, supportMap } = Disk;

const list = [
	{
		type: 'folder',
		empty: false,
		title: '架构文档',
		icon: 'fire'
	},
	{
		type: 'folder',
		empty: false,
		title: '需求文档',
		icon: 'bulb'
	},
	{
		type: 'folder',
		empty: false,
		title: '产品文档',
		icon: 'meh'
	},
	{
		type: 'folder',
		empty: false,
		title: '测试文档',
		icon: 'bug'
	},
	{
		type: 'folder',
		empty: false,
		title: '设计文档',
		icon: 'picture'
	},
	{
		type: 'folder',
		empty: true,
		title: 'api文档',
		icon: 'api'
	},
	{
		type: 'file',
		subType: 'disk',
		title: '资源文件'
	},
	{
		type: 'file',
		subType: 'article',
		empty: true,
		title: '扩展司南生态能力的想法'
	},
	{
		type: 'file',
		subType: 'article',
		empty: true,
		title: '如何通过TNT构建强大的前端生态'
	},
	{
		type: 'file',
		subType: 'axure',
		title: '司南产品文档'
	},
	{
		type: 'file',
		subType: 'mind',
		title: 'TNT头脑风暴'
	},
	{
		type: 'file',
		subType: 'sketch',
		title: 'TNT 1.0.0设计标注'
	},
	{

		type: 'file',
		subType: 'ppt',
		empty: true,
		title: '本周团队分享'
	},
	{

		type: 'file',
		subType: 'pdf',
		empty: true,
		title: 'pdf文档'
	},
	{

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
							{...item}
							icon={item.icon ? <Icon type={item.icon} /> : null}
							onPreview={() => {
								message.info('你点击了预览');
							}}
							onSetting={() => {
								message.info('你点击了设置');
							}}
							contextMenuList={contextMenuList}
							onContextMenuClick={(value) => {
								message.info('你点击了右键' + value);
								console.log('value', value);
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
