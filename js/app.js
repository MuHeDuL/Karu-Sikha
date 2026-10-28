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
        nav_contact: "যোগাযোগ",
        nav_future: "ভবিষ্যৎ পরিকল্পনা",
        nav_volunteer: "ভলান্টিয়ার হোন",
        nav_donate: "অনুদান দিন",
        
        hero_tag: "প্রতিষ্ঠিত: ৩১ জানুয়ারি ২০১৯ • ফরিদপুর, বাংলাদেশ",
        hero_title_1: "দক্ষতা, সমতা ও মানবিকতায়",
        hero_title_highlight: "প্রদীপ্ত আগামীর রূপরেখা",
        hero_motto: "\"Empowering Youth, Transforming Society\" • যুবশক্তির আলোকেই টেকসই উন্নয়ন",
        hero_desc: "২০১৯ সাল থেকে যুব উন্নয়ন, নারী ক্ষমতায়ন, সুবিধাবঞ্চিত শিশু শিক্ষা, স্বাস্থ্যসেবা, পরিবেশ সংরক্ষণ এবং উদ্যোক্তা সৃষ্টিতে অবিচল এক সামাজিক আলোকযাত্রা।",
        hero_btn_explore: "চলমান প্রকল্প ও কার্যক্রম",
        hero_btn_volunteer: "আমাদের সাথে যুক্ত হোন",
        hero_hint: "💡 মাউস বা টাচ দিয়ে ৩ডি লোগোর কণাগুলোর ত্রিমাত্রিক গভীরতা ও মুভমেন্ট দেখুন",
        
        domain_1: "🌱 যুব উন্নয়ন",
        domain_2: "👩 নারী ক্ষমতায়ন",
        domain_3: "📚 শিশু শিক্ষা",
        domain_4: "🩺 স্বাস্থ্যসেবা ও রক্তদান",
        domain_5: "🌍 পরিবেশ ও জলবায়ু",
        domain_6: "🎨 হস্তশিল্প ও উদ্যোক্তা",

        stat_years: "বছরের গৌরবোজ্জ্বল পথচলা (২০১৯ থেকে)",
        stat_activities: "বাস্তব কার্যক্রম ও স্বীকৃতি",
        stat_trees: "বৃক্ষরোপণ ও ক্লাইমেট অ্যাকশন",
        stat_women: "নারী ও যুব উদ্যোক্তা বিকাশ",

        shape_logo: "🏷️ ৩ডি লোগো",
        shape_shikha: "🔥 প্রদীপ্ত শিখা",
        shape_hands: "🤲 ঐক্যের হাত",
        shape_heart: "💖 রক্তদান ও মানবতা",

        about_tag: "প্রাতিষ্ঠানিক পরিচয়",
        about_title: "কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটি",
        about_sub: "Karu Sikha Youth Development Society • প্রতিষ্ঠিত: ৩১/০১/২০১৯ খ্রি.",
        about_cert_text: "✓ যুব উন্নয়ন অধিদপ্তর নিবন্ধিত (নং: যুউঅ-৯৭)",
        about_cert_badge: "সনদপত্র দেখুন 📜",
        about_fb_btn: "📘 ফেসবুক পেজ",

        vision_title: "আমাদের ভিশন (Vision)",
        vision_desc: "\"একটি সচেতন, শিক্ষিত, দক্ষ ও মানবিক যুব সমাজ গড়ে তোলা, যারা সমাজে নেতৃত্ব দেবে এবং টেকসই উন্নয়ন নিশ্চিত করবে।\"",
        vision_target: "🎯 লক্ষ্য: যুব নেতৃত্ব ও টেকসই সামাজিক রূপান্তর",

        mission_title: "আমাদের মিশন (Mission)",
        mission_1: "যুব সমাজকে সঠিক নেতৃত্ব ও জীবনদক্ষতায় গড়ে তোলা।",
        mission_2: "সুবিধাবঞ্চিত শিশু ও কিশোরদের শিক্ষায় সহায়তা করা।",
        mission_3: "পরিবেশ রক্ষা ও জলবায়ু পরিবর্তন মোকাবিলায় যুবকদের সম্পৃক্ত করা।",
        mission_4: "যুব ও যুব নারী ক্ষমতায়ন ও উদ্যোক্তা হিসেবে গড়ে তোলা।",
        mission_5: "স্বাস্থ্য সচেতনতা বৃদ্ধি ও জরুরি সহায়তা প্রদান।",

        projects_tag: "চলমান তিনটি প্রধান কাজ",
        projects_title: "প্রকল্প ভিত্তিক চলমান কার্যক্রম",
        projects_desc: "কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটির ৩টি সিগনেচার প্রকল্প—PYM, COKS ও EWGSF।",
        
        activities_tag: "মাঠপর্যায়ের সমৃদ্ধ অভিজ্ঞতা",
        activities_title: "কারু শিখার কার্যক্রমসমূহ (৬৭টি মাইলফলক)",
        activities_desc: "২০১৯ সাল থেকে শুরু করে আমাদের অর্জিত ৬৭টি সুনির্দিষ্ট বাস্তব কার্যক্রম, যৌথ পার্টনারশিপ, ক্যাম্পেইন ও সামাজিক অর্জনসমূহ এক্সপ্লোর করুন।",
        activities_search_placeholder: "কার্যক্রম খুঁজুন (যেমন: ক্লাইমেট, রক্তদান, WaterAid, হ্যান্ড পেইন্ট, সমতায় তারুণ্য...)",

        comm_tag: "নেতৃত্ব ও সাংগঠনিক কাঠামো",
        comm_reg_badge: "নিবন্ধন নং: যুউঅ-৯৭",
        comm_title: "সংগঠনের নেতৃত্ব ও সদস্যবৃন্দ",
        comm_desc: "যুব উন্নয়ন অধিদপ্তর অনুমোদিত (নিবন্ধন নং: যুউঅ-৯৭) কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটির কেন্দ্রীয় কার্যনির্বাহী পরিষদ ও সাধারণ সদস্যবৃন্দের তালিকা।",
        comm_tab_exec: "🏛️ কেন্দ্রীয় কার্যনির্বাহী পরিষদ (৭ জন)",
        comm_tab_gen: "👥 সাধারণ সদস্যবৃন্দ (২৫ জন)",
        comm_search_ph: "সদস্যের নাম, পদবী, শিক্ষাগত যোগ্যতা বা পেশা দিয়ে খুঁজুন...",

        gallery_tag: "মাঠপর্যায়ের স্থিরচিত্র",
        gallery_title: "আমাদের মাঠপর্যায়ের ফটো গ্যালারি",
        gallery_desc: "কারু শিখার শিশু শিক্ষা, ক্লাইমেট অলিম্পিয়াড, স্যানিটারি ন্যাপকিন বিতরণ, হ্যান্ড পেইন্ট প্রশিক্ষণ ও নাগরিক আন্দোলনের বাস্তব মুহূর্তসমূহ।",

        volunteer_cta_title: "আপনিও হোন কারু শিখার সহযাত্রী",
        volunteer_cta_desc: "২০১৯ সাল থেকে শুরু হওয়া এই মানবকল্যাণ যাত্রায় অংশ নিন। আপনার একটি উদ্যোগ সমাজে স্থায়ী ইতিবাচক প্রভাব ফেলতে পারে।",
        btn_apply_volunteer: "ভলান্টিয়ার ফর্ম পূরণ করুন",

        future_tag: "আমাদের আগামীর রোডম্যাপ",
        future_title: "ভবিষ্যৎ কর্মপরিকল্পনা ও টেকসই রূপরেখা",
        future_desc: "আমরা সরকারি-বেসরকারি প্রতিষ্ঠান ও উন্নয়ন সংস্থাগুলোর সঙ্গে অংশীদারত্ব জোরদার করে সমাজকল্যাণ কার্যক্রমকে আরও গতিশীল ও টেকসই করতে প্রতিশ্রুতিবদ্ধ।",
        f1_title: "শিশু শিক্ষা ও স্বাস্থ্যসেবা সম্প্রসারণ",
        f1_desc: "সুবিধাবঞ্চিত শিশুদের জন্য স্থায়ী লার্নিং সেন্টার ও নিয়মিত ফ্রি হেলথ ক্যাম্প বিস্তার।",
        f2_title: "যুব ও নারীদের কর্মসংস্থান সৃষ্টি",
        f2_desc: "হ্যান্ড পেইন্ট ও হস্তশিল্পের মাধ্যমে গ্রামীণ নারীদের উদ্যোক্তা হিসেবে গড়ে তোলা ও বাজার সংযোগ।",
        f3_title: "জলবায়ু সহিষ্ণু কৃষি ও পরিবেশ",
        f3_desc: "কৃষি উদ্যোক্তা তৈরি, আধুনিক চারা উৎপাদন ও নিরাপদ পুষ্টিকর খাদ্য সুরক্ষা।",
        f4_title: "সামাজিক সমতা ও অংশীদারত্ব",
        f4_desc: "জেন্ডার সমতা, ডিজিটাল নিরাপত্তা ও জাতীয়-আন্তর্জাতিক উন্নয়ন সংস্থার সাথে যৌথ কাজ।",

        contact_tag: "যোগাযোগ ও কেন্দ্রীয় কার্যালয়",
        contact_title: "কারু শিখার সঙ্গে সরাসরি যোগাযোগ করুন",
        contact_desc: "যেকোনো যৌথ সমাজকল্যাণ উদ্যোগ, শিশু শিক্ষা সহায়তা, পরিবেশ বা রক্তদান বিষয়ক তথ্যের জন্য আমাদের সাথে সরাসরি যোগাযোগ করুন।",
        contact_addr_label: "প্রতিষ্ঠানের অফিস ও কার্যালয়:",
        contact_addr_val: "লক্ষ্মীপুর পৌর স্টেশন মার্কেট, ফরিদপুর সদর, ফরিদপুর।",
        contact_addr_sub: "Lakshmipur Pourashava Station Market, Faridpur Sadar, Faridpur.",
        contact_phone_label: "সরাসরি ফোন নম্বর:",
        contact_btn_call: "কল করুন →",
        contact_email_label: "অফিসিয়াল ইমেইল:",
        contact_btn_mail: "মেইল পাঠান →",
        contact_btn_map: "🗺️ গুগল ম্যাপে লোকেশন দেখুন ↗",
        contact_btn_fb: "📘 অফিসিয়াল ফেসবুক পেজ ↗",
        contact_map_title: "গুগল ম্যাপে কারু শিখা কার্যালয়",
        contact_map_open: "বড় ম্যাপে খুলুন ↗",

        footer_desc: "কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটি ২০১৯ সালের ৩১ জানুয়ারি প্রতিষ্ঠার পর থেকে যুব উন্নয়ন, নারী ক্ষমতায়ন, শিশু শিক্ষা, স্বাস্থ্যসেবা, পরিবেশ সংরক্ষণ ও উদ্যোক্তা উন্নয়নে নিবেদিত একটি অলাভজনক সামাজিক সংস্থা।",
        footer_rights: "© ২০২৬ কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটি। সর্বস্বত্ব সংরক্ষিত।",
        footer_privacy: "গোপনীয়তা নীতি",
        footer_terms: "ব্যবহারের নিয়মাবলী",

        bottom_contact: "যোগাযোগ",
        bottom_volunteer: "স্বেচ্ছাসেবক",
        bottom_top: "শীর্ষে"
    },
    en: {
        brand_name: "Karu Shikha",
        brand_subtitle: "Youth Development Society",
        nav_about: "About Us",
        nav_projects: "Projects",
        nav_activities: "Activities (67)",
        nav_committee: "Leadership",
        nav_gallery: "Photo Gallery",
        nav_contact: "Contact Us",
        nav_future: "Future Vision",
        nav_volunteer: "Join Volunteer",
        nav_donate: "Support Us",
        
        hero_tag: "Established: January 31, 2019 • Faridpur, Bangladesh",
        hero_title_1: "Sparking Skills, Equality &",
        hero_title_highlight: "Humanitarian Progress",
        hero_motto: "\"Empowering Youth, Transforming Society\" • Lighting the Youth Potential",
        hero_desc: "Since 2019, dedicated to youth empowerment, gender equality, underprivileged child education, healthcare, climate action, and artisan incubation.",
        hero_btn_explore: "Explore Programs & Projects",
        hero_btn_volunteer: "Join Our Collective",
        hero_hint: "💡 Interact with mouse or touch to explore 3D particle motion",

        domain_1: "🌱 Youth Development",
        domain_2: "👩 Women Empowerment",
        domain_3: "📚 Child Education",
        domain_4: "🩺 Healthcare & Blood",
        domain_5: "🌍 Climate & Ecology",
        domain_6: "🎨 Artisan Enterprise",
        
        stat_years: "Years of Active Impact (Since 2019)",
        stat_activities: "Milestones & Key Activities",
        stat_trees: "Trees Planted & Climate Drives",
        stat_women: "Women & Youth Entrepreneurs",

        shape_logo: "🏷️ 3D Logo",
        shape_shikha: "🔥 Eternal Flame",
        shape_hands: "🤲 Hands of Unity",
        shape_heart: "💖 Compassion & Care",

        about_tag: "Organizational Profile",
        about_title: "Karu Shikha Youth Development Society",
        about_sub: "Karu Shikha Youth Development Society • Established: January 31, 2019",
        about_cert_text: "✓ Govt. Registered (Reg No: YuU-97)",
        about_cert_badge: "View Certificate 📜",
        about_fb_btn: "📘 Facebook Page",

        vision_title: "Our Vision",
        vision_desc: "\"To build an empowered, educated, skilled, and compassionate youth generation that leads society and ensures sustainable development.\"",
        vision_target: "🎯 Goal: Youth Leadership & Generational Impact",

        mission_title: "Our Mission",
        mission_1: "Equipping youth with ethical leadership, life skills, and self-reliance.",
        mission_2: "Providing continuous educational and health mentoring to underprivileged children.",
        mission_3: "Mobilizing youth to tackle the climate crisis and environmental degradation.",
        mission_4: "Empowering women and young girls through artisan incubation and rights advocacy.",
        mission_5: "Expanding public health awareness, free medical outreach, and blood donation drives.",

        projects_tag: "Active Signature Initiatives",
        projects_title: "Active Flagship Projects",
        projects_desc: "3 Signature Strategic Projects of Karu Shikha—PYM, COKS & EWGSF.",

        activities_tag: "Rich Field Legacy",
        activities_title: "Key Activities of Karu Shikha (67 Milestones)",
        activities_desc: "Explore all 67 on-ground grassroots initiatives, institutional partnerships, campaigns, and community milestones realized since 2019.",
        activities_search_placeholder: "Search activities (e.g. Climate, Blood, WaterAid, Hand Paint, Equality...)",

        comm_tag: "Leadership & Organization",
        comm_reg_badge: "Reg No: YuU-97",
        comm_title: "Leadership & Members Directory",
        comm_desc: "Official Executive Council and General Members directory of Karu Shikha Youth Development Society, authorized by Department of Youth Development (Reg: YuU-97).",
        comm_tab_exec: "🏛️ Executive Council (7 Members)",
        comm_tab_gen: "👥 General Members (25 Members)",
        comm_search_ph: "Search by member name, role, qualification, profession...",

        gallery_tag: "Field Photographs",
        gallery_title: "Official Field Photo Gallery",
        gallery_desc: "Glimpse our on-ground grassroots journey across child mentoring, Climate Olympiad, sanitary napkin distribution, and artisan workshops.",

        volunteer_cta_title: "Become a Torchbearer of Karu Shikha",
        volunteer_cta_desc: "Join our community journey started in 2019. Your contribution of passion, skills, or resources sparks lasting generational change.",
        btn_apply_volunteer: "Submit Volunteer Application",

        future_tag: "Our Strategic Roadmap",
        future_title: "Strategic Vision & Sustainable Roadmap",
        future_desc: "Committed to expanding partnerships with government, non-government, and international organizations to scale sustainable social development.",
        f1_title: "Child Education & Health Expansion",
        f1_desc: "Establishing permanent grassroots learning centers and continuous medical outreach for underprivileged children.",
        f2_title: "Youth & Women Livelihood Incubation",
        f2_desc: "Handpaint and artisanal skill building, incubation, and market linkage for grassroots women entrepreneurs.",
        f3_title: "Climate-Resilient Agriculture & Ecology",
        f3_desc: "Developing youth agripreneurs, climate-adaptive seedling nurseries, and safe food security.",
        f4_title: "Social Equity & Broad Alliances",
        f4_desc: "Championing gender equality, child online safety, and collaborative programs with national and global development bodies.",

        contact_tag: "Contact & Headquarters",
        contact_title: "Connect Directly With Karu Shikha",
        contact_desc: "Reach out for community partnerships, child education sponsorships, climate action, or emergency blood donor support.",
        contact_addr_label: "Office & Headquarters Address:",
        contact_addr_val: "Lakshmipur Pourashava Station Market, Faridpur Sadar, Faridpur.",
        contact_addr_sub: "Faridpur Sadar, Faridpur - 7800, Bangladesh.",
        contact_phone_label: "Direct Helpline:",
        contact_btn_call: "Call Now →",
        contact_email_label: "Official Email Address:",
        contact_btn_mail: "Send Email →",
        contact_btn_map: "🗺️ View on Google Maps ↗",
        contact_btn_fb: "📘 Official Facebook Page ↗",
        contact_map_title: "Karu Shikha Headquarters on Google Maps",
        contact_map_open: "Open in Large Map ↗",

        footer_desc: "Karu Shikha Youth Development Society was established on January 31, 2019, dedicated to youth empowerment, women's equality, child education, healthcare, climate action, and artisan entrepreneurship.",
        footer_rights: "© 2026 Karu Shikha Youth Development Society. All rights reserved.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Use",

        bottom_contact: "Contact",
        bottom_volunteer: "Volunteer",
        bottom_top: "Top"
    }
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
            langBtn.innerHTML = currentLang === 'bn' ? '🌐 <span>EN</span>' : '🌐 <span>বাং</span>';
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

    // Standard textContent i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Input placeholder translations
    const activitySearch = document.getElementById('activity-search-input');
    if (activitySearch && dict['activities_search_placeholder']) {
        activitySearch.placeholder = dict['activities_search_placeholder'];
    }

    const memberSearch = document.getElementById('member-search-input');
    if (memberSearch && dict['comm_search_ph']) {
        memberSearch.placeholder = dict['comm_search_ph'];
    }

    // Activity filter pills labels
    const activityCatMap = {
        bn: {
            'all': 'সব কার্যক্রম (৬৭)',
            'climate': '🌍 জলবায়ু ও টেকসই কৃষি (১০)',
            'women': '👩 নারী ও সমতায় তারুণ্য (১৩)',
            'children': '📚 শিশু শিক্ষা ও স্বাস্থ্য (৬)',
            'craft': '🎨 হস্তশিল্প ও উদ্যোক্তা (৮)',
            'humanitarian': '🤝 মানবিক সেবা ও সম্প্রীতি (৯)',
            'partnership': '🏛️ অংশীদারত্ব ও নেটওয়ার্কিং (২১)'
        },
        en: {
            'all': 'All Milestones (67)',
            'climate': '🌍 Climate & Ecology (10)',
            'women': '👩 Women & Equality (13)',
            'children': '📚 Child Education & Health (6)',
            'craft': '🎨 Handcraft & Enterprise (8)',
            'humanitarian': '🤝 Humanitarian & Blood (9)',
            'partnership': '🏛️ Governance & Partnerships (21)'
        }
    };

    document.querySelectorAll('.activity-cat-btn').forEach(btn => {
        const filter = btn.getAttribute('data-filter');
        if (activityCatMap[lang] && activityCatMap[lang][filter]) {
            btn.textContent = activityCatMap[lang][filter];
        }
    });

    // Gallery filter pills labels
    const galleryCatMap = {
        bn: {
            'all': 'সকল ছবি',
            'child': 'শিশু শিক্ষা (PYM)',
            'climate': 'ক্লাইমেট অলিম্পিয়াড',
            'women': 'নারী ক্ষমতায়ন (EWGSF)',
            'lead': 'নেতৃত্ব ও ফিল্ড কার্যক্রম'
        },
        en: {
            'all': 'All Photos',
            'child': 'Child Mentoring (PYM)',
            'climate': 'Climate Olympiad',
            'women': 'Women Empowerment (EWGSF)',
            'lead': 'Field Leadership'
        }
    };

    document.querySelectorAll('.gallery-cat-btn').forEach(btn => {
        const filter = btn.getAttribute('data-filter');
        if (galleryCatMap[lang] && galleryCatMap[lang][filter]) {
            btn.textContent = galleryCatMap[lang][filter];
        }
    });

    // Member directory tab buttons
    document.querySelectorAll('.member-tab-btn').forEach(btn => {
        const tab = btn.getAttribute('data-tab');
        if (tab === 'executive') {
            btn.textContent = dict['comm_tab_exec'] || btn.textContent;
        } else if (tab === 'general') {
            btn.textContent = dict['comm_tab_gen'] || btn.textContent;
        }
    });
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
        const duration = 1800;
        const stepTime = 25;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target.toLocaleString('en-US');
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current).toLocaleString('en-US');
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
        const searchTarget = (act.title + ' ' + (act.title_en || '') + ' ' + act.tag).toLowerCase();
        const matchesSearch = !activitySearchQuery || searchTarget.includes(activitySearchQuery);
        return matchesCategory && matchesSearch;
    });

    if (countDisplay) {
        countDisplay.textContent = currentLang === 'bn' 
            ? `প্রদর্শিত: ${filtered.length} / মোট ৬৭টি কার্যক্রম` 
            : `Showing: ${filtered.length} of 67 Milestones`;
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
                    : `View All 67 Milestones (+${remaining} more) ▾`;
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
                    ${currentLang === 'bn' ? 'অন্য কীওয়ার্ড দিয়ে অনুসন্ধান করুন।' : 'Try searching another keyword.'}
                </p>
            </div>
        `;
        return;
    }

    const categoryStyles = {
        climate: { badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', border: 'hover:border-emerald-500/40', tag_en: 'Climate & Ecology' },
        women: { badge: 'bg-rose-500/20 text-rose-300 border-rose-500/30', border: 'hover:border-rose-500/40', tag_en: 'Women & Equality' },
        children: { badge: 'bg-sky-500/20 text-sky-300 border-sky-500/30', border: 'hover:border-sky-500/40', tag_en: 'Child Mentoring' },
        craft: { badge: 'bg-orange-500/20 text-orange-300 border-orange-500/30', border: 'hover:border-orange-500/40', tag_en: 'Handcraft & Enterprise' },
        humanitarian: { badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30', border: 'hover:border-purple-500/40', tag_en: 'Humanitarian & Blood' },
        partnership: { badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30', border: 'hover:border-blue-500/40', tag_en: 'Governance & Network' }
    };

    container.innerHTML = itemsToDisplay.map(act => {
        const style = categoryStyles[act.category] || categoryStyles.partnership;
        const titleText = currentLang === 'bn' ? act.title : (act.title_en || act.title);
        const tagText = currentLang === 'bn' ? act.tag : (style.tag_en || act.tag);
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
                            ${tagText}
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

    const lightbox = document.getElementById('gallery-lightbox');
    const closeBtn = document.getElementById('close-gallery-lightbox');

    if (closeBtn && lightbox) {
        closeBtn.addEventListener('click', () => {
            lightbox.classList.add('hidden');
        });
    }

    if (lightbox) {
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

    const categoryTagMap = {
        'child': 'Child Mentoring',
        'climate': 'Climate Action',
        'women': 'Women Empowerment',
        'lead': 'Field Leadership'
    };

    container.innerHTML = filtered.map(item => {
        const titleText = currentLang === 'bn' ? item.title : (item.title_en || item.title);
        const tagText = currentLang === 'bn' ? item.tag : (categoryTagMap[item.category] || 'Field Action');
        const locText = currentLang === 'bn' ? item.location : 'Faridpur, Bangladesh';
        const viewText = currentLang === 'bn' ? '🔍 বড় করে দেখুন' : '🔍 View Full';

        return `
            <div class="gallery-card glass-panel rounded-2xl overflow-hidden border border-white/10 cursor-pointer group flex flex-col justify-between" onclick="openGalleryLightbox('${item.file}')">
                <div class="relative overflow-hidden aspect-[4/3] bg-slate-950">
                    <img src="assets/gallery/${item.file}" alt="${titleText}" loading="lazy" class="gallery-img w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                    <span class="absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-900/85 border border-white/20 text-sky-300 backdrop-blur-md">
                        ${tagText}
                    </span>
                    <span class="absolute bottom-2 right-2 text-[10px] font-semibold text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded-md backdrop-blur-md flex items-center gap-1">
                        ${viewText}
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
    const img = document.getElementById('lightbox-img');
    const title = document.getElementById('lightbox-title');
    const loc = document.getElementById('lightbox-location');

    if (!lightbox || !img) return;

    const item = window.KARU_SHIKHA_GALLERY.find(g => g.file === filename);
    if (item) {
        img.src = `assets/gallery/${item.file}`;
        img.alt = currentLang === 'bn' ? item.title : (item.title_en || item.title);
        if (title) title.textContent = currentLang === 'bn' ? item.title : (item.title_en || item.title);
        if (loc) loc.textContent = `📍 ${currentLang === 'bn' ? item.location : 'Faridpur, Bangladesh'} • ${item.date}`;
    }

    lightbox.classList.remove('hidden');
};

