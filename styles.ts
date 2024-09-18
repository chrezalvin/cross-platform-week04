import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
    },
    containerBasic: {
        flex: 1,
        alignItems: 'center',
    },
    cardContainer: {
        flex: 1,
        alignItems: 'center',
        gap: 5,
    },
    bold:{
        fontWeight: 'bold',
    },
    bigger: {
        fontSize: 20
    },
    muted: {
        color: 'gray'
    },
    padding: {
        padding: 10
    },
    paddingBig: {
        padding: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    portrait: {
        width: 100,
        height: 100,
        borderRadius: 50,
    }
  });


export default styles;