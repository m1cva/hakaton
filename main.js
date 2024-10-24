document.getElementById('open_pop_up').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('pop_up').classList.remove('pop_down_anim');
    document.getElementById('pop_up').classList.add('pop_up_anim');
    document.getElementById('aaa').style.display = 'none';
    document.getElementById('footer').style.display = 'none';
});

document.getElementById('pop_up_close').addEventListener('click', function() {
    document.getElementById('pop_up').classList.add('pop_down_anim');
    document.getElementById('pop_up').classList.remove('pop_up_anim');
    document.getElementById('aaa').style.display = 'flex';
    document.getElementById('footer').style.display = 'flex';
});