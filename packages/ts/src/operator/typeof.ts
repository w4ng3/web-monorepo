/**
 *@description: 使用元组生成联合类型，校验扑克牌
 *@author: w4ng3
 *@date: 2024-09-09
 */

// 使用 const 收窄类型

const colors = ['♠', '♥', '♣', '♦'] as const
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'] as const

type Values = typeof values[number]
type Colors = typeof colors[number]

function createCard(value: Values, color: Colors) {
  return {
    value,
    color,
  }
}

createCard('8', '♦')


