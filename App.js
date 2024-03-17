
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import logoImage from './src/img/logo.png';
import {useFonts} from 'expo-font'


export default function App() {

const [fontsLoaded]=useFonts({'Inter-Medium':require('./assets/fonts/Inter-Medium.ttf')});
  
   
  return (
    //Campo email
    <View style={estilos.container}>

     <Image style={estilos.img} source={logoImage}/>
       
      
  

      


       <Text style={estilos.fraseinic}>GOSTARIAMOS TE CONHECER MELHOR</Text>
       
      <Text style={estilos.texto}>
       
      </Text>
      <TextInput
      placeholder="E-mail"
      placeholderTextColor="#666666"
        style={estilos.input}
         />


      {/* Campo senha */}
      <Text style={estilos.texto}>
  
      </Text>
      <TextInput
        style={estilos.input}
        placeholder="Senha"
        placeholderTextColor="#666666"
        secureTextEntry={true}
        />

{/* Campo nome */}
      <Text style={estilos.texto}>
        
      </Text>
      <TextInput
        placeholder="Nome"
        placeholderTextColor="#666666"
        style={estilos.input} />

{/*Data de nascimento*/}
      <Text style={estilos.texto}>
      
      </Text>
      <TextInput
        placeholder="Data de nascimento"
        placeholderTextColor="#666666"
        
        style={estilos.input}
        keyboardType="number-pad" />




     


      <TouchableOpacity style={estilos.button}>
        <Text style={estilos.textobotao} >
          CADASTRAR
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFAFF',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12
  },
  
  //texto que vai dentro da caixa
  input: {
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    width: "80%",
    backgroundColor:'#EBE8F8',
    borderRadius: 20,
    borderColor:'#ddd6f0',
    fontFamily:'Inter-Medium'
  },
  button: {
    backgroundColor: "#110E26",
    paddingHorizontal: 80,
    paddingVertical: 16,
    borderRadius: 28,
    marginTop:50,
  },
  textobotao: {
    color:"white",
    fontWeight: '500',
    fontFamily:'Inter-Medium',
     
  },
  fraseinic:{
    color: "#110E26",
    fontWeight: '500',
    fontFamily:'Inter-Medium', 
    
  },
  img:{
    width:"150",
    height:"400",
    padding:50,
    marginBottom:50,
  }
});


