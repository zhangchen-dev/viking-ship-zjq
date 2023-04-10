/*
 * @Author: 张佳琪(10070263) zhangjq-l@glodon.com
 * @Date: 2023-04-06 16:44:40
 * @LastEditors: 张佳琪(10070263) zhangjq-l@glodon.com
 * @LastEditTime: 2023-04-10 18:10:48
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

import React, {
    useState,
    ChangeEvent,
    ReactElement,
    useEffect,
    KeyboardEvent,
    useRef,
} from 'react';
import Input, { InputProps } from 'antd/es/input';
import useDebounce from '../../hooks/useDebounce';
import classNames from 'classnames';
import useClickOutside from '../../hooks/useClickOutside';

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
    const [highLightIndex, setHighLightIndex] = useState<number>(0);

    const debounceValue = useDebounce(inputValue, 500);

    // 利用useRef解决选中后还会出现搜索的bug
    const triggerSearch = useRef(false);
    const componentRef = useRef<HTMLDivElement>(null);

    useClickOutside(componentRef, () => {
        setSuggestions([]);
    });

    useEffect(() => {
        if (debounceValue && triggerSearch.current) {
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
        setHighLightIndex(-1);
    }, [debounceValue]);

    console.log(suggestions, '---==----');

    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setInputValue(value);
        triggerSearch.current = true;
    };
    const handlerSelect = (item: DataSourceType) => {
        setInputValue(item.value);
        setSuggestions([]);
        if (onSelect) {
            // 调用外部传入的onSelect方法
            onSelect(item);
        }
        triggerSearch.current = false;
    };
    // 根据是否存在自定义模板选择渲染情况
    const renderTemplate = (item: DataSourceType) => {
        return renderOption ? renderOption(item) : item.value;
    };

    const generateDeropDown = () => {
        return (
            <ul>
                {suggestions.map((item, index) => {
                    const cnames = classNames('suggestion-item', {
                        'item-highlighted': index === highLightIndex,
                    });
                    return (
                        <li key={index} className={cnames} onClick={() => handlerSelect(item)}>
                            {renderTemplate(item)}
                        </li>
                    );
                })}
            </ul>
        );
    };

    const hightlight = (index: number) => {
        let tempIndex = index;
        if (index < 0) tempIndex = 0;
        if (index >= suggestions.length) {
            tempIndex = suggestions.length - 1;
        }
        setHighLightIndex(tempIndex);
    };

    const handlerKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        switch (e.keyCode) {
            case 13:
                if (suggestions[highLightIndex]) handlerSelect(suggestions[highLightIndex]);
                break;
            case 38:
                hightlight(highLightIndex - 1);
                break;
            case 40:
                hightlight(highLightIndex + 1);
                break;
            case 27:
                setSuggestions([]);
                break;
            default:
                break;
        }
    };
    return (
        <div className="viking-auto-complete" ref={componentRef}>
            <Input
                value={inputValue}
                {...resProps}
                onChange={handlerChange}
                onKeyDown={handlerKeyDown}
            />
            {suggestions.length > 0 && generateDeropDown()}
        </div>
    );
};
