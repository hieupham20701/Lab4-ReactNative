import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View, TouchableOpacity  } from 'react-native';

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
  }
});
