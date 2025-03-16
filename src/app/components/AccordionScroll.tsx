import { useState, useEffect, useRef } from "react";
import "./new.css";

interface AccordionItem {
  title: string;
  content: string;
}

const Accordion: React.FC = () => {
  // Array of accordion items
  const accordionData: AccordionItem[] = [
    {
      title: "Accordion Item 1",
      content: "This is the content for Accordion Item 1.",
    },
    {
      title: "Accordion Item 2",
      content: "This is the content for Accordion Item 2.",
    },
    {
      title: "Accordion Item 3",
      content: "This is the content for Accordion Item 3.",
    },
    {
      title: "Accordion Item 4",
      content: "This is the content for Accordion Item 4.",
    },
    {
      title: "Accordion Item 5",
      content: "This is the content for Accordion Item 5.",
    },
    {
      title: "Accordion Item 6",
      content:
        "This is the content for Ac This is the content for Ac his is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for Achis is the content for Ac This is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for AcThis is the content for Ac",
    },
    {
      title: "Accordion Item 7",
      content: "This is the content for Accordion Item 7.",
    },
    {
      title: "Accordion Item 8",
      content: "This is the content for Accordion Item 8.",
    },
    {
      title: "Accordion Item 9",
      content: "This is the content for Accordion Item 9.",
    },
    {
      title: "Accordion Item 10",
      content: "This is the content for Accordion Item 10.",
    },
    {
      title: "Accordion Item 11",
      content: "This is the content for Accordion Item 11.",
    },
    {
      title: "Accordion Item 12",
      content: "This is the content for Accordion Item 12.",
    },
    {
      title: "Accordion Item 13",
      content: "This is the content for Accordion Item 13.",
    },
    {
      title: "Accordion Item 14",
      content: "This is the content for Accordion Item 14.",
    },
    {
      title: "Accordion Item 15",
      content: "This is the content for Accordion Item 15.",
    },
    {
      title: "Accordion Item 16",
      content: "This is the content for Accordion Item 16.",
    },
    {
      title: "Accordion Item 17",
      content: "This is the content for Accordion Item 17.",
    },
    {
      title: "Accordion Item 18",
      content: "This is the content for Accordion Item 18.",
    },
    {
      title: "Accordion Item 19",
      content: "This is the content for Accordion Item 19.",
    },
    {
      title: "Accordion Item 20",
      content: "This is the content for Accordion Item 20.",
    },

    // Add more items as needed
  ];

  // Create a ref for each accordion item
  const accordionRefs = useRef<(HTMLElement | null)[]>([]);
  // State to track which accordion item is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    toggleAccordion(index);

    setOpenIndex(index);

    // Get the target item element
    const target = e.target as HTMLAnchorElement;
    const rect = target.getBoundingClientRect();

    // Check if the item is already in view
    const isInView =
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight);

    // If it's not in view before expanding, scroll to it
    if (!isInView) {
      setTimeout(() => {
        const top = target.getBoundingClientRect().top + window.scrollY;
        window.scroll({
          top: top - 100, // Adjust for header or other offsets
          behavior: "smooth",
        });
      }, 200);
    }

    // After expanding, check if the accordion content went out of view and scroll to it
    setTimeout(() => {
      const expandedRect = target.getBoundingClientRect();
      const isExpandedInView =
        expandedRect.top >= 0 &&
        expandedRect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight);

      // If it's still out of view after expanding, scroll to it
      if (!isExpandedInView) {
        const expandedTop = target.getBoundingClientRect().top + window.scrollY;
        window.scroll({
          top: expandedTop - 100, // Adjust for header or other offsets
          behavior: "smooth",
        });
      }
    }, 400); // Wait for the height change transition to complete before checking
  };
  const toggleAccordion = (index: number) => {
    // Toggle the open/close state of the accordion content
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <div className="space-y-4">
        {accordionData.map((item, index) => (
          <div key={index} className="accordion-panel">
            <h2 id={`panel${index + 1}-title`}>
              <button
                ref={(el) => {
                  accordionRefs.current[index] = el;
                }}
                onClick={(e) => handleClick(e, index)}
              >
                {item.title}
              </button>
            </h2>
            <div
              className="accordion-content"
              aria-hidden={openIndex !== index}
              id={`accordion${index + 1}-content`}
            >
              <div>
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
