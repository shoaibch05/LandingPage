document.addEventListener("DOMContentLoaded", function () {
    const quotes = ["running contests", "selecting leaders", "conducting surveys", "taking polls", "educating voters", "making decisions"];

    let index = 0;
    const intervalTime = 50; // Time in milliseconds (1 second)
    const pauseTime = 1500; // Time in milliseconds (1 second)

    function changeQuote() {
        const quoteElement = document.getElementById("quote");
        const currentQuote = quotes[index];
        let i = 0;

        const displayNextCharacter = () => {
            if (i < currentQuote.length) {
                quoteElement.textContent += currentQuote.charAt(i);
                i++;
                setTimeout(displayNextCharacter, intervalTime);
            } else {
                setTimeout(() => {
                    quoteElement.textContent = '';
                    index = (index + 1) % quotes.length;
                    changeQuote();
                }, pauseTime);
            }
        };

        displayNextCharacter();
    }

    changeQuote();
});
var TestIndex = 1;
showtestmonial(TestIndex);

function navigation(n) {
    showtestmonial(TestIndex += n);
}

function currentSlide(n) {
    showtestmonial(TestIndex = n);
}

function showtestmonial(n) {
    var i;
    var testmonial = document.getElementsByClassName("testmonial");
    if (n > testmonial.length) { TestIndex = 1 }
    if (n < 1) { TestIndex = testmonial.length }
    for (i = 0; i < testmonial.length; i++) {
        testmonial[i].style.display = "none";
    }
    
    testmonial[TestIndex - 1].style.display = "block";
    
}
