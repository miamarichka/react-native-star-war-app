import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {THomeConnectedProps} from './reduxConnector';

export type TProps = {
  navigation: NativeStackNavigationProp<any, any>;
} & THomeConnectedProps;
