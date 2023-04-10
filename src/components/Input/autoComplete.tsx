/*
 * @Author: 张佳琪(10070263) zhangjq-l@glodon.com
 * @Date: 2023-04-06 16:44:40
 * @LastEditors: 张佳琪(10070263) zhangjq-l@glodon.com
 * @LastEditTime: 2023-04-10 15:57:13
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

import React, { useState, ChangeEvent, ReactElement, useEffect } from 'react';
import Input, { InputProps } from 'antd/es/input';
import useDebounce from '../../hooks/useDebounce';

interface DataSourceObject {
    value: string;
    number: string;
}
export type DataSourceType = DataSourceObject;
export interface AutocompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestions: (str: string) => DataSourceType[];
    onSelect?: (item: DataSourceType) => void;
    // 自定义模板
    renderOption?: (item: DataSourceType) => ReactElement;
}

export const AutoComplete: React.FC<AutocompleteProps> = (props) => {
    const { fetchSuggestions, value, onSelect, renderOption, ...resProps } = props;

    const [inputValue, setInputValue] = useState(value as string);
    const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);

    const debounceValue = useDebounce(inputValue, 500);

    useEffect(() => {
        if (debounceValue) {
            const results = fetchSuggestions(debounceValue);
            // 此处加入异步的操作
            if (results instanceof Promise) {
                results.then((data) => {
                    setSuggestions(data);
                });
            } else {
                setSuggestions(results);
            }
        } else {
            setSuggestions([]);
        }
    }, [debounceValue]);

    console.log(suggestions, '---==----');

    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setInputValue(value);
    };
    const handlerSelect = (item: DataSourceType) => {
        setInputValue(item.value);
        setSuggestions([]);
        if (onSelect) {
            // 调用外部传入的onSelect方法
            onSelect(item);
        }
    };
    // 根据是否存在自定义模板选择渲染情况
    const renderTemplate = (item: DataSourceType) => {
        return renderOption ? renderOption(item) : item.value;
    };

    const generateDeropDown = () => {
        return (
            <ul>
                {suggestions.map((item, index) => {
                    return (
                        <li key={index} onClick={() => handlerSelect(item)}>
                            {renderTemplate(item)}
                        </li>
                    );
                })}
            </ul>
        );
    };
    return (
        <div className="viking-auto-complete">
            <Input value={inputValue} {...resProps} onChange={handlerChange} />
            {suggestions.length > 0 && generateDeropDown()}
        </div>
    );
};
