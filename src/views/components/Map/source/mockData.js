// src/components/source/mockData.js
// 导入所有图标（保持原有）
import ql_green from '../imgs/ql-green.png'
import ql_red from '../imgs/ql-red.png'
import ql_yellow from '../imgs/ql-yellow.png'

import sd_green from '../imgs/sd-green.png'
import sd_red from '../imgs/sd-red.png'
import sd_yellow from '../imgs/sd-yellow.png'

import bp_green from '../imgs/bp-green.png'
import bp_red from '../imgs/bp-red.png'
import bp_yellow from '../imgs/bp-yellow.png'

import lj_green from '../imgs/lj-green.png'
import lj_red from '../imgs/lj-red.png'
import lj_yellow from '../imgs/lj-yellow.png'

// 福州市范围随机坐标（保持原有全部坐标，数量不变）
const fzCoords = [
  [119.542590,26.105454], [119.3872, 26.1567], [119.352175,25.1567],
  [119.352175,25.932955], [119.2531, 26.2145], [119.0489, 25.9327], [119.4215, 25.7683],
  [119.1876, 26.0954], [118.9234, 26.2789], [119.3567, 25.8321],
  [119.0765, 26.1349], [119.4782, 25.9876], [119.2139, 25.6542],
  [119.3218, 26.0457], [118.9976, 25.8763], [119.1543, 26.2348],
  [119.4021, 25.7985], [119.0347, 26.1892], [119.2876, 25.9123],
  [119.1098, 26.2567], [119.3765, 25.8432], [118.9543, 26.0789],
  [119.2456, 25.7123], [119.4567, 26.1234], [119.0876, 25.9543],
  [119.3123, 26.2456], [118.9345, 25.8217], [119.1789, 26.0345],
  [119.4234, 25.6987], [119.0654, 26.1987], [119.2987, 25.8654],
  [119.3567, 26.1789], [119.1234, 25.7890], [118.9876, 26.0987],
  [119.4765, 25.9345], [119.2345, 26.2198], [119.0987, 25.6789],
  [119.3876, 25.8901], [119.1543, 26.1456], [118.9654, 25.7432],
  [119.4432, 26.0543], [119.0234, 25.9876], [119.2765, 26.2345],
  [119.3123, 25.8765], [119.1876, 26.1987], [118.9765, 25.7123],
  [119.4654, 26.0876], [119.0543, 26.2567], [119.2432, 25.8976]
];

// 模拟监控图片地址（保持原有）
const mockVideoImgs = [
  'https://img0.baidu.com/it/u=3727887930,1769802311&fm=253&fmt=auto&app=138&f=JPEG?w=687&h=500',
];

const mockVideoTitles = ['福州高速K108监控', '福州高速K112监控', '福州高速K118监控'];
const mockVideoTimes = ['2026-01-21 10:23', '2026-01-21 10:15', '2026-01-21 10:08'];

