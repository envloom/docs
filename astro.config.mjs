// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: 'https://envloom.dev',
	server: {
		port: 3000,
		host: true,
		allowedHosts: ['envloom.dev'],
	},
	vite: {
		plugins: [tailwindcss()],
		ssr: {
			noExternal: ['path-to-regexp'],
		},
		server: {
			allowedHosts: ['envloom.dev'],
		},
		preview: {
			port: 3000,
			host: true,
			allowedHosts: ['envloom.dev'],
		}
	},
	integrations: [
		starlight({
			title: 'Envloom',
			description:
				'Envloom is a local development stack manager for versioned runtimes, sites, SSL, and fast day-to-day workflows.',
			tagline: 'Local development stack manager for modern teams',
			logo: {
				light: './public/favicon.png',
				dark: './public/favicon.png',
				alt: 'Envloom logo',
			},
			favicon: '/favicon.png',
			customCss: ['/src/styles/envloom.css'],
			head: [
				{ tag: 'meta', attrs: { property: 'og:site_name', content: 'Envloom' } },
				{ tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://envloom.dev/og/envloom-default.svg' } },
				{ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
				{ tag: 'meta', attrs: { name: 'twitter:title', content: 'Envloom' } },
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:description',
						content:
							'Versioned runtimes, local SSL, site config, systray controls, logs, and a CLI for local development.',
					},
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:image', content: 'https://envloom.dev/og/envloom-default.svg' },
				},
			],
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/envloom/envloom',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/envloom/docs/edit/main/',
			},
			lastUpdated: true,
			credits: false,
			sidebar: [
				{
					label: 'Overview',
					items: [{ label: 'Overview', slug: 'docs' }],
				},
				{
					label: 'Getting Started',
					items: [
						{ label: 'Install', slug: 'docs/getting-started/install' },
						{ label: 'First Launch', slug: 'docs/getting-started/first-launch' },
					],
				},
				{
					label: 'Runtimes',
					items: [
						{ label: 'Overview', slug: 'docs/runtimes' },
						{ label: 'PHP', slug: 'docs/runtimes/php' },
						{ label: 'Node.js', slug: 'docs/runtimes/node' },
						{ label: 'MariaDB', slug: 'docs/runtimes/mariadb' },
						{ label: 'Nginx', slug: 'docs/runtimes/nginx' },
					],
				},
				{
					label: 'Sites',
					items: [
						{ label: 'Overview', slug: 'docs/sites' },
						{ label: 'Linking', slug: 'docs/sites/linking' },
						{ label: 'SSL & Local CA', slug: 'docs/sites/ssl' },
						{ label: 'Per-Site PHP', slug: 'docs/sites/per-site-php' },
					],
				},
				{
					label: 'Operations',
					items: [
						{ label: 'Systray', slug: 'docs/systray' },
						{ label: 'CLI (loom)', slug: 'docs/cli' },
						{ label: 'Settings', slug: 'docs/settings' },
						{ label: 'Logs & Troubleshooting', slug: 'docs/logs-troubleshooting' },
					],
				},
			],
		}),
	],
});
