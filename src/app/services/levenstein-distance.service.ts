import { Injectable } from '@angular/core';

@Injectable()
export class LevensteinDistanceService {
  private _matrixHistory: number[][][] = [];
  constructor() {}

  private save(matrix: number[][]): void {
    this._matrixHistory.push(matrix);
  }

  get matrixHistory(): number[][][] {
    return this._matrixHistory;
  }

  levenshteinDistance(str1: string, str2: string): number {
    this._matrixHistory = [];
    const len1 = str1.length;
    const len2 = str2.length;

    // Create a matrix of (len1+1) x (len2+1)
    const dp: number[][] = Array.from({ length: len1 + 1 }, () =>
      Array(len2 + 1).fill(0)
    );

    // Initialize the first row and column
    for (let i = 0; i <= len1; i++) {
      //Assignation
      dp[i][0] = i;
      this.save(dp);
    }
    for (let j = 0; j <= len2; j++) {
      //Assignation
      dp[0][j] = j;
      this.save(dp);
    }

    // Compute Levenshtein distance
    for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
        const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;

        //Assignation
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1, // deletion
          dp[i][j - 1] + 1, // insertion
          dp[i - 1][j - 1] + cost // substitution
        );
        this.save(dp);
      }
    }

    return dp[len1][len2]; // The Levenshtein distance is the bottom-right corner of the matrix
  }
}
