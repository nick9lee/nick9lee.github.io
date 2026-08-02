# Trip Options — Aug 17–22

Flying from Vancouver. Back by evening of Aug 22.

---

## New York City

**Flight:** $728–$1,018
**Lodging:** $80–$100/person/night (split Airbnb in Jersey City, PATH train to Manhattan)
**Total per person:** ~$1,400–$1,800

- Bars and food in Brooklyn (Williamsburg, Bushwick)
- Comedy Cellar, Broadway show
- Rooftop bars, LES nightlife
- Central Park, High Line, SoHo

---

## San Francisco

**Flight:** $613–$778
**Lodging:** $70–$105/person/night (split Airbnb in the Mission)
**Total per person:** ~$1,100–$1,500

- Golden Gate Bridge bike ride
- Mission District — burritos, bars
- Dolores Park
- Day trip to Muir Woods or wine country (Sonoma)
- North Beach, Chinatown

---

## Costa Rica

**Flight:** $991–$1,198
**Lodging:** $30–$55/person/night (split Airbnb or hostel)
**Total per person:** ~$1,300–$1,700

- Surfing (Tamarindo or Nosara)
- Beach days
- Zip-lining, waterfall hikes
- Cheap food and drinks
- Downside: 8–10hr travel each way, so really only 4 days on the ground

---

## Comparison

| | NYC | SF | Costa Rica |
|--|-----|----|----|
| Flight | $728–$1,018 | $613–$778 | $991–$1,198 |
| Lodging (each) | $80–$100/night | $70–$105/night | $30–$55/night |
| Travel time | 5.5hr | 2.5hr | 8–10hr |
| Total/person | $1,400–$1,800 | $1,100–$1,500 | $1,300–$1,700 |

Book soon — 2 weeks out.

---

## Timeline

```mermaid
gantt
    title Aug 17–22 Trip Window
    dateFormat  YYYY-MM-DD
    axisFormat  %b %d

    section NYC
    Fly YVR→EWR           :2026-08-17, 1d
    NYC (5 days)          :2026-08-17, 5d
    Fly EWR→YVR           :2026-08-22, 1d

    section SF
    Fly YVR→SFO           :2026-08-17, 1d
    SF (5 days)           :2026-08-17, 5d
    Fly SFO→YVR           :2026-08-22, 1d

    section Costa Rica
    Fly YVR→LIR (long)    :2026-08-17, 1d
    Costa Rica (4 days)   :2026-08-18, 4d
    Fly LIR→YVR (long)    :2026-08-22, 1d
```

## Cost Breakdown

```mermaid
pie title NYC Total (~$1,600/person)
    "Flight" : 870
    "Lodging (5 nights)" : 450
    "Food & Drinks" : 400
    "Activities" : 150
```

```mermaid
pie title SF Total (~$1,300/person)
    "Flight" : 700
    "Lodging (5 nights)" : 440
    "Food & Drinks" : 325
    "Activities" : 100
```

```mermaid
pie title Costa Rica Total (~$1,500/person)
    "Flight" : 1100
    "Lodging (5 nights)" : 210
    "Food & Drinks" : 160
    "Activities" : 200
```

## Decision Flow

```mermaid
flowchart TD
    A[What do we want?] --> B{City or Beach?}
    B -->|City| C{Budget priority?}
    B -->|Beach/Adventure| D[Costa Rica]
    C -->|Cheapest| E[SF]
    C -->|More to do| F[NYC]
    D --> G[$1,500/person — 4 real days]
    E --> H[$1,300/person — 5 full days]
    F --> I[$1,800/person — 5 full days]
```
