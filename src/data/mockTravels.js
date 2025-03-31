export const mockTravels = [
    {
        id: 1,
        title: "Путешествие в Париж",
        location: "Париж, Франция",
        coordinates: { lat: 48.8566, lng: 2.3522 },
        images: [
            "/assets/images/Paris/Paris_1.jpg",
            "/assets/images/Paris/Paris_2.jpg",
            "/assets/images/Paris/Paris_3.jpg",
        ],
        cost: 150000,
        description: "Незабываемое путешествие в город любви",
        heritageSites: [
            "Эйфелева башня",
            "Лувр",
            "Собор Парижской Богоматери"
        ],
        placesToVisit: [
            "Монмартр",
            "Елисейские поля",
            "Латинский квартал"
        ],
        ratings: {
            transport: 4,
            safety: 5,
            population: 3,
            greenery: 2
        },
        author: "Вероника К"
    },
    {
        id: 2,
        title: "Романтика Венеции",
        location: "Венеция, Италия",
        coordinates: { lat: 45.4408, lng: 12.3155 },
        images: [
            "/assets/images/Italy/italy_1.jpg",
            "/assets/images/Italy/italy_2.jpg",
            "/assets/images/Italy/italy_3.jpg",
            "/assets/images/Italy/italy_4.jpg",
            "/assets/images/Italy/italy_5.jpg",
        ],
        cost: 180000,
        description: "Город на воде с неповторимой атмосферой",
        heritageSites: [
            "Собор Святого Марка",
            "Дворец Дожей",
            "Мост Риальто"
        ],
        placesToVisit: [
            "Гранд-канал",
            "Остров Мурано",
            "Площадь Сан-Марко"
        ],
        ratings: {
            transport: 3,
            safety: 4,
            population: 4,
            greenery: 1
        },
        author: "Вероника К"
    },
    {
        id: 3,
        title: "Загадочный Токио",
        location: "Токио, Япония",
        coordinates: { lat: 35.6762, lng: 139.6503 },
        images: [
            "/assets/images/Japan/japan_1.jpg",
            "/assets/images/Japan/japan_2.jpg",
            "/assets/images/Japan/japan_3.jpg",
            "/assets/images/Japan/japan_4.jpg",
        ],
        cost: 220000,
        description: "Футуристический мегаполис с древними традициями",
        heritageSites: [
            "Храм Сэнсодзи",
            "Императорский дворец",
            "Мэйдзи Дзингу"
        ],
        placesToVisit: [
            "Район Сибуя",
            "Акихабара",
            "Одайба"
        ],
        ratings: {
            transport: 5,
            safety: 5,
            population: 5,
            greenery: 3
        },
        author: "Вероника К"
    },
    {
        id: 4,
        title: "Солнечный Барселона",
        location: "Барселона, Испания",
        coordinates: { lat: 41.3851, lng: 2.1734 },
        images: [
            "/assets/images/Spain/spain_1.jpg",
            "/assets/images/Spain/spain_2.jpg",
            "/assets/images/Spain/spain_3.jpg",
            "/assets/images/Spain/spain_4.jpg",
            "/assets/images/Spain/spain_5.jpg",
        ],
        cost: 135000,
        description: "Столица Каталонии с уникальной архитектурой",
        heritageSites: [
            "Саграда Фамилия",
            "Парк Гуэль",
            "Дом Бальо"
        ],
        placesToVisit: [
            "Ла Рамбла",
            "Готический квартал",
            "Пляж Барселонета"
        ],
        ratings: {
            transport: 4,
            safety: 4,
            population: 4,
            greenery: 3
        },
        author: "Вероника К"
    },
    {
        id: 5,
        title: "Исторический Стамбул",
        location: "Стамбул, Турция",
        coordinates: { lat: 41.0082, lng: 28.9784 },
        images: [
            "/assets/images/Turkey/turkey_1.jpg",
            "/assets/images/Turkey/turkey_2.jpg",
            "/assets/images/Turkey/turkey_3.jpg",
        ],
        cost: 95000,
        description: "Город на стыке Европы и Азии с богатой историей",
        heritageSites: [
            "Айя-София",
            "Голубая мечеть",
            "Дворец Топкапы"
        ],
        placesToVisit: [
            "Гранд Базар",
            "Пролив Босфор",
            "Район Султанахмет"
        ],
        ratings: {
            transport: 4,
            safety: 3,
            population: 4,
            greenery: 2
        },
        author: "Вероника К"
    },
    {
        id: 6,
        title: "Приключения в Рио",
        location: "Рио-де-Жанейро, Бразилия",
        coordinates: { lat: -22.9068, lng: -43.1729 },
        images: [
            "/assets/images/Brazil/brazil_1.jpg",
            "/assets/images/Brazil/brazil_2.jpg",
            "/assets/images/Brazil/brazil_3.jpg",
            "/assets/images/Brazil/brazil_4.jpg",
            "/assets/images/Brazil/brazil_5.jpg",
        ],
        cost: 175000,
        description: "Город карнавалов и потрясающих пляжей",
        heritageSites: [
            "Статуя Христа-Искупителя",
            "Сахарная голова",
            "Район Санта-Тереза"
        ],
        placesToVisit: [
            "Пляж Копакабана",
            "Ботанический сад",
            "Стадион Маракана"
        ],
        ratings: {
            transport: 3,
            safety: 2,
            population: 4,
            greenery: 4
        },
        author: "Рома Ж"
    },
    {
        id: 7,
        title: "Культурный Нью-Йорк",
        location: "Нью-Йорк, США",
        coordinates: { lat: 40.7128, lng: -74.0060 },
        images: [
            "/assets/images/USA/usa_1.jpg",
            "/assets/images/USA/usa_2.jpg",
            "/assets/images/USA/usa_3.jpg",
            "/assets/images/USA/usa_4.jpg",
            "/assets/images/USA/usa_5.jpg",
        ],
        cost: 250000,
        description: "Город, который никогда не спит",
        heritageSites: [
            "Статуя Свободы",
            "Эмпайр-стейт-билдинг",
            "Центральный парк"
        ],
        placesToVisit: [
            "Таймс-сквер",
            "Бродвей",
            "Метрополитен-музей"
        ],
        ratings: {
            transport: 4,
            safety: 3,
            population: 5,
            greenery: 3
        },
        author: "Рома Ж"
    },
    {
        id: 8,
        title: "Мистический Каир",
        location: "Каир, Египет",
        coordinates: { lat: 30.0444, lng: 31.2357 },
        images: [
            "/assets/images/Egypt/egypt_1.jpg",
            "/assets/images/Egypt/egypt_2.jpg",
            "/assets/images/Egypt/egypt_3.jpg",
            "/assets/images/Egypt/egypt_4.jpg",
        ],
        cost: 120000,
        description: "Врата к пирамидам и древним цивилизациям",
        heritageSites: [
            "Пирамиды Гизы",
            "Египетский музей",
            "Цитадель Саладина"
        ],
        placesToVisit: [
            "Хан эль-Халили",
            "Нильская круиз",
            "Район Замалек"
        ],
        ratings: {
            transport: 2,
            safety: 2,
            population: 4,
            greenery: 1
        },
        author: "Рома Ж"
    },
    {
        id: 9,
        title: "Сказочная Прага",
        location: "Прага, Чехия",
        coordinates: { lat: 50.0755, lng: 14.4378 },
        images: [
            "/assets/images/Czech/czech_1.jpg",
            "/assets/images/Czech/czech_2.jpg",
            "/assets/images/Czech/czech_3.jpg",
            "/assets/images/Czech/czech_4.jpg",
            "/assets/images/Czech/czech_5.jpg",
        ],
        cost: 110000,
        description: "Город сотни шпилей с средневековым шармом",
        heritageSites: [
            "Пражский Град",
            "Карлов мост",
            "Астрономические часы"
        ],
        placesToVisit: [
            "Староместская площадь",
            "Злата улочка",
            "Петршин холм"
        ],
        ratings: {
            transport: 5,
            safety: 5,
            population: 3,
            greenery: 4
        },
        author: "Миша"
    },
    {
        id: 10,
        title: "Экзотический Бали",
        location: "Бали, Индонезия",
        coordinates: { lat: -8.3405, lng: 115.0920 },
        images: [
            "/assets/images/Indo/indo_1.jpg",
            "/assets/images/Indo/indo_2.jpg",
            "/assets/images/Indo/indo_3.jpg",
            "/assets/images/Indo/indo_4.jpg",
            "/assets/images/Indo/indo_5.jpg",

        ],
        cost: 195000,
        description: "Тропический рай с уникальной культурой",
        heritageSites: [
            "Храм Танах Лот",
            "Храм Бесаких",
            "Рисовые террасы Тегаллаланг"
        ],
        placesToVisit: [
            "Пляж Джимбаран",
            "Водопад Тегенунган",
            "Район Убуд"
        ],
        ratings: {
            transport: 2,
            safety: 4,
            population: 2,
            greenery: 5
        },
        author: "Миша"
    },
    {
        id: 11,
        title: "Королевский Лондон",
        location: "Лондон, Великобритания",
        coordinates: { lat: 51.5074, lng: -0.1278 },
        images: [
            "/assets/images/United/united_1.jpg",
            "/assets/images/United/united_2.jpg",
            "/assets/images/United/united_3.jpg",
            "/assets/images/United/united_4.jpg",
            "/assets/images/United/united_5.jpg",
        ],
        cost: 210000,
        description: "Современная столица с богатой историей",
        heritageSites: [
            "Биг Бен",
            "Тауэр",
            "Вестминстерское аббатство"
        ],
        placesToVisit: [
            "Лондонский глаз",
            "Гайд-парк",
            "Британский музей"
        ],
        ratings: {
            transport: 5,
            safety: 4,
            population: 4,
            greenery: 4
        },
        author: "Миша"
    },
    {
        id: 12,
        title: "Альпийские каникулы",
        location: "Инсбрук, Австрия",
        coordinates: { lat: 47.2692, lng: 11.4041 },
        images: [
            "/assets/images/Austria/aus_in_1.jpg",
            "/assets/images/Austria/aus_in_2.jpg",
            "/assets/images/Austria/aus_in_3.jpg",
            "/assets/images/Austria/aus_in_4.jpg",
        ],
        cost: 165000,
        description: "Сердце Альп с живописными пейзажами",
        heritageSites: [
            "Золотая крыша",
            "Императорский дворец Хофбург",
            "Собор Святого Иакова"
        ],
        placesToVisit: [
            "Канатная дорога Нордкетте",
            "Зоопарк Альпийский зоопарк",
            "Район Старый город"
        ],
        ratings: {
            transport: 4,
            safety: 5,
            population: 2,
            greenery: 5
        },
        author: "Миша"
    },
    {
        id: 13,
        title: "Жемчужина Дуная",
        location: "Будапешт, Венгрия",
        coordinates: { lat: 47.4979, lng: 19.0402 },
        images: [
            "/assets/images/Hungary/hungary_1.jpg",
            "/assets/images/Hungary/hungary_2.jpg",
            "/assets/images/Hungary/hungary_3.jpg",
            "/assets/images/Hungary/hungary_4.jpg",
        ],
        cost: 125000,
        description: "Город термальных источников и величественной архитектуры",
        heritageSites: [
            "Рыбацкий бастион",
            "Здание парламента",
            "Будайская крепость"
        ],
        placesToVisit: [
            "Цепной мост",
            "Купальни Сечени",
            "Остров Маргит"
        ],
        ratings: {
            transport: 4,
            safety: 4,
            population: 3,
            greenery: 3
        },
        author: "Ghoukie"
    },
    {
        id: 14,
        title: "Средиземноморская сказка",
        location: "Санторини, Греция",
        coordinates: { lat: 36.3932, lng: 25.4615 },
        images: [
            "/assets/images/Greece/greece_1.jpg",
            "/assets/images/Greece/greece_2.jpg",
            "/assets/images/Greece/greece_3.jpg",
        ],
        cost: 185000,
        description: "Остров с белоснежными домами и бирюзовым морем",
        heritageSites: [
            "Античная Тира",
            "Археологический мура",
            "Венецианская крепость"
        ],
        placesToVisit: [
            "Пляж Камари",
            "Деревня Ия",
            "Винодельни острова"
        ],
        ratings: {
            transport: 2,
            safety: 5,
            population: 2,
            greenery: 2
        },
        author: "Ghoukie"
    },
    {
        id: 15,
        title: "Восточная экзотика",
        location: "Дубай, ОАЭ",
        coordinates: { lat: 25.2048, lng: 55.2708 },
        images: [
            "/assets/images/UAE/uae_1.jpg",
            "/assets/images/UAE/uae_2.jpg",
            "/assets/images/UAE/uae_3.jpg",
            "/assets/images/UAE/uae_4.jpg",
            "/assets/images/UAE/uae_5.jpg",
        ],
        cost: 280000,
        description: "Футуристический город в пустыне",
        heritageSites: [
            "Бурдж-Халифа",
            "Мечеть Джумейра",
            "Район Аль-Фахиди"
        ],
        placesToVisit: [
            "Пальма Джумейра",
            "Фонтан Дубай",
            "Парк Miracle Garden"
        ],
        ratings: {
            transport: 5,
            safety: 5,
            population: 3,
            greenery: 1
        },
        author: "Ghoukie"
    },
    {
        id: 16,
        title: "Северное сияние",
        location: "Тромсё, Норвегия",
        coordinates: { lat: 69.6496, lng: 18.9553 },
        images: [
            "/assets/images/Norway/norway_1.jpg",
            "/assets/images/Norway/norway_2.jpg",
            "/assets/images/Norway/norway_3.jpg",
        ],
        cost: 195000,
        description: "Ворота в Арктику и лучшие виды на полярное сияние",
        heritageSites: [
            "Арктический собор",
            "Полярный музей",
            "Канатная дорога Фьеллхейсен"
        ],
        placesToVisit: [
            "Полярный зоопарк",
            "Океанариум Polaria",
            "Лыжный курорт Tromsø Alpine"
        ],
        ratings: {
            transport: 3,
            safety: 5,
            population: 1,
            greenery: 4
        },
        author: "Никита"
    },
    {
        id: 17,
        title: "Колониальное очарование",
        location: "Картахена, Колумбия",
        coordinates: { lat: 10.3910, lng: -75.4794 },
        images: [
            "/assets/images/Colombia/colombia_1.jpg",
            "/assets/images/Colombia/colombia_2.jpg",
            "/assets/images/Colombia/colombia_3.jpg",
            "/assets/images/Colombia/colombia_4.jpg",
            "/assets/images/Colombia/colombia_5.jpg",

        ],
        cost: 145000,
        description: "Карибский порт с богатой историей",
        heritageSites: [
            "Старый город",
            "Замок Сан-Фелипе",
            "Монастырь Ла-Попа"
        ],
        placesToVisit: [
            "Пляжи Бокагранде",
            "Острова Росарио",
            "Национальный парк Тайрона"
        ],
        ratings: {
            transport: 3,
            safety: 3,
            population: 3,
            greenery: 4
        },
        author: "Миша"
    },
    {
        id: 18,
        title: "Африканское сафари",
        location: "Кейптаун, ЮАР",
        coordinates: { lat: -33.9249, lng: 18.4241 },
        images: [
            "/assets/images/SouthAfrica/africa_1.jpg",
            "/assets/images/SouthAfrica/africa_2.jpg",
            "/assets/images/SouthAfrica/africa_3.jpg",
            "/assets/images/SouthAfrica/africa_4.jpg",
        ],
        cost: 225000,
        description: "Где встречаются два океана",
        heritageSites: [
            "Столовая гора",
            "Мыс Доброй Надежды",
            "Остров Роббен"
        ],
        placesToVisit: [
            "Винные фермы",
            "Пляж Кэмпс-Бэй",
            "Национальный парк Крюгера"
        ],
        ratings: {
            transport: 3,
            safety: 3,
            population: 3,
            greenery: 4
        },
        author: "Вероника К"
    },
    {
        id: 19,
        title: "Средневековый квест",
        location: "Брюгге, Бельгия",
        coordinates: { lat: 51.2093, lng: 3.2247 },
        images: [
            "/assets/images/Belgium/belgium_1.jpg",
            "/assets/images/Belgium/belgium_2.jpg",
            "/assets/images/Belgium/belgium_3.jpg",
            "/assets/images/Belgium/belgium_4.jpg",
        ],
        cost: 135000,
        description: "Город-музей с каналами и готической архитектурой",
        heritageSites: [
            "Беффруа Брюгге",
            "Базилика Святой Крови",
            "Госпиталь Святого Иоанна"
        ],
        placesToVisit: [
            "Озеро Любви",
            "Шоколадные мастерские",
            "Музей Грунинге"
        ],
        ratings: {
            transport: 4,
            safety: 5,
            population: 2,
            greenery: 3
        },
        author: "Вероника К"
    },
    {
        id: 20,
        title: "Тропический рай",
        location: "Мальдивы",
        coordinates: { lat: 3.2028, lng: 73.2207 },
        images: [
            "/assets/images/Maldives/maldives_1.jpg",
            "/assets/images/Maldives/maldives_2.jpg",
            "/assets/images/Maldives/maldives_3.jpg",

        ],
        cost: 320000,
        description: "Бирюзовые лагуны и белоснежные пляжи",
        heritageSites: [
            "Мечеть Хукуру Миский",
            "Национальный музей",
            "Остров Султанс"
        ],
        placesToVisit: [
            "Коралловые рифы",
            "Подводный ресторан",
            "Спа-центры на воде"
        ],
        ratings: {
            transport: 2,
            safety: 5,
            population: 1,
            greenery: 3
        },
        author: "Рома"
    },
    {
        id: 21,
        title: "Скандинавская идиллия",
        location: "Стокгольм, Швеция",
        coordinates: { lat: 59.3293, lng: 18.0686 },
        images: [
            "/assets/images/Sweden/sweden_1.jpg",
            "/assets/images/Sweden/sweden_2.jpg",
            "/assets/images/Sweden/sweden_3.jpg",
            "/assets/images/Sweden/sweden_4.jpg",
            "/assets/images/Sweden/sweden_5.jpg",
        ],
        cost: 195000,
        description: "Город на 14 островах",
        heritageSites: [
            "Королевский дворец",
            "Музей Васа",
            "Старый город Гамла стан"
        ],
        placesToVisit: [
            "Скансен",
            "Ратуша",
            "Остров Юргорден"
        ],
        ratings: {
            transport: 5,
            safety: 5,
            population: 3,
            greenery: 4
        },
        author: "Миша"
    },
    {
        id: 22,
        title: "Затерянный мир",
        location: "Куско, Перу",
        coordinates: { lat: -13.5319, lng: -71.9675 },
        images: [
            "/assets/images/Peru/peru_1.jpg",
            "/assets/images/Peru/peru_2.jpg",
            "/assets/images/Peru/peru_3.jpg",
        ],
        cost: 155000,
        description: "Столица империи Инков",
        heritageSites: [
            "Мачу-Пикчу",
            "Крепость Саксайуаман",
            "Храм Кориканча"
        ],
        placesToVisit: [
            "Священная долина",
            "Рынок Сан-Педро",
            "Радужные горы"
        ],
        ratings: {
            transport: 2,
            safety: 3,
            population: 2,
            greenery: 4
        },
        author: "Ghoukie"
    },
    {
        id: 23,
        title: "Восточная мозаика",
        location: "Исфахан, Иран",
        coordinates: { lat: 32.6539, lng: 51.6660 },
        images: [
            "/assets/images/Iran/iran_1.jpg",
            "/assets/images/Iran/iran_2.jpg",
            "/assets/images/Iran/iran_3.jpg",
            "/assets/images/Iran/iran_4.jpg",
            "/assets/images/Iran/iran_5.jpg",
        ],
        cost: 115000,
        description: "Город персидских мечетей и дворцов",
        heritageSites: [
            "Площадь Имама",
            "Мечеть Шейха Лютфуллы",
            "Дворец Чехель Сотун"
        ],
        placesToVisit: [
            "Мост Си-о-Се Поль",
            "Базар Исфахана",
            "Собор Ванк"
        ],
        ratings: {
            transport: 3,
            safety: 4,
            population: 3,
            greenery: 3
        },
        author: "Ghoukie"
    },
    {
        id: 24,
        title: "Океанская романтика",
        location: "Сидней, Австралия",
        coordinates: { lat: -33.8688, lng: 151.2093 },
        images: [
            "/assets/images/Australia/australia_1.jpg",
            "/assets/images/Australia/australia_2.jpg",
            "/assets/images/Australia/australia_3.jpg",
            "/assets/images/Australia/australia_4.jpg",
        ],
        cost: 265000,
        description: "Город с самой красивой гаванью в мире",
        heritageSites: [
            "Сиднейский оперный театр",
            "Харбор-Бридж",
            "Район Рокс"
        ],
        placesToVisit: [
            "Пляж Бонди",
            "Зоопарк Таронга",
            "Голубые горы"
        ],
        ratings: {
            transport: 4,
            safety: 5,
            population: 3,
            greenery: 4
        },
        author: "Вероника К"
    },
    {
        id: 25,
        title: "Карибский бриз",
        location: "Гавана, Куба",
        coordinates: { lat: 23.1136, lng: -82.3666 },
        images: [
            "/assets/images/Cuba/cuba_1.jpg",
            "/assets/images/Cuba/cuba_2.jpg",
            "/assets/images/Cuba/cuba_3.jpg",
            "/assets/images/Cuba/cuba_4.jpg",
            "/assets/images/Cuba/cuba_5.jpg",
        ],
        cost: 135000,
        description: "Столица рома и сигар",
        heritageSites: [
            "Старая Гавана",
            "Крепость Эль-Морро",
            "Капитолий"
        ],
        placesToVisit: [
            "Набережная Малекон",
            "Площадь Революции",
            "Пляжи Варадеро"
        ],
        ratings: {
            transport: 2,
            safety: 3,
            population: 3,
            greenery: 3
        },
        author: "Анон"
    },
    {
        id: 26,
        title: "Горнолыжный рай",
        location: "Китцбюэль, Австрия",
        coordinates: { lat: 47.4464, lng: 12.3921 },
        images: [
            "/assets/images/Austria/aus_kitz_1.jpg",
            "/assets/images/Austria/aus_kitz_2.jpg",
            "/assets/images/Austria/aus_kitz_3.jpg",
            "/assets/images/Austria/aus_kitz_4.jpg",
        ],
        cost: 185000,
        description: "Легендарный курорт в Тирольских Альпах",
        heritageSites: [
            "Старый город",
            "Замок Китцбюэль",
            "Церковь Святого Андрея"
        ],
        placesToVisit: [
            "Трасса Штрайф",
            "Озеро Шварцзее",
            "Прогулки по горам"
        ],
        ratings: {
            transport: 4,
            safety: 5,
            population: 2,
            greenery: 5
        },
        author: "Вероника К"
    }
];

