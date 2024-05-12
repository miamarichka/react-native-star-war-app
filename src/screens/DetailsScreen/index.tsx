import React, {useEffect, useState} from 'react';
import {Text, FlatList} from 'react-native';
import Connector from './reduxConnector';
import {TProps} from './types';
import {ScreenContainer, ItemContainer} from './styles';
import EmptyListComponent from '../../components/EmptyComponent';
import Loader from '../../components/Loader';

const DetailsScreen = ({
  currentCharacter,
  fetchCharacterDetails,
  route,
}: TProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const {itemId} = route.params || {};
  useEffect(() => {
    const fetchData = async () => {
      if (itemId) await fetchCharacterDetails(itemId);
    };
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, [fetchCharacterDetails, itemId]);

  if (!currentCharacter || isLoading) {
    return <Loader />;
  }

  return (
    <ScreenContainer>
      <FlatList
        data={Object.entries(currentCharacter)}
        keyExtractor={item => item[0]}
        renderItem={({item}) => {
          const [key, value] = item;
          return (
            <ItemContainer>
              <Text>
                {key}: {value}
              </Text>
            </ItemContainer>
          );
        }}
        ListEmptyComponent={<EmptyListComponent />}
      />
    </ScreenContainer>
  );
};

export default Connector(DetailsScreen);
