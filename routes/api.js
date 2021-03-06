import _confLogin from '../config/_confLogin';
import confMAP from '../config/confMAP';
import lr from 'line-reader';
import fs from 'fs';
import express from 'express';
import jwt from 'jsonwebtoken';
import jwtExpress from 'express-jwt';
import { check, validationResult } from 'express-validator/check';
import { matchedData, sanitize } from 'express-validator/filter';
var router = express.Router();

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} prenom Prenom de l'utilisateur.
 * @apiSuccess {String} nom Nom de l'utilisateur :).
 */

/**
 * API permettant d'afficher un message de bienvenue sur l'api
 */
router.get('/', function (req, res, next) {
  res.json({ message: 'Welcome to hideberg API !' });
});


router.get('/continents', (req, res, next) => {
  let sql = ` SELECT c.continent_label as label 
              FROM continent c`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return err;
    res.json(results);
  });
});


router.get('/countries', (req, res, next) => {
  let sql = ` SELECT c.country_label as label 
              FROM country c`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return err;
    res.json(results);
  });
});

router.get('/continent/:continent', (req, res, next) => {
  let continent = `${req.params.continent}`;
  let sql = ` SELECT country_label as label 
              FROM continent, country 
              WHERE continent_label = "${continent}"`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return err;
    res.json(results);
  });
});

//pas besoin de faire de jointure avec continent dans la requete
router.get('/continent/:continent/country/:country/infos', (req, res, next) => {
  let continent = `${req.params.continent}`;
  let country = `${req.params.country}`;
  let sql = ` SELECT country_link_diplomatic, country_link_cv, country_link_politic 
              FROM continent, country 
              WHERE continent.continent_id = country.country_continent_id 
              AND continent_label = "${continent}" 
              AND country_label = "${country}"`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return err;
    res.json(results);
  });
});


router.get('/sectors', (req, res, next) => {
  let sql = ` SELECT sector_label as label 
              FROM sector`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return err;
    res.json(results);
  });
});

//pas besoin de faire de jointure avec continent dans la requete
router.get('/continent/:continent/country/:country/sector/:sector/websites', (req, res, next) => {
  let continent = `${req.params.continent}`;
  let country = `${req.params.country}`;
  let sector = `${req.params.sector}`;
  let sql = ` SELECT link_url, website_label 
              FROM link l, continent, country c, sector s, website w 
              WHERE continent.continent_id = c.country_continent_id 
              AND continent_label = "${continent}" 
              AND l.link_country_id = c.country_id 
              AND l.link_sector_id = s.sector_id 
              AND l.link_website_id = w.website_id 
              AND c.country_label = "${country}" 
              AND s.sector_label = "${sector}" 
              ORDER BY website_label ASC`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return err;
    res.json(results);
  });
});

router.get('/international/annonces', (req, res, next) => {
  let continent = `${req.params.continent}`;

  let sql = ` SELECT annonce_description, website_label 
              FROM annonce a, continent, country c, sector s, website w 
              WHERE continent.continent_id = c.country_continent_id 
              AND a.annonce_country_id = c.country_id 
              AND a.annonce_sector_id = s.sector_id 
              AND a.annonce_website_id = w.website_id`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return err;
    res.json(results);
  });
});

router.get('/continent/:continent/annonces', (req, res, next) => {
  let continent = `${req.params.continent}`;
  let sql = ` SELECT annonce_description, website_label 
              FROM annonce a, continent, country c, sector s, website w 
              WHERE continent.continent_id = c.country_continent_id 
              AND continent_label = "${continent}" 
              AND a.annonce_country_id = c.country_id 
              AND a.annonce_sector_id = s.sector_id 
              AND a.annonce_website_id = w.website_id`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return err;
    res.json(results);
  });
});
router.get('/continent/:continent/country/:country/sector/:sector/annonces', (req, res, next) => {
  let continent = `${req.params.continent}`;
  let sector = `${req.params.sector}`;
  let country = `${req.params.country}`;

  let sql = ` SELECT annonce_description, website_label 
              FROM annonce a, continent, country c, sector s, website w 
              WHERE continent.continent_id=c.country_continent_id 
              AND continent_label="${continent}" 
              AND a.annonce_country_id=c.country_id 
              AND a.annonce_sector_id=s.sector_id 
              AND a.annonce_website_id = w.website_id 
              AND c.country_label="${country}" 
              AND s.sector_label="${sector}"`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return err;
    res.json(results);
  });
});

/**
 * API permettant de retourner le nombre de site web proposant le domaine dans le pays recherché
 * ex : http://localhost:3000/api/link/design/france/count 
 */
router.get('/link/:sector/:country/count', (req, res, next) => {
  let sector = `${req.params.sector}`;
  let country = `${req.params.country}`;

  let sql = ` SELECT count(*) as nbLabel 
              FROM link l, country c, sector s, website w 
              WHERE l.link_country_id=c.country_id 
              AND l.link_sector_id=s.sector_id 
              AND l.link_website_id = w.website_id 
              AND c.country_label="${country}" 
              AND s.sector_label="${sector}"`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return err;
    res.json({ res: results[0].nbLabel });
  });
});

/**
 * API permettant de retourner une liste de @nbpage sites web à partir de @numpage selon le domaine et pays recherché
 */
