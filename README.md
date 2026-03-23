# Portfolio — KABUYA NSUNGULA Junior

Portfolio personnel développé avec **Next.js 14**, **TypeScript** et **Tailwind CSS**.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Geist Font (Google Fonts)

## Structure des fichiers

```
portfolio/
├── app/
│   ├── globals.css        # Styles globaux + Tailwind
│   ├── layout.tsx         # Layout racine + SEO meta
│   └── page.tsx           # Page principale
├── components/
│   ├── Navbar.tsx         # Navigation fixe responsive
│   ├── Hero.tsx           # Section d'accueil
│   ├── About.tsx          # À propos
│   ├── Skills.tsx         # Compétences
│   ├── Projects.tsx       # Projets
│   ├── Contact.tsx        # Contact
│   ├── Footer.tsx         # Pied de page
│   └── ScrollToTop.tsx    # Bouton scroll to top
├── public/                # Assets statiques
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Lancer en local

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Déployer sur Vercel

### Option 1 — Via GitHub (recommandé)

1. Pousser le projet sur GitHub
2. Aller sur [vercel.com](https://vercel.com) et se connecter
3. Cliquer sur **"Add New Project"**
4. Importer le dépôt GitHub
5. Vercel détecte automatiquement Next.js — cliquer sur **"Deploy"**
6. Le portfolio est en ligne en ~2 minutes

### Option 2 — Via CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Déployer en production
vercel --prod
```

## Personnalisation

### Couleur d'accent

Dans `tailwind.config.ts`, modifier la valeur de `accent` :
```ts
accent: "#007FFF",
```

### Mode sombre

Le mode sombre est prêt mais désactivé par défaut. Pour l'activer automatiquement :
Dans `app/layout.tsx`, remplacer `<html lang="fr">` par :
```tsx
<html lang="fr" className="dark">
```

## Build production

```bash
npm run build
npm start
```
