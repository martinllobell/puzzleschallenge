import { StyleSheet, Dimensions  } from "react-native";
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
    screen:{
        height: windowHeight,
        width: windowWidth,
        alignItems: "center",
        justifyContent:'center',

    },
    //////////CARRUSEL & SLIDES//////////////
    contCarousel:{
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:220,
        height: '60%',
        width: windowWidth,
    },

    flatList:{
        position: 'absolute',
        top: '0%',
        width: 350,
        height: 350,
        zIndex:3

    },
    imagesContainer: {
        alignItems: "center",
        justifyContent:'center',
        width: 351,
        height: 350,
        zIndex:3,
      },
      contFirstImgs:{       
        width: '100%',
        flexDirection:'row',
        justifyContent:"space-between",
        height: '50%',
        zIndex:3
      },
      imageLeft: {
        width: '50%',
        height: '100%',
        borderTopLeftRadius:15,
        zIndex:3
      },
      imageRight: {
        width: '50%',
        height: '100%',
        borderTopRightRadius:15,
        zIndex:3
      },
      imageBottom:{
        width: '100%',
        height: '50%',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        zIndex:3
      },
      textLeft:{
        position:'absolute',
        zIndex:4,
        left:0,
        fontSize:15,
        color:'white',
        width:'50%',
        textAlign:"center",
        borderTopLeftRadius: 15,
        backgroundColor:'rgba(0, 0, 0, 0.3)'
      },
      textRight:{
        position:'absolute',
        zIndex:4,
        right:0,
        fontSize:15,
        color:'white',
        width:'50%',
        textAlign:"center",
        borderTopRightRadius: 15,
        backgroundColor:'rgba(0, 0, 0, 0.3)'

      },
      textBottom:{
        position:'absolute',
        bottom:0,
        zIndex:3,
        fontSize:25,
        color:'white',
        backgroundColor:'rgba(0, 0, 0, 0.3)',
        width:'100%',
        textAlign:'center',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
      },
      //////////////////////////
      background:{
          width:windowWidth,
          height:windowHeight,
          zIndex:1,
      },
      text:{
        fontSize:40,
        textAlign:'center',
        width: windowWidth,
        fontWeight:'100',
        color:'whitesmoke',
        position:'absolute',
        top:-110,
        zIndex: 2
      },
      //////////ARROWS//////////////////
      controls: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        position: 'absolute',
        zIndex: 2,
        width: '100%',
        bottom:20
      },      
      arrowPrev: {
          width: 40,
          height: 50,
          transform: [
            {rotate: '90deg'}
        ]
      },
      arrowNext: {
        width: 40,
        height: 50,
        transform: [
            {rotate: '270deg'}
        ]
      },
      arrowPrevNone:{
          opacity:.3,
          width: 40,
          height: 50,
          transform: [
            {rotate: '90deg'}
        ]
      },
      arrowNextNone:{
        opacity:.3,
        width: 40,
        height: 50,
        transform: [
            {rotate: '270deg'}
        ]

      }
  });

export default styles