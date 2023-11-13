import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import { api } from '../../../services/api';

export function ScreenSignInAdm(this: any) {

  const [usuarios, setUsuarios] = useState([]);

  const [nome, setNomeInput] = useState("")
  const [cpf, setCpfInput] = useState("")
  const [email, setEmailInput] = useState("")
  const [senha, setSenhaInput] = useState("")
  const [matricula, setMatriculaInput] = useState("")
  const [sobrenome, setSobrenomeInput] = useState("")
  const [disciplina, setDisciplinaInput] = useState("")
  const [turma, setTurmaInput] = useState("")
  const [usuarioTipo, setUsuarioTipoInput] = useState("")

  const navigation = useNavigation();
  
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get('http://localhost:8090/usuarios');
      setUsuarioTipo(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuario:', error);
    }
  };

/*
  function handleSignUp(){
    if(!nome || !email || !senha || !cpf || !sobrenome){
        alert("Preencha todos os campos!")
        return
    }
    // Enviando para a rota do back /users
    api.post("/usuarios", { nome, email, senha })
    .then(()=>{
        alert("Usuário cadastrado com sucesso!")
    })
    .catch(error =>{
        // Captura a mensagem de erro feita no backend - AppError
        if(error.response){
            alert(error.response.data.message)
        }else{
            // Se não existir mensagem personalizada do error
            alert("Não foi possível cadastrar!")
        }
    })

    //.then se der certo
    //.catch se der errado
}

*/

//------------
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      let novoUsuario = {
        cpf: cpf,
        nome: nome,
        email: email,
        senha: senha,
        matricula: matricula,
        sobrenome: sobrenome,
        disciplina: disciplina,
        turma: turma,
        usuarioTipo: usuarioTipo,
      }
      await axios.post('http://localhost:8090/usuarios', novoUsuario);
      fetchUsuarios();
      novoUsuario("");
      setNomeInput('')
      setCpfInput('')
      setEmailInput('')
      setSenhaInput('')
      setSobrenomeInput('')
      setTurmaInput('')
      setMatriculaInput('')
      setDisciplinaInput('')
      setUsuarioTipoInput('')
    } catch (error) {
      console.error('Erro ao criar usuario:', error);
    }
  };
  
//------------

/*
const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
  const {name, value } = event.target;
  setNovoUsuario((prevUsuario) => ({
    ...prevUsuario,
    [name]: value,
  }));
};
*/

  //-------------------------------------------//

  function ScreenClassBookingAdm() {
    navigation.navigate('ScreenClassBookingAdm')
  }


  function inputs() {
    throw new Error('Function not implemented.');
  }

  return (
      <ScrollView>
        <View style={styles.container}>

          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChange={(event) => setNomeInput(event.target.value)}

        />
          <TextInput
            style={styles.input}           
            placeholder="Sobrenome"
            onChange={(event) => setSobrenomeInput(event.target.value)}
          />
          <TextInput
            style={styles.input}
            placeholder="CPF"

            onChange={e => setCpfInput(e.target.value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChange={e => setEmailInput(e.target.value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            onChange={e => setSenhaInput(e.target.value)}
          />
        
          <TextInput
            style={styles.input}
            placeholder="Confirmar senha"
            secureTextEntry={true}

          />

          <TouchableOpacity
            style={styles.botao}
            onPress={() => {
              ScreenClassBookingAdm();
            }}
            onPressIn={() => {
              inputs();
            }}
          >
            <Text style={styles.botaoTexto} onClick={handleSubmit}>Enviar</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    marginTop: '7%',
    padding: '4%',
    width: 350,
    backgroundColor: '#ebebeb',
    color: '#7d7d7d',
    fontSize: 16,
    borderRadius: 10,
  },
  botao: {
    marginTop: 50,
    marginBottom: 90,
    width: 210,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00589F',
    borderRadius: 150,
  },
  botaoTexto: {
    fontSize: 15,
    color: '#ffff',
  },
});
function fetchUsuarios() {
  throw new Error('Function not implemented.');
}

function setUsuarioTipo(data: any) {
  throw new Error('Function not implemented.');
}

