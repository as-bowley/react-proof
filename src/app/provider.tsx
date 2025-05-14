import type { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";

import { MainErrorFallback } from "@/components/errors/main";

type AppProviderProps = {
    children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <ErrorBoundary FallbackComponent={MainErrorFallback}>
            <HelmetProvider>{children}</HelmetProvider>
        </ErrorBoundary>
    );
};
