declare module '*.module.scss' {
    type IClassNames = Record<string, string>;
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp';

declare module '*.svg' {
    import type React from 'react';
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const IS_DEV: boolean;
declare const API: string;

type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
