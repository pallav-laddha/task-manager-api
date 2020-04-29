const sgMail =  require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
    to: email,
    from: 'pladdha.laddha@gmail.com',
    subject: 'Thanks for being part of the journey',
    text:  `Hello ${name}! Welcome aboard`
})
}

const sendCancellationEmail = (email, name) =>{
    sgMail.send({
    to: email,
    from: 'pladdha.laddha@gmail.com',
    subject: 'Thanks for being part of the journey',
    text:  `Hello ${name}! Would you like to tell why you cancelled`
})
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}