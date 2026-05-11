# Maison Noura — Shopify Theme

Thème Shopify custom pour **Maison Noura**, marque de hijabs et abayas haut de gamme. Style luxe modeste, ambiance marocaine contemporaine. Construit en **Liquid + CSS vanilla + JS vanilla**, sans framework, sans bundler. Compatible Online Store 2.0 (sections everywhere, JSON templates).

## Installation

### 1. Prérequis

```bash
npm install -g @shopify/cli @shopify/theme
shopify version
```

### 2. Cloner le repo et lier au store

```bash
git clone <repo-url> maison-noura
cd maison-noura

# Premier lien au store
shopify theme dev --store=monstore.myshopify.com
```

La commande `shopify theme dev` lance un preview local avec hot-reload sur `http://127.0.0.1:9292`. Au premier lancement, elle ouvre un onglet d'authentification — connecte-toi avec le compte Shopify qui possède le store.

### 3. Commandes utiles

```bash
# Preview local avec hot reload
shopify theme dev --store=monstore.myshopify.com

# Push une version non publiée (apparaît dans Admin → Online Store → Themes)
shopify theme push --unpublished

# Push directement en live (publie le thème)
shopify theme push --live

# Rapatrier les changements faits dans l'admin Shopify
shopify theme pull

# Vérifier la qualité du thème
shopify theme check
```

## Personnalisation (sans coder)

Tout le contenu du site est éditable via **Admin Shopify → Online Store → Themes → Customize**.

### Changer la palette de couleurs

`Theme settings → Couleurs` — modifier les 9 tokens (fond, ink, accent, hairlines, etc).

### Changer le logo / nom de la marque

`Theme settings → Marque` — uploader un logo ou écrire le nom en texte.

### Modifier les sections de la home

`Templates → Home page` — chaque bloc (Hero, Catégories, Spotlight, Curated, Bannière, Cartes, Journal/Promise) est éditable et réordonnable.

### Modifier la newsletter / le footer

`Sections → Footer group` — éditer titres, intro, liens.

## Ajouter des produits

1. Admin Shopify → **Products → Add product**
2. Remplir titre, description, prix, images, variantes (couleurs, tailles).
3. (Optionnel) Ajouter un metafield `custom.color_label` (single line text) pour afficher un libellé de couleur sous le nom dans les cards.
4. Ajouter le produit à une **Collection** (`/collections/<handle>`) pour qu'il apparaisse dans les sections "Spotlight" ou "Curated Selection".

## Uploader les images placeholder

Le dossier `/design-assets/` (à la racine du repo, pas dans le thème) liste les images recommandées pour la première mise en route. Pour les utiliser :

1. Admin Shopify → **Content → Files**
2. **Upload files** → sélectionner les images du dossier `design-assets`
3. Customize le thème → pour chaque section, cliquer `Select image` → choisir l'image uploadée.

## Structure du thème

```
maison-noura/
├── assets/        # CSS, JS, images statiques
├── config/        # settings_data + settings_schema (couleurs, marque, etc.)
├── layout/        # theme.liquid (layout principal)
├── locales/       # en.default.json + fr.json
├── sections/      # toutes les sections Liquid + section groups (header, footer)
├── snippets/      # composants réutilisables (button, product-card, icon, …)
└── templates/     # JSON templates: index, product, collection, cart, page, search
```

Voir [`THEME_GUIDE.md`](./THEME_GUIDE.md) pour le détail de chaque section et de ses settings.

## Stack technique

- **Liquid** (templating natif Shopify)
- **CSS vanilla** avec custom properties — pas de Tailwind, pas de Sass
- **JavaScript vanilla** — pas de jQuery, pas de bundler
- **Polices** : Cormorant Garamond (display) + Inter (body), chargées depuis Google Fonts
- **Zéro dépendance npm**

## Critères qualité

- `shopify theme check` doit passer sans erreur
- Lighthouse : Performance ≥ 80, Accessibility ≥ 95, SEO ≥ 95
- Responsive testé de 360px à 1920px
- Le checkout Shopify natif fonctionne
- Locales FR/EN couvrent toutes les chaînes système

## Licence

Propriétaire — Maison Noura.
