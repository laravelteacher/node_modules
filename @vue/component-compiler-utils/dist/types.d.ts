import { SFCDescriptor } from './parse';
export interface StartOfSourceMap {
    file?: string;
    sourceRoot?: string;
}
export interface RawSourceMap extends StartOfSourceMap {
    version: string;
    sources: string[];
    names: string[];
    sourcesContent?: string[];
    mappings: string;
}
export interface VueTemplateCompiler {
    parseComponent(source: string, options?: any): SFCDescriptor;
    compile(template: string, options: VueTemplateCompilerOptions): VueTemplateCompilerResults;
    ssrCompile(template: string, options: VueTemplateCompilerOptions): VueTemplateCompilerResults;
}
export interface VueTemplateCompilerOptions {
    modules?: Object[];
    outputSourceRange?: boolean;
}
export interface VueTemplateCompilerParseOptions {
    pad?: 'line' | 'space';
}
export interface ErrorWithRange {
    msg: string;
    start: number;
    end: number;
}
export interface VueTemplateCompilerResults {
    ast: Object | void;
    render: string;
    staticRenderFns: string[];
    errors: (string | ErrorWithRange)[];
    tips: (string | ErrorWithRange)[];
}
