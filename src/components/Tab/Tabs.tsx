/*
 * @Author: 张佳琪(10070263) zhangjq-l@glodon.com
 * @Date: 2023-03-17 09:52:03
 * @LastEditors: 张佳琪(10070263) zhangjq-l@glodon.com
 * @LastEditTime: 2023-03-17 17:31:14
 * @FilePath: \viking-ship\src\components\Tab\Tabs.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import classNames from 'classnames';
import React, { ReactNode, useState, createContext } from 'react';
import { TabItemInter } from './TabItem';

type onSelectCallback = (selectedIndex: string) => void;
type onTabContentCallback = (content: ReactNode) => void;
interface TabsInter {
    className?: string;
    style?: React.CSSProperties;
    onSelect?: onSelectCallback;
    children?: ReactNode;
    defaultIndex?: string;
}
interface TabsContext {
    index: string;
    changeTabContent?: onTabContentCallback;
    onSelect?: onSelectCallback;
}

// 添加useContext方法
export const TabsContext = createContext<TabsContext>(
    // 默认传递的值
    { index: '0' },
);
const Tabs: React.FC<TabsInter> = (props) => {
    const { className, style, children, defaultIndex } = props;
    const [currentIndex, setCurrentIndex] = useState<string | undefined>(defaultIndex);
    const [selectItemContent, setSelectItemContent] = useState<ReactNode | undefined>();
    // 定义相关类，其中包括默认类和自定义类的添加
    const classes = classNames('viking-tabs', className, {
        // 相关动态类的添加
    });
    // 确定要暴露给useContext的内容
    const passedTabsContext: TabsContext = {
        index: currentIndex ? currentIndex : '0',
        changeTabContent: (tabContent: ReactNode) => setSelectItemContent(tabContent),
        onSelect: (index: string = '') => setCurrentIndex(index),
    };
    // 渲染自己点的函数
    const renderChildren = () => {
        return React.Children.map(children, (child, Index) => {
            const childElement = child as React.FunctionComponentElement<TabItemInter>;
            const { name } = childElement.type;
            if (name === 'TabItem') {
                return React.cloneElement(childElement, {
                    index: Index.toString(),
                });
            }
            console.log('渲染子组件内容传递错误');
        });
    };

    return (
        <div className={classes} style={style}>
            <TabsContext.Provider value={passedTabsContext}>
                <div>{renderChildren()}</div>
                <div>
                    {/* tab展示的内容 */}
                    {selectItemContent}
                </div>
            </TabsContext.Provider>
        </div>
    );
};
// 默认参数，就是用户使用时不传递时候，自己赋予组件的默认值
Tabs.defaultProps = {
    defaultIndex: '0',
};
export default Tabs;
