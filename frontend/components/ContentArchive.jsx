import ContentGrid from "./ContentGrid";

export default function ContentArchive() {
  const items = [
    {
      id: 1,
      title: "First Content",
      description: "This is the first content",
      tags: ["first", "content"],
    },
    {
      id: 2,
      title: "Bjørn laver den dumme",
      description: "Ehh jeg kan ikke tro han kunne gøre det",
      tags: ["second", "content"],
      actions: [
        {
          label: "View",
          href: "/content/2",
          type: "primary",
        },
      ],
    },
    {
      id: 3,
      title: "Second Content",
      description: "This is the second content",
      tags: ["second", "content"],
    },
  ];

  return (
    <>
      <div className="w-full flex justify-between">
        <h2>Content Archive</h2>
        <p>Find everything from the boys here.</p>
      </div>
      <ContentGrid items={items} />
    </>
  );
}
