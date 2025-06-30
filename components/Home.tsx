import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { Item } from '../types/todo';
import PrimaryButton from './Button';
import TodoItem from './TodoItem';

export default function HomePage() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Item[]>([])

  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, { item: text.trim() }])
      setText("")
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-white items-center justify-center w-full">

        <Text className="font-mono text-lg font-semibold mb-4 text-center pt-6">
          Make your day productive with Todo List
        </Text>

        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="What's in your mind?"
          className="font-mono w-[400] border border-gray-400 rounded-md p-3 m-5"
        />

        <PrimaryButton onPress={addTodo} title='Add'/>

        <View className="flex-1 w-full p-5">
          <FlatList
            data={todos}
            renderItem={({ item, index }) => (
              <TodoItem todoItem={item.item} index={index} />
            )}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}