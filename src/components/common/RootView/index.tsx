import PropTypes from "prop-types";
import React, { useCallback, useMemo } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ErrorBoundary from "react-native-error-boundary";
import { ActivityIndicator, useTheme } from "react-native-paper";

interface RootViewProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  style?: object;
  loading?: boolean;
  safeEnable?: boolean;
  contentContainStyle?: object;
}

export const RootView: React.FC<RootViewProps> = ({
  children,
  backgroundColor,
  style,
  loading,
  safeEnable,
  contentContainStyle,
}) => {
  const { colors } = useTheme();
  const _styles = StyleSheet.flatten([
    {
      flex: 1,
      backgroundColor: backgroundColor ?? colors.background,
    },
    style,
  ]);

  const renderLoading = useMemo(() => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }, [children]);

  const handleError = useCallback((error: Error, stackTrace: string) => {
    // Slack.sendLog({
    //   level: LEVELs.CRASH,
    //   message: error.message,
    //   data: stackTrace.slice(0, 1500)
    // })
  }, []);

  return (
    <ErrorBoundary
      onError={handleError}
      // FallbackComponent={FallBackView}
    >
      <View style={_styles}>
        <View style={[{ flex: 1 }, contentContainStyle]}>
          {loading ? (
            renderLoading
          ) : (
            <>
              {safeEnable ? (
                <SafeAreaView style={{ backgroundColor: backgroundColor }}>{children}</SafeAreaView>
              ) : (
                children
              )}
            </>
          )}
        </View>
      </View>
    </ErrorBoundary>
  );
};

RootView.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentContainStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  safeEnable: PropTypes.bool,
  loading: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
