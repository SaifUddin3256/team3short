/* ===================================================
   TEAM 3SHORT — site script
=================================================== */
(function () {
  "use strict";

  /* ---------- Translations ---------- */
  var translations = {
    en: {
      nav_home: "Home",
      nav_links: "Links",
      nav_contact: "Contact",
      nav_apply: "Application",
      hero_tagline: "Rise Together. Play Beyond Limits.",
      hero_apply: "Apply Now",
      hero_discord: "Join Discord",
      about_eyebrow: "Who We Are",
      about_title: "About Team 3Short",
      about_body: "Team 3Short is a fully online-managed PUBG Mobile creator team based in Bangladesh. We bring together passionate content creators across YouTube, Facebook, Instagram, and TikTok — growing our audiences and building opportunities together instead of alone. With no physical gaming house, every member creates on their own channel while representing Team 3Short and staying connected through our active Discord community.",
      vision_eyebrow: "Our Vision",
      vision_title: "Where We're Headed",
      vision_body: "Our vision is to build Bangladesh's most trusted and organized PUBG Mobile creator community — a place where creators of any size can grow together, gain real opportunities, and represent something bigger than themselves. We aim to set the standard for professionalism and teamwork in mobile esports content creation.",
      faq_eyebrow: "Support",
      faq_title: "Frequently Asked Questions",
      legal_eyebrow: "Documentation",
      legal_title: "Policies & Requirements",
      legal_body: "Please review the following documents before applying to Team 3Short.",
      legal_tos: "Terms & Conditions",
      legal_privacy: "Privacy Policy",
      legal_requirements: "Creator Requirements",
      links_title: "Find Us",
      footer_rights: "All Rights Reserved"
    },
    bn: {
      nav_home: "হোম",
      nav_links: "লিংকস",
      nav_contact: "যোগাযোগ",
      nav_apply: "আবেদন",
      hero_tagline: "একসাথে এগিয়ে চলা। সীমার বাইরে খেলা।",
      hero_apply: "এখনই আবেদন করুন",
      hero_discord: "Discord-এ যুক্ত হোন",
      about_eyebrow: "আমরা কারা",
      about_title: "Team 3Short সম্পর্কে",
      about_body: "Team 3Short বাংলাদেশ ভিত্তিক একটি সম্পূর্ণ অনলাইন-পরিচালিত PUBG Mobile ক্রিয়েটর টিম। আমরা YouTube, Facebook, Instagram এবং TikTok জুড়ে উদ্যমী কনটেন্ট ক্রিয়েটরদের একত্রিত করি — যেখানে সবাই একা নয় বরং একসাথে অডিয়েন্স বৃদ্ধি করে এবং সুযোগ তৈরি করে। কোনো ফিজিক্যাল গেমিং হাউজ ছাড়াই, প্রতিটি সদস্য নিজ নিজ চ্যানেলে কনটেন্ট তৈরি করে Team 3Short-কে প্রতিনিধিত্ব করে এবং আমাদের সক্রিয় Discord কমিউনিটির মাধ্যমে যুক্ত থাকে।",
      vision_eyebrow: "আমাদের লক্ষ্য",
      vision_title: "আমরা যেদিকে এগোচ্ছি",
      vision_body: "আমাদের লক্ষ্য বাংলাদেশের সবচেয়ে বিশ্বস্ত ও সুসংগঠিত PUBG Mobile ক্রিয়েটর কমিউনিটি গড়ে তোলা — এমন একটি জায়গা যেখানে যেকোনো আকারের ক্রিয়েটররা একসাথে বেড়ে উঠতে পারে, প্রকৃত সুযোগ পেতে পারে এবং নিজের চেয়ে বড় কিছুর প্রতিনিধিত্ব করতে পারে। আমরা মোবাইল ইস্পোর্টস কনটেন্ট তৈরিতে পেশাদারিত্ব ও দলগত কাজের মান নির্ধারণ করতে চাই।",
      faq_eyebrow: "সহায়তা",
      faq_title: "সচরাচর জিজ্ঞাসিত প্রশ্ন",
      legal_eyebrow: "ডকুমেন্টেশন",
      legal_title: "নীতিমালা ও শর্তাবলি",
      legal_body: "Team 3Short-এ আবেদন করার আগে অনুগ্রহ করে নিচের ডকুমেন্টগুলো দেখে নিন।",
      legal_tos: "শর্তাবলি",
      legal_privacy: "প্রাইভেসি পলিসি",
      legal_requirements: "ক্রিয়েটর রিকোয়ারমেন্টস",
      links_title: "আমাদের খুঁজুন",
      footer_rights: "সর্বস্বত্ব সংরক্ষিত"
    }
  };

  /* ---------- FAQ data ---------- */
  var faqData = [
    {
      en: { q: "What is Team 3Short?", a: "Team 3Short is a PUBG Mobile creator team — a group of content creators working together under one name, growing our audiences, and building opportunities as a team instead of alone." },
      bn: { q: "Team 3Short কী?", a: "Team 3Short একটি PUBG Mobile ক্রিয়েটর টিম — একদল কনটেন্ট ক্রিয়েটর যারা একই নামের অধীনে একসাথে কাজ করে, নিজেদের অডিয়েন্স বৃদ্ধি করে এবং একা নয় বরং টিম হিসেবে সুযোগ তৈরি করে।" }
    },
    {
      en: { q: "How does it work?", a: "We operate fully online, with no physical gaming house. Members create PUBG Mobile content on their own channels, represent Team 3Short across select posts, and connect with the rest of the roster through our Discord community." },
      bn: { q: "এটি কীভাবে কাজ করে?", a: "আমরা সম্পূর্ণ অনলাইনে কাজ করি, কোনো ফিজিক্যাল গেমিং হাউজ ছাড়াই। সদস্যরা নিজ নিজ চ্যানেলে PUBG Mobile কনটেন্ট তৈরি করে, নির্দিষ্ট পোস্টে Team 3Short-কে প্রতিনিধিত্ব করে এবং আমাদের Discord কমিউনিটির মাধ্যমে বাকি সদস্যদের সাথে যুক্ত থাকে।" }
    },
    {
      en: { q: "How do I join?", a: "Fill out our application form. Our leadership team reviews it, and if you're a fit, we'll reach out to bring you onboard." },
      bn: { q: "আমি কীভাবে যোগ দেব?", a: "আমাদের অ্যাপ্লিকেশন ফর্ম পূরণ করুন। আমাদের লিডারশিপ টিম তা রিভিউ করবে, এবং আপনি উপযুক্ত হলে আমরা আপনার সাথে যোগাযোগ করে টিমে যুক্ত করব।" }
    },
    {
      en: { q: "Is it free to join?", a: "Yes, there is no cost to apply or join." },
      bn: { q: "যোগ দেওয়া কি ফ্রি?", a: "হ্যাঁ, আবেদন করতে বা যোগ দিতে কোনো খরচ নেই।" }
    },
    {
      en: { q: "What's expected of me as a member?", a: "Consistent content, following our team guidelines, and representing Team 3Short professionally. Full details are in our Terms and Conditions and Creator Participation Requirements." },
      bn: { q: "সদস্য হিসেবে আমার কাছে কী প্রত্যাশা করা হয়?", a: "নিয়মিত কনটেন্ট তৈরি করা, আমাদের টিম গাইডলাইন মেনে চলা এবং পেশাদারিভাবে Team 3Short-কে প্রতিনিধিত্ব করা। বিস্তারিত তথ্য আমাদের Terms and Conditions এবং Creator Participation Requirements-এ রয়েছে।" }
    },
    {
      en: { q: "Who runs Team 3Short?", a: "The team is managed by our leadership, who handle applications, sponsorships, and day-to-day coordination." },
      bn: { q: "Team 3Short কারা পরিচালনা করে?", a: "টিমটি আমাদের লিডারশিপ দ্বারা পরিচালিত হয়, যারা অ্যাপ্লিকেশন, স্পনসরশিপ এবং দৈনন্দিন সমন্বয়ের দায়িত্বে থাকে।" }
    },
    {
      en: { q: "Where can I follow Team 3Short?", a: "Stay connected with us on Instagram, Facebook, and Discord — our official links are listed in the footer and the Links menu." },
      bn: { q: "আমি কোথায় Team 3Short-কে ফলো করতে পারি?", a: "Instagram, Facebook এবং Discord-এ আমাদের সাথে যুক্ত থাকুন — আমাদের অফিসিয়াল লিংকগুলো ফুটার এবং Links মেনুতে দেওয়া আছে।" }
    },
    {
      en: { q: "I have more questions — who do I ask?", a: "Reach out anytime by email at team3shortofficial@gmail.com or join our Discord server." },
      bn: { q: "আমার আরও প্রশ্ন আছে — কাকে জিজ্ঞাসা করব?", a: "যেকোনো সময় team3shortofficial@gmail.com-এ ইমেইল করুন অথবা আমাদের Discord সার্ভারে যোগ দিন।" }
    }
  ];

  var PDF_SOURCES = {
    tos: { url: "https://drive.google.com/file/d/1dzVy3bk2VPIeB6IAuugznH1gu-e-mdbs/preview", titleKey: "legal_tos" },
    privacy: { url: "https://drive.google.com/file/d/1rdDlbDa4LbZGkr1ur26v7wEgQtvOMxNd/preview", titleKey: "legal_privacy" },
    requirements: { url: "assets/requirements.pdf", titleKey: "legal_requirements" }
  };

  var currentLang = localStorage.getItem("t3s_lang") || "en";

  /* ---------- Apply translations ---------- */
  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("t3s_lang", lang);

    var dict = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.innerHTML = dict[key];
    });

    renderAccordion();
  }

  /* ---------- Accordion ---------- */
  var accordionEl = document.getElementById("accordion");

  function renderAccordion() {
    var openIndex = -1;
    accordionEl.querySelectorAll(".acc-item.open").forEach(function (el, i) {
      openIndex = Array.prototype.indexOf.call(accordionEl.children, el);
    });

    accordionEl.innerHTML = "";
    faqData.forEach(function (item, i) {
      var content = item[currentLang];
      var wrap = document.createElement("div");
      wrap.className = "acc-item";

      var trigger = document.createElement("button");
      trigger.className = "acc-trigger";
      trigger.type = "button";
      trigger.setAttribute("aria-expanded", "false");
      trigger.innerHTML = "<span>" + content.q + "</span><i data-lucide='chevron-down'></i>";

      var panel = document.createElement("div");
      panel.className = "acc-panel";
      var inner = document.createElement("div");
      inner.className = "acc-panel-inner";
      inner.textContent = content.a;
      panel.appendChild(inner);

      trigger.addEventListener("click", function () {
        var isOpen = wrap.classList.contains("open");
        accordionEl.querySelectorAll(".acc-item.open").forEach(function (el) {
          el.classList.remove("open");
          el.querySelector(".acc-panel").style.maxHeight = null;
          el.querySelector(".acc-trigger").setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
          wrap.classList.add("open");
          panel.style.maxHeight = panel.scrollHeight + "px";
          trigger.setAttribute("aria-expanded", "true");
        }
      });

      wrap.appendChild(trigger);
      wrap.appendChild(panel);
      accordionEl.appendChild(wrap);

      if (i === openIndex) {
        wrap.classList.add("open");
        panel.style.maxHeight = panel.scrollHeight + "px";
        trigger.setAttribute("aria-expanded", "true");
      }
    });

    if (window.lucide) window.lucide.createIcons();
  }

  /* ---------- Language toggle button ---------- */
  document.getElementById("langToggle").addEventListener("click", function () {
    applyLanguage(currentLang === "en" ? "bn" : "en");
  });

  /* ---------- Hamburger / mobile menu ---------- */
  var hamburgerBtn = document.getElementById("hamburgerBtn");
  var navLinks = document.getElementById("navLinks");

  function closeMenu() {
    navLinks.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  }

  hamburgerBtn.addEventListener("click", function () {
    var isOpen = navLinks.classList.toggle("open");
    hamburgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.querySelectorAll("[data-close-menu]").forEach(function (el) {
    el.addEventListener("click", closeMenu);
  });

  /* ---------- Modals ---------- */
  var linksModal = document.getElementById("linksModal");
  var pdfModal = document.getElementById("pdfModal");
  var pdfFrame = document.getElementById("pdfFrame");
  var pdfModalTitle = document.getElementById("pdfModalTitle");

  function openModal(modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeModal(modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
    if (modal === pdfModal) pdfFrame.src = "";
  }

  document.getElementById("openLinksPopup").addEventListener("click", function () {
    closeMenu();
    openModal(linksModal);
  });

  document.getElementById("contactBtn").addEventListener("click", function () {
    closeMenu();
    window.open("https://discord.gg/AEYXzfRS72", "_blank", "noopener");
  });

  document.querySelectorAll("[data-pdf]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var key = btn.getAttribute("data-pdf");
      var src = PDF_SOURCES[key];
      pdfModalTitle.textContent = translations[currentLang][src.titleKey];
      pdfFrame.src = src.url;
      openModal(pdfModal);
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      closeModal(btn.closest(".modal-overlay"));
    });
  });

  [linksModal, pdfModal].forEach(function (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal(modal);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal(linksModal);
      closeModal(pdfModal);
    }
  });

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Init ---------- */
  function init() {
    applyLanguage(currentLang);
    if (window.lucide) window.lucide.createIcons();
  }

  if (window.lucide) {
    init();
  } else {
    window.addEventListener("load", init);
  }
})();
