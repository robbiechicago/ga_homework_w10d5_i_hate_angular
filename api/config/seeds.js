var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose 
seeder.connect('mongodb://localhost:27017/i-hate-angular', function() {
  // Load Mongoose models 
  seeder.loadModels(['./models/Complaint.js']);
  // Clear specified collections 
  seeder.clearModels(['Complaint'], function() {
    // Callback to populate DB once collections have been cleared 
    seeder.populateModels(data);
  });
});

// Data array containing seed data - documents organized by Model 
var data = [
  { 
    'model': 'Complaint',
    'documents': [
      {
        'title': 'Angular smells of poo',
        'complaint': 'Thing about Angular is that it smells of poo.  Other than that it\'s fine'
      },
      {
        'title': 'IT KEEPS BREAKING!',
        'complaint': 'WHY don\'t you work?!  You\'re so rubbish, I wish you\'d go away'
      },
      {
        'title': 'Useless errors',
        'complaint': 'It\'s not working and I have no idea why.  Can\'t you just have some helpful errors?'
      },
      {
        'title': 'shit',
        'complaint': 'this thing is awful'
      }
    ]
  }
];  
