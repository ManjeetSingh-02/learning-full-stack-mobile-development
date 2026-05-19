import { DynamicNativeStackNavigation } from '@/navigators/NativeStack/Dynamic';
import { DynamicStackNavigation } from '@/navigators/Stack/Dynamic';
import { StaticNativeStackNavigation } from '@/navigators/NativeStack/Static';
import { StaticStackNavigation } from '@/navigators/Stack/Static';

export default function App() {
  return (
    // STATIC NAVIGATION OPTIONS
    // <StaticStackNavigation />
    // <StaticNativeStackNavigation />

    // DYNAMIC NAVIGATION OPTIONS
    // <DynamicStackNavigation />
    <DynamicNativeStackNavigation />
  );
}
