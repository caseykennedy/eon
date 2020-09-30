// Announcement:

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useSpring, config } from 'react-spring'

import Headroom from 'react-headroom'

// UI
import { Text } from '../../ui'

// Theme
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// Components
import Icon from '../../Icons'
import Portal from '../../Portal'
import Overlay from '../../Overlay'

// ___________________________________________________________________

type Props = {
  handleExit: () => any
  isPortalOpen: boolean
} & typeof defaultProps
const defaultProps = {
  announcement: 'Announcement bar',
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
        <Text dangerouslySetInnerHTML={{ __html: announcement }} />
      </Link>
      <S.Exit onClick={handleExit}>
        <Icon name="plus" color="black" />
      </S.Exit>
    </>
  )
}

const Announcement: React.FC<Props> = ({ announcement, to }) => {
  // Navigation toggle
  const [isPortalOpen, setPortalOpen] = useState(false)
  const togglePortal = () => setPortalOpen(!isPortalOpen)
  const variants = {
    hidden: { height: 0 },
    visible: { height: theme.headerHeight },
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
          initial="hidden"
          animate="visible"
          variants={variants}
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
