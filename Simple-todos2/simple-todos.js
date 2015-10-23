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

// EJEMPLO 3:
Tasks = new Mongo.Collection("tasks");

 
if (Meteor.isClient) {

  // This code only runs on the client

  Template.body.helpers({

    tasks: function () {

      return Tasks.find({});

    }

  });

}






  //Template.hello.events({
    //'click button': function () {
      // increment the counter when button is clicked
      //Session.set('counter', Session.get('counter') + 1);
    //}
  //});
//}

//if (Meteor.isServer) {
  //Meteor.startup(function () {
    // code to run on server at startup
  ///});
//}


//if (Meteor.isClient) {
  // counter starts at 0
  //Session.setDefault('counter', 0);

  //Template.hello.helpers({
    //counter: function () {
      //return Session.get('counter');
    //}
  //});

  //Template.hello.events({
    //'click button': function () {
      // increment the counter when button is clicked
      //Session.set('counter', Session.get('counter') + 1);
    //}
  //});
//}

//if (Meteor.isServer) {
  //Meteor.startup(function () {
    // code to run on server at startup
  ///});
//}



//Tasks = new Mongo.Collection("tasks");

 

//if (Meteor.isClient) {

  // This code only runs on the client

  //Template.body.helpers({

    //tasks: function () {

      //return Tasks.find({});

    //}

  //}
