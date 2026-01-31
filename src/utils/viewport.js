
/**
 * px 转换 vw
 * @param {*} px
 * @returns 
 */
export const px2 = (px) => {
  const innerWidth = window.innerWidth
  return (px * innerWidth) / 1920
}
