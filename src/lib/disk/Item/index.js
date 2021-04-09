import React from 'react';
import { folderImages, fileImages, actionIcon, linkImages } from '../constant';
import cn from 'classnames';

export default props => {
	const {
		empty = false,
		type = 'folder',
		subType,
		logoSrc,
		title = '标题',
		icon,
		onPreview,
		contextMenuList = [],
		onContextMenuClick,
		currentItemIndex,
		setCurrentItemIndex,
		setContextMenuInfo,
		itemKey,
		...rest
	} = props;

	let newSubType;
	if (type === 'file') {
		newSubType = subType || 'article';
	} else if (type === 'link') {
		newSubType = subType || 'href';
	}

	const showContextMenu = (e, item) => {
		setCurrentItemIndex(item.itemKey);
		if (contextMenuList && contextMenuList.length > 0) {
			e.preventDefault();
			e.stopPropagation();
			setContextMenuInfo({
				...item,
				visible: true,
				left: e.clientX,
				top: e.clientY,
				contextMenuList: contextMenuList || [],
				onContextMenuClick: onContextMenuClick
			});
		} else {
			return;
		}
	};

	return (
		<div
			className={cn('tntd-disk-item', { on: itemKey && currentItemIndex === itemKey })}
			{...rest}
			onContextMenu={e => showContextMenu(e, props, {})}
		>
			<div className='actions'>
				{
					type !== 'folder' &&
					onPreview &&
					<i
						className='action-item'
						onClick={() => {
							onPreview(props);
						}}
					>
						<img src={actionIcon.view} />
					</i>
				}
				{
					contextMenuList &&
					contextMenuList.length > 0 &&
					<i
						className='action-item'
						onClick={(e) => {
							if (contextMenuList.length) {
								showContextMenu(e, props, {});
							}
						}}
					>
						<img src={actionIcon.setting} />
					</i>
				}
			</div>
			{
				type === 'folder' &&
				<div className='img-box'>
					{icon && icon}
					<img src={folderImages[empty ? 'empty' : 'full']} />
				</div>
			}
			{
				type === 'file' &&
				<div className='img-box'>
					<img src={fileImages[newSubType]} />
				</div>
			}
			{
				type === 'link' &&
				<div className='img-box'>
					<img src={linkImages[newSubType === 'href' ? 'href' : 'modal']} />
					{logoSrc && <img className='site-logo' src={logoSrc} />}
				</div>
			}
			<div className='title-wrap'>
				<p>
					{title}
				</p>
			</div>
		</div>
	);
};
