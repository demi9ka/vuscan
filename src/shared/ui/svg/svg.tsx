type WrapperProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const svgStyle = { width: '100%', height: '100%', PointerEvent: 'none' }
const svgWrapperStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center' }

const SVGWrapper = (props: WrapperProps) => {
  return <div style={svgWrapperStyle} {...props} />
}

export const CrossIcon = (props: WrapperProps) => {
  return (
    <SVGWrapper {...props}>
      <img style={svgStyle} src='/cross.svg' alt='cross' />
    </SVGWrapper>
  )
}
export const ArrowDownIcon = (props: WrapperProps) => {
  return (
    <SVGWrapper {...props}>
      <img style={svgStyle} src='/arrow-down.svg' alt='arrow-down' />
    </SVGWrapper>
  )
}
export const MenuBurgerIcon = (props: WrapperProps) => {
  return (
    <SVGWrapper {...props}>
      <img style={svgStyle} src='/menu-burger.svg' alt='menu-burger' />
    </SVGWrapper>
  )
}
export const LockIcon = (props: WrapperProps) => {
  return (
    <SVGWrapper {...props}>
      <img style={svgStyle} src='/lock.svg' alt='lock' />
    </SVGWrapper>
  )
}
export const BackIcon = (props: WrapperProps) => {
  return (
    <SVGWrapper {...props}>
      <img style={svgStyle} src='/back.svg' alt='back' />
    </SVGWrapper>
  )
}
