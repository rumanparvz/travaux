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
    
      },
      {
        type: "checkBox",
<<<<<<< HEAD
<<<<<<< HEAD
        stepNumber: 2,
        title: "Quelle est la nature de vos travaux   ?",
=======
=======
>>>>>>> noman_branch
   
        title: "Quelle est la nature de vos travaux ?",
>>>>>>> noman_branch
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
        type: "multipleCheckBox",

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
        type: "moreMultipleCheckBox",
 
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
        type: "optionsBox",
 
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
          {
            id: 6,
            check: "Plus de 5",
          },
        ],
      },
      {
        type: "titleCheckBox",
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
          "Souhaitez-vous ajouter des informations complémentaires concernant votre projet ? (facultatif)",
      },
      {
        type: "email",

        title: "Comment nos artisans peuvent vous contacter ?   ",
      },
      {
        type: "complete",
        title: "Enregistrer un nouveau compte",
      },
    ],
  },
  // 2nd
  {
    name: "Porte d'entrée / Blindage porte",
    id: 2,
    path: "porte-d-entree-blindage-porte",
    steps: [
      {
        title:
          "Décrivez votre projet et échangez avec les artisans près de chez vous. ",
        type: "text",
        stepNumber: 1,
      },

      {
        type: "checkBox",
        stepNumber: 2,
        title: "Quelle est la nature de vos travaux ? (facultatif)",
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
        type: "moreMultipleCheckBox",
        stepNumber: 3,
        title:
          "Dans quelle(s) pièce(s) souhaitez-vous réaliser vos travaux ? (facultatif) ",
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
            name: "Autre",
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
    name: "escaliers",
    path: "escaliers",
    id:3,
    steps: [
      {
        title:
          "Décrivez votre projet et échangez avec les artisans près de chez vous. ",
        type: "text",
      },

      {
        type: "checkBox",
        title:
          "Quelle est la nature de vos travaux ? (facultatif)",
        options: [
          {
            id: 1,
            svg: "https://www.travaux.com/static/svg-icons/renovations.svg",
            name: "Rénovation",
          },
          {
            id: 2,
            svg: "https://www.travaux.com/static/svg-icons/install.svg",
            name: "Installation neuve",
          },
          {
            id: 3,
            svg: "https://www.travaux.com/static/svg-icons/more.svg",
            name: "Autre",
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
            name: "Autre",
          },
        ],
      },
      {
        type: "multipleCheckBox",
        title: "Pour quel type de bâtiment ? (facultatif)  ",
        options: [
          {
            id: 1,
            svg: "https://www.travaux.com/static/svg-icons/apartmentBuilding.svg",
            name: "Appartement",
          },
          {
            id: 2,
            svg: "https://www.travaux.com/static/svg-icons/standaloneHouse.svg",
            name: "Maison individuelle",
          },
          {
            id: 3,
            svg: "https://www.travaux.com/static/svg-icons/commercialBuilding.svg",
            name: "Bureau",
          },
          {
            id: 4,
            svg: "https://www.travaux.com/static/svg-icons/house1Level.svg",
            name: "Commerce",
          },
          {
            id: 5,
            svg: "https://www.travaux.com/static/svg-icons/farmHouse.svg",
            name: "Immeuble",
          },
          {
            id: 6,
            svg: "https://www.travaux.com/static/svg-icons/industrialBuilding.svg",
            name: "Local industriel",
          },
          {
            id: 7,
            svg: "https://www.travaux.com/static/svg-icons/industrialBuilding.svg",
            name: "Usine",
          },
          {
            id: 8,
            svg: "https://www.travaux.com/static/svg-icons/hotel.svg",
            name: "Hôtel",
          },
          {
            id: 9,
            svg: "https://www.travaux.com/static/svg-icons/more.svg",
            name: "Autre",
          },
        ],
      },
      {
        type:'inputAndRadio',
        inputTItle:"Quelle est la hauteur de l'escalier à créer en centimètres ? (facultatif) ",
        subTItle:"Votre estimation aidera l'artisan à vous faire un devis pour votre projet. ",
        checkBoxTitle:"Où souhaitez-vous installer l'escalier ? ",
        options: [
          {
            id: 1,
            name: "Pour l'intérieur",
          },
          {
            id: 2,
            name: "Pour l'extérieur",
          },
    
        ],

      },
      {
        type: "moreMultipleCheckBox",
 
        title: "Quel type d'escalier souhaitez-vous ? (facultatif) ",
        options: [
          {
            id: 1,
            svg: "https://www.travaux.com/static/svg-icons/wood.svg",
            name: "Bois",
          },
          {
            id: 2,
            svg: "https://www.travaux.com/static/svg-icons/concrete.svg",
            name: "Béton",
          },
          {
            id: 3,
            svg: "https://www.travaux.com/static/svg-icons/iron.svg",
            name: "Aluminium ou métal",
          },
          {
            id: 4,
            svg: "https://www.travaux.com/static/svg-icons/marble.svg",
            name: "Marbre",
          },
          {
            id: 5,
            svg: "https://www.travaux.com/static/svg-icons/stone.svg",
            name: "En pierre",
          },
          {
            id: 6,
            svg: "https://www.travaux.com/static/svg-icons/communication.svg",
            name: "Matériau a définir",
          },
          {
            id: 7,
            svg: "https://www.travaux.com/static/svg-icons/more.svg",
            name: "Autre",
          }
        ],
      },
      {
        type: "doubleCheckBox",
   
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
        type: "titleCheckBox",
        title:
          "Quand souhaitez-vous que le travail soit terminé ? (facultatif)",
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
        title:
          "Souhaitez-vous ajouter des informations complémentaires concernant votre projet ? (facultatif)",
      },
      
      {
        type: "email",
        title: "Comment nos artisans peuvent vous contacter ?   ",
      },
      {
        type: "complete",
        title: "Enregistrer un nouveau compte",
      },
    ],
  },
  // four 
  {
    name:'Sciage et carottage (ouverture dans un mur)',
    path:'sciage-et-carottage',
    id:4,
    steps: [
      {
        title:
          "Décrivez votre projet et échangez avec les artisans près de chez vous. ",
        type: "text",
    
      },
      {
        type: "checkBox",
   
        title: "De quelle prestation avez-vous besoin ? (facultatif) ",
        options: [
          {
            id: 1,
            svg: "https://www.travaux.com/static/svg-icons/drill.svg",
            name: "Carottage (perçage)",
          },
          {
            id: 2,
            svg: "https://www.travaux.com/static/svg-icons/saw.svg",
            name: "Sciage",
          },
       
        ],
      },
      {
        type:'inputAndRadio',
        inputTItle:"Quelle est la hauteur de l'escalier à créer en centimètres ? (facultatif) ",
        subTItle:"Votre estimation aidera l'artisan à vous faire un devis pour votre projet. ",

      },

      {
        type: "titleCheckBox",
        title:
          "Quel type de matériau souhaitez-vous pour vos fenêtres ? (facultatif) ",
        options: [
          {
            id: 1,
            name: "Mur porteur",
          },
          {
            id: 2,
            name: "Mur non porteur",
          },
          {
            id: 3,
            name: "Les deux ",
          },
          {
            id: 4,
            name: 'Je ne sais pas ',
          },

        ],
      },
      {
        type:'doubleTitleRadio',
        title:'Quand souhaitez-vous que le travail soit terminé ? (facultatif)   ',
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
            name: 'Dans moins d"un moins ',
          },
          {
            id: 5,
            name: 'Dans moins de 6 mois',
          },

        ],
      },
      {
        type: "uploadImage",
        title: "Photos ou plans (facultatif)",
      },
      {
        type: "comment",
        stepNumber: 8,
        title:
          "Souhaitez-vous ajouter des informations complémentaires concernant votre projet ? (facultatif)",
      },
      {
        type: "email",

        title: "Comment nos artisans peuvent vous contacter ?   ",
      },
      {
        type: "complete",
        title: "Enregistrer un nouveau compte",
      },
    ]

  },
  //FIVE
  {
    name:'Installation ou rénovation couverture/toiture',
    path:'installation-renovation-couverture-toiture',
    id:4,
    steps: [
      {
        title:
          "Décrivez votre projet et échangez avec les artisans près de chez vous.",
        type: "text",
    
      },
      {
        type: "checkBox",
   
        title: "Quelle est la nature de vos travaux ? ",
        options: [
          {
            id: 1,
            svg: "https://www.travaux.com/static/svg-icons/renovations.svg",
            name: "Installation neuve",
          },
          {
            id: 2,
            svg: "https://www.travaux.com/static/svg-icons/replacement.svg",
            name: "Remplacement",
          },
          {
            id:3,
            svg:"https://www.travaux.com/static/svg-icons/install.svg",
            name:'Réparation'
          },
          {
            id: 4,
            svg: "https://www.travaux.com/static/svg-icons/paintRoller.svg",
            name: "Peinture ",
          },
          {
            id: 5,
            svg: "https://www.travaux.com/static/svg-icons/mop.svg",
            name: "Nettoyage",
          },
          {
            id:6,
            svg:"https://www.travaux.com/static/svg-icons/helmet.svg",
            name:'Traitement'
          },
          {
            id:7,
            svg:'https://www.travaux.com/static/svg-icons/more.svg',
            name:"Autre"
          }
       
        ],
      },
      {
        type: "doubleCheckBox",
        title: "Pour quel type de toit ? (facultatif) Pour quel type de bâtiment ? ",
        options: [
          {
            id: 1,
            svg: "https://www.travaux.com/static/svg-icons/house1Level.svg",
            name: "Plat",
          },
          {
            id: 2,
            svg: "https://www.travaux.com/static/svg-icons/standaloneHouse.svg",
            name: "Incliné",
          },
          {
            id: 3,
            svg: "https://www.travaux.com/static/svg-icons/communication.svg",
            name: "A définir",
          },
          {
            id: 4,
            svg: "https://www.travaux.com/static/svg-icons/more.svg",
            name: "Autre",
          },


        ],
      },
      {
        type:'inputAndRadio',
        inputTItle:"Quelle est la hauteur de l'escalier à créer en centimètres ? (facultatif) ",
        subTItle:"Votre estimation aidera l'artisan à vous faire un devis pour votre projet. ",

      },

      {
        type: "titleCheckBox",
        title:
          "Quel type de matériau souhaitez-vous pour vos fenêtres ? (facultatif) ",
        options: [
          {
            id: 1,
            name: "Mur porteur",
          },
          {
            id: 2,
            name: "Mur non porteur",
          },
          {
            id: 3,
            name: "Les deux ",
          },
          {
            id: 4,
            name: 'Je ne sais pas ',
          },

        ],
      },
      {
        type:'doubleTitleRadio',
        title:'Quand souhaitez-vous que le travail soit terminé ? (facultatif)   ',
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
            name: 'Dans moins d"un moins ',
          },
          {
            id: 5,
            name: 'Dans moins de 6 mois',
          },

        ],
      },
      {
        type: "titleCheckBox",
        title:
          "Quel type de couverture ? (facultatif) ",
        options: [
          {
            id: 1,
            name: "Tuiles",
          },
          {
            id: 2,
            name: "Zinc",
          },
          {
            id: 3,
            name: "Ardoise",
          },
          {
            id: 4,
            name: 'Chaume ',
          },
          {
            id:5,
            name:'Toiture terrasse'
          },
          {
            id:6,
            name:'Bardeau'
          },
          {
            id:7,
            name:'Acier'
          },
          {
            id:8,
            name:'A définir'
          },
          {
            id:9,
            name:'Autre'
          }

        ],
      },
      {
        type: "uploadImage",
        title: "Photos ou plans (facultatif)",
      },
      {
        type: "comment",
        stepNumber: 8,
        title:
          "Souhaitez-vous ajouter des informations complémentaires concernant votre projet ? (facultatif)",
      },
      {
        type: "email",

        title: "Comment nos artisans peuvent vous contacter ?   ",
      },
      {
        type: "complete",
        title: "Enregistrer un nouveau compte",
      },
    ]

  }
];
// tarak129@