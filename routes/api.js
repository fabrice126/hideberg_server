import _confLogin from '../config/_confLogin';
import confMAP from '../config/confMAP';
import lr from 'line-reader';
import fs from 'fs';
import express from 'express';
import jwt from 'jsonwebtoken';
import jwtExpress from 'express-jwt';

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

/**
 * API permettant de retourner le nombre de site web proposant le domaine dans le pays recherché
 * ex : http://localhost:3000/api/link/design/france/count 
 */
router.get('/link/:sector/:country/count', (req, res, next) => {
  let sector = `${req.params.sector}`;
  let country = `${req.params.country}`;

  let sql = `select count(*) as nbLabel from link l, country c, sector s, website w where l.link_country_id=c.country_id AND l.link_sector_id=s.sector_id AND l.link_website_id = w.website_id AND c.country_label="${country}" AND s.sector_label="${sector}"`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return err;
    res.json({ res: results[0].nbLabel });
  });
});

/**
 * API permettant de retourner une liste de @nbpage sites web à partir de @numpage selon le domaine et pays recherché
 */
router.get('/link/:sector/:country/:numpage/:nbpage', (req, res, next) => {
  let sector = `${req.params.sector}`;
  let country = `${req.params.country}`;

  let numpage = `${req.params.numpage}`;
  let elemNbPerPage = `${req.params.nbpage}`;

  let sql = `select link_label, website_label from link l, country c, sector s, website w where l.link_country_id=c.country_id AND l.link_sector_id=s.sector_id AND l.link_website_id = w.website_id AND c.country_label="${country}" AND s.sector_label="${sector}" ORDER BY website_label ASC LIMIT ${elemNbPerPage} OFFSET ${(numpage * elemNbPerPage)}`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return  err;
    res.json({ sector: sector, country: country, res: results });
  });
});

/**
 * API permettant de retourner les liens de blog info par pays
 * ex : http://localhost:3000/api/link/france
 */
router.get('/link/:country', (req, res, next) => {
  let country = `${req.params.country}`;
  let sql = `select country_label, country_politic, country_cv, country_diplomatic from country c where c.country_label="${country}"`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return  err;
    res.json({ res: results });
  });
});

/**
 * API permettant de retourner les positions des pays sur la map
 */
router.get('/confMAP', function (req, res, next) {
  res.json(confMAP);
});

var getWebsites = (req, res, next) => {
  let sector = `${req.params.sector}`;
  let country = `${req.params.country}`;
  let sql = `select link_label, website_label from link l, country c, sector s, website w where l.link_country_id=c.country_id AND l.link_sector_id=s.sector_id AND l.link_website_id = w.website_id AND c.country_label="${country}" AND s.sector_label="${sector}"`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return  err;
    res.json({ sector: sector, country: country, res: results });
  });
}


/**
 * API permettant de retourner une liste de 3 annonces correspondant au secteur et pays recherché
 */
router.get('/annonce/:sector/:country', (req, res, next) => {
  let sector = `${req.params.sector}`;
  let country = `${req.params.country}`;

  let sql = `select annonce_description, website_label from annonce a, country c, sector s, website w where a.annonce_country_id=c.country_id AND a.annonce_sector_id=s.sector_id AND a.annonce_website_id = w.website_id AND c.country_label="${country}" AND s.sector_label="${sector}" LIMIT 5`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return  err;
    res.json({ sector: sector, country: country, res: results });
  });
});


/**
 * API permettant de retourner la liste des secteurs d'activités
 */
router.get('/sector', (req, res, next) => {
  let sector = `${req.params.sector}`;
  let country = `${req.params.country}`;

  let sql = `select sector_label from sector`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return  err;
    res.json({ res: results });
  });
});


router.get('/user/login/:email/:password', (req, res, next) => {
  let email = `${req.params.email}`;
  let password = `${req.params.password}`;

  let sql = `select *, count(user_id) as nb from user u where u.user_email="${email}" and u.user_password="${password}"`;
  let query = req.db.query(sql, (err, results) => {
    if (err) return  err;
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

router.get('/protected/:token', (req, res, next) => {
  // token / req.headers.authorization
  console.log('===> req.params.token : ' + req.params.token);
  //verify a token symmetric
  jwt.verify(req.params.token, _confLogin.secretKey, function (err, decoded) {
    if (err) return  err;
    res.json({ decoded: decoded });
  });
  //res.json({token:req.params.token})
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

module.exports = router;