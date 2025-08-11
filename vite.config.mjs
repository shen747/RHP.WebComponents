import { defineConfig } from 'vite';
// react plugin intentionally omitted to avoid new installs in offline/internal registry environments
// import react from '@vitejs/plugin-react';
// dts generation will be added later when we stabilize types
// import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['cjs', 'esm'],
            fileName: (format, name) => `${format}/${name}.${format === 'cjs' ? 'cjs' : 'mjs'}`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                exports: 'named',
                preserveModules: true,
                preserveModulesRoot: 'src',
            },
        },
        sourcemap: true,
        minify: false,
    },
    css: {
        preprocessorOptions: {
            scss: {
                loadPaths: ['.'],
            },
        },
    },
    // plugins omitted for now to avoid requiring additional installs
});
