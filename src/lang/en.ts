export default {
  // 全局，补充
  AllSituation: {
    location: 'Location',
    offLine: 'Offline',
    onLine: 'Online',
    warning: 'Warning',
    type: 'Please enter type',
    reqParamErr: 'Request parameter error',
    optSuccess: 'Operation success',
    optFailed: 'Operation failed',
    optUnknown: 'Unknown status'
  },
  // /////////////////////////////////////*** 交互消息  ***////////////////////////////////////////
  InteractMessage: {
    NameEmpty: 'User name cannot be empty',
    SaveUser: "User's Infomation saved!",
    MaxPics: 'Maximum number of photos: 3',
    RangeAlert: 'The maximum time span is 31 days, please reselect',
    TimeRange: 'Please select a complete time interval',
    ModifyPwdFail: 'Modify password failed',
    GoogleNotFound: 'Google map dependency not found,please check the network,refresh and try again.',
    BaiduNotFound: 'Baidu map dependency not found,please check the network,refresh and try again.',
    MustHave_Comp: 'Company name cannot be empty',
    SetAlarm: 'Set Alarm Value',
    MustHave_Licen: 'Please enter the license plate number',
    MustHave_AlDev: 'Please enter the alcohol test device number',
    MustHave_Dev: 'Please enter the device number',
    MustHave_WN: 'Work number cannot be empty',
    MustHave_Name: 'Name cannot be empty',
    MustHave_Contact: 'Contact cannot be empty',
    MustHave_Id: 'Id number cannot be empty',
    MustHave_Role: 'Please select a role',
    MustHave_Psw: 'Password cannot be empty',
    EnterPwdAgain: 'Please enter the password again',
    PwdNotSame: 'The two passwords are inconsistent!',
    DeleteSucc: 'Delete success!',
    DeleteFail: 'Delete fail',
    OptFail: 'Operation fail',
    OptSuccess: 'Operation success',
    EditPermis: 'User permission has changed',
    DelCancel: 'Delete option canceled',
    ResetCancel: 'Reset option canceled'
  },
  // /////////////////////////////////////*** 地图英文  ***///////////////////////////////////////
  Map: {
    currentEvent: 'Current Event',
    pastEvent: 'Other Event'
  },
  // /////////////////////////////////////*** 历史轨迹  ***///////////////////////////////////////
  Historical: {
    Tracks: 'Tracks',
    Driving: 'Driving',
    Parking: 'Parking',
    Start_Locate: 'Start-Locate',
    Dangers: 'Dangers',
    Duration: 'Duration',
    StartTime: 'Start Time',
    EndTime: 'End Time',
    Direction: 'Direction',
    Behavior: 'Behavior',
    Start: 'Start',
    End: 'End',
    Speed: 'Speed(Km/h)',
    HundreSpeed: 'Speed(100m/h)'
  },
  // /////////////////////////////////////*** 计数单位  ***///////////////////////////////////////
  Count: {
    Vehicle: ''
  },
  // /////////////////////////////////////*** 通用工具  ***///////////////////////////////////////
  tools: {
    All: 'All',
    Condition: 'Condition',
    Result: 'Result',
    ByLicense: 'Sort by lincense',
    ByDriver: 'Sort by driver',
    Settings: 'Settings',
    Map: 'Map',
    Qry: 'Inquire',
    Save: 'Save',
    Return: 'Back',
    Play: 'Play',
    Export: 'Export',
    Delete: 'Delete',
    Add: 'Add',
    SearchPlaceHolder: 'Enter something to search'
  },
  // /////////////////////////////////////*** 登录页面  ***///////////////////////////////////////
  Home: {
    Title: 'Vehicle risk statistics',
    card1: 'Past 1 day',
    card2: 'Past 7 days',
    card3: 'Past 30 days',
    lineMap: 'Trend',
    pieMap: 'Proportion'
  },
  PlaceHolder: {
    Male: 'Male',
    Female: 'Female',
    Account: 'Account',
    Password: 'Password',
    VarifyCode: 'Security Code',
    OldPwd: 'Old Password',
    NewPwd: 'New Password',
    ConfirmNew: 'Confirm New Password'
  },
  LoginRule: {
    Account: 'Please input username',
    Password: 'Please input password',
    Verification: 'Please input security code'
  },
  Router: {
    index: 'Home',
    RealtimeMonitor: 'realtime Monitoring',
    replayTheater: 'Video Playback',
    statisticReports: 'Statistic Report',
    optManagement: 'Basic Management'
  },
  Login: { // 登录页面
    Title: 'Vehicle Active Safety Monitoring Platform',
    Account: 'Account',
    Password: 'Password',
    verifyCode: 'Verify Code',
    VerifyCodeError: 'Verification code error',
    Login: 'Login',
    LogOut: 'Log Out',
    OutDate: 'Has not been operated for a long time,exit automatically',
    Remember: 'Remember me',
    Wrong: 'Wrong user name or password',
    ForgetPwd: 'Forgot password?'
  },
  // /////////////////////////////////////*** 主页面  ***///////////////////////////////////////
  MainPage: { // 主页面
    Title: 'Vehicle Active Safety Monitoring Platform',
    Current: 'User',
    ChangePwd: 'Change Password',
    LogOut: 'Log Out',
    FullScr: 'Full Screen',
    ConfirmMsg: 'Are You Sure To Log Out?'
  },
  HomeChart: {
    VehicleCount: 'Vehicles total',
    OnlineVehicle: 'Online Vehicles total',
    AlarmToday: 'Alarms today',
    DriverCount: 'Drivers total',
    AlarmTrend: 'Alarm trend',
    DrivingBehaviorAnalysis: 'Driving behavior analysis',
    pastOneDay: 'Past 1 day',
    pastSevenDay: 'Past 7 days',
    pastThirtyDay: 'Past 30 days',
    riskTotal: 'Vehicle risk count'
  },
  Form: { // 表单
    // 酒檢列表
    riskDetail: "Driver's risk detail",

    ActiveTest: 'Active test',
    PassiveTest: 'Passive test',
    RejectTest: 'Reject test',
    InterruptTest: 'Interrupt test',
    Others: 'Others',

    Nobinding: 'Temperately not bind',
    TrendChart: 'Trend Chart - Last 30 Days',
    Score: 'Score',
    Daily: 'Daily',
    Monthly: 'Monthly',
    Yearly: 'Yearly',
    PleaseSelectDate: 'Please Select Date',
    OperateTime: 'Operate Time',
    OperateType: 'Operate Type',
    IpAddr: 'Ip Address',
    Driver: 'Driver',
    ChangePwd: 'Change Password',
    ResetPwd: 'Reset Password',
    PermisInfo: 'Permis Information',
    CreatedTime: 'Created Time',
    Name: 'Name',
    Sex: 'Sex',
    Contact: 'Contact Info',
    JobNumber: 'Job Number',
    IdNumber: 'ID Number',
    IdCardAddress: 'ID card address',
    LicenseNo: "Driver's license No",
    LicenseType: 'Lincense Type',
    Unit: 'Unit',
    LicensePlate: 'License Plate',
    Time: 'Time',
    AlarmCount: 'Alarm total',
    hundreMiles: 'Hundreds of kilometers',
    mileAge: 'Mileage',
    To: 'To',
    actions: 'Actions',
    BehaviorType: 'Behavior Type',
    AlarmType: 'Alarm Type',
    Media: 'Media',
    SelectDateAndTime: 'Select Date And Time',
    PleaseSelect: 'Select',
    SerialNo: 'Serial No',
    Speed: 'Speed',
    carSpeed: 'Speed(Km/h)',
    ProcessState: 'Process State',
    Longitude: 'Longitude',
    Latitude: 'Latitude',
    Address: 'Address',
    LoadMessage: 'Loading Data,Please Wait',
    NodataMessage: '',
    LevelOne: 'Level 1',
    LevelTwo: 'Level 2',
    Undefined: 'Undefined',
    Undisposed: 'Undisposed',
    Disposed: 'Disposed',
    FatigueDriving: 'Fatigue driving',
    MakingCalls: 'Making calls',
    Smoking: 'Smoking',
    Distraction: 'Distraction',
    Abonormal: 'Abnormal (off duty)',
    NotDetected: 'No driver detected',
    driverChange: 'Driver Changed',
    FrontAlarm: 'Front car collision',
    LaneDeparture: 'Lane departure',
    OverClose: 'Overclose warning',
    Pedestrian: 'Pedestrian collision',
    FrequentlyChange: 'Frequently change lanes',
    RateLimit: 'Rate-limiting',
    Obstruction: 'Obstruction warning',
    SelectAll: 'Select All',
    UploadPhoto: 'Upload New Photo',
    Cut: 'Cut',
    AlarmLevelOne: 'Alarm level-1',
    AlarmLevelTwo: 'Alarm level-2',
    HasSelect: 'Selected  ',
    Item: '',
    Yes: 'Ok',
    None: 'None',
    Photo: 'Photo',
    Img: 'img',
    Guide: 'Guide',
    AlcoholVal: 'Alcohol Val',
    DeviceNo: 'Device Number',
    LogAccount: 'Logged In Account',
    activeCapture: 'Active Capture Events',
    autoCapture: 'Auto Capture Events',
    identifyRoadSigns: 'Indentify Road Signs',
    roadSignExceed: 'Road Signs Exceed Limits',
    editDriver: "Edit Driver's Information",
    driverPhoto: "Driver's Photo",
    AddVehicleInfo: 'New Vehicle Information',
    ManualEnter: 'Manually Enter',
    NewDevice: 'New Device Information',
    AddDriver: 'Add New Driver',
    EditVehicle: "Modify Vehicle's Info",
    IdentificationPhoto: 'Identification Photo',
    SelectPhoto: 'Select Photo',
    View: 'View',
    AddUser: 'Add User',
    UserRole: "User's Role",
    ConfirmPwd: 'Confirm Password',
    EditUser: "Modify User's Info",
    EditDevice: "Modify Device's Info",
    DriverDetail: "Driver's Detail",
    UserDetail: "User's Detail",
    VehicleDetail: "Vehicle's Detail",
    DeviceDetai: "Device's Detail"
  },
  // /////////////////////////////////////*** 实时监控  ***///////////////////////////////////////
  realTimeMonitor: {
    Online: 'Online',
    Alarm: 'Alarm',
    Detail: 'Detail',
    DriverInfo: 'Driver Information'
  },
  Rules: { // 校验提醒

  },
  TabTitle: {
    VehicleMonitor: 'Vehicle Monitor',
    AlamQry: 'Alarm Qry',
    TerminalMalfunction: 'Terminal Faulty',
    VideoMalfunction: 'Video Faulty',
    RiskBoard: 'Risk Board',
    InterestLine: 'Interest Line',
    locationSearch: 'Location Search',
    mapSearch: 'Map Search',
    RemonteControl: 'Remote Control',
    VehicleNavigate: 'Vehicle Navigate'
  },
  // /////////////////////////////////////*** 視頻回放  ***///////////////////////////////////////
  replayTheater: {
    replayTheater: 'Video Playback',
    videoList: 'Video List',
    noVideo: 'Multimedia Data Not Found'
  },
  Messages: { // 弹窗信息
    LogOut: 'This operation will exit the login. Continue?',
    Confirm: 'Ok',
    Cancel: 'Cancel',
    Tip: 'Tips',
    SuccessOut: 'Log Out Success!',
    AskReset: "This operation will reset user's password to 6 ones.Continue?",
    CancelMessage: 'Operation has been canceled.',
    SelectLicense: 'Please select license plate',
    BeginTime: 'Please select start time',
    EndTime: 'Please select end time',
    ActionType: 'Please select behavior type',
    DeleteMsg: 'This operation will permanently delete the selected options.Continue?',
    DelCard: "This operation will permanently delete the vehicle's information.Continue?",
    DelUser: "This operation will permanently delete the user's information.Continue?",
    DelDevice: "This operation will permanently delete the device's information.Continue?",
    DelComp: "This operation will permanently delete the company's information.Continue?",
    DelPic: 'This operation will permanently delete the picture.Continue?'
  },
  // /////////////////////////////////////*** 左侧导航栏  ***///////////////////////////////////////
  Company: {
    Well: 'Well Electric',
    CompanyName: 'Company Name',
    AddNew: 'Add New Company',
    EditComp: "Modify Company's Information",
    CompanyDetail: "Company's Detail"
  },
  // /////////////////////////////////////*** 左侧导航栏  ***///////////////////////////////////////
  navList: {
    companyManage: 'Companies Manage',
    alcoholTest: 'Alcohol Test List',
    Misbehavior: 'DSM Alarm Query',
    AdasAlarm: 'ADAS Alarm Query',
    ScoreTrend: 'Driving Score Trend',
    RiskAnalysis: "Driver's Risk Analysis",
    OprationLog: 'Operation Log',
    VehicleMsg: 'Vehicle Info',
    DeviceMsg: 'Dvr Device Info',
    DriverMsg: 'Driver Info',
    UserManage: 'Users Manage',
    RoleManage: 'Roles Manage'
  },
  ButtonComponent: { // 组件名
    Submit: 'Submit',
    Edit: 'Edit',
    Detail: 'Detail',
    FalseAlarm: 'Incorrect Alarm',
    Record: 'Record',
    Previous: 'Previous',
    Next: 'Next',
    Close: 'Close',
    MapBaidu: 'Baidu',
    MapGoogle: 'Google'
  },
  Dialog: { // dialog信息
    Information: 'Information',
    AlarmDetail: 'Alarm Detail',
    Media: 'Media',
    Position: 'Position',
    DriverCapture: 'Driving State Capture',
    LicensePlate: 'License Plate',
    AlarmType: 'Alarm Type',
    Time: 'Time',
    Speed: 'Speed(Km/h)',
    Address: 'Address',
    ProcessState: 'Process State'
  },
  // /////////////////////////////////////*** 数据报表  ***///////////////////////////////////////
  DrivingForm: {
    Clear: 'Clear All',
    AlcoholVal: 'Alcohol Val(>=)'
  },
  // /////////////////////////////////////*** 基础管理  ***///////////////////////////////////////
  RolesManage: {
    EntryDay: 'Day of entry',
    SucessEditComp: 'Company information modified successfully!',
    SuccessEdit: 'Vehicle information modified successfully!',
    AddRole: 'Add role',
    RoleName: 'Role name',
    SelectRolePermis: 'Role permission',
    ModifyRole: 'Modify role permissions',
    UnfoldAll: 'Unfold all',
    FoldAll: 'Fold all',
    SelectAll: 'Select all',
    CancelAll: 'Cancel all',
    HasNot: 'No permission',
    FailEdit: 'Modification failed',
    ProductBrand: 'Product Brand',
    ProductModel: 'Product Model',
    SoftwareVersion: 'Software Version',
    HardwareVersion: 'Hardware Version',
    ProductManufact: 'Products Manufacturer',
    SubordinateCompany: 'Subordinate Company',
    UserRoleDetail: "User's Role Detail"
  },
  route: {
    alcoholTest: 'Alcohol Test List',
    Misbehavior: 'DSM Alarm Query',
    AdasAlarm: 'ADAS Alarm Query',
    ScoreTrend: 'Driving Score Trend',
    RiskAnalysis: "Driver's Risk Analysis",
    OprationLog: 'Operation Log',
    VehicleMsg: 'Vehicle Info',
    DeviceMsg: 'Dvr Device Info',
    DriverMsg: 'Driver Info',
    UserManage: 'Users Manage',
    RoleManage: 'Roles Manage',
    dashboard: 'Dashboard',
    documentation: 'Documentation',
    guide: 'Guide',
    permission: 'Permission',
    pagePermission: 'Page Permission',
    rolePermission: 'Role Permission',
    directivePermission: 'Directive Permission',
    icons: 'Icons',
    components: 'Components',
    tinymce: 'Tinymce',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    dndList: 'Dnd List',
    splitPane: 'SplitPane',
    avatarUpload: 'Avatar Upload',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'Count To',
    componentMixin: 'Mixin',
    backToTop: 'Back To Top',
    dragDialog: 'Drag Dialog',
    dragSelect: 'Drag Select',
    dragKanban: 'Drag Kanban',
    keyboardChart: 'Keyboard Chart',
    lineChart: 'Line Chart',
    mixChart: 'Mix Chart',
    example: 'Example',
    nested: 'Nested Routes',
    dynamicTable: 'Dynamic Table',
    dragTable: 'Drag Table',
    inlineEditTable: 'Inline Edit',
    complexTable: 'Complex Table',
    tab: 'Tab',
    form: 'Form',
    createArticle: 'Create Article',
    editArticle: 'Edit Article',
    articleList: 'Article List',
    errorPages: 'Error Pages',
    page401: '401',
    page404: '404',
    errorLog: 'Error Log',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    mergeHeader: 'Merge Header',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: 'Export Zip',
    theme: 'Theme',
    clipboardDemo: 'Clipboard',
    i18n: 'I18n',
    externalLink: 'External Link',
    profile: 'Profile'
  },
  navbar: {
    dashboard: 'Dashboard',
    github: 'Github',
    logOut: 'Log Out',
    profile: 'Profile',
    theme: 'Theme',
    size: 'Global Size'
  },
  login: {
    title: 'Login Form',
    logIn: 'Login',
    username: 'Username',
    password: 'Password',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  permission: {
    addRole: 'New Role',
    editPermission: 'Edit',
    roles: 'Your roles',
    switchRoles: 'Switch roles',
    tips: 'In some cases, using v-permission will have no effect. For example: Element-UI  el-tab or el-table-column and other scenes that dynamically render dom. You can only do this with v-if.',
    delete: 'Delete',
    confirm: 'Confirm',
    cancel: 'Cancel'
  },
  guide: {
    description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
    button: 'Show Guide'
  },
  components: {
    documentation: 'Documentation',
    tinymceTips: 'Rich text is a core feature of the management backend, but at the same time it is a place with lots of pits. In the process of selecting rich texts, I also took a lot of detours. The common rich texts on the market have been basically used, and I finally chose Tinymce. See the more detailed rich text comparison and introduction.',
    dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
  },
  table: {
    title: 'Title',
    type: 'Type',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    id: 'ID',
    date: 'Date',
    status: 'Status',
    edit: 'Edit',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm'
  },
  example: {
    warning: 'Creating and editing pages cannot be cached by keep-alive because keep-alive include does not currently support caching based on routes, so it is currently cached based on component name. If you want to achieve a similar caching effect, you can use a browser caching scheme such as localStorage. Or do not use keep-alive include to cache all pages directly. See details'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  },
  settings: {
    title: 'Page style setting',
    theme: 'Theme Color',
    tagsView: 'Open Tags-View',
    fixedHeader: 'Fixed Header',
    sidebarLogo: 'Sidebar Logo'
  }
}
