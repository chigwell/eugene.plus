# Design

## Context

Мотивация и границы продукта — в `proposal.md`. План основан на `master` коммите `4550467` и проверке Cloudflare/GitHub 25 ноября 2026 года.

| Наблюдение | Следствие для реализации |
| --- | --- |
| React 18 + Vite 4; содержание в `src/Schemas/Data.js`, ключи `ocupation` и `proyects` | Сохранить структуру приложения, менять данные и минимально необходимые компоненты |
| `SEO.jsx` получает имя, occupation и description из общего объекта; исходный HTML содержит `lang="es"` и Vite + React | Согласовать динамические и исходные метаданные, выставить английский язык |
| Проекты идут после образования, без URL; React key берётся из необязательного company | Поднять продуктовые доказательства выше образования, добавить ссылки и стабильные ключи |
| Print CSS скрывает `.experience__content:nth-child(n+5)` и задаёт колонкам `height: 100vh` | T Plus сейчас не попадает в печать; убрать позиционное скрытие и ограничение высоты |
| В репозитории нет Wrangler и `src/worker.js`; `docs/` содержит старую сборку | Восстановить воспроизводимую конфигурацию действующего Worker, не использовать `docs/` как источник новой публикации |
| GitHub Pages: legacy, source `master:/docs`, CNAME `eugene.plus`; список Actions runs пуст | Не считать существование Pages доказательством текущего origin; не менять Pages в этом change |
| Cloudflare domains: `eugene.plus` и `www.eugene.plus` → `eugene-plus`, production, enabled | Обновлять существующий сервис и проверять оба домена |
| Активная версия `37e37d29-f284-4104-b652-f39e17ff6c73`, 100%, source `wrangler`, 06.11.2026 19:29 UTC | Использовать как исходную контрольную точку; перед реальным релизом снять актуальную |
| Worker fetch только вызывает `env.ASSETS.fetch(request)`; runtime assets: single-page-application, serve_directly=true, run_worker_first=false; compatibility_date=2026-11-06 | Перенести эквивалентную конфигурацию и handler без добавления бизнес-логики |
| workers.dev и previews выключены | Сохранить настройки; не включать новые публичные URL ради теста |
| Builds triggers API вернул 403 | Наличие Git-интеграции неизвестно; проверить состояние после push и не допустить конкурирующего деплоя |

## Goals / Non-Goals

**Goals:**
- Получить конкретный английский текст и проверяемые критерии, а не набор ключевых слов вакансии.
- Держать факты в Data.js, не создавать отдельные версии резюме для web, print и metadata.
- Связать commit SHA, собранные assets, Worker version ID и проверку production.

**Non-Goals:**
- Не добавлять SSR, CMS, автогенерацию резюме, AI API или новый frontend framework.
- Не превращать обзор в независимый аудит всех исторических метрик и не заявлять соответствие COPPA.
- Не менять архивные `docs/`, настройки Pages и историю работодателей ради косметической унификации.

## Decisions

### 1. Позиционирование и правила фактов

Выбран headline `CTO / Systems Architect`: это запрошенное профессиональное позиционирование, а не заявление о прежней формальной должности CTO. Альтернативы `Full-Stack Developer` и `System Architector` отклонены: первая не отражает цель, вторая не является естественным английским названием роли.

Использовать нижеследующую матрицу как редакционную опору:

