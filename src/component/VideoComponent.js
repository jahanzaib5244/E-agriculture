import React, {useState, useEffect, useCallback} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const TopBar = ({play, fullScreen}) => (
  <View
    style={{
      alignSelf: 'center',
      position: 'absolute',
      top: 0,
    }}>
    {!fullScreen && <Text style={{color: '#FFF'}}> Custom Top bar</Text>}
  </View>
);

export default function VideoComponent({id = ''}) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  return (
    <View style={{paddingTop: 30}}>
      <YoutubePlayer
        height={240}
        play={playing}
        videoId={id}
        onChangeState={onStateChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
