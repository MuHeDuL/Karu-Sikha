/**
 * Karu Shikha Youth Development Society - Application Controller
 * কারু শিখা যুব উন্নয়ন সোসাইটি (প্রতিষ্ঠিত: ৩১ জানুয়ারি ২০১৯)
 * Official Facebook: https://www.facebook.com/p/Karu-Shikha-Youth-Development-Society-61560289663754/
 */

const translations = {
    bn: {
        brand_name: "কারু শিখা",
        brand_subtitle: "ইয়ুথ ডেভেলপমেন্ট সোসাইটি",
        nav_about: "আমাদের কথা",
        nav_projects: "প্রকল্পসমূহ",
        nav_activities: "কার্যক্রম (৬৭টি)",
        nav_committee: "কার্যনির্বাহী পরিষদ",
        nav_gallery: "ফটো গ্যালারি",
        nav_contact: "ঠিকানা ও যোগাযোগ",
        nav_future: "ভবিষ্যৎ পরিকল্পনা",
        nav_volunteer: "ভলান্টিয়ার হোন",
        nav_donate: "অনুদান দিন",
        
        hero_tag: "প্রতিষ্ঠিত: ৩১ জানুয়ারি ২০১৯ • ফরিদপুর, বাংলাদেশ",
        hero_title_1: "দক্ষতা, সমতা ও মানবিকতায়",
        hero_title_highlight: "প্রদীপ্ত আগামীর রূপরেখা",
        hero_desc: "২০১৯ সাল থেকে যুব উন্নয়ন, নারী ক্ষমতায়ন, সুবিধাবঞ্চিত শিশু শিক্ষা, স্বাস্থ্যসেবা, পরিবেশ সংরক্ষণ এবং উদ্যোক্তা সৃষ্টিতে অবিচল এক সামাজিক আলোকযাত্রা।",
        hero_btn_explore: "চলমান প্রকল্প ও কার্যক্রম",
        hero_btn_volunteer: "আমাদের সাথে যুক্ত হোন",
        
        stat_years: "বছরের গৌরবোজ্জ্বল পথচলা",
        stat_activities: "বাস্তব কার্যক্রম ও স্বীকৃতি",
        stat_trees: "বৃক্ষরোপণ ও ক্লাইমেট অ্যাকশন",
        stat_women: "নারী ও যুব উদ্যোক্তা বিকাশ",

        shape_logo: "🏷️ ৩ডি লোগো",
        shape_shikha: "🔥 প্রদীপ্ত শিখা",
        shape_hands: "🤲 ঐক্যের হাত",
        shape_heart: "💖 রক্তদান ও মানবতা",

        about_tag: "প্রাতিষ্ঠানিক পরিচয়",
        about_title: "কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটি",
        
        activities_tag: "মাঠপর্যায়ের সমৃদ্ধ অভিজ্ঞতা",
        activities_title: "কারু শিখার কার্যক্রমসমূহ (৬৭টি মাইলফলক)",
        activities_desc: "২০১৯ সাল থেকে শুরু করে আমাদের অর্জিত ৬৭টি সুনির্দিষ্ট বাস্তব কার্যক্রম, যৌথ পার্টনারশিপ, ক্যাম্পেইন ও সামাজিক অর্জনসমূহ এক্সপ্লোর করুন।",
        activities_search_placeholder: "কার্যক্রম খুঁজুন (যেমন: ক্লাইমেট, রক্তদান, WaterAid, হ্যান্ড পেইন্ট, সমতায় তারুণ্য...)",

        gallery_tag: "বাস্তব কার্যক্রমের স্থিরচিত্র",
        gallery_title: "আমাদের মাঠপর্যায়ের ফটো গ্যালারি",
        gallery_desc: "কারু শিখার শিশু শিক্ষা, ক্লাইমেট অলিম্পিয়াড, স্যানিটারি ন্যাপকিন বিতরণ, হ্যান্ড পেইন্ট প্রশিক্ষণ ও নাগরিক আন্দোলনের বাস্তব মুহূর্তসমূহ।",

        volunteer_cta_title: "আপনিও হোন কারু শিখার সহযাত্রী",
        volunteer_cta_desc: "২০১৯ সাল থেকে শুরু হওয়া এই মানবকল্যাণ যাত্রায় অংশ নিন। আপনার একটি উদ্যোগ সমাজে স্থায়ী ইতিবাচক প্রভাব ফেলতে পারে।",
        btn_apply_volunteer: "ভলান্টিয়ার ফর্ম পূরণ করুন",

        footer_desc: "কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটি ২০১৯ সালের ৩১ জানুয়ারি প্রতিষ্ঠার পর থেকে যুব উন্নয়ন, নারী ক্ষমতায়ন, শিশু শিক্ষা, স্বাস্থ্যসেবা, পরিবেশ সংরক্ষণ ও উদ্যোক্তা উন্নয়নে নিবেদিত একটি অলাভজনক সামাজিক সংস্থা।",
        footer_rights: "© ২০২৬ কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটি। সর্বস্বত্ব সংরক্ষিত।"
    ,

        future_tag: "আমাদের আগামীর রোডম্যাপ",
        future_title: "ভবিষ্যৎ কর্মপরিকল্পনা ও টেকসই রূপরেখা",
        future_desc: "আমরা সরকারি-বেসরকারি প্রতিষ্ঠান ও উন্নয়ন সংস্থাগুলোর সঙ্গে অংশীদারত্ব জোরদার করে সমাজকল্যাণ কার্যক্রমকে আরও গতিশীল ও টেকসই করতে প্রতিশ্রুতিবদ্ধ।",
        f1_title: "শিশু শিক্ষা ও স্বাস্থ্যসেবা সম্প্রসারণ",
        f1_desc: "সুবিধাবঞ্চিত শিশুদের জন্য স্থায়ী লার্নিং সেন্টার ও নিয়মিত ফ্রি হেলথ ক্যাম্প বিস্তার।",
        f2_title: "যুব ও নারীদের কর্মসংস্থান সৃষ্টি",
        f2_desc: "হ্যান্ড পেইন্ট ও হস্তশিল্পের মাধ্যমে গ্রামীণ নারীদের উদ্যোক্তা হিসেবে গড়ে তোলা ও বাজার সংযোগ।",
        f3_title: "জলবায়ু সহিষ্ণু কৃষির প্রসার",
        f3_desc: "কৃষি উদ্যোক্তা তৈরি, আধুনিক চারা উৎপাদন ও নিরাপদ পুষ্টিকর খাদ্য সুরক্ষা।",
        f4_title: "সামাজিক সমতা ও অংশীদারত্ব",
        f4_desc: "জেন্ডার সমতা, ডিজিটাল নিরাপত্তা ও জাতীয়-আন্তর্জাতিক উন্নয়ন সংস্থার সাথে যৌথ কাজ।"},
    en: {
        brand_name: "Karu Shikha",
        brand_subtitle: "Youth Development Society",
        nav_about: "About Us",
        nav_projects: "Projects",
        nav_activities: "Activities (67)",
        nav_committee: "Executive Council",
        nav_gallery: "Photo Gallery",
        nav_contact: "Contact & Office",
        nav_future: "Future Vision",
        nav_volunteer: "Join Volunteer",
        nav_donate: "Support Us",
        
        hero_tag: "Established: January 31, 2019 • Faridpur, Bangladesh",
        hero_title_1: "Sparking Skills, Equality &",
        hero_title_highlight: "Humanitarian Progress",
        hero_desc: "Since 2019, dedicated to youth empowerment, women's rights, underprivileged child education, healthcare, climate action, and artisan entrepreneurship.",
        hero_btn_explore: "Explore Programs & Projects",
        hero_btn_volunteer: "Join Our Collective",
        
        stat_years: "Years of Community Impact",
        stat_activities: "Milestones & Key Activities",
        stat_trees: "Trees Planted & Climate Drives",
        stat_women: "Women & Youth Entrepreneurs",

        shape_logo: "🏷️ 3D Logo",
        shape_shikha: "🔥 Eternal Flame",
        shape_hands: "🤲 Hands of Unity",
        shape_heart: "💖 Compassion & Care",

        about_tag: "Organizational Identity",
        about_title: "Karu Shikha Youth Development Society",

        activities_tag: "Rich Field Legacy",
        activities_title: "Key Activities of Karu Shikha (67 Milestones)",
        activities_desc: "Explore all 67 on-ground grassroots initiatives, institutional partnerships, campaigns, and community milestones realized since 2019.",
        activities_search_placeholder: "Search activities (e.g. Climate, Blood, WaterAid, Hand Paint, Shomotay Tarunno...)",

        gallery_tag: "On-Ground Photographic Journey",
        gallery_title: "Official Field Photo Gallery",
        gallery_desc: "Witness our real grassroots impact across child mentoring, Climate Olympiad, sanitary napkin distribution, and artisan workshops.",

        volunteer_cta_title: "Become a Torchbearer of Karu Shikha",
        volunteer_cta_desc: "Join our community journey started in 2019. Your contribution of passion, skills, or resources sparks lasting generational change.",
        btn_apply_volunteer: "Submit Volunteer Application",

        footer_desc: "Karu Shikha Youth Development Society was established on January 31, 2019, dedicated to youth empowerment, women's equality, child education, healthcare, climate action, and artisan entrepreneurship.",
        footer_rights: "© 2026 Karu Shikha Youth Development Society. All rights reserved."
    ,

        future_tag: "Our Strategic Roadmap",
        future_title: "Future Vision & Sustainable Strategy",
        future_desc: "Committed to expanding partnerships with government, non-government, and international organizations to scale sustainable social development.",
        f1_title: "Child Education & Health Expansion",
        f1_desc: "Establishing permanent grassroots learning centers and continuous medical outreach for underprivileged children.",
        f2_title: "Youth & Women Economic Empowerment",
        f2_desc: "Handpaint and artisanal skill building, incubation, and market linkage for grassroots women entrepreneurs.",
        f3_title: "Climate-Resilient Agriculture",
        f3_desc: "Nurturing agricultural entrepreneurs, seedling innovation, and promoting sustainable organic nutrition.",
        f4_title: "Social Equity & Broad Partnerships",
        f4_desc: "Gender equality advocacy, digital child safety, and collaborative programs with national and global development bodies."}
};

