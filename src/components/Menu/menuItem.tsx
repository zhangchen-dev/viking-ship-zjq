import React, { ReactNode, useContext } from 'react';
import cx from 'classnames';
import { MenuContext } from './menu';

export interface MenuItemProps {
    index?: number;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
    const { index, disabled, className, style, children } = props;
    const context = useContext(MenuContext);

    const classes = cx('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index,
    });
    const handleClick = () => {
        if (context.onSelect && !disabled && typeof index === 'number') {
            context.onSelect(index);
        }
    };
    return (
        <li className={classes} style={style} onClick={handleClick}>
            {children}
        </li>
    );
};
export default MenuItem;
