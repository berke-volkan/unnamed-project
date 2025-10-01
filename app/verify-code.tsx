import Colors from '@/constants/Colors'
import { defaultStyles } from '@/constants/Styles'
import { firebaseConfig } from '@/firebaseConfig'
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

import React, { Fragment, useEffect } from 'react'

import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native'

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'
import { useRouter } from 'expo-router'

const CELL_COUNT = 6;

const EmailVerification = () => {
  const app = initializeApp(firebaseConfig)
  const db=getDatabase(app)
  const router = useRouter()

  const [code, setCode] = React.useState('')

  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  })
  
  useEffect(() => {
    if (code.length === CELL_COUNT) {
      handleVerification()
    }
  }, [code])

  const handleVerification = async () => {
    if(code.toLowerCase()==="111111"){
        router.push("/signup")
    }
  };

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>6-digit code</Text>
      <Text style={defaultStyles.descriptionText}>
        Hey! As our platform is only available for verified high schoolers we require a verification.You can get a verification code from your school!
      </Text>
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
    width: 35,
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

