import React from 'react';
import {Image} from 'react-native';
import {Container, TextInput, MaskTextInput, Icon} from './styles';

const Input = ({
  placeholder,
  mask,
  value,
  type,
  options,
  onChangeText,
}: any) => {
  return (
    <Container>
      {mask ? (
        <MaskTextInput
          value={value}
          type={type}
          options={options}
          onChangeText={(text: any) => onChangeText(text)}
          placeholder={placeholder}
        />
      ) : (
        <>
          <TextInput
            value={value}
            onChangeText={(text: any) => onChangeText(text)}
            placeholder={placeholder}
          />
          <Icon>
            <Image
              source={require('../../assets/loupe.png')}
              style={{resizeMode: 'center', width: '50%'}}
            />
          </Icon>
        </>
      )}
    </Container>
  );
};

export default Input;
