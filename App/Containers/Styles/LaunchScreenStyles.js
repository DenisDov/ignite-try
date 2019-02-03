import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles, Colors } from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    // backgroundColor: Colors.background,
  },
  cameraView: {
    // alignSelf: 'center',
    width: Metrics.screenWidth,
    height: 300,
    marginBottom: Metrics.doubleSection,
    overflow: 'hidden',
  },
  camera: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    paddingHorizontal: 20,
  },
});
