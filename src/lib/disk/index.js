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
	const [currentItemIndex, setCurrentItemIndex] = useState(null);
	const [contextMenuInfo, setContextMenuInfo] = useState(defaultContextMenuInfo);

	const closeContextMenu = () => {
		setCurrentItemIndex(null);
		setContextMenuInfo(defaultContextMenuInfo);
	};

	return (
		<div className="tntd-disk-wrap">
			{
				React.Children.map(children, child => {
					return React.cloneElement(child, {
						currentItemIndex,
						setCurrentItemIndex,
						setContextMenuInfo
					});
				})
			}
			{
				contextMenuInfo.visible &&
				<ClickOutside onClickOutside={closeContextMenu}>
					<ItemContextMenu
						{...contextMenuInfo}
						onCancel={closeContextMenu}
					/>
				</ClickOutside>
			}
		</div>
	);
};

Disk.Item = Item;
Disk.supportMap = supportMap();
export default Disk;
