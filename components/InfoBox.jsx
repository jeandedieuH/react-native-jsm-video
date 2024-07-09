import { View, Text } from "react-native";
import React from "react";

const InfoBox = ({ title, containerStyle, titleStyles, subtitle }) => {
  return (
    <View className={containerStyle}>
      <Text className={`text-white font-psemibold ${titleStyles}`}>
        {title}
      </Text>
      <Text className="text-gray-100 font-pregular text-sm text-center">
        {subtitle}
      </Text>
    </View>
  );
};

export default InfoBox;