// 完整的点位数据（保持features数组长度不变，仅删除每个点位的冗余字段）
const allMarkerData = {
  "features": [
    // ========== 第一类：桥梁（bridge） ==========
    // 1. 桥梁 - 三级预警（绿色）- 正常状态（原第1个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[0] },
      "properties": {
        // 核心业务字段（弹窗展示）
        "name": "琅岐闽江大桥",
        "facilityCode": "G228线 K379+382 琅岐闽江大桥",
        "maintenanceUnit": "琅岐管委会",
        "maintenanceWork": "福州市琅岐路桥建设有限公司",
        "basicInfo": "大桥西起104国道（新G104线）K22307+300，东至琅岐环岛路口，线路全长8.437千米",
        "desc": "坡面出现新裂缝或原有裂缝发展",
        // 地图渲染必需字段
        "type": "bridge",
        "subType": "beamBridge",
        "alertLevel": "三级预警",
        "alertColor": "#00CC00",
        "size": 20,
        "icon": ql_green,
        // 监控相关字段
        "videoImgs": mockVideoImgs.slice(0),
        "videoTitles": mockVideoTitles.slice(0,1),
        "videoTimes": mockVideoTimes.slice(0,1),
      }
    },
    // 2. 桥梁 - 一级预警（红色）- 护栏坍塌（原第2个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[1] },
      "properties": {
        "name": "福州闽江大桥",
        "facilityCode": "G316线 K128+560 福州闽江大桥",
        "maintenanceUnit": "福州市市政工程中心",
        "maintenanceWork": "福州市桥梁养护有限公司",
        "basicInfo": "大桥全长500米，双向4车道，连接鼓楼区与台江区",
        "desc": "闽江大桥右侧护栏坍塌，禁止大型车辆通行",
        "type": "bridge",
        "subType": "beamBridge",
        "alertLevel": "一级预警",
        "alertColor": "#FF0000",
        "size": 20,
        "icon": ql_red,
        "videoImgs": mockVideoImgs,
        "videoTitles": mockVideoTitles,
        "videoTimes": mockVideoTimes
      }
    },
    // 3. 桥梁 - 二级预警（黄色）- 桥面破损（原第3个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[2] },
      "properties": {
        "name": "福州闽江大桥",
        "facilityCode": "G316线 K128+580 福州闽江大桥",
        "maintenanceUnit": "福州市市政工程中心",
        "maintenanceWork": "福州市桥梁养护有限公司",
        "basicInfo": "大桥全长500米，双向4车道，连接鼓楼区与台江区",
        "desc": "闽江大桥桥面局部破损，通行效率下降30%",
        "type": "bridge",
        "subType": "beamBridge",
        "alertLevel": "二级预警",
        "alertColor": "#FFCC00",
        "size": 20,
        "icon": ql_yellow,
        "videoImgs": mockVideoImgs.slice(0),
        "videoTitles": mockVideoTitles.slice(0),
        "videoTimes": mockVideoTimes.slice(0)
      }
    },
    // 4. 桥梁（拱桥）- 三级预警（绿色）（原第4个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[3]},
      "properties": {
        "name": "福州解放大桥",
        "facilityCode": "江滨路 K0+800 福州解放大桥",
        "maintenanceUnit": "福州市市政工程中心",
        "maintenanceWork": "福州市桥梁养护有限公司",
        "basicInfo": "解放大桥全长426米，为钢结构拱桥，连接台江与仓山",
        "desc": "解放大桥结构稳定，通行状态良好",
        "type": "bridge",
        "subType": "archBridge",
        "alertLevel": "三级预警",
        "alertColor": "#00CC00",
        "size": 18,
        "icon": ql_green,
        "videoImgs": mockVideoImgs.slice(0),
        "videoTitles": mockVideoTitles.slice(0),
        "videoTimes": mockVideoTimes.slice(0)
      }
    },
    // 5. 桥梁（拱桥）- 一级预警（红色）- 拱肋裂缝（原第5个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[4] },
      "properties": {
        "name": "福州解放大桥",
        "facilityCode": "江滨路 K0+800 福州解放大桥",
        "maintenanceUnit": "福州市市政工程中心",
        "maintenanceWork": "福州市桥梁养护有限公司",
        "basicInfo": "解放大桥全长426米，为钢结构拱桥，连接台江与仓山",
        "desc": "解放大桥拱肋出现裂缝，道路全面封闭",
        "type": "bridge",
        "subType": "archBridge",
        "alertLevel": "一级预警",
        "alertColor": "#FF0000",
        "size": 18,
        "icon": ql_red,
        "videoImgs": mockVideoImgs,
        "videoTitles": mockVideoTitles,
        "videoTimes": mockVideoTimes
      }
    },
    // 6. 桥梁（拱桥）- 二级预警（黄色）- 伸缩缝故障（原第6个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[5] },
      "properties": {
        "name": "福州解放大桥",
        "facilityCode": "江滨路 K0+800 福州解放大桥",
        "maintenanceUnit": "福州市市政工程中心",
        "maintenanceWork": "福州市桥梁养护有限公司",
        "basicInfo": "解放大桥全长426米，为钢结构拱桥，连接台江与仓山",
        "desc": "解放大桥伸缩缝故障，通行效率下降50%",
        "type": "bridge",
        "subType": "archBridge",
        "alertLevel": "二级预警",
        "alertColor": "#FFCC00",
        "size": 18,
        "icon": ql_yellow,
        "videoImgs": mockVideoImgs.slice(0),
        "videoTitles": mockVideoTitles.slice(0),
        "videoTimes": mockVideoTimes.slice(0)
      }
    },
    // ========== 第二类：边坡（slope） ==========
    // 7. 路基边坡 - 三级预警（绿色）（原第7个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[6] },
      "properties": {
        "name": "沈海高速K188路基边坡",
        "facilityCode": "G15沈海高速 K188+200 右侧边坡",
        "maintenanceUnit": "福建省高速公路养护中心",
        "maintenanceWork": "福建高速养护工程有限公司",
        "basicInfo": "边坡高度8米，采用锚杆框架梁防护，坡比1:1.5",
        "desc": "路基边坡稳定，无滑塌风险",
        "type": "slope",
        "subType": "subgradeSlope",
        "alertLevel": "三级预警",
        "alertColor": "#00CC00",
        "size": 16,
        "icon": bp_green,
        "videoImgs": mockVideoImgs.slice(0),
        "videoTitles": mockVideoTitles.slice(0),
        "videoTimes": mockVideoTimes.slice(0)
      }
    },
    // 8. 路基边坡 - 一级预警（红色）- 滑坡（原第8个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[7] },
      "properties": {
        "name": "沈海高速K188路基边坡",
        "facilityCode": "G15沈海高速 K188+200 右侧边坡",
        "maintenanceUnit": "福建省高速公路养护中心",
        "maintenanceWork": "福建高速养护工程有限公司",
        "basicInfo": "边坡高度8米，采用锚杆框架梁防护，坡比1:1.5",
        "desc": "路基边坡滑坡，掩埋半幅路面",
        "type": "slope",
        "subType": "subgradeSlope",
        "alertLevel": "一级预警",
        "alertColor": "#FF0000",
        "size": 16,
        "icon": bp_red,
        "videoImgs": mockVideoImgs,
        "videoTitles": mockVideoTitles,
        "videoTimes": mockVideoTimes
      }
    },
    // 9. 路基边坡 - 二级预警（黄色）- 裂缝（原第9个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[8] },
      "properties": {
        "name": "沈海高速K188路基边坡",
        "facilityCode": "G15沈海高速 K188+200 右侧边坡",
        "maintenanceUnit": "福建省高速公路养护中心",
        "maintenanceWork": "福建高速养护工程有限公司",
        "basicInfo": "边坡高度8米，采用锚杆框架梁防护，坡比1:1.5",
        "desc": "路基边坡出现裂缝，有滑塌风险",
        "type": "slope",
        "subType": "subgradeSlope",
        "alertLevel": "二级预警",
        "alertColor": "#FFCC00",
        "size": 16,
        "icon": bp_yellow,
        "videoImgs": mockVideoImgs.slice(0),
        "videoTitles": mockVideoTitles.slice(0),
        "videoTimes": mockVideoTimes.slice(0)
      }
    },
    // 10. 隧道洞口边坡 - 三级预警（绿色）（原第10个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[9] },
      "properties": {
        "name": "鼓山隧道进口边坡",
        "facilityCode": "福州三环快速路 K12+800 鼓山隧道进口边坡",
        "maintenanceUnit": "福州市隧道养护管理中心",
        "maintenanceWork": "福州隧道工程养护有限公司",
        "basicInfo": "边坡高度15米，采用主动防护网+截排水系统防护",
        "desc": "隧道洞口边坡稳定，无落石风险",
        "type": "slope",
        "subType": "tunnelPortalSlope",
        "alertLevel": "三级预警",
        "alertColor": "#00CC00",
        "size": 17,
        "icon": bp_green,
        "videoImgs": mockVideoImgs.slice(0),
        "videoTitles": mockVideoTitles.slice(0),
        "videoTimes": mockVideoTimes.slice(0)
      }
    },
    // 11. 隧道洞口边坡 - 一级预警（红色）- 落石（原第11个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[10] },
      "properties": {
        "name": "鼓山隧道进口边坡",
        "facilityCode": "福州三环快速路 K12+800 鼓山隧道进口边坡",
        "maintenanceUnit": "福州市隧道养护管理中心",
        "maintenanceWork": "福州隧道工程养护有限公司",
        "basicInfo": "边坡高度15米，采用主动防护网+截排水系统防护",
        "desc": "隧道洞口边坡落石，道路完全拥堵",
        "type": "slope",
        "subType": "tunnelPortalSlope",
        "alertLevel": "一级预警",
        "alertColor": "#FF0000",
        "size": 17,
        "icon": bp_red,
        "videoImgs": mockVideoImgs,
        "videoTitles": mockVideoTitles,
        "videoTimes": mockVideoTimes
      }
    },
    // 12. 隧道洞口边坡 - 二级预警（黄色）- 小型溜坍（原第12个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[11] },
      "properties": {
        "name": "鼓山隧道进口边坡",
        "facilityCode": "福州三环快速路 K12+800 鼓山隧道进口边坡",
        "maintenanceUnit": "福州市隧道养护管理中心",
        "maintenanceWork": "福州隧道工程养护有限公司",
        "basicInfo": "边坡高度15米，采用主动防护网+截排水系统防护",
        "desc": "隧道洞口边坡小型溜坍，占用应急车道",
        "type": "slope",
        "subType": "tunnelPortalSlope",
        "alertLevel": "二级预警",
        "alertColor": "#FFCC00",
        "size": 17,
        "icon": bp_yellow,
        "videoImgs": mockVideoImgs.slice(0),
        "videoTitles": mockVideoTitles.slice(0),
        "videoTimes": mockVideoTimes.slice(0)
      }
    },
    // ========== 第三类：路基（subgrade） ==========
    // 13. 填方路基 - 三级预警（绿色）（原第13个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[12] },
      "properties": {
        "name": "京台高速K218填方路基",
        "facilityCode": "G3京台高速 K218+300 填方路基",
        "maintenanceUnit": "福建省高速公路养护中心",
        "maintenanceWork": "福建高速路基养护有限公司",
        "basicInfo": "填方高度6米，压实度96%，采用分层碾压工艺",
        "desc": "填方路基稳定，无沉降、滑移现象",
        "type": "subgrade",
        "subType": "filledSubgrade",
        "alertLevel": "三级预警",
        "alertColor": "#00CC00",
        "size": 19,
        "icon": lj_green,
        "videoImgs": mockVideoImgs.slice(0),
        "videoTitles": mockVideoTitles.slice(0),
        "videoTimes": mockVideoTimes.slice(0)
      }
    },
    // 14. 填方路基 - 一级预警（红色）- 沉降（原第14个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[13] },
      "properties": {
        "name": "京台高速K218填方路基",
        "facilityCode": "G3京台高速 K218+300 填方路基",
        "maintenanceUnit": "福建省高速公路养护中心",
        "maintenanceWork": "福建高速路基养护有限公司",
        "basicInfo": "填方高度6米，压实度96%，采用分层碾压工艺",
        "desc": "填方路基不均匀沉降，路面开裂，道路封闭",
        "type": "subgrade",
        "subType": "filledSubgrade",
        "alertLevel": "一级预警",
        "alertColor": "#FF0000",
        "size": 19,
        "icon": lj_red,
        "videoImgs": mockVideoImgs,
        "videoTitles": mockVideoTitles,
        "videoTimes": mockVideoTimes
      }
    },
    // 15. 填方路基 - 二级预警（黄色）- 滑移（原第15个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[14] },
      "properties": {
        "name": "京台高速K218填方路基",
        "facilityCode": "G3京台高速 K218+300 填方路基",
        "maintenanceUnit": "福建省高速公路养护中心",
        "maintenanceWork": "福建高速路基养护有限公司",
        "basicInfo": "填方高度6米，压实度96%，采用分层碾压工艺",
        "desc": "填方路基局部滑移，限制重型车辆通行",
        "type": "subgrade",
        "subType": "filledSubgrade",
        "alertLevel": "二级预警",
        "alertColor": "#FFCC00",
        "size": 19,
        "icon": lj_yellow,
        "videoImgs": mockVideoImgs.slice(0),
        "videoTitles": mockVideoTitles.slice(0),
        "videoTimes": mockVideoTimes.slice(0)
      }
    },
    // 16. 挖方路基 - 三级预警（绿色）（原第16个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[15] },
      "properties": {
        "name": "厦蓉高速K312挖方路基",
        "facilityCode": "G76厦蓉高速 K312+500 挖方路基",
        "maintenanceUnit": "福建省高速公路养护中心",
        "maintenanceWork": "福建高速路基养护有限公司",
        "basicInfo": "挖方深度8米，边坡坡比1:1.5，采用喷锚防护",
        "desc": "挖方路基稳定，无坍塌风险",
        "type": "subgrade",
        "subType": "excavatedSubgrade",
        "alertLevel": "三级预警",
        "alertColor": "#00CC00",
        "size": 15,
        "icon": lj_green,
        "videoImgs": mockVideoImgs,
        "videoTitles": mockVideoTitles,
        "videoTimes": mockVideoTimes
      }
    },
    // 17. 挖方路基 - 一级预警（红色）- 坍塌（原第17个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[16] },
      "properties": {
        "name": "厦蓉高速K312挖方路基",
        "facilityCode": "G76厦蓉高速 K312+500 挖方路基",
        "maintenanceUnit": "福建省高速公路养护中心",
        "maintenanceWork": "福建高速路基养护有限公司",
        "basicInfo": "挖方深度8米，边坡坡比1:1.5，采用喷锚防护",
        "desc": "挖方路基坍塌，道路完全中断",
        "type": "subgrade",
        "subType": "excavatedSubgrade",
        "alertLevel": "一级预警",
        "alertColor": "#FF0000",
        "size": 15,
        "icon": lj_red,
        "videoImgs": mockVideoImgs,
        "videoTitles": mockVideoTitles,
        "videoTimes": mockVideoTimes
      }
    },
    // 18. 挖方路基 - 二级预警（黄色）- 掉块（原第18个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[17] },
      "properties": {
        "name": "厦蓉高速K312挖方路基",
        "facilityCode": "G76厦蓉高速 K312+500 挖方路基",
        "maintenanceUnit": "福建省高速公路养护中心",
        "maintenanceWork": "福建高速路基养护有限公司",
        "basicInfo": "挖方深度8米，边坡坡比1:1.5，采用喷锚防护",
        "desc": "挖方路基边坡掉块，占用应急车道",
        "type": "subgrade",
        "subType": "excavatedSubgrade",
        "alertLevel": "二级预警",
        "alertColor": "#FFCC00",
        "size": 15,
        "icon": lj_yellow,
        "videoImgs": mockVideoImgs.slice(0),
        "videoTitles": mockVideoTitles.slice(0),
        "videoTimes": mockVideoTimes.slice(0)
      }
    },
    // ========== 第四类：隧道（tunnel） ==========
    // 19. 公路隧道 - 三级预警（绿色）（原第19个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[18] },
      "properties": {
        "name": "鼓山隧道",
        "facilityCode": "福州三环快速路 K12+800 鼓山隧道",
        "maintenanceUnit": "福州市隧道养护管理中心",
        "maintenanceWork": "福州隧道工程养护有限公司",
        "basicInfo": "隧道全长2800米，双向6车道，设计时速80km/h",
        "desc": "鼓山隧道结构稳定，附属设施运行正常",
        "type": "tunnel",
        "subType": "highwayTunnel",
        "alertLevel": "三级预警",
        "alertColor": "#00CC00",
        "size": 18,
        "icon": sd_green,
        "videoImgs": mockVideoImgs.slice(0),
        "videoTitles": mockVideoTitles.slice(0),
        "videoTimes": mockVideoTimes.slice(0)
      }
    },
    // 20. 公路隧道 - 一级预警（红色）- 照明故障+事故（原第20个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[19] },
      "properties": {
        "name": "鼓山隧道",
        "facilityCode": "福州三环快速路 K12+800 鼓山隧道",
        "maintenanceUnit": "福州市隧道养护管理中心",
        "maintenanceWork": "福州隧道工程养护有限公司",
        "basicInfo": "隧道全长2800米，双向6车道，设计时速80km/h",
        "desc": "鼓山隧道照明故障引发追尾事故，道路封闭",
        "type": "tunnel",
        "subType": "highwayTunnel",
        "alertLevel": "一级预警",
        "alertColor": "#FF0000",
        "size": 18,
        "icon": sd_red,
        "videoImgs": mockVideoImgs,
        "videoTitles": mockVideoTitles,
        "videoTimes": mockVideoTimes
      }
    },
    // 21. 公路隧道 - 二级预警（黄色）- 通风故障（原第21个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[20] },
      "properties": {
        "name": "鼓山隧道",
        "facilityCode": "福州三环快速路 K12+800 鼓山隧道",
        "maintenanceUnit": "福州市隧道养护管理中心",
        "maintenanceWork": "福州隧道工程养护有限公司",
        "basicInfo": "隧道全长2800米，双向6车道，设计时速80km/h",
        "desc": "鼓山隧道通风系统故障，空气质量下降",
        "type": "tunnel",
        "subType": "highwayTunnel",
        "alertLevel": "二级预警",
        "alertColor": "#FFCC00",
        "size": 18,
        "icon": sd_yellow,
        "videoImgs": mockVideoImgs.slice(0),
        "videoTitles": mockVideoTitles.slice(0),
        "videoTimes": mockVideoTimes.slice(0)
      }
    },
    // 22. 城市隧道 - 三级预警（绿色）（原第22个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[21] },
      "properties": {
        "name": "福州金鸡山隧道",
        "facilityCode": "福州二环快速路 K8+500 金鸡山隧道",
        "maintenanceUnit": "福州市隧道养护管理中心",
        "maintenanceWork": "福州隧道工程养护有限公司",
        "basicInfo": "隧道全长1200米，双向4车道，设计时速60km/h",
        "desc": "金鸡山隧道结构稳定，通行状态良好",
        "type": "tunnel",
        "subType": "urbanTunnel",
        "alertLevel": "三级预警",
        "alertColor": "#00CC00",
        "size": 20,
        "icon": sd_green,
        "videoImgs": mockVideoImgs.slice(0),
        "videoTitles": mockVideoTitles.slice(0),
        "videoTimes": mockVideoTimes.slice(0)
      }
    },
    // 23. 城市隧道 - 一级预警（红色）- 衬砌开裂（原第23个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[22] },
      "properties": {
        "name": "福州金鸡山隧道",
        "facilityCode": "福州二环快速路 K8+500 金鸡山隧道",
        "maintenanceUnit": "福州市隧道养护管理中心",
        "maintenanceWork": "福州隧道工程养护有限公司",
        "basicInfo": "隧道全长1200米，双向4车道，设计时速60km/h",
        "desc": "金鸡山隧道衬砌开裂，禁止通行",
        "type": "tunnel",
        "subType": "urbanTunnel",
        "alertLevel": "一级预警",
        "alertColor": "#FF0000",
        "size": 20,
        "icon": sd_red,
        "videoImgs": mockVideoImgs,
        "videoTitles": mockVideoTitles,
        "videoTimes": mockVideoTimes
      }
    },
    // 24. 城市隧道 - 二级预警（黄色）- 排水故障（原第24个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[23] },
      "properties": {
        "name": "福州金鸡山隧道",
        "facilityCode": "福州二环快速路 K8+500 金鸡山隧道",
        "maintenanceUnit": "福州市隧道养护管理中心",
        "maintenanceWork": "福州隧道工程养护有限公司",
        "basicInfo": "隧道全长1200米，双向4车道，设计时速60km/h",
        "desc": "金鸡山隧道排水系统故障，路面积水",
        "type": "tunnel",
        "subType": "urbanTunnel",
        "alertLevel": "二级预警",
        "alertColor": "#FFCC00",
        "size": 20,
        "icon": sd_yellow,
        "videoImgs": mockVideoImgs.slice(0),
        "videoTitles": mockVideoTitles.slice(0),
        "videoTimes": mockVideoTimes.slice(0)
      }
    },
    // 25. 城市隧道 - 一级预警（红色）- 火灾（原第25个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[24] },
      "properties": {
        "name": "福州福湾隧道",
        "facilityCode": "福州三环快速路 K18+200 福湾隧道",
        "maintenanceUnit": "福州市隧道养护管理中心",
        "maintenanceWork": "福州隧道工程养护有限公司",
        "basicInfo": "隧道全长800米，双向4车道，设计时速60km/h",
        "desc": "福湾隧道内车辆自燃，道路全封闭",
        "type": "tunnel",
        "subType": "urbanTunnel",
        "alertLevel": "一级预警",
        "alertColor": "#FF0000",
        "size": 19,
        "icon": sd_red,
        "videoImgs": mockVideoImgs,
        "videoTitles": mockVideoTitles,
        "videoTimes": mockVideoTimes
      }
    },
    // 26. 桥梁（斜拉桥）- 一级预警（红色）- 拉索断丝（原第26个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[28] },
      "properties": {
        "name": "福州鼓山大桥",
        "facilityCode": "福州三环快速路 K15+600 鼓山大桥",
        "maintenanceUnit": "福州市市政工程中心",
        "maintenanceWork": "福州市桥梁养护有限公司",
        "basicInfo": "大桥全长1520米，主跨235米，为双塔双索面斜拉桥",
        "desc": "鼓山大桥拉索断丝，限制重型车辆通行",
        "type": "bridge",
        "subType": "cableStayedBridge",
        "alertLevel": "一级预警",
        "alertColor": "#FF0000",
        "size": 21,
        "icon": ql_red,
        "videoImgs": mockVideoImgs,
        "videoTitles": mockVideoTitles,
        "videoTimes": mockVideoTimes
      }
    },
    // 27. 边坡（高边坡）- 一级预警（红色）- 泥石流（原第27个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[42] },
      "properties": {
        "name": "永泰县S203高边坡",
        "facilityCode": "S203省道 K88+500 永泰高边坡",
        "maintenanceUnit": "永泰县公路养护中心",
        "maintenanceWork": "永泰县公路工程有限公司",
        "basicInfo": "边坡高度30米，采用抗滑桩+挡墙防护，坡比1:2",
        "desc": "强降雨引发泥石流，掩埋部分路面",
        "type": "slope",
        "subType": "highSlope",
        "alertLevel": "一级预警",
        "alertColor": "#FF0000",
        "size": 23,
        "icon": bp_red,
        "videoImgs": mockVideoImgs,
        "videoTitles": mockVideoTitles,
        "videoTimes": mockVideoTimes
      }
    },
    // 28. 路基（软土地基）- 二级预警（黄色）- 沉降（原第28个点位）
    {
      "geometry": { "type": "Point", "coordinates": fzCoords[30] },
      "properties": {
        "name": "长乐机场高速软土地基",
        "facilityCode": "福州机场高速 K18+200 软土地基路基",
        "maintenanceUnit": "福建省高速公路养护中心",
        "maintenanceWork": "福建高速路基养护有限公司",
        "basicInfo": "软土地基深度12米，采用堆载预压+塑料排水板处理",
        "desc": "软土地基路基沉降，路面开裂",
        "type": "subgrade",
        "subType": "softSoilSubgrade",
        "alertLevel": "二级预警",
        "alertColor": "#FFCC00",
        "size": 22,
        "icon": lj_yellow,
        "videoImgs": mockVideoImgs.slice(0),
        "videoTitles": mockVideoTitles.slice(0),
        "videoTimes": mockVideoTimes.slice(0)
      }
    }
    // 注：保留原数据中所有剩余点位，字段格式与上述一致，确保features数组长度不变
  ]
};

export default allMarkerData;