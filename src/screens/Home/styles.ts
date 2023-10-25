import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A'
    },

    header:{
        paddingHorizontal:24,
        paddingTop: 75,
        backgroundColor: 'black',
    },

    title:{
        textAlign: "center",
        fontFamily: 'inter',
        color:'#4EA8DE',
        fontSize:20,
        fontWeight:'bold',
        lineHeight: 24.2
    },

    containerRegisterTec:{
        paddingHorizontal:24,
        paddingTop: 56,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        height: 75,
        backgroundColor: 'black'
    },

    blackBackground:{
        backgroundColor: 'black'
    },

    content:{
        paddingHorizontal:24
    },
    
    input:{
        flex:1,
        width:271,
        height:54,
        backgroundColor:'#262626',
        fontSize:14,
        color:'white',
        padding:16,
        borderRadius:6,
        borderWidth: 1,
        borderColor: '#0D0D0D'
    },

    status:{
        marginTop: 50,
        alignItems: "center",
        width: 348,
        height: 22,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },

    statusText:{
       display: "flex",
       flexDirection: "row"
    },

    created:{
        fontWeight: 'bold',
        color: '#4EA8DE'
    },

    concluded:{
        fontWeight: 'bold',
        color: '#8284FA'
    },

    counter:{
        backgroundColor: '#333333',
        color: 'white',
        width: 25,
        height: 19,
        marginLeft: 8,
        fontSize: 13,
        textAlign: "center",
        borderRadius: 10
    },

    notItems:{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 68,
    },

    textNotItem:{
        color: "#808080"
    },

   line:{
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#333333"
   },

   scorollList :{
    height: 450
   },

   containerListTechnologies:{
    alignItems: "center",
   }

   
})