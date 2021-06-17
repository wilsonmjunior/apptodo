import React, { useMemo } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useTheme } from '../contexts/theme';
import { Theme } from '../contexts/Theme.interface';

export function Header() {
  const { anotherTheme, theme, toogleTheme } = useTheme()

  const styles = useMemo(
    () => createStyles(theme),
    [theme]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
      <View style={styles.toogleTheme}>
        <TouchableOpacity onPress={toogleTheme}>
          <Text style={styles.toogleThemeText}>{anotherTheme}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.color.header,
    },
    toogleTheme: {
      position: 'absolute',
      right: 30,
      top: 54,
      backgroundColor: '#666',
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    toogleThemeText: {
      fontSize: 18,
      color: '#FFF',
      fontFamily: 'Poppins-Regular',
    },
    header: {
      paddingBottom: 44,
      backgroundColor: theme.color.header,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    headerText: {
      fontSize: 24,
      color: theme.color.headerText,
      fontFamily: 'Poppins-Regular',
    }
  });
}