let currentLang = 'bn';
let hero3DInstance = null;

// Activities state
let currentActivityFilter = 'all';
let activitySearchQuery = '';
let showAllActivities = false;
const INITIAL_VISIBLE_COUNT = 12;

// Gallery state
let currentGalleryFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize 3D Hero
    if (typeof initInteractiveHero3D === 'function') {
        hero3DInstance = initInteractiveHero3D('hero-canvas-container');
    }

    // 2. 3D Shape Switcher
    const shapeButtons = document.querySelectorAll('.shape-pill');
    shapeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            shapeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const shape = btn.getAttribute('data-shape');
            if (hero3DInstance) {
                hero3DInstance.setShape(shape);
            }
        });
    });

    // 3. Language Toggle
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'bn' ? 'en' : 'bn';
            langBtn.textContent = currentLang === 'bn' ? '🌐 English' : '🌐 বাংলা';
            applyTranslations(currentLang);
            renderActivities();
            renderGallery();
            renderMembers();
        });
    }

    // 4. Counters
    initCounters();

    // 5. Modals
    setupModals();

    // 6. Mobile Menu Auto-close
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileMenu.querySelectorAll('a, button').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 7. Activities Explorer (67 Milestones)
    setupActivitiesExplorer();

    // 8. Photo Gallery Explorer & Lightbox
    setupGalleryExplorer();

    // 9. Members Directory (7 Executive + 25 General Members)
    setupMembersExplorer();

    applyTranslations(currentLang);
});

