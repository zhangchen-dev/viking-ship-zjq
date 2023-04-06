import React from 'react';
import Button, { ButtonSize } from './button';

import { ComponentMeta, ComponentStory } from '@storybook/react';

const buttonMeta: ComponentMeta<typeof Button> = {
    title: '第四章：Button',
    component: Button,
};

export default buttonMeta;

// 一次性赋值参数的方法
const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args}></Button>;
export const Default = Template.bind({});

Default.args = {
    children: 'Default Button',
};
// export const Default: ComponentStory<typeof Button> = (args) => <Button {...args}>Default Button</Button>;

Default.storyName = '默认按钮样式';

export const ButtonWidthSize: ComponentStory<typeof Button> = () => (
    <>
        <Button size="lg">large button</Button>
        <Button size="sm">large button</Button>
    </>
);
ButtonWidthSize.storyName = '不同尺寸的按钮';

export const ButtonWithType: ComponentStory<typeof Button> = () => (
    <>
        <Button btnType="primary">Primary button</Button>
        <Button btnType="danger">Primary button</Button>
        <Button btnType="link">Primary button</Button>
    </>
);
ButtonWithType.storyName = '不同类型的按钮';
