import { StyleSheet, Dimensions  } from "react-native";
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
    imagesContainer: {
        alignItems: "center",
        justifyContent:'center',
        width: 339,
        height: 250,
        zIndex:3,
        backgroundColor: 'black'
      },
      image: {
        width: '100%',
        height: '100%',
        zIndex:3
      },
})
export default styles;