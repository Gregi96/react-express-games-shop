const { v4: uuid } = require('uuid');

const gamesData = [
  {
    id: uuid(),
    img:
      'https://image.api.playstation.com/vulcan/img/cfn/11307vxcNurt1R5ewUN-O-CYjW02hotrdUT52DLjiijBTeQoBiAEMp5Gd6CIsk7X8YE1DpsxTA57K6ZsSXhz8uEAsQIE7FoX.png',
    price: 100,
    title: 'The Sims4',
  },
  {
    id: uuid(),
    img:
      'https://media.contentapi.ea.com/content/www-easports/pl_PL/fifa/ultimate-team/news/2017/fut-online-match-modes/_jcr_content/imageShare.img.jpg',
    price: 120,
    title: 'Fifa19',
  },
  {
    id: uuid(),
    img:
      'https://image.api.playstation.com/vulcan/img/rnd/202010/1520/rEeRqRApgzNDhWnkeuT3iCiG.jpg?w=440',
    price: 70,
    title: 'Call of Duty',
  },
  {
    id: uuid(),
    img:
      'https://gamesguru.org/wp-content/uploads/2020/07/crysis-remastered-premiera-op%C3%B3%C5%BAniona-1.jpg',
    price: 50,
    title: 'Crysis',
  },
  {
    id: uuid(),
    img:
      'https://www.speedtest.pl/wiadomosci/wp-content/uploads/2018/12/counter-strike-global-offensive.jpg',
    price: 40,
    title: 'CS GO',
  },
  {
    id: uuid(),
    img:
      'https://www.speedtest.pl/wiadomosci/wp-content/uploads/2019/05/Wiedzmin-3-Dziki-Gon.jpg',
    price: 100,
    title: 'Wiedźmin Dziki III GON',
  },
  {
    id: uuid(),
    img:
      'https://image.api.playstation.com/cdn/EP0082/CUSA05716_00/4izLixKmm2JmGkJHuh8OJp1mjdx42f3B.png',
    price: 49,
    title: 'Tomb Raider',
  },
  {
    id: uuid(),
    img:
      'https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png',
    price: 100,
    title: 'Minecraft',
  },
  {
    id: uuid(),
    img:
      'https://image.api.playstation.com/vulcan/img/cfn/11307_IHsMv5_RWozhjUaovHu3SwQjUA5ZNqZ26iSCrW-QPE2VUCHo_CY-SDqR5Nt2z5sMUsW49cWwKZpn_Mp_NqPjAULNdh.png',
    price: 99,
    title: 'Star Wars',
  },
  {
    id: uuid(),
    img:
      'https://image.api.playstation.com/cdn/EP0006/CUSA05986_00/yetnWvYg8FwyFVaA2ejx4nRAy2vQJt5z.png',
    price: 120,
    title: 'Need For Speed',
  },
];

module.exports = gamesData;
