import { Matrics, Fonts, Color } from "../../common/styles";
export default (styles = {
  styleView: {
    position: "absolute",
    textAlign: "center",
    backgroundColor: "tomato",
    width: "90%",
    bottom: "10%",
    zIndex: 1,
    borderRadius: Matrics.ScaleValue(5),
    padding: Matrics.ScaleValue(10),
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9,
    alignSelf: 'center'
  },
});
module.exports = styles;
