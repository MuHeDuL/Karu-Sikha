/**
 * Karu Shikha Youth Development Society - Application Controller
 * কারু শিখা যুব উন্নয়ন সোসাইটি (প্রতিষ্ঠিত: ৩১ জানুয়ারি ২০১৯)
 * Official Facebook: https://www.facebook.com/p/Karu-Shikha-Youth-Development-Society-61560289663754/
 */

const translations = {
    "bn": {
        "doc_title": "কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটি | Karu Shikha Youth Development Society",
        "brand_karu": "কারু",
        "brand_shikha": "শিখা",
        "brand_subtitle": "ইয়ুথ ডেভেলপমেন্ট সোসাইটি",
        "nav_about": "আমাদের কথা",
        "nav_projects": "প্রকল্পসমূহ",
        "nav_activities": "কার্যক্রম (৬৭টি)",
        "nav_committee": "কার্যনির্বাহী পরিষদ",
        "nav_gallery": "ফটো গ্যালারি",
        "nav_contact": "যোগাযোগ",
        "nav_future": "ভবিষ্যৎ পরিকল্পনা",
        "nav_volunteer": "ভলান্টিয়ার হোন",
        "nav_volunteer_btn": "🤝 ভলান্টিয়ার আবেদন",
        "nav_whatsapp": "হোয়াটসঅ্যাপ",
        "nav_donate": "অনুদান দিন",
        "nav_donate_short": "অনুদান",
        "tip_call": "কল করুন",
        "tip_call_direct": "সরাসরি কল করুন",
        "tip_whatsapp": "WhatsApp এ সরাসরি চ্যাট করুন",
        "tip_donate": "অনুদান প্রদান করুন",
        "tip_cert": "যুব উন্নয়ন অধিদপ্তর সরকারি নিবন্ধন সনদ দেখতে ক্লিক করুন",
        "tip_bottom_contact": "জরুরি যোগাযোগ, ফোন ও ঠিকানা",
        "tip_bottom_volunteer": "স্বেচ্ছাসেবক হিসেবে যুক্ত হোন",
        "tip_bottom_top": "পেজের শুরুতে যান",
        "hero_tag": "প্রতিষ্ঠিত: ৩১ জানুয়ারি ২০১৯ • ফরিদপুর, বাংলাদেশ",
        "hero_title_1": "দক্ষতা, সমতা ও মানবিকতায়",
        "hero_title_highlight": "প্রদীপ্ত আগামীর রূপরেখা",
        "hero_motto": "\"Empowering Youth, Transforming Society\" • যুবশক্তির আলোকেই টেকসই উন্নয়ন",
        "hero_desc": "২০১৯ সাল থেকে যুব উন্নয়ন, নারী ক্ষমতায়ন, সুবিধাবঞ্চিত শিশু শিক্ষা, স্বাস্থ্যসেবা, পরিবেশ সংরক্ষণ এবং উদ্যোক্তা সৃষ্টিতে অবিচল এক সামাজিক আলোকযাত্রা।",
        "hero_btn_explore": "চলমান প্রকল্প ও কার্যক্রম",
        "hero_btn_volunteer": "আমাদের সাথে যুক্ত হোন",
        "hero_hint": "💡 মাউস বা টাচ দিয়ে ৩ডি লোগোর কণাগুলোর ত্রিমাত্রিক গভীরতা ও মুভমেন্ট দেখুন",
        "domain_1": "🌱 যুব উন্নয়ন",
        "domain_2": "👩 নারী ক্ষমতায়ন",
        "domain_3": "📚 শিশু শিক্ষা",
        "domain_4": "🩺 স্বাস্থ্যসেবা ও রক্তদান",
        "domain_5": "🌍 পরিবেশ ও জলবায়ু",
        "domain_6": "🎨 হস্তশিল্প ও উদ্যোক্তা",
        "stat_years": "বছরের গৌরবোজ্জ্বল পথচলা (২০১৯ থেকে)",
        "stat_activities": "বাস্তব কার্যক্রম ও স্বীকৃতি",
        "stat_trees": "বৃক্ষরোপণ ও ক্লাইমেট অ্যাকশন",
        "stat_women": "নারী ও যুব উদ্যোক্তা বিকাশ",
        "shape_logo": "🏷️ ৩ডি লোগো",
        "shape_shikha": "🔥 প্রদীপ্ত শিখা",
        "shape_hands": "🤲 ঐক্যের হাত",
        "shape_heart": "💖 রক্তদান ও মানবতা",
        "about_tag": "প্রাতিষ্ঠানিক পরিচয়",
        "about_title": "কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটি",
        "about_sub": "Karu Sikha Youth Development Society • প্রতিষ্ঠিত: ৩১/০১/২০১৯ খ্রি.",
        "about_cert_text": "✓ যুব উন্নয়ন অধিদপ্তর নিবন্ধিত (নং: যুউঅ-৯৭)",
        "about_cert_badge": "সনদপত্র দেখুন 📜",
        "about_fb_btn": "📘 ফেসবুক পেজ",
        "vision_title": "আমাদের ভিশন (Vision)",
        "vision_desc": "\"একটি সচেতন, শিক্ষিত, দক্ষ ও মানবিক যুব সমাজ গড়ে তোলা, যারা সমাজে নেতৃত্ব দেবে এবং টেকসই উন্নয়ন নিশ্চিত করবে।\"",
        "vision_target": "🎯 লক্ষ্য: যুব নেতৃত্ব ও টেকসই সামাজিক রূপান্তর",
        "mission_title": "আমাদের মিশন (Mission)",
        "mission_1": "যুব সমাজকে দক্ষ, আত্মপ্রত্যয়ী ও মানবিক গুণাবলিসম্পন্ন হিসেবে গড়ে তোলা।",
        "mission_2": "সুবিধাবঞ্চিত শিশুদের মৌলিক অধিকার, শিক্ষা ও সুরক্ষা নিশ্চিত করা।",
        "mission_3": "জলবায়ু পরিবর্তন মোকাবিলায় তরুণদের সচেতন করা এবং সক্রিয় ভূমিকা রাখা।",
        "mission_4": "নারী ও কিশোরীদের দক্ষতা উন্নয়ন এবং স্বাবলম্বী হওয়ার সুযোগ তৈরি করা।",
        "mission_5": "স্বাস্থ্য সচেতনতা বৃদ্ধি, ফ্রি মেডিকেল ও জরুরি রক্তদান সেবা প্রসার করা।",
        "about_pillars_title": "কারু শিখার মূল কার্যক্রম ও লক্ষ্যসমূহ:",
        "pillar_1_title": "📚 শিক্ষা ও শিশু বিকাশ",
        "pillar_1_desc": "সুবিধাবঞ্চিত শিশুদের শিক্ষা সহায়তা, বই বিতরণ, শিশু অধিকার ও পুষ্টি সচেতনতা।",
        "pillar_2_title": "🌿 পরিবেশ সংরক্ষণ",
        "pillar_2_desc": "ক্লাইমেট অলিম্পিয়াড, বৃক্ষরোপণ, বর্জ্য ব্যবস্থাপনা ও পরিবেশ-বান্ধব সচেতনতা ক্যাম্পেইন।",
        "pillar_3_title": "🩺 স্বাস্থ্যসেবা ও রক্তদান",
        "pillar_3_desc": "বিনামূল্যে স্বাস্থ্য সেবা, রক্তদান কর্মসূচি, প্রাথমিক চিকিৎসা ও মানসিক স্বাস্থ্য প্রশিক্ষণ।",
        "pillar_4_title": "👩 নারী ও কিশোরী উন্নয়ন",
        "pillar_4_desc": "হস্তশিল্প ও হ্যান্ড পেইন্ট প্রশিক্ষণ, ক্ষুদ্র উদ্যোক্তা তৈরি, মাসিক স্বাস্থ্য ও সমতা প্রচার।",
        "pillar_5_title": "🤝 সামাজিক সেবা",
        "pillar_5_desc": "দুর্যোগকালীন ত্রাণ, শীতবস্ত্র বিতরণ, দুঃস্থ ও অসহায়দের জরুরি সামাজিক সহায়তা।",
        "pillar_6_title": "🚀 যুব নেতৃত্ব ও উদ্ভাবন",
        "pillar_6_desc": "সেমিনার, কর্মশালা, আইসিটি ও উদ্যোক্তা প্রশিক্ষণ, সাংস্কৃতিক ও যুব সমাবেশ।",
        "projects_tag": "চলমান তিনটি প্রধান কাজ",
        "projects_title": "প্রকল্প ভিত্তিক চলমান কার্যক্রম",
        "projects_desc": "কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটির ৩টি সিগনেচার প্রকল্প—PYM, COKS ও EWGSF।",
        "pym_sub": "শিশু শিক্ষা ও শিশু সুরক্ষা বিষয়ক বিশেষ উদ্যোগ",
        "pym_quote": "\"Project Your Mentor বিশ্বাস করে শিশুই ভবিষ্যৎ। তাই শিক্ষা, সুরক্ষা ও অধিকার নিশ্চিত করে আগামী প্রজন্মকে মানবিক, দক্ষ ও দায়িত্বশীল নাগরিক হিসেবে গড়ে তোলাই আমাদের মূল লক্ষ্য।\"",
        "pym_obj_title": "মূল উদ্দেশ্য:",
        "pym_obj_1": "• শিশুদের মানসম্মত প্রাথমিক ও অপ্রাতিষ্ঠানিক শিক্ষা প্রদান।",
        "pym_obj_2": "• প্রাতিষ্ঠানিক শিক্ষার পাশাপাশি বাস্তব জ্ঞান ও সৃজনশীলতা বিকাশ।",
        "pym_obj_3": "• শিশু নিরাপত্তা নিশ্চিতকরণ ও শিশু নির্যাতন প্রতিরোধে কার্যক্রম।",
        "pym_obj_4": "• শিশু অধিকার প্রতিষ্ঠা ও আনন্দময় শৈশব নিশ্চিত করা।",
        "pym_act_title": "প্রধান কার্যক্রম:",
        "pym_act_1": "• শিক্ষা সহায়তা ও সুবিধাবঞ্চিত শিশুদের শিক্ষা সামগ্রী বিতরণ।",
        "pym_act_2": "• খেলাধুলা, কর্মশালা ও গল্প বলার মাধ্যমে পাঠদান।",
        "pym_act_3": "• শিশু সুরক্ষা প্রশিক্ষণ ও নির্যাতন প্রতিরোধ ক্যাম্পেইন।",
        "pym_act_4": "• অভিভাবকদের জন্য প্যারেন্টিং সেমিনার, পরামর্শ ও ট্রেনিং।",
        "pym_btn_join": "মেন্টর হিসেবে যুক্ত হোন",
        "pym_btn_donate": "শিশুদের শিক্ষা তহবিলে অনুদান দিন",
        "coks_quote": "\"সবুজে গড়ি ভবিষ্যৎ, সচেতন হই আজ থেকেই।\" — শিক্ষার্থীদের মধ্যে জলবায়ু পরিবর্তন, নবায়নযোগ্য শক্তি, কার্বন নিঃসরণ হ্রাস ও পরিবেশ সুরক্ষায় সক্রিয় সচেতনতা তৈরি করাই Climate Olympiad-এর উদ্দেশ্য।",
        "coks_obj_title": "লক্ষ্য ও উদ্দেশ্য:",
        "coks_obj_1": "• মাধ্যমিক ও উচ্চমাধ্যমিক পর্যায়ের শিক্ষার্থী।",
        "coks_obj_2": "• বিশ্ববিদ্যালয় শিক্ষার্থী ও পরিবেশ বিষয়ক তরুণ নেতৃত্ব।",
        "coks_obj_3": "• শিক্ষক ও অভিভাবক সমাজকে ক্লাইমেট সচেতন করা।",
        "coks_obj_4": "• সিসা দূষণ ও প্লাস্টিক দূষণ প্রতিরোধে সচেতনতা সৃষ্টি।",
        "coks_act_title": "প্রধান কার্যক্রম:",
        "coks_act_1": "• বার্ষিক ক্লাইমেট অলিম্পিয়াড ও মাসিক অলিম্পিয়াড আয়োজন।",
        "coks_act_2": "• পরিবেশ সচেতনতামূলক ক্যাম্পেইন ও গাছ লাগানো অভিযান।",
        "coks_act_3": "• Karu Shikha Climate Club গঠন ও দেশব্যাপী পরিচালনা।",
        "coks_act_4": "• আর্টইভিজম অ্যান্ড এক্সিবিশন (Artivism & Exhibition)।",
        "coks_btn_join": "ক্লাইমেট ক্লাবে যোগ দিন",
        "coks_btn_donate": "বৃক্ষরোপণ তহবিলে অনুদান দিন",
        "ewgsf_title": "EWGSF প্রকল্প",
        "ewgsf_quote": "\"নারী ক্ষমতায়নই টেকসই উন্নয়ন ও নিরাপদ ভবিষ্যতের চাবিকাঠি।\" — নারীদের পরিবেশবান্ধব কর্মকাণ্ড, অর্গানিক চাষ, হ্যান্ড পেইন্ট ও হস্তশিল্পের মাধ্যমে স্বাবলম্বী করা এবং মাসিক স্বাস্থ্য সুরক্ষা নিশ্চিত করা।",
        "ewgsf_obj_title": "প্রধান লক্ষ্য ও উদ্দেশ্য:",
        "ewgsf_obj_1": "• কিশোরী ও নারীদের আত্মবিশ্বাস বৃদ্ধি এবং নিরাপদ পরিবেশ তৈরি।",
        "ewgsf_obj_2": "• গ্রামীণ নারীদের অর্থনৈতিক ও সামাজিক স্বাবলম্বিতা অর্জন।",
        "ewgsf_obj_3": "• মাসিক স্বাস্থ্য সুরক্ষা ও হাইজিন সচেতনতা বৃদ্ধি।",
        "ewgsf_obj_4": "• হ্যান্ড পেইন্ট ও হস্তশিল্পে দক্ষ নারী উদ্যোক্তা তৈরি।",
        "ewgsf_act_title": "প্রধান কার্যক্রম:",
        "ewgsf_act_1": "• ফ্রি স্যানিটারি ন্যাপকিন বিতরণ ও স্বাস্থ্য পরামর্শ প্রদান।",
        "ewgsf_act_2": "• হ্যান্ড পেইন্ট, ব্লক-বাটিক ও হস্তশিল্প প্রশিক্ষণ কর্মশালা।",
        "ewgsf_act_3": "• মানসিক স্বাস্থ্য সুরক্ষা ও মাসিক স্বাস্থ্য বিষয়ক উঠান বৈঠক।",
        "ewgsf_act_4": "• উৎপাদিত পণ্যের বাজার সংযোগ ও প্রদর্শনী আয়োজন।",
        "ewgsf_btn_join": "প্রশিক্ষণে অংশগ্রহণ করুন",
        "ewgsf_btn_donate": "নারী স্বাবলম্বিতা তহবিলে দান করুন",
        "activities_tag": "মাঠপর্যায়ের সমৃদ্ধ অভিজ্ঞতা",
        "activities_title": "কারু শিখার কার্যক্রমসমূহ (৬৭টি মাইলফলক)",
        "activities_desc": "২০১৯ সাল থেকে শুরু করে আমাদের অর্জিত ৬৭টি সুনির্দিষ্ট বাস্তব কার্যক্রম, যৌথ পার্টনারশিপ, ক্যাম্পেইন ও সামাজিক মাইলফলক একনজরে দেখুন।",
        "activities_search_placeholder": "কার্যক্রম খুঁজুন (যেমন: ক্লাইমেট, রক্তদান, WaterAid, হ্যান্ড পেইন্ট, সমতায় তারুণ্য...)",
        "activities_hint": "💡 কীওয়ার্ড লিখে বা ক্যাটাগরি বেছে ফিল্টার করুন",
        "act_cat_all": "সব কার্যক্রম (৬৭)",
        "act_cat_climate": "🌍 জলবায়ু ও টেকসই কৃষি (১০)",
        "act_cat_women": "👩 নারী ও সমতায় তারুণ্য (১৩)",
        "act_cat_children": "📚 শিশু শিক্ষা ও স্বাস্থ্য (৬)",
        "act_cat_craft": "🎨 হস্তশিল্প ও উদ্যোক্তা (৮)",
        "act_cat_humanitarian": "🤝 মানবিক সেবা ও সম্প্রীতি (৯)",
        "act_cat_partnership": "🏛️ অংশীদারত্ব ও নেটওয়ার্কিং (২১)",
        "activities_count_badge": "প্রদর্শিত: ৬৭টি কার্যক্রম",
        "act_view_all_btn": "সবগুলো ৬৭টি কার্যক্রম দেখুন (+৫৫টি আরো) ▾",
        "comm_tag": "নেতৃত্ব ও সাংগঠনিক কাঠামো",
        "comm_reg_badge": "নিবন্ধন নং: যুউঅ-৯৭",
        "comm_title": "কার্যনির্বাহী পরিষদ ও সম্মানিত সদস্য তালিকা",
        "comm_desc": "কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটির সরকারি নিবন্ধনভুক্ত (যুব উন্নয়ন অধিদপ্তর, নিবন্ধন নং: যুউঅ-৯৭) অনুমোদিত পরিষদ ও সাধারণ সদস্যবৃন্দ।",
        "comm_tab_exec": "🏛️ কেন্দ্রীয় কার্যনির্বাহী পরিষদ (৭ জন)",
        "comm_tab_gen": "👥 সাধারণ সদস্যবৃন্দ (২৫ জন)",
        "comm_search_ph": "সদস্যের নাম, পদবী, শিক্ষাগত যোগ্যতা বা পেশা দিয়ে খুঁজুন...",
        "member_count_init": "৭ জন",
        "gallery_tag": "মাঠপর্যায়ের স্থিরচিত্র",
        "gallery_title": "কারু শিখার কার্যক্রমের ফটো গ্যালারি",
        "gallery_desc": "আমাদের বিভিন্ন প্রকল্প, শিশু শিক্ষা সহায়তা, ক্লাইমেট অলিম্পিয়াড, স্যানিটারি ন্যাপকিন বিতরণ এবং হস্তশিল্প কর্মশালার বাস্তব ছবিসমূহ।",
        "gal_cat_all": "সব ছবি (২৫)",
        "gal_cat_climate": "🌍 জলবায়ু ও পরিবেশ (৭)",
        "gal_cat_children": "📚 শিশু শিক্ষা ও PYM (৭)",
        "gal_cat_women": "👩 নারী ও স্বাস্থ্য (৬)",
        "gal_cat_humanitarian": "🤝 মানবিক ও রক্তদান (২)",
        "gal_cat_partnership": "🌐 পার্টনারশিপ ও সভা (৩)",
        "volunteer_cta_title": "কারু শিখার আলোকযাত্রায় যুক্ত হোন",
        "volunteer_cta_desc": "২০১৯ সাল থেকে শুরু হওয়া আমাদের সামাজিক বিপ্লবে আপনার সক্রিয় অংশগ্রহণ, মেধা কিংবা সামর্থ্য দিয়ে সমাজ বিনির্মাণে ভূমিকা রাখুন।",
        "btn_apply_volunteer": "ভলান্টিয়ার ফর্ম পূরণ করুন",
        "future_tag": "আমাদের আগামীর রোডম্যাপ",
        "future_title": "ভবিষ্যৎ কর্মপরিকল্পনা ও টেকসই রূপরেখা",
        "future_desc": "আমরা সরকারি-বেসরকারি প্রতিষ্ঠান ও উন্নয়ন সংস্থাগুলোর সঙ্গে অংশীদারত্ব জোরদার করে সমাজকল্যাণ কার্যক্রমকে আরও গতিশীল ও টেকসই করতে প্রতিশ্রুতিবদ্ধ।",
        "f1_title": "শিশু শিক্ষা ও স্বাস্থ্যসেবা সম্প্রসারণ",
        "f1_desc": "সুবিধাবঞ্চিত শিশুদের জন্য স্থায়ী লার্নিং সেন্টার ও নিয়মিত ফ্রি হেলথ ক্যাম্প বিস্তার।",
        "f2_title": "যুব ও নারীদের কর্মসংস্থান সৃষ্টি",
        "f2_desc": "হ্যান্ড পেইন্ট ও হস্তশিল্পের মাধ্যমে গ্রামীণ নারীদের উদ্যোক্তা হিসেবে গড়ে তোলা ও বাজার সংযোগ।",
        "f3_title": "জলবায়ু সহিষ্ণু কৃষি ও পরিবেশ",
        "f3_desc": "কৃষি উদ্যোক্তা তৈরি, আধুনিক চারা উৎপাদন ও নিরাপদ পুষ্টিকর খাদ্য সুরক্ষা।",
        "f4_title": "সামাজিক সমতা ও অংশীদারত্ব",
        "f4_desc": "জেন্ডার সমতা, ডিজিটাল নিরাপত্তা ও জাতীয়-আন্তর্জাতিক উন্নয়ন সংস্থার সাথে যৌথ কাজ।",
        "contact_tag": "যোগাযোগ ও কেন্দ্রীয় কার্যালয়",
        "contact_title": "কারু শিখার সঙ্গে সরাসরি যোগাযোগ করুন",
        "contact_desc": "যেকোনো যৌথ সমাজকল্যাণ উদ্যোগ, শিশু শিক্ষা সহায়তা, পরিবেশ বা রক্তদান বিষয়ক তথ্যের জন্য আমাদের সাথে সরাসরি যোগাযোগ করুন।",
        "contact_addr_label": "প্রতিষ্ঠানের অফিস ও কার্যালয়:",
        "contact_addr_val": "লক্ষ্মীপুর পৌর স্টেশন মার্কেট, ফরিদপুর সদর, ফরিদপুর।",
        "contact_addr_sub": "Lakshmipur Pourashava Station Market, Faridpur Sadar, Faridpur.",
        "contact_phone_label": "সরাসরি ফোন নম্বর:",
        "contact_btn_call": "কল করুন →",
        "contact_wa_label": "অফিসিয়াল হোয়াটসঅ্যাপ:",
        "contact_btn_wa": "চ্যাট করুন →",
        "contact_btn_wa_direct": "হোয়াটসঅ্যাপে সরাসরি চ্যাট করুন",
        "contact_email_label": "অফিসিয়াল ইমেইল:",
        "contact_btn_mail": "মেইল পাঠান →",
        "contact_btn_map": "🗺️ গুগল ম্যাপে লোকেশন দেখুন ↗",
        "contact_btn_fb": "📘 অফিসিয়াল ফেসবুক পেজ ↗",
        "contact_btn_cert": "📜 সরকারি নিবন্ধন সনদপত্র দেখুন ↗",
        "contact_reg_label": "যুব উন্নয়ন অধিদপ্তর নিবন্ধন:",
        "contact_reg_date": "তারিখ: ২১/০১/২০২৬ খ্রি.",
        "contact_map_title": "গুগল ম্যাপে কারু শিখা কার্যালয়",
        "contact_map_addr": "লক্ষ্মীপুর পৌর স্টেশন মার্কেট, ফরিদপুর সদর, ফরিদপুর",
        "contact_map_gps": "GPS: 23.609495, 89.8416517",
        "contact_map_open": "বড় ম্যাপে খুলুন ↗",
        "footer_founded": "প্রতিষ্ঠা: ৩১ জানুয়ারি ২০১৯ • বায়তুল আমান, ফরিদপুর",
        "footer_desc": "কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটি ২০১৯ সালের ৩১ জানুয়ারি প্রতিষ্ঠার পর থেকে যুব উন্নয়ন, নারী ক্ষমতায়ন, শিশু শিক্ষা, স্বাস্থ্যসেবা, পরিবেশ সংরক্ষণ ও উদ্যোক্তা উন্নয়নে নিবেদিত একটি অলাভজনক সামাজিক সংস্থা।",
        "footer_addr": "📍 কার্যালয়: <span class=\"text-slate-300 font-semibold\">লক্ষ্মীপুর পৌর স্টেশন মার্কেট, ফরিদপুর সদর, ফরিদপুর।</span>",
        "footer_reg": "📜 যুব উন্নয়ন অধিদপ্তর নিবন্ধন নং: <strong class=\"text-orange-400\">যুউঅ-৯৭</strong>",
        "footer_view_cert": "সনদপত্র দেখুন",
        "footer_proj_title": "চলমান ৩টি প্রকল্প",
        "footer_pym": "Project Your Mentor (PYM)",
        "footer_coks": "Climate Olympiad (COKS)",
        "footer_ewgsf": "EWGSF প্রকল্প (নারী স্বাবলম্বিতা)",
        "footer_act": "৬৭টি বাস্তব কার্যক্রম",
        "footer_emergency": "জরুরি যোগাযোগ",
        "footer_fb": "ফেসবুক পেজ ফলো করুন",
        "footer_rights": "© ২০২৬ কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটি। সর্বস্বত্ব সংরক্ষিত।",
        "footer_privacy": "গোপনীয়তা নীতি",
        "footer_terms": "ব্যবহারের নিয়মাবলী",
        "don_badge": "উপায় ১ • সরাসরি অনুদান মাধ্যম",
        "don_title": "কারু শিখা সমাজকল্যাণ তহবিলে অনুদান",
        "don_sub": "আপনার প্রতিটি অনুদান সরাসরি Project Your Mentor ও সমাজকল্যাণে ব্যবহৃত হয়।",
        "don_lbl_amount": "অনুদানের পরিমাণ (টাকা / BDT)",
        "don_ph_amount": "যেমন: ৫০০ / ১০০০ / ২০০০",
        "don_help_amount": "অনুদানের পরিমাণ লিখুন (০-এর উপরে যেকোনো পরিমাণ)।",
        "amt_500": "৳৫০০",
        "amt_1000": "৳১,০০০",
        "amt_2000": "৳২,০০০",
        "amt_5000": "৳৫,০০০",
        "don_lbl_custom": "কাস্টম পরিমাণ (টাকা / BDT)",
        "don_lbl_gateway": "পেমেন্ট মাধ্যম নির্বাচন করুন",
        "don_tab_bkash": "bKash (বিকাশ)",
        "don_tab_nagad": "Nagad (নগদ)",
        "don_tab_bank": "Bank (ব্যাংক)",
        "don_badge_personal": "Personal (Send Money)",
        "don_badge_bank": "অফিসিয়াল ব্যাংক একাউন্ট",
        "don_mfs_subtext": "বাংলাদেশ / ২৪/৭ সচল",
        "don_lbl_bkash_no": "বিকাশ পার্সোনাল নম্বর:",
        "don_lbl_nagad_no": "নগদ পার্সোনাল নম্বর:",
        "don_copy_btn": "নম্বর কপি",
        "don_copied_btn": "✓ কপি হয়েছে!",
        "don_copy_ac": "একাউন্ট নং কপি",
        "don_copy_routing": "রাউটিং নং কপি",
        "don_bkash_inst": "বিকাশ অ্যাপ বা *২৪৭# থেকে 'Send Money' করুন এবং নিচে TrxID লিখুন।",
        "don_nagad_inst": "নগদ অ্যাপ বা *১৬৭# থেকে 'Send Money' করুন এবং নিচে TrxID লিখুন।",
        "don_bank_title_lbl": "ব্যাংকের নাম:",
        "don_bank_title_val": "সোনালী ব্যাংক পিএলসি (Sonali Bank PLC)",
        "don_bank_name_lbl": "একাউন্টের নাম:",
        "don_bank_ac_lbl": "একাউন্ট নম্বর:",
        "don_bank_routing_lbl": "রাউটিং নম্বর:",
        "don_bank_branch_lbl": "শাখা:",
        "don_bank_branch_val": "তেপাখোলা শাখা, ফরিদপুর",
        "don_bank_subtext": "BEFTN / NPSB / শাখা ডিপোজিট",
        "don_bank_inst": "BEFTN, NPSB, RTGS বা সরাসরি যেকোনো শাখা থেকে ডিপোজিট করা যাবে।",
        "don_lbl_anonymous": "আমি নাম প্রকাশে অনিচ্ছুক (Donate Anonymously)",
        "don_sub_anonymous": "নাম ও ফোন নম্বর ছাড়াই অনুদান দিতে টিক দিন। আপনার পরিচয় সম্পূর্ণ গোপন থাকবে।",
        "don_anonymous_notice": "✓ আপনার পরিচয় সম্পূর্ণ গোপন রাখা হবে। কারু শিখার সমাজকল্যাণ তহবিলে অবদানের জন্য আন্তরিক ধন্যবাদ।",
        "don_lbl_name": "আপনার পূর্ণ নাম",
        "don_ph_name": "যেমন: মো: রফিকুল ইসলাম",
        "don_lbl_phone": "মোবাইল নম্বর",
        "don_ph_phone": "01XXXXXXXXX",
        "don_lbl_trxid": "ট্রানজেকশন আইডি (TrxID) / স্লিপ নং",
        "don_ph_trxid": "যেমন: 9J38A7K9 অথবা ব্যাংক স্লিপ নং",
        "don_help_trxid": "টাকা পাঠানোর পর প্রাপ্ত TrxID বা স্লিপের রেফারেন্স নম্বর লিখুন।",
        "don_lbl_note": "বার্তা বা পরামর্শ (ঐচ্ছিক)",
        "don_ph_note": "কোনো বিশেষ বার্তা বা দোয়ার অনুরোধ থাকলে লিখুন...",
        "don_btn_submit": "অনুদানের তথ্য নিশ্চিত করুন",
        "don_success_title": "অনুদানের তথ্য জমা হয়েছে!",
        "don_success_sub": "আপনার প্রদত্ত তথ্য ও ট্রানজেকশন যাচাই (Verification) সাপেক্ষে চূড়ান্ত প্রাপ্তি নিশ্চিত করা হবে।",
        "don_receipt_badge": "প্রাথমিক দাখিল স্লিপ (যাচাইকরণ প্রক্রিয়াধীন)",
        "don_receipt_amt": "অনুদানের পরিমাণ:",
        "don_receipt_method": "পেমেন্ট মাধ্যম:",
        "don_receipt_trx": "ট্রানজেকশন আইডি:",
        "don_receipt_donor": "অনুদাতা:",
        "don_receipt_phone": "মোবাইল নম্বর:",
        "don_receipt_date": "তারিখ ও সময়:",
        "don_receipt_anon": "নাম প্রকাশে অনিচ্ছুক (Anonymous)",
        "don_btn_send_wa": "হোয়াটসঅ্যাপে পাঠান",
        "don_btn_send_mail": "ইমেইলে স্লিপ পাঠান",
        "don_btn_pdf": "পিডিএফ / স্লিপ ডাউনলোড",
        "don_btn_copy_slip": "স্লিপ কপি করুন",
        "don_receipt_pdf_tip": "💡 পরামর্শ: রশিদটি ডাউনলোড করে হোয়াটসঅ্যাপে এটাচমেন্ট (📎) হিসেবে পাঠাতে পারেন।",
        "don_btn_new_donate": "নতুন অনুদান বা বন্ধ করুন",
        "vol_title": "কারু শিখায় ভলান্টিয়ার রেজিস্ট্রেশন",
        "vol_sub": "আমাদের ৩টি চলমান প্রকল্প ও সামাজিক উদ্যোগে যুক্ত হয়ে সমাজ পরিবর্তনের সহযাত্রী হোন।",
        "vol_lbl_name": "পূর্ণ নাম",
        "vol_ph_name": "আপনার পুরো নাম",
        "vol_lbl_email": "ইমেইল ঠিকানা",
        "vol_ph_email": "name@example.com",
        "vol_lbl_phone": "ফোন নম্বর",
        "vol_ph_phone": "01XXXXXXXXX",
        "vol_lbl_education": "শিক্ষাগত যোগ্যতা",
        "vol_ph_education": "যেমন: এইচএসসি / স্নাতক / ডিপ্লোমা",
        "vol_lbl_profession": "পেশা",
        "vol_ph_profession": "যেমন: শিক্ষার্থী / চাকরিজীবী / উদ্যোক্তা",
        "vol_lbl_age": "বয়স",
        "vol_ph_age": "যেমন: ২২",
        "vol_lbl_blood": "রক্তের গ্রুপ",
        "vol_opt_select_blood": "-- রক্তের গ্রুপ নির্বাচন করুন * --",
        "blood_ap": "A+ (পজিটিভ)",
        "blood_an": "A- (নেগেটিভ)",
        "blood_bp": "B+ (পজিটিভ)",
        "blood_bn": "B- (নেগেটিভ)",
        "blood_op": "O+ (পজিটিভ)",
        "blood_on": "O- (নেগেটিভ)",
        "blood_abp": "AB+ (পজিটিভ)",
        "blood_abn": "AB- (নেগেটিভ)",
        "vol_lbl_domain": "পছন্দের প্রকল্প / কার্যক্ষেত্র",
        "vol_opt_select_domain": "-- পছন্দের প্রকল্প নির্বাচন করুন * --",
        "vol_opt_pym": "Project Your Mentor (PYM - শিশু শিক্ষা ও সুরক্ষা)",
        "vol_opt_coks": "Climate Olympiad (COKS - ক্লাইমেট ও বৃক্ষরোপণ)",
        "vol_opt_ewgsf": "EWGSF প্রকল্প (নারী ক্ষমতায়ন, হ্যান্ড পেইন্ট ও মাসিক স্বাস্থ্য)",
        "vol_opt_blood": "জরুরি রক্তদান ও ফ্রি মেডিকেল ক্যাম্পেইন",
        "vol_opt_media": "ডিজিটাল প্রচারণা, পডকাস্ট, রিলস ও পোস্টার ডিজাইন",
        "vol_opt_others": "অন্যান্য (Others)",
        "vol_ph_others": "পছন্দের ক্ষেত্রটি লিখুন (যেমন: ফটোগ্রাফি / ইভেন্ট / গবেষণা)",
        "vol_lbl_addr": "বর্তমান ঠিকানা",
        "vol_ph_addr": "যেমন: গ্রাম/মহল্লা, উপজেলা/থানা, জেলা",
        "vol_btn_submit": "আবেদন জমা দিন",
        "cert_m_badge": "✓ গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত",
        "cert_m_title": "সরকারি নিবন্ধন সনদপত্র",
        "cert_m_sub": "যুব উন্নয়ন অধিদপ্তর, ফরিদপুর • নিবন্ধন নম্বর: <span class=\"font-extrabold text-orange-400\">যুউঅ-৯৭</span>",
        "cert_img_alt": "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার যুব উন্নয়ন অধিদপ্তর নিবন্ধন সনদ - কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটি (যুউঅ-৯৭)",
        "cert_lbl_num": "নিবন্ধন নম্বর",
        "cert_val_num": "যুউঅ-৯৭",
        "cert_lbl_date": "নিবন্ধন তারিখ",
        "cert_val_date": "২১-০১-২০২৬",
        "cert_lbl_form": "সনদপত্র ফরম",
        "cert_val_form": "ফরম-'গ' (বিধি ৩)",
        "cert_lbl_auth": "ইস্যুকারী অধিদপ্তর",
        "cert_val_auth": "যুব উন্নয়ন অধিদপ্তর",
        "cert_reg_office": "📍 নিবন্ধিত কার্যালয়: লক্ষ্মীপুর পৌর স্টেশন মার্কেট, ফরিদপুর সদর, ফরিদপুর।",
        "cert_law_text": "আইন: যুব সংগঠন (নিবন্ধন এবং পরিচালনা) আইন, ২০১৫ এর ধারা ৪ এবং বিধিমালা, ২০১৭ এর বিধি ৩(৪) অনুযায়ী প্রদত্ত।",
        "cert_btn_dl": "📥 সনদপত্র ডাউনলোড / বড় করে দেখুন",
        "cert_btn_close": "বন্ধ করুন",
        "modal_c_title": "জরুরি যোগাযোগ ও ঠিকানা",
        "modal_c_sub": "কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটি",
        "modal_c_phone_lbl": "সরাসরি ফোন কল",
        "modal_c_phone_hours": "সকাল ৯টা - রাত ৯টা",
        "modal_c_phone_btn": "কল দিন →",
        "modal_c_wa_lbl": "হোয়াটসঅ্যাপ চ্যাট",
        "modal_c_wa_hint": "মেসেজ দিন ও তাত্ক্ষণিক যোগাযোগ করুন",
        "modal_c_wa_btn": "চ্যাট →",
        "modal_c_mail_lbl": "অফিসিয়াল ইমেইল",
        "modal_c_mail_hint": "যেকোনো অনুসন্ধান বা প্রস্তাব পাঠান",
        "modal_c_mail_btn": "মেইল →",
        "modal_c_addr_lbl": "অফিস ও কার্যালয়ের ঠিকানা",
        "modal_c_addr_val": "লক্ষ্মীপুর পৌর স্টেশন মার্কেট, ফরিদপুর সদর, ফরিদপুর।",
        "modal_c_map_btn": "গুগল ম্যাপে দেখুন ↗",
        "modal_c_cert_btn": "📜 নিবন্ধন সনদ (যুউঅ-৯৭)",
        "modal_c_fb_lbl": "অফিসিয়াল ফেসবুক পেজ",
        "modal_c_fb_btn": "পেজ দেখুন →",
        "modal_c_close": "বন্ধ করুন",
        "lb_tag": "মাঠপর্যায়ের স্থিরচিত্র",
        "lb_archive": "কারু শিখা আর্কাইভ",
        "bottom_contact": "যোগাযোগ",
        "bottom_volunteer": "স্বেচ্ছাসেবক",
        "bottom_top": "শীর্ষে"
    },
    "en": {
        "doc_title": "Karu Shikha Youth Development Society | Official Web Platform",
        "brand_karu": "Karu",
        "brand_shikha": "Shikha",
        "brand_subtitle": "Youth Development Society",
        "nav_about": "About Us",
        "nav_projects": "Projects",
        "nav_activities": "Activities (67)",
        "nav_committee": "Leadership",
        "nav_gallery": "Photo Gallery",
        "nav_contact": "Contact Us",
        "nav_future": "Future Vision",
        "nav_volunteer": "Join Volunteer",
        "nav_volunteer_btn": "🤝 Volunteer Form",
        "nav_whatsapp": "WhatsApp",
        "nav_donate": "Donate",
        "nav_donate_short": "Donate",
        "tip_call": "Direct Phone Call",
        "tip_call_direct": "Direct Phone Helpline",
        "tip_whatsapp": "Direct WhatsApp Chat",
        "tip_donate": "Support & Donate Now",
        "tip_cert": "Click to View Govt. Registration Certificate",
        "tip_bottom_contact": "Quick Contact, Phone & Address",
        "tip_bottom_volunteer": "Join as a Volunteer",
        "tip_bottom_top": "Scroll to Top",
        "hero_tag": "Established: January 31, 2019 • Faridpur, Bangladesh",
        "hero_title_1": "Sparking Skills, Equality &",
        "hero_title_highlight": "Humanitarian Progress",
        "hero_motto": "\"Empowering Youth, Transforming Society\" • Lighting the Youth Potential",
        "hero_desc": "Since 2019, dedicated to youth empowerment, gender equality, underprivileged child education, healthcare, climate action, and artisan incubation.",
        "hero_btn_explore": "Explore Programs & Projects",
        "hero_btn_volunteer": "Join Our Collective",
        "hero_hint": "💡 Interact with mouse or touch to explore 3D particle motion",
        "domain_1": "🌱 Youth Development",
        "domain_2": "👩 Women Empowerment",
        "domain_3": "📚 Child Education",
        "domain_4": "🩺 Healthcare & Blood",
        "domain_5": "🌍 Climate & Ecology",
        "domain_6": "🎨 Artisan Enterprise",
        "stat_years": "Years of Active Impact (Since 2019)",
        "stat_activities": "Milestones & Key Activities",
        "stat_trees": "Trees Planted & Climate Drives",
        "stat_women": "Women & Youth Entrepreneurs",
        "shape_logo": "🏷️ 3D Logo",
        "shape_shikha": "🔥 Eternal Flame",
        "shape_hands": "🤲 Hands of Unity",
        "shape_heart": "💖 Compassion & Care",
        "about_tag": "Organizational Profile",
        "about_title": "Karu Shikha Youth Development Society",
        "about_sub": "Karu Shikha Youth Development Society • Established: January 31, 2019",
        "about_cert_text": "✓ Govt. Registered (Reg No: YuU-97)",
        "about_cert_badge": "View Certificate 📜",
        "about_fb_btn": "📘 Facebook Page",
        "vision_title": "Our Vision",
        "vision_desc": "\"To build an empowered, educated, skilled, and compassionate youth generation that leads society and ensures sustainable development.\"",
        "vision_target": "🎯 Goal: Youth Leadership & Generational Impact",
        "mission_title": "Our Mission",
        "mission_1": "Equipping youth with ethical leadership, life skills, and self-reliance.",
        "mission_2": "Providing continuous educational and health mentoring to underprivileged children.",
        "mission_3": "Mobilizing youth to tackle the climate crisis and environmental degradation.",
        "mission_4": "Empowering women and young girls through artisan incubation and rights advocacy.",
        "mission_5": "Expanding public health awareness, free medical outreach, and blood donation drives.",
        "about_pillars_title": "Core Pillars & Strategic Focus Areas:",
        "pillar_1_title": "📚 Education & Child Development",
        "pillar_1_desc": "Learning aid, educational supplies, child protection & nutritional awareness for underprivileged kids.",
        "pillar_2_title": "🌿 Climate & Ecology",
        "pillar_2_desc": "Climate Olympiad, afforestation, plastic waste reduction & ecological stewardship campaigns.",
        "pillar_3_title": "🩺 Healthcare & Blood Support",
        "pillar_3_desc": "Free medical camps, emergency voluntary blood donations, first aid & health counseling.",
        "pillar_4_title": "👩 Women & Youth Empowerment",
        "pillar_4_desc": "Handicrafts, textile hand-paint training, micro-entrepreneurship & menstrual health drives.",
        "pillar_5_title": "🤝 Humanitarian Relief",
        "pillar_5_desc": "Disaster emergency relief, winter clothing distribution & community welfare packages.",
        "pillar_6_title": "🚀 Youth Leadership & Innovation",
        "pillar_6_desc": "Leadership seminars, digital skills, entrepreneurial mentorship & youth mobilization forums.",
        "projects_tag": "Active Signature Initiatives",
        "projects_title": "Active Flagship Projects",
        "projects_desc": "3 Signature Strategic Projects of Karu Shikha—PYM, COKS & EWGSF.",
        "pym_sub": "Specialized Underprivileged Child Education & Child Protection Initiative",
        "pym_quote": "\"Project Your Mentor believes children are the future. Ensuring education, protection, and rights builds compassionate, skilled, and responsible future citizens.\"",
        "pym_obj_title": "Core Objectives:",
        "pym_obj_1": "• Providing quality primary and informal education to underprivileged children.",
        "pym_obj_2": "• Fostering creative thinking, moral values, and practical life learning.",
        "pym_obj_3": "• Ensuring child safety, abuse prevention, and safeguarding at community levels.",
        "pym_obj_4": "• Establishing child rights and guaranteeing joyful, nurturing childhoods.",
        "pym_act_title": "Flagship Activities:",
        "pym_act_1": "• Educational aid and stationery distribution for underprivileged children.",
        "pym_act_2": "• Interactive learning through storytelling, sports, and creative workshops.",
        "pym_act_3": "• Child protection training and community anti-abuse awareness campaigns.",
        "pym_act_4": "• Parenting counseling, seminars, and child wellness guidance for guardians.",
        "pym_btn_join": "Join as a Mentor",
        "pym_btn_donate": "Donate to Child Education Fund",
        "coks_quote": "\"Greening tomorrow begins with action today.\" — Inspiring students on climate change, renewable energy, tree conservation, and proactive eco-stewardship.",
        "coks_obj_title": "Objectives & Beneficiaries:",
        "coks_obj_1": "• Secondary and higher secondary school and college students.",
        "coks_obj_2": "• University youth, youth environmental ambassadors, and eco-advocates.",
        "coks_obj_3": "• Engaging educators, school administrations, and community guardians.",
        "coks_obj_4": "• Raising grassroots awareness on lead exposure and single-use plastic reduction.",
        "coks_act_title": "Flagship Activities:",
        "coks_act_1": "• Organizing annual district-wide and institutional Climate Olympiads.",
        "coks_act_2": "• Mass eco-awareness sessions and continuous tree plantation campaigns.",
        "coks_act_3": "• Establishing school and college Karu Shikha Climate Clubs.",
        "coks_act_4": "• Climate Artivism competitions, posters, and ecological exhibitions.",
        "coks_btn_join": "Join Climate Club",
        "coks_btn_donate": "Donate to Tree Plantation Fund",
        "ewgsf_title": "EWGSF Project",
        "ewgsf_quote": "\"Women empowerment is key to sustainable futures.\" — Driving artisanal self-reliance, textile hand-painting, eco-enterprises, and menstrual health dignity.",
        "ewgsf_obj_title": "Core Objectives:",
        "ewgsf_obj_1": "• Fostering resilience, confidence, and safe spaces for adolescent girls.",
        "ewgsf_obj_2": "• Cultivating sustainable economic self-reliance for rural women.",
        "ewgsf_obj_3": "• Breaking taboos via menstrual hygiene education & sanitary napkin access.",
        "ewgsf_obj_4": "• Training grassroots women in artisanal textile hand-painting & craft enterprise.",
        "ewgsf_act_title": "Flagship Activities:",
        "ewgsf_act_1": "• Free sanitary napkin distributions and women's health counseling.",
        "ewgsf_act_2": "• Practical hand-painting, block-batik, and artisanal craft workshops.",
        "ewgsf_act_3": "• Community courtyard dialogues on mental health and menstrual dignity.",
        "ewgsf_act_4": "• Market linkages and artisan product exhibitions for women entrepreneurs.",
        "ewgsf_btn_join": "Enroll in Training",
        "ewgsf_btn_donate": "Donate to Women Enterprise Fund",
        "activities_tag": "Rich Field Legacy",
        "activities_title": "Key Activities of Karu Shikha (67 Milestones)",
        "activities_desc": "Explore all 67 on-ground grassroots initiatives, institutional partnerships, campaigns, and community milestones realized since 2019.",
        "activities_search_placeholder": "Search activities (e.g. Climate, Blood, WaterAid, Hand Paint, Equality...)",
        "activities_hint": "💡 Filter by keyword or choose category pill above",
        "act_cat_all": "All Milestones (67)",
        "act_cat_climate": "🌍 Climate & Ecology (10)",
        "act_cat_women": "👩 Women & Equality (13)",
        "act_cat_children": "📚 Child Education & Health (6)",
        "act_cat_craft": "🎨 Handcraft & Enterprise (8)",
        "act_cat_humanitarian": "🤝 Humanitarian & Blood (9)",
        "act_cat_partnership": "🏛️ Governance & Partnerships (21)",
        "activities_count_badge": "Displaying: 67 Milestones",
        "act_view_all_btn": "View All 67 Milestones (+55 more) ▾",
        "comm_tag": "Leadership & Organization",
        "comm_reg_badge": "Reg No: YuU-97",
        "comm_title": "Leadership & Members Directory",
        "comm_desc": "Official Executive Council and General Members directory of Karu Shikha Youth Development Society, authorized by Department of Youth Development (Reg: YuU-97).",
        "comm_tab_exec": "🏛️ Executive Council (7 Members)",
        "comm_tab_gen": "👥 General Members (25 Members)",
        "comm_search_ph": "Search by member name, role, qualification, profession...",
        "member_count_init": "7 Members",
        "gallery_tag": "Field Photographs",
        "gallery_title": "Official Field Photo Gallery",
        "gallery_desc": "Glimpse our on-ground grassroots journey across child mentoring, Climate Olympiad, sanitary napkin distribution, and artisan workshops.",
        "gal_cat_all": "All Photos (25)",
        "gal_cat_climate": "🌍 Climate & Ecology (7)",
        "gal_cat_children": "📚 Child Mentoring & PYM (7)",
        "gal_cat_women": "👩 Women & Health (6)",
        "gal_cat_humanitarian": "🤝 Humanitarian & Blood (2)",
        "gal_cat_partnership": "🌐 Partnerships & Forum (3)",
        "volunteer_cta_title": "Become a Torchbearer of Karu Shikha",
        "volunteer_cta_desc": "Join our community journey started in 2019. Your contribution of passion, skills, or resources sparks lasting generational change.",
        "btn_apply_volunteer": "Submit Volunteer Application",
        "future_tag": "Our Strategic Roadmap",
        "future_title": "Strategic Vision & Sustainable Roadmap",
        "future_desc": "Committed to expanding partnerships with government, non-government, and international organizations to scale sustainable social development.",
        "f1_title": "Child Education & Health Expansion",
        "f1_desc": "Establishing permanent grassroots learning centers and continuous medical outreach for underprivileged children.",
        "f2_title": "Youth & Women Livelihood Incubation",
        "f2_desc": "Handpaint and artisanal skill building, incubation, and market linkage for grassroots women entrepreneurs.",
        "f3_title": "Climate-Resilient Agriculture & Ecology",
        "f3_desc": "Developing youth agripreneurs, climate-adaptive seedling nurseries, and safe food security.",
        "f4_title": "Social Equity & Broad Alliances",
        "f4_desc": "Championing gender equality, child online safety, and collaborative programs with national and global development bodies.",
        "contact_tag": "Contact & Headquarters",
        "contact_title": "Connect Directly With Karu Shikha",
        "contact_desc": "Reach out for community partnerships, child education sponsorships, climate action, or emergency blood donor support.",
        "contact_addr_label": "Office & Headquarters Address:",
        "contact_addr_val": "Lakshmipur Pourashava Station Market, Faridpur Sadar, Faridpur.",
        "contact_addr_sub": "Faridpur Sadar, Faridpur - 7800, Bangladesh.",
        "contact_phone_label": "Direct Helpline:",
        "contact_btn_call": "Call Now →",
        "contact_wa_label": "Official WhatsApp:",
        "contact_btn_wa": "Chat Now →",
        "contact_btn_wa_direct": "Direct WhatsApp Chat",
        "contact_email_label": "Official Email Address:",
        "contact_btn_mail": "Send Email →",
        "contact_btn_map": "🗺️ View on Google Maps ↗",
        "contact_btn_fb": "📘 Official Facebook Page ↗",
        "contact_btn_cert": "📜 View Official Govt. Certificate ↗",
        "contact_reg_label": "Govt. Registration Status:",
        "contact_reg_date": "Date: January 21, 2026",
        "contact_map_title": "Karu Shikha Headquarters on Google Maps",
        "contact_map_addr": "Lakshmipur Pourashava Station Market, Faridpur Sadar, Faridpur",
        "contact_map_gps": "GPS: 23.609495, 89.8416517",
        "contact_map_open": "Open in Large Map ↗",
        "footer_founded": "Established: January 31, 2019 • Baitul Aman, Faridpur",
        "footer_desc": "Karu Shikha Youth Development Society was established on January 31, 2019, dedicated to youth empowerment, women's equality, child education, healthcare, climate action, and artisan entrepreneurship.",
        "footer_addr": "📍 Headquarters: <span class=\"text-slate-300 font-semibold\">Lakshmipur Pourashava Station Market, Faridpur Sadar, Faridpur.</span>",
        "footer_reg": "📜 Youth Development Dept. Reg No: <strong class=\"text-orange-400\">YuU-97</strong>",
        "footer_view_cert": "View Certificate",
        "footer_proj_title": "3 Active Projects",
        "footer_pym": "Project Your Mentor (PYM)",
        "footer_coks": "Climate Olympiad (COKS)",
        "footer_ewgsf": "EWGSF Project (Women Self-Reliance)",
        "footer_act": "67 Grassroots Milestones",
        "footer_emergency": "Emergency Contact",
        "footer_fb": "Follow Facebook Page",
        "footer_rights": "© 2026 Karu Shikha Youth Development Society. All rights reserved.",
        "footer_privacy": "Privacy Policy",
        "footer_terms": "Terms of Use",
        "don_badge": "Option 1 • Direct Donation Channels",
        "don_title": "Donate to Karu Shikha Welfare Fund",
        "don_sub": "Every contribution directly funds Project Your Mentor and grassroots welfare.",
        "don_lbl_amount": "Donation Amount (BDT)",
        "don_ph_amount": "e.g. 500 / 1000 / 2000",
        "don_help_amount": "Enter your donation amount (any amount greater than 0).",
        "amt_500": "BDT 500",
        "amt_1000": "BDT 1,000",
        "amt_2000": "BDT 2,000",
        "amt_5000": "BDT 5,000",
        "don_lbl_custom": "Custom Amount (BDT)",
        "don_lbl_gateway": "Select Payment Channel",
        "don_tab_bkash": "bKash (Send Money)",
        "don_tab_nagad": "Nagad (Send Money)",
        "don_tab_bank": "Bank Account",
        "don_badge_personal": "Personal (Send Money)",
        "don_badge_bank": "Official Bank Account",
        "don_mfs_subtext": "Bangladesh / Active 24/7",
        "don_lbl_bkash_no": "bKash Personal Number:",
        "don_lbl_nagad_no": "Nagad Personal Number:",
        "don_copy_btn": "Copy Number",
        "don_copied_btn": "✓ Copied!",
        "don_copy_ac": "Copy A/C No",
        "don_copy_routing": "Copy Routing",
        "don_bkash_inst": "Use bKash App or *247# to Send Money, then enter TrxID below.",
        "don_nagad_inst": "Use Nagad App or *167# to Send Money, then enter TrxID below.",
        "don_bank_title_lbl": "Bank Name:",
        "don_bank_title_val": "Sonali Bank PLC",
        "don_bank_name_lbl": "Account Name:",
        "don_bank_ac_lbl": "Account Number:",
        "don_bank_routing_lbl": "Routing Number:",
        "don_bank_branch_lbl": "Branch:",
        "don_bank_branch_val": "Tepakhola Branch, Faridpur",
        "don_bank_subtext": "BEFTN / NPSB / Branch Deposit",
        "don_bank_inst": "Accepts BEFTN, NPSB, RTGS or direct deposit from any branch.",
        "don_lbl_anonymous": "Donate Anonymously",
        "don_sub_anonymous": "Check to donate without name or phone number. Identity remains confidential.",
        "don_anonymous_notice": "✓ Your identity will remain strictly confidential. Thank you for supporting Karu Shikha welfare initiatives.",
        "don_lbl_name": "Your Full Name",
        "don_ph_name": "e.g. Rafiqul Islam",
        "don_lbl_phone": "Mobile Phone Number",
        "don_ph_phone": "01XXXXXXXXX",
        "don_lbl_trxid": "Transaction ID (TrxID) / Deposit Slip No",
        "don_ph_trxid": "e.g. 9J38A7K9 or Bank Deposit Slip No",
        "don_help_trxid": "Enter the TrxID received after sending money or bank deposit slip number.",
        "don_lbl_note": "Message or Note (Optional)",
        "don_ph_note": "Any special message or instructions...",
        "don_btn_submit": "Confirm Donation Information",
        "don_success_title": "Donation Details Submitted!",
        "don_success_sub": "Your submitted details will be officially confirmed upon transaction verification.",
        "don_receipt_badge": "Preliminary Submission Slip (Verification Pending)",
        "don_receipt_amt": "Donation Amount:",
        "don_receipt_method": "Payment Channel:",
        "don_receipt_trx": "Transaction ID:",
        "don_receipt_donor": "Donor:",
        "don_receipt_phone": "Mobile Phone:",
        "don_receipt_date": "Date & Time:",
        "don_receipt_anon": "Anonymous Donor",
        "don_btn_send_wa": "Send via WhatsApp",
        "don_btn_send_mail": "Send Slip via Email",
        "don_btn_pdf": "Download PDF / Slip",
        "don_btn_copy_slip": "Copy Slip",
        "don_receipt_pdf_tip": "💡 Tip: Download the receipt slip and attach (📎) it in WhatsApp.",
        "don_btn_new_donate": "New Donation / Close",
        "vol_title": "Volunteer Registration with Karu Shikha",
        "vol_sub": "Join our 3 flagship projects and community initiatives to spark transformative change.",
        "vol_lbl_name": "Full Name",
        "vol_ph_name": "Your full legal name",
        "vol_lbl_email": "Email Address",
        "vol_ph_email": "name@example.com",
        "vol_lbl_phone": "Phone Number",
        "vol_ph_phone": "01XXXXXXXXX",
        "vol_lbl_education": "Educational Qualification",
        "vol_ph_education": "e.g. HSC / Bachelor's / Diploma",
        "vol_lbl_profession": "Profession / Occupation",
        "vol_ph_profession": "e.g. Student / Service Holder / Entrepreneur",
        "vol_lbl_age": "Age",
        "vol_ph_age": "e.g. 22",
        "vol_lbl_blood": "Blood Group",
        "vol_opt_select_blood": "-- Select Blood Group * --",
        "blood_ap": "A+ (Positive)",
        "blood_an": "A- (Negative)",
        "blood_bp": "B+ (Positive)",
        "blood_bn": "B- (Negative)",
        "blood_op": "O+ (Positive)",
        "blood_on": "O- (Negative)",
        "blood_abp": "AB+ (Positive)",
        "blood_abn": "AB- (Negative)",
        "vol_lbl_domain": "Preferred Initiative / Domain",
        "vol_opt_select_domain": "-- Select Preferred Project * --",
        "vol_opt_pym": "Project Your Mentor (PYM - Child Mentoring & Protection)",
        "vol_opt_coks": "Climate Olympiad (COKS - Climate Action & Afforestation)",
        "vol_opt_ewgsf": "EWGSF Project (Women Empowerment, Handpaint & Health)",
        "vol_opt_blood": "Emergency Voluntary Blood Donation & Free Medical Camps",
        "vol_opt_media": "Digital Media, Podcasts, Video Reels & Design",
        "vol_opt_others": "Others",
        "vol_ph_others": "Specify your preferred area (e.g. Photography / Events / Research)",
        "vol_lbl_addr": "Present Address",
        "vol_ph_addr": "e.g. Village/Area, Upazila/Thana, District",
        "vol_btn_submit": "Submit Application",
        "cert_m_badge": "✓ Approved by Govt. of Bangladesh",
        "cert_m_title": "Government Registration Certificate",
        "cert_m_sub": "Department of Youth Development, Faridpur • Reg No: <span class=\"font-extrabold text-orange-400\">YuU-97</span>",
        "cert_img_alt": "Govt of the People's Republic of Bangladesh DYD Registration Certificate - Karu Shikha Youth Development Society (Reg: YuU-97)",
        "cert_lbl_num": "Registration No",
        "cert_val_num": "YuU-97",
        "cert_lbl_date": "Registration Date",
        "cert_val_date": "21-01-2026",
        "cert_lbl_form": "Certificate Form",
        "cert_val_form": "Form-'Ga' (Rule 3)",
        "cert_lbl_auth": "Issuing Authority",
        "cert_val_auth": "Dept of Youth Development",
        "cert_reg_office": "📍 Registered Office: Lakshmipur Pourashava Station Market, Faridpur Sadar, Faridpur.",
        "cert_law_text": "Legal Authority: Granted under Section 4 of Youth Organization (Registration & Regulation) Act 2015 & Rule 3(4) of Rules 2017.",
        "cert_btn_dl": "📥 Download / View High-Res Certificate",
        "cert_btn_close": "Close",
        "modal_c_title": "Emergency Contact & Headquarters",
        "modal_c_sub": "Karu Shikha Youth Development Society",
        "modal_c_phone_lbl": "Direct Phone Helpline",
        "modal_c_phone_hours": "9:00 AM - 9:00 PM",
        "modal_c_phone_btn": "Call Now →",
        "modal_c_wa_lbl": "WhatsApp Chat",
        "modal_c_wa_hint": "Instant chat and support helpline",
        "modal_c_wa_btn": "Chat →",
        "modal_c_mail_lbl": "Official Email Address",
        "modal_c_mail_hint": "Send inquiries or partnership proposals",
        "modal_c_mail_btn": "Email →",
        "modal_c_addr_lbl": "Headquarters & Office Address",
        "modal_c_addr_val": "Lakshmipur Pourashava Station Market, Faridpur Sadar, Faridpur.",
        "modal_c_map_btn": "Google Maps ↗",
        "modal_c_cert_btn": "📜 Govt. Certificate (YuU-97)",
        "modal_c_fb_lbl": "Official Facebook Page",
        "modal_c_fb_btn": "Visit Page →",
        "modal_c_close": "Close",
        "lb_tag": "Field Photograph",
        "lb_archive": "Karu Shikha Archive",
        "bottom_contact": "Contact",
        "bottom_volunteer": "Volunteer",
        "bottom_top": "Top"
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

    // 6. Mobile Menu & Header Scroll Handling
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const headerEl = document.querySelector('header');

    function updateMobileMenuIcon(isOpen) {
        if (!mobileMenuIcon) return;
        if (isOpen) {
            mobileMenuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
        } else {
            mobileMenuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>';
        }
    }

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const willOpen = mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            updateMobileMenuIcon(willOpen);
        });

        mobileMenu.querySelectorAll('a, button').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                updateMobileMenuIcon(false);
            });
        });

        // Close when tapping anywhere outside header/menu
        document.addEventListener('click', (e) => {
            if (!mobileMenu.classList.contains('hidden')) {
                if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                    mobileMenu.classList.add('hidden');
                    updateMobileMenuIcon(false);
                }
            }
        });
    }

    // Header scroll background elevation
    if (headerEl) {
        window.addEventListener('scroll', () => {
            headerEl.classList.toggle('header-scrolled', window.scrollY > 15);
        }, { passive: true });
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

    document.documentElement.lang = lang;

    if (dict['doc_title']) {
        document.title = dict['doc_title'];
    }

    // Standard textContent / innerHTML i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            if (dict[key].includes('<')) {
                el.innerHTML = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    });

    // Input placeholder translations
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) {
            el.placeholder = dict[key];
        }
    });

    // Tooltip / Title translations
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (dict[key]) {
            el.title = dict[key];
        }
    });

    // Image alt translations
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.getAttribute('data-i18n-alt');
        if (dict[key]) {
            el.alt = dict[key];
        }
    });

    // Fallback explicit placeholder targets
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
            'all': 'সব ছবি (২৫)',
            'climate': '🌍 জলবায়ু ও পরিবেশ (৭)',
            'children': '📚 শিশু শিক্ষা ও PYM (৭)',
            'women': '👩 নারী ও স্বাস্থ্য (৬)',
            'humanitarian': '🤝 মানবিক ও রক্তদান (২)',
            'partnership': '🌐 পার্টনারশিপ ও সভা (৩)'
        },
        en: {
            'all': 'All Photos (25)',
            'climate': '🌍 Climate & Ecology (7)',
            'children': '📚 Child Mentoring & PYM (7)',
            'women': '👩 Women & Health (6)',
            'humanitarian': '🤝 Humanitarian & Blood (2)',
            'partnership': '🌐 Partnerships & Forum (3)'
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
            <div class="glass-panel glass-panel-hover rounded-2xl p-4 sm:p-5 border border-white/10 ${style.border} flex flex-col justify-between h-full transition-all group">
                <div class="flex-1">
                    <div class="flex items-center justify-between mb-2.5 gap-2">
                        <span class="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center font-bold text-[11px] sm:text-xs text-sky-400 group-hover:bg-[#0284c7] group-hover:text-white transition-colors shrink-0">
                            ${currentLang === 'bn' ? idLabel : engId}
                        </span>
                        <span class="text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 rounded-full border ${style.badge} truncate max-w-[200px]">
                            ${tagText}
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5">
                        <span class="text-lg sm:text-xl shrink-0 mt-0.5 group-hover:scale-125 transition-transform">${act.icon}</span>
                        <h4 class="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-sky-300 transition-colors leading-relaxed line-clamp-3">
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

const galleryLocMapEn = {
    'কারু শিখা প্রধান কার্যালয়': 'Karu Shikha Headquarters, Faridpur',
    'সরকারি রাজেন্দ্র কলেজ, ফরিদপুর': 'Govt Rajendra College, Faridpur',
    'লার্নিং সেন্টার, ফরিদপুর': 'Karu Shikha Learning Center, Faridpur',
    'উপজেলা যুব উন্নয়ন কার্যালয়': 'Upazila Youth Development Office, Faridpur',
    'ভাজনডাঙ্গা, ফরিদপুর': 'Bhajandanga, Faridpur',
    'উপজেলা কার্যালয়, ফরিদপুর': 'Upazila Parishad Complex, Faridpur',
    'সি এন্ড বি ঘাট, ফরিদপুর': 'C&B Ghat, Faridpur',
    'আদর্শ বালিকা বিদ্যালয়, ফরিদপুর': 'Adarsha Girls High School, Faridpur',
    'পরামানিক পাড়া প্রাথমিক বিদ্যালয়': 'Pramanikpara Primary School, Faridpur',
    'জেলা প্রশাসন কার্যালয়, ফরিদপুর': 'Faridpur District Administration Office',
    'ফরিদপুর': 'Faridpur, Bangladesh',
    'ফরিদপুর প্রেস ক্লাব': 'Faridpur Press Club',
    'ফরিদপুর-ভাঙ্গা হাইওয়ে': 'Faridpur-Bhanga Highway',
    'কারু শিখা পাঠশালা': 'Karu Shikha Community Pathshala',
    'ফরিদপুর সদর': 'Faridpur Sadar, Faridpur',
    'শান্তি নিবাস, টেপাখোলা': 'Shanti Nibash, Tepakhola, Faridpur',
    'ফরিদপুর ডায়াবেটিক হাসপাতাল': 'Faridpur Diabetic Hospital'
};

function renderGallery() {
    const container = document.getElementById('gallery-grid');
    if (!container || !window.KARU_SHIKHA_GALLERY) return;

    const all = window.KARU_SHIKHA_GALLERY;
    const filtered = all.filter(item => {
        return currentGalleryFilter === 'all' || item.category === currentGalleryFilter;
    });

    const categoryTagMap = {
        'children': 'Child Mentoring (PYM)',
        'climate': 'Climate & Ecology',
        'women': 'Women Empowerment (EWGSF)',
        'humanitarian': 'Humanitarian & Blood',
        'partnership': 'Partnerships & Forum'
    };

    container.innerHTML = filtered.map(item => {
        const titleText = currentLang === 'bn' ? item.title : (item.title_en || item.title);
        const tagText = currentLang === 'bn' ? item.tag : (categoryTagMap[item.category] || 'Field Action');
        const locText = currentLang === 'bn' ? item.location : (galleryLocMapEn[item.location] || 'Faridpur, Bangladesh');
        const viewText = currentLang === 'bn' ? '🔍 বড় করে দেখুন' : '🔍 View Full';

        return `
            <div class="gallery-card glass-panel rounded-2xl overflow-hidden border border-white/10 cursor-pointer group flex flex-col justify-between" onclick="openGalleryLightbox('${item.file}')">
                <div class="relative overflow-hidden aspect-[4/3] bg-slate-950">
                    <img src="assets/gallery/${item.file}" alt="${titleText}" loading="lazy" class="gallery-img w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                    <span class="absolute top-2.5 left-2.5 text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-900/85 backdrop-blur-md text-orange-400 border border-orange-500/30">
                        ${tagText}
                    </span>
                </div>
                <div class="p-3.5 sm:p-4 flex flex-col flex-1 justify-between">
                    <div>
                        <h4 class="text-xs sm:text-sm font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-2 mb-1.5 leading-snug">
                            ${titleText}
                        </h4>
                        <p class="text-[11px] text-slate-400 flex items-center gap-1 line-clamp-1">
                            <span>📍</span> <span>${locText}</span>
                        </p>
                    </div>
                    <div class="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-sky-400 font-semibold">
                        <span>${viewText}</span>
                        <span class="text-slate-500 text-[10px]">${item.date || (currentLang === 'bn' ? '২০২৬' : '2026')}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Global hook for lightbox
window.openGalleryLightbox = function(filename) {
    const lightbox = document.getElementById('gallery-lightbox');
    const img = document.getElementById('lightbox-image') || document.getElementById('lightbox-img');
    const title = document.getElementById('lightbox-title');
    const loc = document.getElementById('lightbox-location');
    const tagEl = document.getElementById('lightbox-tag');

    if (!lightbox || !img) return;

    const item = window.KARU_SHIKHA_GALLERY.find(g => g.file === filename);
    if (item) {
        const categoryTagMap = {
            'children': 'Child Mentoring (PYM)',
            'climate': 'Climate & Ecology',
            'women': 'Women Empowerment (EWGSF)',
            'humanitarian': 'Humanitarian & Blood',
            'partnership': 'Partnerships & Forum'
        };
        const titleText = currentLang === 'bn' ? item.title : (item.title_en || item.title);
        const locName = currentLang === 'bn' ? item.location : (galleryLocMapEn[item.location] || 'Faridpur, Bangladesh');
        const dateText = currentLang === 'bn' ? (item.date || '২০২৬') : '2026';
        
        img.src = `assets/gallery/${item.file}`;
        img.alt = titleText;
        if (title) title.textContent = titleText;
        if (loc) loc.textContent = `📍 ${locName} • ${dateText}`;
        if (tagEl) tagEl.textContent = currentLang === 'bn' ? (item.tag || 'মাঠপর্যায়ের স্থিরচিত্র') : (categoryTagMap[item.category] || 'Field Photograph');
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
    // ==========================================
    // GOOGLE SHEETS WEBHOOK (Cloud Sync & Forensics)
    // ==========================================
    const GOOGLE_SHEET_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbx_5NlyG_WFZLjPwkDyxQCpo3k8uHwW7wbpzWA3sX3zpCoK53oVfCnEKkgygrbTFnq-jg/exec';

    // Device, Browser, IP & Traffic Source Collector
    const clientMeta = {
        ip: 'N/A',
        location: 'Bangladesh',
        device: 'Web Client',
        source: document.referrer ? (document.referrer.includes('facebook') ? 'Facebook' : document.referrer.includes('google') ? 'Google' : document.referrer) : 'Direct'
    };

    try {
        const ua = navigator.userAgent || '';
        let os = 'Unknown OS';
        if (/Android/i.test(ua)) os = 'Android Mobile';
        else if (/iPhone|iPad|iPod/i.test(ua)) os = 'iOS Device';
        else if (/Windows/i.test(ua)) os = 'Windows PC';
        else if (/Macintosh|Mac OS X/i.test(ua)) os = 'Mac';
        else if (/Linux/i.test(ua)) os = 'Linux';

        let browser = 'Browser';
        if (/Edg/i.test(ua)) browser = 'Edge';
        else if (/Chrome/i.test(ua) && !/Edg/i.test(ua)) browser = 'Chrome';
        else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) browser = 'Safari';
        else if (/Firefox/i.test(ua)) browser = 'Firefox';

        clientMeta.device = `${os} (${browser})`;

        // Asynchronously pre-fetch client IP and city/country in the background
        fetch('https://ipapi.co/json/')
            .then(r => r.json())
            .then(d => {
                if (d && d.ip) clientMeta.ip = d.ip;
                if (d && (d.city || d.country_name)) {
                    clientMeta.location = `${d.city || ''}, ${d.country_name || 'Bangladesh'}`.replace(/^, /, '');
                }
            })
            .catch(() => {
                fetch('https://api.ipify.org?format=json')
                    .then(r => r.json())
                    .then(d => { if (d && d.ip) clientMeta.ip = d.ip; })
                    .catch(() => { clientMeta.ip = 'N/A'; });
            });
    } catch (e) {
        console.log('Client meta notice:', e);
    }

    // ==========================================
    // DONATION MODAL (Method 1: bKash, Nagad, Bank + Anonymous Option)
    // ==========================================
    const donateModal = document.getElementById('donate-modal');
    const donateTriggers = document.querySelectorAll('.open-donate-modal');
    const closeDonateModal = document.getElementById('close-donate-modal');
    const donateFormView = document.getElementById('donate-form-view');
    const donateSuccessView = document.getElementById('donate-success-view');
    const donateForm = document.getElementById('donate-form');
    const amountButtons = document.querySelectorAll('.amount-pill');
    const customAmountInput = document.getElementById('custom-donation-amount');
    const channelTabs = document.querySelectorAll('#payment-channel-tabs .pay-channel-btn');
    const channelDetailsBox = document.getElementById('channel-details-box');
    const channelMfsDetails = document.getElementById('channel-mfs-details');
    const channelBankDetails = document.getElementById('channel-bank-details');
    const channelTypeBadge = document.getElementById('channel-type-badge');
    const channelNumLabel = document.getElementById('channel-num-label');
    const channelMfsInstruction = document.getElementById('channel-mfs-instruction');
    const copyMfsBtn = document.getElementById('copy-mfs-btn');
    const copyBankBtns = document.querySelectorAll('.copy-bank-field-btn');
    const anonymousCheckbox = document.getElementById('donate-anonymous');
    const donorContactFields = document.getElementById('donor-contact-fields');
    const donorAnonymousNotice = document.getElementById('donor-anonymous-notice');
    const donateNameInput = document.getElementById('donate-name');
    const donatePhoneInput = document.getElementById('donate-phone');
    const donateTrxInput = document.getElementById('donate-trxid');
    const donateNoteInput = document.getElementById('donate-note');

    // Receipt View Elements
    const receiptAmountEl = document.getElementById('receipt-amount');
    const receiptMethodEl = document.getElementById('receipt-method');
    const receiptTrxidEl = document.getElementById('receipt-trxid');
    const receiptDonorEl = document.getElementById('receipt-donor');
    const receiptPhoneEl = document.getElementById('receipt-phone');
    const receiptPhoneRow = document.getElementById('receipt-phone-row');
    const receiptDateEl = document.getElementById('receipt-date');
    const receiptSendWaBtn = document.getElementById('receipt-send-wa-btn');
    const receiptSendMailBtn = document.getElementById('receipt-send-mail-btn');
    const receiptPdfBtn = document.getElementById('receipt-pdf-btn');
    const receiptCopyBtn = document.getElementById('receipt-copy-btn');
    const receiptCloseBtn = document.getElementById('receipt-close-btn');

    let currentChannel = 'bkash'; // Default active channel
    let lastReceiptText = '';
    let lastWaReceiptUrl = '';
    let lastReceiptData = {};

    const resetDonationView = () => {
        if (donateFormView) donateFormView.classList.remove('hidden');
        if (donateSuccessView) donateSuccessView.classList.add('hidden');
    };

    donateTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            resetDonationView();
            if (donateModal) donateModal.classList.remove('hidden');
        });
    });

    if (closeDonateModal && donateModal) {
        closeDonateModal.addEventListener('click', () => {
            donateModal.classList.add('hidden');
            resetDonationView();
        });
    }

    // Helper: Universal clipboard copy with visual feedback
    const copyToClipboard = (text, btnElement) => {
        const onSuccess = () => {
            const label = btnElement.querySelector('.copy-text') || btnElement;
            const originalText = label.textContent;
            label.textContent = currentLang === 'bn' ? '✓ কপি হয়েছে!' : '✓ Copied!';
            btnElement.classList.add('bg-emerald-600', 'text-white');
            setTimeout(() => {
                label.textContent = originalText;
                btnElement.classList.remove('bg-emerald-600');
            }, 2000);
        };

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(onSuccess).catch(() => fallbackCopy(text, onSuccess));
        } else {
            fallbackCopy(text, onSuccess);
        }
    };

    const fallbackCopy = (text, callback) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        try {
            document.execCommand('copy');
            if (callback) callback();
        } catch (err) {
            console.error('Fallback copy error:', err);
        }
        document.body.removeChild(textarea);
    };

    // Copy handlers for MFS and Bank details
    if (copyMfsBtn) {
        copyMfsBtn.addEventListener('click', () => {
            const num = copyMfsBtn.getAttribute('data-copy') || '01795023942';
            copyToClipboard(num, copyMfsBtn);
        });
    }

    copyBankBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const val = btn.getAttribute('data-copy');
            if (val) copyToClipboard(val, btn);
        });
    });

    // Payment Channel Switcher
    const updateChannelUI = (channel) => {
        currentChannel = channel;
        channelTabs.forEach(tab => {
            const tabCh = tab.getAttribute('data-channel');
            if (tabCh === channel) {
                if (channel === 'bkash') {
                    tab.className = 'pay-channel-btn p-2 rounded-xl border-2 border-pink-500 bg-pink-500/15 text-pink-300 flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer';
                } else if (channel === 'nagad') {
                    tab.className = 'pay-channel-btn p-2 rounded-xl border-2 border-orange-500 bg-orange-500/15 text-orange-300 flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer';
                } else if (channel === 'bank') {
                    tab.className = 'pay-channel-btn p-2 rounded-xl border-2 border-sky-500 bg-sky-500/15 text-sky-300 flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer';
                }
            } else {
                tab.className = 'pay-channel-btn p-2 rounded-xl border border-white/10 bg-slate-950 text-slate-300 hover:border-white/25 flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer';
            }
        });

        if (channel === 'bkash') {
            if (channelDetailsBox) {
                channelDetailsBox.className = 'rounded-2xl p-3 sm:p-3.5 border bg-gradient-to-b from-slate-950 to-slate-900 border-pink-500/30 transition-all';
            }
            if (channelMfsDetails) channelMfsDetails.classList.remove('hidden');
            if (channelBankDetails) channelBankDetails.classList.add('hidden');
            if (channelTypeBadge) {
                channelTypeBadge.className = 'px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-pink-500/20 text-pink-300 border border-pink-500/30';
                channelTypeBadge.textContent = 'Personal (Send Money)';
            }
            if (channelNumLabel) {
                channelNumLabel.textContent = currentLang === 'bn' ? 'বিকাশ পার্সোনাল নম্বর:' : 'bKash Personal Number:';
            }
            if (channelMfsInstruction) {
                channelMfsInstruction.textContent = currentLang === 'bn'
                    ? "বিকাশ অ্যাপ বা *২৪৭# থেকে 'Send Money' করুন এবং নিচে TrxID লিখুন।"
                    : "Use bKash App or *247# to Send Money, then enter TrxID below.";
            }
            if (copyMfsBtn) {
                copyMfsBtn.className = 'px-3 py-1.5 rounded-lg bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer';
            }
        } else if (channel === 'nagad') {
            if (channelDetailsBox) {
                channelDetailsBox.className = 'rounded-2xl p-3 sm:p-3.5 border bg-gradient-to-b from-slate-950 to-slate-900 border-orange-500/30 transition-all';
            }
            if (channelMfsDetails) channelMfsDetails.classList.remove('hidden');
            if (channelBankDetails) channelBankDetails.classList.add('hidden');
            if (channelTypeBadge) {
                channelTypeBadge.className = 'px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-orange-500/20 text-orange-300 border border-orange-500/30';
                channelTypeBadge.textContent = 'Personal (Send Money)';
            }
            if (channelNumLabel) {
                channelNumLabel.textContent = currentLang === 'bn' ? 'নগদ পার্সোনাল নম্বর:' : 'Nagad Personal Number:';
            }
            if (channelMfsInstruction) {
                channelMfsInstruction.textContent = currentLang === 'bn'
                    ? "নগদ অ্যাপ বা *১৬৭# থেকে 'Send Money' করুন এবং নিচে TrxID লিখুন।"
                    : "Use Nagad App or *167# to Send Money, then enter TrxID below.";
            }
            if (copyMfsBtn) {
                copyMfsBtn.className = 'px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer';
            }
        } else if (channel === 'bank') {
            if (channelDetailsBox) {
                channelDetailsBox.className = 'rounded-2xl p-3 sm:p-3.5 border bg-gradient-to-b from-slate-950 to-slate-900 border-sky-500/30 transition-all';
            }
            if (channelMfsDetails) channelMfsDetails.classList.add('hidden');
            if (channelBankDetails) channelBankDetails.classList.remove('hidden');
        }
    };

    channelTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const ch = tab.getAttribute('data-channel');
            if (ch) updateChannelUI(ch);
        });
    });

    // Anonymous Donation Checkbox Toggle
    if (anonymousCheckbox) {
        anonymousCheckbox.addEventListener('change', () => {
            if (anonymousCheckbox.checked) {
                if (donorContactFields) donorContactFields.classList.add('hidden');
                if (donorAnonymousNotice) donorAnonymousNotice.classList.remove('hidden');
                if (donateNameInput) {
                    donateNameInput.classList.remove('border-rose-500', 'ring-2', 'ring-rose-500/30');
                    donateNameInput.classList.add('border-white/10');
                }
                if (donatePhoneInput) {
                    donatePhoneInput.classList.remove('border-rose-500', 'ring-2', 'ring-rose-500/30');
                    donatePhoneInput.classList.add('border-white/10');
                }
            } else {
                if (donorContactFields) donorContactFields.classList.remove('hidden');
                if (donorAnonymousNotice) donorAnonymousNotice.classList.add('hidden');
            }
        });
    }

    // Input error cleanup on input
    const donationInputs = [customAmountInput, donateNameInput, donatePhoneInput, donateTrxInput];
    donationInputs.forEach(input => {
        if (!input) return;
        const clear = () => {
            input.classList.remove('border-rose-500', 'ring-2', 'ring-rose-500/30');
            input.classList.add('border-white/10');
        };
        input.addEventListener('input', clear);
        input.addEventListener('change', clear);
    });

    const markDonationError = (el, msg) => {
        if (el) {
            el.classList.add('border-rose-500', 'ring-2', 'ring-rose-500/30');
            el.classList.remove('border-white/10');
            el.focus();
        }
        showToast(msg);
    };

    // Donation Form Submit
    if (donateForm) {
        donateForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const amountVal = parseFloat(customAmountInput?.value || '0');
            const isAnonymous = anonymousCheckbox ? anonymousCheckbox.checked : false;
            const name = (donateNameInput?.value || '').trim();
            const phone = (donatePhoneInput?.value || '').trim();
            const trxId = (donateTrxInput?.value || '').trim();
            const note = (donateNoteInput?.value || '').trim();

            // 1. Amount Validation (Must be greater than 0, no restriction)
            if (isNaN(amountVal) || amountVal <= 0) {
                markDonationError(customAmountInput, currentLang === 'bn' ? 'অনুগ্রহ করে সঠিক অনুদানের পরিমাণ লিখুন।' : 'Please enter a valid donation amount.');
                return;
            }

            // 2. Name & Phone Validation (Only if NOT anonymous)
            let formattedPhone = '';
            if (!isAnonymous) {
                if (!name) {
                    markDonationError(donateNameInput, currentLang === 'bn' ? 'অনুগ্রহ করে আপনার নাম লিখুন অথবা নাম প্রকাশে অনিচ্ছুক অপশনটি নির্বাচন করুন।' : 'Please enter your name or select anonymous donation.');
                    return;
                }
                if (name.length < 2) {
                    markDonationError(donateNameInput, currentLang === 'bn' ? 'নাম কমপক্ষে ২ অক্ষরের হতে হবে।' : 'Name must be at least 2 characters.');
                    return;
                }
                if (!phone) {
                    markDonationError(donatePhoneInput, currentLang === 'bn' ? 'অনুগ্রহ করে আপনার মোবাইল নম্বর লিখুন।' : 'Please enter your mobile phone number.');
                    return;
                }
                const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
                const phoneRegex = /^(\+?880|880|0)?1[3-9]\d{8}$/;
                if (!phoneRegex.test(cleanPhone)) {
                    markDonationError(donatePhoneInput, currentLang === 'bn' ? 'সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)' : 'Please enter a valid 11-digit mobile number.');
                    return;
                }
                formattedPhone = cleanPhone;
                if (formattedPhone.startsWith('+88')) formattedPhone = formattedPhone.substring(3);
                else if (formattedPhone.startsWith('88')) formattedPhone = formattedPhone.substring(2);
            }

            // 3. TrxID Validation (Mandatory)
            if (!trxId) {
                markDonationError(donateTrxInput, currentLang === 'bn' ? 'অনুগ্রহ করে Transaction ID (TrxID) বা ব্যাংক ডিপোজিট স্লিপ নম্বর লিখুন।' : 'Please enter Transaction ID (TrxID) or bank slip number.');
                return;
            }
            if (trxId.length < 4) {
                markDonationError(donateTrxInput, currentLang === 'bn' ? 'Transaction ID কমপক্ষে ৪ অক্ষরের হতে হবে।' : 'Transaction ID must be at least 4 characters.');
                return;
            }

            // Construct Receipt Values
            const formattedAmount = currentLang === 'bn' ? `৳${amountVal.toLocaleString('bn-BD')}` : `BDT ${amountVal.toLocaleString('en-US')}`;
            let channelDisplayName = '';
            let channelAccountTarget = '';

            if (currentChannel === 'bkash') {
                channelDisplayName = currentLang === 'bn' ? 'বিকাশ পার্সোনাল (Send Money)' : 'bKash Personal (Send Money)';
                channelAccountTarget = '01795-023942';
            } else if (currentChannel === 'nagad') {
                channelDisplayName = currentLang === 'bn' ? 'নগদ পার্সোনাল (Send Money)' : 'Nagad Personal (Send Money)';
                channelAccountTarget = '01795-023942';
            } else if (currentChannel === 'bank') {
                channelDisplayName = currentLang === 'bn' ? 'সোনালী ব্যাংক পিএলসি ডিপোজিট' : 'Sonali Bank PLC Deposit';
                channelAccountTarget = 'A/C: 2032102000579 (Sonali Bank PLC, Karu Shikha Youth Development Society, Tepakhola Branch, Faridpur)';
            }

            const donorDisplay = isAnonymous
                ? (currentLang === 'bn' ? 'নাম প্রকাশে অনিচ্ছুক (Anonymous)' : 'Anonymous Donor')
                : name;

            const now = new Date();
            const dateStr = now.toLocaleDateString(currentLang === 'bn' ? 'bn-BD' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const dateTimeDisplay = `${dateStr}, ${timeStr}`;

            // Populate Success View
            if (receiptAmountEl) receiptAmountEl.textContent = formattedAmount;
            if (receiptMethodEl) receiptMethodEl.textContent = `${channelDisplayName} • ${channelAccountTarget}`;
            if (receiptTrxidEl) receiptTrxidEl.textContent = trxId.toUpperCase();
            if (receiptDonorEl) receiptDonorEl.textContent = donorDisplay;
            if (receiptDateEl) receiptDateEl.textContent = dateTimeDisplay;

            if (receiptPhoneRow && receiptPhoneEl) {
                if (isAnonymous) {
                    receiptPhoneRow.classList.add('hidden');
                } else {
                    receiptPhoneRow.classList.remove('hidden');
                    receiptPhoneEl.textContent = formattedPhone;
                }
            }

            // BMP-Safe structured message for WhatsApp and Email/Slip copy (Strictly zero surrogate pair emojis to prevent '?' corruption)
            if (currentLang === 'bn') {
                lastReceiptText =
`*কারু শিখা সমাজকল্যাণ তহবিল*
*অনুদান নিশ্চিতকরণ স্লিপ*
----------------------------------------
• *অনুদানের পরিমাণ:* ${formattedAmount}
• *পেমেন্ট মাধ্যম:* ${channelDisplayName}
• *একাউন্ট/নম্বর:* ${channelAccountTarget}
• *ট্রানজেকশন আইডি (TrxID):* ${trxId.toUpperCase()}
• *দাতা:* ${donorDisplay}
${!isAnonymous ? `• *মোবাইল নম্বর:* ${formattedPhone}\n` : ''}• *তারিখ ও সময়:* ${dateTimeDisplay}
${note ? `• *বার্তা/মন্তব্য:* ${note}\n` : ''}----------------------------------------
• *বিবরণ:* আমি কারু শিখা সমাজকল্যাণ তহবিলে অনুদান সম্পন্ন করেছি। অনুগ্রহ করে যাচাই করে প্রাপ্তি নিশ্চিত করবেন।`;
            } else {
                lastReceiptText =
`*Karu Shikha Welfare Fund*
*Donation Confirmation Slip*
----------------------------------------
• *Donation Amount:* ${formattedAmount}
• *Payment Channel:* ${channelDisplayName}
• *Account / Number:* ${channelAccountTarget}
• *Transaction ID (TrxID):* ${trxId.toUpperCase()}
• *Donor:* ${donorDisplay}
${!isAnonymous ? `• *Mobile Phone:* ${formattedPhone}\n` : ''}• *Date & Time:* ${dateTimeDisplay}
${note ? `• *Message/Note:* ${note}\n` : ''}----------------------------------------
• *Statement:* I have contributed to Karu Shikha Welfare Fund. Please verify and acknowledge receipt.`;
            }

            lastWaReceiptUrl = `https://wa.me/8801795023942?text=${encodeURIComponent(lastReceiptText)}`;

            lastReceiptData = {
                amount: formattedAmount,
                method: `${channelDisplayName} • ${channelAccountTarget}`,
                trxId: trxId.toUpperCase(),
                donor: donorDisplay,
                phone: !isAnonymous ? formattedPhone : '',
                date: dateTimeDisplay,
                note: note
            };

            // Background sync to Google Sheet (if configured)
            if (GOOGLE_SHEET_WEBHOOK_URL) {
                try {
                    fetch(GOOGLE_SHEET_WEBHOOK_URL, {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            formType: 'donation',
                            method: `${channelDisplayName} (${channelAccountTarget})`,
                            paymentMethod: `${channelDisplayName} (${channelAccountTarget})`,
                            channel: channelDisplayName,
                            channelTarget: channelAccountTarget,
                            amount: amountVal,
                            trxId: trxId.toUpperCase(),
                            donorName: donorDisplay,
                            isAnonymous: isAnonymous,
                            phone: formattedPhone || 'N/A',
                            note: note || '',
                            dateTime: dateTimeDisplay,
                            ip: clientMeta.ip || 'N/A',
                            device: clientMeta.device || 'N/A',
                            location: clientMeta.location || 'Bangladesh',
                            source: clientMeta.source || 'Direct',
                            submissionId: `KS-DON-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`
                        })
                    }).catch(err => console.log('Google Sheets donation sync notice:', err));
                } catch (e) {
                    console.log('Google Sheets donation sync error:', e);
                }
            }

            // Switch to Success/Receipt View
            if (donateFormView) donateFormView.classList.add('hidden');
            if (donateSuccessView) donateSuccessView.classList.remove('hidden');

            const successMsg = currentLang === 'bn'
                ? `ধন্যবাদ! ${formattedAmount} অনুদানের তথ্য সফলভাবে নথিভুক্ত করা হয়েছে।`
                : `Thank you! Your donation of ${formattedAmount} has been successfully recorded.`;
            showToast(successMsg);
        });
    }

    // Receipt Action Handlers
    if (receiptSendWaBtn) {
        receiptSendWaBtn.addEventListener('click', () => {
            if (lastWaReceiptUrl) {
                window.open(lastWaReceiptUrl, '_blank', 'noopener,noreferrer');
            }
        });
    }

    if (receiptSendMailBtn) {
        receiptSendMailBtn.addEventListener('click', () => {
            const subject = currentLang === 'bn'
                ? `কারু শিখা সমাজকল্যাণ তহবিল - অনুদান নিশ্চিতকরণ স্লিপ [TrxID: ${lastReceiptData.trxId || ''}]`
                : `Karu Shikha Welfare Fund - Donation Slip [TrxID: ${lastReceiptData.trxId || ''}]`;
            const mailtoUrl = `mailto:karushikhayds@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lastReceiptText)}`;
            window.open(mailtoUrl, '_blank');
        });
    }

    // Native Browser Print / Save as PDF generator (0 KB extra library, zero lag, 100% native Bangla rendering)
    const printReceiptVoucher = () => {
        if (!lastReceiptData.trxId) return;
        const isBn = currentLang === 'bn';
        const logoUrl = new URL('assets/karu-shikha-logo.png', window.location.href).href;
        const iframe = document.createElement('iframe');
        iframe.style.position = 'fixed';
        iframe.style.right = '0';
        iframe.style.bottom = '0';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = '0';
        document.body.appendChild(iframe);

        const doc = iframe.contentWindow.document;
        doc.open();
        doc.write(`<!DOCTYPE html>
<html lang="${currentLang}">
<head>
    <meta charset="UTF-8">
    <title>Donation_Receipt_${lastReceiptData.trxId}</title>
    <style>
        @page { size: A4 portrait; margin: 15mm; }
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Hind Siliguri", "Kalpurush", Arial, sans-serif; }
        body { background: #fff; color: #1e293b; padding: 25px; line-height: 1.5; }
        .voucher { max-width: 660px; margin: 0 auto; border: 2px solid #ea580c; border-radius: 16px; padding: 26px; position: relative; background: #fff; overflow: hidden; }
        .watermark-logo { position: absolute; top: 52%; left: 50%; transform: translate(-50%, -50%); opacity: 0.05; pointer-events: none; z-index: 0; text-align: center; }
        .header { text-align: center; border-bottom: 2px dashed #cbd5e1; padding-bottom: 16px; margin-bottom: 18px; position: relative; z-index: 1; }
        .org-logo { width: 62px; height: 62px; margin: 0 auto 6px; display: block; object-fit: contain; }
        .org-title { font-size: 21px; font-weight: 900; color: #0f172a; margin-bottom: 3px; }
        .org-sub { font-size: 12px; color: #64748b; margin-bottom: 5px; }
        .reg-badge { display: inline-block; background: #fff7ed; color: #c2410c; border: 1px solid #fdba74; font-size: 11px; font-weight: 700; padding: 2px 10px; border-radius: 20px; }
        .receipt-badge { background: #0284c7; color: #fff; font-size: 12px; font-weight: 800; padding: 5px 15px; border-radius: 20px; display: inline-block; margin-bottom: 15px; letter-spacing: 0.5px; }
        .amount-box { background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 12px 18px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; position: relative; z-index: 1; }
        .amount-lbl { font-size: 12px; color: #64748b; font-weight: 600; }
        .amount-val { font-size: 22px; color: #ea580c; font-weight: 900; font-family: monospace; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 18px; position: relative; z-index: 1; }
        td { padding: 9px 12px; font-size: 12.5px; border-bottom: 1px solid #f1f5f9; }
        td.label { color: #64748b; font-weight: 600; width: 38%; }
        td.value { color: #0f172a; font-weight: 700; }
        .footer { text-align: center; border-top: 1px solid #e2e8f0; padding-top: 12px; font-size: 11px; color: #94a3b8; position: relative; z-index: 1; }
    </style>
</head>
<body>
    <div class="voucher">
        <div class="watermark-logo">
            <img src="${logoUrl}" alt="" style="width: 270px; height: 270px; object-fit: contain;">
        </div>
        <div class="header">
            <img src="${logoUrl}" alt="Karu Shikha Logo" class="org-logo">
            <h1 class="org-title">${isBn ? 'কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটি' : 'Karu Shikha Youth Development Society'}</h1>
            <p class="org-sub">${isBn ? 'লক্ষ্মীপুর পৌর স্টেশন মার্কেট, ফরিদপুর সদর, ফরিদপুর।' : 'Lakshmipur Pourashava Station Market, Faridpur Sadar, Faridpur.'}</p>
            <span class="reg-badge">${isBn ? 'যুব উন্নয়ন অধিদপ্তর নিবন্ধন নং: যুউঅ-৯৭ • স্থাপিত: ৩১ জানুয়ারি ২০১৯' : 'Govt. Reg No: YDA-97 • Estd: 31 January 2019'}</span>
        </div>
        <div style="text-align: center; position: relative; z-index: 1;">
            <span class="receipt-badge" style="background: #ea580c; color: #fff; font-size: 11px; font-weight: 800; padding: 4px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; letter-spacing: 0.5px;">${isBn ? 'অনুদানের তথ্য দাখিল স্লিপ (যাচাইকরণ প্রক্রিয়াধীন)' : 'DONATION SUBMISSION SLIP (VERIFICATION PENDING)'}</span>
        </div>
        <div class="amount-box">
            <span class="amount-lbl">${isBn ? 'অনুদানের পরিমাণ' : 'Donation Amount'}</span>
            <span class="amount-val">${lastReceiptData.amount}</span>
        </div>
        <table>
            <tr>
                <td class="label">${isBn ? 'পেমেন্ট মাধ্যম' : 'Payment Channel'}:</td>
                <td class="value">${lastReceiptData.method}</td>
            </tr>
            <tr>
                <td class="label">${isBn ? 'ট্রানজেকশন আইডি (TrxID)' : 'Transaction ID (TrxID)'}:</td>
                <td class="value" style="color: #0284c7; font-family: monospace;">${lastReceiptData.trxId}</td>
            </tr>
            <tr>
                <td class="label">${isBn ? 'অনুদাতার নাম' : 'Donor Name'}:</td>
                <td class="value">${lastReceiptData.donor}</td>
            </tr>
            ${lastReceiptData.phone ? `
            <tr>
                <td class="label">${isBn ? 'মোবাইল নম্বর' : 'Contact Phone'}:</td>
                <td class="value">${lastReceiptData.phone}</td>
            </tr>` : ''}
            <tr>
                <td class="label">${isBn ? 'তারিখ ও সময়' : 'Date & Time'}:</td>
                <td class="value">${lastReceiptData.date}</td>
            </tr>
            ${lastReceiptData.note ? `
            <tr>
                <td class="label">${isBn ? 'বার্তা / মন্তব্য' : 'Note / Message'}:</td>
                <td class="value">${lastReceiptData.note}</td>
            </tr>` : ''}
        </table>
        <div class="footer" style="text-align: center; border-top: 1px solid #e2e8f0; padding-top: 12px; font-size: 11px; color: #475569; position: relative; z-index: 1; line-height: 1.55;">
            <p style="margin: 0; font-weight: 600; color: #334155;">${isBn ? 'আপনার অনুদান কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটির সার্বিক উন্নয়ন ও সমাজকল্যাণমূলক কার্যক্রমে ব্যবহৃত হবে।' : 'Your donation will be utilized for Karu Shikha Youth Development Society’s development and overall social welfare initiatives.'}</p>
            <p style="margin-top: 6px; font-weight: 500; color: #b45309; background: #fffbeb; border: 1px dashed #fde68a; padding: 6px 12px; border-radius: 6px; font-size: 10.5px; text-align: left;">${isBn ? '⚠️ দ্রষ্টব্য: এটি স্বয়ংক্রিয়ভাবে সংগৃহীত প্রাথমিক তথ্য দাখিল স্লিপ, এটি অর্থ প্রাপ্তির চূড়ান্ত রশিদ নয়। আপনার প্রেরিত ট্রানজেকশন আইডি ব্যাংক বা বিকাশ/নগদ ব্যালেন্সের সাথে যাচাই (Verification) সাপেক্ষে অনুদান নিশ্চিত করা হবে।' : '⚠️ Note: This is an auto-generated preliminary submission slip, not a finalized receipt of payment. Confirmation is subject to transaction verification with bank or mobile wallet records.'}</p>
        </div>
    </div>
</body>
</html>`);
        doc.close();

        setTimeout(() => {
            iframe.contentWindow.focus();
            iframe.contentWindow.print();
            setTimeout(() => {
                if (document.body.contains(iframe)) {
                    document.body.removeChild(iframe);
                }
            }, 3000);
        }, 500);
    };

    if (receiptPdfBtn) {
        receiptPdfBtn.addEventListener('click', printReceiptVoucher);
    }

    if (receiptCopyBtn) {
        receiptCopyBtn.addEventListener('click', () => {
            if (lastReceiptText) {
                copyToClipboard(lastReceiptText, receiptCopyBtn);
            }
        });
    }

    if (receiptCloseBtn) {
        receiptCloseBtn.addEventListener('click', () => {
            if (donateModal) donateModal.classList.add('hidden');
            if (donateForm) donateForm.reset();
            resetDonationView();
            updateChannelUI('bkash');
            if (donorContactFields) donorContactFields.classList.remove('hidden');
            if (donorAnonymousNotice) donorAnonymousNotice.classList.add('hidden');
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
        // Toggle custom "Others" specify input
        const domainSelect = document.getElementById('vol-domain');
        const othersWrap = document.getElementById('vol-others-wrap');
        const othersInput = document.getElementById('vol-others-specify');

        if (domainSelect && othersWrap) {
            domainSelect.addEventListener('change', () => {
                if (domainSelect.value === 'others') {
                    othersWrap.classList.remove('hidden');
                    if (othersInput) othersInput.focus();
                } else {
                    othersWrap.classList.add('hidden');
                    if (othersInput) othersInput.value = '';
                }
            });
        }

        // Clear error highlighting whenever user types or selects
        const formInputs = volunteerForm.querySelectorAll('input, select');
        formInputs.forEach(input => {
            const clearErr = () => {
                input.classList.remove('border-rose-500', 'ring-2', 'ring-rose-500/30');
                input.classList.add('border-white/10');
            };
            input.addEventListener('input', clearErr);
            input.addEventListener('change', clearErr);
        });

        const markError = (el, msg) => {
            if (el) {
                el.classList.add('border-rose-500', 'ring-2', 'ring-rose-500/30');
                el.classList.remove('border-white/10');
                el.focus();
            }
            showToast(msg);
        };

        volunteerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameEl = document.getElementById('vol-name');
            const ageEl = document.getElementById('vol-age');
            const emailEl = document.getElementById('vol-email');
            const phoneEl = document.getElementById('vol-phone');
            const educationEl = document.getElementById('vol-education');
            const professionEl = document.getElementById('vol-profession');
            const bloodEl = document.getElementById('vol-blood');
            const domainEl = document.getElementById('vol-domain');
            const addressEl = document.getElementById('vol-address');

            const name = (nameEl?.value || '').trim();
            const age = (ageEl?.value || '').trim();
            const email = (emailEl?.value || '').trim();
            const phone = (phoneEl?.value || '').trim();
            const education = (educationEl?.value || '').trim();
            const profession = (professionEl?.value || '').trim();
            const blood = (bloodEl?.value || '').trim();
            const domain = (domainEl?.value || '').trim();
            const address = (addressEl?.value || '').trim();

            // 1. Full Name validation (Mandatory, Min 3 chars)
            if (!name) {
                markError(nameEl, currentLang === 'bn' ? 'অনুগ্রহ করে আপনার পূর্ণ নাম লিখুন।' : 'Please enter your full name.');
                return;
            }
            if (name.length < 3) {
                markError(nameEl, currentLang === 'bn' ? 'পূর্ণ নাম কমপক্ষে ৩ অক্ষরের হতে হবে।' : 'Full name must be at least 3 characters.');
                return;
            }

            // 2. Age validation (Mandatory, 12 to 99 years)
            const ageNum = parseInt(age, 10);
            if (!age || isNaN(ageNum) || ageNum < 12 || ageNum > 99) {
                markError(ageEl, currentLang === 'bn' ? 'অনুগ্রহ করে আপনার সঠিক বয়স লিখুন (১২-৯৯ বছর)।' : 'Please enter a valid age (12-99 years).');
                return;
            }

            // 3. Email Address validation (Mandatory & Valid format)
            if (!email) {
                markError(emailEl, currentLang === 'bn' ? 'অনুগ্রহ করে আপনার ইমেইল ঠিকানা লিখুন।' : 'Please enter your email address.');
                return;
            }
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(email)) {
                markError(emailEl, currentLang === 'bn' ? 'সঠিক ইমেইল ঠিকানা দিন (যেমন: name@example.com)' : 'Please enter a valid email address (e.g. name@example.com)');
                return;
            }

            // 3. Mobile Phone Number validation (Mandatory & Valid BD format)
            if (!phone) {
                markError(phoneEl, currentLang === 'bn' ? 'অনুগ্রহ করে আপনার মোবাইল নম্বর লিখুন।' : 'Please enter your mobile phone number.');
                return;
            }
            const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
            const phoneRegex = /^(\+?880|880|0)?1[3-9]\d{8}$/;
            if (!phoneRegex.test(cleanPhone)) {
                markError(phoneEl, currentLang === 'bn' ? 'সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)' : 'Please enter a valid 11-digit mobile number (e.g. 017XXXXXXXX)');
                return;
            }

            // 4. Educational Qualification validation (Mandatory)
            if (!education) {
                markError(educationEl, currentLang === 'bn' ? 'অনুগ্রহ করে আপনার শিক্ষাগত যোগ্যতা লিখুন।' : 'Please specify your educational qualification.');
                return;
            }

            // 5. Profession / Occupation validation (Mandatory)
            if (!profession) {
                markError(professionEl, currentLang === 'bn' ? 'অনুগ্রহ করে আপনার পেশা উল্লেখ করুন।' : 'Please specify your profession/occupation.');
                return;
            }

            // 6. Blood Group validation (Mandatory)
            if (!blood) {
                markError(bloodEl, currentLang === 'bn' ? 'অনুগ্রহ করে রক্তের গ্রুপ নির্বাচন করুন।' : 'Please select your blood group.');
                return;
            }

            // 7. Preferred Initiative / Domain validation (Mandatory, with Others support)
            if (!domain) {
                markError(domainEl, currentLang === 'bn' ? 'অনুগ্রহ করে পছন্দের প্রকল্প বা কার্যক্ষেত্র নির্বাচন করুন।' : 'Please select your preferred project/domain.');
                return;
            }

            let domainDisplay = domainEl && domainEl.selectedIndex >= 0 ? domainEl.options[domainEl.selectedIndex].text.trim() : '';
            if (domain === 'others') {
                const specifiedArea = (othersInput?.value || '').trim();
                if (specifiedArea) {
                    domainDisplay = currentLang === 'bn' ? `অন্যান্য (${specifiedArea})` : `Others (${specifiedArea})`;
                }
            }

            // 8. Present Address validation (Mandatory)
            if (!address) {
                markError(addressEl, currentLang === 'bn' ? 'অনুগ্রহ করে আপনার বর্তমান ঠিকানা লিখুন।' : 'Please enter your current address.');
                return;
            }

            // Normalize display phone (standard 11-digit BD format: 01XXXXXXXXX)
            let formattedPhone = cleanPhone;
            if (formattedPhone.startsWith('+88')) formattedPhone = formattedPhone.substring(3);
            else if (formattedPhone.startsWith('88')) formattedPhone = formattedPhone.substring(2);

            const now = new Date();
            const dateStr = now.toLocaleDateString(currentLang === 'bn' ? 'bn-BD' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            // Safe universal WhatsApp formatting: Uses standard Unicode bullets (•) and plain ASCII dividers
            // Guaranteed to never corrupt into '?' on Windows Desktop WhatsApp, Mac, or Mobile
            let waMessage = '';
            if (currentLang === 'bn') {
                waMessage =
`*কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটি*
*ভলান্টিয়ার রেজিস্ট্রেশন আবেদনপত্র*
----------------------------------------
• *নাম:* ${name}
• *বয়স:* ${age} বছর
• *ফোন নম্বর:* ${formattedPhone}
• *ইমেইল:* ${email}
• *শিক্ষাগত যোগ্যতা:* ${education}
• *পেশা:* ${profession}
• *রক্তের গ্রুপ:* ${blood}
• *আগ্রহের ক্ষেত্র:* ${domainDisplay}
• *বর্তমান ঠিকানা:* ${address}
----------------------------------------
• *তারিখ:* ${dateStr}
• *আবেদন:* আমি কারু শিখা যুব উন্নয়ন সোসাইটিতে ভলান্টিয়ার হিসেবে যুক্ত হতে আগ্রহী।`;
            } else {
                waMessage =
`*Karu Shikha Youth Development Society*
*Volunteer Registration Application*
----------------------------------------
• *Name:* ${name}
• *Age:* ${age} years
• *Phone Number:* ${formattedPhone}
• *Email:* ${email}
• *Education:* ${education}
• *Profession:* ${profession}
• *Blood Group:* ${blood}
• *Interested Area:* ${domainDisplay}
• *Address:* ${address}
----------------------------------------
• *Date:* ${dateStr}
• *Statement:* I am interested in joining Karu Shikha Youth Development Society as an active volunteer.`;
            }

            const waUrl = `https://wa.me/8801795023942?text=${encodeURIComponent(waMessage)}`;

            const toastMsg = currentLang === 'bn'
                ? `ধন্যবাদ ${name}! আপনার সকল তথ্য সফলভাবে যাচাই করা হয়েছে, হোয়াটসঅ্যাপে পাঠানো হচ্ছে...`
                : `Thank you ${name}! All details verified, opening in WhatsApp...`;
            showToast(toastMsg);

            // Background sync to Google Sheet (if configured)
            if (GOOGLE_SHEET_WEBHOOK_URL) {
                try {
                    fetch(GOOGLE_SHEET_WEBHOOK_URL, {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            formType: 'volunteer',
                            name: name,
                            age: age,
                            phone: formattedPhone,
                            email: email,
                            education: education,
                            profession: profession,
                            blood: blood,
                            domain: domainDisplay,
                            address: address,
                            dateTime: dateStr,
                            ip: clientMeta.ip || 'N/A',
                            device: clientMeta.device || 'N/A',
                            location: clientMeta.location || 'Bangladesh',
                            source: clientMeta.source || 'Direct',
                            submissionId: `KS-VOL-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`
                        })
                    }).catch(err => console.log('Google Sheets volunteer sync notice:', err));
                } catch (e) {
                    console.log('Google Sheets volunteer sync error:', e);
                }
            }

            // Open WhatsApp with pre-filled application details
            window.open(waUrl, '_blank', 'noopener,noreferrer');

            if (volunteerModal) volunteerModal.classList.add('hidden');
            volunteerForm.reset();
            if (othersWrap) othersWrap.classList.add('hidden');
            formInputs.forEach(input => {
                input.classList.remove('border-rose-500', 'ring-2', 'ring-rose-500/30');
                input.classList.add('border-white/10');
            });
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

const fatherMapEn = {
    'অশোক কুমার': 'Ashok Kumar',
    'আদনান হাসান': 'Adnan Hasan',
    'আব্দুল আলিম': 'Abdul Alim',
    'কাজী রফিকুল ইসলাম': 'Kazi Rafiqul Islam',
    'খন্দকার বাদল হোসেন': 'Khandakar Badal Hossain',
    'গণেশ চন্দ্র শীল': 'Ganesh Chandra Sheel',
    'ধীরেন্দ্রনাথ মন্ডল': 'Dhirendranath Mondal',
    'নরেন চন্দ্র মালো': 'Naren Chandra Malo',
    'বাদশা খান': 'Badsha Khan',
    'বাবু লাল বিশ্বাস': 'Babu Lal Biswas',
    'মাসুদ কাজী': 'Masud Kazi',
    'মৃত আমিন গোলাম খন্দকার': 'Late Amin Golam Khandakar',
    'মৃত সাগর ঘটক': 'Late Sagar Ghatak',
    'মো. আরিফ': 'Md. Arif',
    'মো. আলতাফ হোসেন খান': 'Md. Altaf Hossain Khan',
    'মো. জিহাদ হোসেন': 'Md. Jihad Hossain',
    'মো. নিজাম শেখ': 'Md. Nizam Sheikh',
    'মো. ফরহাদ': 'Md. Farhad',
    'মো. লিটন মন্ডল': 'Md. Liton Mondal',
    'মো. লুৎফর রহমান': 'Md. Lutfar Rahman',
    'মো. সাইদুর': 'Md. Saidur',
    'মো. হামেদ শেখ': 'Md. Hamed Sheikh',
    'শেখ কুটি': 'Sheikh Kuti',
    'সহিদ হোসেন': 'Shahid Hossain'
};

const addressMapEn = {
    'আইজুদ্দীন মাতুব্বর ডাঙ্গী, বাকীগঞ্জ, কোতোয়ালী, ফরিদপুর।': 'Aijuddin Matubbar Dangi, Bakiganj, Faridpur',
    'আলীপুর, ফরিদপুর সদর, ফরিদপুর।': 'Alipur, Faridpur Sadar, Faridpur',
    'কমলাপুর, ফরিদপুর সদর, ফরিদপুর।': 'Kamalapur, Faridpur Sadar, Faridpur',
    'খাগবাড়ি, রামশীল, কোটালীপাড়া, গোপালগঞ্জ।': 'Khagbari, Ramshil, Kotalipara, Gopalganj',
    'খাবাসপুর, ফরিদপুর সদর, ফরিদপুর।': 'Khabaspur, Faridpur Sadar, Faridpur',
    'গোয়াইলবাড়ী, নালী, শিবালয়, মানিকগঞ্জ।': 'Goailbari, Shibalaya, Manikganj',
    'ঝাউদী, মাদারীপুর সদর, মাদারীপুর।': 'Jhaudi, Madaripur Sadar, Madaripur',
    'ঝিলটুলী, ফরিদপুর সদর, ফরিদপুর।': 'Jhiltuly, Faridpur Sadar, Faridpur',
    'তুলা গ্রাম, তাম্বুল খানা, ফরিদপুর সদর, ফরিদপুর।': 'Tula Gram, Tambulkhana, Faridpur',
    'বিএস ডাঙ্গী, চরভদ্রাসন, চরভদ্রাসন, ফরিদপুর।': 'BS Dangi, Charbhadrasan, Faridpur',
    'ভাজনডাঙ্গা, বায়তুল আমান, ফরিদপুর সদর, ফরিদপুর।': 'Bhajandanga, Baitul Aman, Faridpur',
    'ভাটি লক্ষ্মীপুর, ফরিদপুর সদর, ফরিদপুর।': 'Bhati Lakshmipur, Faridpur Sadar, Faridpur',
    'মাস্টার কলোনী, ফরিদপুর সদর, ফরিদপুর।': 'Master Colony, Faridpur Sadar, Faridpur',
    'রঘুনন্দনপুর, শ্রী-অঙ্গন, ফরিদপুর সদর, ফরিদপুর।': 'Raghunandanpur, Sri-Angan, Faridpur',
    'রামখন্ড, পুরদিয়া, রনকাইল, কানাইপুর, ফরিদপুর।': 'Ramkhanda, Purdia, Kanaipur, Faridpur',
    'হাভেলি গোপালপুর, ফরিদপুর সদর, ফরিদপুর।': 'Haveli Gopalpur, Faridpur Sadar, Faridpur',
    'হাভেলি রাজাপুর, ফরিদপুর সদর, ফরিদপুর।': 'Haveli Rajapur, Faridpur Sadar, Faridpur',
    '২ নং হাভেলি গোপালপুর, ফরিদপুর সদর, ফরিদপুর।': '2 No. Haveli Gopalpur, Faridpur'
};

const educationMapEn = {
    'এইচএসসি': 'HSC',
    'এসএসসি': 'SSC',
    'স্নাতক': 'Graduate',
    'স্নাতক (অনার্স)': 'Bachelor (Honours)',
    'স্নাতকোত্তর': 'Masters',
    'বিএ': 'BA (Bachelor of Arts)',
    'এমএসএস': 'MSS (Masters of Social Science)',
    'এমবিবিএস': 'MBBS (Physician)',
    'ডিপ্লোমা ইন প্যারামেডিকেল': 'Diploma in Paramedical',
    'দ্বাদশ': 'Class 12',
    'একাদশ': 'Class 11',
    'অষ্টম শ্রেণি': 'Class 8',
    'অষ্টম শ্রেণী': 'Class 8',
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
    'চাকরি': 'Service / Employed',
    'বেসরকারি চাকরি': 'Private Sector Service',
    'ব্যবসায়ী': 'Business / Trader',
    'ব্যবসা': 'Business / Commerce',
    'চিকিৎসক': 'Physician / Medical Officer',
    'ড্রাইভার': 'Professional Driver',
    'গৃহিনী': 'Homemaker',
    'গৃহিণী': 'Homemaker'
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
        const fatherText = currentLang === 'bn' ? m.father : (fatherMapEn[m.father] || m.father);
        const fatherLabel = currentLang === 'bn' ? 'পিতা:' : 'Father:';
        const ageLabel = currentLang === 'bn' ? `${m.age} বছর` : `${m.age} yrs`;
        const addrText = currentLang === 'bn' ? m.address : (addressMapEn[m.address] || 'Faridpur Sadar, Faridpur');
        const callLabel = `📞 ${m.phone}`;

        return `
            <div class="glass-panel glass-panel-hover rounded-2xl p-4 sm:p-5 border-t-2 ${topBorder} flex flex-col justify-between h-full transition-all">
                <div class="flex-1">
                    <div class="flex items-center justify-between mb-2.5">
                        <span class="text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${roleBadgeBg}">
                            ${role}
                        </span>
                    </div>

                    <h3 class="text-sm sm:text-base font-extrabold text-white mb-2 leading-snug line-clamp-2 min-h-[2.4rem]">
                        ${name}
                    </h3>

                    <div class="space-y-1.5 text-[11px] text-slate-300 mb-3.5">
                        ${m.father ? `<div class="truncate text-slate-400"><span class="text-slate-500 font-medium">${fatherLabel}</span> ${fatherText}</div>` : `<div class="text-slate-700 select-none">&nbsp;</div>`}
                        <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-slate-400">
                            <span>🎓 <span class="text-slate-300 font-semibold">${eduText}</span></span>
                            <span>💼 <span class="text-slate-300 font-semibold">${profText}</span></span>
                            ${m.age ? `<span>🎂 ${ageLabel}</span>` : ''}
                        </div>
                        <div class="text-slate-400 line-clamp-1 mt-1 text-[11px]" title="${addrText}">
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
