import React from 'react'
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import PropTypes from 'prop-types'
import Button from '@atlaskit/button';

import styles from './ajonp-gcp-cloud-build.css'

class AjonpGcpCloudBuild extends React.Component {
  static propTypes = {
    clientId: PropTypes.string,
    projectId: PropTypes.string,
    scope: PropTypes.string
  }

  state = {
    response: null,
    error: null,
    triggers: [],
    accessToken: null
  }

  constructor(props){
    super(props);
    console.log(props)
  }
  
  componentDidMount() {
    const response = JSON.parse(localStorage.getItem('googleAuth'));
    if(response){
      this.setState({
        response,
        accessToken: response.accessToken
      });
    }
  }

  responseGoogle = async(response) => {    
    localStorage.setItem('googleAuth', JSON.stringify(response))
    this.setState({
      response,
      accessToken: response.accessToken
    });
  }
  responseGoogleError = async(response) => {
    console.log(response);
  }
  logout = () => {
    localStorage.removeItem('googleAuth');
    initialState();
  }
  initialState = () => {
    this.setState({
      response: null,
      error: null,
      triggers: [],
      accessToken: null
    })
  }

  apiTriggersList = async() => {
    const response = await fetch(`https://cloudbuild.googleapis.com/v1/projects/${this.props.projectId}/triggers`, {
      method: 'get',
      headers:{
        'authorization': `Bearer ${this.state.accessToken}`
      }
    });
    const {triggers} = await response.json();
    this.setState({triggers});
  }

  runTrigger = async(trigger, e) => {
    console.log(trigger)
    const response = await fetch(`https://cloudbuild.googleapis.com/v1/projects/${this.props.projectId}/triggers/${trigger.id}:run`, {
      method: 'post',
      headers:{
        'authorization': `Bearer ${this.state.accessToken}`
      },
      body: JSON.stringify({
        branchName: trigger.github.push.branch.replace(/[^\w\s]/gi, '')
      })
    });
    console.log(response);
  }

  render() {
    const {imageUrl, error} = this.state
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Google Cloud Build</h2>
        </header>
        <div className={styles.content}>
          {this.state.response && 
            <GoogleLogout
              clientId={this.props.clientId}
              buttonText="Logout"
              onLogoutSuccess={this.logout}
            />
          }
          {this.state.response && this.state.response.w3.U3}
          {!this.state.response &&
            <GoogleLogin
              clientId={this.props.clientId}
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogleError}
              scope={this.props.scope}
              cookiePolicy={'single_host_origin'}
            />
          }
          {this.state.response && this.state.triggers.length === 0 &&
            <Button onClick={this.apiTriggersList}>Load Triggers</Button>
          }
          {this.state.triggers.map(trigger => (
            <div key={trigger.description}>
              {trigger.description}
              <Button onClick={(e) => this.runTrigger(trigger, e)}>Run</Button>
            </div>
          ))}
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
