/* @flow */
import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  PixelRatio
} from 'react-native';

import YouTube from 'react-native-youtube';

export default class YoutubeScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  constructor(props) {
    super(props);
    this.state = {
      containerMounted: false,
      containerWidth: null,
    };
  }

  render() {
    return (
      <View style={styles.container} onLayout={({ nativeEvent: { layout: { width } } }) => {
          if (!this.state.containerMounted) this.setState({ containerMounted: true });
          if (this.state.containerWidth !== width) this.setState({ containerWidth: width });
        }}>
        {this.state.containerMounted &&
          <YouTube
            apiKey="YOUR_API_KEY"
            videoId="ncw4ISEU5ik"
            play={true}
            loop={false}
            controls={1}
            style={[
              {
                height: PixelRatio.roundToNearestPixel(this.state.containerWidth / (16 / 9))
              },
              {
                alignSelf: 'stretch'
              }
            ]}
            onError={e => alert(e.error) }
          />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
