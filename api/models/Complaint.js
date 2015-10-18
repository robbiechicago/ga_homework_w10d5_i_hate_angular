var mongoose = require('mongoose');

var ComplaintSchema = mongoose.Schema({
	title: String,
  complaint: String
});

module.exports = mongoose.model('Complaint', ComplaintSchema);

