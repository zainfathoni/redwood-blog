import { render, cleanup } from '@redwoodjs/testing'

import ContactPage from './ContactPage'

describe('ContactPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ContactPage />)
    }).not.toThrow()
  })
})
