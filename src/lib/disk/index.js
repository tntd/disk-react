import React, { useEffect, useState, Fragment } from "react";
import { Input, Select, message, Modal } from "antd";
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
