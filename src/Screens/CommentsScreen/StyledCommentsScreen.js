import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  input: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    borderColor: '#E8E8E8',
    border: 1,
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    height: 50,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    color: '#BDBDBD',
  },
  publicateBtn: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
      width: 34,
    height: 34,
    borderRadius: 100,
    marginTop: 20,
  },
  user: {
    marginLeft: 16,
    fontSize: 23,
  },
  commentsContainer: {
    backgroundColor: '#E5E5E5',
    marginRight: 16,
    marginLeft: 60,
    padding: 16,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  commentText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: "#212121",
    marginBottom: 8,
  },
  timeText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    color: '#BDBDBD',

  }
});