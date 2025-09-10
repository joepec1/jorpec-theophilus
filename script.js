:root {
  --bg: #ffffff;
  --primary: #0d4d2d; /* deep green */
  --secondary: #d4af37; /* gold */
  --text: #1f2937;
  --muted: #6b7280;
  --radius: 12px;
  --max-width: 1100px;
}
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: "Segoe UI", Roboto, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 24px 16px;
}
h1, h2, h3 {
  color: var(--primary);
  margin-top: 0;
}
a { color: var(--primary); text-decoration: none; }
a:hover { text-decoration: underline; }

/* Header */
.site-header {
  background: #fff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 10;
}
.site-header .container {
  display: flex;
  align-items: center;
}
.brand {
  font-weight: 700;
  font-size: 1.2rem;
}
.site-nav {
  margin-left: auto;
  display: flex;
  gap: 16px;
}
.site-nav a {
  padding: 8px 12px;
  border-radius: 8px;
  color: var(--muted);
}
.site-nav a:hover {
  background: #f1f5f9;
  color: var(--primary);
}
.menu-toggle {
  display: none;
  margin-left: auto;
  font-size: 22px;
  background: none;
  border: none;
}

/* Hero */
.hero {
  background: linear-gradient(135deg, #0d4d2d 0%, #1f7050 100%);
  color: #fff;
  padding: 80px 0;
  text-align: center;
}
.hero .lead {
  font-size: 1.2rem;
  color: #e5e7eb;
}
.btn {
  background: var(--secondary);
  color: #fff;
  padding: 10px 18px;
  border-radius: var(--radius);
  display: inline-block;
  margin-top: 16px;
}
.btn:hover {
  background: #bfa130;
}

/* Sections */
.section { padding: 60px 0; }
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
.card {
  background: #f9fafb;
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.05);
}
.services-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  gap: 12px;
}
.services-list li {
  background: #f9fafb;
  padding: 14px;
  border-radius: var(--radius);
  border: 1px solid #eee;
}

/* Forms */
form {
  display: grid;
  gap: 14px;
  max-width: 500px;
}
label {
  display: flex;
  flex-direction: column;
  font-weight: 600;
}
input, textarea {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: var(--radius);
  font-size: 1rem;
}
button[type="submit"] {
  cursor: pointer;
  border: none;
  font-weight: 600;
}

/* Footer */
.site-footer {
  background: #0d4d2d;
  color: #fff;
  padding: 24px 0;
  margin-top: 40px;
}
.site-footer a {
  color: #d4af37;
}
.site-footer .container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 768px) {
  .site-nav { display: none; }
  .menu-toggle { display: block; }
}
