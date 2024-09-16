/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontSize: {
			xs: '0.8em',
			sm: '0.9em',
			base: '1em',
			xl: '1.25em',
			'2xl': '1.563em',
			'2.5xl': '1.7em',
			'3xl': '1.953em',
			'3.5xl': '2.2em',
			'4xl': '2.441em',
			'4.5xl': '2.8em',
			'5xl': '3.052em',
			'5.5xl': '3.4em',
			'6xl': '3.815em',
			'6.5xl': '4.1em',
			'7xl': '4.768em',
			'7.5xl': '5.2em',
			'8xl': '5.96em',
			'8.5xl': '6.4em',
			'9xl': '7.168em',
			'9.5xl': '7.6em',
			'10xl': '8.448em'
		},
		extend: {
			colors: {
				ivory: {
					50: '#F9FAEF',
					100: '#FFFBEB',
					200: '#E9E6E6',
					300: '#DED8D8',
					400: '#CCC6C6',
					500: '#C0B9B9',
					600: '#A8A0A0',
					700: '#8E8A8A',
					800: '#737070',
					900: '#5A5858',
					1000: '#3F3D3D'
				}
			},
			fontSize: {
				xxs: '0.7em',
				lg: '1.125em'
			},
			screens: {
				'2xl': '1460px',
				'3xl': '1640px',
				extend: {}
			}
		}
	}
};
