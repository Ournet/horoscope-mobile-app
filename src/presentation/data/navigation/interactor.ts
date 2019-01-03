
import { Dispatch } from 'redux';
import { State } from '../state';
import { navigate, replace, goBack } from './actions';
import { NavigationRoute } from './route';

export type NavigationInteractorParams = {
    dispatch: Dispatch
    getState: () => State
}

export interface NavigationInteractor {
    navigate(route: NavigationRoute): void
    replace(route: NavigationRoute): void
    goBack(): void
}

export function createNavigationInteractor(params: NavigationInteractorParams): NavigationInteractor {

    const { dispatch } = params;

    return {
        navigate(route: NavigationRoute) {
            dispatch(navigate(route))
        },
        replace(route: NavigationRoute) {
            dispatch(replace(route))
        },
        goBack() {
            dispatch(goBack())
        },
    }
}