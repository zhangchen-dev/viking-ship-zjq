/*
 * @Author: 张佳琪(10070263) zhangjq-l@glodon.com
 * @Date: 2023-04-06 15:30:08
 * @LastEditors: 张佳琪(10070263) zhangjq-l@glodon.com
 * @LastEditTime: 2023-04-06 17:49:12
 * @FilePath: \viking-ship\src\components\Input\Input.stories.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react';
import { Input } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

const InputMeta: ComponentMeta<typeof Input> = {
    title: '第六章： Input',
    component: Input,
};
export default InputMeta;

const Template: ComponentStory<typeof Input> = (args) => (
    <>
        <Input {...args}></Input>
        <ControlledInput />
    </>
);
export const Default = Template.bind({});
Default.args = {
    size: 'sm',
};

export const SizeInput = () => (
    <>
        <Input style={{ width: '300px' }} size="lg" />
        <Input style={{ width: '300px' }} size="sm" />
    </>
);

const ControlledInput = () => {
    const [value, setValue] = useState<string>();
    return (
        <>
            <Input
                value={value}
                defaultValue={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </>
    );
};
