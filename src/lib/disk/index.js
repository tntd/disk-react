import React, { useState } from 'react';
import Item from './Item';
import { supportMap } from './constant';
import ItemContextMenu from './ContextMenu/ItemContextMenu';
import ClickOutside from '@tntd/react-click-outside';
import './index.less';

const defaultContextMenuInfo = {
	visible: false,
	left: 0,
	top: 0,
	targetItem: null,
	contextMenuList: [],
	onContextMenuClick: () => { }
};
const Disk = ({ children }) => {
	const [currentItemKey, setCurrentItemIndex] = useState(null);
	const [contextMenuInfo, setContextMenuInfo] = useState(defaultContextMenuInfo);

	const closeContextMenu = () => {
		setCurrentItemIndex(null);
		setContextMenuInfo(defaultContextMenuInfo);
	};

	console.log('currentItemKey', currentItemKey);

	return (
		<div className="tntd-disk-wrap">
			{
				React.Children.map(children, child => {
					return React.cloneElement(child, {
						currentItemKey,
						setCurrentItemIndex,
						setContextMenuInfo
					});
				})
			}
			<ClickOutside onClickOutside={closeContextMenu}>
				<ItemContextMenu
					{...contextMenuInfo}
					onCancel={closeContextMenu}
				/>
			</ClickOutside>
		</div>
	);
};

Disk.Item = Item;
Disk.supportMap = supportMap();
export default Disk;
