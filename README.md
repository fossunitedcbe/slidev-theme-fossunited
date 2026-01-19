# slidev-theme-fossunited

A professional and clean [Slidev](https://github.com/slidevjs/slidev) theme designed for the [FOSS United](https://fossunited.org) community. This theme provides a set of layout patterns and components tailored for technology presentations and meetups.

## Features

- 🌿 **FOSS United Branding**: Built-in logos and curated color palette.
- 📱 **QR Code Component**: Easily render QR codes for links and social profiles.
- 👤 **Speaker Profiles**: Beautifully styled speaker cards.
- 💡 **Custom Callouts**: Visual highlights for tips, warnings, and notes.
- 📊 **Flexible Layouts**: Optimized for various content types from cover slides to code-heavy segments.

---

## Install

Add the following to your `slides.md` frontmatter:

```yaml
---
theme: fossunited
---
```

## Layouts

### `cover`
The starting slide for your presentation.
- **Props**:
  - `logo`: Custom logo path (defaults to FOSS United logos).
  - `background`: Background image URL. Rendered "blindly" without any overlays or filters.

> [!TIP]
> You can add custom graphics (like event-specific logos) by using absolute positioning directly in the slide content:
> ```html
> <img src="/assets/logos/custom-logo.svg" class="absolute bottom-4 right-4 w-24" />
> ```

### `section`
A divider slide to start a new section.
- Optimized for large headers and brief descriptions.

### `quote`
For sharing impactful quotes.
- Automatically styles `blockquote` elements.
- Use `<p class="attribution">Name</p>` for the quote author.

### `two-cols`
Side-by-side content layout.
- Use `::right::` to separate content between columns.

### `code`
A layout designed to give maximum space for code snippets.

### `intro`
A simple introduction layout for secondary headings.

---

## Components

### `<QRCode />`
Renders a QR code that can be positioned absolutely on the slide.
- **Props**:
  - `value`: The text or URL to encode.
  - `size`: Size of the QR code (default: 300).
  - `position`: `top-left`, `top-right`, `bottom-left`, `bottom-right`, `center`.
  - `additionalClasses`: Custom CSS classes for the container.

### `<Speaker />`
A card for presenting speaker information.
- **Props**:
  - `name`: Speaker's name.
  - `role`: (Optional) Professional title or community role.
  - `avatar`: (Optional) Path to speaker's photo.
  - `twitter`, `github`, `website`: (Optional) Social handles or links.

### `<EventMeta />`
Displays key event details with icons.
- **Props**:
  - `event`: Event name.
  - `city`: Location.
  - `date`: Date of the event.

### `<Callout />`
Visual blocks for highlighting information.
- **Props**:
  - `type`: `tip`, `warning`, `note`.

---

## Development

- `pnpm install`
- `pnpm dev` to start theme preview of `example.md`
- `pnpm build` to build the example project
- `pnpm export` to generate a PDF of the slides
