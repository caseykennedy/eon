// Layout:
// TODO: implement withLayout HOC

// ___________________________________________________________________

import React, { useRef } from 'react'
import { ThemeProvider } from 'styled-components'
import { ParallaxProvider } from 'react-scroll-parallax'

import ContextProvider from '../../provider/ContextProvider'

// Components
import Announcement from './Announcement'
import Header from '../Header'
import Footer from '../Footer'

// Styles + Theme
import theme from '../../gatsby-plugin-theme-ui'
import GlobalStyles from '../../styles/global'
import * as S from './styles.scss'
import 'swiper/css/swiper.css'

// ___________________________________________________________________

type LayoutProps = {
  children: React.ReactNode
  location?: {
    pathname: string
  }
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)

  // const { pathname } = location
  // const isHome = pathname === '/'

  // eslint-disable-next-line no-console
  console.log(`%c eOn Mist `, `background: #FFFFFF; color: #000000`)
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ParallaxProvider>
          <S.Wrapper>
            <Announcement
              announcement="Hello there! Looking for eOn multi-surface disinfectant?"
              to="/eon"
            />
            <Header mainRef={mainRef} />
            <S.Main ref={mainRef}>{children}</S.Main>
            <Footer />
          </S.Wrapper>
        </ParallaxProvider>
      </ThemeProvider>
    </ContextProvider>
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
