import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    justifyContent : 'center'
  },
  camera: {
    backgroundColor: '#F6F6F6',
    height: 240,
    borderRadius: 10,
    marginTop: 32,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  snapContainer: {
    borderRadius: 50,
    backgroundColor: '#FFFFFF30',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    position: 'absolute',
    height: 240,
    width: 360,
  },
  publicateBtn: {
    backgroundColor: "#FF6C00",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    borderRadius: 100,
    marginTop: 20,
  },
  publicateBtnText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: "#ffffff",
  },
  loadPhotoBtn: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: "#BDBDBD",
  },
  input: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    height: 50,
    color: "#BDBDBD",
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    marginHorizontal: 16,
    padding: 15,
    marginBottom: 16,
  },
  markerIcon: {
    position: 'absolute',
    bottom: 25,
    left: 20,
  },
  deleteContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#F6F6F6',
    marginHorizontal: 150,
    height: 40,
    borderRadius: 50,
    marginBottom: 10,
  }
});