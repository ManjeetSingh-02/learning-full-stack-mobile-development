# EAS Build

## To login and check the current user
```
pnpm dlx eas-cli@latest login
pnpm dlx eas-cli@latest whoami
```

## To configure the build profiles
```
pnpm dlx eas-cli@latest build:configure
```

## To build the app for Android/iOS with different profiles
```
pnpm dlx eas-cli@latest build --profile development --platform android/ios
pnpm dlx eas-cli@latest build --profile preview --platform android/ios
pnpm dlx eas-cli@latest build --profile production --platform android/ios
```

## To list the builds
```
pnpm dlx eas-cli@latest build:list
```

## To install and configure EAS Update
```
pnpm expo add eas-updates
pnpm dlx eas-cli@latest update:configure
```