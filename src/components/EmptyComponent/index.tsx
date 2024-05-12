import React, {ReactElement} from 'react';
import {View} from 'react-native';
import {EmptyComponentText} from './styles';

const EmptyListComponent = (): ReactElement => (
  <View>
    <EmptyComponentText>No items available</EmptyComponentText>
  </View>
);

export default EmptyListComponent;
