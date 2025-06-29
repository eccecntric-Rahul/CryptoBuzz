import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icons from "../../icons/Icons";
import AlphaText from "../../styleguide/CryptoText";
import { useTheme } from "react-native-paper";
import { AppTheme } from "../../types/ThemeTypes";

const TitleHeader = ({ title ,color}: { title?: string,color?:string }) => {
  const navigation = useNavigation();
  const theme: AppTheme = useTheme();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation?.goBack()}>
        <Icons name="LEFT-ANGLE-ARROW" color={color?color:theme.colors.text}/>
      </TouchableOpacity>
      <AlphaText type="B1" style={{ color:color?color: theme.colors.text,marginLeft:8}}>
        {title}
      </AlphaText>
    </View>
  );
};

export default TitleHeader;

const styles = StyleSheet.create({
  header: {
    height: 70,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
});
