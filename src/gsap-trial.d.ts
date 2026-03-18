declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: gsap.DOMTarget, vars?: object);
    words: Element[];
    chars: Element[];
    lines: Element[];
    revert(): void;
  }
}

declare module 'gsap-trial/ScrollSmoother';
