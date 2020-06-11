import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, FlatList, TouchableOpacity } from 'react-native'
// import ListItem from './components/ListItem'
import { MyButton, MyInput, ListItem } from './components'

function App(props) {

  const [entry, setEntry] = useState(""),
    [list, setList] = useState([]),
    [isDone, setDone] = useState(false),
    // [doneColor, setdoneColor] = useState("container")

    changeText = (text) => {
      setEntry(text)
    }

  addToList = () => {
    let newList = [...list]
    newList.push({ myEntry: entry, isDone: false })
    setList(newList)
    setEntry("")
  }

  deleteItem = () => {

    
    setDone(!isDone)

    // (props.myData.isDone=true)
    // setDone(index)
    // setDone(
    //   list.filter(item => item.index == index  "yapıldı" )
    // if(isDone=="yapılmadı"){
    //   setDone("yapıldı")
    // }
    // else setDone("yapılmadı")

    console.log("pressed item +++")
    console.log(isDone)

  }

  useEffect(() => {
    console.log("MOUNT --- ");
    console.log(isDone)

  }, [])

  return (

    <SafeAreaView style={{ flex: 1 }}>


      <Text style={{ color: '#263238', fontSize: 30 }}>TO DO LIST APP</Text>

      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 3 }}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={list}
            renderItem={({ item, index }) =>
              <ListItem
                myData={item}
                 index ={index}
                itemPress={deleteItem}
              />
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







