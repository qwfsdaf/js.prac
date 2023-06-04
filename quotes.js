const quotes = [
    {
        quote: "The way to get started is to quit talking and begin",
        author: "Walt Disney",
    },
    {
        quote: "성실하고 사심 없는 기여의 힘을 배운 사람만이 인생이 가장 깊은 기쁨, 즉 진정한 성취를 경험한다.",
        author: "토니 로빈스",
    },
    {
        quote: "결정에 전념하되 접근 방식에는 유연성을 유지하라.",
        author: "토니 로빈스",
    },
    {
        quote: "진정한 결정은 새로운 행동을 취했다는 사실로 판단된다. 행동이 없다면,  당신은 진정으로 결정하지 않은 것이다.",
        author: "토니 로빈스",
    },
    {
        quote: "무엇을 해야 할지 모르는 것이 아니라 아는 것을 하는 것이다.",
        author: "토니 로빈스",
    },
    {
        quote: "두려움을 간수가 아니라 상담자가 되게 하라.",
        author: "토니 로빈스",
    },
    {
        quote: "개인의 힘은 행동을 취할 수 있는 능력이다.",
        author: "토니 로빈스",
    },
    {
        quote: "항상 해왔던 것을 한다면 항상 얻은 것을 얻을 수 있을 것이다.",
        author: "토니 로빈스",
    },
    {
        quote: "목표를 설정하는 것은 보이지 않는 것을 눈에 보이는 것으로 바꾸는 첫 번째 단계이다.",
        author: "토니 로빈스",
    },
    {
        quote: "불가능한 유일한 여정은 결코 시작하지 않는 여정이다.",
        author: "토니 로빈스",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;