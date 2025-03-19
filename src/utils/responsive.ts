import {Dimensions, PixelRatio} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {initialWindowSafeAreaInsets as initialWindowSafe} from 'react-native-safe-area-context';
const initialWindowSafeAreaInsets = initialWindowSafe || {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

// Guideline sizes are based on iPhone 15 Pro Max
export const guidelineBaseWidthPortrait = 430;
export const guidelineBaseWidthLandscape = 932;

//

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const widthPortrait = windowWidth < windowHeight ? windowWidth : windowHeight;

export function isPortrait() {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
}

export const scale = (sizePhone: number, sizeTablet?: number) => {
  const safeAreaWidthPadding =
    initialWindowSafeAreaInsets.left + initialWindowSafeAreaInsets.right;

  const usableWidth = widthPortrait - safeAreaWidthPadding;

  if (isTablet() && sizeTablet) {
    return Math.round(
      PixelRatio.roundToNearestPixel(
        (windowHeight / guidelineBaseWidthLandscape) *
          (sizeTablet || sizePhone),
      ),
    );
  }
  return Math.round(
    PixelRatio.roundToNearestPixel(
      (usableWidth / guidelineBaseWidthPortrait) * sizePhone,
    ),
  );
};
