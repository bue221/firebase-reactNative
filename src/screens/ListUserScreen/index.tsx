import React, { useEffect, useState} from 'react'
import {Button, ScrollView, Text} from 'react-native'
//firebase
import firebase from '../../../database/firebase'

import { ListItem, Avatar} from 'react-native-elements'

const ListUserScreen = ({ navigation }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        firebase.db.collection("users").onSnapshot((querySnapshot) => {
          const users = [];
          querySnapshot.docs.forEach((doc) => {
            const { name, email, phone } = doc.data();
            users.push({
              id: doc.id,
              name,
              email,
              phone,
            });
          });
          setUsers(users);
        });
      }, []);

    return (
        <ScrollView>
            <Button title='Create user' onPress={()=>navigation.navigate('Create-user')}/>
            {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              navigation.navigate("Detail-user", {
                userId: user.id,
              });
            }}
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri:
                  "https://reactnativeelements.com/img/avatar/avatar--edit.jpg",
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
        </ScrollView>
    )
}

export default ListUserScreen