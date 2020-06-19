const organizations = [
  {
    name: '科技信息处',
    nodeId: 11,
    childNode: [ 
       { name: '数据组', nodeId: 111 },
       { name: '信息组', nodeId: 112 },
       { name: '智能组', nodeId: 113 }
    ]
  },
  {
    name: '指挥中心',
    nodeId: 12,
    childNode: [ 
       { name: '综合秘书科', nodeId: 121 },
       { name: '指挥调度科', nodeId: 122 },
       { name: '情报信息科', nodeId: 123 },
       { name: '宣传联络科', nodeId: 124 },
       { name: '信访接待科', nodeId: 125 }
    ]
  },
  {
    name: '秩序设施大队',
    nodeId: 13,
    childNode: [ 
       { name: '一中队', nodeId: 131 },
       { name: '二中队', nodeId: 132 },
       { name: '勤务考核科', nodeId: 133 }
    ]
  },
  {
    name: '法制大队',
    nodeId: 14,
    childNode: [ 
       { name: '一中队', nodeId: 141 },
       { name: '二中队', nodeId: 142 },
       { name: '三中队', nodeId: 143 }
    ]
  },
  {
    name: '侦查大队',
    nodeId: 15,
    childNode: [ 
       { name: '一中队', nodeId: 151 },
       { name: '二中队', nodeId: 152 },
       { name: '三中队', nodeId: 153 }
    ]
  },
  {
    name: '违法处理中心',
    nodeId: 16,
    childNode: [ 
       { name: '一中队', nodeId: 161 },
       { name: '二中队', nodeId: 162 },
       { name: '三中队', nodeId: 163 }
    ]
  },
  {
    name: '车辆管理所',
    nodeId: 17,
    childNode: [ 
       { name: '综合科', nodeId: 171 },
       { name: '驾驶员业务料', nodeId: 172 },
       { name: '车辆牌证业务科', nodeId: 173 },
       { name: '车辆技术检验科', nodeId: 174 },
       { name: '档案管理科', nodeId: 175 },
       { name: '业务监管科', nodeId: 176 },
       { name: '越秀分所', nodeId: 177 },
       { name: '化龙分所', nodeId: 178 },
       { name: '白云分所', nodeId: 179 },
       { name: '天河分所', nodeId: 1711 },
       { name: '芳村分所', nodeId: 1712 }
    ]
  },
  {
    name: '辖区大队',
    nodeId: 18,
    childNode: [ 
       { name: '天河大队', nodeId: 181 },
       { name: '越秀大队', nodeId: 182 },
       { name: '海珠大队', nodeId: 183 },
       { name: '荔湾大队', nodeId: 184 },
       { name: '白云一大队', nodeId: 185 },
       { name: '白云二大队', nodeId: 186 },
       { name: '高速公路一大队', nodeId: 187 },
       { name: '高速公路二大队', nodeId: 188 },
       { name: '高速公路三大队', nodeId: 189 },
       { name: '高速公路五大队', nodeId: 1811 },
       { name: '环城大队', nodeId: 1812 }
    ]
  },
  {
    name: '政治处',
    nodeId: 19,
    isShow: false,
    childNode: [
      { name: '人事科', nodeId: 191 },
      { name: '工资福利科', nodeId: 192 },
      { name: '宣教科', nodeId: 193 },
      { name: '团委', nodeId: 194 },
      { name: '警辅科', nodeId: 195 }
    ]
  },
  {
    name: '警务保障处',
    nodeId: 20,
    isShow: false,
    childNode: [
      { name: '装备行政科', nodeId: 201 },
      { name: '财务科', nodeId: 202 },
      { name: '基建科', nodeId: 203 },
      { name: '招标科', nodeId: 204 },
    ]
  },
  {
    name: '巡逻大队',
    nodeId: 21,
    isShow: false,
    childNode: [
      { name: '一中队', nodeId: 211 },
      { name: '二中队', nodeId: 212 },
      { name: '三中队', nodeId: 213 },
      { name: '四中队', nodeId: 214 },
      { name: '五中队', nodeId: 215 }
    ]
  },
  {
    name: '交通警保卫大队',
    nodeId: 22,
    isShow: false,
    childNode: [
      { name: '一中队', nodeId: 221 },
      { name: '二中队', nodeId: 222 },
      { name: '三中队', nodeId: 223 },
      { name: '四中队', nodeId: 224 },
      { name: '五中队', nodeId: 225 },
      { name: '六中队', nodeId: 226 },
      { name: '七中队', nodeId: 227 },
      { name: '八中队', nodeId: 228 },
    ]
  },
  {
    name: '监察科',
    nodeId: 23,
    isShow: false,
    childNode: []
  },
];

export { organizations }