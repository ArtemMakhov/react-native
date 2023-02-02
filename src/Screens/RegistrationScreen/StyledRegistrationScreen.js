import { StyleSheet ,Dimensions} from 'react-native';

export const styles = StyleSheet.create({

  image: {
    flex: 1,
    height: Dimensions.get('window').height,
    resizeMode: "cover",
    justifyContent: 'flex-end',
  },
  formWrapper: {
    backgroundColor: '#fff',
    width: '100%',
    height: 549,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: 'relative',
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
  avatarImg: {
    height: 120,
    width: 120,
    borderRadius: 16,
  },
  addIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 14,
    right: -12.5,
    zIndex: 233
  },
  title: {
    fontFamily: 'Roboto-Medium',
    color: "#212121",
    marginTop: 92,
    marginBottom: 32,
    fontSize: 30,
    textAlign: "center",
  },
  input: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    height: 50,
    color: "#BDBDBD",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginHorizontal: 16,
    backgroundColor: "#F6F6F6",
    padding: 16,
    marginBottom: 16,
  },
  showPassBtn: {
    position: "absolute",
    right: 20,
    bottom: 22.5,
    padding: 10,
  },
  submitBtn: {
    backgroundColor: "#FF6C00",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    borderRadius: 100,
    marginTop: 27,
  },
  submitBtnText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: "#ffffff",
  },
  navBtn: {
    alignItems: 'center',
    matginTop: 16,
  },
  navBtnText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    marginTop: 16,
    color: "#1B4371",
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },

});