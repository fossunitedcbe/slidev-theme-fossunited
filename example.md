---
theme: ./
highlighter: shiki
lineNumbers: true
info: |
  ## FOSS United Slidev Theme
  A professional theme for community presentations.
drawings:
  persist: false
transition: slide-left
title: FOSS United Theme
layout: cover
background: https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2070
---

# FOSS United Theme

Growing India's FOSS Ecosystem

<EventMeta 
  event="FOSS United Meetup" 
  city="Coimbatore" 
  date="January 2026" 
/>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" flex="~ justify-center items-center gap-2" hover="bg-white bg-opacity-10">
    Press Space for next page <div class="i-carbon:arrow-right inline-block"/>
  </span>
</div>

---
layout: default
---

# About FOSS United

FOSS United is a non-profit foundation that aims at promoting & strengthening the Free and Open Source Software (FOSS) ecosystem in India.

- **Community Driven**: Built by the community, for the community.
- **Grant Programs**: Monthly grants for FOSS projects.
- **Events**: FOSS Conferences (IndiaFOSS) and local meetups.

---
layout: section
---

# Layout Patterns

Demonstrating the available slide layouts

---
layout: quote
---

> "Free software is a matter of liberty, not price. To understand the concept, you should think of 'free' as in 'free speech', not as in 'free beer'."

<p class="attribution">Richard Stallman</p>

---
layout: code
---

# Code-Heavy Layout

Maximized space for technical demonstrations

```ts {all|2|4-6|8}
// Reusable Speaker Component
import Speaker from "./components/Speaker.vue";

export default {
  name: "FOSS United Theme",
};

console.log("Open Source is the future!");
```

<Callout type="tip">
Use the `code` layout when you need more vertical space for snippets.
</Callout>

---
layout: two-cols
---

# Meetup Agenda

- **10:00 AM - 10:30 AM**: Intro to FOSS
- **10:30 AM - 11:30 AM**: Talks
- **11:30 AM - 12:30 PM**: Round Table Discussion
- **12:30 PM - 1:00 PM**: Networking & Chai

::right::

### Speaker Segment

Exciting talks from community members!

1. [Name] - [Talk Title]
2. [Name] - [Talk Title]
3. [Name] - [Talk Title]

---
layout: default
---

# Reusable Components

<Callout type="note">
Themes can include built-in Vue components to keep your markdown clean.
</Callout>

<Callout type="warning">
Always verify your live demos before the talk!
</Callout>

---
layout: default
---

# whoami

<Speaker 
  name="Name" 
  role="Community Member" 
  twitter="FOSSUnited" 
  github="fossunited"
  website="https://fossunited.org"
/>

---
layout: two-cols
---

## Left Column
- 2 column layout

::right::

## Right Column
<br/>
<img src="https://raw.githubusercontent.com/fossunited/Branding/refs/heads/main/asset/FOSS%20United%20Logo/FOSS%20United%20Logo%20White.png" class="border-8 border-green-500 bg-black" />

---
layout: center
class: text-center
---

# Thank You!

Join the community at [fossunited.org](https://fossunited.org) 

[Forum](https://forum.fossunited.org)
