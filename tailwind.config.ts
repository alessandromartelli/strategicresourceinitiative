import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'var(--clr-primary)',
					50: 'var(--clr-primary-50)',
					100: 'var(--clr-primary-100)',
					200: 'var(--clr-primary-200)',
					300: 'var(--clr-primary-300)',
					400: 'var(--clr-primary-400)',
					500: 'var(--clr-primary-500)',
					600: 'var(--clr-primary-600)',
					700: 'var(--clr-primary-700)',
					800: 'var(--clr-primary-800)',
					900: 'var(--clr-primary-900)',
					foreground: '#ffffff'
				},
				secondary: {
					DEFAULT: 'var(--clr-secondary)',
					50: 'var(--clr-secondary-50)',
					100: 'var(--clr-secondary-100)',
					200: 'var(--clr-secondary-200)',
					300: 'var(--clr-secondary-300)',
					400: 'var(--clr-secondary-400)',
					500: 'var(--clr-secondary-500)',
					600: 'var(--clr-secondary-600)',
					700: 'var(--clr-secondary-700)',
					800: 'var(--clr-secondary-800)',
					900: 'var(--clr-secondary-900)',
					foreground: '#111111'
				},
				accent: {
					DEFAULT: 'var(--clr-accent)',
					50: 'var(--clr-accent-50)',
					100: 'var(--clr-accent-100)',
					200: 'var(--clr-accent-200)',
					300: 'var(--clr-accent-300)',
					400: 'var(--clr-accent-400)',
					500: 'var(--clr-accent-500)',
					600: 'var(--clr-accent-600)',
					700: 'var(--clr-accent-700)',
					800: 'var(--clr-accent-800)',
					900: 'var(--clr-accent-900)',
					foreground: '#ffffff'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#111111'
				},
				sidebar: {
					DEFAULT: '#FFFFFF',
					foreground: '#111111',
					primary: '#111111',
					'primary-foreground': '#FFFFFF',
					accent: '#2563EB',
					'accent-foreground': '#FFFFFF',
					border: '#E5E7EB',
					ring: '#2563EB'
				}
			},
			borderRadius: {
				lg: '16px',
				md: '12px',
				sm: '8px'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Sora', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'display-1': ['72px', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
				'display-2': ['56px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
				'display-3': ['40px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
				'body-1': ['20px', { lineHeight: '1.6' }],
				'body-2': ['18px', { lineHeight: '1.6' }],
				'body-3': ['16px', { lineHeight: '1.6' }],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'scroll': {
					to: { transform: 'translateX(-50%)' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'scroll': 'scroll 20s linear infinite',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-up': 'slide-up 0.5s ease-out'
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
