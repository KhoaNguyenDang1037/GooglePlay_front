import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    head: {
        height: 40,
        marginTop: 40,
        marginBottom: 20,
        paddingVertical: 30,
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#b7b7b7',
        borderRadius: 50,
        marginHorizontal: 20,
    },
    headText: {
        height: 30,
        width: '60%',
        fontSize: 18,
    },
    headIcon: {
        height: 25,
        width: '15%',
        resizeMode: 'contain',
    },
    headIcon1: {
        height: 35,
        width: '30%',
        resizeMode: 'contain',
    },
});

export default styles;