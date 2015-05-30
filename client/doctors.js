Meteor.subscribe("patients")
Meteor.subscribe("diags")
Meteor.subscribe("drugs")
Meteor.subscribe("doctors")

Template.doctors.onCreated(function(){
  Session.set('doc', {})
})

Template.doctors.helpers({
  settings: function(){
    return {
      position: "bottom",
      limit: 5,
      rules: [
        {
          collection: Patients,
          field: 'name',
          template: Template.userPill
        }
      ]
    }
  },
  doc: function(){
    return Session.get('doc')
  },
  diags: function(){
    return Diags.find({})
  },
  drugs: function(){
    return Drugs.find({})
  }
})

Template.doctors.events({
  "autocompleteselect input": function(event, template, doc) {
    // console.log(doc.name)
    Session.set('doc', doc)
  },

  'submit form': function(event){
    event.preventDefault()

    var diags = event.target.diags.value
    var drugs = event.target.drugs.value
    var notes = event.target.notes.value


    Meteor.call('addDoctor', diags, drugs, notes)

    Session.set('temp', 'success')

    event.target.diags.value = ''
    event.target.drugs.value = ''
    event.target.notes.value = ''
  }
})

