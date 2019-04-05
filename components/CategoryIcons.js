import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'expo';

export default class CategoryIcon extends Component {
  render() {
    return (
      <View style={{flexDirection:'row',
        flex:2,flexWrap: 'wrap',
         alignSelf: 'flex-start',
         justifyContent: 'flex-end',
          }}>
          <View style={{height:140,width:'50%',backgroundColor:'#006266',
           justifyContent: 'space-around',
           flexDirection:'column',
           alignItems: 'center',
           
           
           
           }}>
            <Icon.FontAwesome
              name={'paint-brush'}
              size={45}
              style={{ color:'#55efc4'}}
            />
            <Text style={{color:'#55efc4' ,fontFamily:'cairo',fontSize:18,
          borderBottomColor: '#55efc4',
          borderBottomWidth: 1,
          paddingBottom:15,
          width:'85%',
          textAlign:'center'
          }} >التصميم سهل</Text>
          </View>
          <View style={{height:140,width:'50%',backgroundColor:'#006266',
           justifyContent: 'space-around',
           flexDirection:'column',
           alignItems: 'center',
           
           }}>
            <Icon.AntDesign
              name={'heart'}
              size={45}
              style={{ color:'#55efc4'}}
            />
            <Text style={{color:'#55efc4' ,fontFamily:'cairo',fontSize:18,
           borderBottomColor: '#55efc4',
           borderBottomWidth: 1,
           paddingBottom:15,
          width:'85%',
          textAlign:'center'
          }} >هدايا ستعجب احبابك</Text>
          </View>
          <View style={{height:140,width:'50%',backgroundColor:'#006266',
           justifyContent: 'space-around',
           flexDirection:'column',
           alignItems: 'center',
           
           }}>
            <Icon.MaterialIcons
              name={'local-shipping'}
              size={45}
              style={{ color:'#55efc4'}}
            />
            <Text style={{color:'#55efc4' ,fontFamily:'cairo',fontSize:18,
           borderBottomColor: '#55efc4',
           borderBottomWidth: 1,
           paddingBottom:15,
          width:'85%',
          textAlign:'center'
          }} >شحن سريع</Text>
          </View>
          <View style={{height:140,width:'50%',backgroundColor:'#006266',
           justifyContent: 'space-around',
           flexDirection:'column',
           alignItems: 'center',
           
           }}>
            <Icon.MaterialCommunityIcons
              name={'quality-high'}
              size={45}
              style={{ color:'#55efc4'}}
            />
            <Text style={{color:'#55efc4' ,fontFamily:'cairo',fontSize:18,
           borderBottomColor: '#55efc4',
           borderBottomWidth: 1,
           paddingBottom:15,
          width:'85%',
          textAlign:'center'
          }} >جودة الخامات عالية</Text>
          </View>
          <View style={{height:140,width:'50%',backgroundColor:'#006266',
           justifyContent: 'space-around',
           flexDirection:'column',
           alignItems: 'center',
           
           }}>
            <Icon.MaterialCommunityIcons
              name={'tshirt-crew'}
              size={45}
              style={{ color:'#55efc4'}}
            />
            <Text style={{color:'#55efc4' ,fontFamily:'cairo',fontSize:18,
           borderBottomColor: '#55efc4',
           borderBottomWidth: 1,
           paddingBottom:15,
          width:'85%',
          textAlign:'center'
          }} > المنتج كما صممته</Text>
          </View>
          <View style={{height:140,width:'50%',backgroundColor:'#006266',
           justifyContent: 'space-around',
           flexDirection:'column',
           alignItems: 'center',
           
           
           }}>
            <Icon.Entypo
              name={'creative-cloud'}
              size={45}
              style={{ color:'#55efc4'}}
            />
            <Text style={{color:'#55efc4' ,fontFamily:'cairo',fontSize:18,
           borderBottomColor: '#55efc4',
           borderBottomWidth: 1,
           paddingBottom:15,
          width:'85%',
          textAlign:'center'
          }} >اخرج الابداع الذى بداخلك</Text>
          </View>
          
        </View>
    )
  }
}