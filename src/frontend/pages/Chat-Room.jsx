import React from "react";
import Header from "../components/Header";

const chatMessages = [
    {
        id: 1,
        name: "Riski Arya Putra",
        timestamp: "24/12/2025, 16:10",
        message: "Hello everyone! Thanks for visiting my website. Please leave whatever you like to say, like suggestions, appreciation, question or anything here!",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_R_vlnUz9UhylMPCccagw4dMqhbs4UMPAA&s",
        isOwner: true
    },
    {
        id: 2,
        name: "Ahmad Suhendra",
        timestamp: "24/12/2025, 16:15",
        message: "Hello",
        avatar: "https://ui-avatars.com/api/?name=Ahmad+Suhendra&background=f43f5e&color=fff",
        isOwner: false
    },
    {
        id: 3,
        name: "Hanifan Pangabekti",
        timestamp: "24/12/2025, 16:20",
        message: "This is really awesome!",
        avatar: "https://ui-avatars.com/api/?name=Hanifan+Pangabekti&background=3b82f6&color=fff",
        isOwner: false
    },
    {
        id: 4,
        name: "Riski Arya Putra",
        timestamp: "24/12/2025, 16:25",
        message: "Thank you so much! Happy to share and hope it's useful",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_R_vlnUz9UhylMPCccagw4dMqhbs4UMPAA&s",
        isOwner: true
    },
    {
        id: 5,
        name: "Muhammad Rizki Syahputra",
        timestamp: "27/12/2025, 08:01",
        message: "Cool bro",
        avatar: "https://ui-avatars.com/api/?name=Muhammad+Rizki&background=10b981&color=fff",
        isOwner: false
    },
    {
        id: 6,
        name: "By ILANN",
        timestamp: "27/12/2025, 21:30",
        message: "Bro, how long did it take you to build this website from start to first publish?",
        avatar: "https://ui-avatars.com/api/?name=By+ILANN&background=f59e0b&color=fff",
        isOwner: false
    },
    {
        id: 7,
        name: "Riski Arya Putra",
        timestamp: "27/12/2025, 22:15",
        message: "Around 2-3 weeks for the first version. But I keep developing it until now. The important thing is to stay consistent and keep improving!",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_R_vlnUz9UhylMPCccagw4dMqhbs4UMPAA&s",
        isOwner: true
    },
    {
        id: 8,
        name: "Discord Customer",
        timestamp: "28/12/2025, 16:32",
        message: "Can I use this as reference?",
        avatar: "https://ui-avatars.com/api/?name=Discord+Customer&background=8b5cf6&color=fff",
        isOwner: false
    },
    {
        id: 9,
        name: "Riski Arya Putra",
        timestamp: "28/12/2025, 17:00",
        message: "Sure, but don't forget to give credit. And if possible, develop it further to make it even better",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_R_vlnUz9UhylMPCccagw4dMqhbs4UMPAA&s",
        isOwner: true
    },
];

function ChatRoom() {
    return (
        <div className="bg-white min-h-screen">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-x-3 items-start">
                    <Header />
                    <main className="flex-1 py-28 lg:py-12">
                        <div className="w-full">
                            <h1 className="text-[23px] font-bold tracking-tight leading-normal text-gray-800">
                                Chat Room
                            </h1>

                            <div className="mt-0.5 flex items-center gap-x-4 text-sm/6 font-medium leading-normal tracking-normal text-gray-500 border-b border-dashed pb-6 border-gray-300">
                                <span>Feel free to share your thoughts, suggestions, questions, or anything else!</span>                                
                            </div>

                            <div className="mt-6 space-y-6 h-[340px] overflow-y-auto px-0 lg:px-6 chat-container">
                                {chatMessages.map((chat) => (
                                    <div key={chat.id} className={`flex gap-x-3 group ${chat.isOwner ? 'flex-row-reverse' : ''}`}>
                                        <img src={chat.avatar} alt={chat.name} className="h-8 w-8 rounded-full flex-shrink-0" />
                                       
                                        <div className={`flex-1 flex flex-col ${chat.isOwner ? 'items-end' : 'items-start'}`}>
                                            <div className={`flex items-center gap-x-2 mb-1 ${chat.isOwner ? 'flex-row-reverse text-right' : ''}`}>
                                                <span className="text-sm font-semibold text-gray-800">{chat.name}</span>
                                                <span className="text-xs text-gray-500">{chat.timestamp}</span>
                                            </div>
                                            
                                            <div className={`flex items-center gap-x-2 ${chat.isOwner ? 'flex-row-reverse' : ''}`}>
                                                <div className={`${chat.isOwner ? 'bg-blue-500 text-white rounded-xl rounded-tr-none' : 'bg-gray-100 text-gray-800 rounded-xl rounded-tl-none'} px-3 py-2 inline-block max-w-full`}>
                                                    <p className="text-sm">{chat.message}</p>
                                                </div>
                                                
                                                <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-gray-100 rounded-full text-gray-400" title="Reply">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12v0" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 border-t border-gray-200 pt-6">
                                <p className="text-sm text-gray-600 text-center mb-4">
                                    Please sign in to join the conversation. Don't worry, your data is safe with us.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                    <button className="flex items-center justify-center gap-x-2 px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm/6 leading-normal tracking-wide font-semibold text-gray-700">
                                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                                            <path className="google-blue" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                            <path className="google-green" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                            <path className="google-yellow" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                            <path className="google-red" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                        </svg>
                                        <span>Sign in with google</span>
                                    </button>

                                    <button className="flex items-center justify-center gap-x-2 px-6 py-2.5 bg-gray-900 rounded-lg text-sm/6 leading-normal tracking-wide font-semibold text-white">
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                                        </svg>
                                        <span>Sign in with github</span>                                        
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default ChatRoom;