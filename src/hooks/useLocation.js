import {useState, useEffect} from 'react';
import {
    Accuracy,
    requestForegroundPermissionsAsync,
    watchPositionAsync
} from 'expo-location';

export default (shouldTrackUser, callback) => {
    const [err, setErr] = useState(null);




    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            try {
                const {granted} = await requestForegroundPermissionsAsync();
                subscriber = await watchPositionAsync({
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: 1000,
                        distanceInterval: 10
                    },
                    //add location in the callback.
                    callback
                );
            } catch (err) {
                setErr(err);
            }
        }

        if (shouldTrackUser) {
            startWatching().then(r => {
                });
        } else {
            if (subscriber) {
                //stop watching
                subscriber.remove();
            }
            subscriber = null;
        }
        //clean up function
        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        }
        //rerun function if shouldTrackUser changes.
        // If obj is different, rerun function.
        // Generally only should add props context or state, add to dependency list.
    }, [shouldTrackUser, callback]);

    return [err];
}
