function Post() {
  return <h1>Page</h1>
}

export default Post

export async function getStaticPaths() {
  /*
   *   If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.
   *   This is useful if you know that all paths will be known at build time.
   */
  return {
    paths: [{
      params: { slug: '1' },
      params: { slug: '2' }
    }],
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {}
  }
}
