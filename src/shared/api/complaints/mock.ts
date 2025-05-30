export const mockCountry = {
  data: ['Россия', 'Франция']
}
export const mockCity = {
  data: ['Москва', 'Воронеж']
}
export const mockInfo = {
  data: {
    user_count: 100,
    order_count: 200,
    complaint_count: 300
  }
}

export const mockComplaintsData = {
  data: {
    data: [
      {
        id: 0,
        masterName: 'David',
        clientName: 'Maks',
        clientId: 0,
        clientPhone: '+79333333333',
        content: 'Уборка в комнате'
      }
    ],
    isLastPage: false
  }
}
export const mockBlockData = {
  data: {
    data: [
      {
        id: 0,
        name: 'Maks',
        userId: 0,
        phone: '+79333333333',
        content: 'Уборка в комнате',
        status: 0
      }
    ],
    isLastPage: false
  }
}
export const mockNumberData = {
  data: {
    data: [
      {
        id: 0,
        name: 'Maks',
        phone: '+79333333333',
        suspicion: 'текстsuspicionsuspicionsuspicionsuspicionsuspicionsuspicionsuspicionsuspicion'
      }
    ],
    isLastPage: false
  }
}
export const mockUnrestrict = {
  data: { result: true }
}
export const mockUnblock = {
  data: { result: true }
}
