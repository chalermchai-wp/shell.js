/// <reference path="globals/mocha/index.d.ts" />
/// <reference path="modules/chai/index.d.ts" />

/**
 * Declaration for shell.js
 * shell.js version: v3.3.1
 */

import Typed from "typed.js";
declare module "shell.js" {
    interface Options {
        commands: [];
        host: string;
        path: string;
        responsive: boolean;
        root: boolean;
        style: Style;
        theme: Theme;
        typed?: Typed;
        user: string;
        char?: string;
        typedSpeed?: number;
        typedLoop?: Boolean;
        typedDelay?: number;
    }

    const enum Style {
        DEFAULT = "default",
        OSX = "osx",
        UBUNTU = "ubuntu",
        WINDOWS = "windows",
    }

    const enum Theme {
        DARK = "dark",
        LIGHT = "light",
    }

    export default class Shell {
        constructor(elementId: string | Element, options: Options);
    }
}
