// Данные для психологов (подробная информация)
const psychologistsData = {
    'olga': {
        name: 'Копылова Ольга Викторовна',
        spec: 'Клинический психолог',
        exp: '12 лет',
        edu: 'МГУ им. Ломоносова, факультет психологии, кандидат психологических наук',
        desc: 'Ольга Викторовна — опытный клинический психолог, специализирующийся на работе с тревожными расстройствами, депрессией и кризисными состояниями. В своей практике использует научно-обоснованные методы психотерапии, регулярно повышает квалификацию и участвует в профессиональных конференциях.',
        issues: 'Тревожные расстройства, депрессия, панические атаки, стресс, эмоциональное выгорание, кризисные состояния, проблемы самооценки',
        methods: 'Когнитивно-поведенческая терапия (КПТ), экзистенциальный подход, терапия принятия и ответственности (ACT), майндфулнес',
        price: 'Индивидуальная консультация: 3 500₽/50 мин, Пробная консультация: 0₽/20 мин'
    },
    'anna': {
        name: 'Миронова Анна Сергеевна',
        spec: 'Семейный психолог',
        exp: '8 лет',
        edu: 'СПбГУ, факультет психологии, магистр психологии, сертифицированный специалист по системной семейной терапии',
        desc: 'Анна Сергеевна помогает парам и семьям находить общий язык, преодолевать кризисы и строить гармоничные отношения. Специализируется на детско-родительских отношениях и подготовке к родительству.',
        issues: 'Семейные конфликты, супружеские кризисы, детско-родительские отношения, измены, развод, подготовка к браку, трудности в отношениях с подростками',
        methods: 'Системная семейная терапия, нарративный подход, эмоционально-фокусированная терапия (EFT)',
        price: 'Семейная консультация: 4 000₽/60 мин, Индивидуальная консультация: 3 500₽/50 мин'
    },
    'dmitry': {
        name: 'Соколов Дмитрий Александрович',
        spec: 'КПТ-терапевт',
        exp: '10 лет',
        edu: 'НИУ ВШЭ, магистр клинической психологии, сертификат Международной ассоциации когнитивно-поведенческой терапии',
        desc: 'Дмитрий Александрович специализируется на краткосрочной терапии, ориентированной на результат. Помогает клиентам быстро справиться с конкретными симптомами и выработать новые продуктивные стратегии поведения.',
        issues: 'Фобии, панические атаки, социальная тревожность, обсессивно-компульсивное расстройство (ОКР), генерализованное тревожное расстройство, перфекционизм, прокрастинация',
        methods: 'Когнитивно-поведенческая терапия (КПТ), терапия принятия и ответственности (ACT), метакогнитивная терапия',
        price: 'Индивидуальная консультация: 3 500₽/50 мин'
    },
    'elena': {
        name: 'Петрова Елена Андреевна',
        spec: 'Детский психолог',
        exp: '7 лет',
        edu: 'МГППУ, факультет психологии образования, магистр психологии, сертифицированный специалист по игровой терапии',
        desc: 'Елена Андреевна создаёт безопасное пространство для детей, где они могут выразить свои чувства и справиться с трудностями через естественную для них деятельность — игру. Работает в тесном контакте с родителями.',
        issues: 'Детские страхи и тревожность, адаптация к детскому саду и школе, трудности в обучении, подростковые кризисы, агрессивное поведение, замкнутость, СДВГ, проблемы с самооценкой у детей и подростков',
        methods: 'Игровая терапия, арт-терапия, песочная терапия, когнитивно-поведенческая терапия для детей, сказкотерапия',
        price: 'Детская консультация: 3 500₽/50 мин, Консультация для родителей: 3 500₽/50 мин'
    },
    'irina': {
        name: 'Волкова Ирина Сергеевна',
        spec: 'Нейропсихолог',
        exp: '9 лет',
        edu: 'МГУ им. Ломоносова, факультет психологии, кандидат биологических наук, сертифицированный специалист по нейропсихологической диагностике и коррекции',
        desc: 'Ирина Сергеевна проводит глубокую нейропсихологическую диагностику и коррекцию когнитивных нарушений. Помогает восстановить память, внимание и другие психические функции после травм, стрессов и возрастных изменений.',
        issues: 'Нарушения памяти и внимания, снижение когнитивных функций, последствия черепно-мозговых травм, посттравматические стрессовые расстройства (ПТСР), возрастные изменения когнитивных функций, трудности в обучении, связанные с работой мозга',
        methods: 'Нейропсихологическая диагностика, когнитивная реабилитация, метод замещающего онтогенеза, телесно-ориентированные техники, нейрогимнастика',
        price: 'Нейропсихологическая диагностика: 4 500₽/90 мин, Коррекционные занятия: 4 000₽/60 мин'
    },
    'alexander': {
        name: 'Кузнецов Александр Викторович',
        spec: 'Кризисный психолог',
        exp: '11 лет',
        edu: 'СПбГУ, факультет психологии, доктор психологических наук, сертифицированный специалист по кризисной интервенции и травматерапии',
        desc: 'Александр Викторович специализируется на работе с острыми кризисными состояниями и психологическими травмами. Помогает клиентам пережить тяжёлые жизненные события и вернуться к полноценной жизни.',
        issues: 'Острые кризисные состояния, посттравматическое стрессовое расстройство (ПТСР), переживание горя и утраты, суицидальные мысли, последствия насилия, профессиональное выгорание, экзистенциальные кризисы',
        methods: 'EMDR (десенсибилизация и переработка движением глаз), кризисная интервенция, терапия принятия и ответственности (ACT), экзистенциальная терапия',
        price: 'Индивидуальная консультация: 4 000₽/50 мин'
    }
};

