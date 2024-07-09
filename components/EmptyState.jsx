import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { images } from "../constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="text-white mt-2 font-psemibold text-xl text-center">
        {title}
      </Text>
      <Text className="text-gray-100  font-pmedium text-sm text-center">
        {subtitle}
      </Text>

      <CustomButton
        title="Create video"
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
