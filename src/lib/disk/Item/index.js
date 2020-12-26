import React from 'react';
import { folderImages, fileImages, actionIcon, linkImages } from '../constant';

export default props => {
	const {
		empty = false,
		type = 'folder',
		subType,
		logoSrc,
		title = '标题',
		icon,
		onPreview,
		onSetting,
		...rest
	} = props;

	let newSubType;
	if (type === 'file') {
		newSubType = subType || 'article';
	} else if (type === 'link') {
		newSubType = subType || 'href';
	}

	console.log('props', props);

	return (
		<div
			className="tntd-disk-item"
			{...rest}
		>
			<div className='actions'>
				{
					type !== 'folder' &&
					onPreview &&
					<i
						className='action-item'
						onClick={onPreview}
					>
						<img src={actionIcon.view} />
					</i>
				}
				{
					onSetting &&
					<i
						className='action-item'
						onClick={onSetting}
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
