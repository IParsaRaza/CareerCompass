# Design Guidelines: Pharmaceutical Career Showcase Website

## Design Approach
**Hybrid Approach**: Combining LinkedIn's professional credibility with Notion's clean information hierarchy and subtle medical/academic aesthetics. Focus on clarity, trustworthiness, and organized information presentation.

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- Dark Mode Primary: 200 85% 45% (Medical Blue - professional, trustworthy)
- Dark Mode Background: 220 20% 12% (Deep Navy background)
- Dark Mode Surface: 220 18% 18% (Elevated cards/sections)

**Light Mode:**
- Light Primary: 200 85% 45% (Consistent blue)
- Light Background: 0 0% 98% (Clean white)
- Light Surface: 0 0% 100% (Pure white cards)

**Accent Colors:**
- Success Green: 145 65% 45% (for growth statistics, positive metrics)
- Neutral Gray: 220 10% 60% (for secondary text)

**Color Usage Philosophy:**
- Primary blue used sparingly for CTAs and key highlights
- Generous whitespace with subtle surface elevation
- Avoid over-saturation - maintain professional, academic tone

### B. Typography

**Font Stack:**
- Headings: 'Inter', sans-serif (weights: 600, 700, 800)
- Body: 'Inter', sans-serif (weights: 400, 500)
- Accent/Stats: 'Space Grono', monospace (for numerical data)

**Type Scale:**
- Hero Headline: text-5xl md:text-7xl font-bold
- Section Headers: text-3xl md:text-4xl font-bold
- Subsection Headers: text-xl md:text-2xl font-semibold
- Body Text: text-base md:text-lg leading-relaxed
- Captions: text-sm text-muted-foreground

### C. Layout System

**Spacing Primitives:** Consistently use 4, 8, 12, 16, 20, 24 (Tailwind units: p-4, h-8, gap-12, py-16, etc.)

**Container Strategy:**
- Full-width sections with inner max-w-7xl mx-auto
- Content sections: max-w-4xl for optimal reading
- Section vertical padding: py-16 md:py-24
- Component spacing: space-y-12 md:space-y-16

**Grid System:**
- 2-column layouts for skills, education costs (md:grid-cols-2)
- 3-column for responsibilities/duties (lg:grid-cols-3)
- Single column for narrative sections (personal motivation)

### D. Component Library

**Hero Section:**
- Full viewport height (min-h-screen) with gradient overlay
- Large medical/pharmaceutical background image (lab setting, molecular structures, or professional environment)
- Centered headline + subtitle structure
- Subtle scroll indicator at bottom

**Information Cards:**
- Rounded corners (rounded-xl)
- Subtle shadow (shadow-lg)
- Padding: p-6 md:p-8
- Border on light mode: border border-gray-200
- Background blur effect on dark mode elevated surfaces

**Statistics Display:**
- Large numbers with monospace font
- Small descriptive labels below
- Horizontal layout with dividers (grid-cols-2 md:grid-cols-4)

**List Components:**
- Checkmark icons for skills, course lists
- Icon + text layout with generous spacing (gap-4)
- Organized into clear categories with subheadings

**Navigation:**
- Sticky header with smooth scroll links
- Transparent background with blur effect
- Highlights active section on scroll

**Content Sections:**
- Alternating background colors (subtle) for visual rhythm
- Each section contains: heading, optional icon, main content, supporting visual
- Clear visual hierarchy with consistent spacing

### E. Images

**Hero Image (Required):**
- Full-width hero background: Professional pharmaceutical lab setting, microscope work, or molecular research imagery
- Should convey professionalism, science, and healthcare
- Gradient overlay (from dark background color) for text legibility

**Section Supporting Images (Optional but Recommended):**
- Education section: University/medical school imagery
- Work environment: Lab collaboration photos
- Skills section: Abstract medical icons or illustrations

**Image Treatment:**
- Subtle grayscale filter (40% desaturation) for cohesion
- Rounded corners for inline images (rounded-lg)
- Maintain aspect ratios: 16:9 for landscape, 4:3 for cards

### F. Interactive Elements

**Buttons:**
- Primary: Solid blue background, white text, rounded-lg
- Outlined (on images): Blur background, white text with blue border
- Hover states handled by component (no custom hover needed)

**Hover Effects (Minimal):**
- Cards: Subtle lift (translate-y-1) + shadow increase
- Links: Color transition to primary blue
- No animations on page load - content should appear static

**Smooth Scrolling:**
- Enable smooth scroll behavior for navigation links
- Offset scroll position to account for sticky header

## Key Sections Structure

1. **Hero**: Full-screen with background image, career title, brief tagline
2. **Personal Motivation**: Single column, narrative format, generous line height
3. **Responsibilities Grid**: 3-column card layout with icons
4. **Education Path**: Timeline or step-by-step visualization with costs
5. **Skills Showcase**: Two-column split (hard skills | soft skills) with checkmarks
6. **Salary & Growth**: Statistics display with growth chart or visual indicator
7. **Work Environment**: Image + text description layout
8. **High School Prep**: Organized course list with subject categories
9. **Footer**: Simple, minimal contact or navigation recap

## Professional Polish

- Consistent card shadows and elevations
- Ample breathing room between sections
- Professional medical imagery throughout
- Trust indicators: statistics, growth percentages prominently displayed
- Clean, scannable information hierarchy
- Mobile-responsive with stacked layouts on small screens