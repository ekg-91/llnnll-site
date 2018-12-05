import React from 'react'
import PropTypes from 'prop-types'
import GalleryPageTemplate from '../../components/GalleryPageTemplate'

const GalleryPagePreview = ({ entry, getAsset }) => {
  return (
    <GalleryPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      gallery={{
        heading: entry.getIn(['data', 'gallery', 'heading']),
        description: entry.getIn(['data', 'gallery', 'description'])
      }}
    />
  )
}

GalleryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default GalleryPagePreview
