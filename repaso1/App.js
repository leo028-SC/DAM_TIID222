import { SafeAreaProvider } from 'react-native-safe-area-context';
import RegistroScreen from './screens/RegistroScreen';

export default function App() {
    return (
        <SafeAreaProvider>
            <RegistroScreen />
        </SafeAreaProvider>
    );
}
