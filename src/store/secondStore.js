import { createState, useState } from '@hookstate/core';

export const secondStore = createState({
  someData: null,
  loadingData: true,
});

export const useSecondStore = () => useState(secondStore);
