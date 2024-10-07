import { SplashScreen, Stack } from "expo-router";
import { Imagotype } from "@ui";
import { useEffect } from "react";
import {
    useFonts,
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_600SemiBold,
    RobotoSlab_700Bold,
} from "@expo-google-fonts/roboto-slab";
import { designSystem } from "@constants";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
            <Stack
                screenOptions={{
                    headerTitle: () => <Imagotype />,
                    contentStyle: {
                        padding: "5%",
                        backgroundColor: designSystem.colors.white,
                    },
                }}
            />
        </QueryClientProvider>
    );
}

export default Layout;
