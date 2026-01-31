/*
 * @Author: zhangppbb
 * @Date: 2022-05-10 10:23:18
 * @LastEditTime: 2023-11-13 13:56:19
 * @LastEditors: your name
 * @Description:
 */

import _ from 'lodash'

// 标记
export const MARKER_TYPE = 'marker'

// 圆形
export const CIRCLE_TYPE = 'circle'

// 多边形
export const POLYGON_TYPE = 'polygon'

// 自定义标记
export const CUSTOM_MARKER_TYPE = 'custom_marker'

// 自定义多边形标记
export const CUSTOM_POLYGON_TYPE = 'custom_polygon'

// 样式
export const styleOptions = {
  strokeStyle: 'dashed',
  strokeColor: '#D81E06',
  fillColor: 'rgba(216,30,6,0.2)',
  strokeWeight: 2,
  fillOpacity: 0.2,
  strokeOpacity: 0.8
}

/**
 * 经纬度校验
 * @param {*} lngAndLat 经纬度
 */
export function isLngAndLat(lngAndLat) {
  // 空值判断
  if (_.isEmpty(lngAndLat)) {
    return false
  }

  // value
  const value = lngAndLat.split(',')

  // lng lat
  const [lng, lat] = value

  if (!_.isEmpty(lng) && !_.isEmpty(lat)) {
    return {
      lng, lat
    }
  }
}

/**
 * 获取经纬度
 * @param {*} coordinate
 * @returns
 */
export function getLngAndLat(coordinate) {
  // 空值判断
  if (_.isEmpty(coordinate)) {
    return false
  }

  // value
  const value = coordinate.split(',')

  // lng lat
  const [lng, lat] = value

  if (!_.isEmpty(lng) && !_.isEmpty(lat)) {
    return {
      lng, lat
    }
  }
}

/**
 * 获取地图边界
 * @param {*} map
 */
export function getBounds(map) {
  const bounds = map.getBounds() // 获取地图可视区域
  const sw = bounds.getSouthWest() // 获取西南角的经纬度(左下端点)
  const ne = bounds.getNorthEast() // 获取东北角的经纬度(右上端点)
  const wn = new BMapGL.Point(sw.lng, ne.lat) // 获取西北角的经纬度(左上端点)
  const es = new BMapGL.Point(ne.lng, sw.lat) // 获取东南角的经纬度(右下端点)

  const polygon = new BMapGL.Polygon([
    new BMapGL.Point(sw.lng, sw.lat), // 左下
    new BMapGL.Point(wn.lng, wn.lat), // 左上
    new BMapGL.Point(ne.lng, ne.lat), // 右上
    new BMapGL.Point(es.lng, es.lat)// 右下
  ], { strokeColor: 'blue', strokeWeight: 2, strokeOpacity: 0.5 })

  return polygon
}

/**
 * 判断经纬度是否在可视区
 * @param {*} map 地图
 * @param {*} x
 * @param {*} y
 * @returns
 */
export function IsInPolygon(map, x, y) {
  const polygon = getBounds(map)

  const point = new BMapGL.Point(x, y)
  if (BMapGLLib.GeoUtils.isPointInPolygon(point, polygon)) {
    console.log('在区域内')
    return true
  }
  return false
}
