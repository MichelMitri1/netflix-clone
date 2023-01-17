import setupPassStyles from "../styles/SetupPass.module.css";
import { collection, addDoc } from "firebase/firestore";
import React, { MutableRefObject, useRef } from "react";
import { NextRouter, useRouter } from "next/router";
import NavbarSetup from "../components/NavbarSetup";
import FooterSetup from "../components/FooterSetup";
import { auth, db } from "../components/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";

function SetupPass() {
  // const [docs, setDocs]: any = useState([]);
  const emailRef = useRef() as unknown as MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as unknown as MutableRefObject<HTMLInputElement>;
  const router: NextRouter = useRouter();
  const user: User | null = auth.currentUser;

  // async function getAllUsers(): Promise<void> {
  //   const q: Query<DocumentData> = query(collection(db, "userInfo"));
  //   onSnapshot(q, (snapshot: any) =>
  //     setDocs(
  //       snapshot.docs.map((elem: any) => ({ ...elem.data(), id: elem.id }))
  //     )
  //   );
  // }

  async function rateMovie(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );

      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      router.push("/setupTwo");
      if (user) {
        await addDoc(collection(db, "userInfo"), {
          email: emailRef.current.value,
          uid: user.uid,
        });
      }
    } catch (error: any) {
      if (error) {
        router.push("/setupPass");
      } else {
        router.push("/setupTwo");
      }
      alert(error);
    }
  }

  // if (docs[0] === undefined) {
  //   null
  // }else{
  //   console.log(docs[0].email);
  //   const found = docs.find(
  //     (doc: any) => doc[0].email === emailRef.current.value
  //   );
  //   console.log(found);
  //   codedId = found.id;
  // }

  // const ratingRef = doc(db, "ratings", codedId);
  // const newRating = {
  //   email: emailRef.current.value,
  //   password: passwordRef.current.value,
  // };
  // await updateDoc(ratingRef, newRating);

  // useEffect(() => {
  //   getAllUsers();
  // }, []);

  return (
    <div className={setupPassStyles.setupPass__container}>
      <NavbarSetup />
      <form action="" onSubmit={(e) => rateMovie(e)}>
        <div className={setupPassStyles.setupPass__wrapper}>
          <p>
            STEP <span className={setupPassStyles.setupPass__steps}>1</span> OF{" "}
            <span className={setupPassStyles.setupPass__steps}>3</span>
          </p>
          <h1 className={setupPassStyles.setupPass__header}>
            Create a password to start your membership
          </h1>
          <p
            style={{
              fontSize: "18px",
            }}
          >
            Just a few more steps and you're done!
          </p>
          <p
            style={{
              fontSize: "18px",
            }}
          >
            We hate papwerwork, too.
          </p>
          <input
            type="email"
            placeholder="Email"
            className={setupPassStyles.setupPass__emailInput}
            ref={emailRef}
          />
          <input
            type="password"
            placeholder="Add a password"
            className={setupPassStyles.setupPass__passwordInput}
            ref={passwordRef}
          />
          <div className={setupPassStyles.setupPass__specialOffers}>
            <input
              type="checkbox"
              className={setupPassStyles.setupPass__checkbox}
            />
            <p>Please do not email me Netflix special offers.</p>
          </div>

          <button
            className={setupPassStyles.setupPass__nextButton}
            // onClick={() => rateMovie()}
          >
            Next
          </button>
        </div>
      </form>
      <FooterSetup />
    </div>
  );
}

export default SetupPass;

