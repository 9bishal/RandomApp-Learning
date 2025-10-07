import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
export default function App() {
    const[isOn, setIsOn] = useState(false);
    const toggle =()=>{
        setIsOn(!isOn);
    }
    return (
        <View style={[
    styles.container, 
    { backgroundColor: isOn ? 'lightgreen' : 'lightcoral' }
]}>
    <Text style={styles.text}>
        The switch is: {isOn ? 'ON 🟢' : 'OFF 🔴'}
    </Text>
    <Button 
        title={isOn ? 'TURN OFF' : 'TURN ON'} 
        onPress={toggle}
        color={isOn ? 'red' : 'green'}
    />
</View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
});
