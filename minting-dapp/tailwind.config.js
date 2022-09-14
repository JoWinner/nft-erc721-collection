const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.tsx',
        './public/index.html',
    ],
    theme: {
        extend: {
            colors: {
                // General
                page: {
                    from_bg: colors.green[800],
                    to_bg: colors.green[900],
                },
                titles: colors.gray[900],
                links: {
                    txt: colors.gray[900],
                    hover_txt: colors.slate[900],
                },
                loading_spinner: colors.gray[500],
                popups: {
                    bg: colors.green[900],
                    txt: colors.white,
                    internal_border: colors.slate[300],
                },
                warning: {
                    txt: colors.white,
                    bg: colors.green[900],
                    border: colors.green[900],
                },
                error: {
                    txt: colors.red[500],
                    bg: colors.red[50],
                    border: colors.red[200],
                },

                // Inputs
                btn: {
                    txt: colors.slate[200],
                    bg: colors.gray[900],
                    border: colors.slate[200],
                    hover_txt: colors.slate[200],
                    hover_bg: colors.slate[700],
                    hover_border: colors.slate[200],
                },
                btn_primary: {
                    txt: colors.white,
                    bg: colors.slate[900],
                    border: colors.slate[900],
                    hover_txt: colors.white,
                    hover_bg: colors.gray[700],
                    hover_border: colors.gray[600],
                },
                btn_error: {
                    txt: colors.white,
                    bg: colors.red[500],
                    border: colors.red[500],
                    hover_txt: colors.white,
                    hover_bg: colors.red[600],
                    hover_border: colors.red[600],
                },
                label: colors.gray[300],
                txt_input: {
                    txt: colors.gray[800],
                    bg: colors.white,
                    border: colors.white,
                    focus_txt: colors.gray[800],
                    focus_bg: colors.slate[50],
                    focus_border: colors.white,
                    placeholder_txt: colors.gray[800],
                },

                // Whitelist proof widget
                wl_message: {
                    txt: colors.white,
                    bg: colors.green[900],
                },

                // Mint widget
                token_preview: colors.green[900],
            },
        },
    },
    variants: {},
    plugins: [],
};