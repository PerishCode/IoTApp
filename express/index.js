const express = require('express')

const app = express()

let devices = [
  {
    id: 'A',
    name: '蓝牙音箱',
    icon: 'BluetoothSpeaker',
    bound: true,
    abstract: '这是一个通用的简介',
  },
  {
    id: 'B',
    name: '电动车',
    icon: 'ElectricCar',
    bound: false,
    abstract: '这是一个通用的简介',
  },
  {
    id: 'C',
    name: '无线耳机',
    icon: 'WirelessHeadset',
    bound: true,
    abstract: '这是一个通用的简介',
  },
  {
    id: 'D',
    name: '智能眼镜',
    icon: 'SmartGlasses',
    bound: false,
    abstract: '这是一个通用的简介',
  },
  {
    id: 'E',
    name: '智能电视',
    icon: 'SmartTV',
    bound: false,
    abstract: '这是一个通用的简介',
  },
  {
    id: 'F',
    name: '智能手表',
    icon: 'SmartWatch',
    bound: false,
    abstract: '这是一个通用的简介',
  },
]

app.get('/api/devices', (_, res) => {
  res.send(devices)
})

app.get('/api/devices/:id', (req, res) => {
  const {
    params: { id },
  } = req

  res.send(devices.find(d => d.id === id))
})

app.listen(7777, () => {
  console.log('listening')
})
