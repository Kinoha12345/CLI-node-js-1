const contacts = require('./contact');
const argv = require('yargs').argv;

function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
      case "list":
          contacts.listContacts()
        // ...
        break;
  
      case "get":
          contacts.getContactById(id)
        // ... id
        break;
  
      case "add":
          contacts.addContact(name, email, phone)
        // ... name email phone
        break;
  
      case "remove":
          contacts.removeContact(id)
        // ... id
        break;
  
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  }
  
  invokeAction(argv);