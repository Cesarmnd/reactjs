export const items = [
  {
    "id": 0,
    "name": "Hard Disk 01",
    "price": 175,
    "img": "https://us.123rf.com/450wm/davidfranklinstudioworks/davidfranklinstudioworks1601/davidfranklinstudioworks160100051/50816962-open-plain-brown-blank-cardboard-box-isolated-on-white-background-copy-space.jpg?ver=6"
  },
  {
    "id": 1,
    "name": "Hard Disk 02",
    "price": 85,
    "img": "https://us.123rf.com/450wm/davidfranklinstudioworks/davidfranklinstudioworks1601/davidfranklinstudioworks160100051/50816962-open-plain-brown-blank-cardboard-box-isolated-on-white-background-copy-space.jpg?ver=6"
  },
  {
    "id": 2,
    "name": "Hard Disk 03",
    "price": 255,
    "img": "https://us.123rf.com/450wm/davidfranklinstudioworks/davidfranklinstudioworks1601/davidfranklinstudioworks160100051/50816962-open-plain-brown-blank-cardboard-box-isolated-on-white-background-copy-space.jpg?ver=6"
  },
  {
    "id": 3,
    "name": "Hard Disk 04",
    "price": 462,
    "img": "https://us.123rf.com/450wm/davidfranklinstudioworks/davidfranklinstudioworks1601/davidfranklinstudioworks160100051/50816962-open-plain-brown-blank-cardboard-box-isolated-on-white-background-copy-space.jpg?ver=6"
  },
  {
    "id": 4,
    "name": "Video Card 01",
    "price": 875,
    "img": "https://us.123rf.com/450wm/davidfranklinstudioworks/davidfranklinstudioworks1601/davidfranklinstudioworks160100051/50816962-open-plain-brown-blank-cardboard-box-isolated-on-white-background-copy-space.jpg?ver=6"
  },
  {
    "id": 5,
    "name": "Video Card 02",
    "price": 782,
    "img": "https://us.123rf.com/450wm/davidfranklinstudioworks/davidfranklinstudioworks1601/davidfranklinstudioworks160100051/50816962-open-plain-brown-blank-cardboard-box-isolated-on-white-background-copy-space.jpg?ver=6"
  },
  {
    "id": 6,
    "name": "Video Card 03",
    "price": 1265,
    "img": "https://us.123rf.com/450wm/davidfranklinstudioworks/davidfranklinstudioworks1601/davidfranklinstudioworks160100051/50816962-open-plain-brown-blank-cardboard-box-isolated-on-white-background-copy-space.jpg?ver=6"
  },

  {
    "id": 15,
    "name": "Power Supply 04",
    "price": 682,
    "img": "https://us.123rf.com/450wm/davidfranklinstudioworks/davidfranklinstudioworks1601/davidfranklinstudioworks160100051/50816962-open-plain-brown-blank-cardboard-box-isolated-on-white-background-copy-space.jpg?ver=6"
  }
];



export const getFetch  = new Promise((res, rej)=> {
  var url = 'domain.com'
  if (url === 'domain.com') {
    res(items)
  } else {
    rej('404 not found')
  } 
})
