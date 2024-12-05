import React from 'react'
import blogData from '../assets/data/blogData'
import { Container, Row } from 'reactstrap'
import BlogItem from '../UI/BlogItem'


const Blog = () => {
  return (
    <Container>
      <Row>
        <h2 className='text-color'>Explore our blogs</h2>
        <h1 className='sub-text-color'>Latest Blogs</h1>
      </Row>
      <Row>
        {
          blogData.map((item, index) => {
            return <BlogItem title={item.title} description={item.description} />
          })
        }
      </Row>

    </Container>
  )
}

export default Blog
