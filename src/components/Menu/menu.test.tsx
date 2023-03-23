import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Menu, { MenuProps } from './menu';
import MenuItem from './menuItem';

const testProps: MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'test',
};
const testVerticalProps: MenuProps = {
    defaultIndex: 0,
    mode: 'vertical',
};

const generateMenu = (props: any) => (
    <Menu {...props}>
        <MenuItem>test-menu</MenuItem>
        <MenuItem>active</MenuItem>
        <MenuItem>disabled</MenuItem>
    </Menu>
);
let wrapper: RenderResult,
    menuElement: HTMLElement,
    activeElement: HTMLElement,
    disabledElement: HTMLElement;
describe('test menu and menuItem component', () => {
    beforeEach(() => {
        wrapper = render(generateMenu(testProps));
        menuElement = wrapper.getByTestId('test-menu');
        activeElement = wrapper.getByText('active');
        disabledElement = wrapper.getByText('disabled');
    });
    it('should render corrrect Menu and MenuItem based on default props', () => {
        expect(menuElement).toBeInTheDocument();
    }),
        it('click items should change active adn call the right callback', () => {}),
        it('should render vertical mode when mode is set to vertical', () => {});
});
