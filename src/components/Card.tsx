// import Card from './Card'

// const workItems = [
//     {projectName: "TL;DR", whatIDid: "", projectDescription: ""},
//     {name: "Work", linkTo: ""},
//     {name: "Learning", linkTo: ""},
//     {name: "Life", linkTo: ""}
// ]
import Image from "next/image";

interface CardProps {
  title: string;
  subtext: string;
  image: string;
  url: string;
  list: { arg1: string; arg2: string; arg3: string }[];
  color: string;
  tag?: string;
}

//props
function Card(props: CardProps) {
  return (
    <div
      className=" bg-white flex flex-col    md:w-80 md:h-96 overflow-hidden  border border-[4px] hover:border-[6px]"
      id="work"
      style={{ borderColor: props.color }}
    >
      {/* <Card></Card> */}
      <div className="relative w-80 h-48">
        <Image
          src={props.image}
          alt={props.title}
          fill
          sizes="320px"
          className="object-cover"
        />
      </div>
      <div className="mx-3 my-1 flex flex-col ">
        <span>
          <a className="text-lg text-black" href={props.url}>
            {props.title}
          </a>{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-pink-500 uppercase text-white text-xs">
            {" "}
            {props.tag}
          </span>
        </span>
        <span className="text-xs text-black ">{props.subtext}</span>
        {props.list.map((item) => (
          <>
            <span
              key={item.arg1}
              className="text-black font-bold cursor-pointer text-sm"
            >
              {item.arg1}
            </span>
            <span
              key={item.arg1}
              className="pl-3 text-black cursor-pointer text-base"
            >
              {item.arg2}
            </span>
          </>
        ))}
      </div>
    </div>
  );
}

export default Card;
