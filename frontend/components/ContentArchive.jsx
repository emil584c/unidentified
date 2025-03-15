import ContentGrid from "./ContentGrid";

export default function ContentArchive() {
  const items = [
    {
      id: 1,
      title: "First Content",
      description: "This is the first content",
      tags: ["first", "content"],
      image: "/img/gaimg.jpg",
      actions: [
        {
          label: "View",
          href: "/content/2",
          type: "outline",
        },
      ],
    },
    {
      id: 2,
      title: "Bjørn laver den dumme",
      description: "Ehh jeg kan ikke tro han kunne gøre det",
      tags: ["second", "content"],
      image: "/img/gaimg.jpg",
      actions: [
        {
          label: "View",
          href: "/content/2",
          type: "outline",
        },
      ],
    },
    {
      id: 3,
      title: "Second Content",
      description: "This is the second content",
      tags: ["second", "content"],
      image: "/img/gaimg.jpg",
      actions: [
        {
          label: "View",
          href: "/content/2",
          type: "primary",
        },
      ],
    },
  ];

  return (
    <>
      <div className="w-full flex justify-between">
        <h2>The Content</h2>
      </div>
      <ContentGrid items={items} />
    </>
  );
}
