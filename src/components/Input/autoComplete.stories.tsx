/*
 * @Author: 张佳琪(10070263) zhangjq-l@glodon.com
 * @Date: 2023-04-06 17:19:08
 * @LastEditors: 张佳琪(10070263) zhangjq-l@glodon.com
 * @LastEditTime: 2023-04-06 18:09:23
 * @FilePath: \viking-ship\src\components\Input\autoComplete.stories.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AutoComplete } from './autoComplete';

const SimpleComplete = () => {
    const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins', 'cook'];
    const handlerFetch = (query: string) => {
        return lakers.filter((name) => name.includes(query));
    };
    return <AutoComplete fetchSuggestions={handlerFetch} />;
};
export default storiesOf('AutoComplete Component', module).add('AutoComplete', SimpleComplete);