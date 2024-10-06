import { SplashScreen, Stack } from "expo-router";
import Imagotype from "../components/Imagotype";
import { useEffect } from "react";
import {
    useFonts,
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_600SemiBold,
    RobotoSlab_700Bold,
} from "@expo-google-fonts/roboto-slab";

function Layout() {
    const [loaded, error] = useFonts({
        robotoSlab_400: RobotoSlab_400Regular,
        robotoSlab_500: RobotoSlab_500Medium,
        robotoSlab_600: RobotoSlab_600SemiBold,
        robotoSlab_700: RobotoSlab_700Bold,
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <Stack
            screenOptions={{
                headerTitle: () => <Imagotype />,
                contentStyle: {
                    padding: "5%",
                },
            }}
        />
    );
}

export default Layout;
