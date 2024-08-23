
import MeessageImage1 from '../assets/img/MessageProfile1.png'
import MeessageImage2 from '../assets/img/MessageProfile2.jpg'
import MeessageImage3 from '../assets/img/MessageProfile4.jpg'
import MeessageImage4 from '../assets/img/MessageProfile5.jpg'
import MeessageImage5 from '../assets/img/MessageProfile6.jpg'


const Messageslist = [
    {
        id: 1,
        name: 'Ahammed Alli',
        img: MeessageImage1,
        mText: 'Lorem ipsum dolor sit amet.',
        chatHistory: [
            { sender: 'Ahammed Alli', message: 'Hi there!', timestamp: '10:00 AM' },
            { sender: 'You', message: 'Hello!', timestamp: '10:02 AM' },
            { sender: 'Ahammed Alli', message: 'How have you been?', timestamp: '10:05 AM' },
            { sender: 'You', message: 'I\'ve been good, thanks! How about you?', timestamp: '10:07 AM' },
            { sender: 'Ahammed Alli', message: 'Doing well, just busy with work.', timestamp: '10:10 AM' },
            { sender: 'You', message: 'Same here, work never ends!', timestamp: '10:12 AM' },
        ]
    },
    {
        id: 2,
        name: 'Mark William',
        img: MeessageImage2,
        mText: 'Lorem ipsum dolor sit amet.',
        chatHistory: [
            { sender: 'Mark William', message: 'How are you?', timestamp: '11:00 AM' },
            { sender: 'You', message: 'I am fine, thanks! How about you?', timestamp: '11:05 AM' },
            { sender: 'Mark William', message: 'I\'m doing well.', timestamp: '11:08 AM' },
            { sender: 'You', message: 'Great to hear! Any plans for the weekend?', timestamp: '11:10 AM' },
            { sender: 'Mark William', message: 'Just relaxing. You?', timestamp: '11:15 AM' },
            { sender: 'You', message: 'Probably catching up on some projects.', timestamp: '11:20 AM' },
        ]
    },
    {
        id: 3,
        name: 'Ranvir Sing',
        img: MeessageImage3,
        mText: 'Lorem ipsum dolor sit amet.',
        chatHistory: [
            { sender: 'Ranvir Sing', message: 'Are you available for a meeting?', timestamp: '12:00 PM' },
            { sender: 'You', message: 'Yes, I am. When works for you?', timestamp: '12:10 PM' },
            { sender: 'Ranvir Sing', message: 'How about 2 PM?', timestamp: '12:15 PM' },
            { sender: 'You', message: 'Perfect. I\'ll send an invite.', timestamp: '12:20 PM' },
            { sender: 'Ranvir Sing', message: 'Thanks! Looking forward to it.', timestamp: '12:25 PM' },
            { sender: 'You', message: 'Same here. See you then.', timestamp: '12:30 PM' },
        ]
    },
    {
        id: 4,
        name: 'Happy Rose',
        img: MeessageImage4,
        mText: 'Lorem ipsum dolor sit amet.',
        chatHistory: [
            { sender: 'Happy Rose', message: 'Good morning!', timestamp: '09:00 AM' },
            { sender: 'You', message: 'Good morning to you too!', timestamp: '09:05 AM' },
            { sender: 'Happy Rose', message: 'Hope you have a great day!', timestamp: '09:10 AM' },
            { sender: 'You', message: 'Thank you, you too!', timestamp: '09:15 AM' },
            { sender: 'Happy Rose', message: 'Let\'s catch up later?', timestamp: '09:20 AM' },
            { sender: 'You', message: 'Sure, I\'ll call you in the afternoon.', timestamp: '09:25 AM' },
        ]
    },
    {
        id: 5,
        name: 'Angela Flower',
        img: MeessageImage5,
        mText: 'Lorem ipsum dolor sit amet.',
        chatHistory: [
            { sender: 'Angela Flower', message: 'Can you review my code?', timestamp: '01:00 PM' },
            { sender: 'You', message: 'Sure, I will take a look.', timestamp: '01:10 PM' },
            { sender: 'Angela Flower', message: 'Thanks! I really appreciate it.', timestamp: '01:15 PM' },
            { sender: 'You', message: 'No problem, happy to help.', timestamp: '01:20 PM' },
            { sender: 'Angela Flower', message: 'Got any feedback?', timestamp: '01:30 PM' },
            { sender: 'You', message: 'Yes, I\'ll send it over shortly.', timestamp: '01:35 PM' },
        ]
    },
];

export default Messageslist;


