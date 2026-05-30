const defaultImage = 'img/hero-reindeer.webp';

// Бесплатная погода без токена: Open‑Meteo (работает по координатам).
// Документация: https://open-meteo.com/
const VORKUTA_LAT = 67.4988;
const VORKUTA_LON = 64.0522;

const objects = [
  {
    id: 'victory-square',
    name: 'Парк Победы',
    lat: 67.4968,
    lng: 64.0610,
    image: 'img/ParkPobedy.webp',
    description: 'Одна из центральных городских площадок и удобная стартовая точка маршрутов.',
    category: 'История'
  },
  {
    id: 'miners-alley',
    name: 'Памятник трудовой доблести',
    lat: 67.4979,
    lng: 64.0580,
    image: 'img/PamytnikTrudovoyDoblesti.webp',
    description: 'Мемориальное пространство, посвящённое шахтёрскому труду и истории города.',
    category: 'Память'
  },
  {
    id: 'memory-monument',
    name: 'Монумент «Жертвам политических репрессий»',
    lat: 67.4925,
    lng: 64.0640,
    image: 'img/MonumentJertvamRepresiy.webp',
    description: 'Установлен на берегу реки Воркута, напротив поселка Рудник, где находились первые лагпункты и шахты Ухтпечлага.',
    category: 'Память'
  },
  {
    id: 'pioneers-monument',
    name: 'Первооткрывателям Печорского угольного бассейна',
    lat: 67.4956,
    lng: 64.0548,
    image: 'img/Pervootkr.webp',
    description: 'Памятный объект, связанный с историей освоения Печорского угольного бассейна и становлением Воркуты.',
    category: 'История'
  },
  {
    id: 'moskovskaya',
    name: 'Улица Московская',
    lat: 67.4991,
    lng: 64.0510,
    image: 'img/Moskowskay.webp',
    description: 'Улица, где хорошо читается исторический и архитектурный облик Воркуты.',
    category: 'Архитектура'
  },
  {
    id: 'embankment',
    name: 'Набережная',
    lat: 67.5050,
    lng: 64.0800,
    image: 'img/Naberejnay.webp',
    description: 'Панорамная точка с видом на городское пространство и северные ландшафты.',
    category: 'Панорамы'
  },
  {
    id: 'geologists-square',
    name: 'Пионерский парк',
    lat: 67.5010,
    lng: 64.0460,
    image: 'img/PianerPark.webp',
    description: 'Зелёная городская зона, удобная для пешеходной остановки летом.',
    category: 'Архитектура'
  },
  {
    id: 'drama-theatre',
    name: 'Драмтеатр',
    lat: 67.4982,
    lng: 64.0530,
    image: 'img/Dramteatr.webp',
    description: 'Заметный городской объект, включаемый в архитектурные и культурные маршруты.',
    category: 'Культура'
  },
  {
    id: 'palace-creativity',
    name: 'Дворец творчества',
    lat: 67.4990,
    lng: 64.0490,
    image: 'img/DvorecTvorchestva.webp',
    description: 'Культурно-образовательный объект в составе центрального ансамбля.',
    category: 'Культура'
  },
  {
    id: 'puppet-theatre',
    name: 'Дворец культуры шахтеров',
    lat: 67.4910,
    lng: 64.0600,
    image: 'img/DvorecKulturyShahterov.webp',
    description: 'Театральный объект, связанный с культурной жизнью города.',
    category: 'Культура'
  },
  {
    id: 'museum-center',
    name: 'Музейно-выставочный центр',
    lat: 67.4892,
    lng: 64.0570,
    image: 'img/MuseynoVistovoh.webp',
    description: 'Пространство, где можно дополнить прогулку историческими материалами и выставками.',
    category: 'Музеи'
  },
  {
    id: 'voinovsky-museum',
    name: 'Музей им. Войновского-Кригера',
    lat: 67.5020,
    lng: 64.0750,
    image: 'img/MuseyVoinKriger.webp',
    description: 'Музейная точка, связанная с историей края и городской памятью.',
    category: 'Музеи'
  }
];

// Стартовые фото для обложек маршрутов (индекс в списке точек маршрута).
// Условия от тебя:
// - Ист.ядро — Парк Победы
// - Память поколений — Музейно-выставочный центр
// - Арх.наследие — Драмтеатр
// - Природные контрасты — Набережная
const routeCoverStartIndex = {
  'historic-core': 0,
  'memory-generations': 3,
  'architecture-heritage': 2,
  'natural-contrasts': 0
};

