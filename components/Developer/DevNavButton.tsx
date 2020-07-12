import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation, useRoute} from '@react-navigation/native';

interface NavButtonProp {
  readonly active?: boolean;
}

const NavButton = styled.TouchableOpacity<NavButtonProp>`
  background-color: ${(props) => props.active ? 'lightgreen' : 'lightgrey'};
  padding: 15px;
  border-width: 1px;
  border-color: rgb(150,150,150);
  margin-horizontal: 10px;
  margin-bottom: 5px;
`;

const NavText = styled.Text`
  color: darkslategrey;
  font-weight: bold;
`;

interface DevNavButtonProps {
  to: string;
  text?: string;
  root?: string;
  active?: boolean;
}

const DevNavButton = (props: DevNavButtonProps) => {
  const {to, root, text, active} = props;
  const navigation = useNavigation();
  const navigateToTargetScreen = () => {
    if (!root) return navigation.navigate(text || to);
    return navigation.navigate(root, {screen: to || text});
  };
  return (
    <NavButton onPress={navigateToTargetScreen} active={active}>
      <NavText>
        {text || to}
      </NavText>
    </NavButton>
  );
};

export default DevNavButton;
