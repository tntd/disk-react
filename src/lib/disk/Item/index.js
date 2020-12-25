import React, { useEffect, useState, Fragment } from "react";
import { act } from "react-test-renderer";
import { folderImages, fileImages, actionIcon } from '../constant';

export default props => {
    const { empty = false, type = 'folder', fileType = 'article', title = "标题", onPreview, onSetting } = props;

    console.log('props', props);
    return (
        <div className="tntd-disk-item">
            <div className='actions'>
                {
                    onPreview &&
                    <i className='action-item'>
                        <img src={actionIcon.view} />
                    </i>
                }
                {
                    onSetting &&
                    <i className='action-item'>
                        <img src={actionIcon.setting} />
                    </i>
                }
            </div>
            {
                type === 'folder' &&
                <div className='img-box'>
                    <img src={folderImages[empty ? 'empty' : 'full']} />
                </div>
            }
            {
                type === 'file' &&
                <div className='img-box'>
                    <img src={fileImages[fileType]} />
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
