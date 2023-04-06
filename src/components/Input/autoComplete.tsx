/*
 * @Author: 张佳琪(10070263) zhangjq-l@glodon.com
 * @Date: 2023-04-06 16:44:40
 * @LastEditors: 张佳琪(10070263) zhangjq-l@glodon.com
 * @LastEditTime: 2023-04-06 17:17:55
 * @FilePath: \viking-ship\src\components\Input\Autocomplete.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 开发前的组件分析思路与策略

// const a = ['1','2','112']
// interface AutocompleteProps{
//     fetchSuggestions:(keyword:string,data:string[])=>string[] | Promise<string[]>,
//     onSelect:(item:string) =>void
// }

// const handleChange = (keyword:string)=>{
//     return a.filter(item=>item.includes(keyword))
//     return fetch(`url?keyword=${keyword}`)
// }
// const handleSelcet = (item:string)=>{
//     console.log(item)
// }

// <AutoComplete
// fetchSuggestions={handleChange}
// onSelect={handleSelcet} />

import React, { useState, ChangeEvent } from 'react';
import Input, { InputProps } from 'antd/es/input';

export interface AutocompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestions: (str: string) => string[];
    onSelect?: (item: string) => void;
}

export const AutoComplete: React.FC<AutocompleteProps> = (props) => {
    const { fetchSuggestions, value, onSelect, ...resProps } = props;

    const [ChangeEvent, setInputValue] = useState(value);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    // console.log(suggestions, '---==----');

    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setInputValue(value);
        if (value) {
            const results = fetchSuggestions(value);
            setSuggestions(results);
        } else {
            setSuggestions([]);
        }
    };
    return (
        <div className="viking-auto-complete">
            <Input value={ChangeEvent} {...resProps} onChange={handlerChange} />
        </div>
    );
};
