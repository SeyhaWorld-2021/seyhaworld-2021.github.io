# Soeurm Seyha

A cold, calm, anime-inspired portfolio website. Minimal. Powerful. Unforgettable.

---

## Design Philosophy

Inspired by anime aesthetics (Vinland Saga vibe) – calm, cold, intelligent. The design prioritizes:
- **Clarity** - Clean layouts, easy to read
- **Calm** - Slow, dramatic animations
- **Cold** - Dark premium color palette
- **Power** - Every element has purpose

---

##  File Structure

```
portfolio/
├── index.html              # Main HTML
├── css/
│   └── styles.css          # All styles
├── js/
│   └── main.js             # Interactions
├── assets/
│   ├── images/             # Graphic design work
│   │   ├── project-1.jpg
│   │   └── ...
│   ├── videos/             # Motion graphics
│   │   ├── intro.mp4
│   │   └── ...
│   └── projects/           # Coding projects
│       ├── project-1/
│       └── ...
└── README.md
```

---

##  Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Chinese Black | `#0d0d0d` | Backgrounds |
| Cool Black | `#0a1628` | Cards |
| Dark Cerulean | `#0a4f76` | Accent (dark) |
| Cobalt Blue | `#0047ab` | Accent (mid) |
| Celtic Blue | `#246bce` | Accent (bright) |
| White | `#f0f4f8` | Text |

---

##  How to Update

### Adding Portfolio Projects

1. Open `index.html`
2. Find the `works-grid` section
3. Add a new project:

```html
<article class="work-item" data-category="design">
    <div class="work-card">
        <div class="work-media">
            <!-- Use placeholder -->
            <div class="work-placeholder" data-type="design">
                <span>07</span>
            </div>
            
            <!-- Or use actual image -->
            <!-- <img src="assets/images/your-project.jpg" alt="Project"> -->
        </div>
        <div class="work-info">
            <span class="work-category">Graphic Design</span>
            <h3 class="work-title">Project Title</h3>
            <p class="work-desc">Brief description</p>
        </div>
        <div class="work-overlay">
            <span class="work-view">View Project →</span>
        </div>
    </div>
</article>
```

**Category options:**
- `design` - Graphic Design
- `motion` - Motion Graphics
- `code` - Development

### Adding Images

```html
<div class="work-media">
    <img src="assets/images/project-name.jpg" alt="Project Name">
</div>
```

### Adding Videos

```html
<div class="work-media">
    <video autoplay muted loop playsinline>
        <source src="assets/videos/project.mp4" type="video/mp4">
    </video>
</div>
```

### Updating Personal Info

**About Section:**
- Edit text in `.about-content`
- Update stats in `.about-meta`

**Contact:**
- Update email in `.contact-link`
- Update social links in `.contact-social`

###  Activating the Contact Form

To receive real emails, you need to connect the form:

1. Go to [Formspree.io](https://formspree.io/) and sign up (it's free).
2. Create a **New Form** and name it "Portfolio Contact".
3. Formspree will give you an endpoint URL like `https://formspree.io/f/xvnggbzb`.
4. Open `index.html`, find the `<form>` tag in the Contact section.
5. Replace `YOUR_FORM_ID` with the ID from the URL (e.g., `xvnggbzb` or the full URL).
   ```html
   <form ... action="https://formspree.io/f/YOUR_NEW_ID" method="POST">
   ```
6. Now the form sends real emails!

### Adding Profile Photo

Replace the placeholder in About:

```html
<div class="frame-inner">
    <img src="assets/images/profile.jpg" alt="Soeurm Seyha" class="profile-img">
</div>
```

Add CSS:
```css
.profile-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

---

##  Tools Displayed

Edit the `.tools-grid` section:

```html
<div class="tool-card">
    <div class="tool-icon">Xx</div>
    <span class="tool-name">Tool Name</span>
</div>
```

---

##  Deploy

### Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Drag folder to deploy
3. Done

### GitHub Pages
1. Push to GitHub
2. Settings → Pages → Select branch
3. Site live at `username.github.io/repo`

### Vercel
```bash
npx vercel
```

---

##  Performance

- Optimized CSS animations
- Lazy loading ready
- Minimal dependencies
- ~ 50KB total

---

##  Animations

All animations are slow and dramatic (anime-style):
- Preloader: 3s
- Title reveal: 1.5s staggered
- Scroll reveals: 0.6s with delay
- Hover states: 0.3s ease
- Tool float: 3s infinite

To adjust timing, edit `--duration-*` variables in CSS.

---

##  Browser Support

- Chrome ✓
- Firefox ✓
- Safari ✓
- Edge ✓
- Mobile ✓

---

##  Final Note

> "Simple to navigate. Hard to forget."

This portfolio is built to last. Update content, add projects, deploy anywhere.

---

© 2025 Soeurm Seyha
