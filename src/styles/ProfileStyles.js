import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
    paddingTop: 50, // To avoid overlap with status bar
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#121212',
  },
  userInfo: {
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 8,
  },
});

export default styles;