router.get('/link/:sector/:country', (req, res, next) => {
  let sector = `${req.params.sector}`;
  let country = `${req.params.country}`;

  let sql = ` SELECT link_url, website_label 
              FROM link l, country c, sector s, website w 
              WHERE l.link_country_id=c.country_id 
              AND l.link_sector_id=s.sector_id 
              AND l.link_website_id = w.website_id 
              AND c.country_label="${country}" 
              AND s.sector_label="${sector}" 
              ORDER BY website_label ASC`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return err;
    res.json({ sector: sector, country: country, res: results });
  });
});

/**
 * API permettant de retourner les liens de blog info par pays
 * ex : http://localhost:3000/api/link/france
 */
router.get('/link/:country', (req, res, next) => {
  let country = `${req.params.country}`;
  let sql = ` SELECT country_label, country_link_politic, country_link_cv, country_link_diplomatic 
              FROM country c where c.country_label = "${country}"`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return err;
    res.json({ res: results });
  });
});

/**
 * API permettant de retourner les positions des pays sur la map
 */
router.get('/confMAP', function (req, res, next) {
  res.json(confMAP);
});

/**
 * API permettant de retourner une liste de 3 annonces correspondant au secteur et pays recherché
 */
router.get('/annonce/:sector/:country', (req, res, next) => {
  let sector = `${req.params.sector}`;
  let country = `${req.params.country}`;

  let sql = ` SELECT annonce_description, website_label 
              FROM annonce a, country c, sector s, website w 
              WHERE a.annonce_country_id=c.country_id 
              AND a.annonce_sector_id=s.sector_id 
              AND a.annonce_website_id = w.website_id 
              AND c.country_label="${country}" 
              AND s.sector_label="${sector}" LIMIT 5`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return err;
    res.json({ sector: sector, country: country, res: results });
  });
});


router.get('/user/login/:email/:password', (req, res, next) => {
  let email = `${req.params.email}`;
  let password = `${req.params.password}`;

  let sql = ` SELECT *, count(user_id) as nb 
              FROM user u 
              WHERE u.user_email="${email}" 
              AND u.user_password="${password}"`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return err;
    let _userExist = results[0].nb;
    let _msg = false;
    let token = "";
    if (_userExist) {
      _msg = true;
      token = jwt.sign({ username: results[0].user_username }, _confLogin.secretKey, { expiresIn: '1h' });
    }
    res.json({ res: results, token: token, secretKey: _confLogin.secretKey });
    // token in localStorage (client js) + authorization
  });
});

router.post('/signup', async (req, res) => {
  //Cette API n'est pas disponible en mode production
  try {
    const { user: User } = req.models;
    console.log(req.body);
    let { user_email, user_password, user_affiliated_sector, user_education_level, user_search_sector, user_nationality, user_destination } = req.body;
    console.log(req.body);
    if (!user_email || !user_password) return res.status(401).json("Vous devez saisir un mail et un mot de passe");
    user_email = user_email.toLowerCase();
    // check('username').isEmail().withMessage('must be an email');
    let newUser = await User.create({
      user_email,
      user_password,
      user_affiliated_sector,
      user_education_level,
      user_search_sector,
      user_nationality,
      user_destination
    });
    // Create token if the user_password matched and no error was thrown
    var token = jwt.sign({ user_id: newUser.user_id, user_email: newUser.user_email }, _confLogin.secretKey, { expiresIn: 4 * 3600 * 24 });
    return res.json({
      success: true,
      token: 'Bearer ' + token
    });
  } catch (err) {
    return res.status(401).json({ error_msg: err });
  }
});

router.post('/login', async function (req, res, next) {
  try {
    const { user: User } = req.models;
    let { user_email, user_password } = req.body;
    user_email = user_email.toLowerCase()
    // check('username').isEmail().withMessage('must be an email')
    const user = await User.findOne({ where: { user_email } });
    if (!user) return res.status(401).json("Aucun utilisateur trouvé");
    // Check if user_password matches
    user.comparePassword(user_password, (err, isMatch) => {
      if (!isMatch || err) return res.status(401).json("Mauvais mot de passe");
      const { user_id, user_email } = user;
      // Create token if the user_password matched and no error was thrown
      var token = jwt.sign({ user_id, user_email }, _confLogin.secretKey, { expiresIn: 4 * 3600 * 24 });
      return res.json({
        success: true,
        token: 'Bearer ' + token
      });
    });
  } catch (err) {
    return res.status(401).json(err);
  }
});


router.get('/auth', jwtExpress({ secret: _confLogin.secretKey }), (req, res, next) => {
  console.log(req.user);
  if (!req.user) return res.sendStatus(401);
  res.json(req.user);
});


/*
router.get('/transformWebsiteSQL', function (req, res, next) {
  let rootPath = `./public/files/website.txt`;
  let theLine = "";
  lr.eachLine(rootPath, function (line, last) {
    theLine += "INSERT INTO `website`(`website_id`, `website_label`) VALUES ('','" + line + "');";
 
    if (last) {
      res.json({ theLine: theLine })
    }
  });
});
*/

var getWebsites = (req, res, next) => {
  let sector = `${req.params.sector}`;
  let country = `${req.params.country}`;
  let sql = ` SELECT link_url, website_label 
              FROM link l, country c, sector s, website w 
              WHERE l.link_country_id = c.country_id 
              AND l.link_sector_id = s.sector_id 
              AND l.link_website_id = w.website_id 
              AND c.country_label = "${country}" 
              AND s.sector_label = "${sector}"`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return err;
    res.json({ sector: sector, country: country, res: results });
  });
}

module.exports = router;