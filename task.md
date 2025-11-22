# Task: Wanoura Studio Improvements

## Day 1 / First PR
- [x] **ISSUE-01**: Fix "Work" nav link
    - [x] Wrap `SelectedWorkLight` in `app/page.tsx` with `section#selected-work` and `scroll-mt-24`
    - [x] Confirm `Navbar.tsx` links to `#selected-work`
- [x] **ISSUE-02**: Contact form improvements
    - [x] Create `app/api/contact/route.ts`
    - [x] Update `components/ContactCTALight.tsx` to use API and show status

## Day 2
- [x] **ISSUE-03**: Swap logos and footer brand to `next/image`
    - [x] `components/Logo.tsx` updated with new brand asset
    - [x] `components/FooterLight.tsx` updated with new brand asset
    - [x] `components/ClientsStripLight.tsx` updated with `next/image` and correct paths
- [x] **ISSUE-05**: Decide on Framer Motion behavior in `ClientsStripLight`
    - [x] Added subtle `motion.div` fade-in animation

## Day 3
- [x] **ISSUE-04**: Refactor `WorksVimeoBinder`
    - [x] Remove global mount from `app/layout.tsx`
    - [x] Mount only in `app/page.tsx`
    - [x] Tighten effect/cleanup and extract logic
- [x] **Phase 3 (6)**: Extract navLinks and clients into `lib/site-config.ts`
    - [x] Created `lib/site-config.ts`
    - [x] Updated `components/Navbar.tsx`
    - [x] Updated `components/ClientsStripLight.tsx`

## Day 4
- [x] **Phase 3 (7)**: Add form utility hook
    - [x] Created `lib/hooks/useFormStatus.ts`
    - [x] Refactored `components/ContactCTALight.tsx`
- [x] **Phase 3 (8)**: Update docs (README / CONTRIBUTING)
    - [x] Updated `README.md` with conventions and structure
