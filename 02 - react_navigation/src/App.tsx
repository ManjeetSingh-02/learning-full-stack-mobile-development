import { DynamicNativeStackNavigation } from '@/navigators/NativeStack/Dynamic';
import { DynamicStackNavigation } from '@/navigators/Stack/Dynamic';
import { StaticNativeStackNavigation } from '@/navigators/NativeStack/Static';
import { StaticStackNavigation } from '@/navigators/Stack/Static';
import { StaticBottomTabs } from './navigators/BottomTabs/Static';
import { DynamicBottomTabs } from './navigators/BottomTabs/Dynamic';
import { DynamicBottomTabsWithStack } from './navigators/BottomTabWithStack';
import DynamicMaterialTopTabs from './navigators/MaterialTopTabs';
import DynamicDrawer from './navigators/Drawer';

export default function App() {
  return (
    // STATIC NAVIGATION OPTIONS
    // <StaticStackNavigation />
    // <StaticNativeStackNavigation />

    // DYNAMIC NAVIGATION OPTIONS
    // <DynamicStackNavigation />
    // <DynamicNativeStackNavigation />

    // BOTTOM TABS NAVIGATION OPTIONS
    // <StaticBottomTabs />
    // <DynamicBottomTabs />

    // BOTTOM TABS WITH STACK NAVIGATION OPTIONS
    // <DynamicBottomTabsWithStack />

    // MATERIAL TOP TABS NAVIGATION OPTIONS
    // <DynamicMaterialTopTabs />

    // DRAWER NAVIGATION OPTIONS
    <DynamicDrawer />
  );
}
