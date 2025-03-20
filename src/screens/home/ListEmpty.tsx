import LottieView from "lottie-react-native";
import React from "react";
import { ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { View } from "../../components";
import size from "../../configs/size";
import { getLoadingSelector } from "../../store/reducers/movie/selectors";

const ListEmpty: React.FC = () => {
  const isLoading = useSelector(getLoadingSelector);

  return (
    <View pv={size.spacing.sm} width={size.screen.width} height={300} center>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <LottieView autoPlay source={require("../../assets/animations/no_result.json")} />
      )}
    </View>
  );
};

export default React.memo(ListEmpty);
