/*
 * @Author: 张佳琪(10070263) zhangjq-l@glodon.com
 * @Date: 2023-02-14 17:01:50
 * @LastEditors: 张佳琪(10070263) zhangjq-l@glodon.com
 * @LastEditTime: 2023-03-22 14:05:29
 * @FilePath: \viking-ship\src\App.test.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
