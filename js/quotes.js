const quotes = [
    {
        quote : "If not now, then when?",
        author : "unknown",
    },
    {
        quote : "He can do, she can do, why not me?",
        author : "unknown",
    },
    {
        quote : "The harder you work, the more likely you can reach the goal.",
        author : "unknown",
    },
    {
        quote : "Love what you do.",
        author : "unknown",
    },
    {
        quote : "Don't waste your youth.",
        author : "unknown",
    },
    {
        quote : "Don't give up easily even if you failed.",
        author : "unknown",
    },
    {
        quote : "I never dreamed about success, I worked for it.",
        author : "Estee Lauder",
    },
    {
        quote : "The only things worse than starting something and failing, is not starting something.",
        author : "Seth Godin",
    },
    {
        quote : "If you really want to do something, you'll find a way, If you do not, you'll find an excuse.",
        author : "Jim Rohn",
    },
    {
        quote : "The way to get started is to quit talking and begin doing.",
        author : "Walt Disney",
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;
