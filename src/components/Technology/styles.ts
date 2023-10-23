import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: '#262626',
        padding: 12,
        width: 327,
        height: 64,
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        borderWidth: 1,
        borderColor: '#333333'
    },

    technology:{
        fontFamily: 'inter',
        color: '#fff',
        fontSize: 14
    },

    technologyChecked:{
        fontFamily: 'inter',
        color: '#808080',
        fontSize: 14,
        textDecorationLine: 'line-through'
    },

    checkTechnology:{
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    }
})