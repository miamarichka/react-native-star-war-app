import React, {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import {FlatList} from 'react-native';
import {TProps} from './types';
import {
  AddToFavoritesBtn,
  AddToFavoritesText,
  CharacterContainer,
  CharacterText,
  CounterText,
  CounterWrapper,
  ItemWrapper,
  ResetBtn,
  ResetText,
  ScreenContainer,
} from './styles';
import reduxConnector from './reduxConnector';
import Loader from '../../components/Loader';
import extractLastNumberFromUrl from '../../utils/extractIdFromUrl';
import EmptyListComponent from '../../components/EmptyComponent';
import {ICharacter} from '../../store/characters/types';

const HomeScreen = ({
  navigation,
  characters,
  fetchCharacters,
  isLoading,
  nextPage,
  addToFavorites,
  resetFavorites,
  favorites,
  genderCounts,
  total,
}: TProps): ReactElement => {
  const currentPage = characters.length ? Math.ceil(characters.length / 10) : 1;
  const nextPageIdentifierRef = useRef(currentPage);

  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchCharacters(nextPageIdentifierRef.current);
        if (nextPageIdentifierRef.current === 1) {
          await fetchCharacters(nextPageIdentifierRef.current + 1);
        }
      } catch {}
    };
    if (!characters.length) {
      loadData();
    }
  }, [fetchCharacters, characters.length]);

  const handleEndReached = useCallback(() => {
    if (!nextPage) return;
    nextPageIdentifierRef.current = currentPage + 1;
    fetchCharacters(nextPageIdentifierRef.current);
  }, [currentPage, fetchCharacters, nextPage]);

  const handleAddToFavorites = useMemo(
    () => (character: ICharacter) => {
      if (favorites.find(fav => fav.url === character.url)) return;
      addToFavorites(character);
    },
    [favorites, addToFavorites],
  );

  return (
    <ScreenContainer>
      <CounterWrapper>
        <CounterText>Male: {genderCounts.male}</CounterText>
        <CounterText>Female: {genderCounts.female}</CounterText>
        <CounterText>Other: {genderCounts['n/a']}</CounterText>
        <CounterText>Total: {total}</CounterText>
        <ResetBtn onPress={resetFavorites}>
          <ResetText>Reset Favorites</ResetText>
        </ResetBtn>
      </CounterWrapper>
      <FlatList
        data={characters}
        renderItem={({item}) => (
          <ItemWrapper>
            <CharacterContainer
              onPress={() =>
                navigation.navigate('Details', {
                  itemId: extractLastNumberFromUrl(item.url),
                })
              }>
              <CharacterText>{item.name}</CharacterText>
            </CharacterContainer>
            <AddToFavoritesBtn onPress={() => handleAddToFavorites(item)}>
              <AddToFavoritesText>Add to Favorites</AddToFavoritesText>
            </AddToFavoritesBtn>
          </ItemWrapper>
        )}
        initialNumToRender={20}
        keyExtractor={item => item.url}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={<EmptyListComponent />}
        showsVerticalScrollIndicator
      />
      {isLoading && <Loader />}
    </ScreenContainer>
  );
};

export default reduxConnector(HomeScreen);
