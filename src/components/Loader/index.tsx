import React, {useEffect} from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSequence,
  withRepeat,
} from 'react-native-reanimated';
import {Container, DotStyled, DotsContainer, TextStyled} from './styles';

const Dot: React.FC = () => {
  const animatedStyles = useAnimatedStyle(
    () => ({
      opacity: withRepeat(
        withSequence(
          withTiming(0, {duration: 200}),
          withTiming(1, {duration: 400}),
          withTiming(1, {duration: 700}),
          withTiming(0, {duration: 900}),
        ),
        -1,
        true,
      ),
    }),
    [],
  );

  return <DotStyled style={[animatedStyles]}>.</DotStyled>;
};

const Loader: React.FC = () => {
  const dot = useSharedValue(0);

  useEffect(() => {
    dot.value = withTiming(1, {duration: 700});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <TextStyled>Loading</TextStyled>
      <DotsContainer>
        <Dot />
        <Dot />
        <Dot />
      </DotsContainer>
    </Container>
  );
};

export default Loader;
