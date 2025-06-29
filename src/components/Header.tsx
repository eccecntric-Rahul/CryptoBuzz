import { Image, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from 'react-native-paper';
import AlphaText from '../styleguide/CryptoText';
import { useThemeStore } from '../redux/useThemeStore';
import Toggle from '../styleguide/CryptoToggle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Sun , MoonStar } from 'lucide-react-native';
import { CustomTheme } from '../types/ThemeTypes';
const Header = () => {
  const theme:CustomTheme = useTheme();
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const { toggleTheme } = useThemeStore();

  const handleDarkToggle = () => {
    setIsEnabled(prev => !prev);
    toggleTheme();
  };
  return (
    <SafeAreaView edges={["top"]}>
      <View
        style={[
          styles.header,
          {
            borderBottomWidth: 2,
            borderBottomColor: theme.colors.border,
            shadowColor: theme.colors.border,
          },
        ]}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../images/CryptoBuzz.png')}
            style={[styles.logoImage,{borderColor:theme.colors.border ,borderWidth:1,marginRight:8}]}
          />
          <AlphaText type={'H2'}  style={{ color: theme.colors.primary}}>
            Crypto Buzz
          </AlphaText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Sun size={20} color={theme.colors.muted} style={{marginRight:8}} />
          <Toggle isEnabled={isEnabled} onChange={handleDarkToggle} />
          <MoonStar size={20} color={theme.colors.muted} style={{marginLeft:8}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    height: 70,
  },
  logoImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
