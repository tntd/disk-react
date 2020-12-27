import React, { useState, createContext } from 'react';
import Item from './Item';
import { supportMap } from './constant';
import ItemContextMenu from './ContextMenu/ItemContextMenu';
import { DiskProvider, DiskConsumer } from './context';
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
	const [contextMenuInfo, setContextMenuInfo] = useState(defaultContextMenuInfo);

	const closeContextMenu = () => {
		setContextMenuInfo(defaultContextMenuInfo);
	};

	console.log('contextMenuInfo', contextMenuInfo);
	return (
		<div className="tntd-disk-wrap">
			<DiskProvider value={{ contextMenuInfo, setContextMenuInfo, closeContextMenu }}>
				{children}
				{
					contextMenuInfo.visible &&
					<ClickOutside onClickOutside={closeContextMenu}>
						<ItemContextMenu
							{...contextMenuInfo}
							onCancel={closeContextMenu}
						/>
					</ClickOutside>
				}
			</DiskProvider>
		</div>
	);
};

Disk.Item = Item;
Disk.supportMap = supportMap();
export default Disk;
