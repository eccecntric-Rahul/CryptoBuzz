import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "react-native-paper";
import AlphaText from "../styleguide/CryptoText";

const ProfileScreen = () => {
  const theme = useTheme();
  const [name,setName]=useState('');
  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("../images/DrawerBackground.png")}
        style={styles.backgroundImage}
      >
      </ImageBackground>
      <View style={{ position: "relative" }}>
        <View style={styles.profileContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../images/rahulPic.jpeg")}
              style={styles.profileImage}
            />
          </View>
          <AlphaText
            type="H1"
            style={{ color: theme.colors.primary, marginTop: 8 }}
          >
           Rahul Kumar
          </AlphaText>
        </View>
      </View>
      <View style={{padding:16,marginTop:hp("7%")}}>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    height: 70,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  backgroundImage: {
    width: "100%",
    height: hp("14%"),
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "white",
  },
  profileContainer: {
    paddingHorizontal: 16,
    alignItems: "center",
    position: "absolute",
    top: -hp("5%"),
    width: "100%",
  },
});
