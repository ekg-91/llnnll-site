import React from 'react'
import {Link, graphql, StaticQuery} from 'gatsby'
import SearchBox from '../SearchBox'

const NavBar = () => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <strong>Love in the llnnll</strong>
          </Link>
          <button className='button navbar-burger' data-target='navMenu'>
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className='navbar-menu' id='navMenu'>

          <div className='navbar-end'>
            <SearchBox searchIndex={data.siteSearchIndex.index} />
            <Link className='navbar-item' to='/about'>
                            Artists
            </Link>
            <Link className='navbar-item' to='/pricing'>
                            Services
            </Link>
            <Link className='navbar-item' to='/blog'>
                            Blog
            </Link>
            <Link className='navbar-item' to='/gallery'>
                            Gallery
            </Link>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <Link
                    className='button is-outlined has-text-white'
                    to='/contact'>
                                        Contact Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
