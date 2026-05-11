# Theme Guide — Maison Noura

Documentation des sections du thème. Chaque section possède un `{% schema %}` qui expose ses settings dans le Theme Customizer (Admin → Online Store → Themes → Customize).

---

## Theme settings globaux

`config/settings_schema.json` — Theme Customizer → bouton **Theme settings**.

| Groupe | ID | Description |
|---|---|---|
| Couleurs | `color_bg`, `color_bg_alt`, `color_bg_dark`, `color_ink`, `color_ink_muted`, `color_ink_light`, `color_accent`, `color_accent_light`, `color_line` | Tokens de la palette, sortis en CSS variables. |
| Marque | `brand_logo`, `brand_name`, `brand_tagline`, `instagram_url`, `footer_copyright` | Identité de la marque. |
| Mise en page | `page_width` | Largeur max du contenu (px). |
| Cards produit | `card_show_color`, `card_show_price` | Affichage info sur cards. |

---

## Header (`sections/header.liquid`)

Layout 3 colonnes : nav gauche · logo central · nav droite + cart.

**Settings :**
- `logo` (image_picker)
- `logo_text` (text) — fallback si pas de logo

**Blocks `menu_item` :**
- `label` (text)
- `url` (url)
- `side` (select) — `left` ou `right`

**Comportement :**
- Transparent au-dessus du hero sur la home, devient opaque au scroll.
- Mobile : burger ouvre un panel slide-in.

---

## Footer (`sections/footer.liquid`)

4 colonnes desktop.

**Settings :**
- `policy_links_show` (checkbox) — affiche Privacy + Terms.

**Blocks :**
- `link_column` : `heading` + `labels` (un par ligne) + `urls` (un par ligne, même ordre).
- `newsletter` (max 1) : `heading`, `intro`, `placeholder`.

---

## Hero (`sections/hero.liquid`)

Pleine largeur, `min-height: min(80vh, 720px)`.

**Settings :**
- `background_image`
- `heading_line_1`, `heading_line_2_italic` (ligne 2 en italique serif)
- `subtitle`
- `primary_cta_label`, `primary_cta_url` (bouton blanc)
- `secondary_cta_label`, `secondary_cta_url` (bouton ghost)
- `overlay_opacity` (0–60%)

---

## Catégories signatures (`sections/signature-categories.liquid`)

Grille 4 cols desktop / 2 cols mobile.

**Settings :** `heading`.
**Blocks `category`** (max 6) : `image`, `label`, `url`.

---

## Spotlight collection (`sections/featured-collection-spotlight.liquid`)

Layout 40/60.

**Settings :** `eyebrow` (italique), `heading`, `body`, `cta_label`, `cta_url`, `image`, `image_position` (`left`/`right`).

---

## Sélection produits (`sections/curated-products.liquid`)

Titre + lien "View All" + grille 4 produits.

**Settings :**
- `heading`, `link_label`, `link_url`
- `source` : `manual` ou `collection`
- `products` (product_list) — si manuel
- `collection` — si collection
- `items_to_show` (2–8)

---

## Bannière pleine largeur (`sections/full-width-banner.liquid`)

`min-height: min(60vh, 480px)`.

**Settings :** `image`, `heading`, `link_label`, `link_url`, `text_color` (`light`/`dark`).

---

## Deux cartes image (`sections/two-image-cards.liquid`)

Grille 2 cols, ratio 16:9.

**Blocks `card`** (max 2) : `image`, `label`, `url`.

---

## Cartes contenu (`sections/content-cards.liquid`)

Grille 2 cols, fond `--color-bg-alt`, layout interne 40/60.

**Blocks `card`** (max 2) : `image`, `heading`, `body`, `cta_label`, `cta_url`.

---

## Page produit (`sections/main-product.liquid`)

Galerie à gauche, infos / variant picker / Add to cart à droite. JS gère le changement de variant (URL, prix, dispo).

---

## Page collection (`sections/main-collection.liquid`)

Titre + description + sort by + grille produits + pagination.

**Settings :** `per_page` (8–48).

---

## Panier (`sections/main-cart.liquid`)

Table line items + update + checkout.

---

## Page générique (`sections/main-page.liquid`)

Titre + contenu riche depuis `page.content` (admin Shopify).

---

## Snippets

- `button.liquid` — pill button, variants : `primary`, `secondary`, `ghost`, `dark`.
- `underlined-link.liquid` — lien avec underline animé hover.
- `product-card.liquid` — card produit (ratio 4:5).
- `category-card.liquid` — card catégorie (carrée).
- `icon.liquid` — SVGs inline : `arrow-right`, `search`, `account`, `bag`, `instagram`, `menu`, `close`.
- `responsive-image.liquid` — wrapper image_url + srcset/sizes.

---

## Design tokens (CSS variables)

Définis dans `layout/theme.liquid` à partir des `settings.*`, fallback dans `assets/base.css`.

```css
--color-bg, --color-bg-alt, --color-bg-dark
--color-ink, --color-ink-muted, --color-ink-light
--color-accent, --color-accent-light, --color-line
--font-display: 'Cormorant Garamond'
--font-body: 'Inter'
--fs-display-xl: clamp(48px, 6vw, 96px)
--fs-display-lg: clamp(36px, 4vw, 56px)
--fs-display-md: clamp(24px, 2.5vw, 36px)
--radius-card: 4px
--radius-pill: 999px
--page-width
--gutter: clamp(16px, 5vw, 80px)
```

---

## Breakpoints

- 750px (tablette)
- 990px (desktop — nav visible, grilles 4 cols)
- 1280px (large)
