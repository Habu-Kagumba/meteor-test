Template.body.onCreated(function(){
  Session.set('temp', 'patients')
})

Template.body.helpers({
  active: function(){
    return Session.get('temp')
  }
})

Template.body.events({
  'click .patients-btn': function(event){
    event.preventDefault()
    Session.set('temp', event.target.id)
  },

  'click .doctors-btn': function(event){
    event.preventDefault()
    Session.set('temp', event.target.id)
  }
})
