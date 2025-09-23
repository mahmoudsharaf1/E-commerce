import React, {FC, memo, ReactNode, useState} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';

import {Text} from '@components';
import {styles} from './styles';
import {colors} from '@theme';

interface TabsProps {
  titles: string[];
  activeTab?: number;
  children: ReactNode[];
  testID?: string;
}

export const Tabs: FC<TabsProps> = memo(
  ({titles, activeTab = 0, children, testID}: any) => {
    const [activeIndex, setActiveIndex] = useState<number>(activeTab);

    const handleChangeTab = (i: number) => {
      setActiveIndex(i);
    };

    return (
      <View testID={`${testID}-container`} style={styles.parent}>
        <View testID={`${testID}-tabs`} style={styles.tabs}>
          {titles.map((title: string, index: number) => (
            <View
              testID={`${testID}-tab-container-${index}`}
              key={index}
              style={[
                styles.tabContainer,
                index === activeIndex && {
                  backgroundColor: colors.paletteV2.white,
                },
              ]}>
              <TouchableWithoutFeedback
                testID={`${testID}-tab-${index}`}
                key={index}
                onPress={() => handleChangeTab(index)}>
                <View
                  style={[
                    {
                      borderBottomStartRadius:
                        index - 1 === activeIndex ? 20 : 0,
                      borderBottomEndRadius: index + 1 === activeIndex ? 20 : 0,
                      rowGap: 8,
                      backgroundColor: colors.paletteV2.white,
                    },
                    styles.tab,
                    index === activeIndex
                      ? styles.tabActive
                      : styles.tabInactive,
                  ]}>
                  <Text
                    size={14}
                    style={{lineHeight: 30}}
                    color={
                      index === activeIndex
                        ? colors.paletteV2.black
                        : colors.paletteV2.gray
                    }>
                    {title}
                  </Text>
                  <View
                    style={{
                      width: '100%',
                      borderWidth: 1,
                      borderColor:
                        index === activeIndex
                          ? colors.paletteV2.primary
                          : colors.paletteV2.white,
                    }}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
          ))}
        </View>
        {children.map((Comp: ReactNode, index: number) => (
          <View
            testID={`${testID}-content-${index}`}
            key={index}
            style={[
              {
                flex: 1,
                borderTopEndRadius: 20,
              },
              index === activeIndex ? styles.activeView : styles.inActiveView,
            ]}>
            {Comp}
          </View>
        ))}
      </View>
    );
  },
);
