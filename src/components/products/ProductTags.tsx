interface productTagsProps {
  tags: string[];
}

function ProductTags({ tags }: productTagsProps) {
  if (tags.length === 0) {
    return null; // Return null if there are no tags
  }
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-secondary text-white px-3 py-1 text-sm font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default ProductTags;
