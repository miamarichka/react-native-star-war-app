import {addToFavorites, resetFavorites} from '../../store/characters/slice';
import {fetchCharacters} from '../../store/characters/thunk';
import {ICharacter} from '../../store/characters/types';
import {RootState} from '../../store/rootReducer';
import {ConnectedProps, connect} from 'react-redux';

const mapStateToProps = (state: RootState) => ({
  characters: state.characters.characters,
  isLoading: state.characters.isLoading,
  nextPage: state.characters.nextPage,
  favorites: state.characters.favorites,
  genderCounts: state.characters.genderCounts,
  total: state.characters.total,
});

const mapDispatchToProps = {
  fetchCharacters,
  addToFavorites: (character: ICharacter) => addToFavorites(character),
  resetFavorites: () => resetFavorites(),
};

const Connector = connect(mapStateToProps, mapDispatchToProps);

export type THomeConnectedProps = ConnectedProps<typeof Connector>;
export default Connector;
