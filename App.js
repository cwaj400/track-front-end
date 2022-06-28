import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import {Provider as AuthProvider} from './src/context/AuthContext'
import {setNavigator} from './src/navigationRef'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'
import {Provider as LocationProvider} from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackContext';

const switchNavigator = createSwitchNavigator({
    ResolveAuth: ResolveAuthScreen,
    //don't show anything until we know about whether or not user is signed in already.
    loginFlow: createStackNavigator({
        //signup screen shown first because its first in stack.
        Signup: SignUpScreen,
        Signin: SignInScreen
    }),
    mainFlow: createBottomTabNavigator({
        trackListFlow: createStackNavigator({
            TrackList: TrackListScreen,
            TrackDetail: TrackDetailScreen
        }),
        CreateTrack: TrackCreateScreen,
        Account: AccountScreen
    })
})

const App = createAppContainer(switchNavigator)

export default () => {
    return (
        //Can put providers in any order

        <LocationProvider>
            <TrackProvider>
                <AuthProvider>
                    {/*calling set navigator on navigator object in app component*/}
                    <App ref={(navigator) => {
                        setNavigator(navigator)
                    }}/>
                </AuthProvider>
            </TrackProvider>
        </LocationProvider>
    );
}

