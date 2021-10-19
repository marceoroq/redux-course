import { createAction } from '@reduxjs/toolkit';

export const apiRequested = createAction("apiRequested");
export const apiRequestFailed = createAction("apiRequestFailed");
export const apiRequestSucceeded = createAction("apiRequestSucceeded");