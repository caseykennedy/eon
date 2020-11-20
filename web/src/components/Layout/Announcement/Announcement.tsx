// Announcement:

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'

// UI
import { Box, Flex } from '../../ui'

// Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// Components
import Icon from '../../Icons'
import CanMulti from '../../CanMulti'

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
        <Flex>
          <p>
            <small>
              <Box as="span" color="primary">
                Hello there!
              </Box>{' '}
              Looking for eOn multi-surface disinfectant?
            </small>
          </p>
          <Flex as="span" className="figure">
            <CanMulti />
          </Flex>
        </Flex>
      </Link>
      {/* <S.Exit onClick={handleExit} aria-label="close announcement">
        <Icon name="plus" color="black" />
      </S.Exit> */}
    </>
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
