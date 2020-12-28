// Announcement:

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'
import Swiper from 'react-id-swiper'

// utils
import * as gtag from '../../../utils/gtag'

// UI
import { Box, Flex, Text } from '../../ui'

// Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// Components
import Icon from '../../Icons'
import CanMulti from '../../SVG/CanMulti'

// ___________________________________________________________________

type Props = {
  announcement?: string
  handleExit?: () => any
  isPortalOpen?: boolean
  mainRef?: React.RefObject<HTMLDivElement>
} & typeof defaultProps
const defaultProps = {
  to: '/'
}

const AnnouncementSlider: React.FC = ({ children }) => {
  const params = {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true
    }
  }
  return <Swiper {...params}>{children}</Swiper>
}

const Message: React.FC<Props> = ({
  announcement,
  handleExit,
  isPortalOpen,
  to
}) => {
  return (
    <AnnouncementSlider>
      <Link
        to={to}
        onClick={() => {
          gtag.event({
            category: 'Announcement bar',
            action: 'Click',
            label: 'Looking for multi-surface'
          })
        }}
      >
        <Text as="p" fontSize={1}>
          Looking for eOn multi-surface disinfectant?
        </Text>
        <Flex as="span" className="figure">
          <CanMulti />
        </Flex>
      </Link>
      <Link
        to={`/products/eon-continuous-spray-hand-sanitizer-80`}
        onClick={() => {
          gtag.event({
            category: 'Announcement bar',
            action: 'Click',
            label: 'Happy holidays'
          })
        }}
      >
        <Flex>
          <Text as="p" fontSize={1}>
            🎄 Happy Holidays from our family to yours! 🎄
          </Text>
        </Flex>
      </Link>
    </AnnouncementSlider>
  )
}

const Announcement: React.FC<Props> = ({ announcement, mainRef, to }) => {
  // Navigation toggle
  const [isPortalOpen, setPortalOpen] = useState(false)
  const togglePortal = () => setPortalOpen(!isPortalOpen)

  // Framer animation
  const motionProps = {
    initial: 'hidden',
    animate: 'visible',
    transition: { delay: 0.5, duration: 0.5 },
    variants: {
      hidden: { height: 0, opacity: 0 },
      visible: { height: theme.headerHeight, opacity: 1 }
    }
  }
  return (
    <S.Announcement
      className={`announcement ${
        !isPortalOpen ? 'announcement--open' : 'announcement--closed'
      }`}
      // {...motionProps}
    >
      {!isPortalOpen && (
        <Message
          announcement={announcement}
          to={to}
          handleExit={togglePortal}
          isPortalOpen={isPortalOpen}
          mainRef={mainRef}
        />
      )}
    </S.Announcement>
  )
}

export default Announcement

// ___________________________________________________________________

Announcement.defaultProps = defaultProps
