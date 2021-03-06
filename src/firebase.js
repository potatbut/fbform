import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  child,
  update
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";

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

const nowdate = new Date().toLocaleTimeString();

const app = initializeApp(firebaseConfig)
const data = getDatabase(app)





const form = document.getElementById('form')


form.addEventListener('submit', submit)

function submit(e) {
  e.preventDefault()


  const smth = 'smth'

  const firstName = getValue('firstName')
  const lastName = getValue('lastName')
  const email = getValue('email')
  const phone = getValue('phone')
  const cb1 = getValue('cb1')
  const cb2 = getValue('cb2')
  const select = getValue('select')
  saveData(firstName, lastName, email, phone, cb1, cb2, select, smth)

  
  document.querySelector('.alert').style.display = "block"
  setTimeout(function() {
    document.querySelector('.alert').style.display = "none"
  }, 4000)
  form.reset()
}

function getValue(id) {
  return document.getElementById(id).value
}


function saveData(firstName, lastName, email, phone, cb1, cb2, select, smth) {


  const userid = testWord(firstName)

  const userInfo = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    cb1: cb1,
    cb2: cb2,
    select: select,
    smth: smth
  }

  // const newUsrKey = push(child(ref(data), 'users')).key

  const updates = {}
  // updates['/smth/' + newUsrKey] = userInfo
  updates['/users/' + `${userid}` ] = userInfo

  return update(ref(data), updates)

  // const newList = push(list)
  /* set(list, {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    cb1: cb1,
    cb2: cb2,
    select: select,
    smth: smth
  }) */

}


/* Cyrillic check */
function translit(word){
	var answer = '';
	var converter = {
		'??': 'a',    '??': 'b',    '??': 'v',    '??': 'g',    '??': 'd',
		'??': 'e',    '??': 'e',    '??': 'zh',   '??': 'z',    '??': 'i',
		'??': 'y',    '??': 'k',    '??': 'l',    '??': 'm',    '??': 'n',
		'??': 'o',    '??': 'p',    '??': 'r',    '??': 's',    '??': 't',
		'??': 'u',    '??': 'f',    '??': 'h',    '??': 'c',    '??': 'ch',
		'??': 'sh',   '??': 'sch',  '??': '',     '??': 'y',    '??': '',
		'??': 'e',    '??': 'yu',   '??': 'ya',
 
		'??': 'A',    '??': 'B',    '??': 'V',    '??': 'G',    '??': 'D',
		'??': 'E',    '??': 'E',    '??': 'Zh',   '??': 'Z',    '??': 'I',
		'??': 'Y',    '??': 'K',    '??': 'L',    '??': 'M',    '??': 'N',
		'??': 'O',    '??': 'P',    '??': 'R',    '??': 'S',    '??': 'T',
		'??': 'U',    '??': 'F',    '??': 'H',    '??': 'C',    '??': 'Ch',
		'??': 'Sh',   '??': 'Sch',  '??': '',     '??': 'Y',    '??': '',
		'??': 'E',    '??': 'Yu',   '??': 'Ya'
	};
 
	for (var i = 0; i < word.length; ++i ) {
		if (converter[word[i]] == undefined){
			answer += word[i];
		} else {
			answer += converter[word[i]];
		}
	}
 
	return answer;
}

/* If only Cyrillic, then transliterate */
function testWord(word) {
  return (/^\p{sc=Cyrillic}*$/u.test(word)) ? translit(word) : word
}

const nameSpace = document.getElementById('firstName')

