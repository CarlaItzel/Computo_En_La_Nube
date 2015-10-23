// EJEMPLO 1: Creating an app
// if (Meteor.isClient) {
//   // counter starts at 0
//   Session.setDefault('counter', 0);

//   Template.hello.helpers({
//     counter: function () {
//       return Session.get('counter');
//     }
//   });

//   Template.hello.events({
//     'click button': function () {
//       // increment the counter when button is clicked
//       Session.set('counter', Session.get('counter') + 1);
//     }
//   });
// }

// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     // code to run on server at startup
//   });
// }

// EJEMPLO 2:TEMPLATES
// if (Meteor.isClient) {

//   // This code only runs on the client

//   Template.body.helpers({


//     tasks: [

//       { text: "Apartado 1" },

//       { text: "Apartado 2" },

//       { text: "Apartado 3" }

//     ]

//   });

// }


// EJEMPLO 2.1 : Templeate Modificacion 
// if(Meteor.isClient)
// {
// }

// EJEMPLO 2.2: Template modificado 2
// if (Meteor.isClient) 
// { 
//   template.lista.helpers
//   ({
//     items: function () 
//     {
//       return 
//       [
//         { description: "Elemento 1"},
//         { description: "Elemento 2"}
//       ];
//     },
//   });
// }

// EJEMPLO 3: Imprime Hello Word desde a consola mongo
// Tasks = new Mongo.Collection("tasks");

 
// if (Meteor.isClient) {

//   // This code only runs on the client

//   Template.body.helpers({

//     tasks: function () {

//       return Tasks.find({});

//     }

//   });

// }


// EJEMPLO 4: Agrega un event 
// Tasks = new Mongo.Collection("tasks");

 
// if (Meteor.isClient) {

//   // This code only runs on the client

//   Template.body.helpers({

//     tasks: function () {

//       return Tasks.find({}, {sort: {createdAt: -1}});

//     }

//   });


//   Template.body.events({
//     "submit .new-task": function (event) {
//       // Prevent default browser form submit //Prepara al navegador para enviar
//       event.preventDefault();
//       // Get value from form element //Toma el valor de la caja
//       var text = event.target.text.value;
//       // Insert a task into the collection  //Inserta una tarea dentro de la coleccion
//       Tasks.insert({
//         text: text,
//         createdAt: new Date() // current time
//       });
//       // Clear form
//       event.target.text.value = "";
//     }

//   });

//  }

// EJEMPLO 5: Update and remove
// Tasks = new Mongo.Collection("tasks");

 
// if (Meteor.isClient) {

//   // This code only runs on the client

//   Template.body.helpers({

//     tasks: function () {

//       return Tasks.find({}, {sort: {createdAt: -1}});

//     }

//   });


//   Template.body.events({
//     "submit .new-task": function (event) {
//       // Prevent default browser form submit //Prepara al navegador para enviar
//       event.preventDefault();
//       // Get value from form element //Toma el valor de la caja
//       var text = event.target.text.value;
//       // Insert a task into the collection  //Inserta una tarea dentro de la coleccion
//       Tasks.insert({
//         text: text,
//         createdAt: new Date() // current time
//       });
//       // Clear form
//       event.target.text.value = "";
//     }

//   });

//     Template.task.events({
//     "click .toggle-checked": function () {
//       // Set the checked property to the opposite of its current value
//       Tasks.update(this._id, {
//         $set: {checked: ! this.checked}
//       });
//     },
//     "click .delete": function () {
//       Tasks.remove(this._id);
//     }
//   });

//  }

// EJEMPLO 8: EVENTO DEL HIDE CHECKBOX, tareas que no han sido realizadas
// Tasks = new Mongo.Collection("tasks");

 
// if (Meteor.isClient) {

//   // This code only runs on the client

//   Template.body.helpers({

//     tasks: function () {
//       if (Session.get("hideCompleted")) 
//       {// If hide completed is checked, filter tasks
//         return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
//       } 
//       else 
//       {
//         // Otherwise, return all of the tasks
//         return Tasks.find({}, {sort: {createdAt: -1}});
//       }
//     },
//     hideCompleted: function ()
//     {
//       return Session.get("hideCompleted");
//     },

//     incompleteCount: function () 
//     {
//       return Tasks.find({checked: {$ne: true}}).count();
//     }
//   });


//   Template.body.events({
//     "submit .new-task": function (event) {
//       // Prevent default browser form submit //Prepara al navegador para enviar
//       event.preventDefault();
//       // Get value from form element //Toma el valor de la caja
//       var text = event.target.text.value;
//       // Insert a task into the collection  //Inserta una tarea dentro de la coleccion
//       Tasks.insert({
//         text: text,
//         createdAt: new Date() // current time
//       });
//       // Clear form
//       event.target.text.value = "";
//     },
//         "change .hide-completed input": function (event) {

//       Session.set("hideCompleted", event.target.checked);
//     }

//   });

//     Template.task.events({
//     "click .toggle-checked": function () {
//       // Set the checked property to the opposite of its current value
//       Tasks.update(this._id, {
//         $set: {checked: ! this.checked}
//       });
//     },
//     "click .delete": function () {
//       Tasks.remove(this._id);
//     }
//   });
//  }

// EJEMPLO 9: 
Tasks = new Mongo.Collection("tasks");

 
if (Meteor.isClient) {

  // This code only runs on the client

  Template.body.helpers({

    tasks: function () {
      if (Session.get("hideCompleted")) 
      {// If hide completed is checked, filter tasks
        return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
      } 
      else 
      {
        // Otherwise, return all of the tasks
        return Tasks.find({}, {sort: {createdAt: -1}});
      }
    },
    hideCompleted: function ()
    {
      return Session.get("hideCompleted");
    },

    incompleteCount: function () 
    {
      return Tasks.find({checked: {$ne: true}}).count();
    }
  });


  Template.body.events({
    "submit .new-task": function (event) {
      // Prevent default browser form submit //Prepara al navegador para enviar
      event.preventDefault();
      // Get value from form element //Toma el valor de la caja
      var text = event.target.text.value;
      // Insert a task into the collection  //Inserta una tarea dentro de la coleccion
      Tasks.insert({
        text: text,
        createdAt: new Date() // current time
        owner: Meteor.userId(),           // _id of logged in user
        username: Meteor.user().username  // username of logged in user
      });
      // Clear form
      event.target.text.value = "";
    },
        "change .hide-completed input": function (event) {

      Session.set("hideCompleted", event.target.checked);
    }

  });

    Template.task.events({
    "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      Tasks.update(this._id, {
        $set: {checked: ! this.checked}
      });
    },
    "click .delete": function () {
      Tasks.remove(this._id);
    }
  });
    Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
 }