const routes = [
  {
    id: 'historic-core',
    title: 'Историческое ядро',
    duration: '2–3 часа',
    distance: '3,4 км',
    pathColor: '#0ea5e9',
    seasons: ['summer', 'winter'],
    startPoint: 'Парк Победы',
    image: defaultImage,
    description: 'Маршрут по историческому ядру Воркуты: от Парка Победы через памятные городские объекты к монументам и улице Московской.',
    points: ['victory-square', 'memory-monument', 'pioneers-monument', 'moskovskaya']
  },
  {
    id: 'architecture-heritage',
    title: 'Архитектурное наследие Заполярья',
    duration: '2,5–3 часа',
    distance: '4,1 км',
    pathColor: '#14b8a6',
    seasons: ['summer'],
    startPoint: 'Улица Московская',
    image: defaultImage,
    description: 'Пешеходный маршрут по выразительным фасадам, ансамблям и культурным объектам центральной части города.',
    points: ['moskovskaya', 'geologists-square', 'drama-theatre', 'palace-creativity']
  },
  {
    id: 'memory-generations',
    title: 'Память поколений',
    duration: '2 часа',
    distance: '2,6 км',
    pathColor: '#8b5cf6',
    seasons: ['summer', 'winter'],
    startPoint: 'Монумент «Память»',
    image: defaultImage,
    description: 'Маршрут, посвящённый символическим объектам, мемориалам и музейным пространствам города.',
    points: ['memory-monument', 'miners-alley', 'puppet-theatre', 'museum-center']
  },
  {
    id: 'natural-contrasts',
    title: 'Природные контрасты и городские панорамы',
    duration: '2–2,5 часа',
    distance: '6,8 км',
    pathColor: '#f97316',
    seasons: ['winter'],
    startPoint: 'Набережная',
    image: defaultImage,
    description: 'Автомаршрут к панорамным точкам, набережной и музейным остановкам с учётом зимней логистики и короткого светового дня.',
    points: ['embankment', 'voinovsky-museum', 'museum-center', 'victory-square']
  }
];

const practiceInfo = {
  gear: {
    summer: [
      'Ветровка и непромокаемая обувь',
      'Термокружка и вода',
      'Средства от ветра и солнца'
    ],
    winter: [
      'Тёплая многослойная одежда',
      'Шапка, варежки, шарф и утеплённая обувь',
      'Термос и химические грелки'
    ]
  },
  safety: [
    'Проверяйте прогноз погоды и уровень ветра перед выходом.',
    'Зимой не планируйте поздние длинные прогулки без тёплых остановок.',
    'Сообщайте близким о маршруте и предполагаемом времени возвращения.',
    'Используйте навигацию и держите телефон заряженным.'
  ],
  emergency: [
    ['112', 'Единый номер экстренных служб'],
    ['101', 'Пожарная охрана'],
    ['102', 'Полиция'],
    ['103', 'Скорая помощь']
  ]
};

const bookingOptions = {
  hotel: {
    title: 'Отели',
    icon: '🏨',
    items: [
      { name: 'Гостиница «Воркута»', rating: 4.2, price: 'от 3 500 ₽/ночь', features: ['Wi-Fi', 'Завтрак', 'Парковка'] },
      { name: 'Гостиница «Северный»', rating: 4.5, price: 'от 4 200 ₽/ночь', features: ['Wi-Fi', 'Ресторан', 'Сауна'] },
      { name: 'Мини-гостиница «Plaza»', rating: 4.0, price: 'от 2 800 ₽/ночь', features: ['Wi-Fi', 'Кухня', 'Трансфер'] }
    ]
  },
  taxi: {
    title: 'Такси',
    icon: '🚕',
    items: [
      { name: 'Такси «Вояж»', rating: 4.6, price: 'от 150 ₽', features: ['Комфорт', 'Детское кресло', '24/7'] },
      { name: 'Служба «Север»', rating: 4.3, price: 'от 120 ₽', features: ['Эконом', 'Межгород', 'Безнал'] },
      { name: 'Премиум трансфер', rating: 4.8, price: 'от 500 ₽', features: ['Бизнес-класс', 'Встреча', 'Гид'] }
    ]
  },
  restaurant: {
    title: 'Рестораны',
    icon: '🍽️',
    items: [
      { name: 'Ресто-бар «Суши-уши»', rating: 4.4, price: 'средний чек 1 200 ₽', features: ['Северная кухня', 'Банкеты', 'Живая музыка'] },
      { name: 'Кафе «Roll»', rating: 4.2, price: 'средний чек 600 ₽', features: ['Домашняя еда', 'Бизнес-ланч', 'Доставка'] },
      { name: 'Кафе «Гелиос»', rating: 4.5, price: 'средний чек 900 ₽', features: ['Коктейли', 'Живая музыка', 'Панорамный вид'] }
    ]
  }
};

