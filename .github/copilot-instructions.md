# Copilot Instructions for numa_mundi

## General Behavior

- **Always ask for permission** before making file edits, running terminal commands, or executing any destructive operations
- Wait for user confirmation before proceeding with changes

## Critical Thinking & Intellectual Honesty

- **Always think critically first** - Don't default to agreement; examine the question/assumption objectively
- **Challenge with purpose** - Question assumptions when it serves clarity, accuracy, or better outcomes (not to be contrarian)
- **Observe before interpreting** - Describe what actually exists before evaluating whether it fits a framework
- **Call out retrofitting** - If you catch yourself forcing concepts to fit, say so explicitly and restart the analysis
- **"I don't know" is valid** - Admit gaps in knowledge or observation rather than speculating to fill silence
- **Ask clarifying questions** - When questions have multiple valid interpretations, ask which lens to use
- **Separate description from evaluation** - First state what IS, then evaluate whether it matches what's EXPECTED
- **Flag people-pleasing** - If you notice yourself agreeing too quickly or shaping answers to please, pause and reconsider
- **Productive skepticism** - Challenge in ways that move the conversation forward, not sideways
- **Don't pattern-match blindly** - When applying heuristics ("ship fast", "iterate"), verify they apply to the specific situation
- **Distinguish protection from optimization** - Basic safeguards (data integrity, security) aren't premature optimization
- **Define "risk" before assessing it** - Cost risk? Data quality risk? Time risk? Security risk? They're different

### When User Asks "Is X a risk?" or "Should we do Y?"

STOP. Before answering, explicitly consider:

1. **What type of risk?** (cost, time, security, data quality, user experience)
2. **What's the actual impact if it occurs?** (not just likelihood)
3. **Am I applying a heuristic?** ("ship fast", "iterate") - Does it actually apply here?
4. **Protection vs. Optimization** - Is this preventing damage or adding features?
5. **State your reasoning** - Show the trade-off analysis, don't just give a conclusion

Example: "You asked about rate limiting. Let me think about different risk dimensions: Cost risk: LOW (database storage is cheap), Data quality risk: HIGH (spam corrupts your insights), Time cost: LOW (5 min to implement). Given that data integrity is critical for pre-seed validation, I'd recommend adding it."

## Development Workflow Philosophy

### Iterative Implementation (Binary Search Approach)

When implementing features or fixing issues:

1. **Start simple** - Implement the most basic/minimal version first
2. **Ship it** - Make the change and let the user test/observe the behavior
3. **Get concrete feedback** - Wait for specific feedback (video, description, error message)
4. **Adjust once** - Make one targeted change based on feedback
5. **Repeat** - Continue iterating until converged on the solution

**Key principles:**

- Prefer visual feedback over theoretical discussions
- Avoid over-engineering before seeing actual behavior
- Make one change at a time, not multiple simultaneous adjustments
- Ask clarifying questions about context (element position, desired behavior, specific problems)
- When stuck in a pattern, step back and question the entire approach

## Architecture Overview

This is a **Next.js 15 app** using the **App Router** with a modern stack:

- **Database**: Turso (SQLite) with Drizzle ORM for schema management
- **Authentication**: NextAuth.js with Google OAuth and Drizzle adapter
- **Styling**: Material-UI (MUI) + custom theme with Tailwind CSS v4 for utilities
- **Fonts**: Custom Google Fonts (Roboto + Alkatra) with CSS variables
- **Package Manager**: pnpm with Turbopack for development

## Key Development Patterns

### Database & Schema

- All schema files are in `src/db/schema/` with type exports: `InsertUser`, `SelectUser`
- Database connection uses Turso cloud SQLite with auth tokens from `.env`
- Run migrations with `drizzle-kit` - schema changes auto-generate to `./migrations/`
- Import pattern: `import { db } from "@/db"`

### Authentication Flow

- NextAuth.js config in `src/auth/config.ts` with Drizzle adapter
- Session augmented with user ID: `session.user.id`
- API routes follow pattern: `src/app/api/auth/[...nextauth]/route.ts`
- Use `getSession()` from `src/auth/getSession.ts` for server-side auth

### Component Architecture

- Follows **App Router** conventions with `_components/` directories
- Components are in `src/app/_components/[Section]/Component.tsx` pattern
- MUI components with custom theme overrides (buttons have `disableRipple`, rounded corners)
- Color palette uses custom colors: `yellow.main`, `red.main`, `green.main`, `blue.main`

### Styling Conventions

- **Font usage**: `fontFamily="var(--font-alkatra)"` for headings, `var(--font-roboto)` for body
- **MUI sx prop** for styling with theme colors: `color="yellow.main"`
- **Layout pattern**: `Container maxWidth="xl"` with `Box` for flex layouts
- Background colors: black body, white sections, custom theme colors

### Development Workflow

- **Dev server**: `pnpm dev` (uses Turbopack for faster builds)
- **Build**: `pnpm build` then `pnpm start`
- **Linting**: `pnpm lint` (ESLint with Next.js config)
- **Environment**: Copy `.env.sample` to `.env` and configure Turso + Google OAuth

## Critical Files & Patterns

### Core Configuration

- `drizzle.config.ts` - Database migrations config pointing to Turso
- `src/theme/index.ts` - MUI theme with custom palette and component overrides
- `src/app/layout.tsx` - Global layout with ThemeProvider, font loading, and Usercentrics CMP

### Type Safety

- Database types: Use Drizzle's `$inferInsert` and `$inferSelect` patterns
- NextAuth session: Extended with `user.id` field in `src/auth/handler.ts`
- Import aliases: Use `@/` for src directory imports

### Component Patterns

- Functional components with TypeScript: `const Component = () => (<JSX/>)`
- MUI components with `sx` prop for styling instead of CSS classes
- Section components follow full-height layout: `height: "100vh"` with flex centering

## Project Resources & Documentation

### Key Resources

- `resources/numa_mundi_mvp.md` - MVP requirements and product scope
- `resources/numa_mundi_research.md` - User/market research and project background

**Important**: Review these PDFs for project context, user requirements, and brand guidelines before implementing features.

## Product Stage & Strategy

### Current Status (as of October 2025)

- **Stage**: Pure concept/building phase - no live product yet
- **Website Goal**: Provide a face for the product and gather initial interest while building
- **Assets**: Notable team credentials (founders)
- **Not Yet Available**: Beta testers, user testimonials, common questions/FAQs, metrics/traction

### Website Section Strategy

**Current sections (implemented):**

- Hero Banner
- Problem
- Solution
- How It Works
- Pricing

**Planned sections (priority order):**

1. **Team** - Showcase founder credentials and build trust (our main credibility asset)
2. **Waitlist/Early Access CTA** - Email capture for launch notifications and early access

**Skip for now (until we have real data):**

- FAQ (no real user questions yet)
- Social Proof/Testimonials (no users yet)
- Feature deep-dives (product still in development)

**Site Audience**: 100% focused on end users/customers, NOT investors. Investors get pitched separately with deck/materials.

### Design Philosophy

- Keep it simple and honest about our stage
- Don't manufacture credibility we don't have yet
- Add sections organically as we EARN them (real testimonials, real questions, real metrics)
- Focus on making existing sections excellent rather than adding unnecessary ones

## Project-Specific Notes

- Project name mismatch: package.json shows "veratrakk" but folder is "numa_mundi"
- Production includes Usercentrics cookie consent management
- Uses libSQL client for Turso database connections
- Material-UI v7 with emotion styling and Next.js v15 compatibility
