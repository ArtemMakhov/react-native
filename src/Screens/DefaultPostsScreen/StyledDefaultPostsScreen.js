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
    marginRight: 16,
    marginLeft: 4,
    textDecorationLine: 'underline',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  markerIcon: {
    color: "#BDBDBD",
  },
  commentsIcon: {
    color: "#BDBDBD",
    marginLeft: 16,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});