/**
 *@description: 使用元组生成联合类型，校验扑克牌
 *@author: w4ng3
 *@date: 2024-09-09
 */
declare const colors: readonly ['♠', '♥', '♣', '♦']
declare const values: readonly ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
type Values = typeof values[number]
type Colors = typeof colors[number]
declare function createCard(value: Values, color: Colors): {
  value: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A'
  color: '♠' | '♥' | '♣' | '♦'
}
