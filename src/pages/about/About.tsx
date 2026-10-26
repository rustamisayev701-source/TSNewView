function About() {
    return (
        <div className="min-h-screen px-6 py-16 text-gray-200">
            <div className="mx-auto max-w-4xl rounded-3xl border border-purple-500 bg-[#11162a] p-8 shadow-2xl shadow-purple-900/10 md:p-12">
                <span className="mb-4 inline-block rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300">
                    История космоса
                </span>
                <h1 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
                    Что такое космос?
                </h1>
                <div className="mb-8 h-1 w-20 rounded-full bg-purple-500" />
                <p className="text-base leading-8 text-gray-300 md:text-lg">
                    Слово «космос» использовал древнегреческий философ Пифагор,
                    обозначая им существующий вокруг человека мир. Платон и
                    Аристотель создали концепцию Подлунной сферы: это
                    геоцентрическая система мира, расположенная ниже Луны. Она
                    состоит из четырёх стихий и подвержена изменениям. В то
                    время сфера эфира — от Луны до границ Вселенной —
                    неизменна, и в ней располагаются планеты и звёзды.
                    Интересоваться же космосом в целом люди стали ещё
                    100 тысяч лет назад, как предполагают австралийские учёные.
                </p>
                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15 text-xl">
                        ✦
                    </div>
                    <div>
                        <p className="font-medium text-white">
                            От древности к Вселенной
                        </p>
                        <p className="text-sm text-gray-500">
                            История человеческого познания
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About