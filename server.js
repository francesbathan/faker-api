// import {v4 as uuid } from "uuid/v4";
const express = require("express");
const app = express();
var faker = require("faker");
app.use(express.json());
app.use(express.urlencoded({ extender: true }));

/**********************************/

class User {
  constructor() {
    this.id = faker.random.number();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this.id = faker.random.number();
    this.name = faker.company.companyName();
    (this.address = {}), (this.address.street = faker.address.streetAddress());
    this.address.city = faker.address.city();
    this.address.state = faker.address.stateAbbr();
    this.address.zipCode = faker.address.zipCode();
    this.address.country = faker.address.country();
  }
}

/**********************************/

app.post("/api/users/new", (req, res) => {
  const newUser = new User();
  return res.status(201).json({ newUser });
});

app.post("/api/companies/new", (req, res) => {
  const newCompany = new Company();
  return res.status(201).json({ newCompany });
});

app.post("/api/user/company", (req, res) => {
  const newUserAndCompany = [new User(), new Company()];
  return res.status(201).json({ newUserAndCompany });
});

/**********************************/

app.listen(4000, () => console.log("Now listening."));
