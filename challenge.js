counter = document.querySelector("#counter");
decrease = document.querySelector("#decrease");
increase = document.querySelector("#increase");
like = document.querySelector("#heart");
pause = document.querySelector("#pause")
formEl = document.querySelector("#comment-form")
comments = document.querySelector("#comments")

let i = 0;
let isPaused = false;

function increment() {
    if(!isPaused) {
        i++;
        counter.innerHTML = i;
    }
}

setInterval('increment()', 1000);

decrease.addEventListener("click", function () {
	i = Number(counter.innerHTML);
	i--;
    counter.innerHTML = i;
});

increase.addEventListener("click", increment)

pause.addEventListener("click", function() {
	isPaused = !isPaused;
	    if (isPaused) {
            pause.innerText = "resume";
            decrease.disabled = true;
            increase.disabled = true;
            like.disabled = true;
        } else {
            pause.innerText = "pause";
            decrease.disabled = false;
            increase.disabled = false;
            like.disabled = false;
        }
});

function addComment() {
    comment = document.createElement("p");
    comment.innerText = formEl.comment.value;
    comments.append(comment);
}

formEl.addEventListener("submit", function(event) {
	event.preventDefault();
    addComment();
    formEl.reset();
});

