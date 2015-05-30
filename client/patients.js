Meteor.subscribe("patients")

Template.patients.events({
  'submit form': function(event){
    event.preventDefault()

    var name = event.target.fullname.value
    var dob = event.target.dob.value
    var gender = event.target.gender.value
    var nationality = event.target.nationality.value
    var idn = event.target.idn.value
    var ration = event.target.ration.value
    var allergies = event.target.allergies.value


    Meteor.call('addPatient', name,dob,gender,nationality,idn,ration,allergies)

    Session.set('temp', 'success')

    event.target.fullname.value = ''
    event.target.dob.value = ''
    event.target.gender.value = ''
    event.target.nationality.value = ''
    event.target.idn.value = ''
    event.target.ration.value = ''
    event.target.allergies.value = ''

    // return false
  }
})
