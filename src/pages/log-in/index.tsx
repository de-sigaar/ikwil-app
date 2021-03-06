import * as React from 'react'
import 'firebaseui/dist/firebaseui.css'
import { fireUI, fireStore, fireMessaging } from 'src/utils/firebase'
import configFirebaseUI from 'src/config/firebaseUI'
import { connect } from 'react-redux'
import { RootState, store } from 'src/redux/store'
import { Header, BackgroundLogo } from 'src/components'
import Logo from 'src/assets/general/logo-stichting-ik-wil.svg'
import { StyledLogo, StyledTitle } from './styles'
import { Props, OwnProps, StateProps } from './types'
import { askForInstall } from 'src/redux/app'

const LogIn: React.FC<Props> = (props: Props) => {
  const askForPermission = async (uid: string): Promise<void> => {
    if (fireMessaging)
      await fireMessaging
        .requestPermission()
        .then(async () => {
          if (fireMessaging) {
            const token = await fireMessaging.getToken()
            fireStore.collection('users').doc(uid).update({ pushToken: token })
          }
        })
        .catch(console.error) // eslint-disable-line no-console
  }

  React.useEffect(() => {
    if (props.isLoggedIn) props.history.push('/')

    fireUI.start('#firebase-auth-container', {
      ...configFirebaseUI,
      callbacks: {
        signInSuccessWithAuthResult: (authResult): boolean => {
          askForPermission(authResult.user.uid)
          store.dispatch(askForInstall())
          fireStore
            .collection('users')
            .doc(authResult.user.uid)
            .update({ displayName: authResult.user.displayName })
          return false
        },
      },
    })
  }, [props.isLoggedIn, props.history])

  return (
    <>
      <Header title="Inloggen" />
      <BackgroundLogo />

      <StyledLogo>
        <img src={Logo} alt="Ik_wil_logo" />
      </StyledLogo>
      <StyledTitle>Welkom bij Stichting Ik Wil</StyledTitle>
      <div id="firebase-auth-container"></div>
    </>
  )
}

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
  return {
    ...ownProps,
    isLoggedIn: !state.firebase.auth.isEmpty,
  }
}

export default connect(mapStateToProps)(LogIn)
