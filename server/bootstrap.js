Meteor.startup(function() {

  if (Diags.find().count() === 0) {

    var diags = [
      {
        diag: 'Malaria',
      },
      {
        diag: 'TB',
      },
      {
        diag: 'Flu',
      },
      {
        diag: 'Bronchitis',
      },
      {
        diag: 'Other'
      }


    ];

    // loop over each sample poll and insert into database
    _.each(diags, function(diag) {
      Diags.insert(diag);
    });

  }

  if (Drugs.find().count() === 0) {

    var drugs = [
      {
        drug: 'Mara moja',
      },
      {
        drug: 'Panadol',
      },
      {
        drug: 'Hedex',
      },
      {
        drug: 'Miti ni dawa',
      },
      {
        drug: 'Other'
      }


    ];

    // loop over each sample poll and insert into database
    _.each(drugs, function(drug) {
      Drugs.insert(drug);
    });

  }

});
