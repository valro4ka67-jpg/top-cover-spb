import Image from "next/image";

type Group = {
  name: string;
  image: string;
  description: string;
  price: string;
  year: string;
};

const groups: Group[] = [
  {
    name: "ХИМИЯ", image: "/bands/himiya.jpg",
    description: "Яркие эмоции. Стиль. Драйв. Мы не просто играем каверы — мы создаём настроение.",
    price: "140 000", year: "2025",
  },
  {
    name: "JELSOMINO BAND", image: "/bands/jelsomino-band.jpg",
    description: "Первый караоке-бэнд России. Работает как в формате кавер-бэнда, так и в формате караоке с гостями.",
    price: "220 000", year: "2022",
  },
  {
    name: "FSB", image: "/bands/fsb.jpg",
    description: "Душевная кавер-группа из Санкт-Петербурга. Выступление нон-стоп и микс популярных песен.",
    price: "180 000", year: "2017",
  },
  {
    name: "True Party Band", image: "/bands/true-party-band.jpg",
    description: "Группа, которая превращает событие в полноценное шоу. Более 1000 концертов и 13 лет на сцене.",
    price: "240 000", year: "2008",
  },
  {
    name: "Дунаевский Orchestra", image: "/bands/dunaevskiy-orchestra.jpg",
    description: "Музыкальная шоу-группа из Санкт-Петербурга. Секстет стильных музыкантов-артистов для мероприятий разных форматов.",
    price: "250 000", year: "2012",
  },
  {
    name: "CityFunk", image: "/bands/cityfunk.jpg",
    description: "Универсальные вокалисты с уникальным звучанием. Группа также создаёт песни под ключ специально для мероприятий.",
    price: "160 000", year: "2016",
  },
];

function PriceTag({ amount }: { amount: string }) {
  return <span className="priceTag"><small>от</small><span>{amount}</span><small>₽</small></span>;
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Placeholder({ className = "", src, alt = "" }: { className?: string; src?: string; alt?: string }) {
  return (
    <div className={`imagePlaceholder ${className}`} aria-hidden={src ? undefined : true}>
      {src && <Image src={src} alt={alt} fill unoptimized loading={className === "heroImage" ? "eager" : "lazy"} />}
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="header">
        <a className="logo" href="#top" aria-label="TOP COVER SPB — на главную">
          TOP COVER <span>SPB</span>
        </a>
        <nav className="nav" aria-label="Основная навигация">
          <a href="#rating">Рейтинг</a>
          <a href="#groups">Все группы</a>
          <a href="#about">О проекте</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="heroInner">
          <div className="heroContent">
            <p className="eyebrow">Каталог кавер-групп</p>
            <h1 id="hero-title">Лучшие<br />кавер-группы<br /><span>Санкт-Петербурга</span></h1>
            <p className="heroText">
              Каталог музыкальных коллективов для свадеб, корпоративов и частных мероприятий.
            </p>
            <a className="button heroButton" href="#rating">Смотреть рейтинг <Arrow /></a>
            <div className="heroNote"><span aria-hidden="true" />Музыка для ваших особенных событий</div>
          </div>
          <Placeholder className="heroImage" src="/bands/hero-top-cover.jpg" alt="Живое выступление музыкантов на сцене" />
        </div>
      </section>

      <section className="rating section" id="rating" aria-label="Рейтинг кавер-групп">
        <article className="bandCard">
          <div className="bandRank">
            <span className="bandNumber">01</span>
            <span className="rankCaption">Лидер рейтинга</span>
          </div>
          <Placeholder className="bandImage" src="/bands/nemodnie.jpg" alt="Кавер-группа НЕМОДНЫЕ" />
          <div className="bandInfo">
            <p className="eyebrow bandType">Кавер-дуэт · Санкт-Петербург</p>
            <h2>НЕМОДНЫЕ</h2>
            <p className="bandDescription">Дуэт, который стал лучшей кавер-группой в РФ по версии Wedding Awards 2024.</p>
            <div className="bandPrice"><PriceTag amount="110 000" /><span>Wedding Awards · 2024</span></div>
            <div className="bandActions">
              <details className="bandDetails">
                <summary className="detailsButton">Подробнее <Arrow /></summary>
                <p>НЕМОДНЫЕ — кавер-дуэт из Санкт-Петербурга. Посмотрите промо, чтобы познакомиться с проектом и его звучанием.</p>
              </details>
              <a className="textLink" href="https://vk.com/video-172235675_456239080" target="_blank" rel="noopener noreferrer">Смотреть промо <Arrow /></a>
            </div>
          </div>
        </article>
      </section>

      <section className="groups section" id="groups" aria-labelledby="groups-title">
        <div className="sectionHeader">
          <div>
            <h2 id="groups-title">Все группы</h2>
            <p>Музыкальные коллективы разных форматов и бюджетов</p>
          </div>
          <span className="sectionCount">В подборке — {groups.length} групп</span>
        </div>
        <div className="groupGrid">
          {groups.map((group) => (
            <article className="groupCard" key={group.name}>
              <Placeholder className={`groupImage${group.name === "ХИМИЯ" ? " groupImageHimiya" : ""}`} src={group.image} alt={`Кавер-группа ${group.name}`} />
              <div className="groupContent">
                <h3>{group.name}</h3>
                <p className="groupDescription">{group.description}</p>
                <div className="groupMeta"><PriceTag amount={group.price} /><span className="groupYear">{group.year}</span></div>
                <details className="groupDetails">
                  <summary className="detailsButton">Подробнее <Arrow /></summary>
                  <p>{group.description} Стоимость выступления — от {group.price} ₽.</p>
                </details>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about" aria-labelledby="about-title">
        <div>
          <p className="eyebrow">Музыка объединяет</p>
          <h2 id="about-title">О проекте</h2>
        </div>
        <div className="aboutText">
          <p><span>TOP COVER SPB</span> — каталог кавер-групп Санкт-Петербурга. Здесь собраны музыкальные проекты разных форматов и бюджетов для свадеб, корпоративов и частных событий.</p>
          <a className="textLink" href="#groups">Найти свою группу <Arrow /></a>
        </div>
      </section>
      <footer className="footer section" id="contacts"><a className="logo" href="#top">TOP COVER <span>SPB</span></a><span>Санкт-Петербург · Музыка для событий</span></footer>
    </main>
  );
}
