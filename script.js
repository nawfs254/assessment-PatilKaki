let start = 600;

const min = document.getElementById('min');
const sec = document.getElementById('sec');



const int = setInterval(timer, 1000)

function timer(){
    let minutes = Math.floor(start / 60);
    let seconds = start % 60;
    start--

    if(seconds == 0){
        minutes--;
    }

    if(minutes == 0){
        clearInterval(int);
    }
    console.log(seconds, minutes)

    min.innerHTML = `${minutes}`;
    sec.innerHTML = `${seconds}`
}

// timer()

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var formContainer = document.createElement('div');
        formContainer.classList.add('form-popup');
        formContainer.innerHTML = `
            <div class="form-content">
                <span class="close" onclick="closeForm()">&times;</span>
                <h2>Subscribe</h2>
                <form>
                    <input type="email" placeholder="Email" required>
                    <input type="tel" placeholder="Phone Number" required>
                    <button type="submit" class="submit">Submit</button>
                </form>
            </div>
        `;
        document.body.appendChild(formContainer);
    }, 15000);
});

function closeForm() {
    var formPopup = document.querySelector('.form-popup');
    formPopup.style.display = 'none';
}
