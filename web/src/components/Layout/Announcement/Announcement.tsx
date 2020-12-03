// Announcement:

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'
import Swiper from 'react-id-swiper'

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
      delay: 4000,
      disableOnInteraction: true
    },
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
      <Link to={to}>
        <Flex>
          <Text as="p" className="t--small">
            <Box as="span" color="primary">
              Hello there!&nbsp;
            </Box>{' '}
            Looking for eOn multi-surface disinfectant?
          </Text>
          <Flex as="span" className="figure">
            <CanMulti />
          </Flex>
        </Flex>
      </Link>
      <Link to={to}>
        <Flex>
          <Text as="p" className="t--small">
            Happy Holidays from eOn!
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
