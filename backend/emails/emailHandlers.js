import { transporter } from "../lib/nodemailer.js";
import {
	createCommentNotificationEmailTemplate,
	createConnectionAcceptedEmailTemplate,
	createWelcomeEmailTemplate,
} from "./emailTemplates.js";

export const sendWelcomeEmail = async (email, name, profileUrl) => {
	const recipient = [{ email }];

	try {
		
		const response = await transporter.sendMail({
			from: `"LinkedIn by Rishab Lath" <${process.env.SENDER_MAIL}>`,
			to: recipient[0].email,
			subject: "Welcome to LinkedIn Clone by Rishab Lath",
			html: createWelcomeEmailTemplate(name, profileUrl),
			category: "welcome",
		});

		console.log("Welcome Email sent succesffully", response);
	} catch (error) {
		console.log(error);
	}
};

export const sendCommentNotificationEmail = async (
	recipientEmail,
	recipientName,
	commenterName,
	postUrl,
	commentContent
) => {
	const recipient = [{ email: recipientEmail }];
    
	try {	
		const response = await transporter.sendMail({
			from: `"LinkedIn by Rishab Lath" <${process.env.SENDER_MAIL}>`,
			to: recipient[0].email,
			subject: "New Comment on Your Post",
			html: createCommentNotificationEmailTemplate(recipientName, commenterName, postUrl, commentContent),
			category: "comment_notification",
		});
		console.log("Comment Notification Email sent successfully", response);
	} catch (error) {
		console.log(error);
	}
};

export const sendConnectionAcceptedEmail = async (senderEmail, senderName, recipientName, profileUrl) => {
	const recipient = [{ email: senderEmail }];

	try {
		
		const response = await transporter.sendMail({
			from: `"LinkedIn by Rishab Lath" <${process.env.SENDER_MAIL}>`,
			to: recipient[0].email,
			subject: `${recipientName} accepted your connection request`,
			html: createConnectionAcceptedEmailTemplate(senderName, recipientName, profileUrl),
			category: "connection_accepted",
		});
	} catch (error) {
		console.log(error);
	}
};

