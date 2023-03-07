import React from 'react'
import logo from './logo.svg'
import './App.scss'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => console.log('123')} btnType={ButtonType.Danger} disabled={true} size={ButtonSize.Large}>
          hello
        </Button>
        <Button btnType={ButtonType.Default} disabled={true} size={ButtonSize.Large}>
          hello
        </Button>
        <Menu
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
      </header>
    </div>
  )
}

export default App
