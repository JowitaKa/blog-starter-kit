import {ReactNode} from 'react'

type Props = {
  children?: ReactNode
}

const ImpressumHeadlineBig = ({children}: Props) => {
  return (
    <h3
      className="text-3xl md:text-3xl lg:text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </h3>
  )
}

export default ImpressumHeadlineBig
