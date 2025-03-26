// "use client";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
//   Button,
//   Card,
// } from "@relume_io/relume-ui";
// import React from "react";
// import { RxPlus } from "react-icons/rx";

// export function Faq4() {
//   return (
//     <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
//       <div className="container max-w-lg">
//         <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
//           <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
//             FAQs
//           </h2>
//           <p className="md:text-md">
//             Here are some common questions we receive from our users about our
//             services.
//           </p>
//         </div>
//         <Accordion
//           type="multiple"
//           className="grid items-start justify-stretch gap-4"
//         >
//           <Card>
//             <AccordionItem value="item-0" className="border-none px-5 md:px-6">
//               <AccordionTrigger
//                 icon={
//                   <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
//                 }
//                 className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
//               >
//                 How does it work?
//               </AccordionTrigger>
//               <AccordionContent className="md:pb-6">
//                 Our platform connects EV owners with hosts who have chargers
//                 available. Users can easily book a charging spot at a host's
//                 location. It's a simple and efficient way to charge your EV.
//               </AccordionContent>
//             </AccordionItem>
//           </Card>
//           <Card>
//             <AccordionItem value="item-1" className="border-none px-5 md:px-6">
//               <AccordionTrigger
//                 icon={
//                   <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
//                 }
//                 className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
//               >
//                 Is it safe?
//               </AccordionTrigger>
//               <AccordionContent className="md:pb-6">
//                 Yes, safety is our priority. All hosts are vetted, and we ensure
//                 that the charging equipment is in good condition. Additionally,
//                 user reviews help maintain a trustworthy environment.
//               </AccordionContent>
//             </AccordionItem>
//           </Card>
//           <Card>
//             <AccordionItem value="item-2" className="border-none px-5 md:px-6">
//               <AccordionTrigger
//                 icon={
//                   <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
//                 }
//                 className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
//               >
//                 What are the costs?
//               </AccordionTrigger>
//               <AccordionContent className="md:pb-6">
//                 Costs vary based on the host and location. Each listing will
//                 display the price per hour for charging. You can also find
//                 special offers and discounts from time to time.
//               </AccordionContent>
//             </AccordionItem>
//           </Card>
//           <Card>
//             <AccordionItem value="item-3" className="border-none px-5 md:px-6">
//               <AccordionTrigger
//                 icon={
//                   <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
//                 }
//                 className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
//               >
//                 Can I cancel bookings?
//               </AccordionTrigger>
//               <AccordionContent className="md:pb-6">
//                 Yes, you can cancel your booking according to our cancellation
//                 policy. Make sure to check the specific terms for each host. We
//                 aim to provide flexibility to our users.
//               </AccordionContent>
//             </AccordionItem>
//           </Card>
//           <Card>
//             <AccordionItem value="item-4" className="border-none px-5 md:px-6">
//               <AccordionTrigger
//                 icon={
//                   <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
//                 }
//                 className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
//               >
//                 How to contact support?
//               </AccordionTrigger>
//               <AccordionContent className="md:pb-6">
//                 You can reach our support team via the contact form on our
//                 website. We strive to respond promptly to all inquiries. Your
//                 satisfaction is our goal.
//               </AccordionContent>
//             </AccordionItem>
//           </Card>
//         </Accordion>
//         <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
//           <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
//             Still have questions?
//           </h4>
//           <p className="md:text-md">We're here to help you!</p>
//           <div className="mt-6 md:mt-8">
//             <Button title="Contact" variant="secondary">
//               Contact
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  Button,
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from "@relume_io/relume-ui";
import { RxPlus } from "react-icons/rx";
import React from "react";

const Faq4 = (props) => {
  const { heading, description, questions, footerHeading, footerDescription, button } = {
    ...Faq4Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <Accordion type="multiple" className="grid items-start justify-stretch gap-4">
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border-primary px-5 md:px-6"
            >
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
              >
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">{question.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {footerHeading}
          </h4>
          <p className="md:text-md">{footerDescription}</p>
          <div className="mt-6 md:mt-8">
            <Button {...button}>{button.title}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Faq4Defaults = {
  heading: "FAQs",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  questions: [
    {
      title: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
  ],
  footerHeading: "Still have questions?",
  footerDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  button: {
    title: "Contact",
    variant: "secondary",
  },
};

export { Faq4, Faq4Defaults };
