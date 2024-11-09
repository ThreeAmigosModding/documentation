(async () => {
    const nextra = await import('nextra');
    
    const withNextra = nextra.default({
        theme: 'nextra-theme-docs',
        themeConfig: './theme.config.tsx',
    });
    
    module.exports = withNextra();
})();
