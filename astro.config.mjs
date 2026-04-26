// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://xetasuite.com',
	integrations: [
		starlight({
			title: 'XetaSuite',
			logo: {
				light: './src/assets/logo.svg',
				dark: './src/assets/logo-dark.svg',
				replacesTitle: true,
			},
			lastUpdated: true,
			favicon: '/favicon.svg',
			editLink: {
				baseUrl: 'https://github.com/XetaSuite/Site/edit/main/',
			},
			defaultLocale: 'en',
			locales: {
				root: {
					label: 'Français',
					lang: 'fr',
				},
				en: {
					label: 'English',
					lang: 'en',
				},
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/XetaSuite/Core' },
			],
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Démarrage',
					translations: { en: 'Getting Started' },
					items: [
						{ label: 'Installation (backend)', translations: { en: 'Installation (backend)' }, slug: 'getting-started/backend' },
						{ label: 'Installation (frontend)', translations: { en: 'Installation (frontend)' }, slug: 'getting-started/frontend' },
						{ label: 'Configuration .env', translations: { en: 'Configuration .env' }, slug: 'getting-started/configuration' },
						{ label: 'Lancer en local', translations: { en: 'Run locally' }, slug: 'getting-started/local' },
						{ label: 'Mode Démo', translations: { en: 'Demo Mode' }, slug: 'getting-started/demo-mode' },
					],
				},
				{
					label: 'Concepts',
					translations: { en: 'Concepts' },
					items: [
						{ label: 'Authentification', translations: { en: 'Authentication' }, slug: 'concepts/authentication' },
						{ label: 'Rôles & Permissions', translations: { en: 'Roles & Permissions' }, slug: 'concepts/roles-permissions' },
						{ label: 'Multi-sites & Zones', translations: { en: 'Multi-sites & Zones' }, slug: 'concepts/multi-sites' },
					],
				},
				{
					label: 'Guides',
					translations: { en: 'Guides' },
					items: [
						{ label: 'Créer une entreprise', translations: { en: 'Create a company' }, slug: 'guides/create-company' },
						{ label: 'Créer une maintenance', translations: { en: 'Create a maintenance' }, slug: 'guides/create-maintenance' },
						{ label: 'Gérer les incidents', translations: { en: 'Manage incidents' }, slug: 'guides/manage-incidents' },
						{ label: 'Mouvements d\'articles', translations: { en: 'Items movements' }, slug: 'guides/item-movements' },
					],
				},
				{
					label: 'Administration',
					translations: { en: 'Administration' },
					items: [
						{ label: 'Utilisateurs', translations: { en: 'Users' }, slug: 'admin/users' },
						{ label: 'Rôles', translations: { en: 'Roles' }, slug: 'admin/roles' },
						{ label: 'Permissions', translations: { en: 'Permissions' }, slug: 'admin/permissions' },
					],
				},
				{
					label: 'API',
					translations: { en: 'API' },
					items: [
						{ label: 'Authentification API', translations: { en: 'API Authentication' }, slug: 'api/auth' },
						{ label: 'Endpoints principaux', translations: { en: 'Main endpoints' }, slug: 'api/endpoints' },
					],
				},
				{
					label: 'Déploiement',
					translations: { en: 'Deployment' },
					items: [
						{ label: 'Production', translations: { en: 'Production' }, slug: 'deployment/production' },
						{ label: 'Queue workers', translations: { en: 'Queue workers' }, slug: 'deployment/queue-workers' },
						{ label: 'Cron / Scheduler', translations: { en: 'Cron / Scheduler' }, slug: 'deployment/cron' },
					],
				},
			],
		}),
	],
});
