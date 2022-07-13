/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,}"],
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            'white': '#ffffff',
            'black': '#2A363C',
            'grey': '#F4F4F4',
            'tahiti': '#0091A8',
            'tahiti-hover': '#78cedc',
            'green': '#CCFFFF',
            'metal': '#2A363E80',
            'yellow': '#FFD236',
            'brown': '#a47d3f',
            'bermuda': '#CCE9EE',
            'orange': '#f99f3d',
        },
        screens: {
            'xs': '320px',
            // => @media (min-width: 640px) { ... }
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        }
    },
    plugins: []
}