import {StyleSheet, Text, View, Pressable,Linking} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'

const AboutScreen = () => {
  return (
    <View style={{paddingTop: 40, padding: 20}}>
      <Text style={styles.heading}>
        Welcome to <Text style={{color: 'red'}}>Toor Acadmey</Text> App{' '}
      </Text>
      <View style={{marginVertical: 20}}>
        <Text style={styles.decs}>
          Hi, This is my app (Tour Academy) which you can use to strengthen your
          mind and expand your knowledge. If you are a student or teacher who
          wants to learn in a short way in a smart learning environment then
          install this app and also subscribe to my YouTube channel and Facebook
          page.
        </Text>
      </View>
      <View style={styles.iconConatiner}>
        <Pressable onPress={()=>{Linking.openURL('https://www.youtube.com')}} >
            <Icon  name='logo-youtube' size={35} color='red'/>
        </Pressable>
        <Pressable onPress={()=>{Linking.openURL('https://www.facebook.com')}}>
          <Icon name="logo-facebook" size={35} color="#1877f2" />
        </Pressable>
      </View>
      <Text style={styles.decs}>
        My channel publishes videos that focus on the smart learning process. If
        you want skills and learning the smart way, you can join me! To know
        more about different knowledge schemes in life, subscribe my channel to
        stay informed.....always be happy 😊
      </Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  decs: {
    textAlign: 'center',
    color: 'black',
    lineHeight: 16,
  },
  iconConatiner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginVertical: 10,
  },
});


