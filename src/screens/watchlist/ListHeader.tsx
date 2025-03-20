import React, {FC, useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Menu} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Text, View} from '../../components';
import size from '../../configs/size';
import {BaseColors} from '../../configs/theme';
import {scale} from '../../utils';

type FilterItem = {
  name: string;
  value: string;
};

interface DropdownMenuProps {
  value: FilterItem;
  onChange: (item: FilterItem) => void;
}

interface OrderProps {
  value: string;
  onChange: (order: string) => void;
}

const FILTER: FilterItem[] = [
  {name: 'Alphabetical order', value: 'original_title.asc'},
  {name: 'Rating', value: 'vote_average.desc'},
  {name: 'Release date', value: 'release_date.desc'},
];

const DropdownMenu: FC<DropdownMenuProps> = ({onChange, value}) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <Pressable onPress={openMenu}>
          <View
            row
            centerH
            gap={size.spacing.xxl}
            style={style.filterContainer}>
            <Text color={BaseColors.BEANSTALKS} bold>
              {value.name}
            </Text>
            <Icon name="down" size={16} color={BaseColors.BEANSTALKS} />
          </View>
        </Pressable>
      }>
      {FILTER.map(item => (
        <Menu.Item
          key={item.value}
          onPress={() => {
            onChange(item);
            closeMenu();
          }}
          title={item.name}
          titleStyle={{fontSize: scale(14)}}
        />
      ))}
    </Menu>
  );
};

const Order: FC<OrderProps> = ({onChange, value}) => {
  return (
    <Pressable onPress={() => onChange(value === 'asc' ? 'desc' : 'asc')}>
      <View row centerH gap={size.spacing.lg}>
        <Text color={BaseColors.BOULDER}>Order:</Text>
        <FontAwesome
          name={value === 'asc' ? 'long-arrow-down' : 'long-arrow-up'}
          size={16}
        />
      </View>
    </Pressable>
  );
};

const ListHeader: React.FC = () => {
  const [filter, setFilter] = useState<FilterItem>(FILTER[0]);
  const [order, setOrder] = useState('desc');
  return (
    <View mb={size.spacing.xl} gap={size.spacing.sm}>
      <Text subheading bold>
        My Watchlist
      </Text>
      <View row gap={size.spacing.sm} centerV>
        <Text color={BaseColors.BOULDER}>Filter by:</Text>
        <DropdownMenu onChange={setFilter} value={filter} />
        <Order onChange={setOrder} value={order} />
      </View>
    </View>
  );
};

export default React.memo(ListHeader);

const style = StyleSheet.create({
  filterContainer: {
    borderBottomWidth: 2,
    borderBottomColor: BaseColors.BEANSTALKS,
  },
});
