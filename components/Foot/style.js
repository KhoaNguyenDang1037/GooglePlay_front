import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    foot: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',  
    },
    footBg: {
        flex: 1,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#abbec0',
    },
    footIcon: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
    },
    footText: {
        fontSize: 14,
        paddingTop: 5,
        color: '#000000',
        fontWeight: 'bold',
    }

});

export default styles;