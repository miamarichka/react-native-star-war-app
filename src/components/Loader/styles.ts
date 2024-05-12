import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 10%;
  justify-content: center;
  align-items: center;
  background-color: black;
  opacity: 0.7;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const TextStyled = styled.Text`
  font-size: 44px;
  color: #b58df1;
`;

export const DotsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DotStyled = styled(Animated.Text)`
  font-size: 44px;
  color: #b58df1;
  margin-horizontal: 2px;
`;
