import React, { useState } from 'react'
import { View, TextInput, Button, ActivityIndicator } from 'react-native'
//firebase
import firebase from '../../../database/firebase'
//styles
import styles from './style'

const CreateUserScreen = ({ navigation }: props) => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: ''
    })
    const [load, setLoad] = useState(false);

    const handleChange = (name: string, value: string) => {
        setState({ ...state, [name]: value })
    }

    const addNewUser = async () => {
        try {
            if (state.name != "" && state.email != "" && state.phone != "") {
                setLoad(true)
                await firebase.db.collection('users').add({
                    name: state.name,
                    email: state.email,
                    phone: state.phone
                })
                setLoad(false)
                navigation.navigate('List-user')
            }
        } catch (err) {
            setLoad(false);
            alert(err)
        }
    }
    return (
        <View >
            {load ? <ActivityIndicator size="large" /> : <View style={styles.container}>
                <TextInput placeholder='Name user' onChangeText={(value) => handleChange("name", value)} style={styles.input}/>
                <TextInput placeholder='Email user' onChangeText={(value) => handleChange("email", value)} style={styles.input}/>
                <TextInput placeholder='Phone user' onChangeText={(value) => handleChange("phone", value)} style={styles.input}/>
                <Button title='Crear usuario' onPress={addNewUser} /></View>}
        </View>
    )
}

export default CreateUserScreen
