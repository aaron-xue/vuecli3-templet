module.exports = {
  presets: [
    '@vue/app'
  ],
  sourceType: 'unambiguous' // 关键是这一句解决import 和 module.exports 共存
}
