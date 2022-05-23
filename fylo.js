let work = document.getElementById('work')
let works = document.getElementById('works')
let a_work = document.getElementById('a_work')
let hr = document.getElementById('hr_line')
let email = document.getElementById('email')
let button_submit = document.getElementById('button_submit')
let error = document.getElementById('error')

work.addEventListener('mouseover',()=>{
    a_work.style.color='white'
    hr.style.backgroundColor = 'white'
    hr.style.borderColor='white'
    works.className='white'
    work.style.cursor='pointer'   
})

work.addEventListener('mouseout',()=>{
    a_work.style.color='hsl(176, 68%, 64%)'
    hr.style.backgroundColor = 'hsl(176, 68%, 64%)'
    hr.style.borderColor='hsl(176, 68%, 64%)'
    works.className='work' 
})

function pruebaemail (valor){
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(valor)){
        error.className='show'
    }
    else{
        error.className='close_error'
    }
}
