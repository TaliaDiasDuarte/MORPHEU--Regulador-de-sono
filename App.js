import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Input ,Alert} from 'react-native';
import logoImage from './src/img/logo.png';
import { useFonts } from 'expo-font'




export default function App() {
  //importador de fonte
  const [] = useFonts({ 'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf') });



//recebendo as variaveis email
  const [email, setEmail] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)

//recebendo variaveis senha
  const [senha, setSenha] = useState(null)
  const [errorSenha, setErrorSenha] = useState(null)



  const validar = () => {
    let error = false
    setErrorEmail(null)

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(email).toLowerCase())) {
      setErrorEmail("Preencha seu e-mail corretamente");
      console.log("Preencha seu e-mail corretamente");
       
      error = true
    }
    
    

    if(senha === null){
      setErrorSenha("Preencha sua senha")
      error = true
      
      console.log("Preencha seu senha");

    }
    return !error

  }

  const salvar = () => {
    if (validar()) {
      console.log("Salvou email");
    }


  }


  
  return (
    //Campo email
    <View style={estilos.container}>
      {/* logo imagem */}
      <Image style={estilos.img} source={logoImage} />


      <Text style={estilos.fraseinic}>GOSTARIAMOS TE CONHECER MELHOR</Text>

      <Text style={estilos.texto}>

      </Text>

     
      <TextInput
        placeholder="E-mail"
        placeholderTextColor="#666666"
        style={estilos.input}

        onChangeText={value => {
          setEmail(value)
          setErrorEmail(null)
          
        }}
        errorMessage={errorEmail} 
        
      />

   <Text style={estilos.errorMessage}>{errorEmail} </Text> 
       
      
      
      




      {/* Campo senha */}
      <Text style={estilos.texto}>

      </Text>
      <TextInput
        style={estilos.input}
        placeholder="Senha"
        placeholderTextColor="#666666"
        secureTextEntry={true}

        onChangeText={value => {setSenha(value);
          setErrorSenha(null);
          
      }}/>
      
      <Text style={estilos.errorMessage}>{errorSenha} </Text>


      {/* Campo nome */}
      <Text style={estilos.texto}>
      </Text>
      <TextInput
        placeholder="Nome"
        placeholderTextColor="#666666"
        style={estilos.input}
      />



      {/*Data de nascimento*/}
      <Text style={estilos.texto}>

      </Text>
      <TextInput
        placeholder="Data de nascimento"
        placeholderTextColor="#666666"

        style={estilos.input}
        keyboardType="number-pad"
        />





      {/* style={estilos.button} */}
      <TouchableOpacity style={estilos.button}

        onPress={() => salvar()}>



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
    gap:4
  },

  //texto que vai dentro da caixa
  input: {
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    width: "80%",
    backgroundColor: '#EBE8F8',
    borderRadius: 20,
    borderColor: '#ddd6f0',
    fontFamily: 'Inter-Medium'
  },
  button: {
    backgroundColor: "#110E26",
    paddingHorizontal: 80,
    paddingVertical: 16,
    borderRadius: 28,
    marginTop: 50,
  },
  textobotao: {
    color: "white",
    fontWeight: '500',
    fontFamily: 'Inter-Medium',

  },
  fraseinic: {
    color: "#110E26",
    fontWeight: '500',
    fontFamily: 'Inter-Medium',

  },
  img: {
    width: "150",
    height: "400",
    padding: 50,
    marginBottom: 50,
  },
  errorMessage:{
    color: "#524e81",
    fontSize: 12,
    backgroundColor: '#FCFAFF',
    fontFamily: 'Inter-Medium',
  }
});


