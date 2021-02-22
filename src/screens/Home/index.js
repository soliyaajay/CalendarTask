import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, SafeAreaView, Text, Dimensions } from 'react-native';
// import components
import styles from './styles'
import images from '../../common/helper/Images'
import { CalendarList } from 'react-native-calendars';
import axios from 'axios';
import Carousel from 'react-native-snap-carousel';

import { Rating, AirbnbRating } from 'react-native-ratings';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: null,
            time: '',
            calendarData: [],
            isOpenDetail: false,
            selectedData: {},
            selectedindex: 0
        }
    }

    async componentDidMount() {
        this.getCalendarData(null)
    }

    getCalendarData(token) {
        let APIBody = {
            "requestobjects": [
                {
                    "posts": {
                        "operationtype": "read",
                        "id": {
                            "return": true
                        },
                        "userid": {
                            "searchvalues": ["41329663-5834-11eb-8e6e-3ca82abc3dd4"],
                            "return": true
                        },
                        "iscalendarentry": {
                            "searchvalues": ["true"],
                            "return": true
                        },
                        "media": {
                            "return": true
                        },
                        "rating": {
                            "return": true
                        },
                        "text": {
                            "return": true
                        },
                        "privacy": {
                            "searchvalues": [
                                18
                            ],
                            "return": true
                        },
                        "typeofday": {
                            "return": true
                        },
                        "calendardatetime": {
                            "return": true,
                            "sort": "descending"
                        },
                        "maxitemcount": "20",
                        "continuationtoken": token
                    }
                }
            ]
        }

        axios.post(
            'https://devapi.quinn.care/graph', APIBody

        )
            .then((response) => {
                var children = this.state.calendarData.concat(response.data.responseobjects[0].posts);
                this.setState({ calendarData: children,});
                if(response.data.responseobjects[0].continuationtoken !== null){
                    this.getCalendarData(response.data.responseobjects[0].continuationtoken);
                }
            });
    }

    onItemPress = (magenicVendor) =>  {
        this.setState({ isOpenDetail: true, selectedindex: this.state.calendarData.indexOf(magenicVendor) });
    }

    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.detailView}>
                <Image source={{ uri: item.media[0].mediaurl }} style={{ flex: 1, borderTopRightRadius: 8, borderTopLeftRadius: 8 }} />
                <View style={{ height: 160, paddingLeft: 10, paddingRight: 10 }}>
                    <View style={{ width: "100%", justifyContent: "space-between", flexDirection: "row", marginTop: 8 }}>
                        <View style={{ flexDirection: "row", alignSelf: "center" }}>
                            {item.typeofday.map((type) => {
                                return (
                                    <View style={{
                                        backgroundColor: (type === "hair cut" || type === "hair color" || type === "clarifying") ? "rgba(245,218,232,1.0)" :
                                            type === "protein treatment" ? "rgba(214,232,238,1.0)" : "rgba(214,234,231,1.0)",
                                        width: 24, height: 24, borderRadius: 12, alignItems: "center", justifyContent: "center",
                                    }}>
                                        <Text style={{ fontSize: 8 }}>{type === "hair cut" 
                                        ? "Cu" : type === "protein treatment " 
                                        ? "Pr" : type === "hair color" 
                                        ? "HC" : type === "deep conditioning" 
                                        ? "DC" : "C"}</Text>

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

    render() {
        const { calendarData, isOpenDetail, selectedindex } = this.state;
        return (
            <SafeAreaView style={styles.info}>
                <View style={styles.mainView}>
                    <View style={styles.headerView}>
                        <Image source={images.back} style={styles.backButton} />
                        <Text style={{ fontSize: 12, marginLeft: 10 }}><Text style={{ color: "#34B1E6" }}>my</Text> hair diary</Text>
                    </View>
                    <CalendarList
                        pastScrollRange={50}
                        futureScrollRange={50}
                        calendarHeight={710}
                        dayComponent={({ date, state }) => {
                            var currentData = `${date.dateString}T07:00:00`
                            let magenicVendor = this.state.calendarData.find(vendor => vendor['calendardatetime'] === currentData);
                            if (magenicVendor) {
                                return (
                                    <TouchableOpacity onPress={() => {this.onItemPress(magenicVendor)}}>
                                        <View style={{width:"100%"}}>
                                        <Text style={{ fontSize: 14,alignSelf:'center' }}>{date.day}</Text>
                                        <View style={{ justifyContent: "center", alignSelf:'center'}}>
                                            <AirbnbRating
                                                count={5}
                                                defaultRating={magenicVendor.rating}
                                                size={8}
                                                showRating={false}
                                                isDisabled={true}
                                                starStyle={{margin:0.5,padding:0}}
                                            />
                                        </View>
                                        <Image source={{ uri: magenicVendor.media[0].mediaurl }} style={styles.userImage} />
                                        <View style={{ flexDirection: "row" }}>
                                            {magenicVendor.typeofday.map((type) => {
                                                return (
                                                    <View style={[styles.serviceType,{
                                                        backgroundColor: (type === "hair cut" || type === "hair color" || type === "clarifying") ? "#F5DAE8" :
                                                            type === "protein treatment" ? "#D6E8EE" : "#D6EAE7",
                                                        
                                                    }]}>
                                                        <Text style={{ fontSize: 8 }}>
                                                            {type === "hair cut" ? "Cu" : type === "protein treatment " 
                                                            ? "Pr" : type === "hair color" 
                                                            ? "HC" : type === "deep conditioning" 
                                                            ? "DC" : "C"}</Text>

                                                    </View>
                                                )
                                            }
                                            )}
                                        </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            } else {
                                return (
                                    <View style={{height:'16%'}}>
                                        <Text style={{ textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black' }}>
                                            {date.day}
                                        </Text>
                                    </View>
                                );
                            }

                        }}
                        scrollEnabled={true}
                        // Enable or disable vertical scroll indicator. Default = false
                        showScrollIndicator={true}
                    />
                </View>
                {   isOpenDetail && 
                    <View style={{ backgroundColor: "rgba(0,0,0,0.8)", height: "100%", position: "absolute" }}>
                        <TouchableOpacity style={styles.closeIcon} onPress={() => { this.setState({ isOpenDetail: false }) }}>
                            <Image source={images.close} style={{ width: 20, height: 20, }} />
                        </TouchableOpacity>
                        <Carousel
                            contentContainerCustomStyle={{ alignItems: "center", }}
                            ref={(c) => { this._carousel = c; }}
                            initialNumToRender={100}
                            data={calendarData}
                            layout={'default'}
                            renderItem={this._renderItem}
                            firstItem={selectedindex}
                            sliderWidth={Dimensions.get('window').width}
                            itemWidth={Dimensions.get('window').width - 80}
                        />
                    </View>
                }
            </SafeAreaView>
        )
    }
}

//---- Connect to props functions and values -----//
function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
