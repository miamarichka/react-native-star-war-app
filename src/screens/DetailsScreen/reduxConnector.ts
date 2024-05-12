import {fetchCharacterDetails} from '../../store/characters/thunk';
import {RootState} from '../../store/rootReducer';
import {ConnectedProps, connect} from 'react-redux';

const mapStateToProps = (state: RootState) => ({
  currentCharacter: state.characters.currentCharacter,
});

const mapDispatchToProps = {
  fetchCharacterDetails,
};

const Connector = connect(mapStateToProps, mapDispatchToProps);

export type TDetailsScreenConnectedProps = ConnectedProps<typeof Connector>;
export default Connector;
