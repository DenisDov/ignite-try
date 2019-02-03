import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../Themes';
import Colors from '../../Themes/Colors';
import Metrics from '../../Themes/Metrics';
import Fonts from '../../Themes/Fonts';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  product: {
    flexDirection: 'row',
    marginHorizontal: Metrics.baseMargin,
    padding: Metrics.baseMargin,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  productTitle: {
    flex: 1,
    ...Fonts.style.normal,
  },
  productPrice: {
    ...Fonts.style.h6,
    color: Colors.facebook,
  },
  similar: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.ember,
    width: Metrics.screenWidth - 100,
    margin: Metrics.baseMargin,
    flexDirection: 'row',
    marginBottom: 30,
  },
  similarFigure: {
    marginRight: 10,
  },
  similarContent: {
    flex: 1,
  },
  similarLink: {
    color: Colors.facebook,
    marginVertical: Metrics.marginVertical,
  },
  similarPrice: {
    ...Fonts.style.normal,
    color: Colors.ember,
    marginBottom: Metrics.smallMargin,
  },
});
