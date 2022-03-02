/* const { createClient } = supabase
supabase = createClient('https://zekxnjqyoqwigjfoviae.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpla3huanF5b3F3aWdqZm92aWFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDYyMjI0MjgsImV4cCI6MTk2MTc5ODQyOH0.WCLE_H13GPEAVyEAjc_N9_pPpYMz-cyea1dG2TjgcYw') */

var _0x82cf=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x7A\x65\x6B\x78\x6E\x6A\x71\x79\x6F\x71\x77\x69\x67\x6A\x66\x6F\x76\x69\x61\x65\x2E\x73\x75\x70\x61\x62\x61\x73\x65\x2E\x63\x6F","\x65\x79\x4A\x68\x62\x47\x63\x69\x4F\x69\x4A\x49\x55\x7A\x49\x31\x4E\x69\x49\x73\x49\x6E\x52\x35\x63\x43\x49\x36\x49\x6B\x70\x58\x56\x43\x4A\x39\x2E\x65\x79\x4A\x70\x63\x33\x4D\x69\x4F\x69\x4A\x7A\x64\x58\x42\x68\x59\x6D\x46\x7A\x5A\x53\x49\x73\x49\x6E\x4A\x6C\x5A\x69\x49\x36\x49\x6E\x70\x6C\x61\x33\x68\x75\x61\x6E\x46\x35\x62\x33\x46\x33\x61\x57\x64\x71\x5A\x6D\x39\x32\x61\x57\x46\x6C\x49\x69\x77\x69\x63\x6D\x39\x73\x5A\x53\x49\x36\x49\x6D\x46\x75\x62\x32\x34\x69\x4C\x43\x4A\x70\x59\x58\x51\x69\x4F\x6A\x45\x32\x4E\x44\x59\x79\x4D\x6A\x49\x30\x4D\x6A\x67\x73\x49\x6D\x56\x34\x63\x43\x49\x36\x4D\x54\x6B\x32\x4D\x54\x63\x35\x4F\x44\x51\x79\x4F\x48\x30\x2E\x57\x43\x4C\x45\x5F\x48\x31\x33\x47\x50\x45\x41\x56\x79\x45\x41\x6A\x63\x5F\x4E\x39\x5F\x70\x50\x70\x59\x4D\x7A\x2D\x63\x79\x65\x61\x31\x64\x47\x32\x54\x6A\x67\x63\x59\x77"];const {createClient}=supabase;supabase= createClient(_0x82cf[0],_0x82cf[1])

const subForm = document.getElementById('form')
const subForm1 = document.getElementById('form1')

submitforms(subForm, 'smth')
submitforms(subForm1, 'newtest')

function submitforms(formName, tableName) {
  formName.addEventListener('submit', async (e) => {
    e.preventDefault()

    const inputs = formName.querySelectorAll('input, select, checkbox')

    let submission = {}

    inputs.forEach(element => {
      const {
        value,
        name
      } = element
      if (value) {
        submission[name] = value
      }
    })

    const {
      error,
      data
    } = await supabase.from(tableName).insert([submission], {
      returning: 'minimal'
    })
    console.log({
      error,
      data
    })
    if(!error) {
      showInfo(formName, 'alert')
    } else {
      showInfo(formName, 'error')
    }
    
    formName.reset()
  })
}

function showInfo(formName, className) {
  formName.querySelector(`.${className}`).style.display = "block"
  setTimeout(function () {
    formName.querySelector(`.${className}`).style.display = "none"
  }, 4000)
}

