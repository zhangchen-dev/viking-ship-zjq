import React, { ReactNode, createContext, useState } from "react";
import cx from "classnames";
import MenuItem, { MenuItemProps } from "./menuItem";

type MenuMode = "horizontal" | "vertical";
type onSelectCallback = (selectedIndex: number) => void;

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: string;
  style?: React.CSSProperties;
  onSelect?: onSelectCallback;
  children?: ReactNode;
}
interface IMenuContext {
  index: number;
  onSelect?: onSelectCallback;
  mode?: MenuMode | string;
}

export const MenuContext = createContext<IMenuContext>({ index: 0 });

const Menu: React.FC<MenuProps> = (props) => {
  const { className, defaultIndex, mode, style, onSelect, children } = props;
  const classes = cx("viking-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });
  const [currentActive, setActive] = useState(defaultIndex);

  const handleClick = (index: number) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
    mode: mode,
  };
  // 渲染子组件

  const renderChildren = () => {
    return React.Children.map(children, (child, Index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || "SubMenu") {
        // 修改子组件
        // return child;
        return React.cloneElement(childElement, {
          index: Index,
        });
      } else {
        console.log("不是MenuItem的不渲染");
      }
    });
  };
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};
Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal",
};

MenuItem.displayName = "MenuItem";

export default Menu;
