import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        include: ['test/**/*.{test,spec}.{ts,js}'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html'],
            include: ['test/**/*.ts'],
            exclude: ['src/**/*.{test,spec}.ts'],
        },
    },
});
