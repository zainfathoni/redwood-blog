import { render, cleanup } from '@redwoodjs/testing'

import AboutPage from './AboutPage'

describe('AboutPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<AboutPage />)
    }).not.toThrow()
  })
})