const weatherBySeason = {
  summer: {
    temp: '+8°C',
    text: 'Летний режим: умеренно прохладно, комфортно для прогулок.',
    wind: '5 м/с',
    precip: '10%',
    light: 'Длинный',
    advice: 'Лёгкая ветровка'
  },
  winter: {
    temp: '-18°C',
    text: 'Зимний режим: морозно, маршруты короче и с тёплыми остановками.',
    wind: '7 м/с',
    precip: '30%',
    light: 'Короткий',
    advice: 'Тёплая экипировка'
  }
};

const state = {
  season: 'summer',
  weatherMode: 'summer', // 'summer' | 'winter' | 'now'
  selectedRouteId: 'historic-core',
  activeBookingType: 'hotel',
  selectedService: '',
  routeCoverIndex: {}
};

function getRoutePhotos(route) {
  return getRouteObjects(route).map((point) => point.image).filter(Boolean);
}

function ensureRouteCoverIndex(routeId, photosLen) {
  if (!state.routeCoverIndex) state.routeCoverIndex = {};
  if (typeof state.routeCoverIndex[routeId] !== 'number') {
    state.routeCoverIndex[routeId] = routeCoverStartIndex[routeId] ?? 0;
  }
  const len = typeof photosLen === 'number' ? photosLen : 0;
  if (len > 0) {
    state.routeCoverIndex[routeId] = ((state.routeCoverIndex[routeId] % len) + len) % len;
  } else {
    state.routeCoverIndex[routeId] = 0;
  }
}

function updateRouteCoverImage(routeId) {
  const route = routes.find((r) => r.id === routeId);
  if (!route) return;
  const photos = getRoutePhotos(route);
  ensureRouteCoverIndex(routeId, photos.length);
  const idx = state.routeCoverIndex[routeId] ?? 0;
  const img = document.querySelector(`[data-route-cover-img="${routeId}"]`);
  if (!(img instanceof HTMLImageElement)) return;
  const src = photos[idx] || route.image || defaultImage;
  img.src = src;
  img.alt = `${route.title} — фото ${idx + 1} из ${Math.max(photos.length, 1)}`;
}

const heroSection = document.getElementById('hero');
const siteHeader = document.getElementById('siteHeader');
const heroBadge = document.getElementById('heroBadge');
const heroAccent = document.getElementById('heroAccent');
const heroText = document.getElementById('heroText');
const heroRouteCount = document.getElementById('heroRouteCount');
const routesDescription = document.getElementById('routesDescription');
const routesGrid = document.getElementById('routesGrid');
const mapRouteList = document.getElementById('mapRouteList');
const legendList = document.getElementById('legendList');
const seasonBoxText = document.getElementById('seasonBoxText');
const warmingBox = document.getElementById('warmingBox');
const summaryGrid = document.getElementById('summaryGrid');
const objectGrid = document.getElementById('objectGrid');
const gearList = document.getElementById('gearList');
const safetyList = document.getElementById('safetyList');
const emergencyList = document.getElementById('emergencyList');
const bookingTabs = document.getElementById('bookingTabs');
const bookingOptionsContainer = document.getElementById('bookingOptions');
const bookingListTitle = document.getElementById('bookingListTitle');
const selectedServiceBox = document.getElementById('selectedServiceBox');
const selectedServiceText = document.getElementById('selectedServiceText');
const bookingForm = document.getElementById('bookingForm');
const successBox = document.getElementById('successBox');
const weatherTemp = document.getElementById('weatherTemp');
const weatherText = document.getElementById('weatherText');
const weatherWind = document.getElementById('weatherWind');
const weatherPrecip = document.getElementById('weatherPrecip');
const weatherLight = document.getElementById('weatherLight');
const weatherAdvice = document.getElementById('weatherAdvice');
const mobileNav = document.getElementById('mobileNav');
const menuToggle = document.getElementById('menuToggle');
const mapCanvas = document.getElementById('mapCanvas');
const mapModeBadge = document.getElementById('mapModeBadge');

let yandexMap = null;
let yandexRouteLine = null;
let yandexPointCollection = null;

const liveWeatherState = {
  status: 'idle', // idle | loading | ready | error | no_token
  updatedAt: null,
  data: null,
  errorMessage: ''
};

function syncHeaderStyle() {
  if (!siteHeader || !heroSection) return;
  // Пока пользователь находится в hero-секции — делаем шапку "прозрачной", как на макете.
  const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
  const isHero = window.scrollY + 80 < heroBottom;
  siteHeader.classList.toggle('is-hero', isHero);
}

function formatC(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) return '—';
  const n = Math.round(value);
  return `${n > 0 ? '+' : ''}${n}°C`;
}

function formatMS(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) return '—';
  return `${Math.round(value)} м/с`;
}

function getAutoSeason() {
  // Простая логика по месяцу (можно подстроить при необходимости):
  // Для Воркуты лето короткое, поэтому по умолчанию:
  // июнь–август = "лето", остальное = "зима".
  const m = new Date().getMonth() + 1; // 1..12
  return m >= 6 && m <= 8 ? 'summer' : 'winter';
}

