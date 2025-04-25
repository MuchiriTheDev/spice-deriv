import { ChevronDown } from "lucide-react";

export default function FAQComponent() {
    const questions = [
        {
            question: "What is Spicederiv?",
            answer:
                "Spicederiv is a platform that allows you to create and run trading bots on the Deriv platform. It provides a user-friendly interface and various tools to help you automate your trading strategies.",
        },
        {
            question: "How do I create a trading bot?",
            answer:
                "To create a trading bot, you need to sign up for an account on Spicederiv. Once you have an account, you can use the bot builder to create your own trading bot by selecting indicators, strategies, and other parameters.",
        },
        {
            question: "Can I use my own strategies?",
            answer:
                "Yes, you can use your own trading strategies by customizing the bot settings in the bot builder. You can also import existing strategies from other platforms.",
        },
        {
            question: "Is there a fee to use Spicederiv?",
            answer:
                "Spicederiv offers a free plan with limited features. For advanced features and unlimited access, you can subscribe to one of our premium plans.",
        },
        {
            question: "How do I get support?",
            answer:
                "If you need support, you can contact our support team through the help center on our website. We also have a community forum where you can ask questions and share tips with other users.",
        },
    ];

    return (
        <div className="faq-component p-6 bg-card rounded-lg shadow-md w-full mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-primary">
                Frequently Asked Questions
            </h2>
            <ul className="space-y-6">
                {questions.map((item, index) => (
                    <li
                        key={index}
                        className="border-b border-muted pb-4 flex items-start space-x-4"
                    >
                        <div className="flex-shrink-0">
                            <ChevronDown className="text-primary w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-foreground">
                                {item.question}
                            </h3>
                            <p className="text-muted-foreground mt-2">{item.answer}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}