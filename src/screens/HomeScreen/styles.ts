import styled from 'styled-components/native';

export const ItemWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 20px;
  margin-horizontal: 10px;
`;

export const CharacterContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
`;

export const CharacterText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const ScreenContainer = styled.View`
  flex: 1;
`;

export const CounterWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;

export const CounterText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: purple;
  margin-horizontal: 5px;
`;

export const AddToFavoritesBtn = styled.TouchableOpacity`
  background-color: purple;
  opacity: 0.7;
  padding: 10px;
`;

export const AddToFavoritesText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const ResetBtn = styled.TouchableOpacity`
  margin-left: 10px;
  background-color: black;
`;

export const ResetText = styled.Text`
  color: white;
  padding: 5px;
`;
