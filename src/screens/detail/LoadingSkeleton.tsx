import { Skeleton } from "moti/skeleton";
import React from "react";
import { View } from "../../components";
import size from "../../configs/size";

const LoadingSkeleton: React.FC = () => {
  return (
    <View pd={size.spacing.lg} olh width={size.screen.width}>
      {/* <View pv={size.spacing.lg}>
        <Skeleton width={100} height={size.spacing.lg} colorMode="light" />
      </View>
      <View mb={size.spacing.sm}>
        <Skeleton width={"80%"} height={20} colorMode="light" />
      </View>
      <View mb={size.spacing.sm}>
        <Skeleton width={"100%"} height={20} colorMode="light" />
      </View>
      <View pv={size.spacing.lg}>
        <Skeleton width={100} height={size.spacing.lg} colorMode="light" />
      </View> */}
      <View row>
        <View mr={size.spacing.lg}>
          <Skeleton width={150} height={200} colorMode="light" />
        </View>
        <View mr={size.spacing.lg}>
          <Skeleton width={150} height={200} colorMode="light" />
        </View>
      </View>
    </View>
  );
};

export default React.memo(LoadingSkeleton);
