import { render, cleanup } from '@redwoodjs/testing'

import BlogPost from './BlogPost'

describe('BlogPost', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<BlogPost />)
    }).not.toThrow()
  })
})
