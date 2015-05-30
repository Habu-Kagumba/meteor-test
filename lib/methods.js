Patients = new Mongo.Collection('patients')
Diags = new Mongo.Collection('diags')
Drugs = new Mongo.Collection('drugs')
Doctors = new Mongo.Collection('doctors')

Meteor.methods({
  addPatient: function(name,dob,gender,nationality,idn,ration,allergies) {
    Patients.insert({
      name: name,
      dob: dob,
      gender: gender,
      nationality: nationality,
      id: idn,
      ration: ration,
      allergies: allergies
    })
  },
  addDoctors: function(diags,drugs,notes) {
    Doctors.insert({
      diag: diags,
      drug: drugs,
      notes: notes,
    })
  }
})
