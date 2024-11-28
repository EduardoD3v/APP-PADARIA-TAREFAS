import React, { useState } from "react";

import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from "react-native";

import {style} from "./styles";

import Logo from '../../assets/1.png';
import { themas } from "../../global/themes";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Input } from "../../components/Input";



export default function Login (){
   
    const navigation = useNavigation<NavigationProp<any>>();

    const [email,setEmail]               = useState('caio@gmail.com');
    const [password,setPassword]         = useState('12345');
    const [showPassword,setShowPassword] = useState(true);
    const [loading,setLoading]           = useState(false);
     
    
    async function getLogin() {
        try {
            setLoading(true)
            
            if(!email ||!password){
                return Alert.alert('Anteção','Informe os campos obrigatórios!')
            }

            if(email === 'caio@gmail.com' && password === '12345'){
                return navigation.reset({routes:[{name :'BottomRoutes'}]});
            }

            Alert.alert('Atenção','E-mail ou senha invalida!')
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    
    
        return(
            <View style={style.container}>
                <View style={style.boxTop}>
                    <Image 
                        source={Logo} 
                        style={style.logo}
                        resizeMode="contain"
                    />
                    <Text style={style.text}>Bem vindo de volta!</Text>
                </View>
                <View style={style.boxMid}>
                    <Input 
                        title="LOGIN"
                        value={Login}
                        onChangeText={setEmail}
                        IconRigth={MaterialIcons}
                        iconRightName="email"
                        onIconRigthPress={()=>console.log('OLA')}
                    />
                    <Input 
                        title="SENHA"
                        value={password}
                        onChangeText={setPassword}
                        IconRigth={Octicons}
                        iconRightName={showPassword?"eye-closed":"eye"}
                        onIconRigthPress={()=>setShowPassword(!showPassword)}
                        secureTextEntry={true}
                        multiline={false}
                    />
                </View>
                <View style={style.boxBottom}>
                    <Button  text="ENTRAR" loading={loading} onPress={()=>getLogin()}/>
                </View>
                <Text style={style.textBottom}>Não tem conta? <Text  style={style.textBottomCreate}>Crie agora</Text></Text>
            </View>
        )
    }
}
