//making observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });
});

//selecting all hidden elements
const hiddenElements = document.querySelectorAll('.hidden');
//observing hidden elements
hiddenElements.forEach((el) => observer.observe(el));