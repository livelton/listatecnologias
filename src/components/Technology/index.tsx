import { Text, View } from "react-native";
import { styles } from "./styles";
import { ButtonIcon } from "../../components/Button";


interface PropsTechnology{
    technology: string;
    checked: boolean;
    onDelete: (technology: string, checked: boolean ) => void;
    onCheck: (technology: string, checked: boolean) => void;
}


export function Technology({technology, checked, onDelete, onCheck }:PropsTechnology){
    return(
        <View style={styles.container}>
            <View style={styles.checkTechnology}>
            <ButtonIcon content={ !checked ? 'radio-button-unchecked' : 'task-alt'} color={ !checked ? '#0063BF' : '#5E60CE'} onPress={() => onCheck(technology, checked )}/>
            <Text style={!checked ? styles.technology : styles.technologyChecked}>{technology}</Text>
            </View>
            <ButtonIcon content="delete" color='#808080' onPress={() => onDelete(technology, checked)}/>
        </View>
    )
}