function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    const searchInput = document.getElementById('activity-search-input');
    if (searchInput && dict['activities_search_placeholder']) {
        searchInput.placeholder = dict['activities_search_placeholder'];
    }
}

function initCounters() {
    const statsSection = document.getElementById('impact-stats');
    if (!statsSection) return;

    let hasAnimated = false;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                runCounterAnimation();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(statsSection);
}

function runCounterAnimation() {
    const counters = document.querySelectorAll('.counter-val');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        const duration = 2000;
        const stepTime = 20;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current).toLocaleString();
            }
        }, stepTime);
    });
}

// Activities Explorer Logic
function setupActivitiesExplorer() {
    const container = document.getElementById('activities-grid');
    if (!container || !window.KARU_SHIKHA_ACTIVITIES) return;

    const searchInput = document.getElementById('activity-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            activitySearchQuery = e.target.value.toLowerCase().trim();
            if (activitySearchQuery.length > 0) {
                showAllActivities = true;
            }
            renderActivities();
        });
    }

    const filterBtns = document.querySelectorAll('.activity-cat-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('bg-[#0284c7]', 'text-white', 'border-sky-400');
                b.classList.add('bg-slate-900/60', 'text-slate-300');
            });

            btn.classList.remove('bg-slate-900/60', 'text-slate-300');
            btn.classList.add('bg-[#0284c7]', 'text-white', 'border-sky-400');

            currentActivityFilter = btn.getAttribute('data-filter') || 'all';
            renderActivities();
        });
    });

    const toggleBtn = document.getElementById('toggle-activities-btn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            showAllActivities = !showAllActivities;
            renderActivities();
        });
    }

    renderActivities();
}

