# XetaSuite — Documentation Site

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Site de documentation officiel de **XetaSuite**, un ERP open source multi-sites pour la gestion de maintenance, d'incidents et d'inventaire.

- 🌐 **Production** : [xetasuite.com](https://xetasuite.com)
- 💻 **Dépôt backend** : [github.com/XetaSuite/Core](https://github.com/XetaSuite/Core)

---

## Structure du projet

```
.
├── public/                        # Fichiers statiques (favicon, images)
├── src/
│   ├── assets/                    # Logo, images
│   ├── styles/
│   │   └── custom.css             # Surcharges CSS
│   └── content/
│       └── docs/                  # Pages en français (langue par défaut)
│           ├── getting-started/
│           ├── concepts/
│           ├── guides/
│           ├── admin/
│           ├── api/
│           ├── deployment/
│           └── en/                # Pages en anglais
│               ├── getting-started/
│               ├── concepts/
│               ├── guides/
│               ├── admin/
│               ├── api/
│               └── deployment/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Langues

Le site est bilingue **Français / English** via Starlight i18n :

- `src/content/docs/` → Français (langue racine par défaut)
- `src/content/docs/en/` → English

## Contenu de la documentation

| Section | Description |
| :------ | :---------- |
| **Démarrage** | Installation backend & frontend, configuration `.env`, mode démo |
| **Concepts** | Authentification, rôles & permissions, multi-sites & zones |
| **Guides** | Entreprises, maintenances, incidents, mouvements d'articles |
| **Administration** | Gestion des utilisateurs, rôles et permissions |
| **API** | Authentification API, endpoints principaux, serveur MCP |
| **Déploiement** | Mise en production, queue workers, cron scheduler |

## Commandes

| Commande              | Action                                        |
| :-------------------- | :-------------------------------------------- |
| `npm install`         | Installe les dépendances                      |
| `npm run dev`         | Serveur de développement sur `localhost:4321` |
| `npm run build`       | Build de production vers `./dist/`            |
| `npm run preview`     | Prévisualisation du build en local            |
