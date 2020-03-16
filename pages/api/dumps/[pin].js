import nextConnect from 'next-connect'
import middleware from '../../../middleware/database'

const router = nextConnect()

router.use(middleware)

router.get(async (req, res) => {
    const pin = req.query.pin
    const dumps = await req.db.collection('dump').findOne({ 'user.pin': Number(pin) })
    res.json(dumps || {})
})

export default (req, res) => router.apply(req, res)
