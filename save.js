document.getElementById('save').addEventListener('click', function() {
    let zero = document.getElementById('username')
    let zero_n = zero.value
    localStorage.setItem('usernameee', zero_n)

    let first = document.getElementById('first_name')
    let first_n = first.value
    localStorage.setItem('first_nam', first_n)

    let second = document.getElementById('second_name')
    let second_n = second.value
    localStorage.setItem('second_nam', second_n)

    let company = document.getElementById('company')
    let company_n = company.value
    localStorage.setItem('companyyy', company_n)

    let fourth = document.getElementById('contact')
    let fourth_n = fourth.value
    localStorage.setItem('contacttt', fourth_n)

    window.location.href = './profile.html'
})

document.getElementById('username').value = localStorage.getItem('usernameee')

document.getElementById('first_name').value = localStorage.getItem('first_nam')

document.getElementById('second_name').value = localStorage.getItem('second_nam')

document.getElementById('company').value = localStorage.getItem('companyyy')

document.getElementById('contact').value = localStorage.getItem('contacttt')