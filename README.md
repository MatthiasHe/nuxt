# Groover test

## Informations

Projet généré avec Nuxt.js

Ce projet répond normalement à toutes les attentes. 

J'ai fait le choix d'utiliser
une API renvoyant les personnages de Breaking Bad. Celle-ci renvoie seulement 117 
personnages (alors qu'il est demandé d'avoir au moins 150 entités). Pour pallier à
cela je double chaque entitié reçu côté client.

L'API ne permet pas la pagination, c'est donc pour cela que j'effectue une action 
côté front pour que `asyncData` me renvoie que les 25 premiers éléments de la liste. Par
ailleurs il n'était pas demandé de faire une pagination quelconque, je récupère donc ensuite
dans mon composant toute la liste (ce qui est nécessaire dans tous les cas les filtres devant
être client side).

J'ai utilisé Bulma afin de mettre en forme un peu l'application sans pousser très loin le design.
Je suis allé au plus simple tout en visant quelque chose de fonctionnel. 

Enfin, j'ai utilisé également Typescript que j'apprécie particulièrement, d'autant plus la prochaine version de Vue sera
écrite nativement avec ce langage.

## Axes d'amélioration

- Manière de filtrer les données..? (Je n'ai pas utilisé Vue depuis un moment et découvre Nuxt.js, je suis peut-être 
passé à côté de solutions bien plus adaptées)
- Design UI et UX (j'ai fait le choix d'utiliser Bulma pour le gain de temps et parce-que je ne connaissais pas ce 
framework, mon usage de celui-ci n'est peut-être pas optimal)
- Meilleure couverture de test
- Configuration plus poussée du linter (mais d'expérience je sais que Typescript et Vue 2 peuvent être parfois galère à
combiner parfois)
- Passage des filtres en select multiple
- Fonction pour clear les filtres

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
