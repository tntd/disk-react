import React, { useEffect, useRef, useState } from "react";
import { Divider } from "antd";
import cn from "classnames";
import "./index.less";

export default (props) => {
  const { visible, left, top, contextMenuList, onContextMenuClick, onCancel } =
    props;
  const itemContextRef = useRef();
  const [position, setPosition] = useState({});

  const calcPosition = ({ left, top }, { width, height }) => {
    if (left + width > window.innerWidth) {
      left = window.innerWidth - width;
    }

    if (top + height > window.innerHeight) {
      top = window.innerHeight - height;
    }

    return {
      left: left || "-9999px",
      top: top || "-9999px"
    };
  };

  useEffect(() => {
    const current = itemContextRef.current;
    if (current) {
      setPosition(calcPosition(props, current.getBoundingClientRect()));
    }
  }, [left, top, visible]);

  return (
    <div
      className="disk-item-context-menu"
      ref={itemContextRef}
      style={position}
    >
      <ul>
        {(contextMenuList || []).map((item, index) => {
          if (item.type === "separator") {
            return (
              <div
                key={index + "separator"}
                className="disk-menu-divider"
              ></div>
            );
          } else {
            return (
              <li
                key={item.value}
                className={cn({ disabled: item.disabled })}
                onClick={() => {
                  if (!item.disabled) {
                    onContextMenuClick(item.value, props);
                    onCancel();
                  }
                }}
                style={{ color: item.color || "inherit" }}
              >
                {item.icon || <i></i>}
                <span>{item.label}</span>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
