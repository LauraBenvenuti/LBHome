// Bevat alle teksten per taal. 
const alleTeksten = [
    {
        "taal": "nl",
        "kopje": "(Onderzoeks)projecten:",
        "projecten": [
            {
                "projectCode": "DidInf",
                "tijd": "2018-heden:",
                "project": "Een didactiek van de Informatica voor niet-Informatici",
                "omschrijving": "Onderzoek naar een didactiek van de Informatica voor HBO professionals die niet hebben gekozen voor een toekomst in de ICT"
            },
            {
                "projectCode": "HybridComp",
                "tijd": "2009-heden:",
                "project": "Informatica in hybride curricula",
                "omschrijving": "Veel opleidingen doen 'iets' met Informatica. Welk deel van de Informatica is relevant voor de opleiding? Hoe verhoudt het beroep dat de opleiding voor ogen heeft zich met de ICT? Welke mogelijke valkuilen zijn er en hoe kunnen zij worden omzeild?",
                "product": "Benvenuti, Laura: 'Computing Education in a Hybrid World' dissertatie, Open Universiteit Nederland",
                "link": "../docs/ComputingEduHybridWorld.pdf",
                "url": "lekenpraatje.html"
            },
            {
                "projectCode": "OnlineEdu",
                "tijd": "2008-2018:",
                "project": "Online Workplaces and Virtual Worlds",
                "omschrijving": "Onderzoek naar de factoren die bepalend zijn voor het succes van online onderwijs"
            },
            {
                "projectCode": "Multimedia",
                "tijd": "2000-2006:",
                "project": "Multimedia Werkplaats, HBO Digitale Communicatie",
                "omschrijving": "Ontwikkelen informatica-leerlijn tbv. de afstudeerrichting interactieve multimedia",
                "product": "Multimedia-productie voor de Europese Las-Instituten: 'De theorie van het Migmag-lassen' (Leonardo-project, 2006). H.Fr�ling; F.Daalder, I.Schaareman, M.de Rijk, L.Benvenuti."
            }
        ]
    },
    {
        "taal": "it",
        "kopje": "Ricerca:",
        "projecten": [
            {
                "projectCode": "DidInf",
                "tijd": "2018-oggi:",
                "project": "Una didattica dell'Informatica per i non addetti ai lavori",
                "omschrijving": "Insegnare l'Informatica nei corsi di laurea adiacenti all'Informatica"
            },
            {
                "projectCode": "HybridComp",
                "tijd": "2009-oggi:",
                "project": "L' Informatica nei corsi di laurea ibridi",
                "omschrijving": "Quali aspetti dell'Informatica sono rilevanti nei corsi di laurea che trattano di argomenti attinenti all'Informatica?",
                "product": "Benvenuti, Laura: 'Computing Education in a Hybrid World' tesi di dottorato, Open Universiteit Nederland",
                "link": "../docs/ComputingEduHybridWorld.pdf"

            },
            {
                "projectCode": "OnlineEdu",
                "tijd": "2008-2018:",
                "project": "Online Workplaces and Virtual Worlds",
                "omschrijving": "Ricerca dei fattori determinanti per il successo dell'insegnamento online"
            },
            {
                "projectCode": "Multimedia",
                "tijd": "2000-2006:",
                "project": "Laboratorio di Multimedialitá del cdl 'Comunicazione Digitale', Hogeschool Utrecht (NL)",
                "omschrijving": "Responsabile del programma di Informatica del bachelor 'Comunicazione Digitale'",
                "product": "Produzione multimediale per L'Istituto Europeo di Saldatura: 'La teoria della saldatura Migmag'(progetto Leonardo, 2006). H.Fröling; F.Daalder, I.Schaareman, M.de Rijk, L.Benvenuti."
            }

        ]
    },
    {
        "taal": "en",
        "kopje": "Research:",
        "projecten": [
            {
                "projectCode": "DidInf",
                "tijd": "2018-today:",
                "project": "Computing4All in higher education",
                "omschrijving": "Teaching computing to future professionals in other disciplines than ICT"
            },
            {
                "projectCode": "HybridComp",
                "tijd": "2009-today:",
                "project": "Computing Education in a Hybrid World",
                "product": "Benvenuti, Laura: 'Computing Education in a Hybrid World' dissertatie, Open Universiteit Nederland",
                "link": "../docs/ComputingEduHybridWorld.pdf"

            },
            {
                "projectCode": "OnlineEdu",
                "tijd": "2008-2018:",
                "project": "Online Workplaces and Virtual Worlds",
                "omschrijving": "Success factors of online learning"
            },
            {
                "projectCode": "Multimedia",
                "tijd": "2000-2006:",
                "project": "Multimedia Studio of the bachelor of 'Digital Communication', University for Applied Sciences in Utrecht - NL",
                "product": "Multimedia Production for the European Welding Institute: 'The theory of Migmag Welding' (a Leonardo project, 2006). H.Fröling; F.Daalder, I.Schaareman, M.de Rijk, L.Benvenuti."
            }
        ]
    }
];

