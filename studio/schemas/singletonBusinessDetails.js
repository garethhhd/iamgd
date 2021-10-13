export default {
  title: "Business",
  name: "business",
  type: "document",
  fieldsets: [
    {
      name: "social",
      title: "Social media Links",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
    },
    {
      name: "address",
      title: "Address",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
      },
    },
  ],
  // __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "contactNumber",
      title: "Contact Number",
      type: "number",
    },
    {
      name: "street",
      type: "string",
      title: "Street name",
      fieldset: "address",
    },
    {
      name: "streetNo",
      type: "string",
      title: "Street number",
      fieldset: "address",
    },
    { name: "city", type: "string", title: "City", fieldset: "address" },
    { name: "postcode", type: "string", title: "Poscode", fieldset: "address" },

    {
      title: "Twitter",
      name: "twitter",
      type: "url",
      fieldset: "social",
    },
    {
      title: "Instagram",
      name: "instagram",
      type: "url",
      fieldset: "social",
    },
    {
      title: "Facebook",
      name: "facebook",
      type: "url",
      fieldset: "social",
    },
    {
      title: "LinkedIn",
      name: "linkedIn",
      type: "url",
      fieldset: "social",
    },
    {
      title: "Youtube",
      name: "youtube",
      type: "url",
      fieldset: "social",
    },
  ],
};
