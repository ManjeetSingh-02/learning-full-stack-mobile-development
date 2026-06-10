// constants to determine the app variant based on the environment variable
const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

// function to get the unique identifier for the app based on the environment variable
function getUniqueIdentifier() {
  if (IS_DEV) return 'com.manjeetsingh02.eas.dev';
  if (IS_PREVIEW) return 'com.manjeetsingh02.eas.preview';
  return 'com.manjeetsingh02.eas';
}

// function to get the app name based on the environment variable
function getAppName() {
  if (IS_DEV) return 'EAS Dev';
  if (IS_PREVIEW) return 'EAS Preview';
  return 'EAS';
}

// exporting the app configuration for Expo
export default {
  expo: {
    name: getAppName(),
    slug: 'eas',
    version: '1.0.0',
    orientation: 'portrait',
    scheme: 'eas',
    userInterfaceStyle: 'automatic',
    android: {
      predictiveBackGestureEnabled: false,
      package: getUniqueIdentifier(),
    },
    plugins: ['expo-router'],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    extra: {
      router: {},
      eas: {
        projectId: '37db7d61-0529-4c66-bb95-a0776b2331f8',
      },
    },
  },
};
