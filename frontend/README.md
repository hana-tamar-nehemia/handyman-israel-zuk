# Frontend

אתר React — דף בית יחיד עם כל הסקשנים.

## מבנה `src/`

| תיקייה | משמעות |
|--------|--------|
| `components/layout/` | Header, Footer — נשארים קבועים בכל הדף |
| `components/sections/` | Hero, Services, Works... — בלוק תוכן אחד לכל סקשן |
| `components/ui/` | רכיבים קטנים לשימוש חוזר |
| `data/` | **כל הטקסטים** — עריכה בלי לגעת בעיצוב |
| `lib/` | לוגיקה (WhatsApp URLs, helpers) |
| `styles/` | CSS גלובלי ומשתני עיצוב |

## פקודות

```bash
npm run dev      # פיתוח
npm run build    # בנייה ל-production
npm run preview  # תצוגה מקומית של build
```
