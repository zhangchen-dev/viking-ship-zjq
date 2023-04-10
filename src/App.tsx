/*
 * @Author: 张佳琪(10070263) zhangjq-l@glodon.com
 * @Date: 2023-02-14 17:01:50
 * @LastEditors: 张佳琪(10070263) zhangjq-l@glodon.com
 * @LastEditTime: 2023-04-10 11:48:26
 * @FilePath: \viking-ship\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import React from 'react'
// import logo from './logo.svg'
import './App.scss';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Tabs from './components/Tab/Tabs';
import TabItem from './components/Tab/TabItem';
import {
    useRef,
    useState,
    useCallback,
    useContext,
    useDebugValue,
    useDeferredValue,
    useId,
    useEffect,
    useImperativeHandle,
    useInsertionEffect,
    useMemo,
    useLayoutEffect,
    useReducer,
    useSyncExternalStore,
} from 'react';
import Trasition from './components/Transiton/transition';
import { Input } from './components/Input';
import { SimpleComplete } from './components/Input/autoComplete.stories';
function App() {
    const nodeRef = useRef(null);

    const [show, setShow] = useState<boolean>(false);
    return (
        <div className="App">
          <Input size='lg' ></Input>
          <Input size='sm' ></Input>
            <header className="App-header">
                <Button onClick={() => setShow(!show)}>hello</Button>
                <Trasition in={show} timeout={300} animation="zoom-in-bottom" nodeRef={nodeRef}>
                    <div>
                        <p>asdfasdfasdfasdf</p>
                        <p>asdfasdfasdfasdf</p>
                        <p>asdfasdfasdfasdf</p>
                        <p>asdfasdfasdfasdf</p>
                        <p>asdfasdfasdfasdf</p>
                    </div>
                </Trasition>
                {/* <Button btnType={ButtonType.Default} disabled={true} size={ButtonSize.Large}>
          hello
        </Button> */}
                {/* <Menu
          defaultIndex={0}
          onSelect={(index) => {
            alert(index)
          }}
        >
          <MenuItem>cool link</MenuItem>
          <MenuItem>cool link 1</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>cool link</MenuItem>
            <MenuItem>cool link 1</MenuItem>
          </SubMenu>
        </Menu>
        <Menu
          defaultIndex={0}
          onSelect={(index) => {
            alert(index)
          }}
          mode="vertical"
        >
          <MenuItem>cool link</MenuItem>
          <MenuItem>cool link 1</MenuItem>
          <SubMenu title="dropdown1">
            <MenuItem>cool link</MenuItem>
            <MenuItem>cool link 1</MenuItem>
          </SubMenu>
        </Menu>
        <Menu
          defaultIndex={0}
          onSelect={(index) => {
            alert(index)
          }}
          mode={'vertical'}
        >
          <MenuItem index={0}>cool link</MenuItem>
          <MenuItem index={1}>cool link 1</MenuItem>
          <MenuItem index={2}>cool link 2</MenuItem>
        </Menu>
        <Tabs defaultIndex="0">
          <TabItem index="0" label="选项卡1">
            选项卡111111
          </TabItem>
          <TabItem index="1" label="选项卡2">
            选项卡21212122
          </TabItem>
          <TabItem index="2" label="选项卡3">
            选项卡312122332422322
          </TabItem>
        </Tabs> */}
        <SimpleComplete/>
            </header>
        </div>
    );
}

export default App;
