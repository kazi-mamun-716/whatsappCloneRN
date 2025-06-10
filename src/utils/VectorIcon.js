import {View} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Octicons from '@expo/vector-icons/Octicons';
import Fontisto from '@expo/vector-icons/Fontisto';

const VectorIcon = props => {
  const {name, size, color, type, onPress, style} = props;
  return (
    <View style={style}>
      {type === 'MaterialCommunityIcons' ? (
        <MaterialCommunityIcons
          onPress={onPress}
          name={name}
          size={size}
          color={color}
        />
      ) : type === 'FontAwesome' ? (
        <FontAwesome onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'FontAwesome5' ? (
        <FontAwesome5 onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'FontAwesome6' ? (
        <FontAwesome6 onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'Feather' ? (
        <Feather onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'AntDesign' ? (
        <AntDesign onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'Entypo' ? (
        <Entypo onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'Ionicons' ? (
        <Ionicons onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'EvilIcons' ? (
        <EvilIcons onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'Octicons' ? (
        <Octicons onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'Fontisto' ? (
        <Fontisto onPress={onPress} name={name} size={size} color={color} />
      ) : (
        <MaterialIcons
          onPress={onPress}
          name={name}
          size={size}
          color={color}
        />
      )}
    </View>
  );
};

export default VectorIcon;
