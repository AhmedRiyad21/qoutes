var quotes= {
    0:{author:"--Oscar Wilde",
            quote:"~Be yourself; everyone else is already taken.~"},
    1:{author:"--Marilyn Monroe",
            quote:"~I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.~"},
    2:{author:"--Frank",
        quote:"~So many books, so little time.~"},
    3:{author:"--Albert Einstein",
            quote:"~Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.~"},
    4:{author:"--Marcus Tullius Cicero",
            quote:"~A room without books is like a body without a soul.~"},
    5:{author:"--Bernard M. Baruch",
            quote:"~Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.~"},
    6:{author:"--Dr. Seuss",
            quote:"~You know you're in love when you can't fall asleep because reality is finally better than your dreams.~"},
    7:{author:"--Mae West",
            quote:"~You only live once, but if you do it right, once is enough.~"},
    8:{author:"--Mark Twain",
            quote:"~If you tell the truth, you don't have to remember anything.~"},
    9:{author:"--Elbert Hubbard",
            quote:"~A friend is someone who knows all about you and still loves you.~"}, 
        }





function RandomQuotes(){
var randomNumber =Math.floor(Math.random()*10)
var Quote=document.getElementById("quote")
var QuoteAuthor=document.getElementById("author")
Quote.innerHTML=quotes[randomNumber]['quote']
QuoteAuthor.innerHTML=quotes[randomNumber]['author']


}