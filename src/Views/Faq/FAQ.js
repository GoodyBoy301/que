import classes from "./Faq.module.css";
import Faqlist from "./Faqlist";
import { Right } from "../../modules/icons";

export const faqs = [
  {
    id: 1,
    question: "What is Que?",
    answer:
      "Que is a netflix clone. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas nam quasi. Dolorem, molestiae nobis vero autem saepe suscipit dolorum obcaecati excepturi, qui sint possimus? Itaque quaerat suscipit quod facere.",
    shown: false,
  },
  {
    id: 2,
    question: "How much does que cost?",
    answer:
      "Que cost nothing. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas nam quasi. Dolorem, molestiae nobis vero autem saepe suscipit dolorum obcaecati excepturi, qui sint possimus? Itaque quaerat suscipit quod facere.",
    shown: false,
  },
  {
    id: 3,
    question: "Where can i watch?",
    answer:
      "You can watch on your tv amd mobile device. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas nam quasi. Dolorem, molestiae nobis vero autem saepe suscipit dolorum obcaecati excepturi, qui sint possimus? Itaque quaerat suscipit quod facere.",
    shown: false,
  },
  {
    id: 4,
    question: "How do i cancel?",
    answer:
      "You cannot cancel. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas nam quasi. Dolorem, molestiae nobis vero autem saepe suscipit dolorum obcaecati excepturi, qui sint possimus? Itaque quaerat suscipit quod facere.",
    shown: false,
  },
  {
    id: 5,
    question: "What can I watch on Que?",
    answer:
      "Watch movies Tv Shows and season movies. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas nam quasi. Dolorem, molestiae nobis vero autem saepe suscipit dolorum obcaecati excepturi, qui sint possimus? Itaque quaerat suscipit quod facere.",
    shown: false,
  },
  {
    id: 6,
    question: "is Que Good For Kids?",
    answer:
      "Yes Que IS GOOD FOR KIDS. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas nam quasi. Dolorem, molestiae nobis vero autem saepe suscipit dolorum obcaecati excepturi, qui sint possimus? Itaque quaerat suscipit quod facere.",
    shown: false,
  },
];

const FAQ = () => {
  const faq = faqs.map((faq) => (
    <Faqlist
      key={faq.id}
      question={faq.question}
      answer={faq.answer}
      shown={faq.shown}
    />
  ));

  return (
    <section className={classes.grid}>
      <h2>Frequently asked questions</h2>
      {faq}
      <p>
        Ready to watch? Enter your email to create or restart your membership
      </p>
      <form action="">
        <input type="email" name="user_email" placeholder="Email Address" />
        <button>
          <span>Get Started</span>
          <Right size={24} />
        </button>
      </form>
    </section>
  );
};
export default FAQ;
