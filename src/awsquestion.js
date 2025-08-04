// ✅ Mets ici toutes tes questions avec leurs bonnes réponses comme dans ton PDF
const rawQuestions = [
  
   {
    "question": "Une entreprise prévoit d'utiliser un appareil Amazon Snowball Edge pour transférer des fichiers vers le cloud AWS. Quelles activités liées à un appareil Snowball Edge sont disponibles gratuitement pour l'entreprise ?",
    "options": [
      "tion de l'appareil SnoUtilisawball Edge pendant une période de 10 jours",
      "Le transfert de données hors d'Amazon S3 vers l'appliance Snowball Edge",
      "Le transfert de données de l'appliance Snowball Edge vers Amazon S3",
      "Utilisation quotidienne de l'appareil Snowball Edge après 10 jours"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise a déployé des applications sur des instances Amazon EC2. Elle doit évaluer les vulnérabilités de ses applications et identifier les déploiements d'infrastructure non conformes aux bonnes pratiques. Quel service AWS peut-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "Conseiller de confiance AWS",
      "Inspecteur Amazon",
      "Configuration AWS",
      "Amazon GuardDuty"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise dispose d'un groupe centralisé d'utilisateurs dont les besoins en stockage de fichiers volumineux dépassent l'espace disponible sur site. Elle souhaite étendre ses capacités de stockage de fichiers pour ce groupe tout en conservant les avantages du partage de contenu local en termes de performances. Quelle est la solution AWS la plus performante sur le plan opérationnel pour ce scénario ? compartiment à l'aide d'un utilitaire de montage de système de fichiers S3. poste de travail de chaque utilisateur à la passerelle de fichiers. Créez un compte Amazon WorkDocs pour chaque utilisateur. Amazon Elastic Block Store (Amazon EBS). Partagez le volume EBS directement avec les utilisateurs.",
    "options": [
      "Créez un compartiment Amazon S3 pour chaque utilisateur. Montez chaque",
      "Configurez et déployez une passerelle de fichiers AWS Storage Gateway. Connectez le",
      "Déplacez l'environnement de travail de chaque utilisateur vers Amazon WorkSpaces.",
      "Déployez une instance Amazon EC2 et attachez-lui un volume IOPS provisionné"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Conformément aux meilleures pratiques de sécurité, comment une instance Amazon EC2 doit-elle avoir accès à un compartiment Amazon S3 ? l'application, puis téléchargez le fichier. l'instance EC2, lisez les clés, puis téléchargez le fichier. au téléchargement du fichier. télécharger à tout moment.",
    "options": [
      "Codez en dur la clé secrète et la clé d'accès d'un utilisateur IAM directement dans",
      "Stockez la clé secrète et la clé d'accès de l'utilisateur IAM dans un fichier texte sur",
      "Demandez à l’instance EC2 d’assumer un rôle pour obtenir les privilèges nécessaires",
      "Modifiez la politique du compartiment S3 afin que n’importe quel service puisse y"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quelle option est une perspective qui inclut les capacités fondamentales de l’AWS Cloud Adoption Framework (AWS CAF) ?",
    "options": [
      "Durabilité",
      "Efficacité des performances",
      "Gouvernance",
      "Fiabilité"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise exploite et gère son propre environnement Docker sur des instances Amazon EC2. Elle recherche une alternative pour gérer la taille des clusters, la planification et la maintenance de l'environnement. Quel service AWS répond à ces exigences ?",
    "options": [
      "AWS Lambda",
      "Amazon RDS",
      "AWS Fargate",
      "Amazone Athéna"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise souhaite exploiter une base de données NoSQL sur des instances Amazon EC2. Quelle tâche incombe à AWS dans ce scénario ?",
    "options": [
      "Mettre à jour le système d’exploitation invité des instances EC2.",
      "Maintenir une haute disponibilité au niveau de la couche de base de données.",
      "Corrigez l’infrastructure physique qui héberge les instances EC2.",
      "Configurer le pare-feu du groupe de sécurité."
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quels services ou outils AWS peuvent identifier les opportunités de dimensionnement des instances Amazon EC2 ? (Choisissez deux options.) E. Optimiseur de calcul AWS",
    "options": [
      "Explorateur de coûts AWS",
      "Conducteur de facturation AWS",
      "Amazon CodeGuru",
      "Amazon SageMaker"
    ],
    "correctAnswers": [
      0,
      4
    ]
  },
  {
    "question": "Parmi les avantages suivants, lesquels sont liés à l'utilisation d'AWS Trusted Advisor ? (Choisissez deux options.) E. Mise en œuvre du balisage forcé sur les ressources AWS",
    "options": [
      "Fournir une orchestration de conteneurs hautes performances",
      "Création et rotation des clés de chiffrement",
      "Détecter les ressources sous-utilisées pour réduire les coûts",
      "Améliorer la sécurité en surveillant de manière proactive l'environnement AWS"
    ],
    "correctAnswers": [
      2,
      3
    ]
  },
  {
    "question": "Lequel des éléments suivants constitue un avantage dont bénéficient les utilisateurs lorsqu’ils déplacent des charges de travail sur site vers le cloud AWS ?",
    "options": [
      "Élimination des dépenses d'exploitation et de maintenance des centres de données",
      "Des remises de prix identiques à celles des fournisseurs de matériel",
      "Distribution de tous les contrôles opérationnels à AWS",
      "Élimination des dépenses opérationnelles"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise souhaite gérer ses services informatiques déployés et gouverner ses modèles d'infrastructure en tant que code (IaC). Quel service AWS répondra à cette exigence ?",
    "options": [
      "Explorateur de ressources AWS",
      "Catalogue de services AWS",
      "Organisations AWS",
      "Gestionnaire des systèmes AWS"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel service ou outil AWS aide les utilisateurs à visualiser, comprendre et gérer leurs dépenses et leur utilisation au fil du temps ?",
    "options": [
      "Organisations AWS",
      "Calculateur de prix AWS",
      "Explorateur de coûts AWS",
      "Catalogue de services AWS"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise utilise une plateforme de données centralisée pour gérer plusieurs types de données pour ses clients. Elle souhaite utiliser les services AWS pour découvrir, transformer et visualiser les données. Quelle combinaison de services AWS l'entreprise devrait-elle utiliser pour répondre à ces besoins ? (Choisissez deux réponses.) E. Base de données Amazon Quantum Ledger (Amazon QLDB)",
    "options": [
      "Colle AWS",
      "Système de fichiers élastique Amazon (Amazon EFS)",
      "Amazon Redshift",
      "Amazon QuickSight"
    ],
    "correctAnswers": [
      0,
      3
    ]
  },
  {
    "question": "Une entreprise internationale souhaite migrer ses applications tierces vers le cloud AWS. Elle souhaite bénéficier de l'aide d'une équipe internationale d'experts pour réaliser cette migration plus rapidement et de manière plus fiable, conformément aux bonnes pratiques internes d'AWS. Quel service ou ressource AWS répondra à ces exigences ?",
    "options": [
      "Assistance AWS",
      "Services professionnels AWS",
      "Assistant de lancement AWS",
      "Services gérés AWS (AMS)"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une plateforme d'apprentissage en ligne doit exécuter une application pendant deux mois par an. L'application sera déployée sur des instances Amazon EC2. Toute interruption de service doit être évitée pendant ces deux mois. Quelle option d'achat EC2 répondra le mieux à ces exigences ?",
    "options": [
      "Instances réservées",
      "Hôtes dédiés",
      "Instances ponctuelles",
      "Instances à la demande"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Un développeur souhaite déployer rapidement une application sur AWS sans créer manuellement les ressources nécessaires. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Amazon EC2",
      "AWS Elastic Beanstalk",
      "AWS CodeBuild",
      "Amazon Personnaliser"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise stocke des données clients sensibles dans un compartiment Amazon S3. Elle souhaite protéger ces données contre toute suppression ou écrasement accidentel. Quelle fonctionnalité S3 doit-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "Règles du cycle de vie S3",
      "Gestion des versions S3",
      "Politiques de compartiment S3",
      "Cryptage côté serveur S3"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel service AWS offre la possibilité de gérer l’infrastructure en tant que code ?",
    "options": [
      "AWS CodePipeline",
      "AWS CodeDeploy",
      "AWS Direct Connect",
      "AWS CloudFormation"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise de jeux en ligne doit choisir une option d'achat pour exploiter ses instances Amazon EC2 pendant un an. Le trafic web est constant et toute augmentation de trafic est prévisible. Les instances EC2 doivent être en ligne et disponibles sans interruption. Quelle option d'achat d'instance EC2 répondra le mieux à ces exigences ?",
    "options": [
      "Instances à la demande",
      "Instances réservées",
      "Instances ponctuelles",
      "Flotte Spot"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel service ou fonctionnalité AWS permet à un utilisateur d’établir une connexion réseau dédiée entre le centre de données sur site d’une entreprise et le cloud AWS ?",
    "options": [
      "AWS Direct Connect",
      "Appairage VPC",
      "VPN AWS",
      "Route 53 de l'Amazone"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quelle option est un emplacement physique de l’infrastructure mondiale AWS ?",
    "options": [
      "AWS DataSync",
      "Région AWS",
      "Amazon Connect",
      "Organisations AWS"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise souhaite protéger ses informations, systèmes et actifs AWS Cloud tout en évaluant et en atténuant les risques. Quel pilier du cadre AWS Well-Architected est soutenu par ces objectifs ?",
    "options": [
      "Fiabilité",
      "Sécurité",
      "Excellence opérationnelle",
      "Efficacité des performances"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel est l’intérêt d’avoir une passerelle Internet au sein d’un VPC ?",
    "options": [
      "Pour créer une connexion VPN au VPC",
      "Pour permettre la communication entre le VPC et Internet",
      "Imposer des contraintes de bande passante sur le trafic Internet",
      "Pour équilibrer la charge du trafic provenant d'Internet sur les instances Amazon EC2"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise exploite une application monolithique sur site, peu évolutive et difficile à maintenir. Elle prévoit de migrer l'application vers AWS et de la diviser en microservices. Quelle bonne pratique du framework AWS Well-Architected Framework l'entreprise suit-elle avec ce plan ?",
    "options": [
      "Intégrez les tests fonctionnels dans le cadre du déploiement AWS.",
      "Utilisez l’automatisation pour déployer les modifications.",
      "Déployez l’application sur plusieurs emplacements.",
      "Implémenter des dépendances faiblement couplées."
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise possède un compte AWS. Elle souhaite auditer ses mots de passe et accéder aux informations de rotation des clés à des fins de conformité. Quel service ou outil AWS répondra à cette exigence ?",
    "options": [
      "Analyseur d'accès IAM",
      "Artefact AWS",
      "Rapport d'accréditation IAM",
      "Gestionnaire d'audit AWS"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise souhaite recevoir une notification lorsqu'un seuil de coût AWS spécifique est atteint. Quels services ou outils AWS peut-elle utiliser pour répondre à cette exigence ? (Choisissez deux réponses.) E. Rapport sur les coûts et l'utilisation d'AWS",
    "options": [
      "Service de file d'attente simple Amazon (Amazon SQS)",
      "Budgets AWS",
      "Explorateur de coûts",
      "Amazon CloudWatch"
    ],
    "correctAnswers": [
      1,
      3
    ]
  },
  {
    "question": "Quel service ou ressource AWS fournit des réponses aux questions les plus fréquemment posées en matière de sécurité qu'AWS reçoit de ses utilisateurs ?",
    "options": [
      "Artefact AWS",
      "Amazon Connect",
      "Chatbot AWS",
      "Centre de connaissances AWS"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quelles tâches relèvent de la responsabilité du client, selon le modèle de responsabilité partagée d'AWS ? (Choisissez deux réponses.) E. Sélectionnez les instances Amazon EC2 sur lesquelles exécuter AWS Lambda.",
    "options": [
      "Configurez le pare-feu du groupe de sécurité fourni par AWS.",
      "Classer les actifs de l'entreprise dans le cloud AWS.",
      "Déterminez les zones de disponibilité à utiliser pour les compartiments Amazon S3.",
      "Corrigez ou mettez à niveau Amazon DynamoDB."
    ],
    "correctAnswers": [
      0,
      1
    ]
  },
  {
    "question": "Lesquels des éléments suivants constituent les piliers du cadre AWS Well-Architected ? (Choisissez deux réponses.) E. Excellence opérationnelle",
    "options": [
      "Disponibilité",
      "Fiabilité",
      "Évolutivité",
      "Conception réactive"
    ],
    "correctAnswers": [
      1,
      4
    ]
  },
  {
    "question": "Quel service ou fonctionnalité AWS est utilisé pour envoyer des messages texte et des e-mails à partir d'applications distribuées ?",
    "options": [
      "Service de notification simple d'Amazon (Amazon SNS)",
      "Service de messagerie électronique simple d'Amazon (Amazon SES)",
      "Alertes Amazon CloudWatch",
      "Service de file d'attente simple Amazon (Amazon SQS)"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Un utilisateur a besoin d'un accès programmatique aux ressources AWS via l'interface de ligne de commande AWS ou l'API AWS. Quelle option lui fournira l'accès approprié ?",
    "options": [
      "Inspecteur Amazon",
      "Clés d'accès",
      "Clés publiques SSH",
      "Clés AWS Key Management Service (AWS KMS)"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise exécute des milliers de simulations simultanées avec AWS Batch. Chaque simulation est sans état, tolérante aux pannes et dure jusqu'à 3 heures. Quel modèle de tarification permet à l'entreprise d'optimiser ses coûts et de répondre à ces exigences ?",
    "options": [
      "Instances réservées",
      "Instances ponctuelles",
      "Instances à la demande",
      "Instances dédiées"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Que signifie le concept d'agilité dans le cloud computing AWS ? (Choisissez deux réponses.) E. Le faible coût d'entrée dans le cloud computing",
    "options": [
      "La vitesse à laquelle les ressources AWS sont implémentées",
      "La vitesse à laquelle AWS crée de nouvelles régions AWS",
      "La capacité d'expérimenter rapidement",
      "L'élimination des capacités gaspillées"
    ],
    "correctAnswers": [
      0,
      2
    ]
  },
  {
    "question": "Une entreprise doit bloquer les attaques par injection SQL. Quel service ou fonctionnalité AWS peut répondre à cette exigence ?",
    "options": [
      "AWS WAF",
      "AWS Shield",
      "Listes de contrôle d'accès réseau",
      "Groupes de sécurité"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quel service ou fonctionnalité AWS identifie si un compartiment Amazon S3 ou un rôle IAM a été partagé avec une entité externe ?",
    "options": [
      "Catalogue de services AWS",
      "Gestionnaire des systèmes AWS",
      "Analyseur d'accès AWS IAM",
      "Organisations AWS"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Un praticien du cloud doit obtenir des rapports de conformité AWS avant de migrer un environnement vers le cloud AWS. Comment générer ces rapports ?",
    "options": [
      "Contactez l’équipe de conformité AWS.",
      "Téléchargez les rapports depuis AWS Artifact.",
      "Ouvrez un dossier auprès du support AWS.",
      "Générez les rapports avec Amazon Macie."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise de commerce électronique a migré son infrastructure informatique d'un centre de données sur site vers le cloud AWS. Quel est le coût directement imputable à l'entreprise ?",
    "options": [
      "Coût des licences de logiciels d'application",
      "Coût de l'infrastructure matérielle sur AWS",
      "Coût de l'énergie pour les serveurs AWS",
      "Coût de la sécurité physique du centre de données AWS"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise met en place AWS Identity and Access Management (IAM) sur un compte AWS. Quelle recommandation est conforme aux bonnes pratiques de sécurité IAM ? puissent accéder aux ressources dont ils ont besoin. processus de connexion. applications de production.",
    "options": [
      "Utilisez les clés d’accès de l’utilisateur root du compte pour les tâches administratives.",
      "Accordez des autorisations étendues afin que tous les employés de l’entreprise",
      "Activez l’authentification multifacteur (MFA) pour plus de sécurité pendant le",
      "Évitez la rotation des informations d’identification pour éviter les problèmes dans les"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "L'élasticité dans le cloud AWS fait référence à laquelle des propositions suivantes ? (Choisissez deux options.) E. La facilité avec laquelle les ressources peuvent être obtenues lorsqu'elles sont nécessaires",
    "options": [
      "À quelle vitesse une instance Amazon EC2 peut-elle être redémarrée ?",
      "La capacité d'adapter la taille des ressources à l'évolution de la demande",
      "La quantité maximale de RAM qu'une instance Amazon EC2 peut utiliser",
      "Le modèle de facturation à l'utilisation"
    ],
    "correctAnswers": [
      1,
      4
    ]
  },
  {
    "question": "Quel service permet aux clients d’auditer les appels API dans leurs comptes AWS ?",
    "options": [
      "AWS CloudTrail",
      "Conseiller de confiance AWS",
      "Inspecteur Amazon",
      "AWS X-Ray"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quelle est la responsabilité du client lors de l’utilisation d’AWS Lambda selon le modèle de responsabilité partagée AWS ?",
    "options": [
      "Gestion du code dans la fonction Lambda",
      "Confirmer que le matériel fonctionne dans le centre de données",
      "Correction du système d'exploitation",
      "Arrêt des fonctions Lambda lorsqu'elles ne sont plus utilisées"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise dispose de 5 To de données stockées sur Amazon S3. Elle prévoit d'effectuer occasionnellement des requêtes sur ces données à des fins d'analyse. Quel service AWS devrait-elle utiliser pour exécuter ces requêtes de la manière la plus rentable ?",
    "options": [
      "Amazon Redshift",
      "Amazone Athéna",
      "Amazon Kinesis",
      "Amazon RDS"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel service AWS peut être utilisé sans frais supplémentaires ?",
    "options": [
      "Amazon SageMaker",
      "Configuration AWS",
      "Organisations AWS",
      "Amazon CloudWatch"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quelle capacité d’AWS Cloud Adoption Framework (AWS CAF) appartient à la perspective des personnes ?",
    "options": [
      "Architecture des données",
      "Gestion d'événements",
      "Maîtrise du cloud",
      "Partenariat stratégique"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise souhaite s'engager à l'avance à utiliser ses instances Amazon EC2 de production en échange d'une réduction du coût global. Quelles options tarifaires répondent à ces exigences avec le coût le plus bas ? (Choisissez deux réponses.) E. Hôtes dédiés",
    "options": [
      "Instances ponctuelles",
      "Instances à la demande",
      "Instances réservées",
      "Plans d'épargne"
    ],
    "correctAnswers": [
      2,
      3
    ]
  },
  {
    "question": "Une entreprise souhaite migrer ses bases de données relationnelles locales vers le cloud AWS. Elle souhaite utiliser une infrastructure aussi proche que possible de son emplacement géographique actuel. Quel service ou ressource AWS doit-elle utiliser pour sélectionner sa zone de déploiement Amazon RDS ?",
    "options": [
      "Amazon Connect",
      "Longueur d'onde AWS",
      "Régions AWS",
      "AWS Direct Connect"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise envisage d'utiliser le cloud AWS et doit estimer les coûts d'un projet avant de mettre en place l'infrastructure. Quel service ou fonctionnalité AWS peut être utilisé pour estimer les coûts avant le déploiement ?",
    "options": [
      "Offre gratuite AWS",
      "Calculateur de prix AWS",
      "Gestion de la facturation et des coûts AWS",
      "Rapport sur les coûts et l'utilisation d'AWS"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise développe une application qui doit diffuser des images et des vidéos dans le monde entier avec une latence minimale. Quelle approche peut-elle adopter pour y parvenir de manière rentable ?",
    "options": [
      "Diffusez le contenu via Amazon CloudFront.",
      "Stockez le contenu sur Amazon S3 et activez la réplication interrégionale S3.",
      "Implémentez un VPN sur plusieurs régions AWS.",
      "Diffusez le contenu via AWS PrivateLink."
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quelle option est un avantage des économies d’échelle basées sur les avantages du cloud computing ?",
    "options": [
      "La possibilité d'échanger des dépenses variables contre des dépenses fixes",
      "Vitesse et agilité accrues",
      "Coûts variables inférieurs aux coûts fixes",
      "Augmentation des coûts opérationnels dans les centres de données"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Lequel des éléments suivants est un cadre de développement logiciel qu’une entreprise peut utiliser pour définir des ressources cloud sous forme de code et provisionner les ressources via AWS CloudFormation ?",
    "options": [
      "AWS CLI",
      "Centre de développement AWS",
      "Kit de développement cloud AWS (AWS CDK)",
      "AWS CodeStar"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise développe une application utilisant plusieurs services AWS. L'application doit utiliser des identifiants temporaires à privilèges limités pour s'authentifier auprès d'autres API AWS. Quel service ou fonctionnalité AWS l'entreprise doit-elle utiliser pour répondre à ces exigences d'authentification ?",
    "options": [
      "Passerelle API Amazon",
      "Utilisateurs IAM",
      "Service de jeton de sécurité AWS (AWS STS)",
      "Profils d'instance IAM"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel service AWS est un service de gestion de la posture de sécurité du cloud (CSPM) qui regroupe les alertes de divers services AWS et produits partenaires dans un format standardisé ?",
    "options": [
      "Centre de sécurité AWS",
      "Conseiller de confiance AWS",
      "Amazon EventBridge",
      "Amazon GuardDuty"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quel service AWS est toujours fourni gratuitement ?",
    "options": [
      "Amazon S3",
      "Gestion des identités et des accès AWS (IAM)",
      "Équilibreurs de charge élastiques",
      "AWS WAF"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Afin de réduire ses coûts, une entreprise envisage de migrer une base de données NoSQL vers AWS. Quel service AWS est entièrement géré et peut adapter automatiquement sa capacité de débit pour répondre aux exigences de la base de données ?",
    "options": [
      "Amazon Redshift",
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon RDS"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise utilise Amazon DynamoDB. Quelle tâche lui incombe, selon le modèle de responsabilité partagée d'AWS ?",
    "options": [
      "Corrigez le système d'exploitation.",
      "Provisionner les hôtes.",
      "Gérer les autorisations d'accès à la base de données.",
      "Sécuriser le système d'exploitation."
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise dispose d'un environnement AWS de test. Elle prévoit de tester une application dans AWS. Les tests applicatifs peuvent être interrompus et ne nécessitent pas d'exécution continue. Quelle option d'achat Amazon EC2 répondra le mieux à ces exigences ?",
    "options": [
      "Instances à la demande",
      "Instances dédiées",
      "Instances ponctuelles",
      "Instances réservées"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel service AWS offre aux utilisateurs la possibilité de découvrir et de protéger les données sensibles stockées dans les compartiments Amazon S3 ?",
    "options": [
      "Amazon Macie",
      "Détective Amazon",
      "Amazon GuardDuty",
      "Analyseur d'accès AWS IAM"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Lequel des services suivants peut être utilisé pour bloquer le trafic réseau vers une instance ? (Choisissez deux réponses.) E. AWS CloudTrail",
    "options": [
      "Groupes de sécurité",
      "Journaux de flux Amazon Virtual Private Cloud (Amazon VPC)",
      "Listes de contrôle d'accès réseau",
      "Amazon CloudWatch"
    ],
    "correctAnswers": [
      0,
      2
    ]
  },
  {
    "question": "Quel service AWS peut identifier quand une instance Amazon EC2 a été résiliée ?",
    "options": [
      "Gestion des identités et des accès AWS (IAM)",
      "AWS CloudTrail",
      "Optimiseur de calcul AWS",
      "Amazon EventBridge"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Laquelle des bases de données suivantes est entièrement gérée et compatible avec MySQL ?",
    "options": [
      "Amazon S3",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Aurora"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quel service AWS prend en charge une architecture hybride qui offre aux utilisateurs la possibilité d’étendre l’infrastructure AWS, les services AWS, les API et les outils aux centres de données, aux environnements de colocation ou aux installations sur site ?",
    "options": [
      "Motoneige AWS",
      "Zones locales AWS",
      "Avant-postes AWS",
      "AWS Fargate"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel service AWS peut exécuter une base de données PostgreSQL gérée qui fournit le traitement des transactions en ligne (OLTP) ?",
    "options": [
      "Amazon DynamoDB",
      "Amazone Athéna",
      "Amazon RDS",
      "Amazon EMR"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise souhaite fournir des bureaux virtuels et des applications Windows gérés à ses employés distants via des connexions réseau sécurisées. Quels services AWS peut-elle utiliser pour répondre à ces besoins ? (Choisissez deux réponses.) E. Amazon Elastic Container Service (Amazon ECS)",
    "options": [
      "Amazon Connect",
      "Amazon AppStream 2.0",
      "Espaces de travail Amazon",
      "VPN site à site AWS"
    ],
    "correctAnswers": [
      1,
      2
    ]
  },
  {
    "question": "Laquelle des bases de données suivantes est entièrement gérée et compatible avec MySQL ?",
    "options": [
      "Amazon S3",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Aurora"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quel service AWS prend en charge une architecture hybride qui offre aux utilisateurs la possibilité d’étendre l’infrastructure AWS, les services AWS, les API et les outils aux centres de données, aux environnements de colocation ou aux installations sur site ?",
    "options": [
      "Motoneige AWS",
      "Zones locales AWS",
      "Avant-postes AWS",
      "AWS Fargate"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel service AWS peut exécuter une base de données PostgreSQL gérée qui fournit le traitement des transactions en ligne (OLTP) ?",
    "options": [
      "Amazon DynamoDB",
      "Amazone Athéna",
      "Amazon RDS",
      "Amazon EMR"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise souhaite fournir des bureaux virtuels et des applications Windows gérés à ses employés distants via des connexions réseau sécurisées. Quels services AWS peut-elle utiliser pour répondre à ces besoins ? (Choisissez deux réponses.) E. Amazon Elastic Container Service (Amazon ECS)",
    "options": [
      "Amazon Connect",
      "Amazon AppStream 2.0",
      "Espaces de travail Amazon",
      "VPN site à site AWS"
    ],
    "correctAnswers": [
      1,
      2
    ]
  },
  {
    "question": "Quel service AWS fournit un accès en ligne de commande aux outils et ressources AWS directement à partir d’un navigateur Web ?",
    "options": [
      "AWS CloudHSM",
      "AWS CloudShell",
      "Espaces de travail Amazon",
      "Carte du cloud AWS"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Un ingénieur réseau doit créer une architecture cloud hybride connectant ses réseaux locaux au cloud AWS via AWS Direct Connect. L'entreprise possède quelques VPC dans une seule région AWS et prévoit d'en multiplier le nombre à plusieurs centaines au fil du temps. Quel service ou fonctionnalité AWS l'ingénieur doit-il utiliser pour simplifier et faire évoluer cette connectivité à mesure que le nombre de VPC augmente ?",
    "options": [
      "Points de terminaison VPC",
      "Passerelle de transit AWS",
      "Route 53 de l'Amazone",
      "Gestionnaire de secrets AWS"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise souhaite évaluer son état de préparation opérationnelle. Elle souhaite également identifier et atténuer les risques opérationnels avant le lancement d'un nouveau produit. Quel plan de support AWS propose des conseils et une assistance pour ce type d'événement, sans frais supplémentaires ?",
    "options": [
      "Assistance commerciale AWS",
      "Support de base AWS",
      "Assistance aux développeurs AWS",
      "Assistance AWS Enterprise"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise souhaite établir un calendrier de rotation des identifiants des utilisateurs de la base de données. Quel service AWS prendra en charge cette exigence avec le MOINS de frais opérationnels ?",
    "options": [
      "Gestionnaire des systèmes AWS",
      "Gestionnaire de secrets AWS",
      "Gestionnaire de licences AWS",
      "Services gérés AWS"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel service ou fonctionnalité AWS peut être utilisé pour créer une connexion privée entre une charge de travail sur site et une charge de travail AWS Cloud ?",
    "options": [
      "Route 53 de l'Amazone",
      "Amazon Macie",
      "AWS Direct Connect",
      "AWS PrivateLink"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel service AWS est utilisé pour fournir le cryptage pour Amazon EBS ?",
    "options": [
      "Gestionnaire de certificats AWS",
      "Gestionnaire des systèmes AWS",
      "AWS KMS",
      "Configuration AWS"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise souhaite gérer ses ressources cloud AWS via une interface web. Quel service AWS répondra à ce besoin ?",
    "options": [
      "Console de gestion AWS",
      "AWS CLI",
      "Kit de développement logiciel (SDK) AWS",
      "AWS Cloud9"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Parmi les avantages suivants, lesquels offrent le Cloud AWS ? (Choisissez deux réponses.) E. Surprovisionnement pour garantir la capacité",
    "options": [
      "Échangez les dépenses variables contre des dépenses en capital",
      "Économies d'échelle élevées",
      "Lancement mondial en quelques minutes",
      "Se concentrer sur la gestion de l'infrastructure matérielle"
    ],
    "correctAnswers": [
      1,
      2
    ]
  },
  {
    "question": "Quel avantage AWS Cloud démontre la capacité d’une architecture à résister aux pannes avec un temps d’arrêt minimal ?",
    "options": [
      "Agilité",
      "Élasticité",
      "Évolutivité",
      "Haute disponibilité"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Un développeur doit maintenir une infrastructure d'environnement de développement et une infrastructure d'environnement de production reproductibles. Quel service AWS doit-il utiliser pour répondre à ces exigences ?",
    "options": [
      "Station terrestre AWS",
      "AWS Shield",
      "AWS IoT Device Defender",
      "AWS CloudFormation"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quelle tâche relève de la responsabilité du client, selon le modèle de responsabilité partagée AWS ?",
    "options": [
      "Maintenir la sécurité du cloud AWS.",
      "Configurer les pare-feu et les réseaux.",
      "Corrigez le système d’exploitation des instances Amazon RDS.",
      "Mettre en œuvre des contrôles physiques et environnementaux."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel service AWS permet de fournir des applications hautement disponibles avec un basculement rapide pour les architectures multi-régions et multi-AZ ?",
    "options": [
      "AWS WAF",
      "Accélérateur mondial AWS",
      "AWS Shield",
      "AWS Direct Connect"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise possède un ensemble d'applications de commerce électronique. Ces applications doivent pouvoir s'échanger des messages. Quel service AWS répond à cette exigence ?",
    "options": [
      "Mise à l'échelle automatique AWS",
      "Équilibrage de charge élastique",
      "Service de file d'attente simple Amazon (Amazon SQS)",
      "Flux de données Amazon Kinesis"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quels sont les avantages de la facturation consolidée pour les services AWS Cloud ? (Choisissez deux réponses.) E. Création de budget personnalisé de coûts et d'utilisation",
    "options": [
      "Remises sur volume",
      "Des frais supplémentaires minimes pour l'utilisation",
      "Une facture pour plusieurs comptes",
      "Options de paiement échelonné"
    ],
    "correctAnswers": [
      0,
      2
    ]
  },
  {
    "question": "Un utilisateur souhaite consulter tous les compartiments Amazon S3 avec leurs listes de contrôle d'accès et leurs stratégies dans la console S3. Quel service ou ressource AWS répond à cette exigence ?",
    "options": [
      "Points d'accès multirégionaux S3",
      "Objectif de stockage S3",
      "Centre d'identité AWS IAM (AWS Single Sign-On)",
      "Analyseur d'accès pour S3"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quelle est la meilleure ressource pour un utilisateur pour trouver des informations et des rapports liés à la conformité sur AWS ?",
    "options": [
      "Artefact AWS",
      "Place de marché AWS",
      "Inspecteur Amazon",
      "Assistance AWS"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quel service AWS permet aux entreprises de déployer une application à proximité des utilisateurs finaux ?",
    "options": [
      "Amazon CloudFront",
      "Mise à l'échelle automatique AWS",
      "AWS AppSync",
      "Route 53 de l'Amazone"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quel service ou fonctionnalité AWS améliore les performances du réseau en envoyant le trafic via l’infrastructure réseau mondiale AWS ?",
    "options": [
      "Tableau des itinéraires",
      "Passerelle de transit AWS",
      "Accélérateur mondial AWS",
      "Amazon VPC"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel service AWS fournit un stockage d’objets hautement durable ?",
    "options": [
      "Amazon S3",
      "Système de fichiers élastique Amazon (Amazon EFS)",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon FSx"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quelle responsabilité appartient à AWS lorsqu'une entreprise héberge ses bases de données sur des instances Amazon EC2 ?",
    "options": [
      "Sauvegardes de bases de données",
      "Correctifs logiciels de base de données",
      "Correctifs du système d'exploitation",
      "Installations de systèmes d'exploitation"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Parmi les avantages suivants, lesquels sont liés au passage au cloud AWS ? (Choisissez deux réponses.) E. Ne vous souciez plus des contrôles d'accès des utilisateurs.",
    "options": [
      "La possibilité de transférer la responsabilité de toute la sécurité à AWS.",
      "La possibilité d’utiliser le modèle de paiement à l’utilisation.",
      "La capacité d’avoir un contrôle total sur l’infrastructure physique.",
      "Vous n’aurez plus à deviner quelle capacité sera nécessaire."
    ],
    "correctAnswers": [
      1,
      3
    ]
  },
  {
    "question": "Quel service AWS est un service de stockage cloud hybride qui fournit aux utilisateurs sur site un accès à un stockage cloud pratiquement illimité ?",
    "options": [
      "AWS DataSync",
      "Amazon S3 Glacier",
      "Passerelle de stockage AWS",
      "Amazon Elastic Block Store (Amazon EBS)"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise envisage de migrer vers AWS et souhaite estimer les coûts de ses cas d'utilisation AWS. Quel service ou outil AWS peut-elle utiliser pour répondre à ces besoins ?",
    "options": [
      "Calculateur de prix AWS",
      "Amazon CloudWatch",
      "Explorateur de coûts AWS",
      "Budgets AWS"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quel outil un développeur doit-il utiliser pour intégrer les fonctionnalités du service AWS directement dans une application ?",
    "options": [
      "Kit de développement logiciel AWS",
      "AWS CodeDeploy",
      "AWS Lambda",
      "Lot AWS"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Lequel des principes de conception suivants est recommandé pour le framework AWS Well- Architected ? fréquentes et par incréments importants.",
    "options": [
      "Réduisez les temps d’arrêt en effectuant des modifications d’infrastructure peu",
      "Investissez du temps pour configurer l’infrastructure manuellement.",
      "Apprenez à vous améliorer à partir des échecs opérationnels.",
      "Utiliser une conception d’application monolithique pour la centralisation."
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "L'utilisation d'AWS Identity and Access Management (IAM) pour accorder l'accès uniquement aux ressources nécessaires à l'exécution d'une tâche est un concept connu sous le nom de :",
    "options": [
      "accès restreint.",
      "accès selon les besoins.",
      "accès au moindre privilège.",
      "accès par jeton."
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel service ou outil AWS peut être utilisé pour configurer un pare-feu afin de contrôler le trafic entrant et sortant d'un sous-réseau Amazon VPC ?",
    "options": [
      "Groupe de sécurité",
      "AWS WAF",
      "Gestionnaire de pare-feu AWS",
      "Liste de contrôle d'accès réseau"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise souhaite exploiter un entrepôt de données pour analyser ses données sans gérer l'infrastructure de l'entrepôt. Quel service AWS répondra à ce besoin ?",
    "options": [
      "Amazon Aurora",
      "Amazon Redshift sans serveur",
      "AWS Lambda",
      "Amazon RDS"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Comment le cloud computing AWS aide-t-il les entreprises à réduire leurs coûts ? (Choisissez deux options.) pendant plus d'une semaine. E. AWS élimine de nombreux coûts liés à la construction et à la maintenance des centres de données sur site.",
    "options": [
      "AWS facture les mêmes prix pour les services dans chaque région AWS.",
      "AWS permet d’ajuster la capacité à la demande.",
      "AWS propose des remises pour les instances Amazon EC2 qui restent inactives",
      "AWS ne facture pas les données envoyées depuis le cloud AWS vers Internet."
    ],
    "correctAnswers": [
      1,
      4
    ]
  },
  {
    "question": "Une entreprise souhaite autoriser les utilisateurs d'un compte AWS à accéder aux ressources d'un autre compte AWS. Ces utilisateurs ne sont actuellement pas autorisés à accéder à ces ressources. Quel service AWS répond à cette exigence ?",
    "options": [
      "groupe IAM",
      "Rôle IAM",
      "Balise IAM",
      "Analyseur d'accès IAM"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quelle tâche incombe à AWS lors de l’utilisation des services AWS ?",
    "options": [
      "Gestion des autorisations des utilisateurs IAM",
      "Création de règles de groupe de sécurité pour l'accès sortant",
      "Maintien des contrôles physiques et environnementaux",
      "Application des correctifs du système d'exploitation Amazon EC2"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise souhaite automatiser le déploiement de son infrastructure grâce à l'infrastructure en tant que code (IaC). Elle souhaite faire évoluer ses piles de production afin de pouvoir les déployer dans plusieurs régions AWS. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Amazon CloudWatch",
      "Configuration AWS",
      "Conseiller de confiance AWS",
      "AWS CloudFormation"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quelle option est une capacité de perspective de plate-forme AWS Cloud Adoption Framework (AWS CAF) ?",
    "options": [
      "Architecture des données",
      "Protection des données",
      "Gouvernance des données",
      "Science des données"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise exécute une charge de travail dans le cloud AWS. Quelle bonne pratique AWS garantit l'architecture la plus rentable pour cette charge de travail ?",
    "options": [
      "Accouplement lâche",
      "Redimensionnement",
      "Mise en cache",
      "Redondance"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise utilise un service tiers pour sauvegarder 10 To de données sur une bibliothèque de bandes. Le serveur de sauvegarde sur site manque d'espace. L'entreprise souhaite utiliser les services AWS pour les sauvegardes sans modifier ses workflows de sauvegarde existants. Quel service AWS doit-elle utiliser pour répondre à ces besoins ?",
    "options": [
      "Amazon Elastic Block Store (Amazon EBS)",
      "Passerelle de stockage AWS",
      "Amazon Elastic Container Service (Amazon ECS)",
      "AWS Lambda"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel outil AWS donne aux utilisateurs la possibilité de planifier leur utilisation des services, les coûts des services et les réservations d’instances, et leur permet également de définir des alertes personnalisées lorsque leurs coûts ou leur utilisation dépassent les seuils établis ?",
    "options": [
      "Explorateur de coûts",
      "Budgets AWS",
      "Rapport sur les coûts et l'utilisation d'AWS",
      "Rapport d'instance réservée"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quelles tâches relèvent de la responsabilité du client, selon le modèle de responsabilité partagée d'AWS ? (Choisissez deux réponses.) E. Corriger les instances de base de données Amazon RDS.",
    "options": [
      "Établir l’infrastructure mondiale.",
      "Effectuer le chiffrement des données côté client.",
      "Configurer les informations d’identification IAM.",
      "Emplacements de bordure sécurisés."
    ],
    "correctAnswers": [
      1,
      2
    ]
  },
  {
    "question": "Un développeur a été embauché par une grande entreprise et a besoin d'accréditations AWS. Quelles sont les bonnes pratiques de sécurité à suivre ? (Choisissez deux réponses.) effectuer le travail. le développeur. développeur ne peut pas être modifié. E. Assurez-vous que la politique de mot de passe du compte exige une longueur minimale.",
    "options": [
      "Accordez au développeur l’accès uniquement aux ressources AWS nécessaires pour",
      "Partagez les informations d’identification de l’utilisateur racine du compte AWS avec",
      "Ajoutez le développeur au groupe d’administrateurs dans AWS IAM.",
      "Configurez une politique de mot de passe qui garantit que le mot de passe du"
    ],
    "correctAnswers": [
      0,
      4
    ]
  },
  {
    "question": "Une entreprise possède plusieurs comptes AWS incluant des charges de travail de calcul ininterrompues. Elle souhaite bénéficier de remises sur la facturation en fonction de son utilisation des services AWS. Quelle fonctionnalité ou option d'achat AWS répondra à ces exigences ?",
    "options": [
      "Marquage des ressources",
      "Facturation consolidée",
      "Tarification à l'utilisation",
      "Instances ponctuelles"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Un utilisateur souhaite autoriser les applications exécutées sur une instance Amazon EC2 à appeler d'autres services AWS. L'accès accordé doit être sécurisé. Quel service ou fonctionnalité AWS utiliser ?",
    "options": [
      "Groupes de sécurité",
      "Gestionnaire de pare-feu AWS",
      "Rôles IAM",
      "Clés SSH des utilisateurs IAM"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise souhaite un serveur de fichiers Windows entièrement géré pour ses applications Windows. Quel service AWS répondra à ce besoin ?",
    "options": [
      "Amazon FSx",
      "Amazon Elastic Kubernetes Service (Amazon EKS)",
      "Amazon Elastic Container Service (Amazon ECS)",
      "Amazon EMR"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise souhaite migrer ses charges de travail NFS sur site vers AWS. Quel type de passerelle de stockage AWS doit-elle utiliser pour répondre à ce besoin ?",
    "options": [
      "Passerelle de bande",
      "Passerelle de volume",
      "Passerelle de fichiers Amazon FSx",
      "Passerelle de fichiers Amazon S3"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise doit suivre l'activité de ses comptes AWS et savoir quand un appel d'API est effectué sur ses ressources AWS. Quel outil ou service AWS peut être utilisé pour répondre à ces exigences ?",
    "options": [
      "Amazon CloudWatch",
      "Inspecteur Amazon",
      "AWS CloudTrail",
      "AWS IAM"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise possède une application ininterrompue fonctionnant sur des instances Amazon EC2. Cette application traite en permanence un arriéré de fichiers dans une file d'attente Amazon Simple Queue Service (Amazon SQS). Cette utilisation devrait continuer à croître pendant des années. Quel est le modèle d'achat d'instances EC2 le plus rentable pour répondre à ces besoins ?",
    "options": [
      "Instances ponctuelles",
      "Instances à la demande",
      "Plans d'épargne",
      "Hôtes dédiés"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise souhaite qu'un service AWS lui fournisse des recommandations de produits basées sur ses données clients. Quel service AWS répondra à ce besoin ?",
    "options": [
      "Amazon Polly",
      "Amazon Personnaliser",
      "Amazon Comprehend",
      "Reconnaissance d'Amazon"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise planifie sa migration vers le cloud AWS. Elle identifie ses lacunes en matière de capacités en utilisant les perspectives du Cadre d'adoption du cloud AWS (AWS CAF). À quelle phase de la transformation cloud ces activités d'identification sont-elles associées ?",
    "options": [
      "Imaginer",
      "Aligner",
      "Échelle",
      "Lancement"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise de médias sociaux souhaite protéger son application web contre les failles de sécurité courantes telles que les injections SQL et les scripts intersites. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Inspecteur Amazon",
      "AWS WAF",
      "Amazon GuardDuty",
      "Amazon CloudWatch"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel service AWS entièrement géré aide à la création, au test et à la gestion d’images Amazon EC2 personnalisées ?",
    "options": [
      "Générateur d'images EC2",
      "Image machine Amazon (AMI)",
      "Assistant de lancement AWS",
      "AWS Elastic Beanstalk"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise souhaite un processus automatisé pour analyser en continu ses instances Amazon EC2 à la recherche de vulnérabilités logicielles. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Amazon GuardDuty",
      "Inspecteur Amazon",
      "Détective Amazon",
      "Amazon Cognito"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise doit traiter des données une fois par semaine, ce qui prend généralement environ cinq heures. Quel service AWS doit-elle utiliser pour cette charge de travail ?",
    "options": [
      "AWS Lambda",
      "Amazon EC2",
      "AWS CodeDeploy",
      "Longueur d'onde AWS"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel service ou fonctionnalité AWS fournit des informations de journal sur le trafic entrant et sortant sur les interfaces réseau d'un VPC ?",
    "options": [
      "Journaux Amazon CloudWatch",
      "AWS CloudTrail",
      "Journaux de flux VPC",
      "Gestion des identités et des accès AWS (IAM)"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise souhaite concevoir un système de stockage centralisé pour gérer les données de configuration et les mots de passe de ses applications métier critiques. Quel service ou fonctionnalité AWS répondra le mieux à ces exigences ?",
    "options": [
      "Magasin de paramètres AWS Systems Manager",
      "Gestionnaire de secrets AWS",
      "Configuration AWS",
      "Amazon S3"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise envisage de déployer des conteneurs sur AWS. Elle souhaite contrôler entièrement les ressources de calcul qui hébergent les conteneurs. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Amazon Elastic Kubernetes Service (Amazon EKS)",
      "AWS Fargate",
      "Amazon EC2",
      "Amazon Elastic Container Service (Amazon ECS)"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel service ou fonctionnalité AWS permet aux utilisateurs de créer de nouveaux comptes AWS, de regrouper plusieurs comptes pour organiser les flux de travail et d’appliquer des politiques à des groupes de comptes ?",
    "options": [
      "Gestion des identités et des accès AWS (IAM)",
      "Conseiller de confiance AWS",
      "AWS CloudFormation",
      "Organisations AWS"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise souhaite stocker et récupérer des fichiers dans Amazon S3 pour ses applications locales existantes, en utilisant des protocoles de système de fichiers standard. Quel service AWS répondra à ces exigences ?",
    "options": [
      "AWS DataSync",
      "AWS Snowball Edge",
      "Passerelle de fichiers Amazon S3",
      "Famille de transfert AWS"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise souhaite bloquer les attaques par injection SQL. Quel service ou fonctionnalité AWS doit-elle utiliser pour répondre à cette exigence ?",
    "options": [
      "AWS WAF",
      "Listes de contrôle d'accès réseau",
      "Groupes de sécurité",
      "Gestionnaire de certificats AWS (ACM)"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise souhaite un outil unifié pour interagir de manière cohérente avec les services AWS. Quel service ou outil AWS répondra à ce besoin ?",
    "options": [
      "AWS CLI",
      "Amazon Elastic Container Service (Amazon ECS)",
      "AWS Cloud9",
      "Réseau privé virtuel AWS (AWS VPN)"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise doit évaluer son environnement AWS et formuler des recommandations de bonnes pratiques dans cinq domaines : coût, performance, limites de service, tolérance aux pannes et sécurité. Quel service AWS l'entreprise peut-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "AWS Shield",
      "AWS WAF",
      "Conseiller de confiance AWS",
      "Catalogue de services AWS"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quelle perspective dans AWS Cloud Adoption Framework (AWS CAF) inclut des fonctionnalités de gestion de la configuration et de gestion des correctifs ?",
    "options": [
      "Plate-forme",
      "Opérations",
      "Sécurité",
      "Gouvernance"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise dispose d'une charge de calcul stable, prévisible et ininterrompue. Quelles options d'achat d'instances Amazon EC2 répondent le mieux à ces exigences ? (Choisissez deux options.) E. Hôtes dédiés",
    "options": [
      "Instances à la demande",
      "Instances réservées",
      "Instances ponctuelles",
      "Plans d'épargne"
    ],
    "correctAnswers": [
      1,
      3
    ]
  },
  {
    "question": "Quel modèle de tarification Amazon EC2 est le PLUS rentable pour une charge de travail ininterrompue qui s'exécute une fois par an pendant 24 heures ?",
    "options": [
      "Instances à la demande",
      "Instances réservées",
      "Instances ponctuelles",
      "Instances dédiées"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quelle option constitue une responsabilité partagée entre AWS et ses clients dans le cadre du modèle de responsabilité partagée AWS ?",
    "options": [
      "Configuration des systèmes d'exploitation des instances Amazon EC2",
      "Chiffrement côté serveur du système de fichiers d'application",
      "Gestion des correctifs",
      "Sécurité de l'infrastructure physique"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise souhaite migrer ses charges de travail sur site vers le cloud AWS. Elle souhaite répartir les charges de travail entre différents services afin de les refacturer. Quels services ou fonctionnalités AWS répondront à ces exigences ? (Choisissez deux réponses.) E. Plusieurs comptes AWS",
    "options": [
      "Groupes de placement",
      "Facturation consolidée",
      "Emplacements des bords",
      "Configuration AWS"
    ],
    "correctAnswers": [
      1,
      4
    ]
  },
  {
    "question": "Quelle tâche relève de la responsabilité d’AWS, selon le modèle de responsabilité partagée d’AWS ? privilège.",
    "options": [
      "Activez le chiffrement côté client pour les objets stockés dans Amazon S3.",
      "Configurez les politiques de sécurité IAM pour respecter le principe du moindre",
      "Corrigez le système d’exploitation invité sur une instance Amazon EC2.",
      "Appliquer les mises à jour à l'hyperviseur Nitro."
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quelle option constitue un avantage de l’utilisation d’AWS pour le cloud computing ?",
    "options": [
      "Échangez les dépenses variables contre des dépenses fixes",
      "Tarification à l'utilisation",
      "Diminution de la vitesse et de l'agilité",
      "Dépenser de l'argent pour gérer et entretenir des centres de données"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quelle option est une capacité de perspective commerciale AWS Cloud Adoption Framework (AWS CAF) ?",
    "options": [
      "Évolution de la culture",
      "Gestion d'événements",
      "Monétisation des données",
      "Architecture de la plateforme"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise évalue son offre AWS Business Support afin de déterminer si elle répond toujours à ses besoins. Elle envisage de passer à AWS Enterprise Support. Quels avantages supplémentaires bénéficiera-t-elle de ce service ? 7 jours sur 7 l'optimisation l'entreprise",
    "options": [
      "Un ensemble complet de vérifications AWS Trusted Advisor",
      "Accès par téléphone, e-mail et chat aux ingénieurs du support cloud 24 heures sur 24,",
      "Un responsable de compte technique (TAM) désigné pour aider au suivi et à",
      "Un examen consultatif et des conseils d'architecture pour les applications de"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel modèle de tarification interrompra une instance Amazon EC2 en cours d’exécution si la capacité devient temporairement indisponible ?",
    "options": [
      "Instances à la demande",
      "Instances réservées standard",
      "Instances ponctuelles",
      "Instances réservées convertibles"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quelle option constitue un avantage de l’utilisation d’AWS pour le cloud computing ?",
    "options": [
      "Échangez les dépenses variables contre des dépenses fixes",
      "Tarification à l'utilisation",
      "Diminution de la vitesse et de l'agilité",
      "Dépenser de l'argent pour gérer et entretenir des centres de données"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quelle option est une capacité de perspective commerciale AWS Cloud Adoption Framework (AWS CAF) ?",
    "options": [
      "Évolution de la culture",
      "Gestion d'événements",
      "Monétisation des données",
      "Architecture de la plateforme"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise évalue son offre AWS Business Support afin de déterminer si elle répond toujours à ses besoins. Elle envisage de passer à AWS Enterprise Support. Quels avantages supplémentaires bénéficiera-t-elle de ce service ? 7 jours sur 7 l'optimisation l'entreprise",
    "options": [
      "Un ensemble complet de vérifications AWS Trusted Advisor",
      "Accès par téléphone, e-mail et chat aux ingénieurs du support cloud 24 heures sur 24,",
      "Un responsable de compte technique (TAM) désigné pour aider au suivi et à",
      "Un examen consultatif et des conseils d'architecture pour les applications de"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel modèle de tarification interrompra une instance Amazon EC2 en cours d’exécution si la capacité devient temporairement indisponible ?",
    "options": [
      "Instances à la demande",
      "Instances réservées standard",
      "Instances ponctuelles",
      "Instances réservées convertibles"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quelles sont les options offertes par la perspective de sécurité d'AWS Cloud Adoption Framework (AWS CAF) ? (Choisissez deux options.) E. Disponibilité et continuité",
    "options": [
      "Observabilité",
      "Gestion des incidents et des problèmes",
      "Réponse aux incidents",
      "Protection des infrastructures"
    ],
    "correctAnswers": [
      2,
      3
    ]
  },
  {
    "question": "Une entreprise souhaite exécuter sa charge de travail sur des instances Amazon EC2 pendant plus d'un an. Cette charge de travail fonctionnera en continu. Quelle option offre un tarif horaire réduit par rapport au tarif horaire des instances à la demande ?",
    "options": [
      "Processeur AWS Graviton",
      "Hôtes dédiés",
      "Plans d'économies pour les instances EC2",
      "Instances Amazon EC2 Auto Scaling"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quelle caractéristique du cloud AWS aide les utilisateurs à éliminer la capacité CPU sous- utilisée ?",
    "options": [
      "Agilité",
      "Élasticité",
      "Fiabilité",
      "Durabilité"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quels services AWS une entreprise peut-elle utiliser pour réaliser une architecture faiblement couplée ? (Choisissez deux réponses.) E. Fonctions d'étape AWS",
    "options": [
      "Espaces de travail Amazon",
      "Service de file d'attente simple Amazon (Amazon SQS)",
      "Amazon Connect",
      "Conseiller de confiance AWS"
    ],
    "correctAnswers": [
      1,
      4
    ]
  },
  {
    "question": "Quel service AWS Cloud peut envoyer des alertes aux clients si les seuils de dépenses personnalisés sont dépassés ?",
    "options": [
      "Budgets AWS",
      "Explorateur de coûts AWS",
      "Balises de répartition des coûts AWS",
      "Organisations AWS"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise envisage de migrer vers le cloud AWS. Elle souhaite utiliser le cadre d'adoption du cloud AWS (AWS CAF) pour définir et suivre les résultats opérationnels dans le cadre de sa transformation cloud. Quelle fonctionnalité de gouvernance du cadre d'adoption du cloud AWS CAF répondra à ces exigences ?",
    "options": [
      "Gestion des avantages sociaux",
      "Gestion des risques",
      "Gestion du portefeuille d'applications",
      "Gestion financière dans le cloud"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise doit transférer rapidement et en toute sécurité des fichiers sur de longues distances entre son client et un bucket Amazon S3. Quelle fonctionnalité S3 répondra à ce besoin ?",
    "options": [
      "Gestion des versions S3",
      "Accélération du transfert S3",
      "S3ACL",
      "S3 Intelligent-Tiering"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise doit exécuter en continu une charge de travail expérimentale sur une instance Amazon EC2 et l'arrêter après 12 heures. Quelle option d'achat d'instance répondra le mieux à ce besoin ?",
    "options": [
      "Instances à la demande",
      "Instances réservées",
      "Instances ponctuelles",
      "Instances dédiées"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quelle phase du parcours de transformation cloud du AWS Cloud Adoption Framework (AWS CAF) vise à démontrer comment le cloud contribue à accélérer les résultats commerciaux ?",
    "options": [
      "Échelle",
      "Imaginer",
      "Aligner",
      "Lancement"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quelle option relève de la responsabilité du client dans le cadre du modèle de responsabilité partagée AWS ?",
    "options": [
      "Maintenance du matériel sous-jacent des instances Amazon EC2",
      "Sécurité des données d'application",
      "Sécurité physique des centres de données",
      "Maintenance des composants VPC"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise souhaite que ses instances Amazon EC2 fonctionnent dans un environnement hautement disponible, même en cas de catastrophe naturelle dans une zone géographique donnée. Quelle approche permettra d'atteindre cet objectif ?",
    "options": [
      "Utilisez des instances EC2 dans plusieurs régions AWS.",
      "Utilisez des instances EC2 dans plusieurs emplacements Amazon CloudFront.",
      "Utilisez des instances EC2 dans plusieurs emplacements périphériques.",
      "Utilisez les instances EC2 dans les zones locales AWS."
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise souhaite moderniser et convertir une application monolithique en microservices. Elle souhaite migrer l'application vers AWS. Quelle stratégie de migration adopter ?",
    "options": [
      "Réhéberger",
      "Replateforme",
      "Rachat",
      "Refactor"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Un administrateur système a créé un utilisateur IAM pour un développeur et lui a attribué une clé d'accès au lieu d'un nom d'utilisateur et d'un mot de passe. À quoi sert cette clé d'accès ?",
    "options": [
      "Pour accéder au compte AWS en tant qu'utilisateur root du compte AWS",
      "Pour accéder au compte AWS via la console de gestion AWS",
      "Pour accéder au compte AWS via une CLI",
      "Pour accéder à tous les comptes AWS d'une entreprise"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quelle option est un environnement composé d’un ou plusieurs centres de données ?",
    "options": [
      "Amazon CloudFront",
      "Zone de disponibilité",
      "VPC",
      "Avant-postes AWS"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise migre un centre de données sur site vers le cloud AWS. Elle doit migrer 50 pétaoctets de données de stockage de fichiers vers AWS avec le minimum de frais opérationnels. Quel service ou ressource AWS l'entreprise doit-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "Motoneige AWS",
      "AWS Snowball Edge",
      "Échange de données AWS",
      "Service de migration de base de données AWS (AWS DMS)"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise possède une application nécessitant un matériel robuste. L'application doit être accessible aux étudiants utilisant des ordinateurs portables légers et économiques. Quel service AWS permettra à l'entreprise de déployer l'application sans investir dans une infrastructure back-end ou du matériel client haut de gamme ?",
    "options": [
      "Amazon AppStream 2.0",
      "AWS AppSync",
      "Amazon WorkLink",
      "AWS Elastic Beanstalk"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise souhaite interroger les journaux de son serveur pour mieux comprendre l'expérience de ses clients. Quel service AWS stockera ces données de la manière la plus rentable ?",
    "options": [
      "Amazon Aurora",
      "Système de fichiers élastique Amazon (Amazon EFS)",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon S3"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Lequel des principes de conception suivants est recommandé pour l’architecture AWS Cloud ? de l’application. d’échec.",
    "options": [
      "Concevez des composants étroitement couplés.",
      "Créez un composant d’application unique capable de gérer toutes les fonctionnalités",
      "Effectuez des modifications importantes sur moins d’itérations pour réduire les risques",
      "Évitez l’architecture monolithique en segmentant les charges de travail."
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quel service AWS aide les utilisateurs à auditer l’activité des API sur leur compte AWS ?",
    "options": [
      "AWS CloudTrail",
      "Inspecteur Amazon",
      "AWS WAF",
      "Configuration AWS"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quelle tâche relève de la responsabilité d’un client, selon le modèle de responsabilité partagée d’AWS ?",
    "options": [
      "Gestion des systèmes d'exploitation invités",
      "Maintenance de la configuration des dispositifs d'infrastructure",
      "Gestion des systèmes d'exploitation hôtes et virtualisation",
      "Maintenance du logiciel qui alimente les zones de disponibilité"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise souhaite ajouter et supprimer automatiquement des instances Amazon EC2. Elle souhaite que ces instances s'adaptent dynamiquement aux variations de charge de travail. Quel service ou fonctionnalité répondra à ces exigences ?",
    "options": [
      "Amazon DynamoDB",
      "Instances Spot Amazon EC2",
      "Famille AWS Snow",
      "Mise à l'échelle automatique d'Amazon EC2"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Un utilisateur souhaite automatiser en toute sécurité la gestion et la rotation des identifiants partagés entre les applications, tout en minimisant le temps consacré à la gestion des tâches. Quel service ou fonctionnalité AWS peut-il utiliser pour y parvenir ?",
    "options": [
      "AWS CloudHSM",
      "Service de gestion des clés AWS (AWS KMS)",
      "Gestionnaire de secrets AWS",
      "Cryptage côté serveur"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel service de sécurité reconnaît et classe automatiquement les données sensibles ou la propriété intellectuelle sur AWS ?",
    "options": [
      "Amazon GuardDuty",
      "Amazon Macie",
      "Inspecteur Amazon",
      "AWS Shield"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quelles actions constituent les meilleures pratiques pour un utilisateur root de compte AWS ? (Choisissez deux.) l’équipe. administratives quotidiennes, au lieu d’utiliser l’utilisateur root. E. Utilisez l’accès programmatique au lieu de l’utilisateur root et du mot de passe.",
    "options": [
      "Partagez les informations d’identification de l’utilisateur root avec les membres de",
      "Créez plusieurs utilisateurs root pour le compte, séparés par environnement.",
      "Activez l’authentification multifacteur (MFA) sur l’utilisateur root.",
      "Créez un utilisateur IAM avec des privilèges d’administrateur pour les tâches"
    ],
    "correctAnswers": [
      2,
      3
    ]
  },
  {
    "question": "Une entreprise exécute une charge de travail critique sur une instance de base de données Amazon RDS. Elle a besoin d'une haute disponibilité avec un temps de récupération inférieur à 5 minutes. Quelle solution répondra à ces exigences ? dans Amazon S3.",
    "options": [
      "Créez une réplique en lecture de l’instance de base de données.",
      "Créez un modèle de l’instance de base de données à l’aide d’AWS CloudFormation.",
      "Prenez régulièrement des instantanés de l'instance de base de données. Stockez-les",
      "Modifiez l’instance de base de données pour qu’elle soit un déploiement multi-AZ."
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise envisage de migrer son application vers AWS et de l'exécuter sur des instances Amazon EC2. L'application sera utilisée en continu pendant un an. Quelle option d'achat d'instance EC2 répondra le mieux à ces besoins ?",
    "options": [
      "Instances réservées",
      "Instances ponctuelles",
      "Instances à la demande",
      "Hôtes dédiés"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise doit transférer des données entre un bucket Amazon S3 et une application sur site. Qui est responsable de la sécurité de ces données, selon le modèle de responsabilité partagée d'AWS ?",
    "options": [
      "L'entreprise",
      "AWS",
      "Fournisseur de pare-feu",
      "Partenaire AWS Marketplace"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quel pilier du cadre AWS Well-Architected fait référence à la capacité d’un système à se remettre des perturbations de l’infrastructure ou du service et à acquérir dynamiquement des ressources informatiques pour répondre à la demande ?",
    "options": [
      "Sécurité",
      "Fiabilité",
      "Efficacité des performances",
      "Optimisation des coûts"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise souhaite identifier les buckets Amazon S3 partagés avec un autre compte AWS. Quel service ou fonctionnalité AWS répondra à ces exigences ?",
    "options": [
      "Formation du lac AWS",
      "Rapport d'accréditation IAM",
      "Amazon CloudWatch",
      "Analyseur d'accès IAM"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quel service AWS offre aux utilisateurs la possibilité de créer des tableaux de bord de business intelligence interactifs qui incluent des informations sur l’apprentissage automatique ?",
    "options": [
      "Amazone Athéna",
      "Amazon Kendra",
      "Amazon QuickSight",
      "Amazon Redshift"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Laquelle des propositions de valeur AWS suivantes décrit la capacité d’un utilisateur à faire évoluer son infrastructure en fonction de la demande ?",
    "options": [
      "Vitesse d'innovation",
      "Élasticité des ressources",
      "Architecture découplée",
      "Déploiement mondial"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quelle action constitue une bonne pratique de sécurité pour l’accès aux données sensibles stockées dans un compartiment Amazon S3 ? compartiment S3.",
    "options": [
      "Activez la réplication interrégionale S3 (CRR) sur le compartiment S3.",
      "Utilisez les rôles IAM pour les applications qui nécessitent un accès au bucket S3.",
      "Configurez AWS WAF pour empêcher tout accès non autorisé au compartiment S3.",
      "Configurez Amazon GuardDuty pour empêcher tout accès non autorisé au"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise souhaite en savoir plus sur les avantages du cloud computing. Elle souhaite comprendre l'avantage opérationnel de l'agilité. Comment AWS offre-t-il cette agilité aux utilisateurs ? plusieurs régions minimum d'effort",
    "options": [
      "La capacité d'assurer une haute disponibilité en déployant des charges de travail dans",
      "Un modèle de paiement à l'utilisation pour de nombreux services et ressources",
      "La possibilité de transférer la gestion de l'infrastructure vers le cloud AWS",
      "La capacité de provisionner et de déprovisionner des ressources rapidement avec un"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise a besoin d'un portail utilisateur centralisé pour permettre aux utilisateurs de se connecter à des applications métier tierces prenant en charge SAML (Security Assertion Markup Language) 2.0. Quel service AWS répondra à cette exigence ?",
    "options": [
      "Gestion des identités et des accès AWS (IAM)",
      "Amazon Cognito",
      "Centre d'identité AWS IAM (AWS Single Sign-On)",
      "AWS CLI"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel service AWS les utilisateurs doivent-ils utiliser pour en savoir plus sur la disponibilité et les opérations du service AWS ?",
    "options": [
      "Amazon EventBridge",
      "Catalogue de services AWS",
      "Tour de contrôle AWS",
      "Tableau de bord AWS Health"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quel service ou outil AWS peut être utilisé pour capturer des informations sur le trafic entrant et sortant dans un Amazon VPC ?",
    "options": [
      "Journaux de flux VPC",
      "Inspecteur Amazon",
      "Services de point de terminaison VPC",
      "passerelle NAT"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "De quoi le client est-il TOUJOURS responsable de la gestion, selon le modèle de responsabilité partagée d'AWS ?",
    "options": [
      "Licences de logiciels",
      "Réseautage",
      "Données clients",
      "Clés de chiffrement"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel service AWS peut être utilisé pour récupérer des rapports de conformité à la demande ?",
    "options": [
      "Gestionnaire de secrets AWS",
      "Artefact AWS",
      "Centre de sécurité AWS",
      "Gestionnaire de certificats AWS"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel service AWS permet aux utilisateurs de vérifier les vulnérabilités sur les instances Amazon EC2 à l’aide de modèles d’évaluation prédéfinis ?",
    "options": [
      "AWS WAF",
      "Conseiller de confiance AWS",
      "Inspecteur Amazon",
      "AWS Shield"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise envisage de migrer vers le cloud AWS. Elle collecte des informations sur son infrastructure sur site et a besoin d'informations telles que le nom d'hôte, l'adresse IP et l'adresse MAC. Quel service AWS répondra à ces exigences ?",
    "options": [
      "AWS DataSync",
      "Service de migration d'applications AWS",
      "Service de découverte d'applications AWS",
      "Service de migration de base de données AWS (AWS DMS)"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quelle action contribuera à accroître la sécurité dans le cloud AWS ?",
    "options": [
      "Activer l’accès programmatique pour tous les utilisateurs IAM.",
      "Utilisez des utilisateurs IAM au lieu de rôles IAM pour déléguer des autorisations.",
      "Faites tourner les clés d’accès de manière récurrente.",
      "Utilisez des politiques en ligne au lieu de politiques gérées par le client."
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise envisage de migrer ses applications vers le cloud AWS. Quel outil ou ensemble de ressources AWS doit-elle utiliser pour analyser et évaluer son état de préparation à la migration ?",
    "options": [
      "Cadre d'adoption du cloud AWS (AWS CAF)",
      "Calculateur de prix AWS",
      "Cadre AWS bien conçu",
      "Budgets AWS"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Laquelle des propositions suivantes décrit certaines des fonctionnalités principales d’Amazon S3 ? utilisé avec Amazon EC2. sécurité, une évolutivité et une disponibilité des données de haut niveau. et évolutif, accessible via le protocole SMB standard du secteur. services AWS Cloud et les ressources sur site.",
    "options": [
      "Amazon S3 est un service de stockage en blocs hautes performances conçu pour être",
      "Amazon S3 est un service de stockage d'objets qui offre des performances, une",
      "Amazon S3 est un système de stockage de fichiers entièrement géré, hautement fiable",
      "Amazon S3 est un NFS élastique évolutif et entièrement géré à utiliser avec les"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel avantage AWS est démontré par les services technologiques à la demande qui permettent aux entreprises de remplacer les dépenses fixes initiales par des dépenses variables ?",
    "options": [
      "Haute disponibilité",
      "Économies d'échelle",
      "Tarification à l'utilisation",
      "Portée mondiale"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quels services ou fonctionnalités AWS permettent aux utilisateurs de connecter des réseaux locaux à un VPC ? (Choisissez deux réponses.) E. Amazon CloudFront",
    "options": [
      "VPN AWS",
      "Équilibrage de charge élastique",
      "AWS Direct Connect",
      "Appairage VPC"
    ],
    "correctAnswers": [
      0,
      2
    ]
  },
  {
    "question": "Un utilisateur doit déployer rapidement une base de données non relationnelle sur AWS. Il ne souhaite pas gérer le matériel sous-jacent ni le logiciel de base de données. Quel service AWS peut être utilisé pour y parvenir ?",
    "options": [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon Redshift"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quelles actions sont des exemples d'efforts d'une entreprise pour dimensionner ses ressources AWS afin de contrôler les coûts du cloud ? (Choisissez deux.) de données NoSQL. passés. utilisateurs accèdent rarement vers des niveaux de stockage moins coûteux. E. Remplacez les instances Amazon EC2 existantes par AWS Elastic Beanstalk.",
    "options": [
      "Passez d’Amazon RDS à Amazon DynamoDB pour prendre en charge les ensembles",
      "Basez la sélection des types d’instances Amazon EC2 sur les modèles d’utilisation",
      "Utilisez les politiques de cycle de vie Amazon S3 pour déplacer les objets auxquels les",
      "Utilisez des déploiements multi-AZ pour Amazon RDS."
    ],
    "correctAnswers": [
      1,
      2
    ]
  },
  {
    "question": "Quel service ou fonctionnalité AWS une entreprise peut-elle utiliser pour appliquer des règles de sécurité à des instances Amazon EC2 spécifiques ?",
    "options": [
      "Listes de contrôle d'accès réseau",
      "Groupes de sécurité",
      "Conseiller de confiance AWS",
      "AWS WAF"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quels principes de conception soutiennent le pilier fiabilité du cadre AWS Well-Architected ? (Choisissez deux réponses.) E. Récupération automatique après une panne.",
    "options": [
      "Effectuer des opérations sous forme de code.",
      "Activer la traçabilité.",
      "Adaptez-vous automatiquement pour répondre à la demande.",
      "Déployez des ressources à l’échelle mondiale pour améliorer le temps de réponse."
    ],
    "correctAnswers": [
      2,
      4
    ]
  },
  {
    "question": "Une entreprise utilisant AWS doit transférer 2 To de données. Quel type de transfert de données serait gratuit pour l'entreprise ?",
    "options": [
      "Transfert de données entrantes depuis Internet",
      "Transfert de données sortant vers Internet",
      "Transfert de données entre les régions AWS",
      "Transfert de données entre les zones de disponibilité"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise souhaite créer des modèles réutilisables pour déployer plusieurs ressources AWS. Quel service ou fonctionnalité AWS peut-elle utiliser pour répondre à ce besoin ?",
    "options": [
      "Place de marché AWS",
      "Image machine Amazon (AMI)",
      "AWS CloudFormation",
      "AWS OpsWorks"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise développe une application nécessitant la capacité d'envoyer, de stocker et de recevoir des messages entre ses composants. Elle doit également traiter les messages selon l'ordre FIFO (premier entré, premier sorti). Quel service AWS doit-elle utiliser ?",
    "options": [
      "Fonctions d'étape AWS",
      "Service de notification simple d'Amazon (Amazon SNS)",
      "Flux de données Amazon Kinesis",
      "Service de file d'attente simple Amazon (Amazon SQS)"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quel service ou fonctionnalité AWS est un service pré-authentifié basé sur un navigateur qui peut être lancé directement depuis la console de gestion AWS ?",
    "options": [
      "API AWS",
      "AWS Lightsail",
      "AWS Cloud9",
      "AWS CloudShell"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise souhaite migrer sa base de données vers un service AWS managé compatible avec PostgreSQL. Quels services AWS répondront à ces exigences ? (Choisissez deux réponses.) E. Amazon Aurora",
    "options": [
      "Amazone Athéna",
      "Amazon RDS",
      "Amazon EC2",
      "Amazon DynamoDB"
    ],
    "correctAnswers": [
      1,
      4
    ]
  },
  {
    "question": "Une entreprise possède une flotte de cargos. Ces navires sont équipés de capteurs qui collectent des données en mer, là où la connexion internet est intermittente ou inexistante. L'entreprise doit collecter, formater et traiter ces données en mer, puis les transférer vers AWS. Quel service AWS l'entreprise doit-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "AWS IoT Core",
      "Amazon Lightsail",
      "Passerelle de stockage AWS",
      "AWS Snowball Edge"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise héberge une application sur plusieurs instances Amazon EC2. L'application utilise Amazon Simple Notification Service (Amazon SNS) pour envoyer des messages. Quel service ou fonctionnalité AWS autorisera l'application à accéder aux services AWS requis ?",
    "options": [
      "Gestionnaire de certificats AWS (ACM)",
      "Rôles IAM",
      "Centre de sécurité AWS",
      "Amazon GuardDuty"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Un utilisateur a une connaissance limitée des services AWS, mais souhaite déployer rapidement une application Node.js évolutive dans le cloud AWS. Quel service utiliser pour déployer l'application ?",
    "options": [
      "AWS CloudFormation",
      "AWS Elastic Beanstalk",
      "Amazon EC2",
      "AWS OpsWorks"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise a besoin d'un réseau de diffusion de contenu (CDN) capable de fournir des données, des vidéos, des applications et des API sécurisées aux utilisateurs du monde entier, avec une faible latence et des vitesses de transfert élevées. Quel service AWS répond à ces exigences ?",
    "options": [
      "Amazon CloudFront",
      "Équilibrage de charge élastique",
      "Amazon S3",
      "Amazon Elastic Transcoder"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise doit utiliser un logiciel tiers pour gérer sa charge de travail sur AWS. Quel service ou fonctionnalité AWS peut-elle utiliser pour acheter ce logiciel ?",
    "options": [
      "Gestionnaire d'accès aux ressources AWS",
      "Services gérés AWS",
      "Gestionnaire de licences AWS",
      "Place de marché AWS"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise a besoin d'un stockage de fichiers entièrement géré, hautement fiable et évolutif, accessible via le protocole SMB (Server Message Block). Quel service AWS répondra à ces exigences ?",
    "options": [
      "Amazon S3",
      "Système de fichiers élastique Amazon (Amazon EFS)",
      "Amazon FSx pour serveur de fichiers Windows",
      "Amazon Elastic Block Store (Amazon EBS)"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise doit configurer et gérer de manière centralisée des groupes de sécurité Amazon VPC sur plusieurs comptes AWS au sein d'une organisation dans AWS Organizations. Quel service AWS doit-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "Gestionnaire de pare-feu AWS",
      "Amazon GuardDuty",
      "Détective Amazon",
      "AWS WAF"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quelle tâche relève de la responsabilité d’AWS, selon le modèle de responsabilité partagée d’AWS ?",
    "options": [
      "Configurer la gestion des identités et des accès pour les applications.",
      "Gérez les options de cryptage pour les données stockées sur AWS.",
      "Configurer des groupes de sécurité pour les instances Amazon EC2.",
      "Maintenir le matériel physique de l'infrastructure."
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise possède une instance Amazon EC2 sur un sous-réseau privé. Elle souhaite établir une connexion à Internet pour récupérer les mises à jour du système d'exploitation tout en empêchant le trafic Internet d'accéder à l'instance EC2. Quel service géré AWS permet cette connexion ?",
    "options": [
      "Point de terminaison VPC",
      "passerelle NAT",
      "Amazon PrivateLink",
      "Appairage VPC"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quelles actions relèvent de la responsabilité d'AWS, selon le modèle de responsabilité partagée d'AWS ? (Choisissez deux réponses.) E. Configuration des groupes de sécurité et des ACL réseau",
    "options": [
      "Sécurisation de la couche de virtualisation",
      "Correction du système d'exploitation sur les instances Amazon EC2",
      "Application d'une politique de mot de passe stricte pour les utilisateurs IAM",
      "Correction du système d'exploitation sur les instances Amazon RDS"
    ],
    "correctAnswers": [
      0,
      3
    ]
  },
  {
    "question": "Une entreprise stocke des données peu consultées dans le cloud AWS. Si elle doit accéder à ces données, celles-ci doivent être récupérées dans les 12 heures. Elle recherche une solution rentable pour le stockage par gigaoctet. Quelle classe de stockage Amazon S3 répondra à ces exigences ?",
    "options": [
      "Norme S3",
      "Récupération flexible du glacier S3",
      "S3 One Zone - Accès peu fréquent (S3 One Zone-IA)",
      "Norme S3 - Accès peu fréquent (Norme S3 - IA)"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel service ou ressource AWS peut être utilisé pour identifier les services qui ont été utilisés par un utilisateur dans une plage de dates spécifiée ?",
    "options": [
      "Listes de contrôle d'accès (ACL) Amazon S3",
      "Gestionnaire de certificats AWS (ACM)",
      "Analyseur d'accès au réseau",
      "Analyseur d'accès AWS Identity and Access Management"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise doit faire appel à des consultants externes pour assurer la maintenance et le support de son environnement AWS et répondre à ses besoins métier. Quel service ou ressource AWS répondra à ces exigences ?",
    "options": [
      "Assistance AWS",
      "Organisations AWS",
      "Catalogue de services AWS",
      "Réseau de partenaires AWS (APN)"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise souhaite créer des tableaux de bord Amazon QuickSight chaque semaine à partir de ses données de facturation. Quelle fonctionnalité ou quel outil AWS peut-elle utiliser pour répondre à ces besoins ?",
    "options": [
      "Budgets AWS",
      "Explorateur de coûts AWS",
      "Rapport sur les coûts et l'utilisation d'AWS",
      "Détection des anomalies de coût AWS"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise envisage de migrer ses sauvegardes de données vers le cloud AWS. Elle doit remplacer son stockage sur site par un stockage cloud, mais mis en cache localement. Quel service AWS répond à ces exigences ?",
    "options": [
      "Passerelle de stockage AWS",
      "AWS Snowcone",
      "Sauvegarde AWS",
      "Système de fichiers élastique Amazon (Amazon EFS)"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise doit organiser ses ressources et suivre les coûts AWS de manière détaillée. Elle doit catégoriser les coûts par service, environnement et application. Quelle solution répondra à ces exigences ? budget AWS et recevoir des notifications d'utilisation involontaire. coûts pour suivre les coûts AWS de manière détaillée. les coûts individuellement. suivre la consommation des ressources à un niveau détaillé.",
    "options": [
      "Accédez à la console AWS Cost Management pour organiser les ressources, définir un",
      "Utilisez des balises pour organiser les ressources. Activez les balises d'allocation des",
      "Créez des tableaux de bord Amazon CloudWatch pour organiser et suivre visuellement",
      "Accédez au tableau de bord AWS Billing and Cost Management pour organiser et"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise doit planifier, programmer et exécuter des centaines de milliers de tâches informatiques sur AWS. Quel service AWS peut-elle utiliser pour répondre à ce besoin ?",
    "options": [
      "Fonctions d'étape AWS",
      "Catalogue de services AWS",
      "Service de file d'attente simple Amazon (Amazon SQS)",
      "Lot AWS"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quels services ou fonctionnalités AWS offrent une haute disponibilité et une faible latence en permettant le basculement entre différentes régions AWS ? (Choisissez deux réponses.) E. Équilibreur de charge d'application",
    "options": [
      "Route 53 de l'Amazone",
      "Équilibreur de charge réseau",
      "Accélération du transfert Amazon S3",
      "Accélérateur mondial AWS"
    ],
    "correctAnswers": [
      0,
      3
    ]
  },
  {
    "question": "Quelles capacités constituent les avantages du Cloud AWS ? (Choisissez deux réponses.) E. Réduisez les dépendances à la connectivité réseau.",
    "options": [
      "Échangez les dépenses variables contre des dépenses en capital.",
      "Déployez à l’échelle mondiale en quelques minutes.",
      "Planifiez la capacité avant les déploiements.",
      "Bénéficiez d’économies d’échelle."
    ],
    "correctAnswers": [
      1,
      3
    ]
  },
  {
    "question": "Quel service de sécurité AWS protège les applications contre les attaques par déni de service distribué avec une détection permanente et des atténuations automatiques en ligne ?",
    "options": [
      "Inspecteur Amazon",
      "Pare-feu d'application Web AWS (AWS WAF)",
      "Équilibrage de charge élastique (ELB)",
      "AWS Shield"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quel service AWS permet aux utilisateurs de modéliser et de provisionner des ressources AWS à l’aide de langages de programmation courants ?",
    "options": [
      "AWS CloudFormation",
      "AWS CodePipeline",
      "Kit de développement cloud AWS (AWS CDK)",
      "Gestionnaire des systèmes AWS"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel modèle de tarification d'instance Amazon EC2 peut offrir des remises allant jusqu'à 90 % ?",
    "options": [
      "Instances réservées",
      "Sur demande",
      "Hôtes dédiés",
      "Instances ponctuelles"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Lequel des éléments suivants agit comme un pare-feu au niveau de l’instance pour contrôler l’accès entrant et sortant ?",
    "options": [
      "Liste de contrôle d'accès au réseau",
      "Groupes de sécurité",
      "Conseiller de confiance AWS",
      "Passerelles privées virtuelles"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise doit pouvoir développer, tester et lancer rapidement une application dans le cloud AWS. Quels avantages du cloud computing permettent de répondre à ces exigences ?",
    "options": [
      "Arrêtez de deviner la capacité",
      "Échangez les dépenses fixes contre des dépenses variables",
      "Réaliser des économies d'échelle",
      "Augmenter la vitesse et l'agilité"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise dispose d'équipes aux rôles et responsabilités variés. Les employés changent souvent d'équipe. L'entreprise doit gérer les autorisations des employés afin qu'elles soient adaptées à leurs responsabilités. Quelle ressource IAM l'entreprise doit-elle utiliser pour répondre à cette exigence avec un minimum de charge opérationnelle ?",
    "options": [
      "Groupes d'utilisateurs IAM",
      "Rôles IAM",
      "Profils d'instance IAM",
      "Politiques IAM pour les utilisateurs individuels"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel service AWS une entreprise peut-elle utiliser pour stocker et crypter en toute sécurité les mots de passe d’une base de données ?",
    "options": [
      "AWS Shield",
      "Gestionnaire de secrets AWS",
      "Gestion des identités et des accès AWS (IAM)",
      "Amazon Cognito"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Que peut utiliser un praticien du cloud pour récupérer les documents de sécurité et de conformité AWS et les soumettre comme preuve à un auditeur ou à un régulateur ?",
    "options": [
      "Gestionnaire de certificats AWS",
      "Gestionnaire des systèmes AWS",
      "Artefact AWS",
      "Inspecteur Amazon"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quels types de chiffrement peuvent être utilisés pour protéger les objets au repos dans Amazon S3 ? (Choisissez deux réponses.) E. Chiffrement transparent des données (TDE)",
    "options": [
      "Chiffrement côté serveur avec clés de chiffrement gérées par Amazon S3 (SSE-S3)",
      "Chiffrement côté serveur avec clés gérées par AWS KMS (SSE-KMS)",
      "TLS",
      "SSL"
    ],
    "correctAnswers": [
      0,
      1
    ]
  },
  {
    "question": "Une entreprise souhaite intégrer son site de vente en ligne à ses identifiants de connexion aux réseaux sociaux. Quel service AWS peut-elle utiliser pour réaliser cette intégration ?",
    "options": [
      "Service d'annuaire AWS",
      "Gestion des identités et des accès AWS (IAM)",
      "Amazon Cognito",
      "Centre d'identité AWS IAM (AWS Single Sign-On)"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel service AWS est utilisé pour suivre, enregistrer et auditer les modifications de configuration apportées aux ressources AWS ?",
    "options": [
      "AWS Shield",
      "Configuration AWS",
      "AWS IAM",
      "Inspecteur Amazon"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Un client exécute une instance Amazon Linux EC2 à la demande pendant 3 heures, 5 minutes et 6 secondes. Combien de temps sera facturé au client ?",
    "options": [
      "3 heures, 5 minutes",
      "3 heures, 5 minutes et 6 secondes",
      "3 heures, 6 minutes",
      "4 heures"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Le site web d'une entreprise est victime d'attaques DDoS. Quel service AWS peut protéger le site web de l'entreprise contre ces attaques ?",
    "options": [
      "Gestionnaire d'accès aux ressources AWS",
      "AWS Amplify",
      "AWS Shield",
      "Amazon GuardDuty"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise souhaite une évaluation personnalisée de son environnement sur site actuel. Elle souhaite comprendre ses coûts d'exploitation prévisionnels dans le cloud AWS. Quel service ou outil AWS répondra à ces exigences ?",
    "options": [
      "Conseiller de confiance AWS",
      "Inspecteur Amazon",
      "Tour de contrôle AWS",
      "Évaluateur de migration"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise composée de plusieurs unités opérationnelles souhaite centraliser la gestion et la gouvernance de ses environnements cloud AWS. Elle souhaite automatiser la création de comptes AWS, appliquer des politiques de contrôle des services (SCP) et simplifier les processus de facturation. Quel service ou outil AWS doit-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "Organisations AWS",
      "Explorateur de coûts",
      "Budgets AWS",
      "Conseiller de confiance AWS"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise héberge une application dans le cloud AWS. Elle souhaite vérifier le bon fonctionnement des services AWS sous-jacents et de l'infrastructure AWS générale. Quelle combinaison de services AWS l'entreprise peut-elle utiliser pour collecter les informations nécessaires ? (Choisissez deux réponses.) E. Catalogue de services AWS",
    "options": [
      "Tableau de bord de santé personnel AWS",
      "Gestionnaire des systèmes AWS",
      "Conseiller de confiance AWS",
      "Tableau de bord de l'état du service AWS"
    ],
    "correctAnswers": [
      0,
      3
    ]
  },
  {
    "question": "Une entreprise doit migrer une base de données PostgreSQL de son site vers Amazon RDS. Quel service ou outil AWS doit-elle utiliser pour répondre à ce besoin ?",
    "options": [
      "Outil de préparation à l'adoption du cloud",
      "Centre de migration AWS",
      "Service de migration de base de données AWS (AWS DMS)",
      "Service de migration d'applications AWS"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel concept de cloud est démontré à l’aide d’AWS Compute Optimizer ?",
    "options": [
      "Validation de sécurité",
      "Redimensionnement",
      "Élasticité",
      "Portée mondiale"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise héberge une grande quantité de données sur AWS. Elle souhaite déterminer si certaines de ces données doivent être considérées comme sensibles. Quel service AWS répondra à ce besoin ?",
    "options": [
      "Inspecteur Amazon",
      "Amazon Macie",
      "Gestion des identités et des accès AWS (IAM)",
      "Amazon CloudWatch"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Un utilisateur dispose d'une charge de travail avec état qui s'exécutera sur Amazon EC2 pendant les trois prochaines années. Quel est le modèle de tarification le plus rentable pour cette charge de travail ?",
    "options": [
      "Instances à la demande",
      "Instances réservées",
      "Instances dédiées",
      "Instances ponctuelles"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Qui active le chiffrement des données au repos pour Amazon Elastic Block Store (Amazon EBS) ?",
    "options": [
      "Assistance AWS",
      "clients AWS",
      "Service de gestion des clés AWS (AWS KMS)",
      "Conseiller de confiance AWS"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Que peut accomplir un utilisateur en utilisant AWS CloudTrail ? directives. jour de sécurité.",
    "options": [
      "Générer un rapport sur les informations d’identification des utilisateurs IAM.",
      "Enregistrez les appels API effectués vers les services AWS.",
      "Évaluez la conformité des configurations de ressources AWS avec les politiques et les",
      "Assurez-vous que les instances Amazon EC2 sont corrigées avec les dernières mises à"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise envisage d'héberger ses charges de travail sur AWS. Quel service AWS nécessite la mise à jour et l'application de correctifs au système d'exploitation invité ?",
    "options": [
      "Amazon DynamoDB",
      "Amazon S3",
      "Amazon EC2",
      "Amazon Aurora"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel service ou fonctionnalité AWS recherchera et identifiera les ressources AWS partagées en externe ?",
    "options": [
      "Service Amazon OpenSearch",
      "Tour de contrôle AWS",
      "Analyseur d'accès AWS IAM",
      "AWS Fargate"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise migre ses charges de travail vers le cloud AWS. Elle doit conserver le contrôle total de la gestion des correctifs pour les systèmes d'exploitation invités qui hébergent ses applications. Quel service AWS doit-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "Amazon DynamoDB",
      "Amazon EC2",
      "AWS Lambda",
      "Amazon RDS"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "À quel niveau d'assistance les utilisateurs ont-ils accès à un concierge d'assistance ?",
    "options": [
      "Assistance de base",
      "Assistance aux développeurs",
      "Soutien aux entreprises",
      "Assistance aux entreprises"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quel service AWS une entreprise peut-elle utiliser pour concevoir et créer visuellement des applications sans serveur ?",
    "options": [
      "AWS Lambda",
      "Lot AWS",
      "AWS Application Composer",
      "AWS App Runner"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise souhaite migrer vers AWS et utiliser le même logiciel de sécurité qu'en local. Le fournisseur propose son logiciel de sécurité en tant que service sur AWS. Où l'entreprise peut-elle se procurer cette solution de sécurité ?",
    "options": [
      "Recherche de solutions partenaires AWS",
      "Centre de support AWS",
      "Console de gestion AWS",
      "Place de marché AWS"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise a déployé une instance Amazon EC2. Quelle option relève de la responsabilité d'AWS dans le cadre du modèle de responsabilité partagée d'AWS ? invité",
    "options": [
      "Gestion et cryptage des données d'application",
      "Installation des mises à jour et des correctifs de sécurité du système d'exploitation",
      "Configuration des dispositifs d'infrastructure",
      "Configuration des groupes de sécurité sur chaque instance"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise souhaite migrer sa base de données PostgreSQL vers AWS. Elle n'utilise pas fréquemment cette base de données. Quel service ou ressource AWS répondra à ces exigences avec le MOINS de frais de gestion ?",
    "options": [
      "PostgreSQL sur Amazon EC2",
      "Amazon RDS pour PostgreSQL",
      "Édition compatible Amazon Aurora PostgreSQL",
      "Amazon Aurora sans serveur"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise utilise Amazon DynamoDB pour sa base de données applicative. Quelles tâches sont de la responsabilité d'AWS, selon le modèle de responsabilité partagée d'AWS ? (Choisissez deux réponses.) E. Gérer la couche infrastructure et le système d'exploitation.",
    "options": [
      "Classer les données.",
      "Configurer les autorisations d'accès.",
      "Gérer les options de cryptage.",
      "Fournir des points de terminaison publics pour stocker et récupérer des données."
    ],
    "correctAnswers": [
      3,
      4
    ]
  },
  {
    "question": "Une entreprise souhaite créer une plateforme de commerce électronique accessible à l'échelle mondiale pour ses clients. Elle souhaite utiliser un service web DNS hautement disponible et évolutif pour connecter les utilisateurs à la plateforme. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Amazon EC2",
      "Amazon VPC",
      "Route 53 de l'Amazone",
      "Amazon RDS"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quelle tâche de maintenance relève de la responsabilité du client, selon le modèle de responsabilité partagée AWS ?",
    "options": [
      "Connectivité physique entre les zones de disponibilité",
      "Maintenance des commutateurs réseau",
      "Mises à jour matérielles et correctifs du micrologiciel",
      "Mises à jour et correctifs de sécurité Amazon EC2"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise souhaite améliorer sa sécurité en analysant l'activité des utilisateurs via des appels d'API. Quel service AWS répondra à cette exigence ?",
    "options": [
      "AWS WAF",
      "Détective Amazon",
      "Amazon CloudWatch",
      "AWS CloudTrail"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise bénéficiant du support AWS Enterprise lance une nouvelle version d'un produit populaire dans deux mois. Elle prévoit une forte augmentation du trafic sur son site web. Ce dernier est hébergé sur des instances Amazon EC2. Quelles mesures l'entreprise doit-elle prendre pour évaluer sa capacité à évoluer en vue de ce lancement ?",
    "options": [
      "Remplacez les instances EC2 par des fonctions AWS Lambda.",
      "Utilisez la prise en charge d'AWS Infrastructure Event Management (IEM).",
      "Soumettez une demande sur AWS Marketplace pour surveiller l'événement.",
      "Consultez les rapports de couverture dans la console AWS Cost Management."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise souhaite déployer plusieurs charges de travail sur AWS. Chaque charge de travail est liée à une unité opérationnelle distincte. L'entreprise souhaite séparer et suivre les coûts de chaque unité opérationnelle. Quelle solution répondra à ces exigences avec le MOINS de frais opérationnels ? ressource. commerciale. et suivre les coûts.",
    "options": [
      "Utilisez AWS Organizations et créez un compte pour chaque unité commerciale.",
      "Utilisez une feuille de calcul pour contrôler les propriétaires et le coût de chaque",
      "Utilisez une table Amazon DynamoDB pour enregistrer les coûts de chaque unité",
      "Utilisez la console de facturation AWS pour attribuer des propriétaires aux ressources"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise souhaite un service de base de données chronologiques facilitant le stockage et l'analyse de milliards d'événements quotidiens. Quel service AWS répondra à ce besoin ?",
    "options": [
      "Amazon Neptune",
      "Amazon Timestream",
      "Prévisions Amazon",
      "Amazon DocumentDB (avec compatibilité MongoDB)"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quelle option est un contrôle partagé entre AWS et le client, selon le modèle de responsabilité partagée AWS ?",
    "options": [
      "Gestion de la configuration",
      "Contrôles physiques et environnementaux",
      "Authentification de l'intégrité des données",
      "Gestion des identités et des accès"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Il arrive souvent qu'une entreprise n'utilise pas toute sa capacité Amazon EC2 actuelle pour exécuter des charges de travail sans état. Elle souhaite optimiser ses coûts EC2. Quel type d'instance EC2 répondra à ces exigences ?",
    "options": [
      "Instances ponctuelles",
      "Instances dédiées",
      "Instances réservées",
      "Instances à la demande"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise souhaite stocker ses données sur Amazon S3. Elle y accède rarement et celles- ci peuvent être régénérées si nécessaire. Elle souhaite stocker ses données dans la classe de stockage la plus économique. Quelle classe de stockage S3 répondra à ce besoin ?",
    "options": [
      "Norme S3",
      "S3 Intelligent-Tiering",
      "Norme S3 - Accès peu fréquent (Norme S3 - IA)",
      "S3 One Zone - Accès peu fréquent (S3 One Zone-IA)"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise a migré ses charges de travail vers AWS. Elle souhaite adopter AWS à grande échelle et opérer de manière plus efficace et sécurisée. Quel service ou framework AWS devrait-elle utiliser pour son support opérationnel ?",
    "options": [
      "Assistance AWS",
      "Cadre d'adoption du cloud AWS (AWS CAF)",
      "Services gérés AWS (AMS)",
      "Cadre AWS bien conçu"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise souhaite provisionner et gérer son infrastructure AWS en utilisant les langages de programmation courants TypeScript, Python, Java et .NET. Quel service AWS répondra à ce besoin ?",
    "options": [
      "AWS CodeBuild",
      "AWS CloudFormation",
      "AWS CLI",
      "Kit de développement cloud AWS (AWS CDK)"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quel modèle de tarification Amazon EC2 offre les PLUS d'économies pour un serveur de base de données toujours opérationnel et de taille adaptée, exécuté pour un projet qui durera 1 an ?",
    "options": [
      "Instances à la demande",
      "Instances réservées convertibles",
      "Instances ponctuelles",
      "Instances réservées standard"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise possède une bibliothèque de bandes physiques pour stocker ses sauvegardes de données. L'espace disponible est insuffisant. L'entreprise doit étendre sa capacité au cloud AWS. Quel service AWS doit-elle utiliser pour répondre à ce besoin ?",
    "options": [
      "Système de fichiers élastique Amazon (Amazon EFS)",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon S3",
      "Passerelle de stockage AWS"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise utilise l'offre gratuite AWS pour plusieurs services AWS d'une même application. Que se passera-t-il si la période d'utilisation de l'offre gratuite expire ou si l'utilisation de l'application dépasse les limites d'utilisation de l'offre gratuite ? dépassant l'utilisation du niveau gratuit. gratuite, ainsi que des frais supplémentaires pour la consommation de services après la période de l'offre gratuite. paiement établi.",
    "options": [
      "L'entreprise sera facturée aux tarifs de service standard à la carte pour l'utilisation",
      "Le support AWS contactera l'entreprise pour définir les frais de service standard.",
      "L'entreprise sera facturée pour les services consommés pendant la période de l'offre",
      "Le compte AWS de l'entreprise sera gelé et pourra être redémarré une fois un plan de"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise souhaite surveiller les performances de sa charge de travail. Elle souhaite s'assurer que les services cloud sont fournis à un niveau qui répond à ses besoins métier. Quelle approche du Cadre d'adoption du cloud AWS (AWS CAF) répond à ces exigences ?",
    "options": [
      "Entreprise",
      "Gouvernance",
      "Plate-forme",
      "Opérations"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise souhaite migrer ses applications vers le cloud AWS. Elle prévoit d'identifier et de prioriser les opportunités de transformation et d'évaluer son niveau de préparation au cloud AWS. Quel service ou outil AWS doit-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "Cadre d'adoption du cloud AWS (AWS CAF)",
      "Services gérés AWS (AMS)",
      "Cadre AWS bien conçu",
      "Centre de migration AWS"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise a besoin d'un service AWS fournissant une base claire de ce qu'elle exploite dans ses centres de données sur site. Elle a également besoin d'une estimation du coût d'exécution de ses charges de travail sur site dans le cloud AWS. Quel service ou outil AWS répondra à ces exigences ?",
    "options": [
      "Optimiseur de calcul AWS",
      "Explorateur de coûts AWS",
      "Agent AWS Systems Manager (agent SSM)",
      "Évaluateur de migration"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise a acquis une autre société. Elle possède désormais deux comptes AWS. Quel service ou outil AWS peut-elle utiliser pour consolider la facturation de ces deux comptes ?",
    "options": [
      "Gestionnaire des systèmes AWS",
      "Organisations AWS",
      "Gestionnaire de licences AWS",
      "Explorateur de coûts"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise souhaite configurer ses charges de travail pour qu'elles remplissent leurs fonctions prévues et se remettent rapidement d'une panne. Quel pilier du cadre AWS Well-Architected s'aligne sur ces objectifs ?",
    "options": [
      "Efficacité des performances",
      "Durabilité",
      "Fiabilité",
      "Sécurité"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Lequel des services AWS suivants est géré et utilisé spécifiquement pour extraire, transformer et charger des données (ETL) ?",
    "options": [
      "Amazone Athéna",
      "Colle AWS",
      "Amazon S3",
      "AWS Snowball Edge"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise souhaite migrer des pétaoctets de données de son centre de données local vers AWS. Elle ne souhaite pas utiliser de connexion Internet pour effectuer la migration. Quel service AWS répondra à ces exigences ?",
    "options": [
      "AWS DataSync",
      "Amazon Connect",
      "Motoneige AWS",
      "AWS Direct Connect"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise souhaite recevoir des alertes pour surveiller ses coûts d'exploitation globaux liés à son infrastructure cloud publique AWS. Quelle offre AWS répondra à ces exigences ?",
    "options": [
      "Amazon EventBridge",
      "Calculer les plans d'épargne",
      "Budgets AWS",
      "Évaluateur de migration"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Comment l’équipe AWS Enterprise Support Concierge aide-t-elle les utilisateurs ?",
    "options": [
      "Soutenir le développement d'applications",
      "Fournir des conseils en matière d'architecture",
      "Répondre aux demandes de facturation et de compte",
      "Répondre aux questions concernant les cas d'assistance technique"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise souhaite exécuter une simulation pendant 3 ans sans interruption. Quelle option d'achat d'instance Amazon EC2 répondra le mieux à ces exigences au meilleur rapport qualité-prix ?",
    "options": [
      "Instances ponctuelles",
      "Instances réservées",
      "Hôtes dédiés",
      "Instances à la demande"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel service ou ressource AWS peut offrir des remises sur certains coûts de service AWS en échange d’un engagement de dépenses ?",
    "options": [
      "Détective Amazon",
      "Calculateur de prix AWS",
      "Plans d'épargne",
      "Assistance de base"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Lesquels des éléments suivants constituent les piliers du cadre AWS Well-Architected ? (Choisissez deux réponses.) E. Développement continu",
    "options": [
      "Haute disponibilité",
      "Efficacité des performances",
      "Optimisation des coûts",
      "Devenir mondial en quelques minutes"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise souhaite utiliser des instances Amazon EC2 pour proposer un site web statique à ses utilisateurs du monde entier. Elle doit minimiser la latence pour ses utilisateurs. Quelle solution répond à ces exigences ? régions AWS. AWS différents.",
    "options": [
      "Utilisez des instances EC2 dans plusieurs emplacements périphériques.",
      "Utilisez des instances EC2 dans la même zone de disponibilité mais dans différentes",
      "Utilisez Amazon CloudFront avec les instances EC2 configurées comme source.",
      "Utilisez des instances EC2 dans la même zone de disponibilité mais dans des comptes"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une équipe de chercheurs va collecter des données dans des endroits isolés du monde entier. Nombre d'entre eux ne disposent pas d'une connexion Internet. L'équipe doit collecter les données sur le terrain et les transférer ultérieurement vers le cloud AWS. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Avant-postes AWS",
      "Famille de transfert AWS",
      "Famille AWS Snow",
      "Centre de migration AWS"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Parmi les avantages suivants, lesquels représentent pour une entreprise le transfert d'une charge de travail de production sur site vers AWS ? (Choisissez deux réponses.) (TAM). E. AWS offre des économies d’échelle.",
    "options": [
      "AWS forme le personnel de l'entreprise à l'utilisation de tous les services AWS.",
      "AWS gère toute la sécurité dans le cloud.",
      "AWS propose une assistance gratuite de la part de gestionnaires de comptes techniques",
      "AWS offre une haute disponibilité."
    ],
    "correctAnswers": [
      3,
      4
    ]
  },
  {
    "question": "Une entreprise a décidé d'adopter l'infrastructure Amazon EC2 et souhaite déployer divers services sans état pour une utilisation à court terme. Quel modèle de tarification EC2 est le plus rentable pour répondre à ces besoins ?",
    "options": [
      "Instances ponctuelles",
      "Instances à la demande",
      "Instances réservées",
      "Hôtes dédiés"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Parmi les avantages suivants, lesquels sont offerts par AWS Trusted Advisor ? (Choisissez deux options.) E. Gestion des approbations AWS Identity and Access Management (IAM)",
    "options": [
      "Accès à Amazon Simple Queue Service (Amazon SQS)",
      "Recommandations d'optimisation des coûts",
      "Actualisation horaire des contrôles de limite de service",
      "Contrôles de sécurité"
    ],
    "correctAnswers": [
      1,
      3
    ]
  },
  {
    "question": "Une entreprise souhaite réduire ses coûts en archivant les données auxquelles les utilisateurs finaux n'ont plus accès fréquemment. Quelle fonctionnalité d'Amazon S3 répond à ce besoin ?",
    "options": [
      "Gestion des versions S3",
      "Cycle de vie S3",
      "Verrouillage d'objet S3",
      "Inventaire S3"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel avantage du cloud computing une entreprise applique-t-elle lorsqu'elle utilise les régions AWS pour augmenter la disponibilité des applications pour les utilisateurs dans différents pays ?",
    "options": [
      "Tarification à l'utilisation",
      "Prévision de capacité",
      "Économies d'échelle",
      "Portée mondiale"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise souhaite utiliser un service AWS pour collecter et traiter 10 To de données localement et les transférer vers AWS. La connectivité de l'entreprise est intermittente. Quel service AWS répondra à ces besoins ?",
    "options": [
      "Service de migration de base de données AWS (AWS DMS)",
      "AWS DataSync",
      "Sauvegarde AWS",
      "AWS Snowball Edge"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Lequel des éléments suivants est un principe de conception du cadre AWS Well-Architected pour l’excellence opérationnelle dans le cloud AWS ? centre de données.",
    "options": [
      "Devenez mondial en quelques minutes.",
      "Faites des changements fréquents, petits et réversibles.",
      "Mettre en œuvre une base solide de gestion des identités et des accès",
      "Arrêtez de dépenser de l’argent en infrastructure matérielle pour les opérations du"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel est l’avantage d’utiliser l’informatique sans serveur AWS ?",
    "options": [
      "Le déploiement et la gestion des applications ne sont pas requis.",
      "La sécurité des applications sera entièrement gérée par AWS.",
      "La surveillance et la journalisation ne sont pas nécessaires.",
      "La gestion de l’infrastructure est confiée à AWS."
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Un développeur souhaite que les utilisateurs AWS puissent accéder aux services AWS à l'aide d'identifiants de sécurité temporaires. Quel service ou fonctionnalité AWS doit-il utiliser pour fournir ces identifiants ?",
    "options": [
      "Politiques IAM",
      "Groupes d'utilisateurs IAM",
      "Service de jeton de sécurité AWS (AWS STS)",
      "Centre d'identité AWS IAM (AWS Single Sign-On)"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise internationale souhaite utiliser un service de sécurité géré pour se protéger contre les attaques par injection SQL. Ce service doit également fournir des informations de journalisation détaillées sur l'accès à ses applications e-commerce. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Pare-feu réseau AWS",
      "Amazon RDS pour SQL Server",
      "Amazon GuardDuty",
      "AWS WAF"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise migre son serveur sur site vers une instance Amazon EC2. Le serveur doit rester actif en permanence pendant les 12 prochains mois. Quelle option tarifaire EC2 est la plus rentable pour la charge de travail de l'entreprise ?",
    "options": [
      "Sur demande",
      "Hôtes dédiés",
      "Instances ponctuelles",
      "Instances réservées"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Laquelle des responsabilités suivantes incombe au client dans le cadre du modèle de responsabilité partagée AWS ? (Choisissez deux options.) E. Maintenir le matériel d'infrastructure.",
    "options": [
      "Maintenir la configuration des périphériques d'infrastructure.",
      "Maintenir les correctifs et les mises à jour au sein de l'infrastructure matérielle.",
      "Maintenir la configuration des systèmes d’exploitation et des applications invités.",
      "Gérer les décisions impliquant des options de cryptage."
    ],
    "correctAnswers": [
      2,
      3
    ]
  },
  {
    "question": "Une entreprise souhaite vérifier si l'authentification multifacteur (MFA) est activée pour tous les utilisateurs de ses comptes AWS. Quel service ou ressource AWS répond à cette exigence ?",
    "options": [
      "Rapport sur les coûts et l'utilisation d'AWS",
      "Rapports d'identification IAM",
      "Artefact AWS",
      "Rapports Amazon CloudFront"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise utilise les services et outils de sécurité AWS. Elle a besoin d'un service pour gérer les alertes de sécurité et les organiser dans un tableau de bord unique. Quel service AWS doit-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "Amazon GuardDuty",
      "Inspecteur Amazon",
      "Amazon Macie",
      "Centre de sécurité AWS"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise souhaite exécuter efficacement ses charges de travail dans le cloud AWS, réduire ses frais de gestion et améliorer ses processus. Quel pilier du framework AWS Well-Architected répond à ces exigences ?",
    "options": [
      "Fiabilité",
      "Excellence opérationnelle",
      "Efficacité des performances",
      "Optimisation des coûts"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise utilise Amazon S3 pour stocker des enregistrements susceptibles de contenir des informations personnelles identifiables (IPI). Elle recherche une solution capable de surveiller tous les compartiments S3 à la recherche d'IPI et d'alerter immédiatement le personnel en cas de vulnérabilité. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Amazon GuardDuty",
      "Détective Amazon",
      "Amazon Macie",
      "AWS Shield"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel service AWS permet aux utilisateurs de télécharger des rapports de sécurité et de conformité sur l’infrastructure AWS à la demande ?",
    "options": [
      "Amazon GuardDuty",
      "Centre de sécurité AWS",
      "Artefact AWS",
      "AWS Shield"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Un auditeur externe a demandé à une entreprise de lui fournir la liste de tous ses utilisateurs IAM, y compris le statut de leurs identifiants et clés d'accès. Quelle est la manière la plus simple de fournir ces informations ? d’administrateur. AWS, puis fournissez les captures d'écran à l'auditeur.",
    "options": [
      "Créez un compte utilisateur IAM pour l’auditeur, en lui accordant des autorisations",
      "Prenez une capture d'écran de la page de chaque utilisateur dans la console de gestion",
      "Téléchargez le rapport d’accréditation IAM, puis fournissez-le à l’auditeur.",
      "Téléchargez le rapport AWS Trusted Advisor, puis fournissez-le à l’auditeur."
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quelle tâche une entreprise peut-elle effectuer en utilisant des groupes de sécurité dans le cloud AWS ?",
    "options": [
      "Autoriser l’accès à une instance Amazon EC2 via un port spécifique uniquement.",
      "Refuser l’accès aux adresses IP malveillantes au niveau du sous-réseau.",
      "Protégez les données mises en cache par Amazon CloudFront.",
      "Appliquez un pare-feu sans état à une instance Amazon EC2."
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise prévoit d'exécuter une charge de travail gourmande en ressources de calcul utilisant des processeurs graphiques (GPU). Quel type d'instance Amazon EC2 doit-elle utiliser ?",
    "options": [
      "Calcul accéléré",
      "Calcul optimisé",
      "Stockage optimisé",
      "Usage général"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Lesquelles des caractéristiques suivantes correspondent aux listes de contrôle d'accès réseau utilisées dans le cloud AWS ? (Choisissez deux options.) bas, lorsqu'ils décident d'autoriser ou non le trafic. E. Ils opèrent au niveau de l’instance.",
    "options": [
      "Ils sont apatrides.",
      "Ils sont avec état.",
      "Ils évaluent toutes les règles avant d’autoriser la circulation.",
      "Ils traitent les règles dans l'ordre, en commençant par la règle portant le numéro le plus"
    ],
    "correctAnswers": [
      0,
      3
    ]
  },
  {
    "question": "Quelles sont les fonctionnalités de la plateforme AWS Cloud Adoption Framework (AWS CAF) ? (Choisissez deux réponses.) E. Gestion des changements et des versions",
    "options": [
      "Gestion des performances et des capacités",
      "Ingénierie des données",
      "Intégration continue et livraison continue (CI/CD)",
      "Protection des infrastructures"
    ],
    "correctAnswers": [
      1,
      2
    ]
  },
  {
    "question": "Selon le modèle de responsabilité partagée d'AWS, le client est responsable de l'application des dernières mises à jour et correctifs de sécurité pour lesquels des éléments suivants ?",
    "options": [
      "Amazon DynamoDB",
      "Instances Amazon EC2",
      "Instances Amazon RDS",
      "Amazon S3"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quelle classe de stockage Amazon S3 est la plus rentable pour les modèles d’accès inconnus ?",
    "options": [
      "Norme S3",
      "Norme S3 - Accès peu fréquent (Norme S3 - IA)",
      "S3 One Zone - Accès peu fréquent (S3 One Zone-IA)",
      "S3 Intelligent-Tiering"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quelles sont les options offertes par la perspective de sécurité d'AWS Cloud Adoption Framework (AWS CAF) ? (Choisissez deux options.) E. Disponibilité et continuité",
    "options": [
      "Observabilité",
      "Gestion des incidents et des problèmes",
      "Réponse aux incidents",
      "Protection des infrastructures"
    ],
    "correctAnswers": [
      2,
      3
    ]
  },
  {
    "question": "Une entreprise dispose d'une politique IAM gérée qui n'accorde pas les autorisations nécessaires aux utilisateurs pour accomplir les tâches requises. Comment résoudre ce problème ? Marketplace. client.",
    "options": [
      "Activez AWS Shield Advanced.",
      "Créez une politique IAM personnalisée.",
      "Utilisez une règle gérée par un pare-feu d’application Web (WAF) tiers à partir d’AWS",
      "Utilisez AWS Key Management Service (AWS KMS) pour créer une clé gérée par le"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Qui est responsable de la gestion de l’accès des utilisateurs IAM et des clés secrètes selon le modèle de responsabilité partagée AWS ? les faire tourner.",
    "options": [
      "Les clés d'accès et les clés secrètes IAM sont statiques, il n'est donc pas nécessaire de",
      "Le client est responsable de la rotation des clés.",
      "AWS fera tourner les clés chaque fois que nécessaire.",
      "L'équipe de support AWS effectuera une rotation des clés à la demande du client."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise doit installer un pare-feu tiers préinstallé sur une instance Amazon EC2. Quel service ou fonctionnalité AWS peut offrir cette solution ?",
    "options": [
      "Listes de contrôle d'accès réseau",
      "Groupes de sécurité",
      "Place de marché AWS",
      "Conseiller de confiance AWS"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel avantage d’AWS Cloud donne à une entreprise la possibilité de déployer rapidement des ressources cloud pour accéder aux infrastructures de calcul, de stockage et de base de données en quelques minutes ?",
    "options": [
      "Élasticité",
      "Économies de coûts",
      "Agilité",
      "Fiabilité"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Laquelle des tâches suivantes relève entièrement de la responsabilité d’AWS, selon le modèle de responsabilité partagée d’AWS ?",
    "options": [
      "Sensibilisation et formation à la sécurité",
      "Développement d'une politique de mot de passe IAM",
      "Correction du système d'exploitation invité",
      "Contrôles physiques et environnementaux"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Laquelle des caractéristiques suivantes est celle de l’utilisateur racine du compte AWS ? multifacteur (MFA). d'un compte AWS.",
    "options": [
      "L'utilisateur root est le seul utilisateur qui peut être configuré avec l'authentification",
      "L'utilisateur root est le seul utilisateur pouvant accéder à la console de gestion AWS.",
      "L'utilisateur root est la première identité de connexion disponible lors de la création",
      "L'utilisateur root dispose d'un mot de passe qui ne peut pas être modifié."
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une instance Amazon EC2 précédemment utilisée pour le développement est inaccessible et n'apparaît plus dans la console de gestion AWS. Quel service AWS doit être utilisé pour déterminer l'action ayant rendu cette instance EC2 inaccessible ?",
    "options": [
      "Journaux Amazon CloudWatch",
      "Centre de sécurité AWS",
      "Inspecteur Amazon",
      "AWS CloudTraiI"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Les développeurs d'applications d'une entreprise doivent provisionner et gérer rapidement les services AWS à l'aide de scripts. Quelle offre AWS devraient-ils utiliser pour répondre à ces exigences ?",
    "options": [
      "AWS CLI",
      "AWS CodeBuild",
      "Cadre d'adoption du cloud AWS (AWS CAF)",
      "Gestionnaire de sessions AWS Systems Manager"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise souhaite migrer des données non structurées vers AWS. Ces données doivent être transférées de manière sécurisée, avec un chiffrement en temps réel et une validation de bout en bout. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Service de migration d'applications AWS",
      "Système de fichiers élastique Amazon (Amazon EFS)",
      "AWS DataSync",
      "Centre de migration AWS"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une équipe de développement souhaite déployer plusieurs environnements de test pour une application de manière rapide et reproductible. Quel service AWS devrait-elle utiliser ?",
    "options": [
      "Amazon EC2",
      "AWS CloudFormation",
      "Amazon QuickSight",
      "Amazon Elastic Container Service (Amazon ECS)"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise souhaite mettre en œuvre rapidement un pipeline d'intégration continue/livraison continue (CI/CD). Quel service AWS répondra à ce besoin ?",
    "options": [
      "Configuration AWS",
      "Amazon Cognito",
      "AWS DataSync",
      "AWS CodeStar"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quel modèle de déploiement AWS Cloud utilise AWS Outposts dans le cadre de l’infrastructure de déploiement d’applications ?",
    "options": [
      "Sur site",
      "Sans serveur",
      "Cloud natif",
      "Hybride"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Lequel des services suivants est un service de base de données graphique entièrement géré sur AWS ?",
    "options": [
      "Amazon Aurora",
      "Amazon FSx",
      "Amazon DynamoDB",
      "Amazon Neptune"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quel service AWS un administrateur pourrait-il utiliser pour fournir des environnements de bureau à plusieurs employés ?",
    "options": [
      "Organisations AWS",
      "AWS Fargate",
      "AWS WAF",
      "Espaces de travail AWS"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quel service ou fonctionnalité AWS donne aux utilisateurs la possibilité de capturer des informations sur le trafic réseau dans un VPC ?",
    "options": [
      "Journaux de flux VPC",
      "Inspecteur Amazon",
      "Tables de routage VPC",
      "AWS CloudTrail"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quel type de stockage AWS est éphémère et est supprimé lorsqu'une instance Amazon EC2 est arrêtée ou résiliée ?",
    "options": [
      "Amazon Elastic Block Store (Amazon EBS)",
      "Magasin d'instances Amazon EC2",
      "Système de fichiers élastique Amazon (Amazon EFS)",
      "Amazon S3"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise souhaite fournir un accès aux partages de fichiers Windows dans AWS depuis ses charges de travail sur site. Elle ne souhaite pas provisionner d'infrastructure ni d'applications supplémentaires dans son centre de données. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Passerelle de fichiers Amazon FSx",
      "AWS DataSync",
      "Amazon S3",
      "Famille AWS Snow"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise souhaite un stockage durable pour son contenu statique et une infrastructure de stockage de données évolutive à l'infini au moindre coût. Quel service AWS choisir ?",
    "options": [
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon S3",
      "Passerelle de stockage AWS",
      "Système de fichiers élastique Amazon (Amazon EFS)"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise de e-commerce souhaite utiliser Amazon EC2 Auto Scaling pour ajouter et supprimer des instances EC2 en fonction de l'utilisation du processeur. Quel service ou fonctionnalité AWS peut lancer une action Amazon EC2 Auto Scaling pour atteindre cet objectif ?",
    "options": [
      "Service de file d'attente simple Amazon (Amazon SQS)",
      "Service de notification simple d'Amazon (Amazon SNS)",
      "Gestionnaire des systèmes AWS",
      "Alarme Amazon CloudWatch"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise souhaite transformer ses effectifs en attirant et en formant des collaborateurs performants et à l'aise avec le numérique. Elle souhaite attirer une main-d'œuvre diversifiée et inclusive, dotée d'un équilibre approprié entre compétences techniques et non techniques. Quelle perspective du Cadre d'adoption du cloud AWS (AWS CAF) répondra à ces exigences ?",
    "options": [
      "Entreprise",
      "Personnes",
      "Plate-forme",
      "Opérations"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise souhaite migrer ses bases de données sur site vers des services de bases de données cloud gérés grâce à un processus de migration simplifié. Quel service ou outil AWS peut l'aider à répondre à ce besoin ?",
    "options": [
      "Passerelle de stockage AWS",
      "Service de migration d'applications AWS",
      "AWS DataSync",
      "Service de migration de base de données AWS (AWS DMS)"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise a besoin d'un serveur de fichiers entièrement géré prenant en charge nativement les charges de travail et les systèmes de fichiers Microsoft. Ce serveur doit également prendre en charge le protocole SMB. Quel service AWS l'entreprise doit-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "Système de fichiers élastique Amazon (Amazon EFS)",
      "Amazon FSx pour Lustre",
      "Amazon FSx pour serveur de fichiers Windows",
      "Amazon Elastic Block Store (Amazon EBS)"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise stocke ses rapports mensuels dans un bucket Amazon S3. Elle exporte les données de ces rapports dans des fichiers CSV (valeurs séparées par des virgules). Un développeur souhaite créer une requête simple capable de lire tous ces fichiers et de générer un rapport récapitulatif. Quel service ou fonctionnalité AWS le développeur devrait-il utiliser pour répondre à ces exigences avec un minimum de frais opérationnels ?",
    "options": [
      "Amazon S3 Select",
      "Amazone Athéna",
      "Amazon Redshift",
      "Amazon EC2"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quelle fonctionnalité AWS fournit une plate-forme gratuite permettant aux utilisateurs AWS de rejoindre des groupes communautaires, de poser des questions, de trouver des réponses et de lire des articles générés par la communauté sur les meilleures pratiques ?",
    "options": [
      "Centre de connaissances AWS",
      "AWS re:Post",
      "AWS IQ",
      "Assistance AWS Enterprise"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise doit rechercher du texte dans des documents stockés sur Amazon S3. Quel service AWS répond à ces exigences ?",
    "options": [
      "Amazon Kendra",
      "Reconnaissance d'Amazon",
      "Amazon Polly",
      "Amazon Lex"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quels services AWS utilisent des emplacements périphériques mondiaux ? (Choisissez deux réponses.) E. Amazon VPC",
    "options": [
      "AWS Fargate",
      "Amazon CloudFront",
      "Accélérateur mondial AWS",
      "Longueur d'onde AWS"
    ],
    "correctAnswers": [
      1,
      2
    ]
  },
  {
    "question": "Un utilisateur a besoin d'une base de données relationnelle, mais ne dispose pas des ressources nécessaires pour gérer le matériel, la résilience et la réplication. Quelle option de service AWS répond à ses besoins ?",
    "options": [
      "Exécutez MySQL sur Amazon Elastic Container Service (Amazon ECS).",
      "Exécutez MySQL sur Amazon EC2.",
      "Choisissez Amazon RDS pour MySQL.",
      "Choisissez Amazon ElastiCache pour Redis."
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise doit déployer ses applications dans le cloud AWS le plus rapidement possible. Elle doit également minimiser la complexité liée à la gestion des ressources AWS. Quel service AWS doit-elle utiliser pour répondre à ces exigences ?",
    "options": [
      "Configuration AWS",
      "AWS Elastic Beanstalk",
      "Amazon EC2",
      "Amazon Personnaliser"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel mécanisme permet aux développeurs d’accéder aux services AWS à partir du code de l’application ?",
    "options": [
      "Kit de développement logiciel AWS",
      "Console de gestion AWS",
      "AWS CodePipeline",
      "Configuration AWS"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise migre vers le cloud AWS. Elle souhaite comprendre et identifier les erreurs de configuration de sécurité potentielles ou les comportements inattendus. Elle souhaite hiérarchiser les contrôles de protection nécessaires. Quelle fonctionnalité de sécurité du cadre d'adoption du cloud AWS (AWS CAF) répondra à ces exigences ?",
    "options": [
      "Gestion des identités et des accès",
      "Détection des menaces",
      "Ingénierie de plateforme",
      "Gestion de la disponibilité et de la continuité"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise souhaite établir une connexion réseau privée entre AWS et son réseau interne. Quel service ou fonctionnalité AWS répondra à ce besoin ?",
    "options": [
      "Amazon Connect",
      "Route 53 de l'Amazone",
      "AWS Direct Connect",
      "Appairage VPC"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quels services ou fonctionnalités AWS permettent aux utilisateurs de créer une connexion réseau entre deux VPC ? (Choisissez deux réponses.) E. Passerelle de transit AWS",
    "options": [
      "Points de terminaison VPC",
      "Route 53 de l'Amazone",
      "Appairage VPC",
      "AWS Direct Connect"
    ],
    "correctAnswers": [
      2,
      4
    ]
  },
  {
    "question": "Quel service AWS convertit le texte en voix réalistes ?",
    "options": [
      "Amazon Transcribe",
      "Reconnaissance d'Amazon",
      "Amazon Polly",
      "Amazon Texttract"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise souhaite utiliser des piles d'applications pour exécuter une charge de travail dans le cloud AWS. Elle souhaite utiliser des instances préconfigurées. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Amazon Lightsail",
      "Amazone Athéna",
      "Avant-postes AWS",
      "Amazon EC2"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quels services AWS sont pris en charge par les plans d'épargne ? (Choisissez deux réponses.) E. Amazon DynamoDB",
    "options": [
      "Amazon EC2",
      "Amazon RDS",
      "Amazon SageMaker",
      "Amazon Redshift"
    ],
    "correctAnswers": [
      0,
      2
    ]
  },
  {
    "question": "Quel service ou outil AWS peut fournir des recommandations de dimensionnement pour les ressources Amazon EC2 sans frais supplémentaires ?",
    "options": [
      "Outil AWS bien conçu",
      "Amazon CloudWatch",
      "Explorateur de coûts AWS",
      "Analyses Amazon S3"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise exploite un entrepôt de données de plusieurs pétaoctets pour analyser ses données. Elle recherche une solution qui ne nécessite pas de gestion manuelle du matériel et des logiciels. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Amazon DocumentDB (avec compatibilité MongoDB)",
      "Amazon Redshift",
      "Amazon Neptune",
      "Amazon ElastiCache"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une bibliothèque souhaite automatiser la classification des livres électroniques en fonction de leur contenu. Quel service AWS doit-elle utiliser pour répondre à cette exigence ?",
    "options": [
      "Amazon Redshift",
      "Amazon CloudSearch",
      "Amazon Comprehend",
      "Amazon Aurora"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quelle tâche relève de la responsabilité d’AWS, selon le modèle de responsabilité partagée d’AWS ?",
    "options": [
      "Cryptage des données d'application",
      "Authentification des utilisateurs de l'application",
      "Protection de l'infrastructure physique du réseau",
      "Configuration des pare-feu"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quelles options sont recommandées pour la transformation du cloud dans le cadre du AWS Cloud Adoption Framework (AWS CAF) ? (Choisissez deux options.) E. Phase de migration et de modernisation",
    "options": [
      "Phase de visualisation",
      "Phase d'alignement",
      "Phase d'évaluation",
      "Phase de mobilisation"
    ],
    "correctAnswers": [
      0,
      1
    ]
  },
  {
    "question": "Une entreprise souhaite générer une liste d'utilisateurs IAM. Elle souhaite également consulter l'état des différents identifiants associés aux utilisateurs, tels que les mots de passe, les clés d'accès et les dispositifs d'authentification multifacteur (MFA). Quel service ou fonctionnalité AWS répondra à ces exigences ?",
    "options": [
      "Rapport d'accréditation IAM",
      "Centre d'identité AWS IAM (AWS Single Sign-On)",
      "Analyseur d'accès AWS Identity and Access Management",
      "Rapport sur les coûts et l'utilisation d'AWS"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise conçoit ses charges de travail AWS de manière à ce que les composants puissent être mis à jour régulièrement et que les modifications puissent être apportées par petits incréments réversibles. Quel pilier du cadre AWS Well-Architected cette conception prend-elle en charge ?",
    "options": [
      "Sécurité",
      "Efficacité des performances",
      "Excellence opérationnelle",
      "Fiabilité"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise souhaite suivre les balises, les buckets et les préfixes de ses objets Amazon S3. Quelle fonctionnalité S3 répondra à ce besoin ?",
    "options": [
      "Rapport d'inventaire S3",
      "Cycle de vie S3",
      "Gestion des versions S3",
      "ACL S3"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise souhaite permettre à ses utilisateurs d'authentifier et d'autoriser plusieurs comptes AWS à l'aide d'un seul ensemble d'identifiants. Quel service ou ressource AWS répondra à cette exigence ?",
    "options": [
      "Organisations AWS",
      "Utilisateur IAM",
      "Centre d'identité AWS IAM (AWS Single Sign-On)",
      "Tour de contrôle AWS"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise a créé une instance Amazon EC2. Elle souhaite contrôler le trafic réseau entrant et sortant au niveau de l'instance. Quelle ressource ou quel service AWS répondra à ce besoin ?",
    "options": [
      "AWS Shield",
      "Groupes de sécurité",
      "Analyseur d'accès au réseau",
      "Points de terminaison VPC"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise souhaite utiliser le cloud AWS pour déployer une application à l'échelle mondiale. Quel modèle d'architecture de déploiement doit-elle adopter pour répondre à ce besoin ?",
    "options": [
      "Multi-région",
      "Région unique",
      "Multi-AZ",
      "Single-AZ"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise souhaite une application web permettant d'interagir avec différents services AWS. Quel service ou ressource AWS répondra à ce besoin ?",
    "options": [
      "AWS CloudShell",
      "Place de marché AWS",
      "Console de gestion AWS",
      "AWS CLI"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise migre ses applications sur site vers le cloud AWS. Elle souhaite s'assurer que les applications disposent uniquement des autorisations minimales nécessaires à l'exécution de toutes les opérations. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Gestion des identités et des accès AWS (IAM)",
      "Amazon CloudWatch",
      "Amazon Macie",
      "Amazon GuardDuty"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quelles sont les options offertes par la perspective de gouvernance d'AWS Cloud Adoption Framework (AWS CAF) ? (Choisissez deux options.) E. Gestion de produits",
    "options": [
      "Gestion des identités et des accès",
      "Gestion financière dans le cloud",
      "Gestion du portefeuille d'applications",
      "Gestion de l'innovation"
    ],
    "correctAnswers": [
      1,
      2
    ]
  },
  {
    "question": "Quel service AWS fournit un emplacement unique pour suivre la progression des migrations d’applications ?",
    "options": [
      "Service de découverte d'applications AWS",
      "Service de migration d'applications AWS",
      "Catalogue de services AWS",
      "Centre de migration AWS"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise a lancé une instance Amazon EC2 avec la dernière image machine Amazon Linux 2 (AMI). Quelles actions un administrateur système peut-il effectuer pour se connecter à l'instance EC2 ? (Choisissez deux réponses.) E. Utilisez Amazon Connect.",
    "options": [
      "Utilisez Amazon EC2 Instance Connect.",
      "Utilisez une connexion RDP (Remote Desktop Protocol).",
      "Utilisez AWS Batch.",
      "Utilisez AWS Systems Manager Session Manager."
    ],
    "correctAnswers": [
      0,
      3
    ]
  },
  {
    "question": "Quel concept d’architecture décrit la capacité à déployer des ressources à la demande et à libérer des ressources lorsqu’elles ne sont plus nécessaires ?",
    "options": [
      "Haute disponibilité",
      "Architecture découplée",
      "Résilience",
      "Élasticité"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quelle tâche nécessite qu’un utilisateur se connecte en tant qu’utilisateur racine du compte AWS ?",
    "options": [
      "La suppression des utilisateurs IAM",
      "La suppression d'un compte AWS",
      "La création d'une organisation dans AWS Organizations",
      "La suppression des instances Amazon EC2"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Que propose la classe de stockage Amazon S3 Intelligent-Tiering ? Elastic Block Store (Amazon EBS) chiffré des modifications du modèle d'accès",
    "options": [
      "Flexibilité de paiement en réservant des capacités de stockage",
      "Conservation à long terme des données en copiant les données sur un volume Amazon",
      "Économies de coûts automatiques en déplaçant les objets entre les niveaux en fonction",
      "Stockage sécurisé, durable et à moindre coût pour l'archivage des données"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise a besoin d'instances Amazon EC2 pour une charge de travail capable de supporter des interruptions. Quelle option d'achat d'instance EC2 répond à ce besoin et offre la plus forte réduction par rapport aux tarifs à la demande ?",
    "options": [
      "Instances ponctuelles",
      "Instances réservées convertibles",
      "Instances réservées standard",
      "Hôtes dédiés"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Une entreprise envisage de migrer vers le cloud AWS. Elle souhaite identifier des résultats opérationnels mesurables qui expliqueront la valeur de sa décision de migrer. À quelle phase de la transformation cloud ces activités sont-elles associées ?",
    "options": [
      "Imaginer",
      "Aligner",
      "Échelle",
      "Lancement"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quel service ou composant AWS permet au trafic entrant provenant d’Internet d’accéder à un VPC ?",
    "options": [
      "passerelle Internet",
      "passerelle NAT",
      "AWS WAF",
      "Appairage VPC"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quel service AWS les entreprises peuvent-elles utiliser pour créer une infrastructure à partir de code ?",
    "options": [
      "Amazon Elastic Kubernetes Service (Amazon EKS)",
      "Avant-postes AWS",
      "AWS CodePipeline",
      "AWS CloudFormation"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quelle ligne directrice constitue un principe de conception bien architecturé pour la création d’applications cloud ?",
    "options": [
      "Gardez les données statiques plus proches des ressources de calcul.",
      "Fournir des ressources pour une capacité de pointe.",
      "Conception pour une récupération automatisée après une panne.",
      "Utiliser des composants étroitement couplés."
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Une entreprise doit transférer 75 pétaoctets de données de ses centres de données locaux vers AWS. Quel service AWS devrait-elle utiliser pour répondre à ces besoins de la manière la plus rentable ?",
    "options": [
      "Stockage optimisé pour AWS Snowball Edge",
      "Motoneige AWS",
      "AWS Direct Connect",
      "Passerelle de stockage AWS"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Lesquels des éléments suivants constituent les piliers du cadre AWS Well-Architected ? (Choisissez deux réponses.) E. Excellence opérationnelle",
    "options": [
      "Évolutivité des ressources",
      "Efficacité des performances",
      "Élasticité du système",
      "Développement agile"
    ],
    "correctAnswers": [
      1,
      4
    ]
  },
  {
    "question": "Une entreprise doit connecter son centre de données sur site au cloud AWS. Elle a besoin d'une connexion dédiée à faible latence et de performances réseau constantes. Quel service AWS répondra à ces exigences ?",
    "options": [
      "Accélérateur mondial AWS",
      "Amazon CloudFront",
      "AWS Direct Connect",
      "VPN géré par AWS"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quels principes de conception une entreprise devrait-elle appliquer aux charges de travail AWS Cloud pour maximiser la durabilité et minimiser l'impact environnemental ? (Choisissez deux réponses.) E. Réduisez le besoin pour les utilisateurs de réinstaller des applications.",
    "options": [
      "Maximisez l’utilisation des instances Amazon EC2.",
      "Minimisez l’utilisation des instances Amazon EC2.",
      "Minimiser l’utilisation des services gérés.",
      "Forcer les réinstallations fréquentes d'applications par les utilisateurs."
    ],
    "correctAnswers": [
      0,
      4
    ]
  },
  {
    "question": "De quelles manières le cloud AWS offre-t-il un coût total de possession (TCO) des ressources informatiques inférieur à celui des centres de données sur site ? (Choisissez deux réponses.) utilisateurs. E. AWS propose un modèle de tarification unique pour les instances Amazon EC2.",
    "options": [
      "AWS remplace les dépenses d’investissement initiales par des coûts à la carte.",
      "AWS est conçu pour une haute disponibilité, ce qui élimine les temps d’arrêt des",
      "AWS élimine le besoin de personnel informatique sur site.",
      "AWS utilise des économies d’échelle pour réduire continuellement les prix."
    ],
    "correctAnswers": [
      0,
      3
    ]
  },
  {
    "question": "Une entreprise souhaite déployer certaines de ses ressources dans le cloud AWS. Pour répondre aux exigences réglementaires, les données doivent rester locales et sur site. La latence entre AWS et les ressources de l'entreprise doit être faible. Quel service ou fonctionnalité AWS peut être utilisé pour répondre à ces exigences ?",
    "options": [
      "Zones locales AWS",
      "Zones de disponibilité",
      "Avant-postes AWS",
      "Zones de longueur d'onde AWS"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Lesquels des services AWS suivants sont sans serveur ? (Choisissez deux réponses.) E. AWS Lambda",
    "options": [
      "Avant-postes AWS",
      "Amazon EC2",
      "Amazon Elastic Kubernetes Service (Amazon EKS)",
      "AWS Fargate"
    ],
    "correctAnswers": [
      3,
      4
    ]
  },
  {
    "question": "Lorsqu'un utilisateur souhaite utiliser ses licences logicielles existantes par socket, par cœur ou par machine virtuelle pour un serveur Microsoft Windows exécuté sur AWS, quel type d'instance Amazon EC2 est requis ?",
    "options": [
      "Instances ponctuelles",
      "Instances dédiées",
      "Hôtes dédiés",
      "Instances réservées"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Un architecte de solutions doit gérer un parc d'instances Amazon EC2 afin de remplacer les instances défectueuses par de nouvelles. Quel service AWS doit-il utiliser ?",
    "options": [
      "Amazon Elastic Container Service (Amazon ECS)",
      "Amazon GuardDuty",
      "AWS Shield",
      "Mise à l'échelle automatique AWS"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quel service AWS fournit des applications sur site avec un accès à faible latence aux données stockées dans le cloud AWS ?",
    "options": [
      "Amazon CloudFront",
      "Passerelle de stockage AWS",
      "Sauvegarde AWS",
      "AWS DataSync"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Que propose Amazon CloudFront ? partir d'une seule interface unifiée monde entier avec une faible latence routage, y compris le routage basé sur la latence, le DNS géographique, la géoproximité et le round robin pondéré les instances Amazon EC2, les conteneurs, les adresses IP et les fonctions AWS Lambda",
    "options": [
      "Mise à l'échelle automatique de toutes les ressources pour alimenter une application à",
      "Livraison sécurisée de données, de vidéos, d'applications et d'API aux utilisateurs du",
      "Capacité à gérer directement le trafic à l'échelle mondiale via une variété de types de",
      "Répartition automatique du trafic d'application entrant sur plusieurs cibles, telles que"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel service AWS prend en charge le déploiement et la gestion des applications dans le cloud AWS ?",
    "options": [
      "Amazon CodeGuru",
      "AWS Fargate",
      "AWS CodeCommit",
      "AWS Elastic Beanstalk"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Une entreprise souhaite intégrer le traitement automatique du langage naturel (TALN) à ses tableaux de bord de business intelligence (BI). Elle souhaite poser des questions et obtenir des réponses avec des visualisations pertinentes. Quel service ou outil AWS répondra à ces exigences ?",
    "options": [
      "Amazon Macie",
      "Reconnaissance d'Amazon",
      "Amazon QuickSight Q",
      "Amazon Lex"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quelle fonctionnalité ou classe de stockage Amazon S3 utilise le réseau principal AWS et les emplacements périphériques pour réduire les latences entre l'utilisateur final et Amazon S3 ?",
    "options": [
      "Réplication interrégionale S3",
      "Accélération du transfert S3",
      "Notifications d'événements S3",
      "Norme S3 - Accès peu fréquent (Norme S3 - IA)"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel service AWS offre la possibilité d’héberger une base de données NoSQL dans le cloud AWS ?",
    "options": [
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon Redshift"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel service AWS est une base de données relationnelle compatible avec MySQL et PostgreSQL ?",
    "options": [
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon Neptune"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel principe de conception d’architecture décrit la nécessité d’isoler les pannes entre les composants dépendants dans le cloud AWS ?",
    "options": [
      "Utilisez une conception monolithique.",
      "Conception pour l'automatisation.",
      "Concevoir pour les points de défaillance uniques.",
      "Composants à coupler de manière lâche."
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quel avantage du cloud computing donne à une entreprise la possibilité de déployer des applications auprès d’utilisateurs partout dans le monde via un réseau de régions AWS, de zones de disponibilité et d’emplacements périphériques ?",
    "options": [
      "Économie d'échelle",
      "Portée mondiale",
      "Agilité",
      "Haute disponibilité"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel service AWS facilite la surveillance et le dépannage des journaux d’application et des ressources cloud ?",
    "options": [
      "Amazon EC2",
      "Gestion des identités et des accès AWS (IAM)",
      "Amazon CloudWatch",
      "AWS CloudTrail"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel service AWS utilise AWS Compute Optimizer pour fournir des recommandations de dimensionnement basées sur les mesures de charge de travail ?",
    "options": [
      "Amazon EC2",
      "Amazon RDS",
      "Amazon Lightsail",
      "Fonctions d'étape AWS"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quel service AWS aidera une entreprise à planifier une migration vers AWS en collectant les données de configuration, d’utilisation et de comportement des centres de données sur site ?",
    "options": [
      "Groupes de ressources AWS",
      "Service de découverte d'applications AWS",
      "Catalogue de services AWS",
      "Gestionnaire des systèmes AWS"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel service AWS utilise une combinaison d’éditeurs et d’abonnés ?",
    "options": [
      "AWS Lambda",
      "Service de notification simple d'Amazon (Amazon SNS)",
      "Amazon CloudWatch",
      "AWS CloudFormation"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Une entreprise en est aux premiers stades de la planification de sa migration vers AWS. Elle souhaite obtenir le coût total de possession mensuel estimé pour ses futures instances Amazon EC2 et le stockage associé. Quel service ou outil AWS doit-elle utiliser pour répondre à ces besoins ?",
    "options": [
      "Calculateur de prix AWS",
      "Optimiseur de calcul AWS",
      "Conseiller de confiance AWS",
      "Service de migration d'applications AWS"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quel service ou outil AWS surveillera les ressources et les applications AWS en temps réel ? Answer(s): B  Masquer la solution Question suivante   QUESTION : 379  Quelle capacité d’AWS Cloud Adoption Framework (AWS CAF) appartient à la perspective commerciale ? Answer(s): B  Hide Solution Question suivante   QUESTION : 380  Quelle ressource AWS peut aider une entreprise à réduire ses coûts en échange d’un engagement d’utilisation lors de l’utilisation d’instances Amazon EC2 ? Answer(s): A  QUESTION : 381  Quelle perspective dans le AWS Cloud Adoption Framework (AWS CAF) inclut une capacité pour une architecture de données et d’analyse bien conçue ?",
    "options": [
      "Conseiller de confiance AWS",
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "Explorateur de coûts AWS",
      "Gestion de programmes et de projets",
      "Science des données",
      "Observabilité",
      "Gestion des changements et des versions",
      "Calculer les plans d'épargne",
      "Groupe de mise à l'échelle automatique",
      "Instance à la demande",
      "Magasin d'instances EC2",
      "Sécurité",
      "Gouvernance",
      "Opérations",
      "Plate-forme"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Quelles sont les options offertes par les fonctionnalités du point de vue des personnes d'AWS Cloud Adoption Framework (AWS CAF) ? (Choisissez deux options.) E. Développement d'applications modernes",
    "options": [
      "Alignement organisationnel",
      "Gestion de portefeuille",
      "Conception de l'organisation",
      "Gestion des risques"
    ],
    "correctAnswers": [
      0,
      2
    ]
  },
  {
    "question": "Une entreprise a besoin d'un pont entre la technologie et les activités pour évoluer vers une culture de croissance et d'apprentissage continus. Quelle perspective du Cadre d'adoption du cloud AWS (AWS CAF) sert de pont ?",
    "options": [
      "Personnes",
      "Gouvernance",
      "Opérations",
      "Sécurité"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Quelle option relève de la responsabilité d’AWS dans le cadre du modèle de responsabilité partagée d’AWS ?",
    "options": [
      "Sécurité des données d'application",
      "Gestion des correctifs pour les applications exécutées sur des instances Amazon EC2",
      "Gestion des correctifs de l'infrastructure sous-jacente pour les services gérés",
      "Gestion des identités et des accès aux applications"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel service ou ressource AWS peut identifier et fournir des rapports sur les ressources IAM dans un compte AWS partagé avec un autre compte AWS ?",
    "options": [
      "Rapport d'accréditation IAM",
      "Centre d'identité AWS IAM (AWS Single Sign-On)",
      "Analyseur d'accès AWS Identity and Access Management",
      "Groupe d'utilisateurs Amazon Cognito"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel pilier du cadre AWS Well-Architected se concentre sur l’allocation structurée et rationalisée des ressources informatiques ?",
    "options": [
      "Fiabilité",
      "Excellence opérationnelle",
      "Efficacité des performances",
      "Durabilité"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quelles fonctionnalités d'AWS Cloud Adoption Framework (AWS CAF) appartiennent à la perspective de gouvernance ? (Choisissez deux options.) E. Gestion d'événements",
    "options": [
      "Gestion de programmes et de projets",
      "Gestion de produits",
      "Gestion de portefeuille",
      "Gestion des risques"
    ],
    "correctAnswers": [
      0,
      3
    ]
  },
  {
    "question": "Une entreprise souhaite utiliser AWS Managed Services (AMS) pour son support opérationnel et souhaite comprendre son périmètre. Quelle fonctionnalité AMS répondra à ces exigences ?",
    "options": [
      "Zone d'atterrissage et gestion du réseau",
      "Développement d'applications clients",
      "Configuration du pipeline DevSecOps",
      "Surveillance des journaux d'application"
    ],
    "correctAnswers": [
      0
    ]
  }
  // ➤ Ajoute ici les 388 questions de ton PDF
];

// ✅ Nettoyage automatique des questions (supprime la bonne réponse après le ?)
const questions = rawQuestions.map((q) => ({
  ...q,
  question: q.question.replace(/\s+[A-E]\.\s.+$/, "")
}));

export default questions;
