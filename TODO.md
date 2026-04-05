# TODO — Homepage Gebäude - Glas & Gras

## Priorität 1 (vor Live-Deployment)

- [ ] **Google Fonts lokal hosten** — Fonts runterladen und aus `/fonts/` einbinden statt von Google-Servern. DSGVO-Abmahnrisiko beseitigen.
- [ ] **Favicon erstellen** — Logo (Hausdach + Blatt) als `.ico` / `.svg` Favicon. Browser-Tab sieht sonst unprofessionell aus.
- [ ] **Meta-Tags für SEO & Social Media** — `<meta name="description">`, Open Graph Tags (`og:title`, `og:description`, `og:image`). Damit WhatsApp/Facebook/etc. eine schöne Vorschau zeigen.
- [ ] **Cookie-Banner prüfen** — Entfällt wenn Google Fonts lokal gehostet werden. Falls doch externe Dienste dazukommen (Maps, Analytics) wird ein Banner nötig.
- [ ] **Impressum mit Marco abgleichen** — USt-IdNr. eintragen falls vorhanden, Angaben auf Richtigkeit prüfen lassen.

## Priorität 2 (nach Launch sinnvoll)

- [ ] **Formular-Backend einrichten** — `mailto:` durch echtes Backend ersetzen (z.B. Formspree, Netlify Forms oder eigenes PHP-Script). Aktuell braucht der User ein Mail-Programm.
- [ ] **Google Maps Embed** — Standort-Karte im Kontaktbereich. Kunden aus der Region sehen sofort wo Marco sitzt.
- [ ] **Bilder von echten Arbeiten** — Abschnitt "Unsere Arbeit" mit Vorher/Nachher-Fotos. Marco muss Fotos liefern.
- [ ] **Kundenstimmen / Referenzen** — 2-3 Zitate von zufriedenen Kunden. Baut Vertrauen auf.
- [ ] **Google Business Profile** — Falls noch nicht vorhanden: anlegen und mit Website verknüpfen. Wichtig für lokale Sichtbarkeit.

## Priorität 3 (Kür)

- [ ] **Performance-Optimierung** — Bilder komprimieren (WebP), Critical CSS inline, Lighthouse Score prüfen.
- [ ] **Structured Data (JSON-LD)** — LocalBusiness Schema für bessere Google-Ergebnisse.
- [ ] **Analytics** — Datenschutzkonformes Tracking (z.B. Plausible oder Matomo) um zu sehen woher Besucher kommen.
- [ ] **Eigene Domain** — `gebaeude-glas-gras.de` registrieren und verknüpfen (falls Marco das will).
- [ ] **SSL-Zertifikat** — Bei eigenem Server/Domain sicherstellen dass HTTPS läuft.

---

*Webentwicklung: [dictiefer.dev](https://dictiefer.dev)*
