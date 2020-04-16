import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js";

new Vue({
  el: "#app",
  data() {
    return {
      form: {
        name: "",
        value: ""
      },
      contacts: []
    };
  },
  computed: {
    availableCreate() {
      return this.form.value.trim() && this.form.name.trim();
    }
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
      this.contacts = this.contacts.filter(contact => contact.id !== id);
    }
  }
});

async function request(url, method = "GET", data = null) {
  try {
    const headers = {};
    let body;
    if (data) {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(data);
    }

    const response = await fetch(url, {
      method,
      headers,
      body
    });
    return await response,json()
  } catch (e) {
    console.log("Error: ", e.message);
  }
}
