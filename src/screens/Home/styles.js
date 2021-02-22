import { Matrics, Fonts, Color } from "../../common/styles";
export default (styles = {
  info: {
    flex: 1,
    backgroundColor: Color.white,
  },
  mainView: {
    flex: 1, 
    marginBottom: 10, 
    backgroundColor: Color.white
  },
  headerView: {
    flexDirection: "row", 
    marginTop: 20, 
    alignItems: "center"
  },
  backButton: {
    width: 20, 
    height: 20, 
    marginLeft: 20 
  },
  userImage: {
    width: 50, 
    height: 50, 
    alignSelf: "center"
  },
  serviceType: {
    width: 14, 
    height: 14, 
    borderRadius: 7, 
    alignItems: "center", 
    justifyContent: "center"
  },
  closeIcon: {
    alignSelf: "flex-end", 
    justifyContent: "center", 
    alignItems: "center", 
    width: 36, 
    height: 36, 
    borderRadius: 18, 
    backgroundColor: "grey"
  },
  detailView: {
    width: "100%", 
    backgroundColor: "#FFFFFF", 
    alignSelf: "center", 
    borderRadius: 8, 
    height: "92%"
  }
});
module.exports = styles;
