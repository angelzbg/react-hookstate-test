import { createState, useState } from '@hookstate/core';

export const firstStore = createState({
  messages: [
    { msg: 'hello', author: 'angel', time: 1646399089358 },
    { msg: 'world', author: 'angel', time: 1646399130145 },
  ],
  messageValue: '',
});

export const useFirstStore = () => useState(firstStore);
