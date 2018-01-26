-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le :  jeu. 18 jan. 2018 à 15:55
-- Version du serveur :  5.6.35
-- Version de PHP :  7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `db_hideberg`
--

-- --------------------------------------------------------

--
-- Structure de la table `annonce`
--

CREATE TABLE `annonce` (
  `annonce_id` int(11) NOT NULL,
  `annonce_website_id` int(11) NOT NULL,
  `annonce_sector_id` int(11) NOT NULL,
  `annonce_country_id` int(11) NOT NULL,
  `annonce_description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `annonce`
--

INSERT INTO `annonce` (`annonce_id`, `annonce_website_id`, `annonce_sector_id`, `annonce_country_id`, `annonce_description`) VALUES
(1, 5, 1, 3, 'Description du poste dans le domaine du \"Design\" en \"France\" par \"accenture\"'),
(2, 6, 1, 3, 'Description du poste dans le domaine du \"Design\" en \"France\" par \"admincompta\"'),
(3, 7, 1, 3, 'Description du poste dans le domaine du \"Design\" en \"France\" par \"aeroemploiformation\"'),
(4, 8, 1, 3, 'Description du poste dans le domaine du \"Design\" en \"France\" par \"angellist\"'),
(5, 46, 5, 3, 'Description du poste dans le domaine du \"Programs\" en \"France\" par \"jobrapido\"'),
(6, 38, 2, 3, 'Dans un pays en pleine transition numérique, le futur stagiaire #Prox-i saura faire preuve d’une forte capacité d’intégration/adaptation, dans un environnement de travail sous le soleil des tropiques, les pieds dans l’eau : )');

-- --------------------------------------------------------

--
-- Structure de la table `continent`
--

CREATE TABLE `continent` (
  `continent_id` int(11) NOT NULL,
  `continent_label` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `continent`
--

INSERT INTO `continent` (`continent_id`, `continent_label`) VALUES
(1, 'africa'),
(2, 'asia'),
(3, 'europe'),
(4, 'northamerica'),
(5, 'southamerica'),
(6, 'oceania');

-- --------------------------------------------------------

--
-- Structure de la table `country`
--

CREATE TABLE `country` (
  `country_id` int(11) NOT NULL,
  `country_continent_id` int(11) NOT NULL,
  `country_label` varchar(255) NOT NULL,
  `country_politic` varchar(255) NOT NULL,
  `country_cv` varchar(255) NOT NULL,
  `country_diplomatic` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `country`
--

INSERT INTO `country` (`country_id`, `country_continent_id`, `country_label`, `country_politic`, `country_cv`, `country_diplomatic`) VALUES
(1, 3, 'austria', '', '', ''),
(2, 3, 'belgium', '', '', ''),
(3, 3, 'france', '', 'http://europass.cedefop.europa.eu/sites/default/files/europass_cv_instructions_fr.pdf', ''),
(4, 3, 'germany', '', '', ''),
(5, 3, 'hungary', '', '', ''),
(6, 3, 'irland', '', '', ''),
(7, 3, 'italy', '', '', ''),
(8, 3, 'luxembourg', '', '', ''),
(9, 3, 'netherlands', '', '', ''),
(10, 3, 'spain', '', '', ''),
(11, 3, 'portugal', '', '', ''),
(12, 3, 'swissland', '', '', ''),
(13, 3, 'uk', '', '', '');

-- --------------------------------------------------------

--
-- Structure de la table `link`
--

CREATE TABLE `link` (
  `link_id` int(11) NOT NULL,
  `link_country_id` int(11) NOT NULL,
  `link_sector_id` int(11) NOT NULL,
  `link_website_id` int(11) NOT NULL,
  `link_label` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `link`
--

INSERT INTO `link` (`link_id`, `link_country_id`, `link_sector_id`, `link_website_id`, `link_label`) VALUES
(1, 3, 1, 60, 'https://www.monster.fr/emploi/q-emploi-design.aspx'),
(2, 3, 1, 66, 'https://www.profilculture.com/annonce/Emplois-Art-Design-Architecture'),
(3, 3, 1, 41, 'http://www.jobculture.fr/emplois-culture/emploi-design/'),
(4, 3, 1, 9, 'https://cadres.apec.fr/liste-offres-emploi-cadres/8_____________offre-d-emploi.html?sortsType=SCORE&sortsDirection=DESCENDING&nbParPage=20&typeAffichage=detaille&page=0&distance=0&motsCles=designer'),
(5, 3, 1, 54, 'http://www.lelieududesign.com/offres-d-emploi'),
(6, 3, 1, 29, 'http://jobs.etapes.com/'),
(10, 3, 1, 59, 'https://www.meteojob.com/jobsearch/offers?what=designer'),
(11, 3, 1, 34, 'https://www.graphic-jobs.com/graphiste'),
(12, 3, 1, 51, 'https://fr.jooble.org/emploi-designer-'),
(13, 3, 1, 20, 'https://www.design-fax.fr/category/offres-emploi/'),
(14, 3, 1, 81, 'http://uxjobs.fr/'),
(15, 3, 1, 25, 'http://www.ecoles-conde.com/entreprise/consulter-les-offres/'),
(16, 3, 1, 62, 'http://www.optioncarriere.com/recherche/emplois?s=Designer&l=France&lid=57'),
(17, 3, 1, 24, 'http://www.ecole-boulle.org/emploi'),
(18, 3, 1, 65, 'https://candidat.pole-emploi.fr/offres/recherche;JSESSIONID_RECH_OFFRE=N3JirrPIJ_inBGQso7g4U-SeLMue80bbpx87jWenrRiNsqNyPaCj!-1412110013?motsCles=designer&offresPartenaires=true&rayon=10&tri=0'),
(19, 3, 1, 57, 'https://www.linkedin.com/jobs/search/?keywords=Designer&location=France&locationId=fr%3A0'),
(20, 3, 1, 5, 'https://www.accenture.com/fr-fr/careers/jobsearch?jk=design'),
(21, 3, 1, 13, 'https://www.beepjob.com/emploi-metier/designer;4098?orderDefault=1&orderBy=pertinence'),
(22, 3, 1, 61, 'https://neuvoo.fr/emplois/?k=designer&l=&f=&o=&p=&r=15'),
(23, 3, 1, 44, 'http://www.jobintree.com/emploi/designer'),
(24, 3, 1, 62, 'https://www.optioncarriere.com/recherche/emplois?s=designer&l=France'),
(25, 3, 1, 19, 'http://www.designanddesign.com/jobs.php?cat=&offer=&keyword=&country=60'),
(26, 3, 1, 38, 'https://www.indeed.fr/emplois?q=designer&l='),
(27, 3, 1, 80, 'https://emploi.trovit.fr/index.php/cod.search_jobs/what_d.designer/sug.0/isUserSearch.1'),
(28, 3, 1, 30, 'http://fr.fashionjobs.com/s/?metier=&auto=0&msId=&categories=1&regions=&keyword='),
(29, 3, 1, 84, 'https://france.xpatjobs.com/search/?areas=5&job_type=0&pagenum=2&keyword=designer&ref=&language=&jobDescriptionLanguage=&city=&order=0&min_date='),
(30, 3, 1, 35, 'https://www.hellowork.io/emplois/recherche.html?j=Designer+&j_autocomplete=&l=&l_autocomplete='),
(31, 3, 1, 46, 'http://fr.jobrapido.com/Offres-d-emploi-pour-Designer?p=2'),
(32, 3, 1, 82, 'https://fr.viadeo.com/fr/jobs/search?keywords=designer&location=&page=1&address=&noAddress=false&'),
(33, 3, 1, 70, 'https://remixjobs.com/Emploi-designer'),
(34, 3, 1, 64, 'http://emploi.outdoorsportsvalley.org/offres.aspx'),
(35, 3, 1, 52, 'https://www.keljob.com/recherche?q=designer'),
(36, 3, 1, 67, 'https://www.qapa.fr/utilisateurs/offres-d-emploi/rechercher-une-offre-d-emploi?q=designer&location=&lat_center=&lng_center=&lat_ne=&lng_ne=&lat_sw=&lng_sw=&maximum_distance=30000&p=0&is_v=1'),
(37, 3, 5, 38, 'https://www.indeed.fr/emplois?q=d%C3%A9veloppeur&l='),
(38, 3, 5, 18, 'https://www.chooseyourboss.com/offres/emploi-it'),
(39, 3, 5, 46, 'http://fr.jobrapido.com/?w=developpeur'),
(40, 3, 5, 80, 'https://emploi.trovit.fr/index.php/cod.search_adwords_jobs/ppc_landing_type.2/type.0/what_d.d%C3%A9veloppeur/sug.0/tracking.%7B%22d%22:%22c%22,%22a%22:10711733539,%22targetid%22:%22kwd-3500219942%22,%22k%22:3500219942%7D/isUserSearch.1/origin.11'),
(41, 3, 5, 62, 'https://www.optioncarriere.com/emploi-developpeur.html'),
(42, 3, 5, 56, 'https://www.lesjeudis.com/recherche?q=d%C3%A9veloppeur+&loc='),
(43, 3, 5, 47, 'https://www.jobsintech.io/search/paris'),
(44, 3, 5, 32, 'https://www.glassdoor.fr/Emploi/france-developer-emplois-SRCH_IL.0,6_IN86_KO7,16.htm?radius=18'),
(45, 3, 5, 8, 'https://angel.co/r/france/developer/jobs'),
(46, 3, 5, 75, 'https://stackoverflow.com/jobs?sort=i&q=developer&l=france&d=20&u=K'),
(47, 3, 5, 48, 'http://www.jobsmart.fr/jobs?w=D%C3%A9veloppeur&l='),
(48, 3, 5, 57, 'https://www.linkedin.com/jobs/search/?keywords=D%C3%A9veloppeur&locationId=fr%3A0'),
(49, 3, 5, 70, 'https://remixjobs.com/'),
(50, 3, 5, 76, 'https://startuponly.com/?q=developpeur&place_name=&lat=&lng=&rad=&offset=0&m='),
(51, 3, 5, 69, 'http://www.regionsjob.com/emploi/recherche?f=Informatique_dev'),
(52, 3, 5, 68, 'http://www.recrut.com/les_offres/famille_metier_id:33'),
(53, 3, 5, 60, 'https://www.monster.fr/emploi/recherche/?q=Developpeur&cy=fr&intcid=HP_HeroSearch&rad=20'),
(54, 3, 5, 50, 'http://www.jobtic.fr/en/'),
(55, 3, 5, 84, 'https://france.xpatjobs.com/search?ps=1&keyword=developpeur&city=&areas=5'),
(56, 3, 5, 35, 'https://www.hellowork.io/emplois/recherche.html?j=D%C3%A9veloppeur+informatique&j_autocomplete=Developpeur&gclid=Cj0KEQjw8tbHBRC6rLS024qYjtEBEiQA7wIDeRYL5kj2O7ns0ldrZiD3PLv7ECQ47G8yXs4BNOAw028aAqFL8P8HAQ'),
(57, 3, 5, 61, 'https://neuvoo.fr/emplois/?k=programmeur&l=&f=&p=1&r=15&duc=&v=&source=&openmap='),
(58, 3, 5, 40, 'https://www.webmarketing-com.com/emploi/jobs/find/?query=developpeur&category='),
(59, 3, 5, 59, 'https://www.meteojob.com/jobsearch/offers?what=developpeur'),
(60, 3, 5, 52, 'https://www.keljob.com/recherche?q=developpeur'),
(61, 3, 5, 67, 'https://www.qapa.fr/utilisateurs/offres-d-emploi/rechercher-une-offre-d-emploi?q=developpeur&idx=qapa_production_fr_fr_offers&p=0&location=&lat_center=&lng_center=&lat_ne=&lng_ne=&lat_sw=&lng_sw=&maximum_distance=30000&is_v=1'),
(62, 3, 2, 38, 'https://www.indeed.fr/France-Emplois-Ingenieur'),
(63, 3, 2, 43, 'http://www.jobingenieur.com/'),
(64, 3, 2, 60, 'https://www.monster.fr/emploi/recherche/?q=Ing__C3__A9nieur-&where=France'),
(65, 3, 2, 14, 'https://www.cadremploi.fr/emploi/'),
(66, 3, 2, 62, 'https://www.optioncarriere.com/recherche/emplois?s=ing%C3%A9nieur'),
(67, 3, 2, 78, 'https://emploi.techniques-ingenieur.fr/offres/search.do?poste=ing%C3%A9nieur&pays=&salaire=&region=&secteur=&contrat=&search_job_submit.x=0&search_job_submit.y=0&search_job_submit=Rechercher'),
(68, 3, 2, 56, 'https://www.lesjeudis.com/recherche?q=ingenieur&loc='),
(69, 3, 2, 69, 'https://www.regionsjob.com/offre/chef-de-projet-informatique'),
(70, 3, 2, 13, 'https://www.beepjob.com/ad/search?motscles=ing%C3%A9nieur&orderDefault=1&orderBy=pertinence&depuis='),
(71, 3, 2, 53, 'https://www.gazettelabo.fr/PA/pa3.php?choix=offreemploi&type=ingenieur'),
(72, 3, 2, 32, 'https://www.glassdoor.fr/Emploi/france-engineering-emplois-SRCH_IL.0,6_IN86_KE7,18.htm?radius=18'),
(73, 3, 2, 79, 'https://www.totaljobs.com/jobs/engineering/in-france'),
(74, 3, 1, 48, 'http://www.jobsmart.fr/jobs?w=ingenieur&l='),
(75, 3, 1, 57, 'https://www.linkedin.com/jobs/search/?keywords=ingenieur&location=&locationId=fr%3A0'),
(76, 3, 2, 84, 'https://france.xpatjobs.com/search?ps=1&keyword=ing%C3%A9nieur&city=&areas=5'),
(77, 3, 2, 36, 'https://jobs-eu.hudson.com/en-fr/technical-and-engineering-jobs/'),
(78, 3, 2, 5, 'https://www.accenture.com/fr-fr/careers/jobsearch?jk=ing%C3%A9nieur'),
(79, 3, 2, 82, 'http://fr.viadeo.com/fr/jobs/offresdemploi/?country=fr&keywords=ingenieur '),
(80, 3, 2, 27, 'http://www.emploi-montagne.com/?s=Ing%C3%A9nieur'),
(81, 3, 2, 80, 'https://emploi.trovit.fr/index.php/cod.search_jobs/what_d.ing%C3%A9nieur/sug.0/isUserSearch.1'),
(82, 3, 2, 49, 'https://www.jobtech.fr/offre-emploi.html?offset=0&reloadedSearch=1'),
(83, 3, 2, 7, 'http://www.aeroemploiformation.com/'),
(84, 3, 2, 17, 'https://www.carriere-industrie.com/candidatOffre/search/mot_cle/ing%C3%A9nieur'),
(85, 3, 2, 61, 'https://neuvoo.fr/emplois/?k=ing%C3%A9nieur&l=&f=&p=1&r=15&duc=&v=&source=&openmap='),
(86, 3, 2, 80, 'https://emploi.trovit.fr/index.php/cod.search_jobs/type.0/what_d.ing%C3%A9nieur/sug.0/isUserSearch.1/origin.1'),
(87, 3, 2, 59, 'https://www.meteojob.com/jobsearch/offers?what=ing%C3%A9nieur'),
(88, 3, 2, 52, 'https://www.keljob.com/recherche?q=ing%C3%A9nieur'),
(89, 3, 2, 35, 'https://www.hellowork.io/emplois/recherche.html?j=ing%C3%A9nieur&j_autocomplete=&l=&l_autocomplete='),
(90, 3, 2, 62, 'https://www.optioncarriere.com/recherche/emplois?s=ing%C3%A9nieur&l=France'),
(91, 3, 2, 67, 'https://www.qapa.fr/utilisateurs/offres-d-emploi/rechercher-une-offre-d-emploi?q=ing%C3%A9nieur&idx=qapa_production_fr_fr_offers&p=0&location=&lat_center=&lng_center=&lat_ne=&lng_ne=&lat_sw=&lng_sw=&maximum_distance=30000&is_v=1'),
(92, 3, 4, 36, 'https://jobs-eu.hudson.com/en-fr/'),
(93, 3, 4, 14, 'https://www.cadremploi.fr/emploi/liste_offres?fct=30500'),
(94, 3, 4, 57, 'https://www.linkedin.com/jobs/search/?country=fr&keywords=marketing&location=France&locationId=fr%3A0'),
(95, 3, 4, 79, 'https://www.totaljobs.com/jobs/marketing/in-france'),
(96, 3, 4, 32, 'https://www.glassdoor.fr/Emploi/france-marketing-emplois-SRCH_IL.0,6_IN86_KO7,16.htm?radius=18'),
(97, 3, 4, 74, 'https://www.sportyjob.com/fr/emplois-sport/?fwp_keyword_search=marketing'),
(98, 3, 4, 11, 'https://azertyjobs.com/'),
(99, 3, 4, 76, 'https://startuponly.com/'),
(100, 3, 4, 61, 'https://neuvoo.fr/services/direct-jobs/direct-jobs-page-a.php?l=Paris&k=marketing'),
(101, 3, 4, 38, 'https://www.indeed.fr/Emplois-Marketing'),
(102, 3, 4, 52, 'https://www.keljob.com/recherche?q=marketing&xtor=SEC-70&gclid=CjwKEAiArvTFBRCLq5-7-MSJ0jMSJABHBvp0gG6b7sfpMFg4NpdI9C43tJZh6oaCYDbe26pMCJYX_BoCCTnw_wcB'),
(103, 3, 4, 60, 'https://www.monster.fr/emploi/recherche/?q=Marketing-'),
(104, 3, 4, 45, 'https://www.jobmarketingvente.com/toutes-les-offres-d-emploi.html'),
(105, 3, 4, 77, 'https://www.stepstone.fr/5/offre-emploi.html'),
(106, 3, 4, 39, 'https://www.iquesta.com/offer/result'),
(107, 3, 4, 46, 'http://fr.jobrapido.com/?w=marketing'),
(108, 3, 4, 5, 'https://www.accenture.com/fr-fr/careers/jobsearch?jk=marketing'),
(109, 3, 4, 68, 'http://www.recrut.com/les_offres/categorie:communication_marketing'),
(110, 3, 4, 69, 'https://www.regionsjob.com/emploi/recherche?f=Marketing_com_graphisme'),
(111, 3, 4, 13, 'https://www.beepjob.com/emploi-secteur/marketing;49'),
(112, 3, 4, 27, 'http://www.emploi-montagne.com/?s=&filter%5Bfonction%5D%5B%5D=6'),
(113, 3, 4, 33, 'https://www.globalsportsjobs.fr/offres/marketing-and-communication/'),
(114, 3, 4, 72, 'http://www.sportcarriere.com/jobs'),
(115, 3, 4, 73, 'http://www.sportstrategies.com/sportrh/recherche/?recherche=marketing&ok.x=0&ok.y=0'),
(116, 3, 4, 71, 'https://www.roberthalf.fr/jobs/marketing'),
(117, 3, 4, 42, 'https://www.jobenstock.fr/recherche/jobs?query=marketing'),
(118, 3, 4, 80, 'https://emploi.trovit.fr/index.php/cod.search_jobs/type.0/what_d.marketing/sug.0/isUserSearch.1/origin.1'),
(119, 3, 4, 48, 'http://www.jobsmart.fr/jobs?w=marketing&l='),
(120, 3, 4, 64, 'http://emploi.outdoorsportsvalley.org/offres.aspx'),
(121, 3, 4, 40, 'https://www.webmarketing-com.com/emploi/?gclid=Cj0KCQjw1a3KBRCYARIsABNRnxvuyGdBPWKpLqkjgRRv-8PUI6Foi_c28yhXlSDGx6g4FWSvLsfLo4caAtGfEALw_wcB'),
(122, 3, 4, 59, 'https://www.meteojob.com/jobsearch/offers?what=marketing'),
(123, 3, 4, 35, 'https://www.hellowork.io/emplois/recherche.html?j=marketing&j_autocomplete=&l=&l_autocomplete='),
(124, 3, 4, 67, 'https://www.qapa.fr/utilisateurs/offres-d-emploi/rechercher-une-offre-d-emploi?q=marketing&idx=qapa_production_fr_fr_offers&p=0&location=&lat_center=&lng_center=&lat_ne=&lng_ne=&lat_sw=&lng_sw=&maximum_distance=30000&is_v=1'),
(125, 3, 6, 55, 'https://emploi-btp.lemoniteur.fr/offre-emploi/offre-emploi-architecte-h-f-om-344'),
(126, 3, 6, 38, 'https://www.indeed.fr/Emplois-Architecte'),
(127, 3, 6, 60, 'https://www.monster.fr/emploi/recherche/?q=Architecture'),
(128, 3, 6, 14, 'https://www.cadremploi.fr/emploi/emploi-architecte.shtml'),
(130, 3, 6, 12, 'https://www.batiactuemploi.com/offre-emploi-BTP/metier/architecte'),
(131, 3, 6, 65, 'https://candidat.pole-emploi.fr/offres/recherche?appellationV3=11110&offresPartenaires=true&rayon=10&tri=0'),
(132, 3, 6, 31, 'http://www.fnau.org/fr/emplois/'),
(133, 3, 6, 61, 'https://neuvoo.fr/emplois/?k=Architecte&l=&f=&p=1&r=15&duc=&v=&source=&openmap='),
(134, 3, 6, 44, 'http://www.jobintree.com/emploi/architecte'),
(135, 3, 6, 32, 'https://www.glassdoor.fr/Emploi/architecte-emplois-SRCH_KO0,10.htm?radius=18'),
(136, 3, 6, 67, 'https://www.qapa.fr/utilisateurs/offres-d-emploi/rechercher-une-offre-d-emploi?q=marketing&idx=qapa_production_fr_fr_offers&p=0&location=&lat_center=&lng_center=&lat_ne=&lng_ne=&lat_sw=&lng_sw=&maximum_distance=30000&is_v=1'),
(137, 3, 6, 28, 'https://www.emploi-pro.fr/offre-emploi?p=34&__posted=1&page=1&label=architecture&id_ref_localisation%5B%5D=Array&id_ref_localisation_label=&submitStartSearch='),
(138, 3, 6, 84, 'https://france.xpatjobs.com/search?ps=1&keyword=architecte&city=&areas=5'),
(139, 3, 6, 10, 'https://archibat.com/fr/offres-demploi?keyword=&locations%5B%5D=1&experienceLevel=&search=&domain=10023'),
(140, 3, 6, 63, 'https://www.architectes.org/recherche-annonce'),
(141, 3, 6, 46, 'http://fr.jobrapido.com/?w=architecte'),
(142, 3, 6, 52, 'https://www.keljob.com/recherche?q=architecte'),
(143, 3, 6, 57, 'https://www.linkedin.com/jobs/search/?country=fr&keywords=Architecte&location=France&locationId=fr%3A0'),
(144, 3, 6, 82, 'https://fr.viadeo.com/fr/jobs/search?keywords=architecte&location=&page=1&address=&noAddress=false&'),
(145, 3, 6, 59, 'https://www.meteojob.com/jobsearch/offers?what=architecte'),
(146, 3, 6, 35, 'https://www.hellowork.io/emplois/recherche.html?j=marketing&j_autocomplete=&l=&l_autocomplete='),
(147, 3, 6, 62, 'https://www.optioncarriere.com/recherche/emplois?s=architecte&l=France'),
(148, 3, 3, 74, 'https://www.sportyjob.com/fr/emplois-sport/?fwp_keyword_search=finance'),
(149, 3, 3, 84, 'https://france.xpatjobs.com/search?ps=1&keyword=Finance&city=&areas=5'),
(150, 3, 3, 83, 'https://www.vitijob.com/index.php?action=&mode=liste_offre&poste=finance&radio_date=4&pfbc-token0=2d06116fc063d30215824add0c069e5e&pfbc-token1=e5e960c0dda42851203d360cf61160d2&pfbc-token2='),
(151, 3, 3, 64, 'http://emploi.outdoorsportsvalley.org/offres.aspx#annonce'),
(152, 3, 3, 38, 'https://www.indeed.fr/Emplois-finance'),
(153, 3, 3, 60, 'https://www.monster.fr/emploi/recherche/?q=finance'),
(154, 3, 3, 80, 'https://emploi.trovit.fr/index.php/cod.search_adwords_jobs/ppc_landing_type.2/type.0/what_d.finance/sug.0/tracking./isUserSearch.1/origin.11'),
(155, 3, 3, 59, 'https://www.meteojob.com/jobsearch/offers?what=finance'),
(156, 3, 3, 65, 'https://candidat.pole-emploi.fr/offres/recherche?motsCles=finance&offresPartenaires=true&rayon=10&tri=0'),
(157, 3, 3, 61, 'https://neuvoo.fr/emplois/?k=finance&l=&f=&p=1&r=15&duc=&v=&source=&openmap='),
(158, 3, 3, 44, 'http://www.jobintree.com/emploi/finance'),
(159, 3, 3, 46, 'http://fr.jobrapido.com/?w=finance'),
(160, 3, 3, 52, 'https://www.keljob.com/recherche?q=finance'),
(161, 3, 3, 82, 'https://fr.viadeo.com/fr/jobs/search?keywords=finance&location=&page=1&address=&noAddress=false&'),
(162, 3, 3, 57, 'https://www.linkedin.com/jobs/search/?country=fr&keywords=Finance&location=France&locationId=fr%3A0'),
(163, 3, 3, 69, 'https://www.regionsjob.com/emploi/recherche?f=Compta_gestion_finance_audit'),
(164, 3, 3, 13, 'https://www.beepjob.com/emploi-secteur/finance;35?orderDefault=1&orderBy=pertinence'),
(165, 3, 3, 9, 'https://cadres.apec.fr/home/mes-offres/recherche-des-offres-demploi/liste-des-offres-demploi.html?sortsType=SCORE&sortsDirection=DESCENDING&nbParPage=20&typeAffichage=detaille&page=0&distance=0&motsCles=finance'),
(166, 3, 3, 48, 'http://www.jobsmart.fr/jobs?w=finance&l='),
(167, 3, 3, 40, 'https://www.webmarketing-com.com/emploi/jobs/find/?query=finance&category='),
(168, 3, 3, 73, 'http://www.sportstrategies.com/sportrh/recherche/?recherche=finance&ok.x=0&ok.y=0'),
(169, 3, 3, 14, 'https://www.cadremploi.fr/emploi/liste_offres'),
(170, 3, 3, 32, 'https://www.glassdoor.fr/Emploi/france-finance-emplois-SRCH_IL.0,6_IN86_KE7,14.htm'),
(171, 3, 3, 67, 'https://www.qapa.fr/utilisateurs/offres-d-emploi/rechercher-une-offre-d-emploi?q=finance&idx=qapa_production_fr_fr_offers&p=0&location=&lat_center=&lng_center=&lat_ne=&lng_ne=&lat_sw=&lng_sw=&maximum_distance=30000&is_v=1'),
(172, 3, 3, 35, 'https://www.hellowork.io/emplois/recherche.html?j=finance&j_autocomplete=&l=&l_autocomplete='),
(173, 3, 3, 22, 'https://www.dogfinance.com/fr/offres/emploi/'),
(174, 3, 3, 6, 'https://www.admincompta.fr/offre-emploi.html?offset=0&reloadedSearch=1'),
(175, 3, 3, 26, 'https://www.efinancialcareers.fr/'),
(176, 3, 3, 58, 'http://www.linkfinance.fr/emploi/recherche'),
(177, 3, 3, 16, 'http://www.cadresonline.com/emploi/fonction-finance+comptabilite+audit-70000000'),
(178, 3, 3, 30, 'http://fr.fashionjobs.com/s/?metier=&auto=0&msId=&categories=10&regions=&keyword='),
(179, 3, 3, 62, 'https://www.optioncarriere.com/recherche/emplois?s=finance&l=France'),
(180, 3, 6, 9, 'https://cadres.apec.fr/liste-offres-emploi-cadres/8_____________offre-d-emploi.html?sortsType=SCORE&sortsDirection=DESCENDING&nbParPage=20&typeAffichage=detaille&page=0&distance=0&motsCles=Architecte'),
(181, 3, 4, 9, 'https://cadres.apec.fr/home/mes-offres/recherche-des-offres-demploi/liste-des-offres-demploi.html?motsCles=marketing&sortsType=SCORE&sortsDirection=DESCENDING'),
(182, 3, 5, 82, 'https://fr.viadeo.com/fr/jobs/search?keywords=developpeur'),
(183, 3, 5, 65, 'https://candidat.pole-emploi.fr/offres/recherche?motsCles=developpeur'),
(184, 3, 5, 23, 'http://software.jobs/jobs/?q=developer&location=France'),
(185, 3, 5, 21, 'https://emploi.developpez.com/');

-- --------------------------------------------------------

--
-- Structure de la table `sector`
--

CREATE TABLE `sector` (
  `sector_id` int(11) NOT NULL,
  `sector_label` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `sector`
--

INSERT INTO `sector` (`sector_id`, `sector_label`) VALUES
(1, 'design'),
(2, 'engineer'),
(3, 'finance'),
(4, 'marketing'),
(5, 'programs'),
(6, 'architectures');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_username` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`user_id`, `user_username`, `user_email`, `user_password`) VALUES
(1, 'userTest', 'test@test.fr', 'test');

