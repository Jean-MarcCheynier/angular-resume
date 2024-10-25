import { Injectable } from '@angular/core';

export type MatrixHistory = { matrix: number[][]; i: number; j: number }[];
/* export type LevensteinDistanceRatioResult<
  T extends Record<P, string>,
  P extends keyof T
> = Record<P, { ratio: number; value: T }[]>; */

export interface LevensteinDistanceRatioResult<T> {
  [key: string]: { ratio: number; value: T }[];
}

const initialMatrixHistory: MatrixHistory = [
  {
    i: 0,
    j: 0,
    matrix: [],
  },
];

@Injectable({ providedIn: 'root' })
export class LevensteinDistanceService {
  private _matrixHistory: MatrixHistory = initialMatrixHistory;
  constructor() {}

  get matrixHistory(): MatrixHistory {
    return this._matrixHistory;
  }

  private reset(): void {
    this._matrixHistory = initialMatrixHistory;
  }

  private save(matrix: number[][], i: number, j: number): void {
    this._matrixHistory.push({ i, j, matrix: this.deepClone(matrix) });
  }

  private deepClone(matrix: number[][]): number[][] {
    return matrix.map((row) => row.map((cell) => cell));
  }

  levensteinDistance(str1: string, str2: string): number {
    this.reset();
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
    }
    for (let j = 0; j <= len2; j++) {
      //Assignation
      dp[0][j] = j;
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
        this.save(dp, i, j);
      }
    }

    return dp[len1][len2]; // The Levenshtein distance is the bottom-right corner of the matrix
  }

  levensteinDistanceRatio(str1: string, str2: string): number {
    const distance = this.levensteinDistance(str1, str2);
    const ration = 1 - distance / Math.max(str1.length, str2.length);
    return parseFloat(ration.toFixed(2));
  }

  getLevensteinDistanceRatio<T extends Record<P, string>, P extends keyof T>(
    search: string,
    values: T[],
    properties: P[]
  ): LevensteinDistanceRatioResult<T> {
    const result: LevensteinDistanceRatioResult<T> =
      {} as LevensteinDistanceRatioResult<T>;

    for (const p of properties) {
      console.log('Property', p);
      const searchedValue = [];

      for (const v of values) {
        // eslint-disable-next-line no-prototype-builtins
        if (!v.hasOwnProperty(p)) {
          throw new Error(`Property ${String(p)} not found in object`);
        }
        const string = v[p];
        const ratio = this.levensteinDistanceRatio(search, string);
        console.log(`Match ${v[p]} with ratio ${ratio}`);
        if (ratio > 0.3) {
          searchedValue.push({ ratio, value: v });
        }
      }
      result[p as string] = [...searchedValue];
    }

    return result;
  }
}
