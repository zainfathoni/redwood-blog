import { render, cleanup } from '@redwoodjs/testing'

import BlogPostPage from './BlogPostPage'

describe('BlogPostPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<BlogPostPage />)
    }).not.toThrow()
  })
})
