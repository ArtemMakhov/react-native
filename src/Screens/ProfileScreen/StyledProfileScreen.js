import { StyleSheet,Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    height: Dimensions.get('window').height,
    resizeMode: "cover",
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  formWrapper: {
    backgroundColor: '#fff',
    width: '100%',
    height: 580,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 92,
  },
  avatar: {
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    top: -60,
    alignSelf: "center",
  },
  name: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 16,
  },
  photo: {
    width: 350,
    height: 200,
    marginTop: 10,
    borderRadius: 8,
  },
  titlePhoto: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: "#212121",
    marginHorizontal: 5,
    marginTop: 8,
    alignItems: 'center',
  },
  markerIcon: {
    position: 'absolute',
    top: 8,
    right: 20,
    color:'#BDBDBD',
  },
  commentsIcon: {
    position: 'absolute',
    top: 8,
    left: 8,
    color:'#FF6C00',
  },
  likeIcon: {
    position: 'absolute',
    top: 8,
    left: 64,
    color:"#FF6C00",
  },
  logoutIcon: {
    position: 'absolute',
    top: 22,
    right: 16,
    color:'#BDBDBD',
  }
});