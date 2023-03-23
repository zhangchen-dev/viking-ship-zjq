/*
 * @Author: 张佳琪(10070263) zhangjq-l@glodon.com
 * @Date: 2023-03-17 10:26:14
 * @LastEditors: 张佳琪(10070263) zhangjq-l@glodon.com
 * @LastEditTime: 2023-03-17 17:35:38
 * @FilePath: \viking-ship\src\components\Tab\TabItem.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import classNames from 'classnames';
import React, { ReactNode, useContext } from 'react';
import { TabsContext } from './Tabs';

export interface TabItemInter {
    className?: string;
    style?: React.CSSProperties;
    index: string;
    children?: ReactNode;
    label: ReactNode;
}

const TabItem: React.FC<TabItemInter> = (props) => {
    const { style, className, index, children, label } = props;
    const context = useContext(TabsContext);
    const classes = classNames('viking-tab-item', className, {
        'is-active': context.index === index,
    });
    const handleClick = () => {
        context.onSelect && typeof context.onSelect === 'function' && context.onSelect(index);
        context.changeTabContent &&
            typeof context.changeTabContent === 'function' &&
            context.changeTabContent(children);
    };
    return (
        <div className={classes} style={style} onClick={handleClick}>
            {label}
        </div>
    );
};
export default TabItem;
