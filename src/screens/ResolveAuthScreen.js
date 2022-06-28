import React, {useEffect, useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext'

const ResolveAuthScreen = () => {
    //useEffect called once when component appears. empty array at end is call only once.
    const {tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);
    return null;
}

export default ResolveAuthScreen;
