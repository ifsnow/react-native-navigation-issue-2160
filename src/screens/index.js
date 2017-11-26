import { Navigation } from 'react-native-navigation';

import YoutubeScreen from './YoutubeScreen';

export function registerScreens() {
  Navigation.registerComponent('YoutubeScreen', () => YoutubeScreen);
}
