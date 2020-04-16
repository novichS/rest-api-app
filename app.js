const express = require("express");
const path = require("path");
const { v4 } = require("uuid");
const app = express();

const port = 3000;

let CONTACTS = [
  { id: v4(), name: "Svitlana", value: "developer", marked: false }
];

app.use(express.json());

app.get("/api/contacts", (req, res) => {
  setTimeout(() => {
    res.status(200).json(CONTACTS);
  }, 1000);
});

app.post("/api/contacts", (req, res) => {
  const contact = { ...req.body, id: v4(), marked: false };
  CONTACTS.push(contact);
  res.status(201).json(contact);
});

app.delete("/api/contacts/:id", (req, res) => {
  CONTACTS = CONTACTS.filter(contact => contact.id !== req.params.id);
  res.status(200).json({ message: "We deleted it" });
});

app.put("/api/contacts/:id", (req, res) => {
  const i = CONTACTS.findIndex(contact => contact.id === req.params.id);
  CONTACTS[i] = req.body;
  res.json(CONTACTS[i]);
});

app.use(express.static(path.resolve(__dirname, "client")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
