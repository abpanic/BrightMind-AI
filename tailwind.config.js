const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  darkMode: ["class", "class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	container: {
  		padding: {
  			DEFAULT: '1rem',
  			sm: '2rem',
  			lg: '6rem',
  			xl: '7rem',
  			'2xl': '4rem'
  		}
  	},
  	fontFamily: {
  		monoton: ["Monoton", "cursive"],
  		satoshi: ['Satoshi', 'sans-serif'],
  		clash: ['Clash Display', 'sans-serif'],
  		infinite: ["Outfit", "sans-serif"],
  		bebasneo: ['Bebas Neue', 'cursive']
  	},
  	extend: {
  		boxShadow: {
  			'3xl': '-1px 34px 47px -29px rgb(32 32 32 / 100%)',
  			'4xl': ' 0vw 0vw 0.5vw 0vw rgb(32 32 32 / 20%)',
  			'5xl': ' 0vw 0.5vw 0.5vw 0vw rgb(32 32 32 / 16%)',
  			glass: '1px 5px 12px 1px rgba( 31, 38, 135, 0.37 )',
  			'glass-card': '4px 4px 4px 4px rgba( 32, 32, 32, 0.37 )',
  			'card-shadow': '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
  			'dark-shadow': '10px 10px 5px 0px rgba(130,130,130,0.75)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
 
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}