| Требование Neybo | Доказательство | Правило формулировки |
| --- | --- | --- |
| Hands-on и опыт разработки | Исходное summary: 11+ years; Python/React/SQL, Cambridge; самостоятельный T Plus и LLM7 подтверждены пользователем | Сохранить консервативные 11+ years, не пересчитывать стаж автоматически по перекрывающимся периодам |
| Мобильная разработка | Пользователь самостоятельно сделал T Plus с нуля, iOS/Android, аудитория 50k; в L’Étual отвечал за развитие | T Plus — самостоятельное создание; L’Étual — развитие и руководство, без приписывания всего кода лично |
| Лидерство | L’Étual: 3 squads, 21 devs + QA; Gazprombank: 23 человека; CENTER 2M: 9 аналитиков, 300+ интервью | Различать разработчиков, QA и аналитиков; не превращать всех в прямых подчинённых инженеров |
| Безопасность | Cambridge: IAM, identity platform, onboarding, secure GCP stack | Подчеркнуть identity/access и безопасную архитектуру; не добавлять retention, deletion, encryption implementation или детские данные без подтверждения |
| AI/агенты | Личная постоянная multi-agent разработка, LLM7 сделан самостоятельно с агентами; MCP/LLM проекты в репозитории | Указать реальный рабочий метод; не переносить его на прошлые команды |
| Масштаб AI | Пользователь подтвердил нагрузку LLM7 до 28M+ токенов/мин | `peak throughput of 28M+ tokens per minute`; не среднее потребление, не SLA, не независимо сертифицированный benchmark |
| Product ownership | L’Étual — technical product owner и развитие продукта; собственный LLM7 | Приоритет результата и ownership; не выдумывать конкретные сроки MVP или процедуры сокращения scope |
| Stores, staged rollout, rollback, B2 | Точные личные обязанности и подтверждение уровня языка не предоставлены | Не заявлять эти пункты автоматически; они не блокируют правдивую редакцию резюме |

Пользователь прямо исключил T Plus store-ссылки из публикации из-за региональных ограничений. Не искать обход ограничений, не вставлять ссылки и не спрашивать об этом повторно. Cordova и Swift подтверждены как навыки, но их привязка к конкретному работодателю не установлена.

### 2. Английская редакционная основа

Следующие формулировки — рабочая основа реализации, допускающая небольшое сокращение для читаемости без изменения фактов.

**Headline:** `CTO / Systems Architect`

**Summary:**

> Hands-on technology leader and systems architect with 11+ years of engineering experience across mobile applications, enterprise platforms and AI products. Built iOS and Android applications from scratch for an internal audience of 50,000 at T Plus and led engineering teams delivering large-scale consumer e-commerce. Combine Python, React and TypeScript with mobile development skills in Cordova and Swift. Independently build and operate LLM7.io, a paid LLM API, using multi-agent development, with peak throughput of 28M+ tokens per minute. Bring technical product ownership, identity and access management experience, mentoring and hands-on delivery.

**Cambridge:** title `Senior Software Developer (UIS)`; содержание сфокусировать на identity platform, архитектуре и API/IAM; последний пункт заменить на:

> Mentored six DevOps hires and received the 2024 Contribution Reward for engineering impact.

**T Plus PJSC:**

> Independently built iOS and Android applications from the ground up for an internal audience of 50,000 employees.

Не добавлять backend-интеграции, SSO, публикацию через stores или этапы rollout только потому, что они типичны для такого приложения.

**LLM7.io:**

> Independently built and operate a paid, OpenAI-compatible LLM API platform using multi-agent development, with peak throughput of 28M+ tokens per minute.

В L’Étual приоритет первого пункта — ответственность за развитие consumer-платформы и мобильных приложений, далее архитектурная миграция и лидерство. Цифры исходного резюме сохранить, но связать рост скачиваний/рейтингов с периодом работы команды, не изображая их исключительно личной заслугой. Формальный title и даты оставить.

Навыки: поднять Python, React/TypeScript, Cordova, Swift, LLM/MCP и multi-agent development; затем cloud/infrastructure, API/data и quality tooling. Среди лидерских навыков использовать System architecture, Technical product ownership, Engineering leadership, Technical interviewing, Mentoring. Не добавлять стек из вакансии без основания.

### 3. Продуктовые ссылки и интерфейс

Добавить проектам отдельное необязательное поле `url` и при необходимости короткую подпись ссылки; не встраивать HTML в description. В `Proyects.jsx` отображать название как обычную доступную ссылку, если URL есть, иначе как текст. Для новой вкладки — noopener/noreferrer. `data-print` должен выводить полный понятный URL. Использовать `name` как стабильный ключ вместо необязательного company; удалить неиспользуемое destructuring company в затронутом компоненте.

