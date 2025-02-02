import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject = {};

    // const extraArg: ThunkExtraArg = {};

    const store = configureStore({
        reducer: rootReducers,
        devTools: IS_DEV,
        preloadedState: initialState,
        // middleware: (getDefaultMiddleware) =>
        //     getDefaultMiddleware({
        //         thunk: {
        //             extraArgument: extraArg,
        //         },
        //     }),
    });

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