function renderActivities() {
    const container = document.getElementById('activities-grid');
    const countDisplay = document.getElementById('activities-count-badge');
    const toggleBtn = document.getElementById('toggle-activities-btn');
    if (!container || !window.KARU_SHIKHA_ACTIVITIES) return;

    const all = window.KARU_SHIKHA_ACTIVITIES;

    const filtered = all.filter(act => {
        const matchesCategory = (currentActivityFilter === 'all' || act.category === currentActivityFilter);
        const searchTarget = (act.title + ' ' + act.title_en + ' ' + act.tag).toLowerCase();
        const matchesSearch = !activitySearchQuery || searchTarget.includes(activitySearchQuery);
        return matchesCategory && matchesSearch;
    });

    if (countDisplay) {
        countDisplay.textContent = currentLang === 'bn' 
            ? `প্রদর্শিত: ${filtered.length} / মোট ৬৭টি কার্যক্রম` 
            : `Showing: ${filtered.length} of 67 activities`;
    }

    const itemsToDisplay = showAllActivities ? filtered : filtered.slice(0, INITIAL_VISIBLE_COUNT);

    if (toggleBtn) {
        if (filtered.length <= INITIAL_VISIBLE_COUNT || activitySearchQuery.length > 0) {
            toggleBtn.classList.add('hidden');
        } else {
            toggleBtn.classList.remove('hidden');
            const remaining = filtered.length - INITIAL_VISIBLE_COUNT;
            if (showAllActivities) {
                toggleBtn.textContent = currentLang === 'bn' ? 'সংক্ষিপ্ত করুন ▴' : 'Show Less ▴';
            } else {
                toggleBtn.textContent = currentLang === 'bn' 
                    ? `সবগুলো ৬৭টি কার্যক্রম দেখুন (+${remaining}টি আরো) ▾` 
                    : `View All Activities (+${remaining} more) ▾`;
            }
        }
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="col-span-full py-10 text-center glass-panel rounded-2xl border border-white/10">
                <div class="text-3xl mb-2">🔍</div>
                <h4 class="text-sm font-bold text-white mb-1">
                    ${currentLang === 'bn' ? 'কোনো কার্যক্রম পাওয়া যায়নি' : 'No activities found'}
                </h4>
                <p class="text-xs text-slate-400">
                    ${currentLang === 'bn' ? 'অন্য কীওয়ার্ড দিয়ে অনুসন্ধান করুন।' : 'Try another keyword.'}
                </p>
            </div>
        `;
        return;
    }

    const categoryStyles = {
        climate: { badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', border: 'hover:border-emerald-500/40' },
        women: { badge: 'bg-rose-500/20 text-rose-300 border-rose-500/30', border: 'hover:border-rose-500/40' },
        children: { badge: 'bg-sky-500/20 text-sky-300 border-sky-500/30', border: 'hover:border-sky-500/40' },
        craft: { badge: 'bg-orange-500/20 text-orange-300 border-orange-500/30', border: 'hover:border-orange-500/40' },
        humanitarian: { badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30', border: 'hover:border-purple-500/40' },
        partnership: { badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30', border: 'hover:border-blue-500/40' }
    };

    container.innerHTML = itemsToDisplay.map(act => {
        const style = categoryStyles[act.category] || categoryStyles.partnership;
        const titleText = currentLang === 'bn' ? act.title : act.title_en;
        const idLabel = act.id < 10 ? '০' + act.id : '' + act.id;
        const engId = act.id < 10 ? '0' + act.id : '' + act.id;

        return `
            <div class="glass-panel glass-panel-hover rounded-2xl p-4 sm:p-5 border border-white/10 ${style.border} flex flex-col justify-between transition-all group">
                <div>
                    <div class="flex items-center justify-between mb-2.5">
                        <span class="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center font-bold text-[11px] sm:text-xs text-sky-400 group-hover:bg-[#0284c7] group-hover:text-white transition-colors">
                            ${currentLang === 'bn' ? idLabel : engId}
                        </span>
                        <span class="text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 rounded-full border ${style.badge}">
                            ${act.tag}
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5">
                        <span class="text-lg sm:text-xl shrink-0 mt-0.5 group-hover:scale-125 transition-transform">${act.icon}</span>
                        <h4 class="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-sky-300 transition-colors leading-relaxed">
                            ${titleText}
                        </h4>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Photo Gallery Explorer & Lightbox Logic
function setupGalleryExplorer() {
    const container = document.getElementById('gallery-grid');
    if (!container || !window.KARU_SHIKHA_GALLERY) return;

    // Filter pills
    const filterBtns = document.querySelectorAll('.gallery-cat-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('bg-[#f97316]', 'text-white', 'border-orange-400');
                b.classList.add('bg-slate-900/60', 'text-slate-300');
            });

            btn.classList.remove('bg-slate-900/60', 'text-slate-300');
            btn.classList.add('bg-[#f97316]', 'text-white', 'border-orange-400');

            currentGalleryFilter = btn.getAttribute('data-filter') || 'all';
            renderGallery();
        });
    });

    // Lightbox modal close listeners
    const lightbox = document.getElementById('gallery-lightbox');
    const closeBtn = document.getElementById('close-lightbox-btn');
    if (closeBtn && lightbox) {
        closeBtn.addEventListener('click', () => {
            lightbox.classList.add('hidden');
        });
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.add('hidden');
            }
        });
    }

    renderGallery();
}

