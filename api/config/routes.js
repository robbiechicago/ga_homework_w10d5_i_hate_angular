var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var complaintsController = require('../controllers/complaints');

router.route('/complaints')

  //GET all complaints
  .get(complaintsController.getAll)

  //POST a new blob
  .post(complaintsController.createComplaint);


router.route('/complaints/:id')

  // GET return specific complaints
  .get(complaintsController.getcomplaint)

  // PUT update existing complaints
  .put(complaintsController.updatecomplaint)

  // DELETE remove specific complaints from DB
  .delete(complaintsController.removecomplaint);


module.exports = router