import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";

const icons = [
  <BsTelephoneFill />,
  <HiOutlineLocationMarker />,
  <HiOutlineMail />,
];

const contacts = [
  {
    icon: icons[0],
    contact: "Phone",
    details: "+44 0190 3930 455",
  },
  {
    icon: icons[1],
    contact: "Address",
    details:
      "107 North Road, Fabric Community Building, Lancing, West Sussex, BN15 9BB",
  },
  {
    icon: icons[2],
    contact: "Email Address",
    details: "info@lqshealthcareservices.co.uk",
  },
];

export default contacts;
