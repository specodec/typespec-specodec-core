export { isSpecodecModel } from "./state.js";
export declare const RESERVED_KEYWORDS: {
    python: Set<string>;
    dart: Set<string>;
    kotlin: Set<string>;
    rust: Set<string>;
    go: Set<string>;
    swift: Set<string>;
    typescript: Set<string>;
};
export type LangName = keyof typeof RESERVED_KEYWORDS;
export declare const ALL_LANGS: LangName[];
export declare const LANG_DISPLAY_NAMES: Record<LangName, string>;
export declare function isReservedKeyword(name: string): boolean;
export declare function checkReservedKeyword(name: string): LangName[];
export declare function formatReservedWarning(fieldName: string, modelName: string, reservedIn: LangName[]): string;
export declare function formatReservedError(fieldName: string, modelName: string, reservedIn: LangName[]): string;
//# sourceMappingURL=index.d.ts.map