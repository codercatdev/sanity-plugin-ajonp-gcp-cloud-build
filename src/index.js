import React from 'react'
import PropTypes from 'prop-types'

import styles from './ajonp-gcp-cloud-build.css'

class AjonpGcpCloudBuild extends React.Component {
  static propTypes = {
    imageWidth: PropTypes.number
  }

  static defaultProps = {
    imageWidth: 600
  }

  state = {
    imageUrl: null,
    error: null
  }
  getCat = () => {
    request({url: 'https://api.thecatapi.com/v1/images/search'})
      .then(response => {
        const imageUrl = response.body[0].url
        this.setState({imageUrl})
      })
      .catch(error => this.setState({error}))
  }

  componentDidMount() {
  }

  render() {
    const {imageUrl, error} = this.state
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Google Cloud Build</h2>
        </header>
        <div className={styles.content}>

        </div>
        <div className={styles.footer}>
          </div>
      </div>
    )
  }
}

export default {
  name: 'ajonp-gcp-cloud-build',
  component: AjonpGcpCloudBuild
}
