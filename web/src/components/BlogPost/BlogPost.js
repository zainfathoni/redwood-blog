import { Link, routes } from '@redwoodjs/router'

const BlogPost = ({ post }) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
        </h2>
        <p>{post.body}</p>
        <div>
          Posted at: <time>{post.createdAt}</time>
        </div>
      </header>
    </article>
  )
}

export default BlogPost
