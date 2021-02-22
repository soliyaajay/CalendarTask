import { Matrics, Fonts, Color } from "../../common/styles";
export default (styles = {
  styleLogo: {
    width: Matrics.ScaleValue(100),
    height: Matrics.ScaleValue(100),
    resizeMode: 'contain',
  },
  info: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
  },
});
module.exports = styles;
