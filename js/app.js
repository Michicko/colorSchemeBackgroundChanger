const btns = document.querySelectorAll('.btn');

// event listener
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.id) {
            document.body.style.backgroundColor = e.target.id;
        }
    });
});



