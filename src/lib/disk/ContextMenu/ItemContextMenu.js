import React, { useEffect, useRef, useState, Fragment } from 'react';
import { Divider, Select, message, Modal } from 'antd';
import cn from 'classnames';
import './index.less';

export default props => {
	const { visible, left, top, contextMenuList, onContextMenuClick, onCancel } = props;
	const itemContextRef = useRef();
	const [position, setPosition] = useState({});

	const calcPosition = (({ left, top }, { width, height }) => {
		if (left + width > window.innerWidth) {
			left = window.innerWidth - width;
		}

		if (top + height > window.innerHeight) {
			top = window.innerHeight - height;
		}

		return {
			left, top
		};
	});

	useEffect(() => {
		const current = itemContextRef.current;
		if (current) {
			setPosition(calcPosition(props, current.getBoundingClientRect()));
		}
	}, [left, top, visible]);

	console.log('props aaa', props);
	return (
		<div
			className="disk-item-context-menu"
			ref={itemContextRef}
			style={position}
		>
			<ul>
				{
					(contextMenuList || []).map((item, index) => {
						if (item.type === 'separator') {
							return <Divider key={index + 'separator'} />;
						} else {
							return (
								<li
									key={item.value}
									className={cn({ disabled: item.disabled })}
									onClick={() => {
										if (!item.disabled) {
											onContextMenuClick(item.value);
											onCancel();
										};
									}}
								>
									<i></i>
									<span>{item.label}</span>
								</li>
							);
						}
					})
				}
			</ul>
		</div>
	);
};
