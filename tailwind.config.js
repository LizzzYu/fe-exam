import {
	GREY,
	GREY_LIGHT,
	GREY_LIGHTER,
	GREY_SCALE_400,
	GREY_SCALE_BG_DARK,
	GREY_SCALE_BG_LIGHT,
	DARKER_BLACK,
	LIGHT_BLACK,
} from './src/styles/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primaryBlack: GREY_SCALE_BG_DARK,
				secondaryBlack: GREY_SCALE_BG_LIGHT,
				darkerBlack: DARKER_BLACK,
				lightBlack: LIGHT_BLACK,
				grey: GREY,
				greyLight: GREY_LIGHT,
				greyLighter: GREY_LIGHTER,
				greyScale400: GREY_SCALE_400,
			},
			screens: {
				xl2: '1440px',
			},
			fontFamily: {
				ubuntu: ['Ubuntu', 'sans-serif'],
				'open-sans': ['Open Sans', 'sans-serif'],
			},
			fontSize: {
				body2: ['14px', '21px'],
				h3: ['48px', '72px'],
				h4: ['30px', '45px'],
				h5: ['24px', '36px'],
			},
			keyframes: {
				shimmer: {
					'0%': { opacity: '0.1' },
					'50%': { opacity: '0.2' },
					'100%': { opacity: '0.1' },
				},
			},
			animation: {
				shimmer: 'shimmer 1.5s ease-in-out infinite',
			},
		},
	},
	plugins: [
		({ addUtilities }) => {
			addUtilities({
				'.flex-center': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
				},
			});
		},
	],
};
