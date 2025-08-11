import { createContext, useContext, PropsWithChildren } from 'react';

export type ThemeMode = 'light' | 'dark' | 'muted';

export interface ThemeProviderProps {
    mode?: ThemeMode;
}

const ThemeContext = createContext<ThemeMode>('light');

export const ThemeProvider = ({ mode = 'light', children }: PropsWithChildren<ThemeProviderProps>) => {
    const themeAttr = mode === 'dark' ? 'theme-dark' : mode === 'muted' ? 'theme-muted' : 'theme-light';
    return (
        <ThemeContext.Provider value={mode}>
            <div data-theme={themeAttr} className={mode === 'dark' ? 'rhp-theme-provider-dark' : undefined}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
