import React, { FC } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Menu from './menu';
import SubMenu from './subMenu';
import { MenuItem } from './menuItem';

const menuMeta: ComponentMeta<typeof Menu> = {
    title: '第五章：Menu',
    id: 'Menu',
    component: Menu,
    subcomponents: { SubMenu: SubMenu, Item: MenuItem } as any,
    // 此处也可以添加args,此处优先级较低，低于下面设置的级别
    args: {
        defaultIndex: 0,
    },
    argTypes: {
        defaultIndex: {
            description: 'normal test',
        },
    },
    // parameters:{

    // }
};

export default menuMeta;
const Template: ComponentStory<typeof Menu> = (args) => (
    <Menu {...args}>
        <MenuItem index={0}>cool link</MenuItem>
        <MenuItem index={1}>cool link 1</MenuItem>
        <MenuItem index={2}>cool link 2</MenuItem>
    </Menu>
);
// 默认的Menu
export const DefaultMenu = Template.bind({});
DefaultMenu.storyName = '默认Menu';
DefaultMenu.args = {
    mode: 'vertical',
};
// 横向的Menu
export const ClicMenu = Template.bind({});
ClicMenu.args = {
    defaultIndex: 1,
};
// parameters 的配置在preview中已經配置，这里和他意思一样
ClicMenu.parameters = {
    background: {
        values: [
            { name: 'red', value: '#f00' },
            { name: 'green', value: '#0f0' },
        ],
    },
};
