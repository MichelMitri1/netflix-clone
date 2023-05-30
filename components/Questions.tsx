import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";
import questionStyles from "../styles/Questions.module.css";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/router";

function Questions({ user }: any) {
  const emailRef = useRef("") as unknown as MutableRefObject<HTMLInputElement>;
  const router = useRouter();
  const [answerOpened, setAnswerOpened]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false);
  const [loading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false);

  const answers: {
    id: number;
    answerOpened: boolean;
    question: string;
    answer: string;
  }[] = [
    {
      id: 1,
      answerOpened: false,
      question: "What is Netflix",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      id: 2,
      answerOpened: false,
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD7.99 to USD11.99 a month. No extra costs, no contracts.",
    },
    {
      id: 3,
      answerOpened: false,
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      id: 4,
      answerOpened: false,
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees start or stop your account anytime.",
    },
    {
      id: 5,
      answerOpened: false,
      question: "What can I watch on Netflix",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      id: 6,
      answerOpened: false,
      question: "Is Netflix good for kids?",
      answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
    },
  ];

  function openAnswer(answer: any): void {
    if (answerOpened) {
      setAnswerOpened(false);
      answer.answerOpened = answerOpened;
      console.log(
        "answer opened: " +
          answerOpened +
          "           " +
          "mapped answer opened: " +
          answer.answerOpened
      );
    } else if (!answerOpened) {
      setAnswerOpened(true);
      answer.answerOpened = answerOpened;
      console.log(
        "answer opened: " +
          answerOpened +
          "           " +
          "mapped answer opened " +
          answer.answerOpened
      );
    }
    console.log(answer.answerOpened);
  }

  function enterEmail(e: any): void {
    e.preventDefault();
    if (!emailRef.current.value) {
      return;
    }
    console.log("wefrenui");

    setLoading(true);
    console.log(emailRef.current.value);
    router.push("/setupOne");
  }

  return (
    <div className={questionStyles.questions__container}>
      <h1 className={questionStyles.questions__title}>
        Frequently Asked Questions
      </h1>
      <div className={questionStyles.questions__wrapper}>
        {answers.map((answer, index) => (
          <div key={index}>
            <div
              className={questionStyles.questions__row}
              onClick={() => openAnswer(answer)}
            >
              <h2 className={questionStyles.question}>{answer.question}</h2>
              <div className={questionStyles.icon}>
                <AddIcon fontSize="large" />
              </div>
            </div>
            {answer.answerOpened ? (
              <>
                <div className={questionStyles.answer}>{answer.answer}</div>
              </>
            ) : null}
          </div>
        ))}
      </div>
      <div className={questionStyles.questions__loginWrapper}></div>
      <div className={questionStyles.questions__signupWrapper}>
        {!user ? (
          <>
            <p className={questionStyles.login__para}>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <form
              action=""
              onSubmit={(e) => enterEmail(e)}
              className={questionStyles.questions__signupRow}
            >
              <input
                type="email"
                className={questionStyles.questions__signupInput}
                placeholder="Email address"
                ref={emailRef}
              />
              {!loading ? (
                <button className={questionStyles.questions__signupButton}>
                  Get Started <ArrowForwardIosIcon />
                </button>
              ) : (
                <button
                  className={questionStyles.questions__signupButton}
                  style={{
                    opacity: "0.6",
                  }}
                >
                  <div
                    className={questionStyles.questions__loadingButton}
                  ></div>
                </button>
              )}
            </form>
          </>
        ) : (
          <button
            className={questionStyles.questions__signupButton}
            onClick={() => router.push("/setupTwo")}
            style={{
              width: "250px",
            }}
          >
            Finish Sign Up <ArrowForwardIosIcon />
          </button>
        )}
      </div>
    </div>
  );
}

export default Questions;
