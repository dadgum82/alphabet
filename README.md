# Alphabet Display - GitHub Branch Strategy Practice

## Project Overview

This project is designed to help our development team practice GitHub branch strategies and resolving merge conflicts. We're building a simple interactive alphabet display in React/Next.js where each team member will implement different sections of the alphabet.

## The Challenge

Each team member will work on their assigned section of the alphabet, implementing both the display and interactive functionality. When these changes are merged together, they will naturally create merge conflicts that need to be resolved using proper Git techniques.

## Technical Details

- This is a Next.js project using TypeScript
- Styling is done with CSS Modules
- Each letter has interactive functionality when clicked
- The project uses modern React patterns including hooks

## Team Assignments

Our team of 5 developers will each be responsible for implementing a section of the alphabet:

1. **Team Member 1**: Letters A-E (with red theme)
    - Create interactive letter buttons
    - Implement the "Old McDonald" style phrases
    - Apply red styling to these letters

2. **Team Member 2**: Letters F-J (with blue theme)
    - Create interactive letter buttons
    - Implement themed phrases for each letter
    - Apply blue styling to these letters

3. **Team Member 3**: Letters K-O (with green theme)
    - Create interactive letter buttons
    - Implement themed phrases for each letter
    - Apply green styling to these letters

4. **Team Member 4**: Letters P-T (with purple theme)
    - Create interactive letter buttons
    - Implement themed phrases for each letter
    - Apply purple styling to these letters

5. **Team Member 5**: Letters U-Z (with orange theme)
    - Create interactive letter buttons
    - Implement themed phrases for each letter
    - Apply orange styling to these letters

## Branch Strategy

1. Each team member should:
    - Create a feature branch from `main` named `feature/[your-section]`
    - Example: `feature/a-e-letters` or `feature/f-j-letters`

2. Implement your assigned section in:
    - `src/components/AlphabetDisplay.tsx`
    - `src/styles/AlphabetDisplay.module.css`

3. After completing implementation:
    - Push your branch to GitHub
    - Create a Pull Request to `main`
    - Resolve any conflicts that arise

## Expected Merge Conflicts

When team members try to merge their changes, conflicts will naturally arise in:

1. `AlphabetDisplay.tsx` - Multiple developers modifying the same component
2. `AlphabetDisplay.module.css` - Each team adding their styling rules

This is intentional! Resolving these conflicts is the key learning objective of this exercise.

## Implementation Requirements

For each letter in your assigned section:

1. Add the letter display in the appropriate section of `AlphabetDisplay.tsx`
2. For each letter, implement the click handler functionality that:
    - Shows an "Old McDonald" style phrase
    - Displays an appropriate emoji icon
    - Allows toggling the phrase on/off
3. Add styling in `AlphabetDisplay.module.css`:
    - Follow the color theme assigned to your section
    - Style the letter display and interactive elements

## How to Run the Project

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Code Example

Here's an example of how Team Member 1 implemented their section (A-E):

```tsx
<div className={styles.sectionAE}>
  <div 
    className={`${styles.letter} ${styles.letterA} ${activeLetter === 'A' ? styles.active : ''}`}
    onClick={() => handleLetterClick('A')}
  >
    A
    {activeLetter === 'A' && getPhrase('A')}
  </div>
  {/* Additional letters B-E follow the same pattern */}
</div>
```

And in the CSS module:

```css
.sectionAE {
  display: flex;
  margin-bottom: 10px;
}

.letterA, .letterB, .letterC, .letterD, .letterE {
  background-color: #ffcccc;
  border: 2px solid #ff0000;
  color: #990000;
}

.letterA:hover, .letterB:hover, .letterC:hover, .letterD:hover, .letterE:hover {
  background-color: #ff6666;
}
```

## Submission Guidelines

1. Create your feature branch
2. Implement your assigned section
3. Push your branch to GitHub
4. Create a Pull Request
5. Work through any merge conflicts
6. Get approval from at least one teammate

Remember, the goal is to practice Git workflows, especially handling merge conflicts. Good luck!