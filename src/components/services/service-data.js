import { RxExternalLink } from "react-icons/rx";

const linkText = ["Learn more", <RxExternalLink />];

const serviceCard = [
  {
    title: "Home Care Support",
    description:
      "For individuals facing memory challenges, our memory care program provides a secure and nurturing environment. Our specialised team is trained to provide compassionate support and engage residents in meaningful activities that promote cognitive function and emotional well-being.",
    url: "/",
    link: linkText,
  },
  {
    title: "Personalized Care Planning",
    description:
      "Each resident at LQS receives a personalised care plan developed in collaboration with them and their families.",
    url: "/",
    link: ["Learn more", <RxExternalLink />],
  },
  {
    title: "Dementia Care",
    description:
      "For individuals facing memory challenges, our memory care program provides a secure and nurturing environment.",
    url: "/",
    link: ["Learn more", <RxExternalLink />],
  },
  {
    title: "Assisted Living",
    description:
      "At LQS HealthCare Services Ltd, we are committed to offering a comprehensive range of care services to meet the unique needs of our residents. Our dedicated team of caregivers and healthcare professionals work tirelessly to ensure the well-being, comfort, and happiness of every individual entrusted to our care.",
    url: "/",
    link: ["Learn more", <RxExternalLink />],
  },
  {
    title: "Skilled Nursing Care",
    description:
      "Our skilled nursing services are provided by experienced and licensed nurses who are available 24/7.",
    url: "/",
    link: ["Learn more", <RxExternalLink />],
  },
];

export default serviceCard;
export { linkText };
