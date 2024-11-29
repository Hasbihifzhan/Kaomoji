import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {Clipboard} from 'react-native';

const App = () => {
  //STATE
  const [dataKaomoji, setDataKaomoji] = useState([
    '(* ^ ω ^)',
    '(o^▽^o)',
    'ヽ(・∀・)ﾉ',
    '(* ^ ω ^)',
    '٩(◕‿◕｡)۶',
    '☆:.｡.o(≧▽≦)o.｡.:*☆',
    '(o^▽^o)',
    '(⌒▽⌒)☆',
    '<(￣︶￣)>',
    '。.:☆:･',
    '(⌒―⌒*)))',
    'ヽ(・∀・)ﾉ',
    '(´｡• ω •｡`)',
    '(￣ω￣)',
    '･(°ε° )',
    '(o･ω･o)',
    '(＠＾◡＾)',
    'ヽ(*・ω・)ﾉ',
    '	(o_ _)ﾉ彡☆',
    '(^人^)',
    '(*´▽*)',
    '｡ﾟ( ﾟ^∀^ﾟ)ﾟ｡',
    '(((o(°▽°)o)))',
    '(≧◡≦)',
    '(´• ω •`)',
    '(＾▽＾)',
    '(⌒ω⌒)',
    '∑d(°∀°d)',
    '╰(▔∀▔)╯',
    '(─‿‿─)',
    '(^‿^)',
    'ヽ(o^ ^o)ﾉ',
    '(✯◡✯)',
    '(◕‿◕)',
    '(≧ω≦)',
    '(☆▽☆)',
    '(⌒‿⌒)',
    '(°▽°)',
    '٩(｡•́‿•̀｡)۶',
    '(✧ω✧)',
    'ヽ(⌒▽⌒)ﾉ',
    '(´｡• ᵕ •｡)',
    '(￣▽￣)',
    '╰(*´︶*)╯',
    'o(≧▽≦)o',
    '(☆ω☆)',
    '(っ˘ω˘ς )',
    '(¯︶¯)',
    '٩(◕‿◕)۶',
    '(o˘◡˘o)',
    '(★ω★)/',
    '(^ヮ^)/',
    '(〃＾▽＾〃)',
    '(╯✧▽✧)╯',
    'o(>ω<)o',
    'o( ❛ᴗ❛ )o',
    '｡ﾟ(TヮT)ﾟ｡',
    '( ‾́ ◡ ‾́ )',
    '(ﾉ´ヮ`)',
    'ﾉ*: ･ﾟ',
    '(b ᵔ▽ᵔ)b',
    '(๑˃ᴗ˂)ﻭ',
    '(๑˘︶˘๑)',
    '( ˙꒳​˙ )',
    '(*꒦ິ꒳꒦ີ)',
    '(´･ᴗ･ ` )',
    '(ﾉ◕ヮ◕)',
    'ﾉ*:･ﾟ✧',
    '(„• ֊ •„)',
    '(.❛ ᴗ ❛.)',
    '(⁀ᗢ⁀)',
    '(￢‿￢ )',
    '(¬‿¬ )',
    '(*￣▽￣)b',
    '( ˙▿˙ )',
    '(¯▿¯)',
    '( ◕▿◕ )',
    '(„• ᴗ •„)',
    '(ᵔ◡ᵔ)',
    '(๑>◡<๑)',
    '( = ⩊ = )',
    '⸜(⸝⸝⸝´꒳`⸝⸝⸝)⸝',
    '⸜(ˊᗜˋ)⸝',
    '⸜( ˊᵕˋ )⸝',
    '(>⩊<)',
    '(ᗒ⩊ᗕ)',
    '(ᵔ⩊ᵔ)',
    '( ᵔ ⩊ ᵔ )',
    '(•⩊•)',
    '( • ⩊ • )',
  ]);

  // COPY KAOMOJI
  function copyKaomoji(item) {
    Clipboard.setString(item);
    ToastAndroid.show(item + ' Berhasil di Copy', ToastAndroid.SHORT);
  }

  return (
    <View style={{flex: 1, backgroundColor: '#21252b'}}>
      <StatusBar backgroundColor={'#282c34'} barStyle={'light-content'} />

      {/* HEADER */}

      <View
        style={{
          backgroundColor: '#282c34',
          paddingVertical: 12,
          paddingLeft: 10,
          flexDirection: 'row',
        }}>
        <View
          style={{
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="bars" size={25} color="#ffffff" />;
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 18,
              fontWeight: 'bold',
              elevation: 3,
            }}>
            Kaomoji
          </Text>
        </View>
      </View>

      {/* FLATLIST */}

      <FlatList
        style={{marginTop: 20}}
        data={dataKaomoji}
        renderItem={({item, index}) => (
          <View
            style={{
              marginHorizontal: 10,
              marginVertical: 5,
              backgroundColor: '#282c34',
              paddingVertical: 10,
              elevation: 3,
              borderRadius: 6,
              flexDirection: 'row',
            }}>
            <View style={{flex: 1, marginLeft: 20}}>
              <Text style={{color: '#ffffff'}}>{item}</Text>
            </View>
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => copyKaomoji(item)}>
              <Icon name="copy" size={25} color="#ffffff" />;
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