// Данные для слотов времени по психологам
const psychologistSchedules = {
    'olga': [
        { day: 'Сегодня, 14 февраля', slots: ['10:00', '12:00', '15:00', '17:00'] },
        { day: 'Завтра, 15 февраля', slots: ['11:00', '14:00', '16:00', '18:00'] },
        { day: 'Пн, 17 февраля', slots: ['10:00', '13:00', '15:00', '17:00'] }
    ],
    'anna': [
        { day: 'Сегодня, 14 февраля', slots: ['16:00', '17:00', '18:00', '19:00'] },
        { day: 'Завтра, 15 февраля', slots: ['15:00', '17:00', '18:00', '20:00'] },
        { day: 'Ср, 19 февраля', slots: ['16:00', '17:00', '18:00', '19:00'] }
    ],
    'dmitry': [
        { day: 'Сегодня, 14 февраля', slots: ['09:00', '11:00', '13:00', '14:00'] },
        { day: 'Завтра, 15 февраля', slots: ['10:00', '12:00', '13:00', '15:00'] },
        { day: 'Чт, 20 февраля', slots: ['09:00', '11:00', '12:00', '14:00'] }
    ],
    'elena': [
        { day: 'Ср, 19 февраля', slots: ['10:00', '11:00', '15:00', '16:00'] },
        { day: 'Пт, 21 февраля', slots: ['10:00', '12:00', '14:00', '17:00'] },
        { day: 'Ср, 26 февраля', slots: ['11:00', '13:00', '15:00', '16:00'] }
    ],
    'irina': [
        { day: 'Вт, 18 февраля', slots: ['12:00', '14:00', '16:00', '18:00'] },
        { day: 'Чт, 20 февраля', slots: ['11:00', '13:00', '15:00', '17:00'] },
        { day: 'Вт, 25 февраля', slots: ['12:00', '14:00', '16:00', '18:00'] }
    ],
    'alexander': [
        { day: 'Пн, 17 февраля', slots: ['10:00', '13:00', '16:00', '18:00'] },
        { day: 'Ср, 19 февраля', slots: ['11:00', '14:00', '17:00', '19:00'] },
        { day: 'Пт, 21 февраля', slots: ['10:00', '12:00', '15:00', '17:00'] }
    ]
};