function formatPercent(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) return '—';
  return `${Math.round(value)}%`;
}

function dayLengthLabel(hours) {
  if (typeof hours !== 'number' || Number.isNaN(hours)) return '—';
  if (hours < 6) return 'Короткий';
  if (hours < 10) return 'Средний';
  return 'Длинный';
}

function buildAdvice({ tempC, windMS, precipProb, precipMm }) {
  const tips = [];
  if (typeof tempC === 'number') {
    if (tempC <= -10) tips.push('Тёплая экипировка');
    else if (tempC <= 0) tips.push('Тёплая куртка');
    else if (tempC <= 10) tips.push('Лёгкая ветровка');
    else tips.push('Лёгкая одежда');
  }

  const wet = (typeof precipProb === 'number' && precipProb >= 40) || (typeof precipMm === 'number' && precipMm > 0);
  if (wet) tips.push('зонт/непромокаемая обувь');

  const windMax = Math.max(
    typeof windMS === 'number' ? windMS : -Infinity,
    typeof arguments[0]?.windGustMS === 'number' ? arguments[0].windGustMS : -Infinity
  );
  if (Number.isFinite(windMax) && windMax >= 8) tips.push('защита от ветра');

  return tips.length ? tips.join(', ') : 'По погоде';
}

function describeWeatherCode(code) {
  const map = new Map([
    [0, 'Ясно'],
    [1, 'Преимущественно ясно'],
    [2, 'Переменная облачность'],
    [3, 'Пасмурно'],
    [45, 'Туман'],
    [48, 'Туман (изморозь)'],
    [51, 'Морось (слабая)'],
    [53, 'Морось (умеренная)'],
    [55, 'Морось (сильная)'],
    [56, 'Ледяная морось (слабая)'],
    [57, 'Ледяная морось (сильная)'],
    [61, 'Дождь (слабый)'],
    [63, 'Дождь (умеренный)'],
    [65, 'Дождь (сильный)'],
    [66, 'Ледяной дождь (слабый)'],
    [67, 'Ледяной дождь (сильный)'],
    [71, 'Снег (слабый)'],
    [73, 'Снег (умеренный)'],
    [75, 'Снег (сильный)'],
    [77, 'Снежные зёрна'],
    [80, 'Ливни (слабые)'],
    [81, 'Ливни (умеренные)'],
    [82, 'Ливни (сильные)'],
    [85, 'Снегопад (слабый)'],
    [86, 'Снегопад (сильный)'],
    [95, 'Гроза'],
    [96, 'Гроза с градом (слабая)'],
    [99, 'Гроза с градом (сильная)']
  ]);

  if (typeof code !== 'number' || Number.isNaN(code)) return '';
  return map.get(code) || `Код погоды: ${code}`;
}

