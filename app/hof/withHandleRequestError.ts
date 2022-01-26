import { AsyncThunkPayloadCreator } from '@reduxjs/toolkit';

export const withHandleRequestError = <Args, Returned, ThunkApiConfig>(
  payloadCreator: AsyncThunkPayloadCreator<Returned, Args, ThunkApiConfig>,
) => {
  return async (args: Args, thunkAPI: any) => {
    try {
      return await payloadCreator(args, thunkAPI)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
}
