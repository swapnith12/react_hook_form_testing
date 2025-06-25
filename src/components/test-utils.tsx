// import type React from 'react'
import {render} from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import type { ReactElement } from 'react'
// import {ThemeProvider} from 'my-ui-lib'
// import {TranslationProvider} from 'my-i18n-lib'
// import defaultStrings from 'i18n/en-x-default'

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return (
        {children}
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui)

export * from '@testing-library/react'
export {customRender as render}