function renderGallery() {
    const container = document.getElementById('gallery-grid');
    if (!container || !window.KARU_SHIKHA_GALLERY) return;

    const all = window.KARU_SHIKHA_GALLERY;
    const filtered = all.filter(item => {
        return currentGalleryFilter === 'all' || item.category === currentGalleryFilter;
    });

    container.innerHTML = filtered.map(item => {
        const titleText = currentLang === 'bn' ? item.title : item.title_en;
        const tagText = item.tag;
        const locText = currentLang === 'bn' ? item.location : item.location;

        return `
            <div class="gallery-card glass-panel rounded-2xl overflow-hidden border border-white/10 cursor-pointer group flex flex-col justify-between" onclick="openGalleryLightbox('${item.file}')">
                <div class="relative overflow-hidden aspect-[4/3] bg-slate-950">
                    <img src="assets/gallery/${item.file}" alt="${titleText}" loading="lazy" class="gallery-img w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                    <span class="absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-900/85 border border-white/20 text-sky-300 backdrop-blur-md">
                        ${tagText}
                    </span>
                    <span class="absolute bottom-2 right-2 text-[10px] font-semibold text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded-md backdrop-blur-md flex items-center gap-1">
                        🔍 বড় করে দেখুন
                    </span>
                </div>
                <div class="p-3.5 sm:p-4">
                    <h4 class="text-xs sm:text-sm font-bold text-white group-hover:text-sky-300 transition-colors leading-snug mb-1.5 line-clamp-2">
                        ${titleText}
                    </h4>
                    <div class="flex items-center justify-between text-[10px] text-slate-400">
                        <span class="truncate">📍 ${locText}</span>
                        <span class="shrink-0 text-orange-400 font-semibold">${item.date}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Global hook for lightbox
window.openGalleryLightbox = function(filename) {
    const lightbox = document.getElementById('gallery-lightbox');
    const lightboxImg = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxLocation = document.getElementById('lightbox-location');
    const lightboxTag = document.getElementById('lightbox-tag');
    if (!lightbox || !window.KARU_SHIKHA_GALLERY) return;

    const item = window.KARU_SHIKHA_GALLERY.find(g => g.file === filename);
    if (!item) return;

    if (lightboxImg) lightboxImg.src = 'assets/gallery/' + item.file;
    if (lightboxTitle) lightboxTitle.textContent = currentLang === 'bn' ? item.title : item.title_en;
    if (lightboxLocation) lightboxLocation.textContent = '📍 ' + item.location + ' • ' + item.date;
    if (lightboxTag) lightboxTag.textContent = item.tag;

    lightbox.classList.remove('hidden');
};

window.openDonationModal = function() {
    const donateModal = document.getElementById('donate-modal');
    if (donateModal) donateModal.classList.remove('hidden');
};

window.openVolunteerModal = function() {
    const volunteerModal = document.getElementById('volunteer-modal');
    if (volunteerModal) volunteerModal.classList.remove('hidden');
};

window.openContactModal = function() {
    const contactModal = document.getElementById('contact-modal');
    if (contactModal) contactModal.classList.remove('hidden');
};

window.closeContactModal = function() {
    const contactModal = document.getElementById('contact-modal');
    if (contactModal) contactModal.classList.add('hidden');
};

window.openCertificateModal = function() {
    const certModal = document.getElementById('certificate-modal');
    if (certModal) certModal.classList.remove('hidden');
};

window.closeCertificateModal = function() {
    const certModal = document.getElementById('certificate-modal');
    if (certModal) certModal.classList.add('hidden');
};

function setupModals() {
    // Donate Modal
    const donateModal = document.getElementById('donate-modal');
    const donateTriggers = document.querySelectorAll('.open-donate-modal');
    const closeDonateModal = document.getElementById('close-donate-modal');

    donateTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (donateModal) donateModal.classList.remove('hidden');
        });
    });

    if (closeDonateModal && donateModal) {
        closeDonateModal.addEventListener('click', () => {
            donateModal.classList.add('hidden');
        });
    }

    const amountButtons = document.querySelectorAll('.amount-pill');
    const customAmountInput = document.getElementById('custom-donation-amount');
    amountButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            amountButtons.forEach(b => b.classList.remove('bg-orange-500', 'text-white'));
            btn.classList.add('bg-orange-500', 'text-white');
            if (customAmountInput) {
                customAmountInput.value = btn.getAttribute('data-amount');
            }
        });
    });

    const donateForm = document.getElementById('donate-form');
    if (donateForm) {
        donateForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const amount = customAmountInput ? customAmountInput.value : '500';
            showToast(`ধন্যবাদ! কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটির তহবিলে আপনার ৳${amount} অনুদানের অনুরোধ গৃহীত হয়েছে।`);
            if (donateModal) donateModal.classList.add('hidden');
        });
    }

    // Volunteer Modal
    const volunteerModal = document.getElementById('volunteer-modal');
    const volunteerTriggers = document.querySelectorAll('.open-volunteer-modal');
    const closeVolunteerModal = document.getElementById('close-volunteer-modal');

    volunteerTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (volunteerModal) volunteerModal.classList.remove('hidden');
        });
    });

    if (closeVolunteerModal && volunteerModal) {
        closeVolunteerModal.addEventListener('click', () => {
            volunteerModal.classList.add('hidden');
        });
    }

    const volunteerForm = document.getElementById('volunteer-form');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('vol-name');
            const name = nameInput ? nameInput.value : 'বন্ধু';
            showToast(`অভিনন্দন ${name}! কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটিতে আপনার ভলান্টিয়ার আবেদন জমা হয়েছে।`);
            if (volunteerModal) volunteerModal.classList.add('hidden');
            volunteerForm.reset();
        });
    }

    // Contact Modal Setup
    const contactModal = document.getElementById('contact-modal');
    const closeContactModal = document.getElementById('close-contact-modal');
    const contactModalOkBtn = document.getElementById('contact-modal-ok-btn');
    const contactTriggers = document.querySelectorAll('.open-contact-modal');

    contactTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (contactModal) contactModal.classList.remove('hidden');
        });
    });

    if (closeContactModal && contactModal) {
        closeContactModal.addEventListener('click', () => {
            contactModal.classList.add('hidden');
        });
    }
    if (contactModalOkBtn && contactModal) {
        contactModalOkBtn.addEventListener('click', () => {
            contactModal.classList.add('hidden');
        });
    }

    // Certificate Modal Setup
    const certModal = document.getElementById('certificate-modal');
    const closeCertModal = document.getElementById('close-certificate-modal');
    const certModalOkBtn = document.getElementById('certificate-modal-ok-btn');
    const certTriggers = document.querySelectorAll('.open-certificate-modal');

    certTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (certModal) certModal.classList.remove('hidden');
        });
    });

    if (closeCertModal && certModal) {
        closeCertModal.addEventListener('click', () => {
            certModal.classList.add('hidden');
        });
    }
    if (certModalOkBtn && certModal) {
        certModalOkBtn.addEventListener('click', () => {
            certModal.classList.add('hidden');
        });
    }

    [donateModal, volunteerModal, contactModal, certModal].forEach(modal => {
        if (!modal) return;
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    });
}

function showToast(message) {
    let toast = document.getElementById('app-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'app-toast';
        toast.className = 'fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 bg-slate-900/95 border border-orange-500/40 text-orange-100 px-5 py-3.5 rounded-xl shadow-2xl backdrop-blur-md flex items-center gap-3 transition-all transform translate-y-10 opacity-0';
        document.body.appendChild(toast);
    }

    toast.innerHTML = `
        <div class="w-7 h-7 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs">✓</div>
        <p class="text-xs sm:text-sm font-medium">${message}</p>
    `;

    setTimeout(() => {
        toast.classList.remove('translate-y-10', 'opacity-0');
    }, 50);

    setTimeout(() => {
        toast.classList.add('translate-y-10', 'opacity-0');
    }, 4500);
}

// Members Explorer Logic (Executive Committee & General Members)
let currentMemberTab = 'executive'; // 'executive' or 'general'
let memberSearchQuery = '';

function setupMembersExplorer() {
    const container = document.getElementById('members-grid');
    if (!container || !window.KARU_SHIKHA_EXECUTIVE_MEMBERS) return;

    const tabBtns = document.querySelectorAll('.member-tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => {
                b.classList.remove('bg-[#0284c7]', 'text-white', 'border-sky-400');
                b.classList.add('bg-slate-900/60', 'text-slate-300', 'border-white/10');
            });

            btn.classList.remove('bg-slate-900/60', 'text-slate-300', 'border-white/10');
            btn.classList.add('bg-[#0284c7]', 'text-white', 'border-sky-400');

            currentMemberTab = btn.getAttribute('data-tab') || 'executive';
            renderMembers();
        });
    });

    const searchInput = document.getElementById('member-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            memberSearchQuery = e.target.value.toLowerCase().trim();
            renderMembers();
        });
    }

    renderMembers();
}

function renderMembers() {
    const container = document.getElementById('members-grid');
    if (!container || !window.KARU_SHIKHA_EXECUTIVE_MEMBERS) return;

    const list = currentMemberTab === 'executive' 
        ? window.KARU_SHIKHA_EXECUTIVE_MEMBERS 
        : window.KARU_SHIKHA_GENERAL_MEMBERS;

    const filtered = list.filter(m => {
        if (!memberSearchQuery) return true;
        const q = memberSearchQuery;
        return m.name.toLowerCase().includes(q) ||
               (m.name_en && m.name_en.toLowerCase().includes(q)) ||
               m.role.toLowerCase().includes(q) ||
               (m.role_en && m.role_en.toLowerCase().includes(q)) ||
               m.address.toLowerCase().includes(q) ||
               m.profession.toLowerCase().includes(q) ||
               m.phone.includes(q);
    });

    const countBadge = document.getElementById('members-count-badge');
    if (countBadge) {
        countBadge.textContent = `${filtered.length} জন`;
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="col-span-full py-12 text-center text-slate-400">
                <span class="text-3xl block mb-2">🔍</span>
                <p>কোনো সদস্য পাওয়া যায়নি। অন্য কোনো নাম বা পদবী দিয়ে খুঁজুন।</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(m => {
        const name = currentLang === 'bn' ? m.name : (m.name_en || m.name);
        const role = currentLang === 'bn' ? m.role : (m.role_en || m.role);
        const isExec = currentMemberTab === 'executive';
        const roleBadgeBg = isExec ? 'bg-sky-500/20 text-sky-300 border-sky-500/30' : 'bg-slate-800 text-slate-300 border-white/10';
        const topBorder = isExec ? 'border-t-[#0284c7]' : 'border-t-orange-500/50';

        return `
            <div class="glass-panel glass-panel-hover rounded-2xl p-4 sm:p-5 border-t-2 ${topBorder} flex flex-col justify-between transition-all">
                <div>
                    <div class="flex items-center justify-between mb-2.5">
                        <span class="text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${roleBadgeBg}">
                            ${role}
                        </span>
                    </div>

                    <h3 class="text-sm sm:text-base font-extrabold text-white mb-2 leading-snug">
                        ${name}
                    </h3>

                    <div class="space-y-1.5 text-[11px] text-slate-300 mb-3.5">
                        ${m.father ? `<div class="truncate text-slate-400"><span class="text-slate-500 font-medium">পিতা:</span> ${m.father}</div>` : ''}
                        <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-400">
                            <span>🎓 <span class="text-slate-300 font-semibold">${m.education}</span></span>
                            <span>💼 <span class="text-slate-300 font-semibold">${m.profession}</span></span>
                            ${m.age ? `<span>🎂 ${m.age} বছর</span>` : ''}
                        </div>
                        <div class="text-slate-400 line-clamp-1 mt-1">
                            📍 ${m.address}
                        </div>
                    </div>
                </div>

                <div class="pt-2.5 border-t border-white/5 mt-auto flex items-center justify-between gap-2">
                    <a href="tel:${m.phone.replace(/[^0-9]/g, '')}" class="flex-1 py-1.5 sm:py-2 rounded-xl bg-slate-900 hover:bg-emerald-600/20 border border-white/10 hover:border-emerald-500/40 text-emerald-400 text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all" title="সরাসরি ফোন কল">
                        <span>📞</span>
                        <span>${m.phone}</span>
                    </a>
                </div>
            </div>
        `;
    }).join('');
}
