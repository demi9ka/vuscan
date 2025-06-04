export const generateRandomLinks = (count: number): string[] => {
  const links: string[] = []
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  for (let i = 0; i < count; i++) {
    const length = Math.floor(Math.random() * 11) + 10 // Длина от 10 до 20 символов
    let randomStr = ''
    for (let j = 0; j < length; j++) {
      randomStr += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    links.push(`http://${randomStr}.com`)
  }
  return links
}
