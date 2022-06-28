//for navigating from outside of navigation function.
// Call navigate with route, and optional params.

import {NavigationActions} from 'react-navigation';

let navigator;

export const setNavigator = (nav) => {
    navigator = nav;
};


//telling navigate to change state to navigate to routeName.
// Runs dispatch on the actions.
export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}
