import { Pressable, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
// import Button from '../molecule/Button'
import axios from 'react-native-axios';

import LoaderKit from 'react-native-loader-kit'

const List = () => {
  const [data, setData] = useState(null);
  const [error, SetError] = useState(null);
const [loader, setLoader] = useState(false);





  const getdata = () => {
    setLoader(true);
    // axios
    // .get("https://fakestoreapi.com/products",{data})
    // .then(res=>console.log(res))
    // .catch(error=>console.log(error))
  }

  const postdata = () => { 
    setLoader(true);
    axios
    .post("https://fakestoreapi.com/products",{data})
    .then(res=>setLoader(false))
    .catch(error=>console.log(error))
    }


  return (
    <View>
    <TouchableOpacity onPress={getdata}>
      <Text>
        api
      </Text>
    </TouchableOpacity>
    

<Text>List</Text>
      <Button title="post data" onPress={postdata}
       h={88}
       w={90}
       backcolor={'#913637'}
       border={50}
       margin={40}
       color={'yellow'}
       name={'submit'} />
      {loader && <LoaderKit
  style={{ width: 50, height: 50 }}
  name={'SemiCircleSpin'} // Optional: see list of animations below
  color={'green'} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
/> }
      
    </View>
  )
}

export default List

const styles = StyleSheet.create({})
