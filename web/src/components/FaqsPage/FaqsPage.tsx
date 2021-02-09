// Faqs Page:

// ___________________________________________________________________

import React from 'react'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../ui'

// Components
import Section from '../Section'
import Accordion from '../Accordion'
import PageTitle from '../PageTitle'

// ___________________________________________________________________

const FaqsPage = () => {
  return (
    <>
      <PageTitle
        message="FAQs"
        image="pt-faqs-flat.png"
        altText="eOn hand holding a can"
      />
      <S.FaqsPage>
        {/* <Section maxWidth={`1024px`}>
          <Heading as="h3" mb={0}>FAQs</Heading>
        </Section> */}
        <Section maxWidth={`1024px`}>
          <Box className="faqs">
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

// ___________________________________________________________________

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
      'Spray 6-8" from surfaces you come in everyday contact with. Treated surfaces must remain wet for 10 minutes. Reapply as necessary to keep wet for 10 minutes. Do not rinse. Allow surfaces to air dry.'
    // note: 'Learn more about eOn multi-surface → '
  },
  {
    question: 'How does eOn sanitizing mist (HOCl) work? ',
    answer:
      "eOn's Hypochlorous Acid multi-surface disinfectant breaks down microbe and virus cell walls, destroying or inactivating 99.9% of bacteria and viruses through protein degradation and inhibition of protein synthesis.",
    note: ''
  },
  {
    question: 'Does eOn sanitizing mist have an odor? ',
    answer:
      'eOn multi-surface disinfectant is an odorless substance, though some natural variation in concentration may lead a light, harmless scent of chlorine that disappears after drying. ',
    note:
      'eOn hand sanitizer is 80%, 190 proof ethyl alcohol and carries the sharp, fresh scent of alcohol.'
  },
  {
    question: 'How does eOn hand sanitizer work? ',
    answer:
      "eOn's (80% Ethyl Alcohol) hand sanitizer solution works by denaturing germ proteins, inactivating and inhibiting microbial growth, ensuring you're clean and protected."
    // note: 'Learn more about eOn hand sanitizer  →'
  },
  {
    question: 'How long does an eOn can last? ',
    answer:
      'Each 2oz. can of eOn sanitizing mist™ carries just over 65 seconds of continuous spray, which roughly translates to over 60 quality sprays per can. ',
    note: ''
  },
  {
    question: 'How do I store my eOn sanitizing mist?',
    answer:
      'Store in a cool dark space. Do not expose to heat or store at temperatures above 120°f/50°c or in enclosed places that could overheat. Keep out of reach of children.',
    note: ''
  },
  {
    question: 'Can I travel with eOn sanitizing mist? ',
    answer:
      'Yes! At 2 fluid ounces, our personal size DOT 2Q aluminum cans are fully TSA compliant. Spray it on your seat or tray table, wait until dry. ',
    note:
      'Current TSA guidelines allow for up to 3.4oz of liquid. At the airport? Find eOn multi-surface at your terminal’s Hudson News retailer. '
  },
  {
    question: "My can won't spray correctly, help.",
    answer:
      'Make sure your cap has been fully twisted to unlock and that no part of your clear-actuator-cap component is damaged or missing. If misting action is reduced or not present, it may be your can is empty or actuator is faulty. '
    // note: 'Learn about Returns →'
  }
]