async function fetchLiveWeatherIfNeeded(force = false) {
  const now = Date.now();
  const cacheMs = 10 * 60 * 1000; // 10 minutes

  if (!force && liveWeatherState.updatedAt && now - liveWeatherState.updatedAt < cacheMs) {
    return;
  }

  try {
    liveWeatherState.status = 'loading';
    liveWeatherState.errorMessage = '';

    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${VORKUTA_LAT}&longitude=${VORKUTA_LON}` +
      `&current=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_gusts_10m` +
      `&hourly=precipitation_probability` +
      `&daily=sunrise,sunset,daylight_duration` +
      `&wind_speed_unit=ms&timezone=auto`;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const json = await res.json();
    const current = json && json.current ? json.current : null;
    if (!current) throw new Error('Неверный ответ сервиса погоды');

    // Вероятность осадков: берём почасовое значение для текущего часа (если есть).
    let precipProb = null;
    const hourly = json && json.hourly ? json.hourly : null;
    if (hourly && Array.isArray(hourly.time) && Array.isArray(hourly.precipitation_probability)) {
      const t = current.time;
      let idx = hourly.time.indexOf(t);
      if (idx === -1) {
        // если точного совпадения нет — ищем ближайшее время
        const curMs = Date.parse(t);
        let best = -1;
        let bestDiff = Infinity;
        for (let i = 0; i < hourly.time.length; i++) {
          const ms = Date.parse(hourly.time[i]);
          const diff = Math.abs(ms - curMs);
          if (diff < bestDiff) {
            bestDiff = diff;
            best = i;
          }
        }
        idx = best;
      }
      if (idx >= 0) precipProb = hourly.precipitation_probability[idx];
    }

    // Длина дня (секунды) — берём первый день (сегодня).
    let daylightHours = null;
    const daily = json && json.daily ? json.daily : null;
    if (daily && Array.isArray(daily.daylight_duration) && typeof daily.daylight_duration[0] === 'number') {
      daylightHours = daily.daylight_duration[0] / 3600;
    }

    liveWeatherState.data = {
      tempC: current.temperature_2m,
      desc: describeWeatherCode(current.weather_code),
      windMS: current.wind_speed_10m,
      windGustMS: current.wind_gusts_10m,
      // Осадки: мм за час (по текущим данным Open‑Meteo).
      precipMm: current.precipitation,
      precipProb,
      daylightHours
    };

    liveWeatherState.status = 'ready';
    liveWeatherState.updatedAt = now;
  } catch (e) {
    liveWeatherState.status = 'error';
    liveWeatherState.data = null;
    liveWeatherState.errorMessage = e instanceof Error ? e.message : String(e);
  }
}

function getObjectById(id) {
  return objects.find((item) => item.id === id);
}

function getAvailableRoutes() {
  return routes.filter((route) => route.seasons.includes(state.season));
}

function getSelectedRoute() {
  const available = getAvailableRoutes();
  return available.find((route) => route.id === state.selectedRouteId) || available[0];
}

function getRouteObjects(route) {
  return route.points.map(getObjectById).filter(Boolean);
}

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function downloadGPX(route) {
  const points = getRouteObjects(route);
  const gpx = `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="Vorkuta Routes">
  <trk>
    <name>${route.title}</name>
    <trkseg>
${points.map((point) => `      <trkpt lat="${point.lat}" lon="${point.lng}"><name>${point.name}</name></trkpt>`).join('\n')}
    </trkseg>
  </trk>
</gpx>`;

  const blob = new Blob([gpx], { type: 'application/gpx+xml' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${route.id}.gpx`;
  link.click();
  URL.revokeObjectURL(url);
}

function renderYandexMap(route) {
  if (typeof ymaps === 'undefined' || !mapCanvas) return;

  const points = getRouteObjects(route);
  if (!points.length) return;

  const center = points[0];

  if (!yandexMap) {
    yandexMap = new ymaps.Map('mapCanvas', {
      center: [center.lat, center.lng],
      zoom: 13,
      controls: ['zoomControl', 'fullscreenControl']
    });
  }

  if (yandexRouteLine) {
    yandexMap.geoObjects.remove(yandexRouteLine);
  }

  if (yandexPointCollection) {
    yandexMap.geoObjects.remove(yandexPointCollection);
  }

  yandexPointCollection = new ymaps.GeoObjectCollection();

  yandexRouteLine = new ymaps.Polyline(
    points.map((point) => [point.lat, point.lng]),
    {
      balloonContent: route.title,
      hintContent: route.title
    },
    {
      strokeColor: route.pathColor,
      strokeWidth: 6,
      strokeOpacity: 0.9,
      strokeStyle: state.season === 'winter' ? 'shortdash' : 'solid'
    }
  );

  points.forEach((point, index) => {
    const placemark = new ymaps.Placemark(
      [point.lat, point.lng],
      {
        iconContent: `${index + 1}`,
        balloonContent: `
          <div style="width:240px;">
            <img src="${point.image}" alt="${point.name}" style="width:100%;height:120px;object-fit:cover;border-radius:12px;margin-bottom:10px;" />
            <div style="font-weight:700;font-size:16px;margin-bottom:8px;">${point.name}</div>
            <div style="font-size:13px;color:#5f7287;line-height:1.5;">${point.description}</div>
          </div>
        `,
        hintContent: `${index + 1}. ${point.name}`
      },
      {
        preset: 'islands#blueCircleDotIconWithCaption',
        iconCaptionMaxWidth: '0'
      }
    );

    yandexPointCollection.add(placemark);
  });

  yandexMap.geoObjects.add(yandexRouteLine);
  yandexMap.geoObjects.add(yandexPointCollection);

  const bounds = yandexRouteLine.geometry.getBounds();
  if (bounds) {
    yandexMap.setBounds(bounds, {
      checkZoomRange: true,
      zoomMargin: 40
    });
  }
}

function renderHero() {
  const weather = weatherBySeason[state.season];
  const availableRoutes = getAvailableRoutes();

  heroSection.className = `hero ${state.season}`;
  heroAccent.className = state.season;
  const autoSeason = state.weatherMode === 'now' ? getAutoSeason() : null;
  heroBadge.textContent =
    state.season === 'summer'
      ? (state.weatherMode === 'now' ? 'Сейчас • Авто: Лето' : 'Летний сезон по Воркуте')
      : (state.weatherMode === 'now' ? 'Сейчас • Авто: Зима' : 'Зимний сезон по Воркуте');

  heroText.textContent =
    state.season === 'summer'
      ? 'Летние маршруты делают акцент на открытых площадках, культурных объектах и протяжённых прогулках по городу.'
      : 'Зимние маршруты учитывают сокращённый световой день, точки обогрева и более компактную логистику перемещения.';

  heroRouteCount.textContent = String(availableRoutes.length);

  // Weather block: can show seasonal mock data or live "Now" data.
  if (state.weatherMode === 'now') {
    if (liveWeatherState.status === 'idle') {
      // kick off load (async)
      fetchLiveWeatherIfNeeded(true).then(() => renderHero());
      liveWeatherState.status = 'loading';
    }

    if (liveWeatherState.status === 'loading') {
      weatherTemp.textContent = '…';
      weatherText.textContent = 'Загружаем текущую погоду…';
      weatherWind.textContent = '…';
      weatherPrecip.textContent = '…';
      weatherLight.textContent = weather.light;
      weatherAdvice.textContent = weather.advice;
    } else if (liveWeatherState.status === 'ready' && liveWeatherState.data) {
      const d = liveWeatherState.data;
      weatherTemp.textContent = formatC(d.tempC);
      weatherText.textContent = d.desc ? `Сейчас: ${d.desc}` : 'Сейчас: данные получены.';
      weatherWind.textContent =
        typeof d.windGustMS === 'number'
          ? `${formatMS(d.windMS)} (порывы до ${formatMS(d.windGustMS)})`
          : formatMS(d.windMS);
      // Осадки — показываем вероятность (%), если доступна. Иначе — мм.
      weatherPrecip.textContent =
        typeof d.precipProb === 'number'
          ? formatPercent(d.precipProb)
          : (typeof d.precipMm === 'number' ? `${d.precipMm} мм` : '—');

      weatherLight.textContent = dayLengthLabel(d.daylightHours);
      weatherAdvice.textContent = buildAdvice(d);
    } else {
      weatherTemp.textContent = '—';
      weatherText.textContent = `Не удалось загрузить погоду (Сейчас): ${liveWeatherState.errorMessage || 'ошибка'}`;
      weatherWind.textContent = '—';
      weatherPrecip.textContent = '—';
      weatherLight.textContent = '—';
      weatherAdvice.textContent = '—';
    }
  } else {
    weatherTemp.textContent = weather.temp;
    weatherText.textContent = weather.text;
    weatherWind.textContent = weather.wind;
    weatherPrecip.textContent = weather.precip;
    weatherLight.textContent = weather.light;
    weatherAdvice.textContent = weather.advice;
  }

  document.querySelectorAll('.season-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.season === state.weatherMode);
  });
}

