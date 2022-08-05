"use strict";
// interface SortingProps {
//   length: number;
//   compare(indexLeft: number, indexRight: number): boolean;
//   swap(indexLeft: number, indexRight: number): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortData = void 0;
class SortData {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.SortData = SortData;
