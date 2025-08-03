// ✅ Mets ici toutes tes questions avec leurs bonnes réponses comme dans ton PDF
const rawQuestions = [
  {
    "question": "Quels services ou outils AWS peuvent identifier les opportunités de dimensionnement des instances Amazon EC2 ? (Choisissez deux options.)",
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
    "question": "Parmi les avantages suivants, lesquels sont liés à l'utilisation d'AWS Trusted Advisor ? (Choisissez deux options.)",
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
    "question": "Quels services ou outils AWS peuvent identifier les opportunités de dimensionnement des instances Amazon EC2 ? (Choisissez deux options.)",
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
    "question": "Parmi les avantages suivants, lesquels sont liés à l'utilisation d'AWS Trusted Advisor ? (Choisissez deux options.)",
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

  // ➤ Ajoute ici les 388 questions de ton PDF
];

// ✅ Nettoyage automatique des questions (supprime la bonne réponse après le ?)
const questions = rawQuestions.map((q) => ({
  ...q,
  question: q.question.replace(/\s+[A-E]\.\s.+$/, "")
}));

export default questions;