function renderRoutes() {
  routesDescription.textContent =
    state.season === 'summer'
      ? 'Летом доступны маршруты с акцентом на исторический центр, архитектуру, культурные объекты и открытые площадки.'
      : 'Зимой активны маршруты, которые лучше подходят для короткого светового дня и удобных точек остановки.';

  routesGrid.innerHTML = routes
    .map((route) => {
      const available = route.seasons.includes(state.season);
      const routeObjects = getRouteObjects(route);
      const photos = getRoutePhotos(route);
      ensureRouteCoverIndex(route.id, photos.length);
      const coverIndex = state.routeCoverIndex[route.id] ?? 0;
      const coverSrc = photos[coverIndex] || route.image || defaultImage;
      const hasCarousel = photos.length > 1;

      return `
        <div class="route-card" style="opacity:${available ? 1 : 0.55};">
          <div class="route-cover">
            <img class="route-cover-img" data-route-cover-img="${route.id}" src="${coverSrc}" alt="${route.title}" />
            ${
              hasCarousel
                ? `
                  <button class="route-cover-arrow prev" type="button" data-route-cover-prev="${route.id}" aria-label="Предыдущее фото">‹</button>
                  <button class="route-cover-arrow next" type="button" data-route-cover-next="${route.id}" aria-label="Следующее фото">›</button>
                `
                : ''
            }
            <div class="route-meta">
              <span>🕒 ${route.duration}</span>
              <span>📍 ${route.distance}</span>
              <span>${available ? 'Доступен сейчас' : 'Неактивен в сезоне'}</span>
            </div>
          </div>
          <div class="route-body">
            <div class="route-title-line">
              <span class="dot" style="background:${route.pathColor}; width:14px; height:14px;"></span>
              <strong style="font-size:22px;">${route.title}</strong>
            </div>
            <p>${route.description}</p>
            <div class="route-points">
              ${routeObjects.map((point) => `<span class="point-chip">${point.name}</span>`).join('')}
            </div>
            <div class="route-actions">
              <button class="primary-btn" type="button" ${available ? '' : 'disabled'} data-route-id="${route.id}" data-scroll="map">Открыть на карте</button>
              <button class="outline-btn" type="button" data-download-route="${route.id}">Скачать GPX</button>
            </div>
          </div>
        </div>
      `;
    })
    .join('');
}

