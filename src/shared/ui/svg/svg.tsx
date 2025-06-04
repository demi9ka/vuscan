type WrapperProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const svgStyle = { width: '100%', height: '100%', PointerEvent: 'none' }
const svgWrapperStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center' }

const SVGWrapper = (props: WrapperProps) => {
  return <div style={svgWrapperStyle} {...props} />
}

export const CrossIcon = (props: WrapperProps) => {
  return (
    <SVGWrapper {...props}>
      <img style={svgStyle} src='/cross.svg' />
    </SVGWrapper>
  )
}
export const ArrowDownIcon = (props: WrapperProps) => {
  return (
    <SVGWrapper {...props}>
      <img style={svgStyle} src='/arrow-down.svg' />
    </SVGWrapper>
  )
}
export const MenuBurgerIcon = (props: WrapperProps) => {
  return (
    <SVGWrapper {...props}>
      <img style={svgStyle} src='/menu-burger.svg' />
    </SVGWrapper>
  )
}
export const LockIcon = (props: WrapperProps) => {
  return (
    <SVGWrapper {...props}>
      <img style={svgStyle} src='/lock.svg' />
    </SVGWrapper>
  )
}
