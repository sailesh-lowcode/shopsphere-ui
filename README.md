# ShopSphere — E-commerce Front-End UI

A complete, fully static e-commerce website: 5 pages, plain HTML + CSS + a
touch of vanilla JS. **No backend** — cart, checkout and payments are demo UI.

## Pages

| Page | File | What's on it |
|---|---|---|
| Home | `index.html` | Hero, 5 category tiles, trending products, flash-sale banner, features, newsletter |
| Shop | `shop.html` | Filter sidebar (categories / price / rating), sort toolbar, 9 products, pagination |
| Product | `product.html` | Gallery + thumbnails, price/discount, color swatches, qty stepper, description / specs / reviews tabs |
| Cart | `cart.html` | Items with qty steppers, remove buttons, order summary with discount |
| Checkout | `checkout.html` | 3-step indicator, shipping form, payment method picker, order review |

## Preview locally

Open `index.html` in a browser, or:

```bash
npx serve .
```

## Design notes

- Zero external assets — product images are emoji tiles on CSS gradients
- Design system in CSS variables (`--brand`, `--accent`, `--radius`, …)
- Responsive: 4 → 3 → 2 column grids, mobile-friendly forms and cart
- `script.js` only powers UI feedback (tabs, steppers, swatches, toast, cart badge)
