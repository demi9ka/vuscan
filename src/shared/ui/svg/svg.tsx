type WrapperProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const SVGWrapper = (props: WrapperProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      {...props}
    />
  )
}

const svgStyle = { width: '100%', height: '100%' }

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
