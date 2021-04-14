import React from 'react';
import { Icon } from 'antd';

export const contextMenuList = [
	{
		label: '在新标签页打开',
		value: 'openNewWindow',
		icon: <Icon type='link' />
	},
	{
		type: 'separator'
	},
	{
		label: '重命名',
		value: 'rename',
		icon: <Icon type='edit' />
	},
	{
		label: '删除',
		value: 'delete',
		// icon: <Icon type='delete' />,
		color: 'red'
		// disabled: true
	}
];
