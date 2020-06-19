const organizations = [
  { nodeId: '17', name: '车辆管理所'},
  { nodeId: '13', name: '秩序设施大队'},
  { nodeId: '11', name: '科技信息处'},
  { nodeId: '12', name: '指挥中心'},
  { nodeId: '15', name: '侦查大队'},
  { nodeId: '14', name: '法制大队'},
  { nodeId: '16', name: '违法处理中心'},
  { nodeId: '18', name: '辖区大队'}
]
const plans = [
  { planId: '03', name: '大情报体系建设工作任务计划表' },
  { planId: '04', name: '交通安全设施提升工作任务计划表' },
  { planId: '05', name: '精细化管理提升行动任务清单表' },
  { planId: '06', name: '预联办运作提升计划工作任务表' },
  { planId: '07', name: '高速公路提升管理效能工作任务清单表' },
  { planId: '09', name: '提升便民服务工作任务计划表' },
  { planId: '10', name: '执法规范提升计划任务表' },
  { planId: '11', name: '非现场执法提升计划工作推进计划表' },
  { planId: '12', name: '智慧交通提档升级行动计划表' },
  { planId: '14', name: '指挥调度提升计划表' },
  { planId: '15', name: '基建营房建设工作任务实施计划表' }
]

const projects = [
  {
    planId: '03',
    name: '借力外脑研究工作机制2',
    finishedTime: '结合科技处联创中心建设一并推进。',
    content: '通过签订战略协议、建设实验室的形式，与科研机构、学校、企业等单位开展合作，重点开展交通拥堵运行评价分析，交通OD调查分析、交通流仿真运行预判研究、交通安全态势分析等，为支队交通缓堵政策、交通事故预防策略提供决策参考',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '12', name: '指挥中心'}
    ],
    assistOrganizations: '',
    responsibleOrganizationsId: ['11', '12']
  },
  {
    planId: '03',
    name: '实战应用转化工作机制1',
    finishedTime: '2020年6月前进一步理顺机制，常态化工作，后续不断完善机制',
    content: '每周科技业务融合例会:推动大情报数据真正融入系统平台，系统平台功能贴近实战、服务实战、赋能实战，使得业务场景和系统场景无缝对接',
    responsibleOrganizations: [
      { nodeId: '12', name: '指挥中心'}
    ],
    assistOrganizations: '各职能部门、各大队',
    responsibleOrganizationsId: ['12']
  },
  {
    planId: '03',
    name: '实战应用转化工作机制2',
    finishedTime: '结合科技处对“125”科技建设立项工作推进。',
    content: '信息科技立项跟踪推进：抓紧推进科技立项（DG二期,指挥四期），不断提升DG大数据平台和交通指挥综合系统功能，全面推动“125”警务机制“一中心、两平台、五张图”的整体落地，打造城市交通“智慧大脑+优化算法+敏锐触角+雪亮双眼”智慧型交通治理支撑系统平台，实现三大实战场景',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '12', name: '指挥中心'}
    ],
    assistOrganizations: '',
    responsibleOrganizationsId: ['11', '12']
  },
  {
    planId: '03',
    name: '实战应用转化工作机制3',
    finishedTime: '视科技系统建设情况，边建边练。',
    content: '系统平台实战成果转化：由支队情报研判中心牵头，参照“云鹰”、“宁鹰”模式对每一项新打造的交管实战数据模型、系统应用功能组织培训，适时通过组织专项行动形式推动各部门、各大队实战化应用，行动结束后，按照业务分工由相关业务承接该实战成果转化的常态推进工作',
    responsibleOrganizations: [
      { nodeId: '12', name: '指挥中心'}
    ],
    assistOrganizations: '各职能部门、各大队',
    responsibleOrganizationsId: ['12']
  },

  {
    planId: '04',
    name: '交通信号灯6',
    finishedTime: '2020年12月31日完成试用工作，初步出工作成果，后视情进行推广',
    content: '积极探索新技术应用，开展SCATS的线圈替代检测技术的实验应用，解决日常维护的突出问题。',
    responsibleOrganizations: [
      { nodeId: '13', name: '秩序设施大队'}
    ],
    assistOrganizations: '科技信息处',
    responsibleOrganizationsId: ['13']
  },
  {
    planId: '04',
    name: '交通信号灯7',
    finishedTime: '2020年12月31日完成测试工作，初步出工作成果，后视情进行推广',
    content: '开展无线技术安全传输的测试，结合5G技术的研究，解决光纤传输瓶颈，研究开展路口信号设施升级改造工作。',
    responsibleOrganizations: [
      { nodeId: '13', name: '秩序设施大队'}
    ],
    assistOrganizations: '科技信息处',
    responsibleOrganizationsId: ['13']
  },

  {
    planId: '05',
    name: '指导完善视频卡口',
    finishedTime: '每月推进，2020年12月底前完成',
    content: '指导完善视频卡口',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
    ],
    assistOrganizations: '',
    responsibleOrganizationsId: ['11']
  },
  {
    planId: '05',
    name: '指导抓拍系统建设',
    finishedTime: '每月推进，2020年12月底前完成',
    content: '指导抓拍系统建设',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
    ],
    assistOrganizations: '',
    responsibleOrganizationsId: ['11']
  },
  {
    planId: '05',
    name: '加强科技项目投入',
    finishedTime: '每月推进，2020年12月底前完成',
    content: '加强科技项目投入',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
    ],
    assistOrganizations: '',
    responsibleOrganizationsId: ['11']
  },

  {
    planId: '06',
    name: '建立四级联席会议制度',
    finishedTime: '长期工作，按相应时间节点常态开展',
    content: '实施“月度专班会议、季度工作例会、半年全市会议、年度全体会议”四级会议制度，每次专班会议派发具体的工作任务清单，交办的工作任务于下次会议进行盘点，对交办的工作任务跟踪到底。',
    responsibleOrganizations: [
      { nodeId: '15', name: '侦查大队'},
    ],
    assistOrganizations: '指挥中心、科技信息处、秩序设施大队、法制大队、违法处理中心和车辆管理所',
    responsibleOrganizationsId: ['15']
  },

  {
    planId: '07',
    name: '推进主线动态违法电子抓拍',
    finishedTime: '各高速大队',
    content: '推进主线动态违法电子抓拍',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'},
      { nodeId: '14', name: '法制大队'},
    ],
    assistOrganizations: '',
    responsibleOrganizationsId: ['11', '16', '14']
  },
  {
    planId: '07',
    name: '打造“智慧交通”科技样板工程1',
    finishedTime: '各高速大队',
    content: '打造“智慧交通”科技样板工程1',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
    ],
    assistOrganizations: '',
    responsibleOrganizationsId: ['11']
  },

  {
    planId: '09',
    name: '加强基础建设2',
    finishedTime: '2024年前开工建设',
    content: '驾考场建设：（1）完善化龙新考场配套建设，研究优化新考场运维模式，充分发挥其考能优势，2020年6月前实现日考能达到设计考能，最大限度缩短驾驶证领证周期，2022年将我市领证周期从目前的全省中游水平提升到全省前列，打造标杆性驾考场品牌。（2）推进大尖山驾考场建设项目，2020年6月前完成需求论证和建设方案设计；力争2024年前开工建设。（3）按照“一租一建”的考场建设要求，考虑到化龙考场2027年租赁到期的因素，在筹建大尖山考场同时，参照国内其他城市成熟的社会化考场建设模式，积极研究由市局下属企业建设社会化考场的可行性。',
    responsibleOrganizations: [
      { nodeId: '', name: '警务保障处'},
      { nodeId: '17', name: '车辆管理所'},
    ],
    assistOrganizations: '科技信息处、新六区大队',
    responsibleOrganizationsId: ['17']
  },
  {
    planId: '09',
    name: '加强基础建设3',
    finishedTime: '',
    content: '违法处理窗口建设：依托全市交警服务大厅总体布局，对违法处理服务大厅进行统筹长远规划，按照“东南西北中”选址建设各片区交通违法处理大厅集中办理交通违法处理业务，初步提出按下表分片设置交通违法处理中心。',
    responsibleOrganizations: [
      { nodeId: '', name: '警务保障处'},
      { nodeId: '16', name: '违法处理中心'},
    ],
    assistOrganizations: '各职能部门、各大队',
    responsibleOrganizationsId: ['16']
  },
  {
    planId: '09',
    name: '构建智能化线上服务网',
    finishedTime: '2024年前开工建设',
    content: '按照“应上尽上、全程在线”思路，整合粤省事、交管12123、警民通、广州交警E、网上车管所等线上平台资源，在已开通25项交管业务“网上办”的基础上，逐步开发更多“一键办”线上办理功能。2020年6月前，交管网办业务比例达20%，进一步优化提升交管业务“全预约、优先办”服务机制，实现PDA现场开具简易处罚决定书电子签名。2024年交管网办业务比例达到40%，全面构建智能化的线上服务网，有效分流线下窗口业务。',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '15', name: '侦查大队'},
      { nodeId: '17', name: '车辆管理所'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '各职能部门、各大队',
    responsibleOrganizationsId: ['11', '15', '17', '16']
  },
  {
    planId: '09',
    name: '研发应用交管自助一体机',
    finishedTime: '',
    content: '研发交管业务自助办理一体机，综合应用人脸识别、电子签名等技术，实现机动车、驾驶证、交通违法等信息查询，自助办理车管综合牌证、交通违法确认及缴罚、交通事故简易程序认定书打印等业务，打造智能化、全天候的交管无人服务区。',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'}
    ],
    assistOrganizations: '车辆管理所、违法处理中心、侦查大队、指挥中心',
    responsibleOrganizationsId: ['11']
  },
  {
    planId: '09',
    name: '提升智慧信息化程度1',
    finishedTime: '2021年',
    content: '1、升级改造综合辅助平台：按照深化公安交管“放管服”改革发展要求，逐步扩大车辆转籍信息网上转递试点城市，预计2020年我市车辆转移业务的日均办理量将由现在的30宗/天增长至200宗/天，目前车管业务综合辅助平台不支持车辆转籍相关影像资料与“公安交通管理综合应用平台”对接，急需升级改造现有平台。2020年启动改造，2021年完成改造投入使用。实现机动车档案资料电子化转递，档案查询、扫描、转递由原来的20分钟以上缩减至5分钟以内，提高办事效率50%以上，让群众在车管所少等候，最大限度的发挥“一窗式”服务效益。',
    responsibleOrganizations: [
      { nodeId: '17', name: '车辆管理所'}
    ],
    assistOrganizations: '科技信息处、新六区大队',
    responsibleOrganizationsId: ['17']
  },
  {
    planId: '09',
    name: '提升智慧信息化程度2',
    finishedTime: '2021年',
    content: '2.建设检验监管智能审核系统：目前，广州市机动车日检验车辆6000～7000辆，机动车销售旺季时，日检验车辆可达万辆。检验的审核目前主要依赖人工审核，人工审核工作量大、效率低，容易因视觉疲劳而导致注意力下降，从而造成判断失误。建设机动车安全技术检验监管智能审核系统，可大幅提高监管审核的工作效率、减少人工审核时间，加强重点车辆审核和复核，构建更智能、更便捷、更高效化的机动车安全技术检验监管审核体系。2020年启动建设，2021年建成投入使用',
    responsibleOrganizations: [
      { nodeId: '17', name: '车辆管理所'}
    ],
    assistOrganizations: '科技信息处、新六区大队',
    responsibleOrganizationsId: ['17']
  },
  {
    planId: '09',
    name: '提升智慧信息化程度3',
    finishedTime: '2021年',
    content: '3.升级交管专网服务器硬件：经过多年运行，机动车检验监管系统、驾驶人考试监管系统等专网服务器已老化、效能低下，需立项升级到市局云平台，实现服务器升级、扩容，提高运行效率。2020年启动升级，2021年完成升级投入使用',
    responsibleOrganizations: [
      { nodeId: '17', name: '车辆管理所'}
    ],
    assistOrganizations: '科技信息处、新六区大队、违法处理中心',
    responsibleOrganizationsId: ['17']
  },
  {
    planId: '09',
    name: '提升智慧信息化程度4',
    finishedTime: '',
    content: '4.推广违法处理预约机制：深入推广违法处理窗口业务预约机制，逐步实现绝大部分现场一般程序预约后办理，一是提速二维码预约操作效率。在民警现场开具的法律文书上附印便捷预约或缴款二维码，简易程序处罚决定书上附印“交通违法缴罚”二维码，方面群众扫码办理。二是简化预约系统界面操作，“广州交警e”会员预约时自动匹配当前名下机动车待处理非现场交通违法或驾驶证待处理现场交通违法记录，对可以网上办理的业务提醒其通过“广州交警e”快捷办理，其他业务经确认后选择“是否办理”即可免输入基本资料快捷进入界面选择预约地点和时间。三是规范窗口预约业务管理，各大队合理设置预约配额（放号），科学配置窗口警力，有效匹配本单位现场一般程序执法能力，引导非预约群众有序办理，协助开展现场预约，宣传推广违法处理窗口预约办理的措施。做好预约优先机制保障，针对窗口业务预约记录每天提前做好案件调查准备，全力提高窗口业务办理速度。',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '各大队',
    responsibleOrganizationsId: ['11', '16']
  },
  {
    planId: '09',
    name: '提升智慧信息化程度5',
    finishedTime: '各大队',
    content: '5.建设行政执法档案电子化管理系统：通过电子签名、拍照、扫描等方式将行政执法纸质档案转换为电子档案的方式进行长期保存，最终实现无纸化办理一般程序案件。支队、大队业务管理部门可根据系统管理权限对大对业务情况进行调阅、查询、统计、分析、监督。具体措施是报请支队科技项目建设开发行政执法电子档案管理系统，最大限度提升档案管理电子化程度。首先实现现场简易处罚决定书电子签名后数字化存档；其次对强制措施凭证和违法处理通知书电子签名后数字化存档，对历史未裁决的一般程序档案进行扫描存档；最终实现一般程序案件无纸化办案。',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '各大队',
    responsibleOrganizationsId: ['11', '16']
  },

  {
    planId: '10',
    name: '建设支队法制监督平台',
    finishedTime: '2020年12月31日前',
    content: '对支队移动警务PDA、对讲机、执法记录仪、酒精测试仪、车管监督系统以及执法办案系统的后台数据进行归集，建设支队法制监督平台，统一支队的执法监督管理工作，提升监督效率。',
    responsibleOrganizations: [
      { nodeId: '14', name: '法制大队'}
    ],
    assistOrganizations: '政治处、指挥中心、警务保障处、科技信息处、监察科、违法处理中心、车辆管理所',
    responsibleOrganizationsId: ['14']
  },
  {
    planId: '10',
    name: '筹建支队执法管理中心',
    finishedTime: '2020年12月15日前',
    content: '统一醉驾案件办理，建立一支专门办理醉驾案件的队伍，各大队查处的醉驾案件，做好前期证据收集后，统一移交支队执法管理中心统一立案追究。具体方案由法制大队另行制定。在支队执法管理中心运行基础上，推动行政拘留案件由支队统一归口审批。',
    responsibleOrganizations: [
      { nodeId: '14', name: '法制大队'}
    ],
    assistOrganizations: '直属各单位',
    responsibleOrganizationsId: ['14']
  },
  {
    planId: '10',
    name: '大幅优化和简化行政案件办理流程',
    finishedTime: '第一项工作于2019年12月31日前完成；第二项工作为长期工作。',
    content: '一是实现部分一般程序违法业务网上办理。依托“广州交警”微信公众号，系统自动生成当事人自述材料和询问笔录；对“7023”违法行为，当事人在网上办理并将违法行为处理完毕后，可直接将行驶证邮寄给当事人，不需当事人到现场办理。二是对公安交通执法的行政处罚程序和行政处罚决定进行研究，采取可行强的变通办法，挖掘释放警辅人员在执法办案辅助方面的潜力，确保案件快速办理，实现便民利民和为基层减负的效果。',
    responsibleOrganizations: [
      { nodeId: '14', name: '法制大队'}
    ],
    assistOrganizations: '直属各单位',
    responsibleOrganizationsId: ['14']
  },

  {
    planId: '11',
    name: '电子警察管理1梳理设备底数，确保底数清、信息准',
    finishedTime: '2020年6月',
    content: '全面梳理支队电子警察底数、“六合一”系统、集成指挥平台中固定式监控设备的报备信息，确保支队现有执法设备达到100%的底数清晰、信息准确。对设备性能进行评估，满足执法要求的投入执法，对不能满足执法要求的改变设备用途或纳入报废，设备执法利用率达到70%以上。',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '各大队',
    responsibleOrganizationsId: ['11', '16']
  },
  {
    planId: '11',
    name: '电子警察管理2逐步推进电子警察执法数据的集中审核',
    finishedTime: '2020年6月',
    content: '实现按辖区类型或执法类型，逐渐将支队直属大队电子警察设备集中到支队统一管理、对电子警察执法数据进行集中审核。',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '各大队',
    responsibleOrganizationsId: ['11', '16']
  },
  {
    planId: '11',
    name: '电子警察管理3实现支队自建电子警察执法全过程的系统化管理',
    finishedTime: '2020年',
    content: '完成设备系统化管理的需求调研',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '各大队',
    responsibleOrganizationsId: ['11', '16']
  },
  {
    planId: '11',
    name: '电子警察管理3实现支队自建电子警察执法全过程的系统化管理',
    finishedTime: '2021年',
    content: '完成项目立项',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '各大队',
    responsibleOrganizationsId: ['11', '16']
  },
  {
    planId: '11',
    name: '电子警察管理3实现支队自建电子警察执法全过程的系统化管理',
    finishedTime: '',
    content: '对支队直属单位使用（支队建设）的电子警察设备建设、使用、维护、执法情况进行系统化管理；',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '各大队',
    responsibleOrganizationsId: ['11', '16']
  },
  {
    planId: '11',
    name: '电子警察管理4电子警察执法图片的半自动化审核',
    finishedTime: '2020年',
    content: '完成自动审核的需求调研',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '各大队',
    responsibleOrganizationsId: ['11', '16']
  },
  {
    planId: '11',
    name: '电子警察管理4电子警察执法图片的半自动化审核',
    finishedTime: '2021年',
    content: '完成项目立项，对部分执法类型图像实现自动化审核',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '各大队',
    responsibleOrganizationsId: ['11', '16']
  },
  {
    planId: '11',
    name: '电子警察管理4电子警察执法图片的半自动化审核',
    finishedTime: '2023年',
    content: '实现执法图片的系统自动审核前端执法设备拍摄图片后进行系统的自动审核，将明显不能作为证据的图片（例如：违法图片全黑、图片中无违法行为或图片中无机动车等不具备执法要素的）进行系统自动筛选，将系统无法辨别的图片再由人工按照图像取证规范进行审核。',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '各大队',
    responsibleOrganizationsId: ['11', '16']
  },
  {
    planId: '11',
    name: '电子警察管理5实现全市固定式电子警察执法全过程的系统化管理',
    finishedTime: '2023年6月',
    content: '对全广州（含新六区）的电子警察设备建设、使用、维护、执法情况进行系统化管理；',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '新六区大队',
    responsibleOrganizationsId: ['11', '16']
  },
  {
    planId: '11',
    name: '电子警察管理6研究制定电子警察设置原则',
    finishedTime: '2021年12月',
    content: '对全广州（含新六区）的电子警察设备建设、使用、维护、执法情况进行系统化管理；',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '其他职能部门',
    responsibleOrganizationsId: ['11', '16']
  },
  {
    planId: '11',
    name: '电子警察管理7建立完善电子警察管理评价体系及交通违法处理监督管理机制',
    finishedTime: '2021年12月',
    content: '同步研究设置、完善评价指标，建立电子警察执法效能评价体系，对电子警察执法效能进行评估，理顺支队执法分析评估闭环管理机制。 ',
    responsibleOrganizations: [
      { nodeId: '16', name: '违法处理中心'},
      { nodeId: '12', name: '指挥中心'}
    ],
    assistOrganizations: '科技信息处、其他职能部门',
    responsibleOrganizationsId: ['12', '16']
  },
  {
    planId: '11',
    name: '违法处理业务1提高违法处理业务网办率、自助办理率',
    finishedTime: '2020年06月',
    content: '理顺预约办理全流程优先服务机制、提速二维码预约操作效率、简化预约系统界面操作、规范窗口预约业务管理、加强宣传引导等措施，深入推广违法处理窗口业务预约机制，逐步提高交通违法处理业务的网办率、自助办理率。',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '各大队',
    responsibleOrganizationsId: ['11', '16']
  },
  {
    planId: '11',
    name: '违法处理业务2实现自助便民服务纵深化',
    finishedTime: '2020年12月',
    content: '完成业务需求调研、项目立项前期准备工作（根据科技项目建设流程进度）。',
    responsibleOrganizations: [
     { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '法制大队',
    responsibleOrganizationsId: ['11', '16']
  },
  {
    planId: '11',
    name: '违法处理业务2实现自助便民服务纵深化',
    finishedTime: '2021年至2022年',
    content: '完成项目采购，配合支队科技部门在项目实施过程完成软件开发、功能测试、部署等一系列工作。',
    responsibleOrganizations: [
     { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '法制大队',
    responsibleOrganizationsId: ['11', '16']
  },
  {
    planId: '11',
    name: '违法处理业务2实现自助便民服务纵深化',
    finishedTime: '2023年',
    content: '同时，研究建立窗口非现场简易程序业务自助办理管理机制。完成在全市部署并推广使用窗口非现场简易程序业务自助办理措施。',
    responsibleOrganizations: [
     { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '法制大队',
    responsibleOrganizationsId: ['11', '16']
  },
  {
    planId: '11',
    name: '违法处理业务2实现自助便民服务纵深化',
    finishedTime: '2024年',
    content: '收集窗口新便民服务措施推广使用期间的问题和建议，协调科技部门进一步完善系统功能，优化业务办理流程效率。',
    responsibleOrganizations: [
     { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '法制大队',
    responsibleOrganizationsId: ['11', '16']
  },
  {
    planId: '11',
    name: '违法处理业务3实现“业务档案信息电子化”',
    finishedTime: '2020年12月',
    content: '实现违法处理窗口对电子警察记录违法行为作出简易程序处罚的，通过手写板电子签名后仅打印“交当事人联”并送达，“存档联”以图片形式存档。',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '法制大队',
    responsibleOrganizationsId: ['11', '16']
  },
  {
    planId: '11',
    name: '违法处理业务3实现“业务档案信息电子化”',
    finishedTime: '2021年12月',
    content: '实现对现场PDA开具强制措施凭证和违法处理通知书电子签名后数字化存档，对网上查询资料、车辆拓印、鉴定意见等材料扫描存档；对历史未裁决的一般程序档案进行扫描存档，为下一步无纸化办案奠定基础。',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '法制大队',
    responsibleOrganizationsId: ['11', '16']
  },
  {
    planId: '11',
    name: '违法处理业务3实现“业务档案信息电子化”',
    finishedTime: '2022年12月',
    content: '实现在档案管理系统通过法律文书号调取案件有关证据材料和文书模板并通过模板制作有关案件材料；办理案件时通过双面屏向违法行为人展示有关法律文书，履行告知义务；通过写字板和指模采集器生成电子签名和电子指模，完成法律文书的签名确认和送达；案件审批可在公网电脑终端或PDA进行办理或审批时，通过手写板生成电子签名和办案、审核意见，有关案件材料在办理过程中同步电子归档，实现一般程序案件无纸化办理。',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '法制大队',
    responsibleOrganizationsId: ['11', '16']
  },

  {
    planId: '12',
    name: '构建更健全的智能感知网络',
    finishedTime: '2022年12月完成',
    content: '推进交通设施高清化升级改造，实现交通监控、电子警察设备全面高清数字化。启动支队剩余自建346套模拟交通监控、563套内保监控的升级改造工作',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '', name: '警务保障处'}
    ],
    assistOrganizations: '直属各大队',
    responsibleOrganizationsId: ['11']
  },
  {
    planId: '12',
    name: '构建更健全的智能感知网络',
    finishedTime: '2022年、2023年各建成50套',
    content: '新建100套AR高点监控设备,实现城市道路主干道和高速公路高位全覆盖。',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '12', name: '指挥中心'}
    ],
    assistOrganizations: '直属各大队',
    responsibleOrganizationsId: ['11', '12']
  },
  {
    planId: '12',
    name: '构建更健全的智能感知网络',
    finishedTime: '2022年10月前投入使用',
    content: '配合高速公路提升管理效能工作规划，对高速公路实施分车道行驶、出口路段安全管控等措施，建设50套高清卡式电子警察，实现高速公路电警测速执法全覆盖和重点路段、行为、对象的安全防控',
    responsibleOrganizations: [
      { nodeId: '16', name: '违法处理中心'},
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '12', name: '指挥中心'}
    ],
    assistOrganizations: '直属各大队',
    responsibleOrganizationsId: ['11', '16', '12']
  },
  {
    planId: '12',
    name: '构建更健全的智能感知网络',
    finishedTime: '2024年12月前完成',
    content: '依据市视频办新一轮视频建设计划，2021年申请建设50套具有加塞、远光灯、不礼让行人、开车打手机等多种执法功能的电子警察设备',
    responsibleOrganizations: [
      { nodeId: '16', name: '违法处理中心'},
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '12', name: '指挥中心'}
    ],
    assistOrganizations: '直属各大队',
    responsibleOrganizationsId: ['11', '16', '12']
  },
  {
    planId: '12',
    name: '构建更健全的智能感知网络',
    finishedTime: '2020年12月前完成',
    content: '构建从低效点排查、迁移及资金需求的运维机制，并纳入年度预算，确保交通设施总体正常稳定运行，提升电子警察有效正常率。',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '16', name: '违法处理中心'}
    ],
    assistOrganizations: '直属各大队',
    responsibleOrganizationsId: ['11', '16']
  },
  {
    planId: '12',
    name: '提升网络信息基础设施水平',
    finishedTime: '2020年完成',
    content: '推进高速一、高速二、白云一、白云二、警保卫大队5个大队分控中心配套信息化基础设施改造。',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'}
    ],
    assistOrganizations: '警务保障处、高速一、高速二、白云一、白云二、警保卫大队',
    responsibleOrganizationsId: ['11']
  },
  {
    planId: '12',
    name: '提升网络信息基础设施水平',
    finishedTime: '2021年完成',
    content: '推进原东山大队新大楼分控中心及机房建设',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'}
    ],
    assistOrganizations: '越秀大队',
    responsibleOrganizationsId: ['11']
  },
  {
    planId: '12',
    name: '提升网络信息基础设施水平',
    finishedTime: '2020年完成',
    content: '升级改造完成9个办案区人脸识别管控设备安装以及执法办案场所智能化管理平台建设',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'}
    ],
    assistOrganizations: '法制大队、警务保障处、各大队',
    responsibleOrganizationsId: ['11']
  },
  {
    planId: '12',
    name: '提升网络信息基础设施水平',
    finishedTime: '2021年完成',
    content: '推进基础网络优化和改造，升级支队到大队的公安网和现有星型拓扑交通系统专网承载能力',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'}
    ],
    assistOrganizations: '指挥中心、天河、海珠、荔湾、越秀大队',
    responsibleOrganizationsId: ['11']
  },
  {
    planId: '12',
    name: '建设交管业务大数据中台',
    finishedTime: '2020年完成',
    content: '夯实数据管理的基础，对现有数据进行整理，依托交通业务标准研究服务项目，对指挥、车管、法制、侦查、违法处理、科技等业务及数据进行梳理，形成数据督导报告；进一步研究和解决目前已知问题、发现新的问题，规划数据中心团队职责定位，初步搭建数据中台专业技术班底',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'}
    ],
    assistOrganizations: '直属各单位',
    responsibleOrganizationsId: ['11']
  },
  {
    planId: '12',
    name: '建设交管业务大数据中台',
    finishedTime: '2023年前完成',
    content: '根据上级大数据平台建设情况，开展支队大数据应用，明确数据中心的职责，建立对数据管理、大数据应用、安全等方面的长效机制。',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'}
    ],
    assistOrganizations: '直属各单位',
    responsibleOrganizationsId: ['11']
  },
  {
    planId: '12',
    name: '提升终端服务能力',
    finishedTime: '2020年完成',
    content: '逐步开发更多“一键办”线上办理功能。开设“粤省事”平台的广州专区，除了将广州交警e平台现有交管业务进行优化迁移，同时开发一些具有广州本地特色的业务',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '17', name: '车辆管理所'}
    ],
    assistOrganizations: '',
    responsibleOrganizationsId: ['11', '17']
  },
  {
    planId: '12',
    name: '提升终端服务能力',
    finishedTime: '2020年完成',
    content: '实现“违法笔录预录入”功能，优化原有的交通违法预约功功能以及完善部分车管业务办理流程',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '17', name: '车辆管理所'}
    ],
    assistOrganizations: '',
    responsibleOrganizationsId: ['11', '17']
  },
  {
    planId: '12',
    name: '提升终端服务能力',
    finishedTime: '2023年完成',
    content: '配合市局建设“智慧警务室”自助终端机的开发、建设、调试和应用工作，拓展交管业务多渠道办理',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '17', name: '车辆管理所'},
      { nodeId: '16', name: '违法处理中心'},
      { nodeId: '15', name: '侦查大队'}
    ],
    assistOrganizations: '',
    responsibleOrganizationsId: ['11', '15', '16', '17']
  },
  {
    planId: '12',
    name: '树立警企联创空间广州品牌',
    finishedTime: '2020年完成',
    content: '整合和提升科研所、警企联创空间、科技沙龙运作模式，初步建立联创空间运营方案，由支队科技管理部门牵头，收集各单位报送联创方案，依托科技沙龙、科研所等排期开展联创项目',
    responsibleOrganizations: [
      { nodeId: '', name: '政治处'},
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '13', name: '秩序设施大队'}
    ],
    assistOrganizations: '直属各大队、新六区大队',
    responsibleOrganizationsId: ['11', '13']
  },
  {
    planId: '12',
    name: '树立警企联创空间广州品牌',
    finishedTime: '2024年完成',
    content: '联创空间进入常态化运作，每年度不少于6个联创项目。',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'}
    ],
    assistOrganizations: '直属各大队、新六区大队',
    responsibleOrganizationsId: ['11']
  },
  {
    planId: '12',
    name: '打造全国交管科技创新的试验和孵化基地',
    finishedTime: '2020年完成',
    content: '加强与部局合作，尤其是与公安部交通管理科学研究所、公安部道路交通安全研究中心等具有重大影响力的机构合作，落实资金和专业对接人才，引进创新项目，支持部局系统和科研项目在广州落地实验和孵化。',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '', name: '警务保障处'}
    ],
    assistOrganizations: '车管所、违法处理中心、侦查大队、秩序设施大队',
    responsibleOrganizationsId: ['11']
  },

  {
    planId: '14',
    name: '配合交通指挥综合系统三期的上线工作',
    finishedTime: '2020年6月底',
    content: '配合科技信息处完成交通指挥综合系统的建设上线，推进特勤模块、接处警模块等功能模块应用工作。',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '12', name: '指挥中心'}
    ],
    assistOrganizations: '各大队',
    responsibleOrganizationsId: ['11', '12']
  },
  {
    planId: '14',
    name: '进一步优化交通警情绩效考核',
    finishedTime: '2020年2月前',
    content: '完成高速公路警情考核办法调整',
    responsibleOrganizations: [
      { nodeId: '11', name: '科技信息处'},
      { nodeId: '12', name: '指挥中心'}
    ],
    assistOrganizations: '各大队',
    responsibleOrganizationsId: ['11', '12']
  },
  {
    planId: '14',
    name: '进一步优化交通警情绩效考核',
    finishedTime: '2020年6月底',
    content: '实现利用指挥调度三期系统开展警情考核工作。',
    responsibleOrganizations: [
      { nodeId: '12', name: '指挥中心'}
    ],
    assistOrganizations: '科技信息处、勤务科',
    responsibleOrganizationsId: ['12']
  },
  {
    planId: '14',
    name: '组织推广应用公安部道路交通安全信息管理与服务系统',
    finishedTime: '2020年2月',
    content: '制定道路交通安全信息管理与服务系统使用规范（根据省局工作同步推进）',
    responsibleOrganizations: [
      { nodeId: '12', name: '指挥中心'}
    ],
    assistOrganizations: '科技信息处、秩序设施大队、侦查大队、车管所、违法处理中心、各大队',
    responsibleOrganizationsId: ['12']
  },
  {
    planId: '14',
    name: '组织推广应用公安部道路交通安全信息管理与服务系统',
    finishedTime: '2020年4月',
    content: '牵头各大队和相关职能部门完成公安部道路交通安全信息管理与服务系统布设及应用工作',
    responsibleOrganizations: [
      { nodeId: '12', name: '指挥中心'}
    ],
    assistOrganizations: '科技信息处、秩序设施大队、侦查大队、车管所、违法处理中心、各大队',
    responsibleOrganizationsId: ['12']
  },
  {
    planId: '14',
    name: '组织推广应用公安部道路交通安全信息管理与服务系统',
    finishedTime: '2020年4月',
    content: '定期更新事故多发点、服务网点、水浸点等系统数据',
    responsibleOrganizations: [
      { nodeId: '12', name: '指挥中心'}
    ],
    assistOrganizations: '科技信息处、秩序设施大队、侦查大队、车管所、违法处理中心、各大队',
    responsibleOrganizationsId: ['12']
  },
  {
    planId: '14',
    name: '强化交通指挥综合应用管理',
    finishedTime: '2020年7月-10月',
    content: '完成《交通指挥综合系统用户管理规定》的修订完善',
    responsibleOrganizations: [
      { nodeId: '12', name: '指挥中心'}
    ],
    assistOrganizations: '科技信息处、各大队',
    responsibleOrganizationsId: ['12']
  },
  {
    planId: '14',
    name: '强化交通指挥综合应用管理',
    finishedTime: '2020年7月',
    content: '2020年7月之后，开展指挥系统应用监督工作，督促大队利用系统标准化收集指挥工作信息数据，量化指挥工作成效。',
    responsibleOrganizations: [
      { nodeId: '12', name: '指挥中心'}
    ],
    assistOrganizations: '科技信息处、各大队',
    responsibleOrganizationsId: ['12']
  },
  {
    planId: '14',
    name: '强化交通指挥综合应用管理',
    finishedTime: '',
    content: '配合科技信息处完成指挥系统部分功能模块接入移动终端的试运行工作（根据科技项目建设流程进度）。',
    responsibleOrganizations: [
      { nodeId: '12', name: '指挥中心'}
    ],
    assistOrganizations: '各大队',
    responsibleOrganizationsId: ['12']
  },
  {
    planId: '14',
    name: '推进指挥系统接入移动终端建设',
    finishedTime: '',
    content: '逐年优化系统数据分析功能，完善交通警情、高德指数、执法数据的整合及分析，完善全年重要节点交通形势预判数据，提升信息研判效能。',
    responsibleOrganizations: [
      { nodeId: '12', name: '指挥中心'},
      { nodeId: '11', name: '科技信息处'}
    ],
    assistOrganizations: '各大队',
    responsibleOrganizationsId: ['12', '11']
  },
  {
    planId: '14',
    name: '推进指挥系统接入移动终端建设',
    finishedTime: '2020年7月至2024年',
    content: '正式实施并不断优化完善。',
    responsibleOrganizations: [
      { nodeId: '12', name: '指挥中心'},
      { nodeId: '11', name: '科技信息处'}
    ],
    assistOrganizations: '各大队',
    responsibleOrganizationsId: ['12', '11']
  },
  {
    planId: '14',
    name: '推进指挥系统特勤模块、应急处置模块的应用完善',
    finishedTime: '2020年6月',
    content: '前完成模块布设。',
    responsibleOrganizations: [
      { nodeId: '12', name: '指挥中心'},
      { nodeId: '11', name: '科技信息处'}
    ],
    assistOrganizations: '警保卫大队',
    responsibleOrganizationsId: ['12', '11']
  },
  {
    planId: '14',
    name: '推进指挥系统特勤模块、应急处置模块的应用完善',
    finishedTime: '2020-2024年',
    content: '逐年评估工作模块应用效果并不断完善。',
    responsibleOrganizations: [
      { nodeId: '12', name: '指挥中心'},
      { nodeId: '11', name: '科技信息处'}
    ],
    assistOrganizations: '警保卫大队',
    responsibleOrganizationsId: ['12', '11']
  },
  {
    planId: '14',
    name: '依托指挥系统，加强接处警用时跟踪督导',
    finishedTime: '2020年7月-12月',
    content: '完成接处警用时评估及督导工作机制制定；',
    responsibleOrganizations: [
      { nodeId: '12', name: '指挥中心'},
    ],
    assistOrganizations: '科技信息处、各大队',
    responsibleOrganizationsId: ['12']
  },
  {
    planId: '14',
    name: '依托指挥系统，加强接处警用时跟踪督导',
    finishedTime: '2021年1-6月',
    content: '开展工作机制试运行工作；',
    responsibleOrganizations: [
      { nodeId: '12', name: '指挥中心'},
    ],
    assistOrganizations: '科技信息处、各大队',
    responsibleOrganizationsId: ['12']
  },
  {
    planId: '14',
    name: '依托指挥系统，加强接处警用时跟踪督导',
    finishedTime: '2021年7月之后',
    content: '开展接处警用时督导工作。',
    responsibleOrganizations: [
      { nodeId: '12', name: '指挥中心'},
    ],
    assistOrganizations: '科技信息处、各大队',
    responsibleOrganizationsId: ['12']
  },

  {
    planId: '15',
    name: '短期基本建设类项目',
    finishedTime: '2020年1月至2020年6月',
    content: '1.完成东山分控中心项目可研申报，办理施工单位的招标采购工作；2.完成同德围中队用房建设项目的用地手续和立项工作；3.完成窖口地块建设车管场所的控规调整工作。',
    responsibleOrganizations: [
      { nodeId: '', name: '营房使用单位'},
    ],
    assistOrganizations: '警务保障处、科技信息处',
    responsibleOrganizationsId: []
  },
  {
    planId: '15',
    name: '短期窗口建设类项目',
    finishedTime: '2020年1月至2020年6月',
    content: '基本完成违法处理中心洲头咀业务用房修缮项目和白云一大队景泰直街业务用房修缮项目的基建修缮工作。',
    responsibleOrganizations: [
      { nodeId: '16', name: '违法处理中心'},
    ],
    assistOrganizations: '警务保障处、科技信息处',
    responsibleOrganizationsId: ['16']
  },
  {
    planId: '15',
    name: '中期基本建设类项目',
    finishedTime: '2020年6月至2022年6月',
    content: '1.完成东山分控中心项目建设；2.力争同德围中队业务用房建设项目开工；3.完成窖口地块建设车管场所项目的立项和方案联审等工作；4.完成大尖山驾考场建设项目的立项工作；5.推进车管所天河分所、天河大队、交通警保卫大队、摩托车手训练场、白云二大队和环城大队等业务用房及场地的立项建设工作。',
    responsibleOrganizations: [
      { nodeId: '', name: '营房使用单位'},
    ],
    assistOrganizations: '警务保障处、科技信息处',
    responsibleOrganizationsId: []
  },
  {
    planId: '15',
    name: '中期窗口建设类项目',
    finishedTime: '2020年6月至2022年6月',
    content: '1.全面完成违法处理中心洲头咀业务用房修缮项目，完成违法处理中心大厅搬迁工作；2.全面完成白云一大队景泰直街业务用房修缮项目，完成白云一大队交通违法处理室和事故处理室搬迁工作；3.完成高速一大队违法处理室和事故处理室的建设和搬迁工作。',
    responsibleOrganizations: [
      { nodeId: '16', name: '违法处理中心'},
    ],
    assistOrganizations: '警务保障处、科技信息处',
    responsibleOrganizationsId: ['16']
  },
  {
    planId: '15',
    name: '中期营房提升改造修缮类项目',
    finishedTime: '2020年6月至2022年6月',
    content: '完成海珠大队、交通警保卫大队、白云一大队、江村中队、高速一大队广花中队等业务用房提升改造工作。',
    responsibleOrganizations: [
      { nodeId: '', name: '营房使用单位'},
    ],
    assistOrganizations: '警务保障处、科技信息处',
    responsibleOrganizationsId: []
  },
  {
    planId: '15',
    name: '远期基建、修缮项目',
    finishedTime: '3-5年内',
    content: '1.全面完成东山分控中心项目建设，完成越秀大队队部搬迁工作；2.全面完成同德围中队业务用房建设和搬迁工作；3.完成窖口地块建设车管场所项目和搬迁工作；4.力争大尖山驾考场建设项目开工建设；5.完成天河分所、天河大队、交通警保卫大队、摩托车手训练场、白云二大队和环城大队业务用房立项建设工作。',
    responsibleOrganizations: [
      { nodeId: '16', name: '违法处理中心'},
    ],
    assistOrganizations: '警务保障处、科技信息处',
    responsibleOrganizationsId: ['16']
  },
]

export { organizations, plans, projects }