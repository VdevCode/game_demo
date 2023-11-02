import React, { ReactNode } from 'react';
import Tippy from '@tippyjs/react/headless';

interface DropdownProps {
  placement?: 'bottom-end' | 'bottom-start';
  children: any;
  content: any;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
function Dropdown({
  children,
  placement,
  content,
  visible,
  setVisible,
}: DropdownProps) {
  return (
    <Tippy
      interactive
      appendTo={() => document.body}
      visible={visible}
      placement={placement}
      onClickOutside={() => setVisible(!visible)}
      render={(attrs) => (
        <div
          className="p-2 box bg-white dark:bg-darkSecond shadow-md rounded-2xl border dark:border-transparent"
          tabIndex={-1}
          {...attrs}
        >
          <div>{content}</div>
        </div>
      )}
    >
      <div>{children}</div>
    </Tippy>
  );
}

export default Dropdown;
