
const nodemailer = require("nodemailer");


exports.sendemail = async (req, res) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.forwardemail.net",
        port: 465,
        secure: true,
        auth: {

            user: 'REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM',
            pass: 'REPLACE-WITH-YOUR-GENERATED-PASSWORD'
        }
    });

    // async..await is not allowed in global scope, must use a wrapper

    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: 'your adresse email', // sender address // sender address
        to: req.body.email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    res.send('mail sended succeessfully')

}



exports.sendingHTML = async (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.forwardemail.net",
        port: 465,
        secure: true,
        auth: {

            user: 'REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM',
            pass: 'REPLACE-WITH-YOUR-GENERATED-PASSWORD'
        }
    });

    // 2. create mail options
    let info = await transporter.sendMail({
        from: 'your adresse email', // sender address
        to: req.body, // list of receivers
        subject: "Hello ✔", // Subject line
        html: "<h1>Bonjour wajdi</h1>", // html body
    });
    // 3. send respone
    res.json({ message: "E-mail send successfully!" })
}