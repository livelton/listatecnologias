
import { Text, View, TextInput, Alert } from "react-native";
import { styles } from "./styles";
import { ButtonIcon } from "../../components/Button";
import { Technology } from "../../components/Technology";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useState } from "react";


export function Home(){
    const [technology, setTechnology] = useState('');
    const [technologies, setTechnologies] = useState([] as string []);
    const [doneTecnologies, setDoneTecnologies] = useState([] as string []);

    function addTechnology(){
        if(technology === ''){
            Alert.alert('Por favor, digite uma tecnologia')
        }else{
            setTechnologies([...technologies, technology])
        }
        setTechnology('');
    }

    function removeTechnology(technologyToRemove : string, checked: boolean){
        Alert.alert('Remover', `Deseja realmente remover ${technologyToRemove}?`,[
            {
              text:'não'
              
            },{
              text:'sim',
              onPress:()=>{
                if(checked){
                    setDoneTecnologies(doneTecnologies.filter(tech => tech !== technologyToRemove))
                }else{
                    setTechnologies(technologies.filter(tech => tech !== technologyToRemove));
                }
              }
            } 
          ])

    }

    function checkTechnology(technologyToCheck : string){
        setTechnologies(technologies.filter(tech => tech !== technologyToCheck))
        setDoneTecnologies([...doneTecnologies, technologyToCheck])
    }

    function uncheckTechnology(technologyToUnheck : string){
        setDoneTecnologies(doneTecnologies.filter(tech => tech !== technologyToUnheck))
        setTechnologies([...technologies, technologyToUnheck])
    }

    return(
            <View style={styles.container}>

            <View style={styles.header}>
            <Text style={styles.title}> Minhas Tecnologias </Text>
            </View>

            <View style={styles.containerRegisterTec}>
                <TextInput style={styles.input}
                    placeholder='Adicione uma nova tecnologias'
                    placeholderTextColor={'#808080'}
                    onChangeText={text => setTechnology(text)}
                    value={technology}
                />
                <ButtonIcon
                    content="add-circle"
                    onPress={addTechnology}
                    color="#fff"
                    type="add"
                />  
                
            </View>

            <View style={styles.content}>
            <View style={styles.status}>
                <View style={styles.statusText}>
                    <Text style={styles.created}>Criadas</Text>
                    <Text style={styles.counter}> {technologies.length} </Text>
                </View>
                <View style={styles.statusText}>
                    <Text style={styles.concluded}>Concluidas</Text>
                    <Text style={styles.counter}> {doneTecnologies.length} </Text>
                </View>
            </View>

            
            <View style={styles.containerListTechnologies}>
            {
                technologies.length === 0 && doneTecnologies.length === 0 ? (
                    <View style={styles.line}>
                    <View style={styles.notItems}>
                    <MaterialIcons name="note-add" size={56} color="#808080" style={{marginBottom: 16}} />
                    <Text style={[styles.textNotItem, {fontWeight: 'bold'}]}>
                        Você ainda não tem tecnologias cadastradas
                    </Text>
                    <Text style={styles.textNotItem}>
                        Crie tarefas e organize seus itens a fazer
                    </Text>
                    </View>
                    </View>
                  ) : (
                        technologies.map(item =>(
                            <Technology key={item} technology={item} checked={false} onDelete={removeTechnology} onCheck={checkTechnology}/>
                          ))
                  
                  )
            }

            {
                doneTecnologies.map(item => (
                    <Technology key={item} technology={item} checked={true} onDelete={removeTechnology} onCheck={uncheckTechnology}  />
                ))
            }
           
            </View>
            </View>


            </View>
        
    )
}

