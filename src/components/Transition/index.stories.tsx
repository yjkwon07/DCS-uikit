import { Fragment, useState } from 'react';

import { useTimeoutFn } from 'react-use';
import tw from 'twin.macro';

import Transition from './Transition';

export default {
  title: 'Utils/Transition',
  component: Transition,
  argTypes: {},
};

export const Default = () => {
  const [isShowing, setIsShowing] = useState(true);
  const resetIsShowing = useTimeoutFn(() => setIsShowing(true), 500)[2];

  return (
    <div tw="flex flex-col items-center py-16">
      <div tw="h-32 w-32">
        <Transition
          as={Fragment}
          show={isShowing}
          enter={tw`transform transition duration-[400ms]`}
          enterFrom={tw`opacity-0 rotate-[-120deg] scale-50`}
          enterTo={tw`opacity-100 rotate-0 scale-100`}
          leave={tw`transform duration-200 transition ease-in-out`}
          leaveFrom={tw`opacity-100 rotate-0 scale-100`}
          leaveTo={tw`opacity-0 scale-95`}
        >
          <div tw="h-full w-full rounded-md bg-white shadow-lg" />
        </Transition>
      </div>

      <button
        type="button"
        onClick={() => {
          setIsShowing(false);
          resetIsShowing();
        }}
        tw="[backface-visibility:hidden] mt-8 flex transform items-center rounded-full bg-black bg-opacity-20 px-3 py-2 text-sm font-medium text-white transition hover:scale-105 hover:bg-opacity-30 focus:outline-none active:bg-opacity-40"
      >
        <svg viewBox="0 0 20 20" fill="none" tw="h-5 w-5 opacity-70">
          <path
            d="M14.9497 14.9498C12.2161 17.6835 7.78392 17.6835 5.05025 14.9498C2.31658 12.2162 2.31658 7.784 5.05025 5.05033C7.78392 2.31666 12.2161 2.31666 14.9497 5.05033C15.5333 5.63385 15.9922 6.29475 16.3266 7M16.9497 2L17 7H16.3266M12 7L16.3266 7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>

        <span tw="ml-3">Click to transition</span>
      </button>
    </div>
  );
};
