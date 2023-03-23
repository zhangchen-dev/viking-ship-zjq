/*
 * @Author: 张佳琪(10070263) zhangjq-l@glodon.com
 * @Date: 2023-03-20 11:45:36
 * @LastEditors: 张佳琪(10070263) zhangjq-l@glodon.com
 * @LastEditTime: 2023-03-20 14:02:18
 * @FilePath: \viking-ship\src\components\Transiton\transition.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-right' | 'zoom-in-bottom';

type TransitionProps = CSSTransitionProps & {
    animation?: AnimationName;
};
const Trasition: React.FC<TransitionProps> = (props) => {
    const { children, classNames, animation, ...resProps } = props;
    return (
        <CSSTransition classNames={classNames ? classNames : animation} {...resProps}>
            {children}
        </CSSTransition>
    );
};
Trasition.defaultProps = {
    unmountOnExit: true,
    appear: true,
};
export default Trasition;
