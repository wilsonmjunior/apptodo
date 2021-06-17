import React, { useState } from 'react';
import { View, ScrollView } from 'react-native'

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import { useTheme } from '../contexts/theme';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const { theme } = useTheme()

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle !== '') {
      const task = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      }
      setTasks((oldState) => [...oldState, task]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const taskMarkerWithDone = tasks.map((task) =>
      task.id === id ? ({ ...task, done: !task.done }) : task)
    setTasks(taskMarkerWithDone);
  }

  function handleRemoveTask(id: number) {
    const tasksFiltered = tasks.filter(task => task.id !== id);
    setTasks(tasksFiltered);
  }

  return (
    <>
      <Header />
      <View style={{
        flex: 1,
        backgroundColor: theme.color.background,
      }}>

        <TodoInput addTask={handleAddTask} />

        <MyTasksList
          tasks={tasks}
          onPress={handleMarkTaskAsDone}
          onLongPress={handleRemoveTask}
        />
      </View>
    </>
  )
}