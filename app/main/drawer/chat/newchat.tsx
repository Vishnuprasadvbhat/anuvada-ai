import ChatPage from '@/components/ChatPage';
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image, View, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';


const newchat = () => {
  
  const bottom = 0;

  return (
    <View  style={{paddingBottom : bottom}}>
      <ChatPage />
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={70}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
        }}>
      </KeyboardAvoidingView>
    </View>
  )
}

export default newchat