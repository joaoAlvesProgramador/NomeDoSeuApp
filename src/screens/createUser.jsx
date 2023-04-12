import { Button, Text, TextInput } from "react-native-paper";
import { View } from "react-native";
import { styles } from "../config/styles";
import { useState } from "react";
import {addDoc, collection} from 'firebase/firestore';
import { db } from "../config/firebase";

export default function createUser() {
  const [nome, setNome] = useState("");
  const [fone, setFone] = useState("");

  function cadastrarPessoa(){
    console.log(nome)
    console.log(fone)

    const docRef = addDoc(
        collection(db, "pessoas" ),
        {
            nomeDaPessoa:nome,
            foneDaPessoa:fone,
        }
    );

  }

  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Cadastrar pessoas</Text>

      <View style={styles.box}>

        <TextInput
          style={styles.input}
          label={"Digite seu nome🌹"}
          placeholder={"digita"}
          mode="outlined"
          //valor da variavel
          value={nome}
          //preciona uma tecla
          //aqui seta a variavel toda vez 
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          label={"Digite seu telefone📱"}
          placeholder={"digita"}
          mode="outlined"
          //valor da variavel
          value={fone}
          //preciona uma tecla
          //aqui seta a variavel toda vez 
          onChangeText={setFone}
        />

        <Button
         style={styles.btn} 
         onPress={cadastrarPessoa}
         >Cadastrar Pessoa</Button>

      </View>
    </View>
  );
}
