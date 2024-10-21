# fsidlecalc
## Calculateur en français pour FireStone Idle RPG

Ouvrez le par le lien : https://zillerfr.github.io/fsidlecalc/ (ctrl+click pour ouvrir dans un nouvel onglet)

## Description

Outil d'aide à la décision pour FireStone Idle RPG.

## Onglet : Vos Informations

Permet de saisir les équipements de vos personnages ainsi qu'indiquer les mercenaires / dieux débloquer. Plusieurs éléments de saisie :

- Échelon maximum atteint - permet de filtrer la liste des personnages en fonction des personnages débloqués par le meilleur échelon atteint (appuyer sur le bouton "Appliquer" pour mettre à jour)
- Personnages débloqués - permet de cocher / décocher les mercenaires / dieux en fonction de ce que vous avez débloqué
- Liste des personnages
  - Affiche l'ensemble des personnages avec une liste de sélection permettant de filtrer soit sur un personnage précis, soit avoir uniquement les personnages débloqués, soit l'intégralité des personnages du jeu.
  - Pour chaque personnage, la liste des équipements, bijoux et pierres d'âmes avec leur rareté et leur niveau.
    - Cliquer sur une image permet de changer la rareté ("Aucun" correspond au fait de ne pas avoir encore obtenu l'objet)
    - Cliquer sur les boutons "+" et "-" autour du niveau permet de modifier le niveau
  - Pour chaque personnage, la machine de guerre à laquelle le personnage est assigné
    - Cliquer sur l'image de la machine de guerre permet de changer la machine de guerre à laquelle le personnage est assigné ("Aucun" correspond au fait de ne pas avoir encore assigné le personnage)

## Onglet : Equipage Machines de Guerre

Permet de visualiser l'apport de chacun de vos personnages aux machines de guerre dans les différentes statistique (dégâts, santé, résistance et cumul santé + résistance).

3 tableaux sont disponibles :

- Bonus acquis - permet de visualiser les bonus complet apportés par chaque personnage en fonction de la rareté et du niveau actuel de ses bijoux
- Bonus potentiels - permet de visualiser les bonus maximum pouvant être apporté par chaque personnage en fonction de la rareté de ses bijoux, en considérant qu'ils sont tous améliorés au niveau maximum
- Bonus acquis + potentiels - permet de visualiser le contenu des 2 autres tableaux cumulés
Pour chaque tableau, il y a un bouton permettant d'afficher/masquer le tableau pour sélectionner ce que l'on peut voir.

## Onglet : Améliorations d'équipements

Permet de calculer quels sont les objets les plus "rentables" à améliorer

3 tableaux sont disponibles, un tableau par type d'objets (équipements, bijoux et pierres d'âmes), ils ont un fonctionnement similaire :

- Une case pour saisir la quantité de la ressource permettant d'améliorer l'objet (appuyer sur le bouton "Appliquer" pour mettre à jour)
- Une série de filtres rapides pour en un clic rechercher les statistiques à améliorer (si vous cherchez à améliorer une statistique en particulier)
  - Pour les bijoux, un filtre supplémentaire par machine de guerre (sélectionner une machine pour ne voir que les personnages étant dans l'équipage de cette machine, ne sélectionner aucune machine pour voir l'ensemble des personnages)
  - un clic sélectionne une machine, un clic sur la machine déjà sélectionnée désélectionne la machine
- Dans le tableau vont s'afficher l'ensemble des objets améliorables avec un bouton "Upgrade", si vous cliquez sur ce bouton, le niveau de l'objet dans l'outil va être augmenté de 1 (pas besoin d'aller saisir à la main dans le 1er onglet) et le total de ressource d'amélioration sera réduit du coût de l'upgrade
- Une colonne "Valeur amélioration" permet de visualiser le rapport entre le gain de statistique et le coût de l'amélioration
Pour chaque tableau, il y a un bouton permettant d'afficher/masquer le tableau pour sélectionner ce que l'on peut voir.

## Onglet : Gestion des données

Les données du calculateur sont mémorisées dans le "local storage" de votre navigateur, si vous changez de navigateur ou passez en navigation privée, elles ne seront pas accessibles.

Cet onglet permet d'exporter ou importer les données si vous devez changer de navigateur.

Pour exporter, cliquer sur le bouton "Exporter", cela va afficher la sauvegarde dans une case, pour plus de facilité, le bouton "Copier" permet de mettre le contenu dans le presse-papier du système.

Pour importer, il faut d'abord coller la sauvegarde dans la case puis cliquer sur le bouton "Importer"

## Onglet : Documentation

Documentation de l'outil.