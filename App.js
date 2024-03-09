
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';




export default function App() {
  return (
    //Campo email
    <View style={estilos.container}>
       
      <Text style={estilos.texto}>
        E-mail
      </Text>
      <TextInput
        style={estilos.input} />

      <Text style={estilos.texto}>
        Senha
      </Text>
      <TextInput
        style={estilos.input}
        secureTextEntry={true} />


      <Text style={estilos.texto}>
        Como prefere ser chamado:
      </Text>
      <TextInput
        style={estilos.input} />


      <Text style={estilos.texto}>
        Informe sua idade:
      </Text>
      <TextInput
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
    gap: 8
  },
  //texto acima das caixas
  texto: {
    color: "#000",
    fontSize: 12,

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
  },
  button: {
    backgroundColor: "#110E26",
    paddingHorizontal: 80,
    paddingVertical: 16,
    borderRadius: 28,
    marginTop:12,
    
    
  },
  textobotao: {
    color:"white"
  }
});


