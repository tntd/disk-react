import React from 'react';
import Item from './Item';
import { supportMap } from './constant';
import './index.less';

const Disk = ({ children }) => {
	return (
		<div className="tntd-disk-wrap">
			{children}
		</div>
	);
};

Disk.Item = Item;
Disk.supportMap = supportMap();
export default Disk;
