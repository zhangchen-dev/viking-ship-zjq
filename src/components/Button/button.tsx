/*
 * @Author: 张佳琪(10070263) zhangjq-l@glodon.com
 * @Date: 2023-02-14 14:58:14
 * @LastEditors: 张佳琪(10070263) zhangjq-l@glodon.com
 * @LastEditTime: 2023-04-04 17:24:40
 * @FilePath: \viking-ship\src\components\Button\button.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import cx from 'classnames';

// 按钮大小属性
export enum ButtonSize {
    Large = 'lg',
    Small = 'sm',
}
// 按钮类型
export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link',
}

// 按钮的所有相关属性
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize | string;
    btnType?: ButtonType | string;
    children: React.ReactNode;
    href?: string;
}

// 点击事件 - 利用已有的，直接拿到react的按钮的所有属性
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
export const Button: React.FC<ButtonProps> = (props) => {
    const { className, btnType, disabled, size, children, href, ...restProps } = props;
    // 添加组件的默认类名
    // btn,btn-lg,btn-primary
    const classes = cx('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        disabled: btnType === ButtonType.Link && disabled,
    });

    if (btnType === ButtonType.Link && href) {
        return <a className={classes} href={href} {...restProps}></a>;
    }
    return (
        <button className={classes} disabled={disabled} {...restProps}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default,
};

export default Button;