// Global modal handlers
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
            const msg = currentLang === 'bn'
                ? `ধন্যবাদ! কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটির তহবিলে আপনার ৳${amount} অনুদানের অনুরোধ গৃহীত হয়েছে।`
                : `Thank you! Your donation request of ৳${amount} to Karu Shikha Youth Development Society has been received.`;
            showToast(msg);
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
            const name = nameInput ? nameInput.value : 'Friend';
            const msg = currentLang === 'bn'
                ? `অভিনন্দন ${name}! কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটিতে আপনার ভলান্টিয়ার আবেদন জমা হয়েছে।`
                : `Congratulations ${name}! Your volunteer application to Karu Shikha Youth Development Society has been submitted.`;
            showToast(msg);
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

const educationMapEn = {
    'এইচএসসি': 'HSC',
    'স্নাতক': 'Graduate',
    'স্নাতক (অনার্স)': 'Bachelor (Honours)',
    'স্নাতকোত্তর': 'Masters',
    'এসএসসি': 'SSC',
    'দ্বাদশ': 'Class 12',
    'একাদশ': 'Class 11',
    'অষ্টম শ্রেণি': 'Class 8',
    'মাদ্রাসা': 'Madrasah'
};

const professionMapEn = {
    'শিক্ষার্থী ও উদ্যোক্তা': 'Student & Entrepreneur',
    'সমাজকর্মী ও উদ্যোক্তা': 'Social Worker & Entrepreneur',
    'শিক্ষার্থী': 'Student',
    'উদ্যোক্তা ও সমাজকর্মী': 'Entrepreneur & Social Worker',
    'সমাজকর্মী': 'Social Worker',
    'উদ্যোক্তা': 'Entrepreneur',
    'চাকুরীজীবী': 'Service / Employed',
    'ব্যবসায়ী': 'Business',
    'গৃহিনী': 'Homemaker'
};

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
        countBadge.textContent = currentLang === 'bn' 
            ? `${filtered.length} জন` 
            : `${filtered.length} Members`;
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="col-span-full py-12 text-center text-slate-400">
                <span class="text-3xl block mb-2">🔍</span>
                <p>${currentLang === 'bn' ? 'কোনো সদস্য পাওয়া যায়নি। অন্য কোনো নাম বা পদবী দিয়ে খুঁজুন।' : 'No members found. Try another keyword or designation.'}</p>
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

        const eduText = currentLang === 'bn' ? m.education : (educationMapEn[m.education] || m.education);
        const profText = currentLang === 'bn' ? m.profession : (professionMapEn[m.profession] || m.profession);
        const fatherLabel = currentLang === 'bn' ? 'পিতা:' : 'Father:';
        const ageLabel = currentLang === 'bn' ? `${m.age} বছর` : `${m.age} yrs`;
        const addrText = currentLang === 'bn' ? m.address : 'Faridpur Sadar, Faridpur';
        const callLabel = currentLang === 'bn' ? `📞 ${m.phone}` : `📞 ${m.phone}`;

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
                        ${m.father ? `<div class="truncate text-slate-400"><span class="text-slate-500 font-medium">${fatherLabel}</span> ${m.father}</div>` : ''}
                        <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-400">
                            <span>🎓 <span class="text-slate-300 font-semibold">${eduText}</span></span>
                            <span>💼 <span class="text-slate-300 font-semibold">${profText}</span></span>
                            ${m.age ? `<span>🎂 ${ageLabel}</span>` : ''}
                        </div>
                        <div class="text-slate-400 line-clamp-1 mt-1">
                            📍 ${addrText}
                        </div>
                    </div>
                </div>

                <div class="pt-2.5 border-t border-white/5 mt-auto flex items-center justify-between gap-2">
                    <a href="tel:${m.phone.replace(/[^0-9]/g, '')}" class="flex-1 py-1.5 sm:py-2 rounded-xl bg-slate-900 hover:bg-emerald-600/20 border border-white/10 hover:border-emerald-500/40 text-emerald-400 text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all" title="Direct Phone Call">
                        <span>${callLabel}</span>
                    </a>
                </div>
            </div>
        `;
    }).join('');
}
