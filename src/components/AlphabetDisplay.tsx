"use client";

import React from 'react';
import styles from '../styles/AlphabetDisplay.module.css';

const AlphabetDisplay: React.FC = () => {
    // Properly defined function with TypeScript typing
    const handleLetterClick = (letter: string): void => {
        alert(`${letter} was clicked!`);
    };

const AlphabetDisplay: React.FC = () => {
    return (
        <div className={styles.alphabetContainer}>
            <h1>Alphabet Display</h1>
            <div className={styles.letterContainer}>
                {/* Team Member 1: Implement A-E letters */}
                <div className={styles.sectionAE}>
                    <div
                        className={`${styles.letter} ${styles.letterA}`}
                        onClick={() => handleLetterClick('A')}
                    >
                        A
                    </div>
                    <div
                        className={`${styles.letter} ${styles.letterB}`}
                        onClick={() => handleLetterClick('B')}
                    >
                        B
                    </div>
                    <div
                        className={`${styles.letter} ${styles.letterC}`}
                        onClick={() => handleLetterClick('C')}
                    >
                        C
                    </div>
                    <div
                        className={`${styles.letter} ${styles.letterD}`}
                        onClick={() => handleLetterClick('D')}
                    >
                        D
                    </div>
                    <div
                        className={`${styles.letter} ${styles.letterE}`}
                        onClick={() => handleLetterClick('E')}
                    >
                        E
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