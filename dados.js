let dados = [
    {
        titulo : "Mago",
        descricao : "Através de estudos intensos e prática incansável, magos dominam uma vasta gama de feitiços e magias, desde os mais simples até os mais poderosos. Com sua inteligência aguçada e sua capacidade de manipular as forças místicas.",
        poderes  : "Os magos conjuram magias, utilizam o verdadeiro poder que permeia o cosmos, pesquisam rituais esotéricos capazes de alterar o tempo e o espaço. ",
        link : "https://dndbrasil.fandom.com/pt-br/wiki/Mago",
        tags : "magia magias poderes inteligencia inteligente"
    }, 
    {
        titulo : "Druida",
        descricao : " Conectado à natureza e mestre dos elementos, o druida invoca os poderes da Terra para curar, transformar e proteger. Com um profundo conhecimento das plantas, animais e espíritos da natureza, os druidas são guardiões do equilíbrio ecológico.",
        poderes : "O druida é um sacerdote devotado a proteger a natureza. Através de forte ligação com sua patrona natureza, como a capacidade de falar com animais e tomar para si a forma deles.",
        link : "https://dndbrasil.fandom.com/pt-br/wiki/Druida",
        tags : "animais animal florestas natureza"
    },
    {
        titulo : "Bárbaro",
        descricao : "Forte, resistente e indomável, o bárbaro canaliza a fúria ancestral para superar seus limites e infligir danos devastadores. Com sua força bruta e raiva incontrolável, os bárbaros são verdadeiros guerreiros, capazes de enfrentar qualquer desafio.",
        poderes : "Podem optar por focar em Carisma para usar Intimidação ou até mesmo Persuasão, ou forcar em Sabedoria para Lidar com Animais e ter uma Percepção melhor, não tendo poderes mágicos.",
        link : "https://dndbrasil.fandom.com/pt-br/wiki/Bárbaro",
        tags : "força forte dano "
    },
    {
        titulo : "Bardo",
        descricao : "Músico, poeta e guerreiro, o bardo inspira seus aliados com canções e encanta seus inimigos com palavras. Dominando diversas habilidades, o bardo é um mestre da persuasão e da diplomacia, além de possuir poderes mágicos versáteis.",
        poderes : "Habilidades sociais excepcionais (Carisma), conhecimentos variados (Inteligência), magia versátil (baseada em Carisma).",
        link : "https://dndbrasil.fandom.com/pt-br/wiki/Bardo",
        tags : "Musico musica carisma"
    },
    {
        titulo : "Clérigo",
        descricao : "Servo de um deus, o clérigo canaliza a fé divina para curar os feridos, proteger os inocentes e punir os culpados. Com seus poderes sagrados, o clérigo é um defensor da justiça e um guia espiritual para seus companheiros.",
        poderes : "Cura divina, magias sagradas (baseadas em Sabedoria), armadura divina, canalização de energia divina.",
        link : "https://dndbrasil.fandom.com/pt-br/wiki/Cl%C3%A9rigo",
        tags : "religião igreja cura espirito Deus",
    },
    {
        titulo : "Guerreiro",
        descricao : "Treinado desde a infância para a batalha, o guerreiro é um mestre das armas e armaduras. Forte, resistente e disciplinado, o guerreiro é a espinha dorsal de qualquer grupo de aventureiros.",
        poderes : "Proficiência em diversas armas e armaduras, habilidades de combate aprimoradas, grande força física.",
        link : "https://dndbrasil.fandom.com/pt-br/wiki/Guerreiro",
        tags : "armas armadura força comabate",
    }, 
    {
        titulo : "Monge",
        descricao : "Através de treinamento rigoroso e meditação profunda, o monge domina seu corpo e mente, tornando-se uma força a ser considerada. Com agilidade, destreza e poderes místicos, o monge é capaz de realizar feitos incríveis.",
        poderes : "Ataques desarmados, habilidades acrobáticas, poderes místicos (baseados em Destreza), resistência física e mental.",
        link : "https://iccarion.fandom.com/pt-br/wiki/O_Monge",
        tags : "meditação mente corpo",
    },
    {
        titulo : "Feiticeiro",
        descricao : "Nascido com poderes mágicos, o feiticeiro molda a energia mística para criar efeitos extraordinários. Com um forte vínculo com uma fonte de poder arcano, o feiticeiro é capaz de conjurar magias poderosas e surpreendentes.",
        poderes : "Magia arcana (baseada em Carisma), habilidades inatas, poder mágico intenso.",
        link : "https://dndbrasil.fandom.com/pt-br/wiki/Feiticeiro",
        tags : "feitiços arcana arcano magias magia"
    },
    {
        titulo : "Ranger",
        descricao : "Explorador solitário ou membro de uma guarda, o ranger é um mestre da natureza e da sobrevivência. Com sua conexão com a natureza e suas habilidades de caça, o ranger é um combatente habilidoso e um guia confiável.",
        poderes : "Habilidades de sobrevivência, magias arcanas (baseadas em Sabedoria), proficiência com arcos e bestas, companheiro animal.",
        link : "https://dnd5e.wikidot.com/ranger",
        tags : "guarda sobrevivente habilidoso",
    },
    {
        titulo : "Bruxo",
        descricao : "O bruxo fez um pacto com uma entidade sobrenatural, obtendo em troca poderes mágicos. Com seu conhecimento arcano e sua conexão com forças obscuras, o bruxo é capaz de conjurar magias poderosas e manipuladoras.",
        poderes : "Magia arcana (baseada em Carisma), invocação de criaturas, habilidades sobrenaturais.",
        link : "https://dndbrasil.fandom.com/pt-br/wiki/Bruxo",
        tags : " sobrenatural invocador pacto",
    },
    {
        titulo : "Ladino",
        descricao : "Ágil, astuto e charmoso, o ladino é um mestre da dissimulação e do furto. Com suas habilidades de combate e suas capacidades sociais, o ladino é capaz de superar qualquer obstáculo.",
        poderes : "Habilidades de furtividade, destreza, proficiência em ferramentas de ladrão, perícias sociais.",
        link : "https://dndbrasil.fandom.com/pt-br/wiki/Ladino",
        tags : "ladrão ligeiro destreza furto",
    },
    {
        titulo : "Artificie",
        descricao : "O artificie é um inventor e engenheiro, capaz de criar máquinas e objetos mágicos. Com sua criatividade e conhecimento técnico, o artificie é um aliado valioso em qualquer aventura.",
        poderes : "Criação de itens mágicos, proficiência em ferramentas de artesão, conhecimento em alquimia.",
        link : "https://iccarion.fandom.com/pt-br/wiki/O_Art%C3%ADfice",
        tags : "engenheiro criativo artesão alquimista "
    },
    {
        titulo : "Paladino",
        descricao : "O paladino é um defensor da justiça e da ordem, abençoado por um deus. Com sua fé inabalável e suas habilidades marciais, o paladino é um campeão da virtude e um inimigo implacável do mal.",
        poderes : "Magias sagradas (baseadas em Carisma), habilidades marciais, aura de proteção, juramentos sagrados.",
        link : "https://dndbrasil.fandom.com/pt-br/wiki/Paladino",
        tags : "justiça virtude defensor"
    }
];
