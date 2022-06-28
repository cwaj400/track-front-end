import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Spacer from './Spacer';
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const {
        state: {name, recording, locations},
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

    return (
        <View style={styles.backgroundStyle}>
            <Spacer>
                <Input onChangeText={changeName} placeholder="Track name" value={name}/>
            </Spacer>
            <Spacer>
                {recording ?
                    <Button style={{backgroundColor: 'red'}} title="Stop Recording" onPress={stopRecording}/>
                    :
                    <Button title="Start Recording" onPress={startRecording}/>
                }
            </Spacer>
            <Spacer>
                {locations.length > 0 && !recording ? <Button title="Save Recording" onPress={saveTrack}/> : null}
            </Spacer>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {}
})

export default TrackForm;