function renderMapSection() {
  const availableRoutes = getAvailableRoutes();
  const selectedRoute = getSelectedRoute();
  const selectedObjects = getRouteObjects(selectedRoute);

  mapRouteList.innerHTML = availableRoutes
    .map((route) => `
      <button
        class="route-list-btn ${selectedRoute && selectedRoute.id === route.id ? 'active' : ''}"
        type="button"
        data-route-id="${route.id}"
        style="${selectedRoute && selectedRoute.id === route.id ? `background:${route.pathColor}; border-color:${route.pathColor};` : ''}"
      >
        <span class="dot" style="background:${selectedRoute && selectedRoute.id === route.id ? '#ffffff' : route.pathColor};"></span>
        <span>${route.title}</span>
      </button>
    `)
    .join('');

  legendList.innerHTML = routes
    .map((route) => `
      <div class="legend-item">
        <span class="dot" style="background:${route.pathColor};"></span>
        <span>${route.title}${route.seasons.includes(state.season) ? '' : ' (неактивен)'}</span>
      </div>
    `)
    .join('');

  seasonBoxText.textContent =
    state.season === 'summer'
      ? 'Летние варианты делают акцент на открытых площадках и более протяжённых прогулках.'
      : 'Зимние варианты учитывают сокращённый световой день, ветер и точки обогрева.';

  warmingBox.style.display = state.season === 'winter' ? 'block' : 'none';
  mapModeBadge.textContent = state.season === 'summer' ? 'Летний режим карты' : 'Зимний режим карты';

  document.querySelectorAll('.map-season-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.mapSeason === state.season);
  });

  renderYandexMap(selectedRoute);

  summaryGrid.innerHTML = [
    ['Маршрутов сезона', availableRoutes.length],
    ['Точек в активном маршруте', selectedObjects.length],
    ['Каталог объектов', objects.length],
    ['Активных точек', selectedObjects.length]
  ]
    .map(([label, value]) => `
      <div class="summary-card">
        <strong>${value}</strong>
        <p>${label}</p>
      </div>
    `)
    .join('');
}

function renderObjects() {
  objectGrid.innerHTML = objects
    .map((point) => `
      <div class="object-card">
        <img src="${point.image}" alt="${point.name}" />
        <strong style="font-size:20px;">${point.name}</strong>
        <p>${point.description}</p>
        <div class="object-meta">Категория: ${point.category}</div>
      </div>
    `)
    .join('');
}

function renderPractical() {
  gearList.innerHTML = practiceInfo.gear[state.season]
    .map((item) => `<div class="contact-item">• <span>${item}</span></div>`)
    .join('');

  safetyList.innerHTML = practiceInfo.safety
    .map((item) => `<div class="contact-item">• <span>${item}</span></div>`)
    .join('');

  emergencyList.innerHTML = practiceInfo.emergency
    .map(([phone, label]) => `<div class="contact-item"><strong>${phone}</strong><span>${label}</span></div>`)
    .join('');
}

function renderBooking() {
  const current = bookingOptions[state.activeBookingType];

  bookingTabs.innerHTML = Object.entries(bookingOptions)
    .map(([key, value]) => `
      <button class="booking-tab ${state.activeBookingType === key ? 'active' : ''}" type="button" data-booking-type="${key}">
        <span>${value.icon}</span>
        <span>${value.title}</span>
      </button>
    `)
    .join('');

  bookingListTitle.textContent = `${current.icon} Доступные ${current.title.toLowerCase()}`;

  bookingOptionsContainer.innerHTML = current.items
    .map((item) => `
      <button class="booking-option ${state.selectedService === item.name ? 'active' : ''}" type="button" data-service-name="${item.name}">
        <div class="option-top">
          <div>
            <strong style="font-size:20px;">${item.name}</strong>
            <div class="rating">★ ${item.rating}</div>
          </div>
          <div class="option-price">${item.price}</div>
        </div>
        <div class="feature-list">
          ${item.features.map((feature) => `<span class="feature-tag">${feature}</span>`).join('')}
        </div>
        ${state.selectedService === item.name ? '<div class="selected-line">Выбрано</div>' : ''}
      </button>
    `)
    .join('');

  if (state.selectedService) {
    selectedServiceBox.classList.add('visible');
    selectedServiceText.textContent = state.selectedService;
  } else {
    selectedServiceBox.classList.remove('visible');
  }
}

function fillGuests() {
  const guests = document.getElementById('guests');

  guests.innerHTML = Array.from({ length: 8 }, (_, i) => i + 1)
    .map((n) => {
      const label = n === 1 ? 'гость' : n < 5 ? 'гостя' : 'гостей';
      return `<option value="${n}">${n} ${label}</option>`;
    })
    .join('');

  guests.value = '2';
}

