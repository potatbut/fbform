
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBz1aRdT0b7URqp9YNvl482Ou-ng8w-A8w",
  authDomain: "fbform-8c6de.firebaseapp.com",
  databaseURL: "https://fbform-8c6de-default-rtdb.firebaseio.com",
  projectId: "fbform-8c6de",
  storageBucket: "fbform-8c6de.appspot.com",
  messagingSenderId: "801605614057",
  appId: "1:801605614057:web:b7fef905be310b9baeb378",
  measurementId: "G-9R0YQQM2N5"
};

const app = initializeApp(firebaseConfig)

const form = document.getElementById('form')

form.addEventListener('submit', submit)

function submit(e) {
  e.preventDefault()

  const firstName = getValue('firstName')
  const lastName = getValue('lastName')
  const email = getValue('email')
  const phone = getValue('phone')
  const cb1 = getValue('cb1')
  const cb2 = getValue('cb2')
  const select = getValue('select')
  saveData(firstName, lastName, email, phone, cb1, cb2, select) 
}

function getValue(id) {
  return document.getElementById(id).value
}

function saveData(firstName, lastName, email, phone, cb1, cb2, select) {
  const data = getDatabase()
  const list = ref(data, 'users')
  const newList = push(list)
  set(newList, {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone, 
    cb1: cb1, 
    cb2: cb2
  })
}