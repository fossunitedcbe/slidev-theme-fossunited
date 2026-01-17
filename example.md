---
theme: ./
background: https://source.unsplash.com/collection/94734566/1920x1080
font:
  sans: "Inter"
  mono: "Fira Code"
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

# About FOSS United

A non-profit foundation that promotes Free and Open Source Software (FOSS) in India.

- **Community Driven**: Built by the community, for the community.
- **Grant Programs**: Monthly grants for FOSS projects.
- **Events**: FOSS Conferences (IndiaFOSS) and local meetups.

---

## layout: section

# Layout Patterns

Demonstrating the available slide layouts

---

## layout: quote

> "Free software is a matter of liberty, not price. To understand the concept, you should think of 'free' as in 'free speech', not as in 'free beer'."

-- Richard Stallman

---

## layout: code

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

## layout: agenda

# Meetup Agenda

- **10:00 AM**: Intro to FOSS
- **10:30 AM**: Lightning Talks
- **11:30 AM**: Networking & Chai
- **12:00 PM**: Main Session

::right::

### Speaker Segment

Exciting talks from community members!

---

# Reusable Components

<Callout type="note">
Themes can include built-in Vue components to keep your markdown clean.
</Callout>

<Callout type="warning">
Always verify your live demos before the talk!
</Callout>

---

# Speaker Introduction

<Speaker 
  name="Santhosh" 
  role="Community Member" 
  twitter="FOSSUnited" 
  github="fossunited"
  website="https://fossunited.org"
/>

---

layout: center
class: text-center

---

# Thank You!

Join the community at [fossunited.org](https://fossunited.org)

[Discord](https://fossunited.org/discord) / [Forum](https://forum.fossunited.org)
