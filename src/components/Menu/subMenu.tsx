import React, { useContext, FunctionComponentElement, useState } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import { MenuItemProps } from './menuItem';
import { CSSTransition } from 'react-transition-group';

export interface SubMenuProps {
    index?: number;
    title: string;
    className?: string;
    children: any;
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, children, className }) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const context = useContext(MenuContext);
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
    });
    // 下拉点击事件
    const handleClick = (e: React.MouseEvent) => {
        // console.log(menuOpen, '----');
        e.preventDefault();
        setMenuOpen(!menuOpen);
    };
    // 区别这两个事件的使用
    const clickEvents =
        context.mode === 'vertical'
            ? {
                  onClick: handleClick,
              }
            : {};
    const hoverEvents =
        context.mode !== 'vertical'
            ? {
                  onMouseEnter: (e: React.MouseEvent) => {
                      handleMouse(e, true);
                  },
                  onMouseLeave: (e: React.MouseEvent) => {
                      handleMouse(e, false);
                  },
              }
            : {};
    // hover下拉事件
    let timer: any;
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(() => {
            setMenuOpen(toggle);
        }, 300);
    };
    // 创建函数渲染下拉菜单中的内容
    const renderChildren = () => {
        const subMenuClasses = classNames('viking-submenu', {
            'menu-opened': menuOpen,
        });
        const childrenComponents = React.Children.map(children, (child, index) => {
            const childrenElement = child as FunctionComponentElement<MenuItemProps>;
            if (childrenElement.type.displayName === 'MenuItem') {
                return childrenElement;
            }
            
        });
        return (
            <CSSTransition
                in={menuOpen}
                timeout={300}
                classNames="zoon-in-top"
                appear // 由于组件可能第一次就存在打开的状态，此处需要刚开始就加载一次
            >
                <ul className={subMenuClasses}>{childrenComponents}</ul>
            </CSSTransition>
        );
    };
    return (
        <li key={index} className={classes} {...hoverEvents}>
            <div className="submenu-title" {...clickEvents}>
                {title}
            </div>
            {renderChildren()}
        </li>
    );
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;
