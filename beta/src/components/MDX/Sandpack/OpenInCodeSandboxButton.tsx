/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

<<<<<<< HEAD
import * as React from 'react';
=======
>>>>>>> 4b68508440a985598571f78f60637b6dccdd5a1a
import {UnstyledOpenInCodeSandboxButton} from '@codesandbox/sandpack-react';
import {IconNewPage} from '../../Icon/IconNewPage';

export const OpenInCodeSandboxButton = () => {
  return (
    <UnstyledOpenInCodeSandboxButton
<<<<<<< HEAD
      className="text-sm text-primary dark:text-primary-dark inline-flex items-center hover:text-link duration-100 ease-in transition mx-1 ml-3 md:ml-1"
      title="Open in CodeSandbox">
      <IconNewPage
        className="inline mb-0.5 ml-1 mr-1 relative top-px"
        width=".8em"
        height=".8em"
=======
      className="text-sm text-primary dark:text-primary-dark inline-flex items-center hover:text-link duration-100 ease-in transition mx-1 ml-2 md:ml-1"
      title="Open in CodeSandbox">
      <IconNewPage
        className="inline ml-1 mr-1 relative top-[1px]"
        width="1em"
        height="1em"
>>>>>>> 4b68508440a985598571f78f60637b6dccdd5a1a
      />
      <span className="hidden md:block">Fork</span>
    </UnstyledOpenInCodeSandboxButton>
  );
};
