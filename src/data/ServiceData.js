export const serviceData = [
  {
    name: "fenetre-porte-fenetre",
    id: 1,
    path: "gardiennage-societe-de-surveillance",
    steps: [
      {
        title:
          "Décrivez votre projet et échangez avec les artisans près de chez vous. ",
        type: "text",
        stepNumber: 1,
        path: "post-service-request/Fenetre_porte",
      },
      {
        type: "checkBoxOptions",
        stepNumber: 2,
        title: "Quelle est la nature de vos travaux ?",
        options: [
          {
            id: 1,
            svg: "https://www.travaux.com/static/svg-icons/windowFrame.svg",
            name: "Installation neuve",
          },
          {
            id: 2,
            svg: "https://www.travaux.com/static/svg-icons/replacement.svg",
            name: "Remplacement",
          },
          {
            id: 3,
            svg: "https://www.travaux.com/static/svg-icons/install.svg",
            name: "Réparation",
          },
        ],
      },
      {
        type: "multiCheckBok",
        stepNumber: 3,
        title:
          "Quel type de matériau souhaitez-vous pour vos fenêtres ? (facultatif)",
        options: [
          {
            id: 1,
            svg: "https://www.travaux.com/static/svg-icons/aluminium.svg",
            name: "Aluminium",
          },
          {
            id: 2,
            svg: "https://www.travaux.com/static/svg-icons/wood.svg",
            name: "Bois",
          },
          {
            id: 3,
            svg: "https://www.travaux.com/static/svg-icons/pvc.svg",
            name: "PVC",
          },
          {
            id: 4,
            svg: "https://www.travaux.com/static/svg-icons/iron.svg",
            name: "Acier",
          },
          {
            id: 5,
            svg: "https://www.travaux.com/static/svg-icons/communication.svg",
            name: "Matériau a définir",
          },
          {
            id: 6,
            svg: "https://www.travaux.com/static/svg-icons/more.svg",
            name: "Autre",
          },
        ],
      },
      {
        type: "optionalMultiCheckBok",
        stepNumber: 4,
        title: "Quel type de fenêtre souhaitez-vous ? (facultatif)",
        options: [
          {
            id: 1,
            svg: "https://www.travaux.com/static/svg-icons/closedWindow.svg",
            name: "Fenêtre fermée",
          },
          {
            id: 2,
            svg: "https://www.travaux.com/static/svg-icons/turnWindow.svg",
            name: "Fenêtre classique à un battant",
          },
          {
            id: 3,
            svg: "https://www.travaux.com/static/svg-icons/doubleTurnWindow.svg",
            name: "Fenêtre classique à deux battants",
          },
          {
            id: 4,
            svg: "https://www.travaux.com/static/svg-icons/turnAndTiltWindow.svg",
            name: "Fenêtre oscillo-battante",
          },
          {
            id: 5,
            svg: "https://www.travaux.com/static/svg-icons/doorWithWindows.svg",
            name: "Porte-fenêtre",
          },
          {
            id: 6,
            svg: "https://www.travaux.com/static/svg-icons/slidingWindow.svg",
            name: "Fenêtre coulissante",
          },
          {
            id: 7,
            svg: "https://www.travaux.com/static/svg-icons/veluxWindow.svg",
            name: "Fenêtre de toit (Velux)",
          },
          {
            id: 8,
            svg: "https://www.travaux.com/static/svg-icons/communication.svg",
            name: "A définir",
          },
          {
            id: 9,
            svg: "https://www.travaux.com/static/svg-icons/more.svg",
            name: "Autre",
          },
        ],
      },
      {
        type: "combinedCheckBok",
        stepNumber: 5,
        title: "Combien de fenêtres souhaitez-vous installer ? (facultatif) ",
        options: [
          {
            id: 1,
            check: 1,
          },
          {
            id: 2,
            check: 2,
          },
          {
            id: 3,
            check: 3,
          },
          {
            id: 4,
            check: 4,
          },
          {
            id: 5,
            check: 5,
          },
        ],
      },
      {
        type: "combinedTitleCheckBok",
        title:
          "Quand souhaitez-vous que le travail soit terminé ? (facultatif) ",
        stepNumber: 6,
        options: [
          {
            id: 1,
            name: "Urgent",
          },
          {
            id: 2,
            name: "Pas de date fixée",
          },
          {
            id: 3,
            name: "Dans moins de deux semaines",
          },
          {
            id: 4,
            name: 'Dans moins d"un m ',
          },
          {
            id: 5,
            check: "Dans moins de 6 mois",
          },
        ],
      },
      {
        type: "uploadImage",
        stepNumber: 7,
        title: "Photos ou plans (facultatif)",
      },
      {
        type: "comment",
        stepNumber: 8,
        title:
          "Souhaitez-vous ajouter des informations complémentaires concernant votre projet ? (facultatif",
      },
      {
        type: "email",
        stepNumber: 9,
        title: "Comment nos artisans peuvent vous contacter ?   ",
      },
      {
        type: "complete",
        stepNumber: 10,
        title: "Enregistrer un nouveau compte",
      },
    ],
  },
  // 2nd
  {
    name: "bangladesh television",
    id: 2,
    path: "habijabi",
    steps: [
      {
        title: "I love You",
        type: "text",
        stepNumber: 1,
        path: "post-service-request/Fenetre_porte",
      },
      {
        type: "checkBoxOptions",
        stepNumber: 2,
        title: "Quelle est la nature de vos travaux ?",
        options: [
          {
            id: 1,
            svg: "https://www.travaux.com/static/svg-icons/windowFrame.svg",
            name: "Installation neuve",
          },
          {
            id: 2,
            svg: "https://www.travaux.com/static/svg-icons/replacement.svg",
            name: "Remplacement",
          },
        ],
      },
      {
        type: "multiCheckBok",
        stepNumber: 3,
        title:
          "Quel type de matériau souhaitez-vous pour vos fenêtres ? (facultatif)",
        options: [
          {
            id: 1,
            svg: "https://www.travaux.com/static/svg-icons/aluminium.svg",
            name: "Aluminium",
          },
          {
            id: 2,
            svg: "https://www.travaux.com/static/svg-icons/wood.svg",
            name: "Bois",
          },
          {
            id: 3,
            svg: "https://www.travaux.com/static/svg-icons/pvc.svg",
            name: "PVC",
          },
          {
            id: 4,
            svg: "https://www.travaux.com/static/svg-icons/iron.svg",
            name: "Acier",
          },
          {
            id: 5,
            svg: "https://www.travaux.com/static/svg-icons/communication.svg",
            name: "Matériau a définir",
          },
          {
            id: 6,
            svg: "https://www.travaux.com/static/svg-icons/more.svg",
            name: "Autre",
          },
        ],
      },

      {
        type: "combinedTitleCheckBok",
        title:
          "Quand souhaitez-vous que le travail soit terminé ? (facultatif) ",
        stepNumber: 6,
        options: [
          {
            id: 1,
            name: "Urgent",
          },
          {
            id: 2,
            name: "Pas de date fixée",
          },
          {
            id: 3,
            name: "Dans moins de deux semaines",
          },
          {
            id: 4,
            name: 'Dans moins d"un m ',
          },
          {
            id: 5,
            name: "Dans moins de 6 mois",
          },
        ],
      },
      {
        type: "uploadImage",
        stepNumber: 7,
        title: "Photos ou plans (facultatif)",
      },
      {
        type: "comment",
        stepNumber: 8,
        title:
          "Souhaitez-vous ajouter des informations complémentaires concernant votre projet ? (facultatif",
      },
      {
        type: "email",
        stepNumber: 9,
        title: "Comment nos artisans peuvent vous contacter ?   ",
      },
      {
        type: "complete",
        stepNumber: 10,
        title: "Enregistrer un nouveau compte",
      },
    ],
  },
  // 3rd
  {
    name: "petits travaux de maçonnerie",
    id: 3,
    path: "petits-travaux-de-maconnerie",
    steps: [
      {
        title:
          "Décrivez votre projet et échangez avec les artisans près de chez vous.",
        type: "text",
        stepNumber: 1,
        // path: "post-service-request/Fenetre_porte",
      },
      {
        type: "checkBoxOptions",
        stepNumber: 2,
        title: "Quelle est la nature de vos travaux ? ",
        options: [
          {
            id: 1,
            svg: "https://www.travaux.com/static/svg-icons/renovations.svg",
            name: "Rénovation",
          },
          {
            id: 2,
            svg: "https://www.travaux.com/static/svg-icons/newBuild2.svg",
            name: "Installation neuve",
          },
          {
            id: 3,
            svg: "https://www.travaux.com/static/svg-icons/more.svg",
            name: "Autre",
          },
        ],
      },
      {
        type: "multiCheckBok",
        stepNumber: 3,
        title:
          "Dans quelle(s) pièce(s) souhaitez-vous réaliser vos travaux ? (facultatif)          ",
        options: [
          {
            id: 1,
            svg: "https://www.travaux.com/static/svg-icons/livingRoom.svg",
            name: "Salon",
          },
          {
            id: 2,
            svg: "https://www.travaux.com/static/svg-icons/bedroom.svg",
            name: "Chambre(s)",
          },
          {
            id: 3,
            svg: "https://www.travaux.com/static/svg-icons/toilet.svg",
            name: "Salle de bains ou toilettes",
          },
          {
            id: 4,
            svg: "https://www.travaux.com/static/svg-icons/kitchen.svg",
            name: "La cuisine",
          },
          {
            id: 5,
            svg: "https://www.travaux.com/static/svg-icons/attic.svg",
            name: "Combles",
          },
          {
            id: 6,
            svg: "https://www.travaux.com/static/svg-icons/basement.svg",
            name: "Sous-sol",
          },
          {
            id: 7,
            svg: "https://www.travaux.com/static/svg-icons/garage.svg",
            name: "Garage ou cabanon",
          },
          {
            id: 8,
            svg: "https://www.travaux.com/static/svg-icons/publicPark.svg",
            name: "Extérieur",
          },
          {
            id: 9,
            svg: "https://www.travaux.com/static/svg-icons/more.svg",
            name: "Sous-sol",
          },
        ],
      },
      {
        type: "uploadImage",
        stepNumber: 7,
        title: "Photos ou plans (facultatif)",
      },
      // {
      //   type: "comment",
      //   stepNumber: 8,
      //   title:
      //     "Souhaitez-vous ajouter des informations complémentaires concernant votre projet ? (facultatif",
      // },
      {
        type: "email",
        stepNumber: 9,
        title: "Comment nos artisans peuvent vous contacter ?   ",
      },
      {
        type: "complete",
        stepNumber: 10,
        title: "Enregistrer un nouveau compte",
      },
    ],
  },
];
