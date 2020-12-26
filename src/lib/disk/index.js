import React from 'react';
import Item from './Item';
import './index.less';

const Disk = ({ children }) => {
	return (
		<div className="tntd-disk-wrap">
			{children}
		</div>
	);
};

Disk.Item = Item;
export default Disk;
