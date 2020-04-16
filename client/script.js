import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js";

new Vue({
  el: "#app",
  data() {
    return {
      form: {
        name: "",
        value: ""
      },
      contacts: [
          {id: 1, name: 'Svitlana', value: 'developer', marked: false}
      ]
    };
  },
  methods: {
    createContact() {
      const { ...contact } = this.form;
      this.contacts.push({ ...contact, id: Date.now(), marked: false });

      this.form.name = this.form.value = "";
    },
    markContact(id) {
      const contact = this.contacts.find(contact => contact.id === id);
      contact.marked = !contact.marked;
    },
    removeContact(id) {
      console.log(id);
    }
  }
});
