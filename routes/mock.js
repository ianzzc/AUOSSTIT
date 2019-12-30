/* eslint-disable quote-props */
const express = require('express')
const router = express.Router()

/* GET home page. */
const azzsftj = {
  'body': [
    {
      'count': 3,
      'zssftj': [
        {
          'CSWHJSS': 38.58,
          'CZTDSYS': 720,
          'DFJYFFJS': 2.4,
          'FCS': 1521.08,
          'GRSDS': 377.8,
          'JYFFJS': 3.64,
          'ROW_ID': 1,
          'SWJGDM': '13501020000',
          'YBSFE': 3769.14,
          'YHS': 0.24,
          'ZZS': 1105.4,
          'swjgJcDm': '41',
          'swjgMc': '国家税务总局福州市鼓楼区税务局'
        },
        {
          'CSWHJSS': 0.3,
          'CZTDSYS': 0,
          'DFJYFFJS': 0,
          'FCS': 12.22,
          'GRSDS': 3.06,
          'JYFFJS': 0,
          'ROW_ID': 2,
          'SWJGDM': '13501030000',
          'YBSFE': 24.44,
          'YHS': 0,
          'ZZS': 8.86,
          'swjgJcDm': '41',
          'swjgMc': '国家税务总局福州市台江区税务局'
        },
        {
          'CSWHJSS': 38.88,
          'CZTDSYS': 720,
          'DFJYFFJS': 2.4,
          'FCS': 1533.3,
          'GRSDS': 380.86,
          'JYFFJS': 3.64,
          'ROW_ID': 3,
          'YBSFE': 3793.58,
          'YHS': 0.24,
          'ZZS': 1114.26,
          'swjgMc': '合计'
        }
      ]
    }
  ],
  'code': '0',
  'msg': '查询成功',
  'rtnCode': '0',
  'timeStamp': '20191213094245',
  'tranId': 'b14f36b505454eb8b2a58e64f383a00d',
  'tranSeq': 'a7d23d1642994cc6b29bbdd1555a3841'
}

const swjg = {
  'body': [
    {
      'swjgMc': '国家税务总局福州市税务局',
      'children': [
        {
          'swjgMc': '国家税务总局福州市税务局',
          'children': [
            { 'swjgMc': '国家税务总局福州市税务局' },
            { 'swjgMc': '国家税务总局福州市税务局' },
            { 'swjgMc': '国家税务总局福州市税务局' },
            { 'swjgMc': '国家税务总局福州市税务局' },
            { 'swjgMc': '国家税务总局福州市税务局' }
          ]
        },
        {
          'swjgMc': '国家税务总局福州市税务局',
          'children': [
            { 'swjgMc': '国家税务总局福州市税务局' },
            { 'swjgMc': '国家税务总局福州市税务局' },
            { 'swjgMc': '国家税务总局福州市税务局' },
            { 'swjgMc': '国家税务总局福州市税务局' },
            { 'swjgMc': '国家税务总局福州市税务局' }
          ]
        },
        {
          'swjgMc': '国家税务总局福州市税务局',
          'children': [
            { 'swjgMc': '国家税务总局福州市税务局' },
            { 'swjgMc': '国家税务总局福州市税务局' },
            { 'swjgMc': '国家税务总局福州市税务局' },
            { 'swjgMc': '国家税务总局福州市税务局' },
            { 'swjgMc': '国家税务总局福州市税务局' }
          ]
        },
        {
          'swjgMc': '国家税务总局福州市税务局',
          'children': [
            { 'swjgMc': '国家税务总局福州市税务局' },
            { 'swjgMc': '国家税务总局福州市税务局' },
            { 'swjgMc': '国家税务总局福州市税务局' },
            { 'swjgMc': '国家税务总局福州市税务局' },
            { 'swjgMc': '国家税务总局福州市税务局' }
          ]
        }
      ]
    },
    {
      'swjgMc': '国家税务总局长乐市税务局',
      'children': [
        { 'swjgMc': '国家税务总局福州市税务局' },
        { 'swjgMc': '国家税务总局福州市税务局' },
        { 'swjgMc': '国家税务总局福州市税务局' },
        { 'swjgMc': '国家税务总局福州市税务局' }
      ]
    },
    {
      'swjgMc': '国家税务总局福州市税务局',
      'children': [
        { 'swjgMc': '国家税务总局福州市税务局' },
        { 'swjgMc': '国家税务总局福州市税务局' },
        { 'swjgMc': '国家税务总局福州市税务局' },
        { 'swjgMc': '国家税务总局福州市税务局' }
      ]
    },
    {
      'swjgMc': '国家税务总局福州市税务局',
      'children': [
        { 'swjgMc': '国家税务总局福州市税务局' },
        { 'swjgMc': '国家税务总局福州市税务局' },
        { 'swjgMc': '国家税务总局福州市税务局' },
        { 'swjgMc': '国家税务总局福州市税务局' }
      ]
    },
    {
      'swjgMc': '国家税务总局福州市税务局',
      'children': [
        { 'swjgMc': '国家税务总局福州市税务局' },
        { 'swjgMc': '国家税务总局福州市税务局' },
        { 'swjgMc': '国家税务总局福州市税务局' },
        { 'swjgMc': '国家税务总局福州市税务局' }
      ]
    }
  ]
}

router.get('/', (req, res, next) => {
  res.send('Mock Page')
})
router.post('/user', (req, res, next) => {
  res.append('Access-Control-Allow-Origin', 'http://localhost')
  res.append('Access-Control-Allow-Credentials', 'true')
  res.json(azzsftj)
})
router.post('/swjg', (req, res, next) => {
  res.append('Access-Control-Allow-Origin', 'http://localhost')
  res.append('Access-Control-Allow-Credentials', 'true')
  res.json(swjg)
})

module.exports = router
