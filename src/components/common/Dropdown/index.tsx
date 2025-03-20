import React, {useLayoutEffect, useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import size from '../../../configs/size';
import {BaseColors} from '../../../configs/theme';
import {useDidUpdate} from '../../../hooks';
import {scale} from '../../../utils';
import {Text} from '../Text';
import {View} from '../View';

interface DropdownItem {
  name: string;
  value: any;
}
interface DropdownProps {
  label: string;
  defaultValue?: any;
  data: DropdownItem[];
  onChange: (item: DropdownItem | null) => void;
}

export const Dropdown = ({
  label,
  data,
  defaultValue,
  onChange,
}: DropdownProps) => {
  const {colors} = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
  const onSelected = (item: DropdownItem) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  useDidUpdate(() => {
    onChange(selectedItem);
  }, [selectedItem]);

  useLayoutEffect(() => {
    const selected = data.find(item => item.value === defaultValue);
    if (selected) {
      setSelectedItem(selected);
    }
  }, []);

  return (
    <View br={size.radius.sm} style={styles.container}>
      <Pressable onPress={() => setIsOpen(!isOpen)}>
        <View
          centerH
          row
          pd={size.spacing.md}
          height={scale(50)}
          style={{
            borderBottomWidth: isOpen ? 1 : 0,
            borderColor: BaseColors.ALTO,
          }}>
          <Text flex1 bold size={16} deviceScale>
            {selectedItem ? selectedItem.name : label}
          </Text>
          <Icon
            name={isOpen ? 'keyboard-arrow-down' : 'keyboard-arrow-right'}
            size={26}
          />
        </View>
      </Pressable>
      {isOpen && (
        <View pd={size.spacing.lg}>
          {data.map((item, index) => {
            const isSelected = selectedItem?.value === item.value;
            return (
              <Pressable
                key={index}
                onPress={() => {
                  onSelected(item);
                }}>
                <View
                  row
                  centerH
                  color={isSelected ? colors.primary : BaseColors.GRAY}
                  mb={data.length - 1 === index ? 0 : size.spacing.lg}
                  pl={size.spacing.md}
                  height={scale(35)}
                  br={size.radius.sm}>
                  <Text
                    flex1
                    size={14}
                    deviceScale
                    color={isSelected ? BaseColors.WHITE : BaseColors.BLACK}>
                    {item.name}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: BaseColors.ALTO,
    backgroundColor: BaseColors.WHITE,
    shadowColor: BaseColors.ALTO,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.9,
    elevation: 5,
  },
});
