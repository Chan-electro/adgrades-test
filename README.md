# AdGrades 🚀

> We turned a website into a whole vibe. You're welcome.

---

## What even is this?

This is the official AdGrades website — a digital marketing agency that helps startups go from **"who are you?"** to **"omg I've seen them everywhere"**. Built with Next.js 16, Tailwind CSS 4, shadcn/ui, and an unhealthy amount of caffeine.

We deleted Three.js. We deleted GSAP. We deleted Lenis. We deleted that one file nobody knew what it did. It felt incredible. Like cleaning your room but for code.

---

## Tech Stack (the nerdy part)

| Thing | Why |
|-------|-----|
| Next.js 16 | Because we like our pages fast and our devs crying about Server Components |
| Tailwind CSS 4 | Utility-first. Token-second. Chaos-third. |
| shadcn/ui | Copy-paste components that somehow look better than anything we could write |
| Framer Motion | So the hero text bounces in like it owns the place |
| Geist Font | Vercel's font. We stole it legally. |
| next-themes | Dark mode. Light mode. Existential mode. |
| Resend API | For when someone fills out the contact form at 3am |
| Lucide Icons | We replaced every single emoji icon. Every. Single. One. 📱 → gone. |

---

## Getting Started (please read this unlike every other README)

```bash
# Clone it
git clone https://github.com/Chan-electro/adgrades-test

# Enter the danger zone
cd adgrades-test

# Install the 847 dependencies
npm install

# Run it locally and feel powerful
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) and stare at it for 10 minutes.

---

## Environment Variables

Create a `.env.local` file. Don't commit it. We're serious. Last time someone committed a `.env` file, three people cried.

```env
RESEND_API_KEY=your_key_here  # get this from resend.com, it's free, no excuses
```

Without this, the contact form still works — it just silently pretends to send emails like when you say "I'll do it tomorrow."

---

## Pages

- `/` — Home. The hero text is big. Very big. Uncomfortably big.
- `/services` — Everything we do, filterable because we have MANY services
- `/services/[id]` — Individual service pages with pricing that won't make you cry (maybe)
- `/clients` — Our clients. They trusted us. Bold move.
- `/clients/[id]` — Case studies. Results. Proof we're not making things up.
- `/about` — Who we are. There's a timeline. It's emotional.
- `/portfolio` — Pretty things we made
- `/careers` — Come work with us (please)
- `/contact` — The form that actually sends emails now. Revolutionary.

---

## What We Deleted in This Rewrite

Poured one out for the fallen:

- 🪦 `HeroScene.tsx` — Three.js hero component, imported but never used, RIP
- 🪦 `SmoothScroll.tsx` — Lenis wrapper, CSS can do this now, bye
- 🪦 `FloatingPhone.tsx` — The floating phone, nobody asked for it
- 🪦 `HeroVisual.tsx` — Whatever this was
- 🪦 `ShowcaseRef.tsx` — Genuinely no idea
- 🪦 `src/lib/data.ts` — Duplicate of `src/data/`, was living a double life

---

## Features That Actually Slap

- ✅ **Dark mode** — your eyes will thank you
- ✅ **39 static pages** — blazing fast, Google loves it
- ✅ **Sitemap + robots.txt** — SEO gods are appeased
- ✅ **JSON-LD structured data** — so Google knows we're a real business
- ✅ **Custom 404 page** — even our errors look good
- ✅ **Real contact form** — powered by Resend, not vibes
- ✅ **Mobile nav that actually works** — Sheet component, slides in smooth
- ✅ **Zero emoji icons** — we are professionals (now)

---

## Contributing

1. Fork it
2. Make it better
3. Don't break the build (39 pages, 0 errors, we worked hard for this)
4. Open a PR with a description that isn't just "fix stuff"

---

## The Philosophy

> "Move fast, don't break production, and for the love of everything please use `next/image` instead of raw `<img>` tags."
>
> — This codebase, probably

---

## License

MIT. Do whatever. Just don't make it worse.

---

*Built with ❤️, too many npm packages, and Claude AI doing most of the heavy lifting while the human supervised.*
