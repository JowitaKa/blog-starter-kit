import {ReactNode} from 'react'

type Props = {
  children?: ReactNode
}

const ImpressumHeadlineSmall = ({children}: Props) => {
  return (
    <h3
      className="text-2xl md:text-2xl lg:text-2xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </h3>
  )
}

export default ImpressumHeadlineSmall
