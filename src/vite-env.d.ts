/// <reference types="vite/client" />

import type { DetailedHTMLProps, HTMLAttributes } from "react"

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      [elementName: `y-core-${string}`]: DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > &
        Record<string, unknown>
    }
  }
}
