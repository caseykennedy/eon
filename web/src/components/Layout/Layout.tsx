// Layout:
// TODO: implement withLayout HOC

// ___________________________________________________________________

import React, { useRef } from 'react'

// Providers
import { ThemeProvider } from 'styled-components'
import ContextProvider from '../../provider/ContextProvider'
import { CookiesProvider } from 'react-cookie'

// Components
import Header from '../Header'
import Footer from '../Footer'
import Announcement from './Announcement'
import NewCustomerModal from '../NewCustomerModal'

// Styles + Theme
import theme from '../../gatsby-plugin-theme-ui'
import GlobalStyles from '../../styles/global'
import * as S from './styles.scss'
import 'swiper/css/swiper.css'
import 'react-responsive-modal/styles.css'

// ___________________________________________________________________

type LayoutProps = {
  children: any
  location?: {
    pathname: string
  }
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line no-console
  console.log(
    `%c eOn Mist — built by caseyKennedy.me `,
    `background: #FFFFFF; color: #000000`
  )
  return (
    <>
      <CookiesProvider>
        <ContextProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <S.Wrapper id="main-root">
              <Header mainRef={mainRef} />
              <Announcement to={`/eon-multi-surface`} />
              <S.Main ref={mainRef}>{children}</S.Main>
              <Footer />
            </S.Wrapper>
            <NewCustomerModal />
          </ThemeProvider>
        </ContextProvider>
      </CookiesProvider>
    </>
  )
}

export default Layout

// ___________________________________________________________________

// export const withLayout = <P extends object>(
//   WrappedComponent: React.ComponentType<P>
// ) =>
//   class WithLayout extends React.Component<P & LayoutProps> {
//     render() {
//       return (
//         <Layout location={this.props.location}>
//           <WrappedComponent {...this.props} />
//         </Layout>
//       )
//     }
//   }
