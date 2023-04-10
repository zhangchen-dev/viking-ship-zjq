/*
 * @Author: 张佳琪(10070263) zhangjq-l@glodon.com
 * @Date: 2023-04-06 17:19:08
 * @LastEditors: 张佳琪(10070263) zhangjq-l@glodon.com
 * @LastEditTime: 2023-04-10 15:33:59
 * @FilePath: \viking-ship\src\components\Input\autoComplete.stories.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AutoComplete, DataSourceType } from './autoComplete';

interface lakerPlayerProps {
    value: string;
    number: string;
}
export const SimpleComplete = () => {
    // const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins', 'cook'];
    const lakersWithNumber: lakerPlayerProps[] = [
        { value: 'bradley', number: '11' },
        { value: 'pope', number: '14' },
        { value: 'cook', number: '1' },
        { value: 'caruso', number: '23' },
    ];
    // const handlerFetch = (query: string) => {
    //     return lakers.filter((name) => name.includes(query));
    // };

    // 对象数据类型的处理函数
    const handlerFetch = (query: string) => {
        return lakersWithNumber.filter((player) => player.value.includes(query));
    };

    // const renderOption = (item: string) => {
    //     return <h2>Name:{item}</h2>;
    // };

    // 对象数据类型的处理函数
    const renderOption = (item: DataSourceType) => {
        return (
            <>
                <h2>Name:{item.value}</h2>
                <h2>Number:{item.number}</h2>
            </>
        );
    };
    return (
        <AutoComplete
            fetchSuggestions={handlerFetch}
            onSelect={action('selected')}
            renderOption={renderOption}
        />
    );
};
// export default storiesOf('AutoComplete Component', module).add('AutoComplete', SimpleComplete);

const meta: Meta<typeof SimpleComplete> = {
    title: '自动补全',
    component: SimpleComplete,
};

export default meta;
