import React from "react";
import { useParams } from "react-router-dom";
import Card from "./components/Card";

// interface Params {
//   id: any;
// }

const children_courses = [
  {
    title: "Technology",
    description:
      "A basic computer course is carried out at the organization which includes Microsoft Word, Excel, Power Point and Internet etc. Generous donors have given us several computers, which makes it an hands-on learning for the children. After this course, the children are better equipped in today’s digital age, and many have also been hired as receptionists in hospitals, schools and offices.",
    image: "",
    color: "",
  },
  {
    title: "English Language",
    description:
      "Another important skill in today’s world, we try to make them more comfortable and fluent in English conversation.    ",
    image: "",
    color: "",
  },
];

const ImpactPage: React.FC = () => {
  //   const { id } = useParams();

  return (
    <div className="sm:mx-8 mx-4 h-[1000px] mt-12">
      <div className="">
        motivation section
        <span>
          Bkk Trust recognizes that the children are the future, and therefore
          along with Women’s empowerment and education, works on helping today’s
          underprivileged youth rise. Boys upto the age of ….. are supported by
          the Trust, where as girls can continue for as long as they wish.
          Education A lot of school going children need a little support after
          school to reinforce their school lessons. The teachers at the Trust
          give them personal attention, help them with any difficulties they
          face in understanding their subjects, and answer their questions. This
          way, the children have a better grip of their studies, are able to
          score higher marks, and develop into confident individuals. There are
          several children who joined the institute from it’s day of inception,
          and are still coming in everyday .. and we feel proud to see how they
          have blossomed into confident young adults! When asked, they say that
          they never want to stop coming..!
        </span>
      </div>
      <div>Courses section</div>
      <div className="flex flex-row space-x-4">
        {children_courses.map((item) => (
          <Card
            title={item.title}
            subtext={item.description}
            url=""
            image={"/logo512.png"}
            color={"#aaaaaa"}
            list={[]}
            key={item.title}
          ></Card>
        ))}
      </div>

      {/* <p>ID: {id}</p> */}
    </div>
  );
};

export default ImpactPage;
