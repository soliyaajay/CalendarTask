import React from 'react';
import { View, Keyboard, TextInput, Dimensions, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { TextComponent } from '..';
import { Color, Constants, Matrics } from '../../common/styles';
import images from '../../common/helper/Images';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';

class ToastComponent extends React.Component {
  render() {
    
    const {
      calendarData
    } = this.props;
    
    const _renderItem = ({ item, index }) => {
      console.log("itemitemitemitemitem",item);
      return (
          <View style={{ width: "100%", backgroundColor: "#FFFFFF", alignSelf: "center", borderRadius: 8, height: "92%" }}>
              <Image source={{ uri: item.media[0].mediaurl }} style={{ height: "70%", borderTopRightRadius: 8, borderTopLeftRadius: 8 }} />
              <View style={{ height: 120, paddingLeft: 10, paddingRight: 10 }}>
                  <View style={{ width: "100%", justifyContent: "space-between", flexDirection: "row", marginTop: 8 }}>
                      <View style={{ flexDirection: "row", alignSelf: "center" }}>
                          {item.typeofday.map((type) => {
                              return (
                                  <View style={{
                                      backgroundColor: (type === "hair cut" || type === "hair color" || type === "clarifying") ? "rgba(245,218,232,1.0)" :
                                          type === "protein treatment" ? "rgba(214,232,238,1.0)" : "rgba(214,234,231,1.0)",
                                      width: 24, height: 24, borderRadius: 12, alignItems: "center", justifyContent: "center",
                                  }}>
                                      <Text style={{ fontSize: 8 }}>{type === "hair cut" ? "Cu" : type === "protein treatment " ? "Pr" : type === "hair color" ? "HC" : type === "deep conditioning" ? "DC" : "C"}</Text>

                                  </View>
                              )
                          }
                          )}
                      </View>
                      <AirbnbRating
                          count={item.rating}
                          size={15}
                          showRating={false}
                          isDisabled={true}
                      />
                  </View>
                  <View style={{ marginTop: 15 }}>
                      <Text style={{ fontSize: 12, fontWeight: "500" }}>{item.calendardatetime}</Text>
                      <Text style={{ fontSize: 10, fontWeight: "200", marginTop: 6 }}>{item.text}</Text>
                      <View style={{ backgroundColor: "grey", width: "100%", height: 1, marginTop: 5 }}>
                          <View style={{ height: 30, width: "100%", justifyContent: "center", alignItems: "center" }}>
                              <Text style={{ fontSize: 14, fontWeight: "600", marginTop: 6, lineHeight: 13 }}>View full Post</Text>
                          </View>
                      </View>
                  </View>
              </View>
          </View>
      );
  }
    return (
      <View style={{ backgroundColor: "rgba(0,0,0,0.8)", height: "100%", position: "absolute" }}>
                        <TouchableOpacity style={{ alignSelf: "flex-end", justifyContent: "center", alignItems: "center", width: 36, height: 36, borderRadius: 18, backgroundColor: "grey" }} onPress={() => { this.setState({ isOpenDetail: false }) }}>
                            <Image source={images.close} style={{ width: 20, height: 20, }} />
                        </TouchableOpacity>

                        

                        <Carousel
                            contentContainerCustomStyle={{ alignItems: "center", }}
                            ref={(c) => { this._carousel = c; }}
                            initialNumToRender={100}
                            data={calendarData}
                            layout={'default'}
                            renderItem={_renderItem}
                            sliderWidth={Dimensions.get('window').width}
                            itemWidth={Dimensions.get('window').width - 80}
                        />
                    </View>
    );
  }
}
export default ToastComponent;

// import React from 'react';
// import { View, Keyboard, TextInput } from 'react-native';
// import PropTypes from 'prop-types';
// import { TextComponent } from '..';
// import { Color, Constants, Matrics } from '../../common/styles';
// import styles from './styles';

// class ToastComponent extends React.Component {
//   render() {
//     const btnTextStylesArray = [];
//     const {
//       isDisplay,
//       children,
//     } = this.props;

//     btnTextStylesArray.push({
//       color: Color.WHITE,
//       fontFamily: Constants.FONT_MEDIUM,
//       fontSize: Constants.NORMAL,
//     });

//     return (
//       isDisplay
//         ?
//         <View style={styles.styleView}>
//           <TextComponent style={btnTextStylesArray} normal regularFont>
//             {children}
//           </TextComponent>
//         </View>
//         :
//         null
//     );
//   }
// }
// export default ToastComponent;
