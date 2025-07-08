'use server';

import nodemailer from 'nodemailer';


const transporterConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "transpacific443@gmail.com",
    pass: "nervcurctzogzwoe",
  },
};


export async function sendEmail({ to, subject, html }) {
  const transporter = nodemailer.createTransport(transporterConfig);
  
  try {
    const info = await transporter.sendMail({
      from: "transpacific443@gmail.com",
      to,
      subject,
      html,
    });

    console.log("Email sent successfully:", info.messageId);
    
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error: error.message };
  }
}


