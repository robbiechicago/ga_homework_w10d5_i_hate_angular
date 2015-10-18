var Complaint = require('../models/Complaint');

// GET
function getAll(request, response) {
  Complaint.find(function(error, complaints) {
    if(error) response.status(404).send(error);

    response.status(200).send(complaints);
  }).select('-__v');
}

// POST
function createComplaint(request, response) {
  var complaint = new Complaint(request.body);

  complaint.save(function(error) {
    if(error) response.status(500).send(error);

    response.status(201).send(complaint);
  });
}

// GET
function getComplaint(request, response) {
  var id = request.params.id;

  Complaint.findById({_id: id}, function(error, complaint) {
    if(error) response.status(404).send(error);

    response.status(200).send(complaint);
  }).select('-__v');
}

function updateComplaint(request, response) {
  var id = request.params.id;

  Complaint.findById({_id: id}, function(error, complaint) {
    if(error) response.status(404).send(error);

    if(request.body.title) complaint.title = request.body.title;
    if(request.body.complaint) complaint.complaint = request.body.complaint;

    complaint.save(function(error) {
      if(error) response.status(500).send(error);

      response.status(200).send(complaint);
    });
  }).select('-__v');
}

function removeComplaint(request, response) {
  var id = request.params.id;

  Complaint.remove({_id: id}, function(error) {
    if(error) response.status(404).send(error);

    response.status(200);
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createComplaint: createComplaint,
  getComplaint: getComplaint,
  updateComplaint: updateComplaint,
  removeComplaint: removeComplaint
}