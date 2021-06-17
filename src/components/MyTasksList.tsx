import React, { useMemo } from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';
import { useTheme } from '../contexts/theme';
import { Theme } from '../contexts/Theme.interface';

function FlatListHeaderComponent() {
  const { theme } = useTheme()

  const styles = useMemo(() => createStyles(theme), [theme])

  return (
    <View>
      <Text style={styles.header}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  const { theme } = useTheme()

  const styles = useMemo(() => createStyles(theme), [theme])

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={item.done ? styles.taskButtonDone : styles.taskButton}
          >
            <View
              testID={`marker-${index}`}
              style={item.done ? styles.taskMarkerDone : styles.taskMarker}
            />
            <Text
              style={item.done ? styles.taskTextDone : styles.taskText}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    header: {
      color: theme.color.primary,
      fontSize: 24,
      fontFamily: 'Poppins-SemiBold'
    },
    taskButton: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center'
    },
    taskMarker: {
      height: 16,
      width: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.color.primary,
      marginRight: 10
    },
    taskText: {
      color: theme.color.primary,
    },
    taskButtonDone: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      backgroundColor: theme.color.buttonDone,
      flexDirection: 'row',
      alignItems: 'center'
    },
    taskMarkerDone: {
      height: 16,
      width: 16,
      borderRadius: 8,
      backgroundColor: theme.color.primary,
      marginRight: 10
    },
    taskTextDone: {
      color: theme.color.textDone,
      textDecorationLine: 'line-through'
    }
  })
}