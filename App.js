import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View, TouchableOpacity, Button  } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container,{flexDirection:'colum'}]} >
      <View style={{flex:1, marginBottom:10 }}>
        <Image
          style = {styles.imgItem}
          source={require('./assets/book.png')}/>
        <Text style = {styles.titleText}>Nguyên hàm tích phân và ứng dụng</Text>
        <Text style = {styles.textContent}>Cung cấp bởi tiki</Text>
        <Text style = {[styles.textContent,{color:"red", fontSize:20}]}>141.800</Text>
        <Text style = {[styles.textContent,{color:"gray", fontSize:15, textDecorationLine:'line-through'}]}>141.800</Text>
        <View style={{flexDirection: "row",flexWrap: "wrap",}}>
          <TouchableOpacity style={styles.textContent} >    
            <Image
              source={require('./assets/btnadd.png')}
              style={styles.ImageIconStyle}
              />
            <View style={styles.SeparatorLine} />
          </TouchableOpacity>
          <Text style = {{marginTop:5, marginLeft:20, fontWeight:"bold", fontSize:20}}>1</Text>

          <TouchableOpacity style={{marginTop:10, marginLeft:20}} >    
            <Image
              source={require('./assets/btnminus.png')}
              style={styles.ImageIconStyle}
              />
            <View style={styles.SeparatorLine} />
          </TouchableOpacity>
          <Text style={{marginTop:10, marginLeft:50, fontWeight:"bold", fontSize:15, color:"blue"}}>Mua sau</Text>
        </View>
        <View style={styles.layoutRow}>
          <Text style={{marginTop:35, marginLeft:40, fontWeight:"bold"}}>Mã giảm giá đã lưu</Text>
          <Text style={{marginTop:35, marginLeft:20, fontWeight:"bold", color:"blue"}}>Xem tại đây</Text>
        </View>
        <View style={styles.layoutRow}>
          <View style={[{borderColor:"black"}, styles.layoutRow]}> 
            <View style={{borderWidth:1, marginLeft:40, marginTop:20, flexDirection: "row", flexWrap: "wrap",}}>
            <View style={{backgroundColor:"yellow", paddingLeft:50, paddingBottom:30, margin:20}}/>
              <Text style={{marginTop:20,marginRight:25, fontWeight:"bold", fontSize:20}}>Mã giảm giá</Text>
            </View>
          </View>
          <TouchableOpacity
              style={[styles.loginScreenButton,{backgroundColor:"#0A5EB7"}]}
              // onPress={() => navigate('HomeScreen')}
              underlayColor='#fff'>
              <Text style={styles.loginText}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
        <View backgroundColor="gray" style={{padding:10}}/>
        <View style={styles.layoutRow}>
          <Text style={{margin:15, fontWeight:"bold"}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
          <Text style={{margin:15, fontWeight:"bold", color:"#134FEC"}}>Nhập tại đây?</Text>
        </View>
        <View backgroundColor="gray" style={{padding:10, marginTop:10}}/>
        <View style={styles.layoutRow}>
            <Text style={{margin:15, fontWeight:"bold", fontSize:20}}>Tạm tính</Text>
            <Text style={{margin:15, marginLeft:150, fontWeight:"bold", fontSize:20, color:"red"}}>141.800 đ</Text>
        </View>
        <View backgroundColor="gray" style={{padding:80}}/>
        <View style={styles.layoutRow}>
            <Text style={{margin:15, fontWeight:"bold", fontSize:20, color:"#808080"}}>Thành tiền</Text>
            <Text style={{margin:15, marginLeft:150, fontWeight:"bold", fontSize:20, color:"red"}}>141.800 đ</Text>
        </View>
        <TouchableOpacity
              style={[styles.loginScreenButton, {backgroundColor:"red"}]}
              // onPress={() => navigate('HomeScreen')}
              underlayColor='#fff'>
              <Text style={[styles.loginText]}>TIẾN HÀNH ĐẶT HÀNG</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgItem:{
    width:120,
    height:150,
    position: 'absolute',
    top: 80,
    left: 40,
    marginRight:10
  },
  titleText :{
    fontWeight:"bold",
    marginLeft:180,
    marginTop:80
  },
  textContent:{
    marginTop:10, 
    marginLeft:180, 
    fontWeight:"bold"
  }, 
  layoutRow: {
    flexDirection: "row", 
    flexWrap:"wrap"
  },
  loginScreenButton:{
    marginRight:5,
    marginLeft:10,
    marginTop:15,
    marginBottom:30,
    // backgroundColor:'#0A5EB7',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText:{
      fontSize:15,
      color:'#fff',
      fontWeight:"bold",
      textAlign:'center',
      padding:30
  }
});
