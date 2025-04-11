"use client";

import React, {JSX, useState} from 'react';
import styles from '../styles/AlphabetDisplay.module.css';

const AlphabetDisplay: React.FC = () => {
    // State to track which letter is currently showing its phrase
    const [activeLetter, setActiveLetter] = useState<string | null>(null);

    // Old McDonald phrases for each letter
    const letterPhrases: Record<string, { animal: string, sound: string, icon: string }> = {
        'A': { animal: 'Alligator', sound: 'snap snap', icon: '🐊' },
        'B': { animal: 'Bear', sound: 'growl growl', icon: '🐻' },
        'C': { animal: 'Cow', sound: 'moo moo', icon: '🐄' },
        'D': { animal: 'Duck', sound: 'quack quack', icon: '🦆' },
        'E': { animal: 'Elephant', sound: 'trumpet trumpet', icon: '🐘' },
    };

    // Improved click handler
    const handleLetterClick = (letter: string): void => {
        if (activeLetter === letter) {
            // If clicking the same letter, hide the phrase
            setActiveLetter(null);
        } else {
            // Show phrase for this letter
            setActiveLetter(letter);
        }
    };

    // Generate the phrase for a letter
    const getPhrase = (letter: string): JSX.Element | null => {
        if (!letterPhrases[letter]) return null;

        const { animal, sound, icon } = letterPhrases[letter];
        return (
            <div className={styles.phrase}>
                <span className={styles.icon}>{icon}</span>
                <p>Old McDonald had a farm, E-I-E-I-O!</p>
                <p>And on that farm he had a {animal}, E-I-E-I-O!</p>
                <p>With a {sound} {sound} here, and a {sound} {sound} there.</p>
                <p>Here a {sound}, there a {sound}, everywhere a {sound} {sound}!</p>
            </div>
        );
    };

    return (
        <div className={styles.alphabetContainer}>
            <h1 className={styles.farmTitle}>The Farm</h1>
            <div className={styles.letterContainer}>
                {/* Team Member 1: Implement A-E letters */}
                <div className={styles.sectionAE}>
                    <div
                        className={`${styles.letter} ${styles.letterA} ${activeLetter === 'A' ? styles.active : ''}`}
                        onClick={() => handleLetterClick('A')}
                    >
                        A
                        {activeLetter === 'A' && getPhrase('A')}
                    </div>
                    <div
                        className={`${styles.letter} ${styles.letterB} ${activeLetter === 'B' ? styles.active : ''}`}
                        onClick={() => handleLetterClick('B')}
                    >
                        B
                        {activeLetter === 'B' && getPhrase('B')}
                    </div>
                    <div
                        className={`${styles.letter} ${styles.letterC} ${activeLetter === 'C' ? styles.active : ''}`}
                        onClick={() => handleLetterClick('C')}
                    >
                        C
                        {activeLetter === 'C' && getPhrase('C')}
                    </div>
                    <div
                        className={`${styles.letter} ${styles.letterD} ${activeLetter === 'D' ? styles.active : ''}`}
                        onClick={() => handleLetterClick('D')}
                    >
                        D
                        {activeLetter === 'D' && getPhrase('D')}
                    </div>
                    <div
                        className={`${styles.letter} ${styles.letterE} ${activeLetter === 'E' ? styles.active : ''}`}
                        onClick={() => handleLetterClick('E')}
                    >
                        E
                        {activeLetter === 'E' && getPhrase('E')}
                    </div>
                </div>
                {/* Team Member 2: Implement F-J letters */}
                {/* Team Member 3: Implement K-O letters */}
                {/* Team Member 4: Implement P-T letters */}
                {/* Team Member 5: Implement U-Z letters */}
            </div>
        </div>
    );
};

export default AlphabetDisplay;