Порядок блоков справа: Experience → Selected Products & Projects → Education. Сохранить существующие anchor IDs (`#proyects` и т. п.), чтобы не ломать меню. Испанские подписи меню и контактов перевести на английский. Альтернатива — полный redesign или переименование всех ошибочно написанных ключей — отклонена как ненужный риск.

Предварительный порядок проектов:

1. LLM7.io — главный пример самостоятельной AI-разработки, ссылка `https://llm7.io/`.
2. telegram-mcp — выпущенная MCP-интеграция для агентных клиентов; ссылка на документацию проекта допустима как open-source продукт, а не как замена consumer/mobile-продукту.
3. eknowledge — опубликованная библиотека LLM extraction; предпочтительна проверенная карточка PyPI `https://pypi.org/project/eknowledge/`.
4. Findora — не выводить как live demo без успешной повторной проверки: на этапе планирования fetch получил 502, локальный DNS не разрешил домен. Если проблема сохраняется, убрать из выбранных публичных примеров; историю репозитория не переписывать.

Проверка источников выявила, что заголовок LLM7 теперь описывает единый API и цены, поэтому старое утверждение `Free, anonymous ... no sign-up` не переносить без подтверждения. Не выводить цены или скидки в резюме. README telegram-mcp и eknowledge подтверждают назначение проектов; отдельные современные возможности telegram-mcp не приписывать пользователю лично только на основании общего README.

### 4. Metadata и печать

Оставить Data.js источником runtime headline/summary. В исходном `index.html` установить `lang="en"`, согласованные title/description. Это минимальное статическое дублирование проверить при приёмке; не подключать генератор или SSR ради двух полей.

Print CSS: убрать скрытие по `nth-child`, заменить фиксированную высоту колонок на естественный flow и проверить переносы блоков. Несколько читаемых страниц предпочтительнее искусственного сжатия до одной. Использовать локальные правила печати и `break-inside` там, где они не вызывают чрезмерных пустых страниц. В web сохранить light/dark и адаптивную сетку.

### 5. Конфигурация существующего Worker

Восстановить `src/worker.js` с текущим единственным поведением `env.ASSETS.fetch(request)`. Добавить `wrangler.jsonc`: имя eugene-plus, account ID, main, compatibility date 2026-11-06, `assets.directory: ./dist`, `assets.binding: ASSETS`, `assets.not_found_handling: single-page-application`, `assets.run_worker_first: false`, `workers_dev: false`, `preview_urls: false`. Custom domains описать эквивалентно существующим привязкам, без удаления/смены DNS. Перед применением перепроверить параметры на актуальной версии.

Добавить закреплённый локальный Wrangler как devDependency и обновить lockfile. Предлагаемые команды: `deploy` = build + wrangler deploy; `deploy:check` = build + wrangler deploy --dry-run. README описывает установку, авторизацию, проверки, ручной релиз и rollback. `.wrangler/`, временные отчёты, токены и env-файлы исключить из Git; не менять существующие правила шире необходимого. Деплоить только `dist/`, не корень репозитория или `docs/`.

Альтернатива asset-only Worker допустима технически, но отклонена для этого change: текущий handler известен и его сохранение уменьшает расхождения. Автоматический CI/CD не нужен. Runtime TypeSafe/Jev также не нужен: в этой задаче нет программируемого семантического выбора.

### 6. Проверки и объём тестирования

В начале apply снять lint baseline после `npm ci`: тестового script сейчас нет, lint охватывает также старую сборку docs и может иметь существующие ошибки. Не маскировать их отключением правил; исправить ошибки изменённых файлов и отдельно описать несвязанные прежние проблемы. Не заводить unit-тесты, которые просто дублируют текст резюме.

Приёмка: production build; целевая проверка всех обязательных формулировок и удаления pushes/MRs; ссылки; браузер 375 px и desktop 1280 px; светлая/тёмная тема; A4 print preview/PDF с просмотром всех страниц, T Plus и URL проектов. Проверить исходный HTML и runtime metadata. Затем dry run Wrangler. Перечень требований в двух spec-файлах — чеклист приёмки.

## Risks / Trade-offs

