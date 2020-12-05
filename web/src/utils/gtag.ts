type EventProps = {
  action: string
  category: string
  label: string
  value?: number
}

const isBrowser = typeof window !== 'undefined'

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: EventProps) => {
  isBrowser &&
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: `${value}`
    })
}
