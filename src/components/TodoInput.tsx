import React, { useState } from 'react';
import { useMemo } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';
import { useTheme } from '../contexts/theme';
import { Theme } from '../contexts/Theme.interface';

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');

  const { theme } = useTheme()

  function handleAddNewTask() {
    addTask(task);
    setTask('');
  }

  const styles = useMemo(() => createStyles(theme), [theme])

  return (
    <View style={[styles.inputContainer, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
      <TextInput
        style={styles.input}
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        onChangeText={setTask}
        value={task}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    inputContainer: {
      backgroundColor: theme.color.bgInput,
      borderRadius: 5,
      marginTop: -25,
      marginHorizontal: 40,
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      backgroundColor: theme.color.bgInput,
      paddingLeft: 12,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    inputIOSShadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84
    },
    inputAndroidShadow: {
      elevation: 5
    },
    addButton: {
      backgroundColor: theme.color.onButton,
      height: 50,
      paddingHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
  });
}