import {  StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  avatar: {
    height: 60,
    width: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    marginLeft: 16,
    marginTop: 32,
    marginRight: 8,
  },
  photo: {
    marginHorizontal: 10,
    height: 200,
    borderRadius: 8,
  },
  titlePhoto: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: "#212121",
    marginHorizontal: 16,
    marginTop: 8,
    alignItems: 'center',
  },
  locationText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    color: "#212121",
    marginHorizontal: 16,
    marginTop: 8,
  },
  markerIcon: {
    position: 'absolute',
    top: 8,
    right: 30,
  },
  commentsIcon: {
    position: 'absolute',
    top: 8,
    left: 20,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});