-- --------------------------------------------------------

--
-- Structure de la table `website`
--

CREATE TABLE `website` (
  `website_id` int(11) NOT NULL,
  `website_label` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `website`
--

INSERT INTO `website` (`website_id`, `website_label`) VALUES
(5, 'accenture'),
(6, 'admincompta'),
(7, 'aeroemploiformation'),
(8, 'angellist'),
(9, 'apec'),
(10, 'archibat'),
(11, 'azertyjobs'),
(12, 'batiactu'),
(13, 'beepjob'),
(14, 'cadremploi'),
(16, 'cadresonline'),
(17, 'carriereindustrie'),
(18, 'chooseyoourboss'),
(19, 'designanddesign'),
(20, 'designfax'),
(21, 'developpezcom'),
(22, 'dogfinance'),
(23, 'dotjobs'),
(24, 'ecoleboulle'),
(25, 'ecoledesconde'),
(26, 'efinancialcareers'),
(27, 'emploimontagne'),
(28, 'emploipro'),
(29, 'etapes'),
(30, 'fashionjob'),
(31, 'fnau'),
(32, 'glassdoor'),
(33, 'globalsportsjobs'),
(34, 'graphicjobs'),
(35, 'hellowork'),
(36, 'hudson'),
(37, 'iledefrancelordredesarchitectes'),
(38, 'indeed'),
(39, 'iquesta'),
(40, 'jobandcom'),
(41, 'jobculture'),
(42, 'jobenstock'),
(43, 'jobingenieur'),
(44, 'jobintree'),
(45, 'jobmarketingvente'),
(46, 'jobrapido'),
(47, 'jobsintech'),
(48, 'jobsmart'),
(49, 'jobtech'),
(50, 'jobtic'),
(51, 'jooble'),
(52, 'keljob'),
(53, 'lagazettedulaboratoire'),
(54, 'lelieududesign'),
(55, 'lemoniteuremploi'),
(56, 'lesjeudiscom'),
(57, 'linkedin'),
(58, 'linkfinance'),
(59, 'meteojob'),
(60, 'monster'),
(61, 'neuvoo'),
(62, 'optioncarriere'),
(63, 'ordredesarchtiectes'),
(64, 'outdoorsportsvalley'),
(65, 'poleemploi'),
(66, 'profilculture'),
(67, 'qapa'),
(68, 'recrut'),
(69, 'regionsjob'),
(70, 'remixjobs'),
(71, 'roberthalf'),
(72, 'sportcarriere'),
(73, 'sportstrategies'),
(74, 'sportyjob'),
(75, 'stackoverflow'),
(76, 'startuponly'),
(77, 'stepstone'),
(78, 'techniquedelingenieur'),
(79, 'totaljobs'),
(80, 'trovit'),
(81, 'uxjobs'),
(82, 'viadeo'),
(83, 'vitijob'),
(84, 'xpatjobs');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `annonce`
--
ALTER TABLE `annonce`
  ADD PRIMARY KEY (`annonce_id`),
  ADD KEY `annonce_country_id` (`annonce_country_id`),
  ADD KEY `annonce_sector_id` (`annonce_sector_id`),
  ADD KEY `annonce_website_id` (`annonce_website_id`);

--
-- Index pour la table `continent`
--
ALTER TABLE `continent`
  ADD PRIMARY KEY (`continent_id`);

--
-- Index pour la table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`country_id`),
  ADD KEY `country_continent_id` (`country_continent_id`);