function ensureRouteAvailability() {
  const availableRoutes = getAvailableRoutes();
  if (!availableRoutes.some((route) => route.id === state.selectedRouteId)) {
    state.selectedRouteId = availableRoutes[0] ? availableRoutes[0].id : null;
  }
}

function renderAll() {
  ensureRouteAvailability();
  renderHero();
  renderRoutes();
  renderMapSection();
  renderObjects();
  renderPractical();
  renderBooking();
  syncHeaderStyle();
}

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const prevCoverBtn = target.closest('[data-route-cover-prev]');
  if (prevCoverBtn) {
    const routeId = prevCoverBtn.getAttribute('data-route-cover-prev');
    const route = routes.find((r) => r.id === routeId);
    if (routeId && route) {
      const photos = getRoutePhotos(route);
      ensureRouteCoverIndex(routeId, photos.length);
      const len = Math.max(photos.length, 1);
      state.routeCoverIndex[routeId] = ((state.routeCoverIndex[routeId] - 1) % len + len) % len;
      updateRouteCoverImage(routeId);
    }
    event.preventDefault();
    return;
  }

  const nextCoverBtn = target.closest('[data-route-cover-next]');
  if (nextCoverBtn) {
    const routeId = nextCoverBtn.getAttribute('data-route-cover-next');
    const route = routes.find((r) => r.id === routeId);
    if (routeId && route) {
      const photos = getRoutePhotos(route);
      ensureRouteCoverIndex(routeId, photos.length);
      const len = Math.max(photos.length, 1);
      state.routeCoverIndex[routeId] = (state.routeCoverIndex[routeId] + 1) % len;
      updateRouteCoverImage(routeId);
    }
    event.preventDefault();
    return;
  }

  const scrollTarget = target.closest('[data-scroll]');
  if (scrollTarget) {
    const routeId = scrollTarget.getAttribute('data-route-id');
    if (routeId) state.selectedRouteId = routeId;

    scrollToSection(scrollTarget.getAttribute('data-scroll'));
    mobileNav.classList.remove('open');
    menuToggle.textContent = '☰';
  }

  const seasonBtn = target.closest('[data-season]');
  if (seasonBtn) {
    const nextMode = seasonBtn.getAttribute('data-season');
    if (!nextMode) return;

    // Summer/Winter switch:
    // - 'summer'/'winter' => меняем сезон и показываем сезонные данные.
    // - 'now' => сезон выбирается автоматически по дате, а погода берётся "сейчас".
    if (nextMode === 'now') {
      // При "Сейчас" дизайн автоматически выбирается по текущей дате.
      state.season = getAutoSeason();
      state.weatherMode = 'now';
      // Перерисовываем ВЕСЬ интерфейс, чтобы сезон реально переключал маршруты/карту/текст.
      liveWeatherState.status = 'idle';
      renderAll();
      fetchLiveWeatherIfNeeded(true).then(() => renderHero());
    } else {
      state.season = nextMode;
      state.weatherMode = nextMode;
      renderAll();
    }
  }

  const mapSeasonBtn = target.closest('[data-map-season]');
  if (mapSeasonBtn) {
    state.season = mapSeasonBtn.getAttribute('data-map-season');
    renderAll();
  }

  const routeBtn = target.closest('[data-route-id]');
  if (routeBtn && !routeBtn.hasAttribute('data-scroll')) {
    state.selectedRouteId = routeBtn.getAttribute('data-route-id');
    renderAll();
  }

  const bookingBtn = target.closest('[data-booking-type]');
  if (bookingBtn) {
    state.activeBookingType = bookingBtn.getAttribute('data-booking-type');
    renderBooking();
  }

  const serviceBtn = target.closest('[data-service-name]');
  if (serviceBtn) {
    state.selectedService = serviceBtn.getAttribute('data-service-name');
    renderBooking();
  }

  const downloadBtn = target.closest('[data-download-route]');
  if (downloadBtn) {
    const route = routes.find((item) => item.id === downloadBtn.getAttribute('data-download-route'));
    if (route) {
      downloadGPX(route);
    }
  }
});

menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
  menuToggle.textContent = mobileNav.classList.contains('open') ? '×' : '☰';
});

window.addEventListener('scroll', syncHeaderStyle, { passive: true });
window.addEventListener('resize', syncHeaderStyle);

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  bookingForm.style.display = 'none';
  successBox.classList.add('open');

  setTimeout(() => {
    successBox.classList.remove('open');
    bookingForm.style.display = 'block';
    bookingForm.reset();
    fillGuests();
  }, 3000);
});

fillGuests();

function startApp() {
  renderAll();
}

if (typeof ymaps !== 'undefined') {
  ymaps.ready(startApp);
} else {
  startApp();
}
