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
        "nav_donate": "💖 অনুদান দিন",
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
        "don_title": "কারু শিখা সমাজকল্যাণ তহবিলে অনুদান",
        "don_sub": "আপনার প্রতিটি অনুদান সরাসরি Project Your Mentor ও সমাজকল্যাণে ব্যবহৃত হয়।",
        "don_lbl_amount": "অনুদানের পরিমাণ নির্বাচন করুন (টাকা)",
        "amt_500": "৳৫০০",
        "amt_1000": "৳১,০০০",
        "amt_2000": "৳২,০০০",
        "amt_5000": "৳৫,০০০",
        "don_lbl_custom": "কাস্টম পরিমাণ (টাকা / BDT)",
        "don_lbl_gateway": "পেমেন্ট মাধ্যম",
        "don_ph_name": "আপনার নাম",
        "don_ph_phone": "মোবাইল নম্বর",
        "don_btn_submit": "নিশ্চিত করুন ও অনুদান সম্পন্ন করুন",
        "vol_title": "কারু শিখায় ভলান্টিয়ার রেজিস্ট্রেশন",
        "vol_sub": "আমাদের ৩টি চলমান প্রকল্প ও সামাজিক উদ্যোগে যুক্ত হয়ে সমাজ পরিবর্তনের সহযাত্রী হোন।",
        "vol_lbl_name": "পূর্ণ নাম *",
        "vol_ph_name": "আপনার পুরো নাম",
        "vol_lbl_email": "ইমেইল ঠিকানা",
        "vol_lbl_phone": "ফোন নম্বর *",
        "vol_lbl_education": "শিক্ষাগত যোগ্যতা *",
        "vol_ph_education": "যেমন: এইচএসসি / স্নাতক / ডিপ্লোমা",
        "vol_lbl_profession": "পেশা *",
        "vol_ph_profession": "যেমন: শিক্ষার্থী / চাকরিজীবী / উদ্যোক্তা",
        "vol_lbl_blood": "রক্তের গ্রুপ",
        "blood_ap": "A+ (পজিটিভ)",
        "blood_an": "A- (নেগেটিভ)",
        "blood_bp": "B+ (পজিটিভ)",
        "blood_bn": "B- (নেগেটিভ)",
        "blood_op": "O+ (পজিটিভ)",
        "blood_on": "O- (নেগেটিভ)",
        "blood_abp": "AB+ (পজিটিভ)",
        "blood_abn": "AB- (নেগেটিভ)",
        "vol_lbl_domain": "পছন্দের প্রকল্প / কার্যক্ষেত্র *",
        "vol_opt_pym": "Project Your Mentor (PYM - শিশু শিক্ষা ও সুরক্ষা)",
        "vol_opt_coks": "Climate Olympiad (COKS - ক্লাইমেট ও বৃক্ষরোপণ)",
        "vol_opt_ewgsf": "EWGSF প্রকল্প (নারী ক্ষমতায়ন, হ্যান্ড পেইন্ট ও মাসিক স্বাস্থ্য)",
        "vol_opt_blood": "জরুরি রক্তদান ও ফ্রি মেডিকেল ক্যাম্পেইন",
        "vol_opt_media": "ডিজিটাল প্রচারণা, পডকাস্ট, রিলস ও পোস্টার ডিজাইন",
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
        "nav_donate": "💖 Donate Now",
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
        "don_title": "Donate to Karu Shikha Welfare Fund",
        "don_sub": "Every contribution directly funds Project Your Mentor and grassroots welfare.",
        "don_lbl_amount": "Select Donation Amount (BDT)",
        "amt_500": "BDT 500",
        "amt_1000": "BDT 1,000",
        "amt_2000": "BDT 2,000",
        "amt_5000": "BDT 5,000",
        "don_lbl_custom": "Custom Amount (BDT)",
        "don_lbl_gateway": "Payment Method",
        "don_ph_name": "Your Full Name",
        "don_ph_phone": "Mobile Phone Number",
        "don_btn_submit": "Confirm & Complete Donation",
        "vol_title": "Volunteer Registration with Karu Shikha",
        "vol_sub": "Join our 3 flagship projects and community initiatives to spark transformative change.",
        "vol_lbl_name": "Full Name *",
        "vol_ph_name": "Your full legal name",
        "vol_lbl_email": "Email Address",
        "vol_lbl_phone": "Phone Number *",
        "vol_lbl_education": "Educational Qualification *",
        "vol_ph_education": "e.g. HSC / Bachelor's / Diploma",
        "vol_lbl_profession": "Profession / Occupation *",
        "vol_ph_profession": "e.g. Student / Service Holder / Entrepreneur",
        "vol_lbl_blood": "Blood Group",
        "blood_ap": "A+ (Positive)",
        "blood_an": "A- (Negative)",
        "blood_bp": "B+ (Positive)",
        "blood_bn": "B- (Negative)",
        "blood_op": "O+ (Positive)",
        "blood_on": "O- (Negative)",
        "blood_abp": "AB+ (Positive)",
        "blood_abn": "AB- (Negative)",
        "vol_lbl_domain": "Preferred Initiative / Domain *",
        "vol_opt_pym": "Project Your Mentor (PYM - Child Mentoring & Protection)",
        "vol_opt_coks": "Climate Olympiad (COKS - Climate Action & Afforestation)",
        "vol_opt_ewgsf": "EWGSF Project (Women Empowerment, Handpaint & Health)",
        "vol_opt_blood": "Emergency Voluntary Blood Donation & Free Medical Camps",
        "vol_opt_media": "Digital Media, Podcasts, Video Reels & Design",
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

            const name = (document.getElementById('vol-name')?.value || '').trim();
            const email = (document.getElementById('vol-email')?.value || '').trim();
            const phone = (document.getElementById('vol-phone')?.value || '').trim();
            const education = (document.getElementById('vol-education')?.value || '').trim();
            const profession = (document.getElementById('vol-profession')?.value || '').trim();
            const blood = (document.getElementById('vol-blood')?.value || '').trim();

            const domainEl = document.getElementById('vol-domain');
            const domain = domainEl ? domainEl.options[domainEl.selectedIndex].text.trim() : '';

            const address = (document.getElementById('vol-address')?.value || '').trim();

            if (!name || !phone) {
                showToast(currentLang === 'bn' ? 'অনুগ্রহ করে পূর্ণ নাম ও ফোন নম্বর পূরণ করুন।' : 'Please fill in your name and phone number.');
                return;
            }

            const now = new Date();
            const dateStr = now.toLocaleDateString(currentLang === 'bn' ? 'bn-BD' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            let waMessage = '';
            if (currentLang === 'bn') {
                waMessage =
`*কারু শিখা ইয়ুথ ডেভেলপমেন্ট সোসাইটি*
📋 *ভলান্টিয়ার রেজিস্ট্রেশন আবেদনপত্র*
━━━━━━━━━━━━━━━━━━━━
👤 *নাম:* ${name}
📞 *ফোন নম্বর:* ${phone}
${email ? `📧 *ইমেইল:* ${email}\n` : ''}${education ? `🎓 *শিক্ষাগত যোগ্যতা:* ${education}\n` : ''}${profession ? `💼 *পেশা:* ${profession}\n` : ''}${blood ? `🩸 *রক্তের গ্রুপ:* ${blood}\n` : ''}${domain ? `🎯 *আগ্রহের প্রকল্প:* ${domain}\n` : ''}${address ? `📍 *বর্তমান ঠিকানা:* ${address}\n` : ''}━━━━━━━━━━━━━━━━━━━━
📅 *তারিখ:* ${dateStr}
🤝 *আমি কারু শিখা যুব উন্নয়ন সোসাইটিতে ভলান্টিয়ার হিসেবে যুক্ত হতে আগ্রহী।*`;
            } else {
                waMessage =
`*Karu Shikha Youth Development Society*
📋 *Volunteer Registration Application*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${name}
📞 *Phone Number:* ${phone}
${email ? `📧 *Email:* ${email}\n` : ''}${education ? `🎓 *Education:* ${education}\n` : ''}${profession ? `💼 *Profession:* ${profession}\n` : ''}${blood ? `🩸 *Blood Group:* ${blood}\n` : ''}${domain ? `🎯 *Interested Project:* ${domain}\n` : ''}${address ? `📍 *Address:* ${address}\n` : ''}━━━━━━━━━━━━━━━━━━━━
📅 *Date:* ${dateStr}
🤝 *I am interested in joining Karu Shikha Youth Development Society as an active volunteer.*`;
            }

            const waUrl = `https://wa.me/8801795023942?text=${encodeURIComponent(waMessage)}`;

            const toastMsg = currentLang === 'bn'
                ? `ধন্যবাদ ${name}! আপনার আবেদন প্রস্তুত হয়েছে, হোয়াটসঅ্যাপে পাঠানো হচ্ছে...`
                : `Thank you ${name}! Application ready, opening in WhatsApp...`;
            showToast(toastMsg);

            if (volunteerModal) volunteerModal.classList.add('hidden');
            volunteerForm.reset();

            // Open WhatsApp with pre-filled application details
            window.open(waUrl, '_blank');
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
