export default {
  name: "post",
  type: "document",
  title: "Post",
  fieldsets: [
    {
      name: "seo",
      title: "SEO",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "string",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
    },
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      fieldset: "seo",
      description:
        "Every URL in your site should have a unique Meta Title, ideally less than 60 characters long.",
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "string",
      fieldset: "seo",
      description:
        "Every URL in your site should have a unique Meta Description, ideally less than 160 characters long.",
    },
    {
      name: "socialImage",
      title: "Social Image",
      type: "image",
      fieldset: "seo",
    },
  ],
};
