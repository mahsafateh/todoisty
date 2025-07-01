import { db } from './firebaseConfig';
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "@react-native-firebase/firestore";

// const addTodo = () => {
//     if (text.trim()) {
//       setTodos([...todos, { item: text.trim() }])
//       setText("")
//     }
//   }
  const todosCollection = collection(db, "todos")

  const fetchTodos = async () => {
    if (user) {
      const q = query(todosCollection, where("userId", "==", user.uid));
      const data = await getDocs(q);
      setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } else {
      console.log("No user logged in");
    }
  };

  const addTodo = async () => {
    if (user) {
      await addDoc(todosCollection, { task, completed: false, userId: user.uid });
      setTask('');
      fetchTodos();
    } else {
      console.log("No user logged in");
    }
  };

  const updateTodo = async (id: string, completed: any) => {
    const todoDoc = doc(db, 'todos', id);
    await updateDoc(todoDoc, { completed: !completed });
    fetchTodos();
  };

  const deleteTodo = async (id: string) => {
    const todoDoc = doc(db, 'todos', id);
    await deleteDoc(todoDoc);
    fetchTodos();
  };