// Данные для видеоуроков
const videoLessons = {
    1: {
        title: 'Что такое медитация?',
        duration: '5:24',
        description: 'В этом уроке вы узнаете, что такое медитация на самом деле, развеете распространённые мифы и поймёте, почему она полезна для психического здоровья.',
        videoUrl: 'https://www.youtube.com/embed/5l3wIcgG8Yg'
    },
    2: {
        title: 'Дыхание как якорь',
        duration: '6:12',
        description: 'Техника наблюдения за дыханием — основа любой медитативной практики. Научитесь использовать дыхание как якорь, который возвращает вас в настоящий момент.',
        videoUrl: 'https://www.youtube.com/embed/8Qq6KIi4O-Q'
    },
    3: {
        title: 'Сканирование тела',
        duration: '7:30',
        description: 'Практика сканирования тела помогает снять телесные зажимы, осознать связь между телом и эмоциями, научиться расслабляться глубоко и эффективно.',
        videoUrl: 'https://www.youtube.com/embed/Gch5O5LrU48'
    },
    4: {
        title: 'Работа с мыслями',
        duration: '8:15',
        description: 'Как не отвлекаться во время медитации? Как относиться к мыслям, которые приходят в голову? Этот урок научит вас работать с умом, а не бороться с ним.',
        videoUrl: 'https://www.youtube.com/embed/HXaRsLkD5F8'
    },
    5: {
        title: 'Медитация в движении',
        duration: '6:45',
        description: 'Медитировать можно не только сидя. Осознанная ходьба — отличный способ интегрировать практику в повседневную жизнь и успокоить ум в движении.',
        videoUrl: 'https://www.youtube.com/embed/KpJ6N5iM1lM'
    },
    6: {
        title: 'Медитация доброты',
        duration: '7:50',
        description: 'Медитация доброты (метта) развивает сострадание к себе и другим, помогает справиться с гневом и обидой, улучшает отношения с окружающими.',
        videoUrl: 'https://www.youtube.com/embed/szFcpVvD2uE'
    },
    7: {
        title: 'Интеграция в жизнь',
        duration: '8:30',
        description: 'Как сохранить практику после завершения курса? Как сделать медитацию частью повседневной жизни? Практические советы и рекомендации.',
        videoUrl: 'https://www.youtube.com/embed/2qTtTnU3lZs'
    }
};

// Переменные
let currentLesson = null;
let completedLessons = JSON.parse(localStorage.getItem('completedLessons')) || [];
let completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
let selectedPsychFromModal = null;

// Функции для ресурсов
window.openResource = function(type) {
    document.getElementById('resourcesGrid').style.display = 'none';
    if (type === 'article') {
        document.getElementById('articlePage').style.display = 'block';
    } else if (type === 'video') {
        document.getElementById('videoPage').style.display = 'block';
    } else if (type === 'workshop') {
        document.getElementById('workshopPage').style.display = 'block';
    }
};

window.closeResource = function() {
    document.getElementById('resourcesGrid').style.display = 'grid';
    document.getElementById('articlePage').style.display = 'none';
    document.getElementById('videoPage').style.display = 'none';
    document.getElementById('workshopPage').style.display = 'none';
};

// Функции для видеокурса
function updateVideoProgress() {
    const progress = (completedLessons.length / 7) * 100;
    const progressBar = document.getElementById('videoProgress');
    if (progressBar) progressBar.style.width = progress + '%';
    
    document.querySelectorAll('.video-lesson').forEach(lesson => {
        const lessonNum = lesson.getAttribute('data-lesson');
        if (completedLessons.includes(parseInt(lessonNum))) {
            lesson.style.opacity = '0.6';
        } else {
            lesson.style.opacity = '1';
        }
    });
}

function markLessonComplete(lessonNum) {
    if (!completedLessons.includes(lessonNum)) {
        completedLessons.push(lessonNum);
        localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
        updateVideoProgress();
    }
}

