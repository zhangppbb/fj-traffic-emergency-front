/*
 * @Author: zhangppbb
 * @Date: 2022-04-19 10:13:36
 * @LastEditTime: 2022-05-11 10:14:05
 * @LastEditors: your name
 * @Description:
 */
import _ from 'lodash'

/**
 * 获取经纬度
 * @param {*} coordinate 坐标信息
 * @returns
 */
export function getLNGAndLAT(coordinate) {
  // 经纬度
  const data = {
    lng: '',
    lat: ''
  }

  // 经纬度数据处理
  if (coordinate) {
    const [lng, lat] = coordinate.split(',')
    data.lng = (lng || '')
    data.lat = (lat || '')
  }

  return data
}

/**
 * 逗号转换
 * ，-> ,
 * @param {*} value
 */
export function transformComma(value) {
  let v = value
  if (_.isEmpty(value)) return v

  v = v.replace(/，/g, ',')

  return v
}

/**
 * 固定位置插入字符串
 * @param {*} source
 * @param {*} start
 * @param {*} newStr
 * @returns
 */
export function insertStr(source, start, newStr) {
  return source.slice(0, start) + newStr + source.slice(start)
}
