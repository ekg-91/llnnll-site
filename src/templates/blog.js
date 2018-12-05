import React, {Component} from 'react'
import {Link} from 'gatsby'
import config from '../../data/config'
import Helmet from 'react-helmet'
import PostCard from '../components/PostCard'

const PaginationLink = props => {
  if (!props.test) {
    return (
      <Link to={props.url} className='button is-rounded'>
        {props.text}
      </Link>
    )
  } else {
    return (
      <span disabled className='button is-rounded'>
        {props.text}
      </span>
    )
  }
}

export default class BlogPage extends Component {
  render () {
    const {pageContext} = this.props
    const {group, index, first, last} = pageContext
    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
    const nextUrl = (index + 1).toString() + '/'

    const websiteSchemaOrgJSONLD = {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: config.siteUrl,
      name: config.siteTitle,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    }

    return (
      <div>
        <Helmet>
          <title>Blog | llnnll Records</title>
          {/* Schema.org tags */}
          <script type='application/ld+json'>
            {JSON.stringify(websiteSchemaOrgJSONLD)}
          </script>
        </Helmet>
        <section className='hero'>
          <div className='hero-body'>
            <div className='container'>
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <div className='section'>
                    <h1 className='title has-text-white'>
                                            Blog
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section'>
          <PostCard posts={group} />
          <section className='section'>
            <div className='buttons is-centered'>
              <PaginationLink test={first} url={previousUrl} text='Previous Page' />
              <PaginationLink test={last} url={nextUrl} text='Next Page' />
            </div>
          </section>
        </section>
      </div>
    )
  }
}
