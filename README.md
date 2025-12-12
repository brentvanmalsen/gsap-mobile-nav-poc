# GSAP Mobile Equalizer Navigation — Proof of Concept

This repository contains a technical prototype of a mobile navigation animation created for the STMPD website redesign.  
The goal is to explore whether an equalizer-inspired reveal fits STMPD’s cinematic visual style, and to validate this by implementing a working prototype and presenting it to STMPD for feedback.

---

## 📦 Installation
No installation or build tools are required.

1. Clone or download this repository:
   ```bash
   git clone https://github.com/brentvanmalsen/gsap-mobile-nav-poc.git
2. Open the project folder.
3. Run the prototype by opening index.html in your browser.

GSAP is loaded via CDN, so the project works immediately.

## 🎯 Purpose

- Test a custom full-screen navigation reveal using an equalizer-style animation.
- Validate technical feasibility using HTML, CSS, JavaScript, and GSAP.
- Provide a reusable animation structure for teammates to integrate later.
- Support the overall visual direction requested by STMPD.

## ✨ Features

- Two-line hamburger icon morphs smoothly into an X.
- Full-screen overlay fades in over the hero section.
- Eight vertical bars animate bottom-to-top in random order, filling the entire screen.
- Menu items fade in centered above the animation.
- Entire interaction is controlled through a reversible GSAP timeline.

## 🧩 Tech Stack

- GSAP 3
- HTML5
- CSS3
- JavaScript

No dependencies or frameworks required

## 📁 Page Structure

index.html – Phone frame, hero, menu button, overlay, bars, menu items  
style.css – Layout, layering, animation states  
main.js – GSAP timeline (open/close logic + staggered bar animation)  
images/ – Logo used in the hero section  

## 📌 Notes

This POC is exploratory.
It helps determine whether the equalizer-based navigation concept fits the final STMPD design direction and can be implemented.
