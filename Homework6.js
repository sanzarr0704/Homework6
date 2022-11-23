document.querySelector("#generate").addEventListener("click",() => {
    generate();
});
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

    let current = 0;
generate = () => {
    var quotes = {
         "_Walt Disney": '"Трудности преодолимы."',

         "_Winstone Churchill": '"Я люблю Javascript."',

         "_Will Rogers": '"Учите Javascript."',

        "_Albert Einstein": '"Чем умнее человек, тем легче он признает себя дураком!"',

        "_Теодор Рузвельт": '"Никогда не ошибается тот, кто ничего не делает!"',

        "_Lev Nikolayevich Tolstoy": '"Менее всего просты люди, желающие казаться простыми!"',

        "_Steve Jobs": '"Мы находимся здесь, чтобы внести свой вклад в этот мир. Иначе зачем мы здесь?"',

        "_Coco Chanel": '"Мода проходит, стиль остаётся"',

        "_Martin Luther King": '"Если человек не нашёл, за что может умереть, он не способен жить"',

        "John Lennon": '"Музыка заводит сердца так, что пляшет и поёт тело. А есть музыка, с которой хочется поделиться всем, что наболело"',

        "_Lao Tzu": '"Если кто-то причинил тебе зло, не мсти. Сядь на берегу реки, и вскоре ты увидишь, как мимо тебя проплывает труп твоего врага"',

        "_Faina Ranevskaya": '"Лучше быть хорошим человеком, "ругающимся матом", чем тихой, воспитанной тварью"',

        "_Henry Ford": '"Если тебе тяжело, значит ты поднимаешься в гору. Если тебе легко, значит ты летишь в пропасть"',

        "_Bernard Show": '"Мой способ шутить – это говорить правду. На свете нет ничего смешнее"',

        "_Napoleon Bonaparte": '"Дай человеку власть, и ты узнаешь, кто он"',
    };
    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];


    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
    };

next.addEventListener("click", () => {
    current += 1;
    if (current < 0) {
        return false;
    }
    generate();
});
prev.addEventListener("click", () => {
    current -= 1;
    if (current < 0) {
        return false;
    };
    generate();
});
