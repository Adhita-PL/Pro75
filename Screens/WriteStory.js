import React from 'react';
import {Text, View, TextInput, TouchableOpacity, StyleSheet  } from 'react-native';
import { Header } from 'react-native-elements';

export default class Insta extends React.Component{
    render() {
        return(
            <View style = {{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Header
                    backgroundColor={'#E11584'}
                    centerComponent={{
                        text: 'Story Hub',
                        style: { color: '#fff', fontSize: 18 },
                    }}
                />
                <TextInput style={styles.inputBox} placeholder={'Story Title'} />
                <TextInput style={styles.inputBox}  placeholder={'Author'} />
                <TextInput style={styles.inputBox2}  placeholder={'Write your story here'} multiline={true}/>
                <TouchableOpacity style = {styles.submitButton} >
                    <Text style = {styles.text}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    inputBox: {
        marginTop: 30,
        marginLeft:30,
        marginRight:30,
        width: 330,
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
    },
    inputBox2: {
        marginTop: 30,
        marginLeft:30,
        marginRight:30,
        width: 330,
        alignSelf: 'center',
        height: 200,
        textAlign: 'center',
        borderWidth: 4,
    },
    submitButton: {
        justifyContent:'center',
        borderWidth:4,
        backgroundColor:'#E11584',
        marginTop:10,
        marginLeft:650,
        width:100,
        height:45,
    },
    text: {
        color:'blue',
        fontSize:20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})