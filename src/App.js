import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, FlatList, TouchableOpacity } from 'react-native'

// import ListItem from './components/ListItem'

import { MyButton, MyInput } from './components'
import ListItem from './components'



function App(props) {



  const [entry, setEntry] = useState(""),
    [list, setList] = useState([]),
    [isDone, setDone] = useState("yapılmadı"),
   // [doneColor, setdoneColor] = useState("container")



  changeText = (text) => {
    setEntry(text)
  }

  addToList = () => {
    let newList = [...list]
    newList.push({ myEntry: entry })
    setList(newList)
    setEntry("")
  }

  deleteItem = (index) => {
    // setDone(
    //   list.filter(item => item.index == index  "yapıldı" )
  
    if(isDone=="yapılmadı"){
      setDone("yapıldı")
    }
    else setDone("yapılmadı")

    console.log("pressed item AAAAAAA")


  }

  // useEffect(() => {
  //   console.log("MOUNT");
  // }, [])

  return (

    <SafeAreaView style={{ flex: 1 }}>


      <Text style={{ color: '#263238', fontSize: 30 }}>TO DO LIST APP</Text>

      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 3 }}>


          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={list}
            renderItem={({ item, index }) =>
              <TouchableOpacity
                style={[styles.container, { flex: 1, flexDirection: 'row' }]}
                onPress={deleteItem}
              >

                <View style={styles.dot} />

                <Text > {item.myEntry} </Text>

                <View>
                  <Text style={styles.text}>{isDone}</Text>
                </View>

                {/* <Text style={styles.text} >{props.list}</Text> */}

              </TouchableOpacity>
            }
          />

        </View>
        <MyInput myValue={entry} myPlace="Görev ekle..." textChange={changeText} />
        <MyButton myTitle="Ekle" myPress={addToList} />
      </View>
    </SafeAreaView>

  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b3e5fc',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  doneContainer: {
    backgroundColor: 'green',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  dot: {
    backgroundColor: 'red',
    width: 10,
    height: 10,
    borderRadius: 10
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    //textDecorationLine: 'line-through',
    alignItems: 'flex-end',
  }
})


export default App







