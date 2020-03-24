var dataObject = [
  {
    语言名称:'Java',
    排名:1,
    升或降:'降',
    变化幅度:-0.0001
  },
  {
    语言名称:'C',
    排名:2,
    升或降:'升',
    变化幅度:+0.0244
  },
  {
    语言名称:'Python',
    排名:3,
    升或降:'升',
    变化幅度:+0.0141
  },
  {
    语言名称:'C++',
    排名:4,
    升或降:'降',
    变化幅度:-0.0258
  },
  {
    语言名称:'C#',
    排名:5,
    升或降:'升',
    变化幅度:+0.0207
  },
  {
    语言名称:'Visual Basic.NET',
    排名:6,
    升或降:'降',
    变化幅度:-0.0117
  },
  {
    语言名称:'JavaScript',
    排名:7,
    升或降:'降',
    变化幅度:-0.0085
  }
];

var hotElement = document.querySelector('#main');
var hotElementContainer = hotElement.parentNode;
var hotSettings = {
  data: dataObject,
  columns: [
    {
      data: '语言名称',
      type: 'text',
      width: 40
    },
    {
      data: '排名',
      type:'numeric'
    },
    {
      data: '升或降',
      type: 'text'
    },
    {
      data: '变化幅度',
      type: 'numeric',
      numericFormat: {
        pattern: '+0.00%'
      }
    },
  ],
  stretchH: 'all',
  width: 800,
  maxRows: 7,
  colWidth:[200,200,200,200],
  rowHeights: 35,
  className: "htCenter htMiddle",
  manualRowResize: true,
  manualColumnResize: true,
  manualRowMove: true,
  colHeaders:[
      '语言名称',
      '排名',
      '生或降',
      '变化幅度',
  ], 
  manualColumnMove: true,
  contextMenu: true,
  filters: true,
  MultiColumnSorting:true
};
var hot = new Handsontable(hotElement, hotSettings);




