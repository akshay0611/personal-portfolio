import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

async function sendEmail({
	fromName = 'Akshay Kumar',
	fromEmail = 'akshay.allen26200@gmail.com',
	toName = 'Akshay Kumar',
	toEmail = 'akshay.allen26200@gmail.com',
	subject = "New Message from Akshay Kumar's Portfolio",
	textPart = "New Message from Akshay Kumar's Portfolio. Couldn't load message.",
	HTMLPart = "New Message from Akshay Kumar's Portfolio",
}: {
	fromName?: string;
	fromEmail?: string;
	toName?: string;
	toEmail?: string;
	subject?: string;
	textPart?: string;
	HTMLPart?: string;
}) {
	const username = process.env.MAILJET_USERNAME || '';
	const password = process.env.MAILJET_PASSWORD || '';

	try {
		const response = await axios.post(
			'https://api.mailjet.com/v3.1/send',
			{
				Messages: [
					{
						From: {
							Email: fromEmail,
							Name: fromName,
						},
						To: [
							{
								Email: toEmail,
								Name: toName,
							},
						],
						Subject: subject,
						TextPart: textPart,
						HTMLPart: HTMLPart,
						CustomID: 'AppGettingStartedTest',
					},
				],
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
				auth: {
					username: username,
					password: password,
				},
			}
		);
		return response;
	} catch (error) {
		throw error;
	}
}

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const {
			name = 'Anonymous',
			email = 'N/A',
			message,
		} = body;

		if (!message) {
			return NextResponse.json(
				{ message: 'Message content is required.' },
				{ status: 400 }
			);
		}

		const mailContentText =
			'Name: ' +
			name +
			'\nEmail: ' +
			email +
			'\nMessage: \n' +
			message;
		const mailContentHTML = `
			<h1>New Message from Akshay Kumar's Portfolio</h1>
			<p><b>Name:</b> ${name}</p>
			<p><b>Email:</b> ${email}</p>
			<h3>Message:</h3>
			<p>${message}</p>
		`;
		const mailTo = process.env.EMAIL_TO || 'nimishjain100701@gmail.com';
		const mailSubject = 'Portfolio Contact Form: Message from ' + name;

		await sendEmail({
			fromName: 'Akshay Kumar',
			fromEmail: 'nimishjain1007@gmail.com',
			toName: 'Akshay Kumar',
			toEmail: mailTo,
			subject: mailSubject,
			textPart: mailContentText,
			HTMLPart: mailContentHTML,
		});

		return NextResponse.json({ message: 'Message sent successfully.' }, { status: 200 });
	} catch (error) {
		console.error('Error sending message:', error);
		return NextResponse.json({ message: 'Error sending message.' }, { status: 400 });
	}
}
