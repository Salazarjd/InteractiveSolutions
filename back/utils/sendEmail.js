const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "98e08f58a829c5",
          pass: "a77a78b98365ee"
        }
      });
    const mensaje={
        from: "The Box Game Company <noreply@TheBoxCompany.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;
