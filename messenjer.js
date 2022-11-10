let btn = document.getElementById('button');
let quote = document.getElementById('quote');

let allQuotes = [`'Be yourself; everyone else is already taken.― Oscar Wilde'`,`Two things are infinite: the universe and human stupidity; and Im not sure about the universe.― Albert Einstein`,`So many books, so little time.― Frank Zappa`,`A room without books is like a body without a soul.― Marcus Tullius Cicero`,`You only live once, but if you do it right, once is enough.― Mae West`,`Be the change that you wish to see in the world.― Mahatma Gandhi`,`In three words I can sum up everything I've learned about life: it goes on.― Robert Frost`,`If you tell the truth, you don't have to remember anything.― Mark Twain`,`A friend is someone who knows all about you and still loves you.― Elbert Hubbard`];

const randomQuotes = quotes =>{
    const ranQuote = Math.floor(Math.random() * quotes.length);
    console.log(quotes[ranQuote])
}
btn.addEventListener('click',function(){
    const ranQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
    quote.innerHTML = ranQuote;
})