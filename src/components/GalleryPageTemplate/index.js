import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const GalleryPageTemplate = ({
	title,
	meta_title,
	meta_description,
	gallery,
}) => (
	<div>
		<Helmet>
			<title>{meta_title}</title>
			<meta name='description' content={meta_description} />
		</Helmet>
		<section className='hero'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title has-text-white'>
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <h2 className='has-text-weight-semibold is-size-2'>
                  {gallery ? gallery.heading : ''}
                </h2>
                <p className='is-size-5'>{gallery ? gallery.description : ''}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
	</div>
)

GalleryPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  gallery: PropTypes.shape({
    description: PropTypes.string,
    heading: PropTypes.string,
  })
}

export default GalleryPageTemplate
