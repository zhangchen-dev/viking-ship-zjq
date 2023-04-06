import React, { ChangeEvent, InputHTMLAttributes, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import Icon from '@ant-design/icons';

type InputSize = 'lg' | 'sm';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    /** 是否禁用输入框 */
    disabled?: boolean;
    /** 输入框大小 */
    size?: InputSize;
    /** 输入框内添加字体图标 */
    icon?: string | ReactElement; // string 时为 Icon 图标的type
    /** 输入框的前缀内容 */
    prepand?: string | ReactElement;
    /** 输入框的后缀显示内容 */
    appand?: string | ReactElement;
    /** 自定义输入框的classNames */
    className?: string;
    /** 输入的值变化时发生的回调 */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 *  Input 输入框 通过鼠标或者键盘输入内容， 是最为基础的表单域的包装
 *
 * ```js
 * // 这样使用
 * import {Input} from 'vikingship'
 * ~~~
 * 支持 HTMLInput的所有基础属性
 */

export const Input: React.FC<InputProps> = (props) => {
    // 1.0 取出各种的属性
    const { disabled, size, icon, prepand, appand, className } = props;

    // 2.0 根据属性计算不同的className
    let classes = classNames(className, 'vking-input', {
        'input-disabled': disabled,
        [`viking-${size}`]: size,
    });
    if (icon) {
        // Icon使用字体图标，传入Icon的类名
        if (typeof icon === 'string') {
            classes = classNames(classes, 'type-icon');
            return (
                <>
                    <input className={classes}>
                        <Icon type={icon} />
                    </input>
                </>
            );
        }
        classes = classNames(classes, 'ele-icon');
        // Icon使用Node，直接作为元素传入
        return (
            <>
                <input className={classes}>
                    <Icon />
                </input>
            </>
        );
    }
    return (
        // 根据属性判断是否添加特定的节点
        <>
            <input className={classes}></input>
        </>
    );
};
