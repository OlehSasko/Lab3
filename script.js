function resetFormInputs() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.classList.remove('is-valid', 'is-invalid');
    });
}

(() => {
    document.addEventListener('DOMContentLoaded', resetFormInputs);

    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const validateField = (field, pattern, errorMessage) => {
            const value = field.value.trim();
            const isValid = pattern.test(value);
            field.classList.toggle('is-invalid', !isValid);
            field.classList.toggle('is-valid', isValid);
            return !isValid && errorMessage;
        };

        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');

        const patterns = {
            name: /^[a-zA-Z]+$/,
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        };

        const errors = [
            validateField(firstName, patterns.name, 'First name should contain only letters.'),
            validateField(lastName, patterns.name, 'Last name should contain only letters.'),
            validateField(email, patterns.email, 'Invalid email address.')
        ].filter(Boolean);

        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = errors.length
            ? `<ul class="alert alert-danger">${errors.map(error => `<li>${error}</li>`).join('')}</ul>`
            : '<div class="alert alert-success" role="alert">Form submitted successfully!</div>';
    });
})()

function splitStringIntoPairs(str) {
    const pairs = [];
    for (let i = 0; i < str.length; i += 2) {
        let pair = str.slice(i, i + 2);
        if (pair.length === 1) {
            pair += '_';
        }
        pairs.push(pair);
    }
    return pairs;
}

function displayPairsAsList(pairs) {
    const ul = document.createElement('ul');
    pairs.forEach(function(pair) {
        const li = document.createElement('li');
        li.textContent = pair;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

const string1 = 'abc';
const string2 = 'abcdef';

const pairs1 = splitStringIntoPairs(string1);
const pairs2 = splitStringIntoPairs(string2);

displayPairsAsList(pairs1);
displayPairsAsList(pairs2);

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slides img');
    let currentSlideIndex = 0;

    function showSlide(index) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[index].style.display = 'block';
        
        let prevIndex = index - 1;
        let nextIndex = index + 1;
        
        if (prevIndex < 0) {
            prevIndex = slides.length - 1;
        }
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        
        slides[prevIndex].style.display = 'block';
        slides[nextIndex].style.display = 'block';
    }

    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    function prevSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);
    }

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    showSlide(currentSlideIndex);
});
