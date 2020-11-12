import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const SomeComponent: FC<Props> = ({ children }) => {
  return <div>{children || `Cool!!!!`}</div>;
};

export const Header: FC = () => {
  return <h1>A header!</h1>
};

export const SmallHeader: FC = () => {
  return <h1>A small header!</h1>
};
