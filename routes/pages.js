const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();



router.get('/', (req, res) => {
    res.render('login')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/forgotpassword', (req, res) => {
    res.render('forgotpassword')
})

router.post('/forgotpassword', (req, res) => {
    // console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'youremail',
            pass: 'password'
        }
    });

    const mailOptions = {
        from: 'email',
        to: req.body.email,
        subject: `message from <anemail>`,
        text: `some random text`
    }

    transporter.sendMail(mailOptions, (err, info)=> {
        if (err) {
            console.log(err);
        } else {
            console.log(`Email sent:`);
            res.send('success');
        }
    })
})


router.get('/reset', (req, res) => {
    res.render('resetpassword')
})

// router.post('/reset', (req, res) => {
//     res.render('resetpassword')
// })

router.get('*', (req, res) => {
    res.render('404')
})

module.exports = router;