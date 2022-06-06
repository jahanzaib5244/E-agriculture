import {View, Text} from 'react-native';
import React, {useState} from 'react';

import YouTube from 'react-native-youtube';

export default function Videos() {
  const [error, seterror] = useState('');
  const [quality, setquality] = useState('');
  const [status, setstatus] = useState('');
  const [ready, setready] = useState(false);
  return (
    <View>
      <YouTube
        apiKey="AIzaSyBYdl7nQFxt0xy60_didJCxu804qVbzaic"
        videoId="u0W00AN7rWU" // The YouTube video ID
        play
        fullscreen={false}
        loop={false}
        onReady={e => setready(true)}
        onChangeState={e => setstatus(e.state)}
        onChangeQuality={e => setquality(e.quality)}
        onError={e => seterror(e.error)}
        style={{alignSelf: 'stretch', height: 250}}
      />
    </View>
  );
}
