const { createClient } = supabase
supabase = createClient('https://zekxnjqyoqwigjfoviae.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpla3huanF5b3F3aWdqZm92aWFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDYyMjI0MjgsImV4cCI6MTk2MTc5ODQyOH0.WCLE_H13GPEAVyEAjc_N9_pPpYMz-cyea1dG2TjgcYw')


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