--
-- Index pour la table `link`
--
ALTER TABLE `link`
  ADD PRIMARY KEY (`link_id`),
  ADD KEY `link_country_id` (`link_country_id`),
  ADD KEY `link_sector_id` (`link_sector_id`),
  ADD KEY `link_website_id` (`link_website_id`);

--
-- Index pour la table `sector`
--
ALTER TABLE `sector`
  ADD PRIMARY KEY (`sector_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Index pour la table `website`
--
ALTER TABLE `website`
  ADD PRIMARY KEY (`website_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `annonce`
--
ALTER TABLE `annonce`
  MODIFY `annonce_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `continent`
--
ALTER TABLE `continent`
  MODIFY `continent_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `country`
--
ALTER TABLE `country`
  MODIFY `country_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT pour la table `link`
--
ALTER TABLE `link`
  MODIFY `link_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=186;
--
-- AUTO_INCREMENT pour la table `sector`
--
ALTER TABLE `sector`
  MODIFY `sector_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `website`
--
ALTER TABLE `website`
  MODIFY `website_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;
--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `annonce`
--
ALTER TABLE `annonce`
  ADD CONSTRAINT `annonce_ibfk_1` FOREIGN KEY (`annonce_country_id`) REFERENCES `country` (`country_id`),
  ADD CONSTRAINT `annonce_ibfk_2` FOREIGN KEY (`annonce_sector_id`) REFERENCES `sector` (`sector_id`),
  ADD CONSTRAINT `annonce_ibfk_3` FOREIGN KEY (`annonce_website_id`) REFERENCES `website` (`website_id`);

--
-- Contraintes pour la table `country`
--
ALTER TABLE `country`
  ADD CONSTRAINT `country_ibfk_1` FOREIGN KEY (`country_continent_id`) REFERENCES `continent` (`continent_id`);

--
-- Contraintes pour la table `link`
--
ALTER TABLE `link`
  ADD CONSTRAINT `link_ibfk_1` FOREIGN KEY (`link_country_id`) REFERENCES `country` (`country_id`),
  ADD CONSTRAINT `link_ibfk_2` FOREIGN KEY (`link_sector_id`) REFERENCES `sector` (`sector_id`),
  ADD CONSTRAINT `link_ibfk_3` FOREIGN KEY (`link_website_id`) REFERENCES `website` (`website_id`);
