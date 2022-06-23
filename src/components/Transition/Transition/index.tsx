import { Transition as HTransition } from '@headlessui/react';

import { TransitionProps } from '../@types';

const getProps = (props: TransitionProps) => {
  return {
    ...props,
    enter: 'enter',
    enterFrom: 'enter-from',
    enterTo: 'enter-to',
    entered: 'entered',
    leave: 'leave',
    leaveFrom: 'leave-from',
    leaveTo: 'leave-to',
    css: {
      '&.enter': props.enter,
      '&.enter-from': props.enterFrom,
      '&.enter-to': props.enterTo,
      '&.entered': props.entered,
      '&.leave': props.leave,
      '&.leave-from': props.leaveFrom,
      '&.leave-to': props.leaveTo,
    },
    beforeEnter: () => props.beforeEnter?.(),
    afterEnter: () => props.afterEnter?.(),
    beforeLeave: () => props.beforeLeave?.(),
    afterLeave: () => props.afterLeave?.(),
  };
};

/**
 * @see https://headlessui.dev/react/transition
 */
const Transition = (props: TransitionProps) => {
  return <HTransition {...getProps(props)} />;
};

const Child = (props: TransitionProps) => {
  return <HTransition.Child {...getProps(props)} />;
};

Transition.Child = Child;

export default Transition;
