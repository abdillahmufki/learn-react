import Hero from "./Hero";
import CardDisplay from "./CardDisplay";
import card5 from "./../assets/card5.jpg";
import card7 from "./../assets/card7.jpg";
import card6 from "./../assets/card6.jpg";
import CardCoding from "./CardCoding";
import card1 from "./../assets/card1.jpg";

const MainContent = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <div className="row justify-content-center p-2">
          <div className="col-12 text-center my-5">
            <h1 className="fw-bold">Coding With Me</h1>
          </div>

          <div className="row ps-5">
            <div className="col-lg-4 col-12">
              <CardDisplay
                image={card5}
                title="How Coding?"
                paragraph="Learning to code is easier than you may think (even if you’re brand new). Start Today! Choose from in-demand programming languages and courses based on your unique goals. Choose Your Skill Path. Collaborative Learning. Upgrade Your Career Today."
              />
            </div>
            <div className="col-lg-4 col-12">
              <CardDisplay
                image={card7}
                title="Why Coding?"
                paragraph="Coding is also important for students because it helps to increase confidence. Because coding empowers students with applicable skills such as creativity, problem-solving and persistence, it also empowers them to more confidently face a variety of challenges and opportunities."
              />
            </div>
            <div className="col-lg-4 col-12">
              <CardDisplay
                image={card6}
                title="What is Coding?"
                paragraph="What is coding? Coding, sometimes called computer programming, is how we communicate with computers. Code tells a computer what actions to take, and writing code is like creating a set of instructions."
              />
            </div>

            <div className="row text-center">
              <div className="col-12 my-5">
                <h1 className="fw-cold">What can Coding do?</h1>
              </div>
              <div className="col-12 my-5 my-3">
                <CardCoding
                  image={card1}
                  deskripsi="Coding creates a set of instructions for computers to follow. These instructions determine what actions a computer can and cannot take. Coding allows programmers to build programs, such as websites and apps. Computer programmers can also tell computers how to process data in better, faster ways."
                />
              </div>
              <div className="col-12 my-5 my-3">
                <CardCoding
                  image={card1}
                  deskripsi="Coding creates a set of instructions for computers to follow. These instructions determine what actions a computer can and cannot take. Coding allows programmers to build programs, such as websites and apps. Computer programmers can also tell computers how to process data in better, faster ways."
                />
              </div>
              <div className="col-12 my-5 my-3">
                <CardCoding
                  image={card1}
                  deskripsi="Coding creates a set of instructions for computers to follow. These instructions determine what actions a computer can and cannot take. Coding allows programmers to build programs, such as websites and apps. Computer programmers can also tell computers how to process data in better, faster ways."
                />
              </div>
              <div className="col-12 my-5 my-3">
                <CardCoding
                  image={card1}
                  deskripsi="Coding creates a set of instructions for computers to follow. These instructions determine what actions a computer can and cannot take. Coding allows programmers to build programs, such as websites and apps. Computer programmers can also tell computers how to process data in better, faster ways."
                />
              </div>
              <div className="col-12 my-5 my-3">
                <CardCoding
                  image={card1}
                  deskripsi="Coding creates a set of instructions for computers to follow. These instructions determine what actions a computer can and cannot take. Coding allows programmers to build programs, such as websites and apps. Computer programmers can also tell computers how to process data in better, faster ways."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