// Функции для видео плеера
window.openVideo = function(lessonNum, title, duration) {
    currentLesson = lessonNum;
    const lesson = videoLessons[lessonNum];
    
    document.getElementById('videoModalTitle').textContent = `Урок ${lessonNum}: ${lesson.title}`;
    document.getElementById('videoFrame').src = lesson.videoUrl;
    document.getElementById('videoDescriptionText').textContent = lesson.description;
    
    document.getElementById('videoModal').classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.markCurrentLessonWatched = function() {
    if (currentLesson) {
        markLessonComplete(currentLesson);
        alert(`Урок ${currentLesson} отмечен как просмотренный!`);
    }
};

// Функции для практикума
function updateWorkshopProgress() {
    const progress = (completedTasks.length / 14) * 100;
    const progressBar = document.getElementById('workshopProgress');
    if (progressBar) progressBar.style.width = progress + '%';
    
    document.querySelectorAll('.task-item').forEach(task => {
        const taskNum = task.getAttribute('data-task');
        const checkbox = task.querySelector('input[type="checkbox"]');
        if (completedTasks.includes(parseInt(taskNum))) {
            if (checkbox) checkbox.checked = true;
            task.classList.add('completed');
        } else {
            if (checkbox) checkbox.checked = false;
            task.classList.remove('completed');
        }
    });
}

window.toggleTask = function(taskNum) {
    const index = completedTasks.indexOf(taskNum);
    if (index === -1) {
        completedTasks.push(taskNum);
    } else {
        completedTasks.splice(index, 1);
    }
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
    updateWorkshopProgress();
};

// Функция для переключения полей контакта
window.toggleContactField = function() {
    const phoneField = document.getElementById('phoneField');
    const emailField = document.getElementById('emailField');
    const phoneRadio = document.querySelector('input[name="contactMethod"][value="phone"]');
    const emailRadio = document.querySelector('input[name="contactMethod"][value="email"]');
    
    if (phoneRadio && phoneRadio.checked) {
        if (phoneField) phoneField.classList.add('active');
        if (emailField) emailField.classList.remove('active');
        if (phoneField && phoneField.querySelector('input')) phoneField.querySelector('input').required = true;
        if (emailField && emailField.querySelector('input')) emailField.querySelector('input').required = false;
    } else if (emailRadio) {
        if (emailField) emailField.classList.add('active');
        if (phoneField) phoneField.classList.remove('active');
        if (emailField && emailField.querySelector('input')) emailField.querySelector('input').required = true;
        if (phoneField && phoneField.querySelector('input')) phoneField.querySelector('input').required = false;
    }
};

// Функция обновления слотов времени
function updateTimeSlots(psychologist) {
    const timeSlotsContainer = document.getElementById('psychologistTimeSlots');
    if (!timeSlotsContainer) return;
    
    if (!psychologist || psychologist === '') {
        timeSlotsContainer.innerHTML = '<p style="color:var(--gray);">Выберите специалиста, чтобы увидеть свободное время</p>';
        return;
    }
    
    const schedule = psychologistSchedules[psychologist] || [];
    if (schedule.length === 0) {
        timeSlotsContainer.innerHTML = '<p style="color:var(--gray);">Нет свободных слотов на ближайшие дни</p>';
        return;
    }
    
    let html = '';
    schedule.forEach(day => {
        html += `<div class="time-slot-day">${day.day}</div>`;
        html += '<div class="time-slots">';
        day.slots.forEach(slot => {
            html += `<span class="time-slot">${slot}</span>`;
        });
        html += '</div>';
    });
    
    timeSlotsContainer.innerHTML = html;
    
    // Обработка клика по слотам
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.addEventListener('click', function() {
            document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}

// Функция открытия модалки
function openBookingModal(psychologist = null, plan = null) {
    const modalTitle = document.getElementById('modalTitle');
    const modalPsychologistSelect = document.getElementById('modalPsychologist');
    
    if (psychologist && modalPsychologistSelect) {
        modalPsychologistSelect.value = psychologist;
        const psychNames = {
            'olga': 'Ольги',
            'anna': 'Анны',
            'dmitry': 'Дмитрия',
            'elena': 'Елены',
            'irina': 'Ирины',
            'alexander': 'Александра'
        };
        if (modalTitle) modalTitle.textContent = `Запись к ${psychNames[psychologist] || 'специалисту'}`;
    } else if (plan && document.getElementById('modalPlan')) {
        document.getElementById('modalPlan').value = plan;
        const planNames = {
            'free': 'на пробную консультацию',
            'individual': 'на индивидуальную терапию',
            'group': 'в групповую терапию',
            'diagnostics': 'на диагностику'
        };
        if (modalTitle) modalTitle.textContent = `Запись ${planNames[plan]}`;
    } else {
        if (modalTitle) modalTitle.textContent = 'Запись на консультацию';
    }
    
    // Сбрасываем выбор времени
    const laterRadio = document.querySelector('input[name="timeOption"][value="later"]');
    if (laterRadio) laterRadio.checked = true;
    const specificTimeBlock = document.getElementById('specificTimeBlock');
    if (specificTimeBlock) specificTimeBlock.style.display = 'none';
    
    const bookingModal = document.getElementById('bookingModal');
    if (bookingModal) {
        bookingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация прогресса
    updateVideoProgress();
    updateWorkshopProgress();
    
    // Шапка при скролле
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (header) header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Активное меню
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Выбор тарифа (зелёная обводка)
    document.querySelectorAll('.pricing-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.classList.contains('btn') || e.target.closest('.btn')) return;
            
            document.querySelectorAll('.pricing-card').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Слайдер психологов
    const psychSlider = document.getElementById('psychSlider');
    const psychPrev = document.getElementById('psychPrev');
    const psychNext = document.getElementById('psychNext');
    const psychIndicators = document.querySelectorAll('#psychIndicators .slider-indicator');
    const psychCards = document.querySelectorAll('.psychologist-card');
    
    let currentPsychSlide = 0;
    const cardWidth = 284;
    
    function updatePsychSlide(index) {
        if (index < 0) index = 0;
        if (index > psychCards.length - 1) index = psychCards.length - 1;
        
        if (psychSlider) {
            psychSlider.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            });
        }
        
        psychIndicators.forEach((ind, i) => {
            if (i === index) ind.classList.add('active');
            else ind.classList.remove('active');
        });
        
        currentPsychSlide = index;
    }
    
    if (psychPrev) {
        psychPrev.addEventListener('click', () => updatePsychSlide(currentPsychSlide - 1));
    }
    if (psychNext) {
        psychNext.addEventListener('click', () => updatePsychSlide(currentPsychSlide + 1));
    }
    
    psychIndicators.forEach((ind, index) => {
        ind.addEventListener('click', () => updatePsychSlide(index));
    });
    
    // Открытие подробной информации о психологе при клике на карточку
    document.querySelectorAll('.psychologist-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.classList.contains('btn') || e.target.closest('.btn')) return;
            
            const psych = this.getAttribute('data-psychologist');
            const data = psychologistsData[psych];
            
            if (data) {
                document.getElementById('psychologistDetailName').textContent = data.name;
                const avatarImg = this.querySelector('.psychologist-avatar img');
                if (avatarImg) {
                    document.getElementById('psychologistDetailAvatar').src = avatarImg.src;
                }
                document.getElementById('psychologistDetailSpec').textContent = data.spec;
                document.getElementById('psychologistDetailExp').textContent = data.exp;
                document.getElementById('psychologistDetailEdu').textContent = data.edu;
                document.getElementById('psychologistDetailDesc').textContent = data.desc;
                document.getElementById('psychologistDetailIssues').textContent = data.issues;
                document.getElementById('psychologistDetailMethods').textContent = data.methods;
                document.getElementById('psychologistDetailPrice').textContent = data.price;
                document.getElementById('selectFromDetailBtn').setAttribute('data-psych', psych);
                
                document.getElementById('psychologistDetailModal').classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Закрытие модалок
    const modals = {
        psychologistDetailModal: document.getElementById('psychologistDetailModal'),
        allPsychologistsModal: document.getElementById('allPsychologistsModal'),
        bookingModal: document.getElementById('bookingModal'),
        videoModal: document.getElementById('videoModal'),
        privacyModal: document.getElementById('privacyModal'),
        offerModal: document.getElementById('offerModal'),
        licensesModal: document.getElementById('licensesModal'),
        paymentModal: document.getElementById('paymentModal')
    };
    
    function closeModal(modalId) {
        const modal = modals[modalId];
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            const videoFrame = document.getElementById('videoFrame');
            if (videoFrame && modalId === 'videoModal') videoFrame.src = '';
        }
    }
    
    // Кнопки закрытия
    const closeButtons = document.querySelectorAll('.modal-close');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal-overlay');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
                const videoFrame = document.getElementById('videoFrame');
                if (videoFrame && modal.id === 'videoModal') videoFrame.src = '';
            }
        });
    });
    
    // Клик по оверлею
    Object.values(modals).forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                    const videoFrame = document.getElementById('videoFrame');
                    if (videoFrame && modal.id === 'videoModal') videoFrame.src = '';
                }
            });
        }
    });
    
    // Модалка всех психологов
    const showAllBtn = document.getElementById('showAllPsychologistsBtn');
    if (showAllBtn) {
        showAllBtn.addEventListener('click', () => {
            modals.allPsychologistsModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Выбор психолога в модалке всех психологов
    const psychModalCards = document.querySelectorAll('.psychologist-modal-card');
    psychModalCards.forEach(card => {
        card.addEventListener('click', function() {
            psychModalCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            selectedPsychFromModal = this.getAttribute('data-psych');
        });
    });
    
    const selectFromModalBtn = document.getElementById('selectPsychologistFromModal');
    if (selectFromModalBtn) {
        selectFromModalBtn.addEventListener('click', () => {
            if (selectedPsychFromModal && document.getElementById('modalPsychologist')) {
                document.getElementById('modalPsychologist').value = selectedPsychFromModal;
                modals.allPsychologistsModal.classList.remove('active');
                openBookingModal(selectedPsychFromModal, null);
            } else {
                alert('Пожалуйста, выберите психолога');
            }
        });
    }
    
    // Выбор психолога из детальной модалки
    const selectFromDetailBtn = document.getElementById('selectFromDetailBtn');
    if (selectFromDetailBtn) {
        selectFromDetailBtn.addEventListener('click', function() {
            const psych = this.getAttribute('data-psych');
            if (psych) {
                document.getElementById('modalPsychologist').value = psych;
                modals.psychologistDetailModal.classList.remove('active');
                openBookingModal(psych, null);
            }
        });
    }
    
    // Кнопки в тарифах
    document.querySelectorAll('.btn-plan-select').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const plan = btn.getAttribute('data-plan');
            openBookingModal(null, plan);
        });
    });
    
    // Кнопки у психологов
    document.querySelectorAll('.btn-psychologist').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const psych = btn.getAttribute('data-psychologist');
            openBookingModal(psych, null);
        });
    });
    
    // Кнопка в герое
    const heroBtn = document.getElementById('heroBookingBtn');
    if (heroBtn) {
        heroBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openBookingModal();
        });
    }
    
    // Обработка выбора времени в форме
    const timeRadios = document.querySelectorAll('input[name="timeOption"]');
    const specificTimeBlock = document.getElementById('specificTimeBlock');
    const modalPsychologistSelect = document.getElementById('modalPsychologist');
    
    if (modalPsychologistSelect) {
        modalPsychologistSelect.addEventListener('change', function() {
            updateTimeSlots(this.value);
        });
    }
    
    timeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (specificTimeBlock) {
                if (this.value === 'specific') {
                    specificTimeBlock.style.display = 'block';
                    if (modalPsychologistSelect) {
                        updateTimeSlots(modalPsychologistSelect.value);
                    }
                } else {
                    specificTimeBlock.style.display = 'none';
                }
            }
        });
    });
    
    // Отправка формы
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const timeOption = document.querySelector('input[name="timeOption"]:checked')?.value || 'later';
            let timeMessage = '';
            
            if (timeOption === 'later') {
                timeMessage = ' Администратор свяжется для выбора времени.';
            } else {
                const selectedSlot = document.querySelector('.time-slot.selected');
                if (selectedSlot) {
                    timeMessage = ` Выбрано время: ${selectedSlot.textContent}.`;
                }
            }
            
            alert('Спасибо! Заявка отправлена.' + timeMessage);
            
            if (modals.bookingModal) {
                modals.bookingModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Модалки документов
    const docModals = {
        privacy: document.getElementById('privacyModal'),
        offer: document.getElementById('offerModal'),
        licenses: document.getElementById('licensesModal'),
        payment: document.getElementById('paymentModal')
    };
    
    document.querySelectorAll('[data-modal]').forEach(btn => {
        btn.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            if (docModals[modalId]) {
                docModals[modalId].classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // FAQ
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const item = this.parentElement;
            const answer = item.querySelector('.faq-answer');
            const icon = this.querySelector('i');
            
            if (item.classList.contains('active')) {
                if (answer) answer.style.maxHeight = '0';
                if (icon) icon.style.transform = 'rotate(0deg)';
                item.classList.remove('active');
            } else {
                if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
                if (icon) icon.style.transform = 'rotate(180deg)';
                item.classList.add('active');
            }
        });
    });
    
    // Слайдер отзывов
    const reviewsSlider = document.getElementById('reviewsSlider');
    const reviewsPrev = document.getElementById('reviewsPrev');
    const reviewsNext = document.getElementById('reviewsNext');
    
    if (reviewsPrev && reviewsNext && reviewsSlider) {
        reviewsPrev.addEventListener('click', () => {
            reviewsSlider.scrollBy({ left: -324, behavior: 'smooth' });
        });
        
        reviewsNext.addEventListener('click', () => {
            reviewsSlider.scrollBy({ left: 324, behavior: 'smooth' });
        });
    }
    
    // Плавная прокрутка для якорей
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Инициализация полей контакта
    toggleContactField();
});