export default (): string => {
  // Базовые пути
  const paths = ['/api', '/about', '/user', '/data', '/search', '/auth', '/profile']

  // Случайные параметры
  const params: Record<string, string[]> = {
    name: ['john', 'david', 'alice', 'bob', 'mary'],
    id: ['1', '2', '3', '4', '5'],
    role: ['admin', 'user', 'guest', 'moderator'],
    query: ['test', 'demo', 'prod', 'dev'],
    page: ['home', 'settings', 'dashboard']
  }

  // Выбираем случайный путь
  const randomPath = paths[Math.floor(Math.random() * paths.length)]

  // Добавляем случайный под-путь в 30% случаев
  let fullPath = randomPath
  if (Math.random() < 0.3) {
    const subPaths = ['/ssh', '/info', '/details', '/stats']
    fullPath += subPaths[Math.floor(Math.random() * subPaths.length)]
  }

  // Добавляем параметры в 70% случаев
  if (Math.random() < 0.7) {
    const queryParams = []
    const paramCount = Math.floor(Math.random() * 3) + 1 // 1-3 параметра

    const availableParams = Object.keys(params)
    const usedParams: string[] = []

    for (let i = 0; i < paramCount; i++) {
      let paramName: string
      do {
        paramName = availableParams[Math.floor(Math.random() * availableParams.length)]
      } while (usedParams.includes(paramName))

      usedParams.push(paramName)
      const value = params[paramName][Math.floor(Math.random() * params[paramName].length)]
      queryParams.push(`${paramName}=${value}`)
    }

    fullPath += `?${queryParams.join('&')}`
  }

  return fullPath
}