//publicaties per project. 
const allePublicaties = [
    {
        "projectCode": "DidInf",
        "publicaties": [
            {
                "publCode": "Emp",
                "artikel": "Benvenuti,L.,Stam, U.: 'Empowering to code a diverse population of future digital designers', Atti Didamatica 2022, Milano, 10-11.11.2022, pag. 265-274",
                "link": "./docs/empoweringToCode.pdf"
            }
        ]
    },
    {
        "projectCode": "HybridComp",
        "publicaties": [
            {
                "publCode": "Diss",
                "artikel": "Benvenuti, Laura, 'Computing Education in a Hybrid World' Dissertation, Open Universiteit Nederland, 2019 ",
                "link": "./docs/ComputingEduHybridWorld.pdf",
                "lekenpraatje": "https://youtu.be/oA67tMIzoJY"
            },
            {
                "publCode": "Diss-3",
                "artikel": "Benvenuti, Laura, Erik Barendsen, Gerrit C. van der Veer, and Johan Versendaal. 'Understanding Computing in a Hybrid World: On the Undergraduate Curriculum Front-End Development.' In Proceedings of the 49th ACM Technical Symposium on Computer Science Education, pp. 580-585. ACM, 2018.",
                "hoofdstuk": "chapter 3"
            },
            // {
            //     "artikel": "L.Benvenuti,C.F.(Nelleke) Louwe-Kooijmans,J.Versendaal,G.C.van der Veer: 'Representation of abstract concepts: differencs across computing disciplines', Proceedings of Frontiers in Education 2015, October 21-24, El Paso, TX, USA.",
            //     "hoofdstuk": "chapter 6"
            // },
            // {
            //     "artikel": "L. Benvenuti,G.C.van der Veer: 'Culture, Notation and Formalisation', In: L.Norros, H.Koskinen, L.Salo, P.Savioja (eds) Designing beyond the product - understanding activity and user experience in ubiquitous environments. Proceedings of European Conference on Cognitive Ergonomics 2009, 28 Sept - 2 Oct 2009, Helsinki, Finland. ACM International Conference Proceeding Series. ACM, 427-429",
            //     "link": "../docs/CultureFormalisation.pdf"
            // },
            {
                "publCode": "MMdoc",
                "artikel": "Benvenuti L.,G.C.van der Veer: 'Multimedia design kan je leren, kunnen we het ook doceren?', In: F.J. Verbeek, D. Lenior and M. Steen (Eds.) Change! - Proceedings CHI-NL 2009. CHI-NL, Leiden, Netherlands, 39-41",
                "link": "./docs/MultimediaDesignDoceren.pdf",
            }
        ]

    },

    {
        "projectCode": "OnlineEdu",
        "publicaties": [
            {
                "publCode": "Diss-9",
                "artikel": "Benvenuti,L.,E.Rogier,G.C. van der Veer: 'E-learning in a distance learning curriculum:a workplace approach', Proceedings of the 2012 European Conference on Cognitive Ergonomics, Edinburgh, 29-31.08.2012",
                "hoofdstuk": "chapter 9"
            },
            {
                "publCode": "Guid",
                "artikel": "Menendez Blanco, M., G. C. van der Veer, L. Benvenuti, P. A. Kirschner (2012): Design Guidelines for Self-assessment Support for Adult Academic Distance Learning, in: Shalin Hai-Jew (ed.) 'Constructing Self-Discovery Learning Spaces Online: Scaffolding and Decision Making Technologies', IGI-global, 2012",
                "url": "http://www.igi-global.com/chapter/design-guidelines-self-assessment-support/61305"
            },
            {
                "publCode": "Diss-8",
                "artikel": "L. Benvenuti, G. van der Veer: 'Practice what you preach: experiences with teaching 3D concepts in a virtual world', in: Shalin Hai-Jew (ed.) 'Virtual Immersive and 3D Learning Spaces: Emerging Technologies and Trends', IGI-global, 2011",
                "link": "./docs/3DVWPracticeWhatYOuPreachOU.pdf",
                "url": "http://www.igi-global.com/bookstore/Chapter.aspx?TitleId=46771",
                "hoofdstuk": "chapter 8"
            }
        ]
    },
    {
        "projectCode": "Multimedia",
        "publicaties": [
            {
                "publCode": "Weld",
                "artikel": "Multimedia Production for the European Welding Institute: 'The theory of Migmag Welding' (a Leonardo project, 2006). H.Fröling; F.Daalder, I.Schaareman, M.de Rijk, L.Benvenuti."
            }
        ]
    }
];