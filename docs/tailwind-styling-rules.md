# Tailwind Styling Rules

## Purpose

This document defines styling conventions and layout guardrails for the project.

Goals:

- maintain predictable layouts
- create clear visual boundaries
- reduce mobile issues and overflow bugs
- keep styling beginner friendly
- create easy-to-inspect UI structure

This project prioritizes:

```txt
Predictable > clever
Readable > reusable
Mobile-first > desktop-first
Clear boundaries > hidden magic
```

---

# 1. Layout Philosophy

Think of layouts as building a house.

```txt
Walls = layouts and sections

Rooms = pages

Furniture = components
```

Layouts should build structure.

Pages should provide content.

Components should provide implementation details.

---

# 2. Shell Layout Rules

These rules strongly apply to:

- PublicLayout
- AuthLayout
- DashboardLayout
- Route wrappers
- Header wrappers
- Footer wrappers
- Sidebar wrappers
- Main stage containers

Shells should create visually obvious boundaries.

Preferred shell pattern:

```tsx
<div className="min-h-screen flex flex-col">
  <Header />

  <main className="flex-1 w-full">{children}</main>

  <Footer />
</div>
```

Recommended:

- outer wrapper → `min-h-screen flex flex-col`
- header → `w-full shrink-0`
- footer → `w-full shrink-0`
- main stage → `flex-1 w-full min-w-0`

---

# 3. Full Width Sections

Sections should usually span the viewport.

Content inside sections may be constrained.

Good:

```tsx
<section className="w-full">
  <div className="mx-auto w-full max-w-6xl px-4">Content</div>
</section>
```

Avoid:

```tsx
<header className="mx-auto max-w-6xl">
```

Why?

Because the header itself becomes constrained.

Mental model:

```txt
Wall = full width

Furniture = constrained
```

---

# 4. Mobile First

Start with mobile.

Then scale upward.

Good:

```tsx
px-4 md:px-6 lg:px-8
```

Good:

```tsx
text-3xl md:text-5xl
```

Avoid designing desktop first.

---

# 5. Avoid Fixed Widths

Avoid:

```tsx
w-[600px]

min-w-[500px]
```

Prefer:

```tsx
w-full

max-w-md

max-w-6xl
```

Images:

```tsx
max - w - full

h - auto
```

---

# 6. Overflow Rules

Overflow usually means something became wider than the viewport.

Common causes:

- fixed widths
- large min widths
- grids with too many columns
- flex rows without wrapping
- images without constraints

Useful tools:

```tsx
min-w-0

max-w-full

break-words
```

---

# 7. Debugging Rules

Temporary styling is allowed.

Examples:

```tsx
border border-red-500

bg-red-100
```

Use debugging styles to inspect:

- boundaries
- spacing
- overflow
- width behavior

Remove before commit.

---

# 8. Custom UI Rules

These rules are softer for:

- modals
- drawers
- seating canvas
- drag systems
- animation-heavy UI
- highly custom components

Tailwind is preferred.

Custom CSS is acceptable when it improves clarity.

---

# 9. Dashboard Mental Model

Dashboard structure should remain visually clear.

Example:

```txt
Dashboard Layout

Sidebar

Topbar

Main Stage

Feature Content
```

Feature code should not control dashboard shell structure.

Shell controls shell.

Features control feature behavior.

---

# 10. Styling Decision Order

Before styling ask:

1. Does the shell fill correctly?
2. Does the section boundary make sense?
3. Is mobile working first?
4. Is content constrained correctly?
5. Is overflow possible?
6. Is this still readable?

---

# 11. Project Philosophy

```txt
Predictable > clever

Readable > reusable

Simple > abstract

Mobile-first > desktop-first

Box model clarity > hidden layout magic
```
