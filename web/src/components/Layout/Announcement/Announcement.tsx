// Announcement:

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useSpring, config } from 'react-spring'

import Headroom from 'react-headroom'

// UI
import { Box } from '../../ui'

// Theme
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// Components
import Icon from '../../Icons'
import Portal from '../../Portal'
import Overlay from '../../Overlay'

// ___________________________________________________________________

type Props = {
  announcement?: string
  handleExit?: () => any
  isPortalOpen?: boolean
} & typeof defaultProps
const defaultProps = {
  to: '/'
}

const Message: React.FC<Props> = ({
  announcement,
  handleExit,
  isPortalOpen,
  to
}) => {
  return (
    <>
      <Link to={to}>
        {/* <Text as="p" fontSize={1} dangerouslySetInnerHTML={{ __html: announcement }} /> */}
        <p>
          <small>
            <Box as="span" color="primary">
              Hello there!
            </Box>{' '}
            Looking for eOn multi-surface disinfectant?
          </small>
        </p>
      </Link>
      <S.Exit onClick={handleExit} aria-label="close announcement">
        <Icon name="plus" color="black" />
      </S.Exit>
    </>
  )
}

const Announcement: React.FC<Props> = ({ announcement, to }) => {
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
    <>
      <Portal
        id="announcement-root"
        root="root"
        isOpen={isPortalOpen}
        handleExit={() => setPortalOpen(false)}
      >
        <S.Announcement
          className={`announcement ${
            !isPortalOpen ? 'announcement--open' : 'announcement--closed'
          }`}
          {...motionProps}
        >
          {!isPortalOpen && (
            <Message
              announcement={announcement}
              to={to}
              handleExit={togglePortal}
              isPortalOpen={isPortalOpen}
            />
          )}
        </S.Announcement>
      </Portal>
    </>
  )
}

export default Announcement

// ___________________________________________________________________

Announcement.defaultProps = defaultProps
