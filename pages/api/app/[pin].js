import nextConnect from 'next-connect'
import middleware from '../../../middleware/database'

const router = nextConnect()

router.use(middleware)

router.get(async (req, res) => {
    const pin = Number(req.query.pin)
    const dumps = await req.db.collection('app').findOne({ 'user.pin': pin })
    res.json(dumps || {})
})

router.post(async (req, res) => {
    await req.db.collection('app').updateOne({ pin: 1234 }, { $set: { pin: 1234, date: new Date() } }, { upsert: true })
    res.json({ message: 'ok' })
})

export default (req, res) => router.apply(req, res)
