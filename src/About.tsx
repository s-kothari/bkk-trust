import React from "react";
import { useParams } from "react-router-dom";

// interface Params {
//   id: any;
// }

const AboutPage: React.FC = () => {
  //   const { id } = useParams();

  return (
    <div className="sm:mx-8 mx-4 h-[1000px]">
      <span>
        Kamlawati ji Kothari and her husband, Bhimraj ji Kothari, had a vision
        of helping to uplift and empower women. Although Bhimraj ji could not
        fulfil this desire due to ill health, Kamlawati ji was able to finally
        turn this shared dream into reality. Kamlawati ji is the Trustee and
        Director of BKK Trust, which, founded on the 15th of December 2010,
        works for the betterment of women, girls, and young children. We enable
        them to get a basic education and vocational training, through which
        they gain the confidence and skills to take up suitable work, and help
        in running their houses. In addition, the teaching staff at the
        organization, who were homemakers prior to their association, have felt
        a tremendous positive change in their lives, and receive great respect
        from their families and the society. We at BKK Trust feel extremely
        lucky to have such a warm-hearted mother-figure guiding us. Her help,
        commitment and generosity, have empowered us staff to support others in
        turn. Moreover, Kamla ji provides everyone with the basic staples of 5kg
        of flour, rice, lentils, gram flour, sugar and porridge every month; on
        special occasions such as festivals and birthdays, she distributes
        sweets. A special lunch is organized once a year in the memory of Shri
        Bhimraj ji Kothari. Sweaters, shawls and blankets are also given every
        winter. Apart from this, Kamla ji’s family and friends have also been
        inspired to contribute by donating computers, sewing machines or other
        useful articles, distributing food, and giving monetary donations on
        birthdays and anniversaries, in memory of their elders. The
        contributions of these supporters, alongside the management, teaching
        staff and students themselves, have allowed the institute to grow from
        two students to nearly 175. Even the surrounding area, which was
        considered rural ten years ago, has undergone dramatic development,
        largely due to the women of the institute. We are deeply invested in
        continuing our efforts to improve the quality of life of those around
        us.
      </span>

      {/* <p>ID: {id}</p> */}
    </div>
  );
};

export default AboutPage;
