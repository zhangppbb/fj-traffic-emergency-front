// import NP from 'number-precision';

/**
 * 使用 number-precision 精准计算比例，保留两位小数
 * @param {number} num - 分子
 * @param {number} total - 分母
 * @param {boolean} [asPercent=true] - 是否输出百分比
 * @returns {string} - 比例字符串，如 "0.25" 或 "25.00%"
 */
export function calcRatioNP(num, total, asPercent = true) {
  const part = Number(num || 0);

  if (!part) return '0.00';

  let ratio = part / total;

  if (asPercent) {
    ratio = ratio * 100;
  }

  // 保留两位小数，转字符串
  return ratio.toFixed(2);
}

// 将数值转换成万为单位，保留两位小数
export function toWan(num) {
  return (num / 10000).toFixed(2);
}

// 如果数字大于10000，转换成万为单位，保留两位小数，否则原样输出
export function formatNum(num) {
  return num >= 10000 ? toWan(num).toString() + '万' : num.toString() + '个';
}
