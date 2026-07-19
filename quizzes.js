// Questions des quiz de fin de chapitre.
// Pour modifier/ajouter une question, il suffit d'éditer ce fichier.
// correct = index de la bonne réponse (0 = première option).
const QUIZZES = {

"planning": [],

"M1": [
  { q: "Le discriminant du trinôme \\(2x^2-3x+1\\) vaut :", options:["\\(1\\)","\\(17\\)","\\(-1\\)","\\(9\\)"], correct:0,
    explain:"\\(\\Delta=b^2-4ac=(-3)^2-4\\times2\\times1=9-8=1\\)." },
  { q: "La dérivée de \\(f(x)=x^2 e^x\\) est :", options:["\\(2x e^x\\)","\\((x^2+2x)e^x\\)","\\(2x e^x + x^2\\)","\\(2xe^x\\times e^x\\)"], correct:1,
    explain:"Produit \\(uv\\) : \\(f'=2xe^x+x^2e^x=(x^2+2x)e^x\\). La dérivée d'un produit n'est pas le produit des dérivées." },
  { q: "Pour tout réel \\(x\\), le signe de \\(e^x\\) est :", options:["positif","négatif","du signe de \\(x\\)","nul en 0"], correct:0,
    explain:"\\(e^x>0\\) pour tout \\(x\\). D'où le réflexe : dans un signe de dérivée, le facteur exponentiel disparaît." },
  { q: "L'équation de la tangente à la courbe de \\(f\\) au point d'abscisse \\(a\\) est :", options:["\\(y=f'(a)x+f(a)\\)","\\(y=f'(a)(x-a)+f(a)\\)","\\(y=f(a)(x-a)+f'(a)\\)","\\(y=f'(x)(x-a)+f(a)\\)"], correct:1,
    explain:"Formule à connaître par cœur : \\(y=f'(a)(x-a)+f(a)\\)." },
  { q: "\\(e^{2x}=e^{x+3}\\) équivaut à :", options:["\\(x=3\\)","\\(x=-3\\)","\\(2x=3\\)","pas de solution"], correct:0,
    explain:"La fonction exp est strictement croissante : \\(e^A=e^B\\iff A=B\\), donc \\(2x=x+3\\), soit \\(x=3\\)." },
  { q: "Si \\(f'\\) s'annule en changeant de signe (− puis +) en \\(x=a\\), alors \\(f\\) admet en \\(a\\) :", options:["un maximum local","un minimum local","un point d'inflexion","une asymptote"], correct:1,
    explain:"\\(f\\) décroît puis croît : c'est un minimum local." }
],

"M2": [
  { q: "Dans une suite géométrique de raison \\(q=0{,}8\\) et de premier terme positif, la suite est :", options:["croissante","décroissante","constante","non monotone"], correct:1,
    explain:"On multiplie à chaque étape par un nombre entre 0 et 1 : la suite décroît, même si la raison est positive." },
  { q: "La formule des probabilités totales donne \\(P(B)=\\)", options:["\\(P(A)+P(\\overline A)\\)","\\(P(A)\\,P_A(B)+P(\\overline A)\\,P_{\\overline A}(B)\\)","\\(P(A\\cap B)\\)","\\(P_A(B)\\times P_B(A)\\)"], correct:1,
    explain:"On additionne les chemins de l'arbre qui mènent à B : \\(P(A)P_A(B)+P(\\overline A)P_{\\overline A}(B)\\)." },
  { q: "\\(A\\) et \\(B\\) sont indépendants si :", options:["\\(P(A\\cap B)=0\\)","\\(P(A\\cap B)=P(A)\\times P(B)\\)","\\(P(A)=P(B)\\)","\\(A\\) et \\(B\\) sont incompatibles"], correct:1,
    explain:"Indépendance : \\(P(A\\cap B)=P(A)\\times P(B)\\), autrement dit \\(P_A(B)=P(B)\\)." },
  { q: "L'espérance \\(E(X)\\) s'interprète comme :", options:["la valeur la plus probable","la valeur moyenne sur un grand nombre de répétitions","la valeur maximale","l'écart-type"], correct:1,
    explain:"\\(E(X)\\) est la moyenne des valeurs pondérées par leurs probabilités : la valeur moyenne à long terme." },
  { q: "Dans un repère orthonormé, \\(\\vec u \\perp \\vec v\\) équivaut à :", options:["\\(\\vec u\\cdot\\vec v=0\\)","\\(\\vec u\\cdot\\vec v=1\\)","\\(\\|\\vec u\\|=\\|\\vec v\\|\\)","\\(\\vec u=\\vec v\\)"], correct:0,
    explain:"Deux vecteurs sont orthogonaux si et seulement si leur produit scalaire est nul." },
  { q: "Une suite arithmétique de raison \\(r\\) a pour terme général :", options:["\\(u_n=u_0\\times r^n\\)","\\(u_n=u_0+nr\\)","\\(u_n=u_0+r^n\\)","\\(u_n=n\\times r\\)"], correct:1,
    explain:"Arithmétique : on ajoute \\(r\\) à chaque étape, donc \\(u_n=u_0+nr\\). (La forme \\(u_0 q^n\\) est celle d'une suite géométrique.)" }
],

"M3": [
  { q: "À l'étape d'hérédité d'une récurrence, on suppose \\(P(n)\\) vraie :", options:["pour tout entier n","pour un entier n fixé","au rang n+1","jamais, on calcule directement"], correct:1,
    explain:"On suppose P(n) pour UN entier n fixé (hypothèse de récurrence), puis on en déduit P(n+1)." },
  { q: "\\(\\displaystyle\\lim_{n\\to+\\infty} 0{,}8^{\\,n}=\\)", options:["\\(+\\infty\\)","\\(0{,}8\\)","\\(0\\)","\\(1\\)"], correct:2,
    explain:"\\(-1<0{,}8<1\\) donc la suite géométrique tend vers 0." },
  { q: "Laquelle est une forme indéterminée ?", options:["\\(+\\infty+\\infty\\)","\\(\\dfrac{5}{+\\infty}\\)","\\(+\\infty-\\infty\\)","\\(0\\times 3\\)"], correct:2,
    explain:"« \\(\\infty-\\infty\\) » est indéterminé, comme \\(0\\times\\infty\\), \\(\\infty/\\infty\\) et \\(0/0\\)." },
  { q: "Une suite croissante et majorée par 6 :", options:["tend forcément vers 6","converge, mais pas forcément vers 6","tend vers \\(+\\infty\\)","n'a pas de limite"], correct:1,
    explain:"Théorème de convergence monotone : elle converge, vers un réel ≤ 6 (pas nécessairement 6)." },
  { q: "\\(\\displaystyle\\lim_{n\\to+\\infty}\\dfrac{3n^2+2}{n^2+1}=\\)", options:["\\(0\\)","\\(3\\)","\\(+\\infty\\)","\\(2\\)"], correct:1,
    explain:"On factorise par \\(n^2\\) : \\(\\dfrac{3+2/n^2}{1+1/n^2}\\to 3\\)." },
  { q: "Une récurrence dont on n'a prouvé que l'hérédité :", options:["est complète","est fausse","n'a pas d'initialisation, donc ne prouve rien","prouve la limite"], correct:2,
    explain:"Sans initialisation, l'escalier n'a pas de première marche : la démonstration est incomplète." }
],

"M4": [
  { q: "Si \\(\\lim_{x\\to+\\infty}f(x)=2\\), la courbe admet :", options:["une asymptote verticale \\(x=2\\)","une asymptote horizontale \\(y=2\\)","un point d'inflexion","aucune asymptote"], correct:1,
    explain:"Une limite finie \\(\\ell\\) en \\(\\pm\\infty\\) donne l'asymptote horizontale \\(y=\\ell\\)." },
  { q: "\\(\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{e^x}{x^2}=\\)", options:["\\(0\\)","\\(1\\)","\\(+\\infty\\)","indéterminé, non calculable"], correct:2,
    explain:"Croissances comparées : l'exponentielle l'emporte sur toute puissance de \\(x\\), donc \\(+\\infty\\)." },
  { q: "Pour appliquer le corollaire du TVI et conclure à une solution unique, \\(f\\) doit être :", options:["continue seulement","dérivable seulement","continue et strictement monotone","paire"], correct:2,
    explain:"Il faut la continuité (existence) ET la stricte monotonie (unicité)." },
  { q: "En une valeur interdite \\(a\\) où \\(\\lim f=\\pm\\infty\\), la droite \\(x=a\\) est :", options:["une asymptote horizontale","une asymptote verticale","une tangente","sans particularité"], correct:1,
    explain:"Une limite infinie en un réel \\(a\\) donne l'asymptote verticale \\(x=a\\)." },
  { q: "\\(\\displaystyle\\lim_{x\\to 2}\\dfrac{x^2-4}{x-2}=\\)", options:["\\(0\\)","\\(4\\)","\\(+\\infty\\)","\\(2\\)"], correct:1,
    explain:"Forme \\(0/0\\) : \\(\\dfrac{(x-2)(x+2)}{x-2}=x+2\\to 4\\)." },
  { q: "Toute fonction dérivable est :", options:["continue","paire","croissante","convexe"], correct:0,
    explain:"Dérivable \\(\\Rightarrow\\) continue. (La réciproque est fausse.)" }
],

"M5": [
  { q: "La dérivée de \\(f(x)=e^{u(x)}\\) est :", options:["\\(e^{u}\\)","\\(u'\\,e^{u}\\)","\\(u\\,e^{u}\\)","\\(u'\\,e^{u'}\\)"], correct:1,
    explain:"Dérivée d'une composée : \\((e^u)'=u'e^u\\)." },
  { q: "Une fonction est convexe sur un intervalle lorsque :", options:["\\(f'\\ge 0\\)","\\(f''\\ge 0\\)","\\(f\\ge 0\\)","\\(f''\\le 0\\)"], correct:1,
    explain:"Convexe \\(\\iff f''\\ge 0 \\iff f'\\) croissante \\(\\iff\\) courbe au-dessus de ses tangentes." },
  { q: "Une courbe convexe est :", options:["au-dessus de ses tangentes","en dessous de ses tangentes","au-dessus de ses cordes","une droite"], correct:0,
    explain:"Convexe : la courbe est sous ses cordes et au-dessus de ses tangentes (forme de creux)." },
  { q: "Un point d'inflexion est un point où :", options:["\\(f'\\) s'annule","\\(f''\\) s'annule en changeant de signe","\\(f\\) atteint un maximum","la tangente est horizontale"], correct:1,
    explain:"Point d'inflexion : la convexité change, donc \\(f''\\) s'annule EN CHANGEANT de signe." },
  { q: "Peut-on avoir une fonction décroissante et convexe ?", options:["Non, jamais","Oui, par exemple \\(e^{-x}\\)","Seulement si elle est positive","Uniquement sur \\(\\mathbb{R}^+\\)"], correct:1,
    explain:"Variations (signe de \\(f'\\)) et convexité (signe de \\(f''\\)) sont indépendantes : \\(e^{-x}\\) décroît et est convexe." },
  { q: "La dérivée de \\(g(x)=\\sqrt{u(x)}\\) (avec \\(u>0\\)) est :", options:["\\(\\dfrac{1}{2\\sqrt u}\\)","\\(\\dfrac{u'}{2\\sqrt u}\\)","\\(\\dfrac{u'}{\\sqrt u}\\)","\\(2u'\\sqrt u\\)"], correct:1,
    explain:"\\((\\sqrt u)'=\\dfrac{u'}{2\\sqrt u}\\)." }
],

"M6": [
  { q: "Pour compter des tirages où l'ordre compte et les répétitions sont permises, on utilise :", options:["\\(n^k\\)","\\(\\binom{n}{k}\\)","\\(n!\\)","\\(\\dfrac{n!}{(n-k)!}\\)"], correct:0,
    explain:"Ordre + répétition = k-uplets : \\(n^k\\) (ex. code PIN)." },
  { q: "Le nombre de mains de 5 cartes parmi 32 (sans ordre) est :", options:["\\(32^5\\)","\\(\\dfrac{32!}{27!}\\)","\\(\\binom{32}{5}\\)","\\(5!\\)"], correct:2,
    explain:"Une main = une partie sans ordre : combinaison \\(\\binom{32}{5}\\)." },
  { q: "\\(\\binom{10}{2}=\\)", options:["\\(20\\)","\\(45\\)","\\(90\\)","\\(100\\)"], correct:1,
    explain:"\\(\\binom{10}{2}=\\dfrac{10\\times 9}{2}=45\\)." },
  { q: "La relation de Pascal s'écrit :", options:["\\(\\binom{n}{k}=\\binom{n}{n-k}\\)","\\(\\binom{n}{k}+\\binom{n}{k+1}=\\binom{n+1}{k+1}\\)","\\(\\binom{n}{k}=n\\times k\\)","\\(\\sum\\binom{n}{k}=n\\)"], correct:1,
    explain:"\\(\\binom{n}{k}+\\binom{n}{k+1}=\\binom{n+1}{k+1}\\) : chaque coefficient du triangle est la somme des deux du dessus." },
  { q: "Pour dénombrer les cas « au moins un », la bonne stratégie est souvent :", options:["compter directement","passer par le complémentaire (\\(1-\\) aucun)","utiliser une permutation","additionner les probabilités"], correct:1,
    explain:"« Au moins un » = total − « aucun » : le complémentaire évite de distinguer tous les cas." },
  { q: "Un ensemble à \\(n\\) éléments possède combien de parties ?", options:["\\(n\\)","\\(n!\\)","\\(2^n\\)","\\(n^2\\)"], correct:2,
    explain:"\\(\\sum_{k=0}^{n}\\binom{n}{k}=2^n\\) : chaque élément est dedans ou dehors." }
],

"M7": [
  { q: "Dans l'étude type \\(u_{n+1}=au_n+b\\) (avec \\(0<a<1\\)), le point fixe \\(\\ell\\) vérifie :", options:["\\(\\ell=a\\ell+b\\)","\\(\\ell=a+b\\)","\\(\\ell=0\\)","\\(\\ell=b/a\\)"], correct:0,
    explain:"Le point fixe (valeur d'équilibre et limite) résout \\(\\ell=a\\ell+b\\)." },
  { q: "Pour montrer qu'une suite \\((u_n)\\) converge sans connaître sa limite, on invoque souvent :", options:["le TVI","le théorème de convergence monotone","la formule du binôme","les probabilités totales"], correct:1,
    explain:"Croissante + majorée (ou décroissante + minorée) \\(\\Rightarrow\\) convergente." },
  { q: "Poser \\(v_n=u_n-\\ell\\) dans ces problèmes sert à :", options:["obtenir une suite arithmétique","obtenir une suite géométrique","calculer une dérivée","dénombrer"], correct:1,
    explain:"\\((v_n)\\) devient géométrique de raison \\(a\\), ce qui donne l'expression explicite de \\(u_n\\)." },
  { q: "Le nombre de bonnes réponses au hasard à un QCM suit une loi appelée :", options:["loi normale","loi binomiale","loi uniforme","loi de Poisson"], correct:1,
    explain:"Répétition d'épreuves indépendantes à deux issues (bon/faux) : loi binomiale (programme de terminale)." },
  { q: "Une pénalité \\(-0{,}5\\) par mauvaise réponse à un QCM a pour but de :", options:["augmenter la moyenne","neutraliser le hasard (espérance ≤ 0 au hasard)","rendre le test plus court","favoriser les candidats chanceux"], correct:1,
    explain:"Avec pénalité, l'espérance de note en répondant au hasard devient négative : répondre au hasard ne rapporte plus." }
],

"S1": [
  { q: "Sur un marché en concurrence parfaite, une entreprise est :", options:["faiseuse de prix","preneuse de prix","en situation de monopole","sans concurrent"], correct:1,
    explain:"Atomicité : aucun agent n'influence le prix, chacun est preneur de prix." },
  { q: "Un bien collectif (ex. éclairage public) est :", options:["rival et excluable","non rival et non excluable","rival et non excluable","excluable et non rival"], correct:1,
    explain:"Bien collectif : non rival ET non excluable. (Rival + non excluable = bien commun.)" },
  { q: "L'aléa moral est une asymétrie d'information qui apparaît :", options:["avant le contrat","après le contrat","seulement en monopole","sur le marché du travail uniquement"], correct:1,
    explain:"Aléa moral = après le contrat (comportement moins prudent). Avant le contrat, c'est la sélection adverse." },
  { q: "Une action est :", options:["un titre de créance rapportant un intérêt","un titre de propriété rapportant un dividende","un crédit bancaire","de la monnaie"], correct:1,
    explain:"Action = titre de propriété (dividende variable). L'obligation est le titre de créance (intérêt)." },
  { q: "« Les crédits font les dépôts » signifie que :", options:["les banques prêtent l'épargne existante","le crédit bancaire crée de la monnaie","seule la banque centrale crée la monnaie","les dépôts précèdent les crédits"], correct:1,
    explain:"En accordant un crédit, la banque crée de la monnaie scripturale ; le remboursement la détruit." },
  { q: "Si l'inflation est de 4 % et le taux d'intérêt nominal de 3 %, le taux d'intérêt réel est :", options:["+7 %","+1 %","−1 %","+12 %"], correct:2,
    explain:"Taux réel ≈ nominal − inflation = 3 − 4 = −1 % : le prêteur perd du pouvoir d'achat." }
],

"S2": [
  { q: "La socialisation secondaire :", options:["s'achève à l'enfance","se poursuit toute la vie (travail, couple…)","ne concerne que l'école","est identique pour tous"], correct:1,
    explain:"Elle prolonge et transforme les acquis de la socialisation primaire, tout au long de la vie." },
  { q: "Pour Durkheim, la solidarité organique caractérise :", options:["les sociétés à faible division du travail","les sociétés modernes à forte division du travail","les sociétés sans État","les familles"], correct:1,
    explain:"Solidarité organique = complémentarité d'individus différenciés, propre aux sociétés à forte division du travail." },
  { q: "Dire que la déviance est « relative » signifie qu'elle dépend :", options:["de la gravité de l'acte","des normes du groupe, de l'époque, du lieu","du casier judiciaire","de la police seule"], correct:1,
    explain:"Un même acte est déviant ici et valorisé ailleurs : la déviance est une construction sociale." },
  { q: "Le « chiffre noir » de la délinquance désigne :", options:["les crimes les plus graves","les faits non enregistrés par la police","le nombre de policiers","les récidivistes"], correct:1,
    explain:"Les faits non déclarés ou non constatés échappent aux statistiques policières ; d'où les enquêtes de victimation." },
  { q: "Pour décrire un salaire « typique » avec quelques très hauts revenus, on préfère :", options:["la moyenne","la médiane","le maximum","la somme"], correct:1,
    explain:"La médiane est insensible aux valeurs extrêmes, qui gonflent la moyenne." },
  { q: "« Ventes de glaces et noyades augmentent ensemble » illustre :", options:["une causalité directe","une corrélation due à une troisième variable","une causalité inversée","une absence de lien"], correct:1,
    explain:"La chaleur estivale explique les deux : corrélation sans causalité directe (facteur confondant)." }
],

"S3": [
  { q: "La productivité globale des facteurs (PGF) mesure :", options:["la quantité de travail","la quantité de capital","l'efficacité de la combinaison des facteurs","le nombre d'entreprises"], correct:2,
    explain:"La PGF est le « résidu » : la part de croissance non expliquée par la hausse des quantités de facteurs." },
  { q: "Dire que le progrès technique est « endogène » signifie qu'il :", options:["tombe du ciel","résulte des comportements économiques (R&D, innovation)","ne dépend que de l'État","est constant"], correct:1,
    explain:"Il est produit par l'économie elle-même : R&D, capital humain, innovation." },
  { q: "Les droits de propriété favorisent la croissance en :", options:["baissant les prix","incitant à investir et innover","augmentant la population","supprimant la concurrence"], correct:1,
    explain:"Ils garantissent à l'innovateur la récolte des fruits de ses efforts : incitation à investir et innover." },
  { q: "La « destruction créatrice » de Schumpeter désigne :", options:["la destruction de l'environnement","l'innovation qui crée de nouvelles activités en détruisant les anciennes","les crises financières","la baisse du PIB"], correct:1,
    explain:"L'innovation rend obsolètes produits et emplois anciens tout en créant de nouvelles activités." },
  { q: "Une croissance surtout portée par la PGF est dite :", options:["extensive","intensive","nominale","démographique"], correct:1,
    explain:"Croissance intensive = par gains d'efficacité (progrès technique). Extensive = par accumulation de facteurs." },
  { q: "L'« effet rebond » désigne le fait que :", options:["l'innovation supprime toute pollution","les gains d'efficacité relancent la consommation totale","la croissance s'arrête","les ressources sont infinies"], correct:1,
    explain:"Les gains d'efficacité abaissent les coûts, ce qui stimule la consommation et peut annuler les économies de ressources." }
],

"S4": [
  { q: "Selon Ricardo, un pays a intérêt à se spécialiser selon son avantage :", options:["absolu","comparatif","démographique","monétaire"], correct:1,
    explain:"C'est l'avantage comparatif (coûts relatifs) qui compte, pas l'avantage absolu." },
  { q: "Un pays moins productif que ses partenaires dans TOUS les biens :", options:["n'a aucun intérêt à échanger","gagne quand même à l'échange","doit se fermer","n'a pas d'avantage comparatif"], correct:1,
    explain:"Il possède forcément un avantage comparatif (là où il est le moins inefficace) et gagne à l'échange." },
  { q: "Le commerce entre pays comparables (France-Allemagne) s'explique surtout par :", options:["les dotations factorielles","la différenciation des produits et la fragmentation de la chaîne de valeur","le climat","la langue"], correct:1,
    explain:"Différenciation (variétés, gammes de qualité) et chaînes de valeur, d'où le commerce intra-branche." },
  { q: "Dans la « courbe du sourire », la valeur ajoutée est la plus forte :", options:["à l'assemblage","aux extrémités (conception et marketing)","au milieu","au transport"], correct:1,
    explain:"Conception (R&D) et marketing/marque captent la valeur ; l'assemblage en capte peu." },
  { q: "Le commerce international tend à :", options:["accroître les inégalités entre pays","réduire les inégalités entre pays mais accroître les inégalités internes","supprimer toutes les inégalités","n'avoir aucun effet"], correct:1,
    explain:"Rattrapage des émergents (moins d'inégalités entre pays) mais gagnants/perdants au sein de chaque pays." },
  { q: "Un argument protectionniste classique (List) est :", options:["baisser les prix","protéger les industries naissantes","augmenter les importations","supprimer les brevets"], correct:1,
    explain:"Protéger temporairement les industries naissantes, le temps qu'elles deviennent compétitives." }
],

"S5": [
  { q: "L'outil statistique central pour situer les individus dans l'espace social est :", options:["le PIB","les PCS (catégories socioprofessionnelles)","le taux de chômage","l'indice des prix"], correct:1,
    explain:"La nomenclature des PCS de l'INSEE structure l'analyse de la société française." },
  { q: "La « salarisation » désigne :", options:["la hausse de la part des salariés dans l'emploi","la hausse des salaires","la baisse du chômage","la tertiarisation"], correct:0,
    explain:"Recul des indépendants, hausse de la part des salariés (≈ 88 % des actifs aujourd'hui)." },
  { q: "Pour Marx, les classes sociales se définissent par :", options:["le prestige","la place dans les rapports de production","le niveau de diplôme","le lieu de résidence"], correct:1,
    explain:"Critère unique : la place dans les rapports de production (bourgeoisie / prolétariat)." },
  { q: "Chez Weber, la stratification comporte :", options:["une seule dimension","trois dimensions (économique, sociale, politique)","deux classes","aucune hiérarchie"], correct:1,
    explain:"Weber : ordres économique (classes), social (statut, prestige) et politique (partis)." },
  { q: "La « moyennisation » de la société correspond à :", options:["la disparition de l'État","la réduction des distances entre groupes sociaux (Trente Glorieuses)","la hausse des inégalités","la fin du salariat"], correct:1,
    explain:"Rapprochement des modes de vie et réduction des distances inter-classes, argument du débat sur les classes." },
  { q: "Un argument de la PERSISTANCE des classes est :", options:["la baisse du sentiment d'appartenance","l'individualisation","les écarts durables de patrimoine et d'espérance de vie","la massification scolaire"], correct:2,
    explain:"Les inégalités objectives (patrimoine, santé, réussite scolaire) restent fortement liées à la position sociale." }
],

"S6": [
  { q: "La différence entre massification et démocratisation scolaire est :", options:["il n'y en a pas","la massification est quantitative, la démocratisation réduit les écarts entre milieux","la démocratisation est plus ancienne","la massification concerne les filles"], correct:1,
    explain:"Massification = accès plus large ; démocratisation = réduction des écarts de réussite selon l'origine sociale." },
  { q: "Le « capital culturel » (Bourdieu) désigne :", options:["seulement l'argent","seulement les diplômes","le langage, les savoirs et la familiarité avec la culture scolaire","le réseau d'amis"], correct:2,
    explain:"Ressources culturelles (langage, références, rapport à l'écrit) transmises inégalement par les familles." },
  { q: "La table de DESTINÉE se lit :", options:["en ligne (origine = 100)","en colonne (position = 100)","sur la diagonale","en effectifs bruts"], correct:0,
    explain:"Destinée : « que deviennent les fils de… ? », pourcentages en ligne. Recrutement : en colonne." },
  { q: "La mobilité STRUCTURELLE est celle qui est :", options:["choisie par les individus","imposée par la déformation de la structure des emplois","mesurée par la fluidité","toujours descendante"], correct:1,
    explain:"Moins d'ouvriers, plus de cadres : une partie de la mobilité est mécanique (structurelle)." },
  { q: "Une société plus mobile est-elle forcément plus fluide ?", options:["Oui, toujours","Non : la mobilité peut augmenter par simple effet de structure","Oui, si le PIB augmente","Non, jamais"], correct:1,
    explain:"La fluidité (chances relatives) peut rester inchangée même si la mobilité observée augmente." },
  { q: "L'immobilité sociale (rester dans la PCS d'origine) traduit :", options:["une mobilité ascendante","la reproduction sociale","un déclassement","la fluidité parfaite"], correct:1,
    explain:"Rester à la position des parents (diagonale de la table) = reproduction sociale." }
],

"S7": [
  { q: "L'épreuve composée de SES comporte :", options:["une seule dissertation","trois parties (EC1, EC2, EC3)","deux dissertations","un oral"], correct:1,
    explain:"EC1 (mobilisation de connaissances), EC2 (étude d'un document), EC3 (raisonnement sur dossier)." },
  { q: "Un paragraphe argumenté suit la structure :", options:["AEI (Affirmation, Explicitation, Illustration)","QCM","introduction-conclusion","thèse-antithèse-synthèse uniquement"], correct:0,
    explain:"AEI : une idée, son mécanisme enchaîné, puis un exemple ou une donnée." },
  { q: "Le sujet « Montrez que… » demande :", options:["une discussion en deux temps","d'étayer une thèse sans discuter","de résumer le cours","un simple avis personnel"], correct:1,
    explain:"« Montrez que » = démonstration orientée. « Dans quelle mesure » appelle une discussion." },
  { q: "Une contribution à la croissance (ex. « 1,2 ») se lit en :", options:["pourcentage","points de pourcentage","euros","indice"], correct:1,
    explain:"Une contribution s'exprime en points de pourcentage, jamais en %." },
  { q: "En EC3, l'erreur la plus sanctionnée est :", options:["faire un plan","utiliser des exemples","réciter le cours sans exploiter les documents","définir les termes"], correct:2,
    explain:"Il faut mobiliser CHAQUE document du dossier avec une donnée précise, pas seulement réciter le cours." }
]

};
