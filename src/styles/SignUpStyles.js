import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FEC260',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#fff',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#FEC260',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  loginText: {
    color: '#FEC260',
    marginTop: 15,
    fontSize: 14,
  },
});

export default styles;
