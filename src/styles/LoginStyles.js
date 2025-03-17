import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1E1E1E' },
    title: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
    input: { width: '80%', backgroundColor: '#333', padding: 10, marginVertical: 10, borderRadius: 5, color: '#fff' },
    forgotText: { color: '#ccc', marginBottom: 20 },
    button: { backgroundColor: '#FDCB58', padding: 10, borderRadius: 5, width: '80%', alignItems: 'center' },
    buttonText: { color: '#000', fontWeight: 'bold' },
    signupText: { color: '#ccc', marginTop: 20 },
    link: { color: '#FDCB58', fontWeight: 'bold' }
});

export default styles;
