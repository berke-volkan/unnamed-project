import Colors from '@/constants/Colors'
import { defaultStyles } from '@/constants/Styles'
import { useSignUp } from '@clerk/clerk-expo'
import { Link, useLocalSearchParams, useRouter } from 'expo-router'
import React, { Fragment, useEffect } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'

const CELL_COUNT = 6;

const EmailVerification = () => {
  const { isLoaded, signUp, setActive } = useSignUp()
  const { email } = useLocalSearchParams<{ email: string }>()
  const [code, setCode] = React.useState('')
  const router = useRouter()

  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  })



  useEffect(() => {
    if (code.length === CELL_COUNT) {
      handleVerification();
    }
  }, [code]);

  const handleVerification = async () => {
    if (!isLoaded || !signUp) return;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (signUpAttempt.status === 'complete') {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace('/');
      } else {
        console.error('Verification incomplete:', signUpAttempt);
        Alert.alert('Error', 'Verification incomplete');
      }
    } catch (err) {
      console.error('Error verifying:', err);
      Alert.alert('Error', 'Invalid verification code');
      setCode('');
    }
  };

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>6-digit code</Text>
      <Text style={defaultStyles.descriptionText}>
        Code sent to {email}
      </Text>
      
      <Link href="/login" asChild replace>
        <TouchableOpacity>
          <Text style={defaultStyles.textLink}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </Link>

      <CodeField
        ref={ref}
        {...props}
        value={code}
        onChangeText={setCode}
        cellCount={CELL_COUNT}
        rootStyle={Styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Fragment key={index}>
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[Styles.cellRoot, isFocused && Styles.focusCell]}>
              <Text style={Styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
            {index === 2 ? (
              <View key={`separator-${index}`} style={Styles.separator} />
            ) : null}
          </Fragment>
        )}
      />
    </View>
  );
};


const Styles = StyleSheet.create({
  codeFieldRoot: {
    marginVertical: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    gap: 12,
  },
  cellRoot: {
    width: 45,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
    borderRadius: 8,
  },
  cellText: {
    color: '#000',
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    paddingBottom: 8,
  },
  separator: {
    height: 2,
    width: 10,
    backgroundColor: Colors.gray,
    alignSelf: 'center',
  },
});



export default EmailVerification

