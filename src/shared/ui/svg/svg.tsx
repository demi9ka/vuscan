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

export const CrossIcon = (props: WrapperProps) => {
  return (
    <SVGWrapper {...props}>
      <img style={{ width: '100%', height: '100%' }} src='/cross.svg' />
    </SVGWrapper>
  )
}
