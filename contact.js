const fs = require("fs");
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json")

function listContacts() {
    fs.readFile(contactsPath, "utf-8", (error, data) => {
        if (error) {
            console.log(error);
        } 
        const contacts = JSON.parse(data)
        console.table(contacts);
    })
    // ...твой код
  }
  
  function getContactById(contactId) {
    fs.readFile(contactsPath, "utf-8", (error, data) => {
        if (error) {
            console.log(error);
        } 
        const contacts = JSON.parse(data)
        
        const contact = contacts.find(cont => {
            if(cont.id === contactId) {
                console.table(cont);
                return cont;
            }
        })
        
        if (contact == null) {
            console.log("Contact not found");
        }
    })
    // ...твой код
  }

  
  function removeContact(contactId) {
    fs.readFile(contactsPath, "utf-8", (error, data) => {
        if (error) {
            console.log(error);
        } 
        const contacts = JSON.parse(data)
        const idRemove = contacts.filter(cont => cont.id !== contactId)
        
        if(idRemove.length === contacts.length) {
            console.log("id not found");
            return;
        }

        console.table(idRemove);

    })
    // ...твой код
  }
  
  function addContact(name, email, phone) {
    // ...твой код
    fs.readFile(contactsPath, "utf-8", (error, data) => {
        if (error) {
            console.log(error);
        } 
        const contacts = JSON.parse(data)
            contacts.push({
                id: contacts.length + 1,
                name: name,
                email: email,
                phone: phone
            })
            console.table(contacts);
    })
  }

  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};