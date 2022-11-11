import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="mx-52 my-28">
      <div>
        <h1 className="text-2xl mt-6 mb-5 text-green-500 font-bold">
          Difference between SQL and NoSQL
        </h1>
        <p>
          {" "}
          SQL is the programming language used to interface with relational
          databases. (Relational databases model data as records in rows and
          tables with logical links between them). NoSQL is a class of DBMs that
          are non-relational and generally do not use SQL.{" "}
        </p>
      </div>
      <div>
        <h1 className="text-2xl mt-6 mb-5 text-green-500 font-bold">
          {" "}
          What is JWT, and how does it work?
        </h1>
        <p>
          JWT is Json Web Token. Although JWTs can be encrypted to also provide
          secrecy between parties, we will focus on signed tokens. Signed tokens
          can verify the integrity of the claims contained within it, while
          encrypted tokens hide those claims from other parties. When tokens are
          signed using public/private key pairs, the signature also certifies
          that only the party holding the private key is the one that signed it.
        </p>
      </div>
      <div>
        <h1 className="text-2xl mt-6 mb-5 text-green-500 font-bold">
          What is the difference between javascript and NodeJS?
        </h1>
        <p>
          . JavaScript is a simple programming language that can be used with
          any browser that has the JavaScript Engine installed. Node.js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language. It requires libraries that can be
          conveniently accessed from JavaScript programming to be more helpful.
        </p>
      </div>
      <div>
        <h1 className="text-2xl mt-6 mb-5 text-green-500 font-bold">
          How does NodeJS handle multiple requests at the same time?
        </h1>
        <p>
          We know NodeJS application is single-threaded. Say, if processing
          involves request A that takes 10 seconds, it does not mean that a
          request which comes after this request needs to wait 10 seconds to
          start processing because NodeJS event loops are only single-threaded.
          The entire NodeJS architecture is not single-threaded. How NodeJS
          handle multiple client requests? NodeJS receives multiple client
          requests and places them into EventQueue. NodeJS is built with the
          concept of event-driven architecture. NodeJS has its own EventLoop
          which is an infinite loop that receives requests and processes them.
          EventLoop is the listener for the EventQueue.{" "}
        </p>
      </div>
    </div>
  );
};

export default Blogs;
