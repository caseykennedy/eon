// Faqs Page:

// ___________________________________________________________________

import React from 'react'

import { Box, Flex, Heading, Text } from '../ui'
import Button from '../ui/Button'

import Section from '../Section'

// Hooks
import useLegal from '../../hooks/useLegal'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// Components
import Accordion from '../Accordion'
import PageTitle from '../PageTitle'

// ___________________________________________________________________

const FaqsPage = () => {
  return (
    <>
      <PageTitle
        message="Frequently asked"
        image="pt-faqs-flat.png"
        altText="eOn hand holding a can"
      />
      <S.FaqsPage>
        <Section maxWidth={`1024px`}>
          <Box width={1} mb={[6, 7]}>
            <Box width={[1, 2 / 3]}>
              <Heading as="p" mb={0}>
                Some kind of intro here.
              </Heading>
            </Box>
          </Box>

          <Box
            mx={`auto`}
            maxWidth={theme.maxWidth}
            style={{ borderTop: `1px solid ${theme.colors.black}` }}
          >
            {data.map((faq, idx) => (
              <Accordion title={faq.question} active={false} key={idx}>
                <Box py={[4, 5]}>
                  <p>{faq.answer}</p>
                  {faq.note && <p>{faq.note}</p>}
                </Box>
              </Accordion>
            ))}
          </Box>
        </Section>
      </S.FaqsPage>
    </>
  )
}

export default FaqsPage

const data = [
  {
    question: 'How do I spray my eOn sanitizing mist? ',
    answer:
      'Twist to unlock the cap, after you hear a click, the circular opening should line up with the spray actuator. Next, place your finger on the top of the cap and locate the small groove near the back-end of the spray button. With your finger there—press down firmly to mist. Press and hold for a continuous spray. ',
    note: 'Sprays from any angle. Requires no shaking, uses no propellant.'
  },
  {
    question: 'How do I clean with eOn multi-surface?',
    answer:
      'Spray 6-8" from surfaces you come in everyday contact with. Treated surfaces must remain wet for 10 minutes. Reapply as necessary to keep wet for 10 minutes. Do not rinse. Allow surfaces to air dry.',
    // note: 'Learn more about eOn multi-surface → '
  },
  {
    question: 'How does eOn sanitizing mist (HOCl) work? ',
    answer:
      "eOn's Hypochlorous Acid multi-surface disinfectant breaks down microbe and virus cell walls, destroying or inactivating 99.9% of bacteria and viruses through protein degradation and inhibition of protein synthesis.",
    note: ''
  },
  {
    question: 'How does eOn hand sanitizer work? ',
    answer:
      "eOn's (80% Ethyl Alcohol) hand sanitizer solution works by denaturing germ proteins, inactivating and inhibiting microbial growth, ensuring you're clean and protected.",
    // note: 'Learn more about eOn hand sanitizer  →'
  },
  {
    question: 'How long does an eOn can last? ',
    answer:
      'Each 2oz. can of eOn sanitizing mist™ carries just over 60 seconds of continuous spray, sanitizing action.  ',
    note: ''
  },
  {
    question: 'How do I store my eOn sanitizing mist?',
    answer:
      'Store in a cool dark space. Do not expose to heat or store at temperatures above 120°f/50°c or in enclosed places that could overheat. Keep out of reach of children. ',
    note: ''
  },
  {
    question: 'Can I travel with eOn sanitizing mist? ',
    answer:
      'Yes! At 2 fluid ounces, our personal size multi-surface EPA registered disinfectant is TSA friendly. Spray it on your seat or meal tray, wait until dry. ',
    note:
      'Current TSA guidelines allow for up to 3.4oz of liquid. Find eOn multi-surface at your friendly airport Hudson News.'
  },
  {
    question: "My can won't spray correctly, help.",
    answer:
      'Make sure your cap has been twisted to unlock and that no part of your clear-actuator-cap component is damaged or missing. If misting action is reduced, it may be your can is empty. ',
    // note: 'Learn about Returns →'
  },
  {
    question:
      "Can I use eOn multi-surface disinfectant past it's expiration date? ",
    answer:
      "Our Hypochlorous Acid formula in electrolyzed water solution, shelf-stable up to 6 months. However, once it's electrical charge is diminished it returns to its original salt & vinegar concentration—losing its disinfecting capability. ",
    note: ''
  },
  {
    question: 'Can I spray eOn sanitizing mist on my body?',
    answer:
      'Our FDA registered, 80% Ethyl Alcohol formula is laboratory tested and formulated to be tough on germs while gentle on skin, never sticky or messy. Frequent use will not dry skin. ',
    note:
      "Though Hypochlorous Acid is produced by the human body and is safe on skin, our EPA registered, 500ppm disinfectant is designed for hard, non porous surfaces and not recommended for bodily use due to it's higher concentration."
  }
]
