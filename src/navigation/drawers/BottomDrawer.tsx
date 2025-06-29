import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import AlphaText from "../../styleguide/CryptoText";
import { useTheme } from "react-native-paper";
import Icons from "../../icons/Icons";
import { AppTheme } from "../../types/ThemeTypes";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

const BottomDrawer = ({ bottomSheetRef }: {bottomSheetRef: React.RefObject<BottomSheetMethods | null>}) => {
  const theme: AppTheme = useTheme();
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={["100%"]}
        enablePanDownToClose={true}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            pressBehavior="close"
            disappearsOnIndex={-1}
            appearsOnIndex={0}
            style={{ backgroundColor: "transparent" }}
          />
        )}
        handleComponent={null}
      >
        <BottomSheetView style={styles.contentContainer}>
         
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 16,
              }}
            >
              <AlphaText
                type={"H3"}
                style={{ color: theme.colors.primary }}
              >
                More
              </AlphaText>
              <TouchableOpacity onPress={() => bottomSheetRef?.current?.close()}>
                <Icons name="CROSS" />
              </TouchableOpacity>
            </View>
          <View style={{ padding: 16 }}>
            <AlphaText
              type={"B1"}
              style={{ color: theme.colors.primary }}
            >
              Discover
            </AlphaText>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default BottomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "60%",
    zIndex: 1000,
    borderTopLeftRadius:24,
    borderTopRightRadius:24,
  },
  contentContainer: {
  },
  gradient: {
    height: 64,
    width: "100%",
    borderTopLeftRadius:24,
    borderTopRightRadius:24,
  },
});
