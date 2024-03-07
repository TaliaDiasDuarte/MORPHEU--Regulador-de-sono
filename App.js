import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground} from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />
    
      <ImageBackground source={require('./assets/bkd-morpheu.png')}style={{width: '100%', height: '100%'}}>
        
      <Text style={styles.text}>Teste01</Text>

    </ImageBackground>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center',
    
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    
  },

  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent:'center',
    // Isso é uma gambiarra precisa ser centralizado usando provavelmente os containers
    marginTop:'85%',
    backgroundColor: '#000000c0',
  },
});


