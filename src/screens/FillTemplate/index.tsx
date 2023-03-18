import React, {useState} from 'react';
import {useWindowDimensions, Animated, View} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Pressable, Box, useColorModeValue} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// project imports
import PersonalInputs from './components/PersonalInputs';
import EducationInputs from './components/EducationInputs';
import WorkExperienceInputs from './components/WorkExperienceInputs';
import SkillsInputs from './components/SkillsInputs';
import LanguageInputs from './components/LanguageInputs';
import {ScreenHeader} from '../../components/ScreenHeaders';
import styles from './styles';
import {APP_ROUTER} from '../../navigation/app-router';

const renderScene = SceneMap({
  first: () => <PersonalInputs />,
  second: () => <EducationInputs />,
  third: () => <WorkExperienceInputs />,
  fourth: () => <SkillsInputs />,
  fifth: () => <LanguageInputs />,
  // sixth: SixthRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Personal Informations'},
    {key: 'second', title: 'Education'},
    {key: 'third', title: 'Work Experience'},
    {key: 'fourth', title: 'Skills'},
    {key: 'fifth', title: 'Languages'},
    // {key: 'sixth', title: 'sixth'},
  ]);

  return (
    <View style={styles.container}>
      <ScreenHeader
        title={APP_ROUTER.SCREEN.fillTemplate.tabBarLabel}
        iconAs={MaterialIcons}
        iconName="search"
        onPress={() => {
          console.log('a');
        }}
        iconAs2={MaterialIcons}
        iconName2="more-vert"
      />
      <TabView
        renderTabBar={props => (
          <RenderTabBar {...props} setIndex={setIndex} index={index} />
        )}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
}

const RenderTabBar = (props: any) => {
  const inputRange = props.navigationState.routes.map((x, i: number) => i);
  return (
    <Box flexDirection="column">
      <Box flexDirection="row">
        {props.navigationState.routes.map((route: any, i: number) => {
          if (i > 2) return;
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });
          const color =
            props.index === i
              ? useColorModeValue('#000', '#e5e5e5')
              : useColorModeValue('#1f2937', '#a1a1aa');
          const borderColor =
            props.index === i
              ? 'cyan.500'
              : useColorModeValue('coolGray.200', 'gray.400');
          return (
            <Box
              key={i}
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3">
              <Pressable
                onPress={() => {
                  console.log(i);
                  props.setIndex(i);
                }}>
                <Animated.Text
                  style={{
                    color,
                  }}>
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
      <Box flexDirection="row">
        {props.navigationState.routes.map((route: any, i: number) => {
          if (i < 3) {
            return;
          }

          const color =
            props.index === i
              ? useColorModeValue('#000', '#e5e5e5')
              : useColorModeValue('#1f2937', '#a1a1aa');
          const borderColor =
            props.index === i
              ? 'cyan.500'
              : useColorModeValue('coolGray.200', 'gray.400');
          return (
            <Box
              key={i}
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3">
              <Pressable
                onPress={() => {
                  console.log(i);
                  props.setIndex(i);
                }}>
                <Animated.Text
                  style={{
                    color,
                  }}>
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
