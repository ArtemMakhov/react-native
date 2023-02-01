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
  locationText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: "#212121",
    textDecorationLine: 'underline',
  },
  iconsContainer: {
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 32,
    flexDirection: 'row',
  },
  markerIcon: {
    marginRight: 4,
    color: '#BDBDBD',
  },
  commentsIcon: {
    color: '#FF6C00',
  },
  likeIcon: {
    color: "#FF6C00",
    marginLeft: 24,
  },
  logoutIcon: {
    position: 'absolute',
    top: 22,
    right: 16,
    color: '#BDBDBD',
  }
});