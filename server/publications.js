Meteor.publish('patients', function(){
  return Patients.find()
})
Meteor.publish('diags', function(){
  return Diags.find()
})
Meteor.publish('drugs', function(){
  return Drugs.find()
})
Meteor.publish('doctors', function(){
  return Doctors.find()
})
