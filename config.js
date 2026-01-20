// config.js
const DAMI_CONFIG = {
    // قائمة بالخوادم البديلة
    servers: [
        {
            name: "Server 1",
            http: "http://bouygues-cdn.r1v.us:8080/",
            https: "https://bouygues-cdn.r1v.us:8080//",
            active: true
        },
        {
            name: "Server 2",
            http: "http://backup1.99gopro.org:8080",
            https: "https://backup1.99gopro.org:8080",
            active: false
        }
    ],
    
    // إعدادات المستخدم
    credentials: {
        username: "Soufianebennay",
        password: "c8:12:0b:12:f1:fd",
        expires: "2029-12-31"
    },
    
    // إعدادات المشغل
    player: {
        defaultQuality: "auto",
        bufferSize: 30,
        maxRetries: 3,
        timeout: 10000
    },
    
    // القوالب
    templates: {
        channel: `
            <div class="channel-card">
                <img src="{IMAGE}" alt="{TITLE}">
                <div class="channel-info">
                    <h3>{TITLE}</h3>
                    <p>{DESCRIPTION}</p>
                </div>
            </div>
        `,
        movie: `
            <div class="movie-card">
                <div class="movie-poster">
                    <img src="{POSTER}" alt="{TITLE}">
                    <div class="movie-overlay">
                        <button onclick="playMedia('{ID}')">
                            <i class="fas fa-play"></i>
                        </button>
                    </div>
                </div>
                <div class="movie-details">
                    <h3>{TITLE}</h3>
                    <div class="movie-meta">
                        <span>{YEAR}</span>
                        <span>{DURATION}</span>
                        <span>{RATING}</span>
                    </div>
                </div>
            </div>
        `
    }
};

// تصدير التكوين
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DAMI_CONFIG;
}
