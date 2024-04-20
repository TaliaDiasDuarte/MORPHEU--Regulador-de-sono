import { View, Text } from "react-native";

export default function Cadastro({ navigation }){
    function acessarCadastro(){
        navigation.navigate('cadastro');
        
    }
    return(
        <View>
            <Text>
                Estou no Cadastro
            </Text>
        </View>
    );
}