- [Неподтверждённые store/release, COPPA, B2 и подробности lifecycle данных] → не обещать соответствие этим пунктам; оставить в итоговом отчёте как ограничения резюме.
- [Резюме раздуется из-за новых достижений] → 1–3 содержательных пункта на релевантное место, более ранние роли компактно; печатная версия может быть многостраничной.
- [Перекрывающиеся периоды Gazprombank/CENTER 2M уже есть в данных] → не менять даты и не складывать автоматически годы лидерства; уточнение возможно отдельно.
- [Findora недоступен; eugene.plus и LLM7 вернули 403 для Python HTTP-клиента] → browser-проверка на apply; отказ боту не объявлять падением сайта.
- [Build triggers недоступны текущему OAuth] → не расширять права и не менять интеграцию; проверить active version после push и до ручного deploy. При обнаружении конкурирующей публикации остановить только шаг релиза и установить её источник.
- [Production новее Git: Worker создан в ноябре 2026, репозиторий не менялся с октября 2025] → во время apply сопоставить видимое live-резюме с Data.js и сохранить актуальные подтверждённые правки; не затирать их слепо старой сборкой. При существенном конфликте обсудить конкретное расхождение.

## Migration Plan

1. После отдельного запроса apply обновить сведения о `origin/master`, проверить рабочее дерево и зафиксировать активную Worker version, domains и settings; сравнить live-содержание с исходником.
2. Реализовать текст, проектовые ссылки, английские подписи, metadata и print; перенести минимальную конфигурацию Worker и документацию.
3. Выполнить проверки из раздела 6 и сверить обе спецификации. Подготовить SHA-ориентированный отчёт релиза без credentials.
4. Stage всех предназначенных изменений, включая OpenSpec; conventional commit (например `feat: tailor resume for hands-on CTO roles`); push в `origin/master` без force. Проверить удалённый SHA.
5. Убедиться, что push не запустил конкурирующее обновление. Из чистого checkout этой ревизии собрать и вручную опубликовать Worker, зафиксировать version ID и активные 100% трафика.
6. Проверить `https://eugene.plus/` и `https://www.eugene.plus/`, текст, assets и metadata. Передать пользователю commit, version, результаты и ограничения.
7. При подтверждённой регрессии вернуть сохранённую перед релизом версию через Wrangler rollback и проверить оба домена. Состояние задач и отчёт не должны называть неудачный релиз успешным. Если после релиза меняются отслеживаемые planning/checklist файлы, финализировать отдельным conventional commit и push; не оставлять предназначенные изменения незапушенными.

## Open Questions

- Конкретные обязанности в store-релизах/rollout/rollback, B2 и lifecycle данных можно добавить позже после подтверждения. Текущий план использует безопасное опущение, поэтому ответы не требуются для его реализации.
- Ссылки T Plus исключены окончательно для этого change по указанию пользователя. Это решённый вопрос, не блокер.

## References

- [Исходное резюме](https://github.com/chigwell/eugene.plus/blob/4550467/src/Schemas/Data.js).
- [LLM7.io](https://llm7.io/) — заголовок получен веб-инструментом; полная browser-проверка ещё нужна.
- [telegram-mcp](https://github.com/chigwell/telegram-mcp/blob/main/README.md) и [eknowledge](https://github.com/chigwell/eknowledge/blob/main/README.md) — назначение выпущенных проектов.
- [Cloudflare: Worker domains](https://developers.cloudflare.com/api/resources/workers/subresources/domains/methods/list/) и [Build triggers](https://developers.cloudflare.com/api/resources/workers_builds/subresources/triggers/methods/list/).
- Сведения об ownership T Plus, multi-agent разработке и нагрузке LLM7 — прямое уточнение пользователя в этом чате от 25.11.2026; независимое измерение нагрузки не проводилось.

### Уточнения при реализации

Пользователь подтвердил 25.11.2026, что LLM7 теперь полностью платный: актуальные summary и описание проекта используют paid LLM API, без free/anonymous/no-sign-up обещаний. Сравнение production выявило дополнительные сведения о Global Talent/ILR, Research & Academic Service, SkillDock и PDF-действие; они сохраняются при восстановлении паритета с live-сайтом согласно задаче 1.2.
