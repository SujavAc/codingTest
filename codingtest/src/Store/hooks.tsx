import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './Reducer/rootReducer'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: (arg?: unknown) => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector