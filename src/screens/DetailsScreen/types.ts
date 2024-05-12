import {RouteProp} from '@react-navigation/native';
import {TDetailsScreenConnectedProps} from './reduxConnector';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type TProps = {
  route: RouteProp<{params: {itemId: number}}, 'params'>;
  navigation: NativeStackNavigationProp<any, any>;
} & TDetailsScreenConnectedProps;
