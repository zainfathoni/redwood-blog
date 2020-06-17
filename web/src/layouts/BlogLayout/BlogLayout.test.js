import { render, cleanup } from '@redwoodjs/testing'

import BlogLayout from './BlogLayout'

describe('BlogLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<BlogLayout />)
    }).not.toThrow()
  })
})
