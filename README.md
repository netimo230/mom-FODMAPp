# 🌿 Mon FODMAP — Application Web

Application web pour suivre le régime FODMAP, conçue pour aider à préparer les repas au quotidien.

## ✨ Fonctionnalités

- **Suivi des phases** : Compteur de jours automatique (Phase 1 : Élimination · Phase 2 : Réintroduction · Phase 3 : Personnalisation)
- **Bibliothèque de recettes** : 12 recettes low-FODMAP avec filtres par repas
- **Frigo → IA** : Entrez vos ingrédients, Claude génère des recettes adaptées
- **Journal des symptômes** : Suivi quotidien des repas et réactions
- **Synchro Firebase** : Données sauvegardées dans le cloud, accessibles partout
- **Responsive** : Navigation mobile adaptée

---

## 🔧 Configuration Firebase

### 1. Créer un projet Firebase

1. Aller sur [console.firebase.google.com](https://console.firebase.google.com)
2. Créer un nouveau projet
3. Activer **Firestore Database** (mode test pour commencer)
4. Aller dans **Paramètres du projet** → **Vos applications** → Ajouter une application Web
5. Copier les identifiants Firebase

### 2. Coller les identifiants dans index.html

Trouver ce bloc dans `index.html` :

```html
<div id="firebase-config" class="hidden"
  data-api-key="VOTRE_API_KEY"
  data-auth-domain="VOTRE_PROJECT.firebaseapp.com"
  data-project-id="VOTRE_PROJECT_ID"
  data-storage-bucket="VOTRE_PROJECT.appspot.com"
  data-messaging-sender-id="VOTRE_SENDER_ID"
  data-app-id="VOTRE_APP_ID">
</div>
```

Remplacer chaque valeur par celles de votre projet.

### 3. Règles Firestore (pour usage privé)

Dans Firestore → Règles :

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true; // Mode privé simple
    }
  }
}
```

---

## 🚀 Déploiement sur GitHub Pages

### 1. Créer un dépôt GitHub

```bash
git init
git add .
git commit -m "Initial commit — Mon FODMAP app"
git branch -M main
git remote add origin https://github.com/VOTRE_PSEUDO/mon-fodmap.git
git push -u origin main
```

### 2. Activer GitHub Pages

1. Aller dans **Settings** → **Pages**
2. Source : **Deploy from a branch**
3. Branch : `main` / `/ (root)`
4. Enregistrer

Votre app sera accessible sur : `https://VOTRE_PSEUDO.github.io/mon-fodmap`

---

## 📋 Structure des fichiers

```
mon-fodmap/
├── index.html     # App principale + logique Firebase
├── style.css      # Styles (thème organique / botanique)
├── app.js         # Navigation mobile
└── README.md      # Ce fichier
```

---

## 🍽️ Phases du protocole FODMAP

| Phase | Durée | Description |
|-------|-------|-------------|
| 1 – Élimination | 4 à 6 semaines | Suppression totale des aliments riches en FODMAP |
| 2 – Réintroduction | 6 à 8 semaines | Test famille par famille, identification des intolérances |
| 3 – Personnalisation | Long terme | Alimentation diversifiée selon les tolérances individuelles |

> ⚕️ Ce régime est idéalement suivi avec l'accompagnement d'un(e) diététicien(ne) formé(e) au protocole FODMAP.

---

## 🤖 Fonctionnalité Frigo → IA

La fonctionnalité de génération de recettes utilise l'API Claude (Anthropic). Elle est fonctionnelle dans l'environnement Claude.ai. Pour la déployer en dehors, vous aurez besoin de votre propre clé API Anthropic et d'un backend proxy sécurisé.
